// DottedPath.tsx
import React, { useMemo, useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

export type DottedPathProps = {
  className?: string;
  height?: number;
  color?: string;
  dash?: string;
};

export const DottedPath: React.FC<DottedPathProps> = ({
  className,
  height = 140,
  color = "#000",
  dash = "8 12",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const maskHeight = useTransform(scrollYProgress, [0.1, 0.9], [0, 200]);
  const maskId = useMemo(() => `dp-mask-${Math.random().toString(36).slice(2)}` , []);
  
  return (
    <Wrapper ref={ref} className={className} $height={height} $color={color}>
      <motion.svg viewBox="0 0 100 200" preserveAspectRatio="xMidYMid meet">
        <defs>
          <mask id={maskId}>
            <rect x="0" y="0" width="100" height="200" fill="black" />
            <motion.rect x="0" y="0" width="100" fill="white" style={{ height: maskHeight }} />
          </mask>
        </defs>
        {/* Shadow path for neobrutalism effect */}
        <path
          d="M 68 3 C 93 28, 33 58, 58 98 S 88 148, 53 203"
          fill="none"
          stroke="#000"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          strokeDasharray={dash}
          mask={`url(#${maskId})`}
          opacity="1"
        />
        {/* Main colorful path */}
        <path
          d="M 65 0 C 90 25, 30 55, 55 95 S 85 145, 50 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          strokeDasharray={dash}
          mask={`url(#${maskId})`}
        />
      </motion.svg>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $height: number; $color?: string }>`
  width: 100px;
  margin: 0 auto;
  color: ${({ $color }) => $color ?? "#000"};
  opacity: 1;
  filter: drop-shadow(2px 2px 0 rgba(0, 0, 0, 0.3));
  
  svg { 
    width: 100%; 
    height: ${({ $height }) => $height}px; 
    display: block; 
  }
`;
