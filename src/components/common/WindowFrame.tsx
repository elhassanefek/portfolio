import React from "react";
import styled from "styled-components";
import { monoLabel } from "../../styles/mixins";

interface WindowFrameProps {
  /** File or project name shown in the title bar. */
  title: string;
  /** Title bar fill (a theme token value); defaults to the site accent. */
  barColor?: string;
  children: React.ReactNode;
  className?: string;
}

/** Terminal-style window used to frame screenshots. */
export const WindowFrame: React.FC<WindowFrameProps> = ({
  title,
  barColor,
  children,
  className,
}) => (
  <Frame className={className}>
    <TitleBar $fill={barColor}>
      <Dots aria-hidden="true">
        <Dot />
        <Dot />
        <Dot />
      </Dots>
      <Title>{title}</Title>
    </TitleBar>
    <Body>{children}</Body>
  </Frame>
);

const Frame = styled.figure`
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.borders.base};
  border-radius: ${({ theme }) => theme.radii.none};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
`;

const TitleBar = styled.div<{ $fill?: string }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background-color: ${({ $fill, theme }) => $fill ?? theme.colors.accent};
  border-bottom: ${({ theme }) => theme.borders.base};
`;

const Dots = styled.span`
  display: inline-flex;
  gap: 6px;
  flex-shrink: 0;
`;

const Dot = styled.span`
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.borders.thin};
`;

const Title = styled.span`
  ${monoLabel}
  color: ${({ theme }) => theme.colors.ink};
  text-transform: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Body = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.colors.paper};

  img {
    width: 100%;
    height: auto;
  }
`;

export default WindowFrame;
