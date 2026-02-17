import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ children, onClick, href, variant = 'primary', style }) => {
  if (href) {
    return (
      <StyledLink href={href} variant={variant} style={style}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton onClick={onClick} variant={variant} style={style}>
      {children}
    </StyledButton>
  );
};

const buttonStyles = css`
  padding: 0.75rem 1.75rem;
  border-radius: 4px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: ${({ theme }) => theme.colors.transition};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  
  ${({ variant, theme }) => variant === 'primary' && css`
    background-color: transparent;
    color: ${theme.colors.secondary};

    &:hover {
      background-color: rgba(100, 255, 218, 0.1);
    }
  `}

  ${({ variant, theme }) => variant === 'secondary' && css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.bg};

    &:hover {
      opacity: 0.9;
    }
  `}
`;

const StyledButton = styled.button`
  ${buttonStyles}
`;

const StyledLink = styled.a`
  ${buttonStyles}
`;

export default Button;
