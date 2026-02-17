import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from '../components/ui/Button';
import { FaGithub, FaEnvelope, FaPenNib, FaFileAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <Section id="hero">
      <Content>
        <Intro>안녕하세요, 저는</Intro>
        <Title>Hyewon Jung입니다.</Title>
        <Subtitle>
          <Typewriter
            options={{
              strings: ['Backend Developer', 'Problem Solver', 'Lifetime Learner'],
              autoStart: true,
              loop: true,
            }}
          />
        </Subtitle>
        <Description>
          사용자에게 가치를 전달하는 백엔드 개발자입니다.<br />
          안정적이고 확장 가능한 시스템을 구축하는 것에 열정을 가지고 있습니다.
        </Description>
        <ButtonGroup>
          <Button href="#about" variant="primary">더 알아보기</Button>
          <IconButton href="https://github.com/Clarus23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </IconButton>
          <IconButton href="mailto:dnjs3023@gmail.com" aria-label="Email">
            <FaEnvelope />
          </IconButton>
          <IconButton href="https://clarus23.tistory.com" target="_blank" rel="noopener noreferrer" aria-label="Blog">
            <FaPenNib />
          </IconButton>
          <IconButton href="#" target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <FaFileAlt />
          </IconButton>
        </ButtonGroup>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
`;

const Content = styled.div`
  max-width: 1000px;
`;

const Intro = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.1;
  margin-bottom: 1rem;
`;

const Subtitle = styled.div`
  font-size: clamp(30px, 6vw, 60px);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.1;
  margin-bottom: 2rem;
  height: 80px; /* Prevent layout shift */
  display: flex;
  align-items: center;

  .Typewriter__wrapper {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const Description = styled.p`
  max-width: 540px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const IconButton = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.2s, transform 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

export default Hero;
