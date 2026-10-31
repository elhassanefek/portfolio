import styled from "styled-components";
import { monoLabel } from "../../styles/mixins";

interface TagProps {
  /** Optional fill color (a theme token value); defaults to surface. */
  $fill?: string;
}

export const Tag = styled.span<TagProps>`
  ${monoLabel}
  display: inline-flex;
  align-items: center;
  padding: 2px ${({ theme }) => theme.spacing.xs};
  background-color: ${({ $fill, theme }) => $fill ?? theme.colors.surface};
  color: ${({ theme }) => theme.colors.ink};
  border: ${({ theme }) => theme.borders.thin};
  border-radius: ${({ theme }) => theme.radii.sm};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  max-width: 100%;
  overflow-wrap: anywhere;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export default Tag;
