import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../common/Container";
import { Button } from "../common/Button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <HeaderWrapper $isScrolled={isScrolled}>
      <Container>
        <HeaderContent>
          <Logo>PORTFOLIO</Logo>

          <DesktopNav>
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </NavLink>
            ))}
            <CTAButton size="sm" onClick={() => scrollToSection("#contact")}>
              Let's Talk
            </CTAButton>
          </DesktopNav>

          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            $isOpen={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
        </HeaderContent>
      </Container>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        {navItems.map((item) => (
          <MobileNavLink
            key={item.label}
            onClick={() => scrollToSection(item.href)}
          >
            {item.label}
          </MobileNavLink>
        ))}
        <CTAButton fullWidth onClick={() => scrollToSection("#contact")}>
          Let's Talk
        </CTAButton>
      </MobileMenu>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background-color: #AEC6FF;
  border-bottom: 5px solid #000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: ${({ theme }) => theme.spacing.md} 0;
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? "0 8px 0 #000" : "none"};
  transform: ${({ $isScrolled }) =>
    $isScrolled ? "translateY(0)" : "translateY(0)"};
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 900;
  color: #000;
  letter-spacing: -1px;
  text-transform: uppercase;
  background: #FFDEB4;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.lg}`};
  border: 4px solid #000;
  box-shadow: 4px 4px 0 #000;
  border-radius: 0;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #000;
  }
  
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 3px 3px 0 #000;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    border-width: 3px;
    box-shadow: 3px 3px 0 #000;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 800;
  color: #000;
  background: #fff;
  border: 3px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  box-shadow: 3px 3px 0 #000;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: #B4E7CE;
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 #000;
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0 #000;
  }
`;

const CTAButton = styled(Button)`
  background-color: #5dd0c0;
  color: #000;
  border: 4px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-weight: 900;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  letter-spacing: 0.5px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 4px 4px 0 #000;
  text-transform: uppercase;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:hover:not(:disabled) {
    background-color: #5dd0c0;
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #000;
  }

  &:active:not(:disabled) {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0 #000;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
    border-width: 3px;
    box-shadow: 3px 3px 0 #000;
  }
`;

const MobileMenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: #AEC6FF;
  border: 4px solid #000;
  border-radius: 0;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  box-shadow: 4px 4px 0 #000;
  transition: all 0.2s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }

  &:hover {
    background: #B4D4FF;
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #000;
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0 #000;
  }

  span {
    width: 24px;
    height: 3px;
    background-color: #000;
    transition: all 0.3s ease;
    border-radius: 0;
    
    ${({ $isOpen }) =>
      $isOpen &&
      `
      &:nth-child(1) {
        transform: rotate(45deg) translateY(8px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translateY(-8px);
      }
    `}
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    position: absolute;
    top: calc(100% + 8px);
    left: ${({ theme }) => theme.spacing.lg};
    right: ${({ theme }) => theme.spacing.lg};
    background-color: #FFFACD;
    padding: ${({ theme }) => theme.spacing.lg};
    border: 4px solid #000;
    border-radius: 0;
    box-shadow: 6px 6px 0 #000;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(0)" : "translateY(-12px)"};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const MobileNavLink = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 800;
  color: #000;
  background: #fff;
  border: 3px solid #000;
  border-radius: 0;
  cursor: pointer;
  text-align: left;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  box-shadow: 3px 3px 0 #000;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: #B4E7CE;
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 #000;
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0 #000;
  }
`;