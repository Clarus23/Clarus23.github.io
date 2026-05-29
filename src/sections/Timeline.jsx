import React from 'react';
import styled from 'styled-components';
import { timeline } from '../data/timeline';
import { FaRocket, FaGraduationCap, FaAward } from 'react-icons/fa';

const getTypeConfig = (type) => {
  if (type === 'Project') {
    return {
      color: '#6366f1',
      borderColor: '#c7d2fe',
      icon: <FaRocket size={13} color="#fff" />,
      pillBg: '#e0e7ff',
      pillText: '#4f46e5'
    };
  }
  if (type === 'Education') {
    return {
      color: '#10b981',
      borderColor: '#a7f3d0',
      icon: <FaGraduationCap size={15} color="#fff" />,
      pillBg: '#d1fae5',
      pillText: '#059669'
    };
  }
  return {
    color: '#f59e0b',
    borderColor: '#fde68a',
    icon: <FaAward size={15} color="#fff" />,
    pillBg: '#fef3c7',
    pillText: '#d97706'
  };
};

const Timeline = () => {
  return (
    <Section id="timeline">
      <SectionTitle>Timeline</SectionTitle>

      <LegendContainer>
        <LegendItemWrapper>
          <LegendItem $config={getTypeConfig('Project')}>
            <FaRocket size={12} /> Projects
          </LegendItem>
        </LegendItemWrapper>
        <LegendItemWrapper>
          <LegendItem $config={getTypeConfig('Education')}>
            <FaGraduationCap size={13} /> Education & Certifications
          </LegendItem>
        </LegendItemWrapper>
      </LegendContainer>

      <TimelineContainer>
        {timeline.map((item) => {
          const config = getTypeConfig(item.type);
          const isLeft = item.type === 'Project';

          return (
            <TimelineItem key={item.id} $isLeft={isLeft}>
              <Card $isLeft={isLeft} $config={config}>
                <Date>{item.period}</Date>
                <Title>{item.title}</Title>
                <DescContainer>
                  {item.description.map((desc, i) => (
                    <DescLine key={i}>{desc}</DescLine>
                  ))}
                  {item.role && (
                    <DescLine style={{ marginTop: '0.3rem', fontWeight: 500, color: '#64748b' }}>
                      {item.role}
                    </DescLine>
                  )}
                </DescContainer>
              </Card>
              <Dot $config={config}>{config.icon}</Dot>
            </TimelineItem>
          );
        })}
      </TimelineContainer>
    </Section>
  );
};

/* ─── Styled Components ─── */

const Section = styled.section`
  padding: 40px 0;
  max-width: 1150px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
`;

const LegendContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile || '768px'}) {
    flex-direction: column;
    gap: 1rem;
    padding-left: 30px;
  }
`;

const LegendItemWrapper = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile || '768px'}) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  background: ${({ $config }) => $config.pillBg};
  color: ${({ $config }) => $config.pillText};
  font-size: 0.8rem;
  font-weight: 700;
`;

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e2e8f0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile || '768px'}) {
      left: 30px;
      transform: none;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  display: flex;
  justify-content: ${({ $isLeft }) => ($isLeft ? 'flex-start' : 'flex-end')};
  align-items: center;
  width: 100%;
  margin-bottom: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile || '768px'}) {
    justify-content: flex-end;
  }
`;

const Dot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ $config }) => $config.color};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 0 0 6px ${({ theme }) => theme.colors.bg}; /* Creates cutout effect */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile || '768px'}) {
    left: 30px;
  }
`;

const Card = styled.div`
  width: 45%;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ $config }) => $config.borderColor};
  padding: 1.5rem;
  border-radius: 8px;
  text-align: ${({ $isLeft }) => ($isLeft ? 'right' : 'left')};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
    border-color: ${({ $config }) => $config.color};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile || '768px'}) {
    width: calc(100% - 70px);
    text-align: left;
  }
`;

const Date = styled.div`
  font-size: 0.75rem;
  color: #94a3b8;
  font-family: ${({ theme }) => theme.fonts.mono};
  margin-bottom: 0.4rem;
  letter-spacing: 0.02em;
`;

const Title = styled.h3`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0 0 0.5rem 0;
  font-weight: 700;
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: #64748b;
  font-size: 0.85rem;
  line-height: 1.5;
`;

const DescLine = styled.p`
  margin: 0;
`;

export default Timeline;
