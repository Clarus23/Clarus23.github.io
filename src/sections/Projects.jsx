import React, { useState } from 'react';
import styled from 'styled-components';
import { projects } from '../data/projects';
import ProjectModal from '../components/ProjectModal';
import { FaGithub, FaExternalLinkAlt, FaUsers, FaUserTie } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <Grid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
          >
            {/* 상단: 이미지 배너 */}
            <ImageBanner>
              {project.thumbnail ? (
                <BannerImg src={project.thumbnail} alt={`${project.title} thumbnail`} />
              ) : (
                <PlaceholderImage>{project.title}</PlaceholderImage>
              )}
              <BannerOverlay />
              {project.award && (
                <AwardBadge>{project.award}</AwardBadge>
              )}
            </ImageBanner>

            {/* 하단: 내용 */}
            <Content>
              <Header>
                <ProjectTitle>{project.title}</ProjectTitle>
                {project.subtitle && <Subtitle>{project.subtitle}</Subtitle>}
              </Header>

              <MetaBadges>
                <PeriodBadge>{project.period}</PeriodBadge>
                {project.teamSize && (
                  <MetaBadge>
                    <FaUsers size={11} />
                    {project.teamSize}
                  </MetaBadge>
                )}
                {project.myRole && (
                  <MetaBadge $highlight>
                    <FaUserTie size={11} />
                    {project.myRole}
                  </MetaBadge>
                )}
              </MetaBadges>

              <Description>{project.description}</Description>

              {/* 주요 기여: 항상 펼쳐짐 */}
              {project.details && project.details.length > 0 && (
                <DetailList>
                  {project.details.map((item, i) => (
                    <DetailItem key={i}>{item}</DetailItem>
                  ))}
                </DetailList>
              )}

              <Footer>
                <TechStack>
                  {project.tags.map((tech, i) => (
                    <Tag key={i}>{tech}</Tag>
                  ))}
                </TechStack>
                <LinksRow>
                  {project.github && (
                    <LinkButton
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> GitHub
                    </LinkButton>
                  )}
                  {project.demo && (
                    <LinkButton
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </LinkButton>
                  )}
                  <MoreHint>클릭하여 상세 보기 →</MoreHint>
                </LinksRow>
              </Footer>
            </Content>
          </ProjectCard>
        ))}
      </Grid>

      {/* 상세 모달 */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Section>
  );
};

/* ─── Styled Components ─── */

const Section = styled.section`
  padding: 40px 0;
  max-width: 900px;
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

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 28px -8px rgba(0, 0, 0, 0.45);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  outline: none;

  &:hover, &:focus-visible {
    transform: translateY(-5px);
    box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.55);
  }

  &:focus-visible {
    ring: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const ImageBanner = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: #111827;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.4s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.03);
  }
`;

const BannerOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to top, ${({ theme }) => theme.colors.bgLight}cc, transparent);
  pointer-events: none;
`;

const AwardBadge = styled.div`
  position: absolute;
  top: 12px;
  left: -2px;
  background: linear-gradient(90deg, #c9a227, #f0d060);
  color: #1a1200;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.28rem 0.8rem 0.28rem 0.7rem;
  border-radius: 0 4px 4px 0;
  box-shadow: 2px 2px 8px rgba(201,162,39,0.45);
  letter-spacing: 0.02em;
  z-index: 2;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    border-left: 2px solid #916e10;
    border-bottom: 5px solid transparent;
  }
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.2rem;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1.4rem 1.5rem 1.5rem;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.4rem;
  margin: 0;
`;

const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.85rem;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const MetaBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

const PeriodBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.74rem;
  padding: 0.18rem 0.55rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.secondary}44;
`;

const MetaBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background-color: ${({ $highlight, theme }) =>
    $highlight ? `${theme.colors.secondary}22` : theme.colors.bg};
  color: ${({ $highlight, theme }) =>
    $highlight ? theme.colors.secondary : theme.colors.textSecondary};
  font-size: 0.74rem;
  padding: 0.18rem 0.55rem;
  border-radius: 4px;
  border: 1px solid ${({ $highlight, theme }) =>
    $highlight ? `${theme.colors.secondary}66` : 'transparent'};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
  font-size: 0.88rem;
  margin: 0;
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const DetailItem = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8rem;
  line-height: 1.5;
  padding-left: 1em;
  position: relative;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: auto;
  padding-top: 0.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  padding: 0.18rem 0.45rem;
  border-radius: 4px;
`;

const LinksRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.2s;
  font-size: 0.85rem;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const MoreHint = styled.span`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  opacity: 0.7;
  transition: opacity 0.2s;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export default Projects;
