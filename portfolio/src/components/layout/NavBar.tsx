import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

export const NavBar: React.FC = () => {
  return (
    <Bar>
      <Inner>
        <Brand to="/">Portfolio</Brand>
        <Nav>
          <NavItem>
            <NavLink to="/#projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/#project-stories">Stories</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/#about">About</NavLink>
          </NavItem>
        </Nav>
        <NavCTA>
          <Button as={Link} to="/#contact">
            Let's Talk
          </Button>
        </NavCTA>
      </Inner>
    </Bar>
  );
};

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(6px);
  padding: 0.5rem 0;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.headingSerif || theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.2s ease;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavCTA = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
