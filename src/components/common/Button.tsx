import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { pressable } from "../../styles/mixins";

type ButtonVariant = "primary" | "secondary" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  /** Internal route: renders a react-router Link. */
  to?: string;
  /** External URL or file: renders an anchor. */
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  as?: React.ElementType;
}

const sizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    min-height: 40px;
    padding: 0 ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  md: css`
    min-height: 48px;
    padding: 0 ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.base};
  `,
  lg: css`
    min-height: 56px;
    padding: 0 ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `,
};

const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.ink};
    border: ${({ theme }) => theme.borders.base};
    ${pressable("sm")}
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.ink};
    border: ${({ theme }) => theme.borders.base};
    ${pressable("sm")}
  `,
  link: css`
    min-height: auto;
    padding: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.ink};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    text-transform: uppercase;
    letter-spacing: 0.04em;
    text-decoration: underline;
    text-decoration-thickness: ${({ theme }) => theme.borders.width};
    text-underline-offset: 6px;

    &:hover,
    &:focus-visible {
      background-color: ${({ theme }) => theme.colors.accent};
    }
  `,
};

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  text-align: center;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radii.none};
  cursor: pointer;
  user-select: none;

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}

  &:disabled,
  &[aria-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
  }
`;

const Icon = styled.span`
  display: inline-flex;
  flex-shrink: 0;
`;

export const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      leftIcon,
      rightIcon,
      to,
      href,
      target,
      rel,
      type,
      as,
      ...props
    },
    ref
  ) => {
    // Pick the element: router link, anchor, or a real <button>.
    const element = as ?? (to ? Link : href ? "a" : "button");
    const linkProps = to
      ? { to }
      : href
        ? {
            href,
            target,
            rel: rel ?? (target === "_blank" ? "noopener noreferrer" : undefined),
          }
        : {};
    const buttonType = element === "button" ? (type ?? "button") : type;

    return (
      <StyledButton
        ref={ref as React.Ref<HTMLButtonElement>}
        as={element}
        type={buttonType}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        {...linkProps}
        {...props}
      >
        {leftIcon && <Icon aria-hidden="true">{leftIcon}</Icon>}
        {children}
        {rightIcon && <Icon aria-hidden="true">{rightIcon}</Icon>}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
