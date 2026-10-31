import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { monoLabel } from "../../styles/mixins";
import { profile } from "../../data/profile";

const navItems = [
  { label: "About", to: "/#about" },
  { label: "Experience", to: "/#experience" },
  { label: "Projects", to: "/#projects" },
  { label: "Skills", to: "/#skills" },
];

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu after any navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.key]);

  // Close it with Escape too.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <Bar id="top">
      <SkipLink href="#main">Skip to content</SkipLink>
      <Container>
        <Inner>
          <Brand to="/">{profile.name}</Brand>

          <DesktopNav aria-label="Main">
            <NavList>
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to}>{item.label}</NavLink>
                </li>
              ))}
            </NavList>
            <Button size="sm" to="/#contact">
              Contact
            </Button>
          </DesktopNav>

          <MenuToggle
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </MenuToggle>
        </Inner>
      </Container>

      {menuOpen && (
        <MobileMenu id="mobile-menu" aria-label="Main">
          <Container>
            <MobileList>
              {[...navItems, { label: "Contact", to: "/#contact" }].map((item) => (
                <li key={item.to}>
                  <MobileLink to={item.to}>{item.label}</MobileLink>
                </li>
              ))}
            </MobileList>
          </Container>
        </MobileMenu>
      )}
    </Bar>
  );
};

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background-color: ${({ theme }) => theme.colors.paper};
  border-bottom: ${({ theme }) => theme.borders.base};
`;

const SkipLink = styled.a`
  ${monoLabel}
  position: absolute;
  left: ${({ theme }) => theme.spacing.sm};
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.tooltip};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.ink};
  border: ${({ theme }) => theme.borders.base};
  transform: translateY(-200%);

  &:focus-visible {
    transform: translateY(${({ theme }) => theme.spacing.xs});
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  min-height: ${({ theme }) => theme.layout.headerHeight};
`;

const Brand = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-transform: uppercase;
  letter-spacing: 0.02em;
  white-space: nowrap;
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NavLink = styled(Link)`
  ${monoLabel}
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: ${({ theme }) => theme.spacing.xs} 2px;
  border-bottom: ${({ theme }) => theme.borders.width} solid transparent;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.ink};
  }
`;

const MenuToggle = styled.button`
  ${monoLabel}
  display: none;
  min-height: 40px;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.borders.base};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &[aria-expanded="true"] {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline-flex;
    align-items: center;
  }
`;

/* Overlays the page so opening/closing it never shifts the layout mid-scroll */
const MobileMenu = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border-top: ${({ theme }) => theme.borders.base};
  border-bottom: ${({ theme }) => theme.borders.base};
  background-color: ${({ theme }) => theme.colors.paper};
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xs} 0;
`;

const MobileLink = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  border-bottom: ${({ theme }) => theme.borders.thin};
`;

export default Header;
