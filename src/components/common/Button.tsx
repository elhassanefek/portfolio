
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

type ButtonVariant = 'default' | 'outline' | 'ghost' | 'link' | 'cta';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  as?: React.ElementType;
  to?: string;
  href?: string ;
  target ?: string ;
}

// Base styles that apply to all buttons
const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Inter', 'Helvetica Neue', system-ui, -apple-system, sans-serif;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.18s cubic-bezier(0.2, 0, 0.1, 1);
  white-space: nowrap;
  user-select: none;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  text-transform: none;
  border: 2px solid #000;
  border-radius: 9999px;
  box-shadow: 4px 4px 0 #000;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: '→';
    display: inline-block;
    transition: transform 0.2s ease;
    margin-left: 8px;
  }

  &:hover:not(:disabled)::after {
    transform: translateX(3px);
  }
`;

// Size variants
const sizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    height: 40px;
    padding: 0 1.5rem;
    font-size: 0.9375rem;
  `,
  md: css`
    height: 52px;
    padding: 0 2rem;
    font-size: 1rem;
    min-width: 200px;
  `,
  lg: css`
    height: 60px;
    padding: 0 2.5rem;
    font-size: 1.125rem;
    min-width: 240px;
  `,
};

// Visual variants
const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  default: css`
    background-color: #5dd0c0;
    color: #1a1a1a;

    &:hover:not(:disabled) {
      background-color: #4ec0b0;
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 #000;
    }

    &:active:not(:disabled) {
      transform: translate(4px, 4px);
      box-shadow: 0 0 0 #000;
    }
  `,
  outline: css`
    background-color: transparent;
    color: #1a1a1a;
    border: 2px solid #000;

    &:hover:not(:disabled) {
      background-color: #f8f8f8;
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 #000;
    }

    &:active:not(:disabled) {
      transform: translate(4px, 4px);
      box-shadow: 0 0 0 #000;
    }
  `,
  ghost: css`
    background-color: transparent;
    color: #1a1a1a;
    border: 2px solid transparent;
    box-shadow: none;

    &:hover:not(:disabled) {
      background-color: rgba(0, 0, 0, 0.05);
      transform: none;
    }
  `,
  link: css`
    background-color: transparent;
    color: #1a1a1a;
    border: none;
    box-shadow: none;
    min-width: auto;
    height: auto;
    padding: 0.25rem 0.5rem;
    text-decoration: underline;

    &:hover:not(:disabled) {
      text-decoration: none;
      transform: none;
      background-color: transparent;
    }

    &::after {
      content: none;
    }
  `,
  cta: css`
    background-color: #5dd0c0;
    color: #1a1a1a;
    font-weight: 600;
    min-width: 220px;
    height: 55px;

    &::after {
      margin-left: 10px;
      font-size: 1.1em;
    }

    &:hover:not(:disabled) {
      background-color: #4ec0b0;
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 #000;
    }

    &:hover:not(:disabled)::after {
      transform: translateX(4px);
    }

    &:active:not(:disabled) {
      transform: translate(4px, 4px);
      box-shadow: 0 0 0 #000;
    }
  `,
};

const StyledButton = styled.button<Omit<ButtonProps, 'children'>>`
  ${baseButtonStyles}
  ${({ variant = 'default' }) => variantStyles[variant]}
  ${({ size = 'md' }) => sizeStyles[size]}
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
  ${({ isLoading }) => isLoading && 'opacity: 0.8; cursor: wait;'}
   


`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'default',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        isLoading={isLoading}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <>
            {leftIcon && <span className="button-icon">{leftIcon}</span>}
            <span className="button-content">{children}</span>
            {rightIcon && <span className="button-icon">{rightIcon}</span>}
          </>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
