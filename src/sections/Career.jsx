import React from 'react';
import styled from 'styled-components';
import { career } from '../data/career';

const Career = () => {
  return (
    <Section id="career">
      <SectionTitle>Career</SectionTitle>
      <Timeline>
        {career.map((item) => (
          <TimelineItem key={item.id}>
            <LogoWrapper>
              {/* Placeholder for Logo */}
              <LogoPlaceholder>{item.company[0]}</LogoPlaceholder>
            </LogoWrapper>
            <Content>
              <Company>{item.company}</Company>
              <Position>{item.position} <Period>| {item.period}</Period></Position>
              <DescriptionList>
                {item.description.map((desc, i) => (
                  <DescriptionItem key={i}>{desc}</DescriptionItem>
                ))}
              </DescriptionList>
            </Content>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

const Section = styled.section`
  padding: 100px 0;
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
`;

const Timeline = styled.div`
  position: relative;
  border-left: 2px solid ${({ theme }) => theme.colors.bgLight};
  margin-left: 1rem;
  padding-left: 2rem;
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -2.6rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.bg};
  }
`;

const LogoWrapper = styled.div`
  /* hidden for now or use if you want logo beside */
  display: none; 
`;

const LogoPlaceholder = styled.div`
`;

const Content = styled.div`
`;

const Company = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
`;

const Position = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  font-weight: normal;
`;

const Period = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const DescriptionList = styled.ul`
  list-style: none;
`;

const DescriptionItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Career;
