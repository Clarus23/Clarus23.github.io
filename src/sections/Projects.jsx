import React from 'react';
import styled from 'styled-components';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <Grid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ImageContainer>
              {/* Use a placeholder div if no real image, or img tag */}
              <PlaceholderImage>{project.title}</PlaceholderImage>
            </ImageContainer>
            <Content>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Period>{project.period}</Period>
              <Description>{project.description}</Description>
              <TechStack>
                {project.stack.map((tech, i) => (
                  <Tag key={i}>{tech}</Tag>
                ))}
              </TechStack>
              <Links>
                {project.links.github && (
                  <LinkButton href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </LinkButton>
                )}
                {project.links.demo && (
                  <LinkButton href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </LinkButton>
                )}
              </Links>
            </Content>
          </ProjectCard>
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
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  padding: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 250px;
  background-color: #233554;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const PlaceholderImage = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.2rem;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Period = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.2s;
  font-size: 0.9rem;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Projects;
