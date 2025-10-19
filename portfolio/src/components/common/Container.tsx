import styled from "styled-components";

interface ContainerProps {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: boolean;
}

const maxWidths = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  full: "100%",
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${({ maxWidth = "xl" }) => maxWidths[maxWidth]};
  margin: 0 auto;
  padding-left: ${({ padding = true, theme }) =>
    padding ? theme.spacing.lg : 0};
  padding-right: ${({ padding = true, theme }) =>
    padding ? theme.spacing.lg : 0};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: ${({ padding = true, theme }) =>
      padding ? theme.spacing.md : 0};
    padding-right: ${({ padding = true, theme }) =>
      padding ? theme.spacing.md : 0};
  }
`;
