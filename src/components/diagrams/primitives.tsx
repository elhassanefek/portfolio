// Building blocks for the architecture diagrams: thick-bordered boxes with hard
// shadows, orthogonal arrows and labelled regions. Colors come from the theme.

import React, { useId } from "react";
import styled, { useTheme } from "styled-components";
import { monoLabel } from "../../styles/mixins";

type Point = [number, number];

const LINE = 16; // line height for box text, in SVG units

interface BoxProps {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines?: string[];
  /** Small step number drawn in the top-left corner. */
  step?: string;
  fill?: string;
}

/** A thick-bordered box with a hard offset shadow and centered mono text. */
export const Box: React.FC<BoxProps> = ({ x, y, w, h, title, lines = [], step, fill }) => {
  const theme = useTheme();
  const { ink, surface } = theme.colors;
  const count = 1 + lines.length;
  const cx = x + w / 2;
  // Vertically center the block of text inside the box.
  const firstBaseline = y + h / 2 - ((count - 1) * LINE) / 2 + 5;

  return (
    <g>
      <rect x={x + 4} y={y + 4} width={w} height={h} fill={ink} />
      <rect x={x} y={y} width={w} height={h} fill={fill ?? surface} stroke={ink} strokeWidth={3} />
      {step && (
        <text x={x + 8} y={y + 16} fontFamily={theme.fonts.mono} fontSize={11} fill={ink}>
          {step}
        </text>
      )}
      <text textAnchor="middle" fontFamily={theme.fonts.mono} fill={ink}>
        <tspan x={cx} y={firstBaseline} fontSize={13} fontWeight={700}>
          {title}
        </tspan>
        {lines.map((line, i) => (
          <tspan key={i} x={cx} y={firstBaseline + (i + 1) * LINE} fontSize={12}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
};

interface ArrowProps {
  /** Polyline points; the arrowhead is drawn at the last point. */
  points: Point[];
  dashed?: boolean;
  label?: string;
  /** Where to put the label, if any. */
  labelAt?: Point;
}

/** An orthogonal connector ending in a solid arrowhead. */
export const Arrow: React.FC<ArrowProps> = ({ points, dashed, label, labelAt }) => {
  const theme = useTheme();
  const { ink, paper } = theme.colors;
  const [px, py] = points[points.length - 2];
  const [ex, ey] = points[points.length - 1];
  const len = Math.hypot(ex - px, ey - py) || 1;
  const ux = (ex - px) / len;
  const uy = (ey - py) / len;
  const head = 10;
  const half = 6;
  // Stop the line at the base of the head so it doesn't poke through.
  const shaft = points.slice(0, -1).concat([[ex - ux * head, ey - uy * head]]);
  const tip = `${ex},${ey} ${ex - ux * head - uy * half},${ey - uy * head + ux * half} ${
    ex - ux * head + uy * half
  },${ey - uy * head - ux * half}`;

  return (
    <g>
      <polyline
        points={shaft.map((p) => p.join(",")).join(" ")}
        fill="none"
        stroke={ink}
        strokeWidth={3}
        strokeDasharray={dashed ? "8 6" : undefined}
        strokeLinejoin="miter"
      />
      <polygon points={tip} fill={ink} />
      {label && labelAt && (
        <text
          x={labelAt[0]}
          y={labelAt[1]}
          fontFamily={theme.fonts.mono}
          fontSize={11}
          fill={ink}
          stroke={paper}
          strokeWidth={4}
          paintOrder="stroke"
        >
          {label}
        </text>
      )}
    </g>
  );
};

interface RegionProps {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  fill?: string;
  dashed?: boolean;
  /** Fill of the label chip; defaults to the region fill or surface. */
  chip?: string;
}

/** A labelled container grouping several boxes (a transaction, a lane, a phase). */
export const Region: React.FC<RegionProps> = ({ x, y, w, h, label, fill, dashed, chip }) => {
  const theme = useTheme();
  const { ink, surface } = theme.colors;
  const chipWidth = label.length * 7.4 + 20;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={fill ?? "none"}
        stroke={ink}
        strokeWidth={3}
        strokeDasharray={dashed ? "10 8" : undefined}
      />
      <rect x={x} y={y} width={chipWidth} height={24} fill={chip ?? surface} stroke={ink} strokeWidth={3} />
      <text x={x + 10} y={y + 16} fontFamily={theme.fonts.mono} fontSize={11} fontWeight={700} fill={ink}>
        {label}
      </text>
    </g>
  );
};

interface DiagramFrameProps {
  /** File-style name shown in the title bar. */
  name: string;
  /** Accessible name and one-line description of the diagram. */
  title: string;
  description: string;
  viewBox: string;
  /** Width below which the diagram scrolls horizontally instead of shrinking. */
  minWidth: number;
  /** Ordered text version of the diagram. */
  steps: React.ReactNode[];
  children: React.ReactNode;
}

/** Frames a diagram: title bar, horizontally scrollable SVG, and a text version. */
export const DiagramFrame: React.FC<DiagramFrameProps> = ({
  name,
  title,
  description,
  viewBox,
  minWidth,
  steps,
  children,
}) => {
  const id = useId();
  const theme = useTheme();

  return (
    <Figure>
      <Bar>
        <Dots aria-hidden="true">
          <Dot />
          <Dot />
          <Dot />
        </Dots>
        <span>{name}</span>
      </Bar>
      <Scroller tabIndex={0} role="region" aria-label={`${title} (scrolls horizontally on small screens)`}>
        <svg
          viewBox={viewBox}
          role="img"
          aria-labelledby={`${id}-title ${id}-desc`}
          style={{ minWidth, maxWidth: viewBox.split(" ")[2] + "px", width: "100%", height: "auto" }}
        >
          <title id={`${id}-title`}>{title}</title>
          <desc id={`${id}-desc`}>{description}</desc>
          <rect width="100%" height="100%" fill={theme.colors.paper} />
          {children}
        </svg>
      </Scroller>
      <TextVersion>
        <summary>Diagram as text</summary>
        <ol>
          {steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </TextVersion>
    </Figure>
  );
};

const Figure = styled.figure`
  min-width: 0;
  background-color: ${({ theme }) => theme.colors.paper};
  border: ${({ theme }) => theme.borders.base};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const Bar = styled.div`
  ${monoLabel}
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: ${({ theme }) => theme.borders.base};
  text-transform: none;
`;

const Dots = styled.span`
  display: inline-flex;
  gap: 6px;
`;

const Dot = styled.span`
  width: 12px;
  height: 12px;
  border: ${({ theme }) => theme.borders.thin};
`;

const Scroller = styled.div`
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing.sm};

  svg {
    display: block;
    margin: 0 auto;
  }
`;

const TextVersion = styled.details`
  border-top: ${({ theme }) => theme.borders.base};
  background-color: ${({ theme }) => theme.colors.surface};

  summary {
    ${monoLabel}
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  }

  ol {
    list-style: decimal;
    display: grid;
    gap: ${({ theme }) => theme.spacing.xs};
    padding: 0 ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.sm}
      ${({ theme }) => theme.spacing.xl};
  }

  code {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;
