import React, { useMemo, useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

export type DottedCurveRLProps = {
  className?: string;
  height?: number;
  color?: string;
  dash?: string;
};

export const DottedCurveRL: React.FC<DottedCurveRLProps> = ({
  className,
  height = 160,
  color = "#000",
  dash = "8 12",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const maskHeight = useTransform(scrollYProgress, [0.1, 0.9], [0, height]);
  const maskId = useMemo(
    () => `dotted-curve-rl-${Math.random().toString(36).slice(2)}`,
    []
  );

  return (
    <Wrapper ref={ref} className={className} $height={height} $color={color}>
      <motion.svg
        viewBox="0 0 500 300"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <mask id={maskId}>
            <rect x="0" y="0" width="600" height="300" fill="black" />
            <motion.rect
              x="0"
              y="0"
              width="600"
              fill="white"
              style={{ height: maskHeight }}
            />
          </mask>
        </defs>

        {/* Shadow path for depth */}
        <path
          d="M 503 53 C 353 123, 153 103, 3 303"
          stroke="#000"
          strokeWidth="6"
          strokeDasharray={dash}
          strokeLinecap="round"
          fill="none"
          mask={`url(#${maskId})`}
          opacity="0.4"
        />

        {/* Main colorful path */}
        <path
          d="M 500 50 C 350 120, 150 100, 0 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={dash}
          vectorEffect="non-scaling-stroke"
          mask={`url(#${maskId})`}
        />
      </motion.svg>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $height: number; $color?: string }>`
  width: 100%;
  margin: 0 auto;
  color: ${({ $color }) => $color ?? "#000"};
  opacity: 1;
  filter: drop-shadow(2px 2px 0 rgba(0, 0, 0, 0.2));

  svg {
    width: 100%;
    height: ${({ $height }) => $height}px;
    display: block;
  }
`;

export default DottedCurveRL;