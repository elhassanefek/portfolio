// src/components/common/Button.tsx

import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "noShadow" | "neutral" | "reverse";
  size?: "sm" | "md" | "lg" | "icon";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const sizeStyles = {
  sm: css`
    height: 36px;
    padding: 0 ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  md: css`
    height: 40px;
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  lg: css`
    height: 44px;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
    font-size: ${({ theme }) => theme.fontSizes.base};
  `,
  icon: css`
    width: 40px;
    height: 40px;
    padding: 0;
  `,
};

const variantStyles = {
  default: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: 2px solid ${({ theme }) => theme.colors.text};
    box-shadow: 4px 4px 0px 0px ${({ theme }) => theme.colors.text};

    &:hover:not(:disabled) {
      transform: translate(4px, 4px);
      box-shadow: none;
    }
  `,
  noShadow: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: 2px solid ${({ theme }) => theme.colors.text};

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
  neutral: css`
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
    color: ${({ theme }) => theme.colors.text};
    border: 2px solid ${({ theme }) => theme.colors.text};
    box-shadow: 4px 4px 0px 0px ${({ theme }) => theme.colors.text};

    &:hover:not(:disabled) {
      transform: translate(4px, 4px);
      box-shadow: none;
    }
  `,
  reverse: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: 2px solid ${({ theme }) => theme.colors.text};

    &:hover:not(:disabled) {
      transform: translate(-4px, -4px);
      box-shadow: 4px 4px 0px 0px ${({ theme }) => theme.colors.text};
    }
  `,
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ size = "md" }) => sizeStyles[size]}
  ${({ variant = "default" }) => variantStyles[variant]}
  
  /* Icon styles */
  svg {
    pointer-events: none;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.text};
    outline-offset: 2px;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
