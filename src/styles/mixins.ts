// src/styles/mixins.ts

import { css } from "styled-components";

type PressSize = "sm" | "md";

/**
 * Signature "press" interaction: the element rests on a hard offset shadow
 * and, on hover or keyboard focus (its own or a child link's), travels into it while the shadow shrinks to 0.
 * The transition only runs when the user has not asked for reduced motion.
 */
export const pressable = (size: PressSize = "sm") => css`
  box-shadow: ${({ theme }) => theme.shadows[size]};
  transform: translate(0, 0);

  @media (prefers-reduced-motion: no-preference) {
    transition:
      transform ${({ theme }) => theme.transitions.fast},
      box-shadow ${({ theme }) => theme.transitions.fast};
  }

  &:hover,
  &:focus-visible,
  &:focus-within {
    transform: translate(
      ${({ theme }) => theme.press[size]},
      ${({ theme }) => theme.press[size]}
    );
    box-shadow: ${({ theme }) => theme.shadows.none};
  }
`;

/** Small uppercase monospace text used for labels, metadata and tags. */
export const monoLabel = css`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;
