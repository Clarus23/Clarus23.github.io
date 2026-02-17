import React from 'react';
import styled from 'styled-components';
import { archiving } from '../data/archiving';
import { FaGithub, FaLink } from 'react-icons/fa';

const Archiving = () => {
  return (
    <Section id="archiving">
      <SectionTitle>Archiving</SectionTitle>
      <Grid>
        {archiving.map((item) => (
          <Card key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
            <IconWrapper>
              {item.type === 'git' ? <FaGithub /> : <FaLink />}
            </IconWrapper>
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardUrl>{item.url}</CardUrl>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  padding: 100px 0;
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.a`
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  text-decoration: none;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const CardUrl = styled.p`
  color: ${({ theme }) => theme.colors.link}; /* Assuming a link color, or reuse blue/secondary */
  color: #3b82f6; /* Fallback or specific color */
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  word-break: break-all;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
`;

export default Archiving;
