import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader scrolled={scrolled}>
      <Nav>
        <Logo href="#">Clarus23</Logo>
        <Hamburger onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
        <NavList isOpen={isOpen}>
          <NavItem><NavLink href="#about" onClick={toggleMenu}>About</NavLink></NavItem>
          <NavItem><NavLink href="#skills" onClick={toggleMenu}>Skills</NavLink></NavItem>
          <NavItem><NavLink href="#archiving" onClick={toggleMenu}>Archiving</NavLink></NavItem>
          <NavItem><NavLink href="#projects" onClick={toggleMenu}>Projects</NavLink></NavItem>
          <NavItem><NavLink href="#career" onClick={toggleMenu}>Career</NavLink></NavItem>
        </NavList>
      </Nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding: 0 2rem;
  background-color: ${({ scrolled, theme }) => scrolled ? theme.colors.bg : 'transparent'};
  box-shadow: ${({ scrolled }) => scrolled ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none'};
  transition: ${({ theme }) => theme.colors.transition};
  height: 80px;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    z-index: 1001;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    background-color: ${({ theme }) => theme.colors.bgLight};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: ${({ theme }) => theme.colors.transition};
    box-shadow: -10px 0px 30px -15px rgba(2,12,27,0.7);
  }
`;

const NavItem = styled.li`
  
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.mono};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Header;
