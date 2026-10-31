// src/components/layout/Footer.tsx

import React from "react";
import styled from "styled-components";
import { Container } from "../common/Container";
import { monoLabel } from "../../styles/mixins";
import { profile } from "../../data/profile";

export const Footer: React.FC = () => (
  <Wrapper>
    <Container>
      <Inner>
        <div>
          <Name>{profile.name}</Name>
          <Meta>
            {profile.title} · {profile.location}
          </Meta>
        </div>

        <nav aria-label="Elsewhere">
          <Links>
            <li>
              <FooterLink href={`mailto:${profile.email}`}>Email</FooterLink>
            </li>
            <li>
              <FooterLink href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </FooterLink>
            </li>
            <li>
              <FooterLink href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#top">Back to top ↑</FooterLink>
            </li>
          </Links>
        </nav>
      </Inner>
      <Copy>© {new Date().getFullYear()} {profile.name}</Copy>
    </Container>
  </Wrapper>
);

const Wrapper = styled.footer`
  padding: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.paper};
  border-top: ${({ theme }) => theme.borders.base};

  a:focus-visible {
    outline-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Name = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Meta = styled.p`
  ${monoLabel}
  margin-bottom: 0;
`;

const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
`;

const FooterLink = styled.a`
  ${monoLabel}
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-decoration: underline;
  text-underline-offset: 4px;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Copy = styled.p`
  ${monoLabel}
  margin: ${({ theme }) => theme.spacing.xl} 0 0;
  padding-top: ${({ theme }) => theme.spacing.sm};
  border-top: ${({ theme }) => theme.borders.width} solid ${({ theme }) => theme.colors.muted};
`;

export default Footer;
