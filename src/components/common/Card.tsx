import styled, { css } from "styled-components";
import { pressable } from "../../styles/mixins";

interface CardProps {
  /** Adds the press interaction; use when the whole card is a link or button. */
  $interactive?: boolean;
  /** Optional fill color (a theme token value); defaults to surface. */
  $fill?: string;
}

export const Card = styled.article<CardProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ $fill, theme }) => $fill ?? theme.colors.surface};
  color: ${({ theme }) => theme.colors.ink};
  border: ${({ theme }) => theme.borders.base};
  border-radius: ${({ theme }) => theme.radii.none};
  box-shadow: ${({ theme }) => theme.shadows.md};

  ${({ $interactive }) =>
    $interactive &&
    css`
      ${pressable("md")}
      cursor: pointer;
    `}
`;

export default Card;
