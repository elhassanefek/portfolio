import React from "react";
import { useTheme } from "styled-components";
import { Arrow, Box, DiagramFrame, Region } from "./primitives";

/** Request path for POST /v1/transfers, plus the separate webhook worker lane. */
export const TransactaDiagram: React.FC = () => {
  const theme = useTheme();
  const accent = theme.colors.project.transacta;
  const { ink } = theme.colors;

  return (
    <DiagramFrame
      name="transacta/architecture.svg"
      title="Transacta: request path for POST /v1/transfers"
      description="Auth, RBAC and an idempotency claim, then one database transaction that locks accounts, checks balances and writes entries, outbox and audit rows; a separate worker delivers webhooks from the outbox."
      viewBox="0 0 1000 850"
      minWidth={760}
      steps={[
        <>
          <code>POST /v1/transfers</code> → JWT auth (tenant ID from the claims) → RBAC check →
          idempotency claim.
        </>,
        <>
          One DB transaction: lock accounts in sorted order with <code>SELECT … FOR UPDATE</code>,
          check the projected balances, insert the transaction + entries, insert the outbox event,
          insert the audit row.
        </>,
        <>Commit → idempotency complete (fencing token).</>,
        <>
          Separate webhook worker lane: claim with <code>FOR UPDATE SKIP LOCKED</code> →
          HMAC-signed delivery → success, retry with backoff + jitter, or dead-letter after 5
          attempts.
        </>,
      ]}
    >
      <text x={20} y={32} fontFamily={theme.fonts.mono} fontSize={12} fontWeight={700} fill={ink}>
        REQUEST LANE
      </text>

      {/* Request lane */}
      <Box x={20} y={50} w={170} h={72} title="POST" lines={["/v1/transfers"]} />
      <Box x={230} y={50} w={210} h={72} title="JWT auth" lines={["tenant ID from claims"]} />
      <Box x={480} y={50} w={150} h={72} title="RBAC check" />
      <Box x={670} y={50} w={210} h={72} title="Idempotency claim" />
      <Arrow points={[[190, 86], [230, 86]]} />
      <Arrow points={[[440, 86], [480, 86]]} />
      <Arrow points={[[630, 86], [670, 86]]} />
      <Arrow points={[[775, 122], [775, 180]]} />

      {/* One DB transaction */}
      <Region x={20} y={180} w={960} h={230} label="ONE DB TRANSACTION" fill={accent} />
      <Box x={40} y={225} w={168} h={160} step="1" title="Lock accounts" lines={["in sorted order", "SELECT … FOR UPDATE"]} />
      <Box x={228} y={225} w={168} h={160} step="2" title="Check" lines={["projected balances"]} />
      <Box x={416} y={225} w={168} h={160} step="3" title="Insert" lines={["transaction", "+ entries"]} />
      <Box x={604} y={225} w={168} h={160} step="4" title="Insert" lines={["outbox event"]} />
      <Box x={792} y={225} w={168} h={160} step="5" title="Insert" lines={["audit row"]} />
      <Arrow points={[[208, 305], [228, 305]]} />
      <Arrow points={[[396, 305], [416, 305]]} />
      <Arrow points={[[584, 305], [604, 305]]} />
      <Arrow points={[[772, 305], [792, 305]]} />

      {/* Commit */}
      <Arrow points={[[95, 410], [95, 460]]} />
      <Box x={20} y={460} w={150} h={72} title="COMMIT" fill={accent} />
      <Arrow points={[[170, 496], [200, 496]]} />
      <Box x={200} y={460} w={200} h={72} title="Idempotency" lines={["complete", "fencing token"]} />

      {/* Webhook worker lane */}
      <Region x={420} y={440} w={560} h={390} label="WEBHOOK WORKER · SEPARATE LANE" dashed />
      <Arrow points={[[688, 385], [688, 480]]} dashed label="outbox row" labelAt={[698, 432]} />
      <Box x={560} y={480} w={200} h={80} title="Claim event" lines={["FOR UPDATE", "SKIP LOCKED"]} />
      <Arrow points={[[660, 560], [660, 600]]} />
      <Box x={560} y={600} w={200} h={72} title="HMAC-signed" lines={["delivery"]} />

      <Arrow points={[[600, 672], [600, 700], [500, 700], [500, 730]]} />
      <Arrow points={[[660, 672], [660, 730]]} />
      <Arrow points={[[720, 672], [720, 700], [870, 700], [870, 730]]} />
      <Box x={450} y={730} w={100} h={72} title="Success" fill={theme.colors.status.success} />
      <Box x={580} y={730} w={160} h={72} title="Retry" lines={["backoff + jitter"]} fill={accent} />
      <Box x={780} y={730} w={180} h={72} title="Dead-letter" lines={["after 5 attempts"]} />
      <Arrow points={[[660, 806], [660, 818], [435, 818], [435, 520], [560, 520]]} label="re-claim" labelAt={[444, 510]} />
    </DiagramFrame>
  );
};

export default TransactaDiagram;
