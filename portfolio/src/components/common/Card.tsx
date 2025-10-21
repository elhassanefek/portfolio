import React from "react";
import styled from "styled-components";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["lg"]};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  background-color: #fff;
  color: ${({ theme }) => theme.colors.text};
  border: 4px solid ${({ theme }) => theme.colors.text};
  border-radius: 0;
  box-shadow: 6px 6px 0 0 ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  transition: transform ${({ theme }) => theme.transitions.base}, box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translate(6px, 6px);
    box-shadow: none;
  }
`;

export const CardHeader = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-rows: min-content;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 0 ${({ theme }) => theme.spacing["2xl"]};

  &:has([data-slot="card-action"]) {
    grid-template-columns: 1fr auto;
  }

  &.border-b {
    padding-bottom: ${({ theme }) => theme.spacing["2xl"]};
    border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  }
`;

export const CardTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1;
  color: ${({ theme }) => theme.colors.text};
`;

export const CardDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

export const CardAction = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  align-self: start;
  justify-self: end;
`;

export const CardContent = styled.div`
  padding: 0 ${({ theme }) => theme.spacing["2xl"]};
  flex: 1;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing["2xl"]};

  &.border-t {
    padding-top: ${({ theme }) => theme.spacing["2xl"]};
    border-top: 2px solid ${({ theme }) => theme.colors.text};
  }
`;
