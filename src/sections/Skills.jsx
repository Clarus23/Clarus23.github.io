import React from 'react';
import styled from 'styled-components';
import { skills } from '../data/skills';
import {
  FaJava, FaJs, FaReact, FaVuejs, FaGitAlt, FaDocker, FaAws, FaJira
} from 'react-icons/fa';
import { SiSpringboot, SiSpring, SiMysql, SiRedis } from 'react-icons/si';

const iconMap = {
  "Java": <FaJava />,
  "Spring Boot": <SiSpringboot />,
  "JPA": <SiSpring />,
  "MySQL": <SiMysql />,
  "Redis": <SiRedis />,
  "Vue.js": <FaVuejs />,
  "JavaScript": <FaJs />,
  "React": <FaReact />,
  "Git": <FaGitAlt />,
  "Docker": <FaDocker />,
  "AWS": <FaAws />,
  "Jira": <FaJira />
};

const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SkillsContainer>
        {Object.entries(skills).map(([category, items]) => (
          <Category key={category}>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <SkillList>
              {items.map((skill, index) => (
                <SkillItem key={index}>
                  <IconWrapper>{iconMap[skill.name]}</IconWrapper>
                  <SkillName>{skill.name}</SkillName>
                  {skill.level && <Tooltip>{skill.level}</Tooltip>}
                </SkillItem>
              ))}
            </SkillList>
          </Category>
        ))}
      </SkillsContainer>
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

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Category = styled.div`
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSecondary};
  padding-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.bg};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s;
  white-space: nowrap;
  font-weight: bold;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.secondary} transparent transparent transparent;
  }
`;

const SkillItem = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.95rem;
  cursor: default;
  border: 1px solid ${({ theme }) => theme.colors.border || '#eee'};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    
    ${Tooltip} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const IconWrapper = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
`;

const SkillName = styled.span`
  
`;

export default Skills;
