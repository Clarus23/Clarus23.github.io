import React from 'react';
import styled from 'styled-components';
import { awards } from '../data/awards';
import { FaAward, FaTrophy } from 'react-icons/fa';

const Awards = () => {
  return (
    <Section id="awards">
      <SectionTitle>Awards & Certifications</SectionTitle>
      <Grid>
        {awards.map((item) => (
          <Card key={item.id}>
            <IconWrapper>
              {item.title.includes('기사') || item.title.includes('SQL') ? <FaAward /> : <FaTrophy />}
            </IconWrapper>
            <Content>
              <Date>{item.date}</Date>
              <Title>{item.title}</Title>
              <Organization>{item.organization}</Organization>
              <Description>{item.description}</Description>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  padding: 40px 0;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.border || 'transparent'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Date = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 700;
`;

const Organization = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 0.5rem;
`;

export default Awards;
