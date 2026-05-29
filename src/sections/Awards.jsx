import React from 'react';
import styled from 'styled-components';
import { awards } from '../data/awards';
import { FaAward, FaTrophy } from 'react-icons/fa';

const Awards = () => {
  const awardsList = awards.filter(item => item.isAward);
  const certsList = awards.filter(item => !item.isAward);

  return (
    <Section id="awards">
      <SectionTitle>Awards & Certifications</SectionTitle>
      
      <TwoColumn>
        {/* Awards Column */}
        <Column>
          <ColumnTitle>Awards</ColumnTitle>
          <CardList>
            {awardsList.map((item) => (
              <Card key={item.id} $isAward={true}>
                <IconWrapper $isAward={true}>
                  <FaTrophy />
                </IconWrapper>
                <Content>
                  <Date>{item.date}</Date>
                  <Title $isAward={true}>{item.title}</Title>
                  <Organization>{item.organization}</Organization>
                  <Description>{item.description}</Description>
                </Content>
              </Card>
            ))}
          </CardList>
        </Column>

        {/* Certifications Column */}
        <Column>
          <ColumnTitle>Certifications</ColumnTitle>
          <CardList>
            {certsList.map((item) => (
              <Card key={item.id} $isAward={false}>
                <IconWrapper $isAward={false}>
                  <FaAward />
                </IconWrapper>
                <Content>
                  <Date>{item.date}</Date>
                  <Title $isAward={false}>{item.title}</Title>
                  <Organization>{item.organization}</Organization>
                  <Description>{item.description}</Description>
                </Content>
              </Card>
            ))}
          </CardList>
        </Column>
      </TwoColumn>

    </Section>
  );
};

const Section = styled.section`
  padding: 40px 0;
  max-width: 1150px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile || '768px'}) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ColumnTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding-left: 1rem;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 1.8rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.border || 'transparent'};
  border-left: ${({ $isAward }) => $isAward ? '4px solid #c9a227' : '4px solid #4a90d9'};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.2rem;
  color: ${({ $isAward, theme }) => $isAward ? '#c9a227' : theme.colors.primary};
  flex-shrink: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const Date = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const Title = styled.h4`
  font-size: 1.15rem; /* Adjusted for one line */
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 700;
  margin: 0;
  word-break: keep-all;
  white-space: nowrap; /* Prevent wrapping */
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Organization = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

export default Awards;
