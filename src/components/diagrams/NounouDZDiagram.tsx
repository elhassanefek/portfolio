import React from "react";
import { useTheme } from "styled-components";
import { Arrow, Box, DiagramFrame, Region } from "./primitives";

/** From discovery to confirmed, priced sessions and their background lifecycle. */
export const NounouDZDiagram: React.FC = () => {
  const theme = useTheme();
  const accent = theme.colors.project.nounoudz;
  const { ink } = theme.colors;

  return (
    <DiagramFrame
      name="nounoudz/booking-flow.svg"
      title="NounouDZ: from discovery to confirmed sessions"
      description="Two discovery paths lead to an engagement with versioned agreement proposals; once both parties confirm the same version, one row-locked transaction guarded by a GiST exclusion constraint creates the sessions, and an outbox worker drives notifications and the session lifecycle."
      viewBox="0 0 1000 780"
      minWidth={760}
      steps={[
        <>
          Two discovery paths. A: the parent posts a request, babysitters apply, the parent
          selects one. B: the parent sends a direct proposition.
        </>,
        <>Both paths lead to an Engagement with versioned agreement proposals (v1 → v2 → …).</>,
        <>Both parties confirm the same version.</>,
        <>
          One row-locked transaction creates the priced sessions, guarded by a GiST exclusion
          constraint.
        </>,
        <>
          Outbox → Go worker → notifications + session lifecycle (scheduled → in progress →
          completed).
        </>,
      ]}
    >
      <text x={20} y={32} fontFamily={theme.fonts.mono} fontSize={12} fontWeight={700} fill={ink}>
        DISCOVERY
      </text>

      {/* Path A */}
      <Box x={20} y={50} w={230} h={72} step="A" title="Parent posts" lines={["a request"]} />
      <Box x={290} y={50} w={200} h={72} title="Babysitters apply" />
      <Box x={530} y={50} w={200} h={72} title="Parent selects one" />
      <Arrow points={[[250, 86], [290, 86]]} />
      <Arrow points={[[490, 86], [530, 86]]} />
      <Arrow points={[[730, 86], [780, 86]]} />

      {/* Path B */}
      <Box x={20} y={150} w={470} h={72} step="B" title="Parent sends a" lines={["direct proposition"]} />
      <Arrow points={[[490, 186], [780, 186]]} />

      <Box x={780} y={50} w={200} h={172} title="Engagement" fill={accent} />

      {/* Versioned agreement */}
      <Arrow points={[[880, 222], [880, 262], [100, 262], [100, 325]]} />
      <Region x={20} y={290} w={960} h={130} label="VERSIONED AGREEMENT PROPOSALS" />
      <Box x={40} y={325} w={120} h={70} title="v1" />
      <Box x={200} y={325} w={120} h={70} title="v2" />
      <Box x={360} y={325} w={100} h={70} title="v…" />
      <Box x={520} y={325} w={440} h={70} title="Both parties confirm" lines={["the same version"]} fill={accent} />
      <Arrow points={[[160, 360], [200, 360]]} />
      <Arrow points={[[320, 360], [360, 360]]} />
      <Arrow points={[[460, 360], [520, 360]]} />

      {/* Session creation */}
      <Arrow points={[[740, 395], [740, 470]]} />
      <Box x={520} y={470} w={440} h={90} title="One row-locked transaction" lines={["creates the priced sessions"]} />
      <Box x={40} y={470} w={400} h={90} title="GiST exclusion constraint" lines={["no overlapping time ranges"]} />
      <Arrow points={[[440, 515], [520, 515]]} dashed label="guards" labelAt={[452, 505]} />

      {/* Background work */}
      <Arrow points={[[740, 560], [740, 600], [100, 600], [100, 640]]} />
      <Box x={20} y={640} w={160} h={80} title="Outbox" />
      <Box x={220} y={640} w={160} h={80} title="Go worker" />
      <Box x={420} y={640} w={200} h={80} title="Notifications" />
      <Box x={660} y={640} w={320} h={80} title="Session lifecycle" lines={["scheduled → in progress", "→ completed"]} fill={accent} />
      <Arrow points={[[180, 680], [220, 680]]} />
      <Arrow points={[[380, 680], [420, 680]]} />
      <Arrow points={[[300, 724], [300, 750], [820, 750], [820, 724]]} />
    </DiagramFrame>
  );
};

export default NounouDZDiagram;
