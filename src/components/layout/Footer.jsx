import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaEnvelope, FaPenNib, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledFooter>
      <SocialLinks>
        <SocialIcon href="https://github.com/Clarus23" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIcon>
        <SocialIcon href="mailto:dnjs3023@gmail.com"><FaEnvelope /></SocialIcon>
        <SocialIcon href="https://clarus23.tistory.com" target="_blank" rel="noopener noreferrer"><FaPenNib /></SocialIcon>
      </SocialLinks>
      <Copyright>
        &copy; {new Date().getFullYear()} Hyewon Jung. All rights reserved.
      </Copyright>
      <ScrollToTop onClick={scrollToTop}>
        <FaArrowUp />
      </ScrollToTop>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: ${({ theme }) => theme.colors.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.bg};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transition: ${({ theme }) => theme.colors.transition};
  z-index: 1000;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: 1rem;
    right: 1rem;
  }
`;

export default Footer;
