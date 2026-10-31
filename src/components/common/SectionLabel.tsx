import React from "react";
import styled from "styled-components";
import { monoLabel } from "../../styles/mixins";

interface SectionLabelProps {
  /** Section number, rendered zero-padded: 1 -> "01". */
  index: number;
  children: React.ReactNode;
}

/** Mono section marker, e.g. `01 / PROJECTS`. */
export const SectionLabel: React.FC<SectionLabelProps> = ({ index, children }) => (
  <Label>
    <Index>{String(index).padStart(2, "0")}</Index>
    <Slash aria-hidden="true">/</Slash>
    {children}
  </Label>
);

const Label = styled.p`
  ${monoLabel}
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.ink};
`;

const Index = styled.span`
  padding: 0 6px;
  background-color: ${({ theme }) => theme.colors.accent};
  border: ${({ theme }) => theme.borders.thin};
`;

const Slash = styled.span`
  color: ${({ theme }) => theme.colors.muted};
`;

export default SectionLabel;
