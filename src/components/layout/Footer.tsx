// src/components/layout/Footer.tsx

import React from "react";
import styled from "styled-components";
import { Container } from "../common/Container";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterWrapper>
      <DecorativeTop>
        <TopShape1 />
        <TopShape2 />
        <TopShape3 />
      </DecorativeTop>

      <Container>
        <FooterContent>
          <FooterMain>
            <LogoCard>
              <Logo>PORTFOLIO</Logo>
              <LogoSubtext>2025</LogoSubtext>
            </LogoCard>
            <FooterText>
              Building digital experiences that make a difference ✨
            </FooterText>
          </FooterMain>

          <FooterLinks>
            <FooterColumn>
              <ColumnTitle>
                <TitleIcon>🔗</TitleIcon>
                Navigation
              </ColumnTitle>
              <LinkList>
                <FooterLink href="#about">About</FooterLink>
                <FooterLink href="#projects">Projects</FooterLink>
                <FooterLink href="#skills">Skills</FooterLink>
                <FooterLink href="#contact">Contact</FooterLink>
              </LinkList>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>
                <TitleIcon>🌐</TitleIcon>
                Connect
              </ColumnTitle>
              <LinkList>
                <FooterLink
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </FooterLink>
                <FooterLink
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </FooterLink>
                <FooterLink
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </FooterLink>
                <FooterLink href="mailto:your.email@example.com">
                  Email
                </FooterLink>
              </LinkList>
            </FooterColumn>
          </FooterLinks>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {currentYear} <strong>Your Name</strong>. All rights reserved.
          </Copyright>
          <BackToTop onClick={scrollToTop}>
            BACK TO TOP ↑
          </BackToTop>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #000;
  color: #FFF;
  padding: ${({ theme }) => theme.spacing["4xl"]} 0 ${({ theme }) => theme.spacing.xl};
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing["3xl"]} 0 ${({ theme }) => theme.spacing.lg};
  }
`;

const DecorativeTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  pointer-events: none;
  z-index: 0;
`;

const TopShape1 = styled.div`
  position: absolute;
  top: 20px;
  left: 10%;
  width: 60px;
  height: 60px;
  background: #5dd0c0;
  border: 4px solid #FFF;
  transform: rotate(45deg);
  box-shadow: 5px 5px 0 #FFF;
  animation: float 6s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: rotate(45deg) translateY(0px); }
    50% { transform: rotate(45deg) translateY(-15px); }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 40px;
    height: 40px;
    border-width: 3px;
    box-shadow: 3px 3px 0 #FFF;
  }
`;

const TopShape2 = styled.div`
  position: absolute;
  top: 40px;
  right: 15%;
  width: 50px;
  height: 50px;
  background: #FFFACD;
  border: 4px solid #FFF;
  border-radius: 50%;
  box-shadow: 5px 5px 0 #FFF;
  animation: float 7s ease-in-out infinite 1s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 35px;
    height: 35px;
    border-width: 3px;
    box-shadow: 3px 3px 0 #FFF;
  }
`;

const TopShape3 = styled.div`
  position: absolute;
  top: 30px;
  right: 35%;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 52px solid #B4E7CE;
  filter: drop-shadow(5px 5px 0 #FFF);
  animation: float 8s ease-in-out infinite 2s;
  
  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: -30px;
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 52px solid #FFF;
    z-index: -1;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 35px solid #B4E7CE;
    
    &::after {
      left: -20px;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 35px solid #FFF;
    }
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.spacing["3xl"]};
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing["2xl"]};
  }
`;

const FooterMain = styled.div``;

const LogoCard = styled.div`
  display: inline-block;
  background: #5dd0c0;
  border: 4px solid #FFF;
  border-radius: 0;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: 6px 6px 0 #FFF;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 #FFF;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-width: 3px;
    box-shadow: 5px 5px 0 #FFF;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  }
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

const LogoSubtext = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 800;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const FooterText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: #FFF;
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  max-width: 400px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div``;

const ColumnTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 900;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: #FFF;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const TitleIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FooterLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: #FFF;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  padding-left: ${({ theme }) => theme.spacing.sm};

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: #5dd0c0;
    transform: translateX(8px);
    
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 4px solid #FFF;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: #FFF;
  font-weight: 500;

  strong {
    font-weight: 900;
    text-transform: uppercase;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

const BackToTop = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 800;
  color: #000;
  background: #FFFACD;
  border: 3px solid #FFF;
  border-radius: 0;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 4px 4px 0 #FFF;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #FFF;
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0 #FFF;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-width: 2px;
    box-shadow: 3px 3px 0 #FFF;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;