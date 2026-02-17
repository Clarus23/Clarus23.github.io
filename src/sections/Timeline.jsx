import React from 'react';
import styled from 'styled-components';
import { timeline } from '../data/timeline';

const Timeline = () => {
    return (
        <Section id="timeline">
            <SectionTitle>Timeline</SectionTitle>
            <TimelineContainer>
                {timeline.map((item, index) => (
                    <TimelineItem key={item.id}>
                        <TimelineContent>
                            <Date>{item.period}</Date>
                            <TypeLabel type={item.type}>{item.type}</TypeLabel>
                            <Title>{item.title}</Title>
                            <Role>{item.role}</Role>
                            <DescList>
                                {item.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </DescList>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </TimelineContainer>
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

const TimelineContainer = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.border || '#ddd'};
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;

  &::before {
    content: '';
    position: absolute;
    left: -2.4rem; /* Adjust based on padding and dot size */
    top: 5px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    border: 3px solid ${({ theme }) => theme.colors.background};
  }
`;

const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Date = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 0.9rem;
`;

const TypeLabel = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  width: fit-content;
  background: ${({ type, theme }) =>
        type === 'Project' ? theme.colors.primary + '20' :
            type === 'Education' ? theme.colors.secondary + '20' : '#f0f0f0'};
  color: ${({ type, theme }) =>
        type === 'Project' ? theme.colors.primary :
            type === 'Education' ? theme.colors.secondary : '#666'};
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0.2rem 0;
`;

const Role = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`;

const DescList = styled.ul`
  list-style-type: disc;
  padding-left: 1.2rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  
  li {
    margin-bottom: 0.3rem;
    line-height: 1.6;
  }
`;

export default Timeline;
