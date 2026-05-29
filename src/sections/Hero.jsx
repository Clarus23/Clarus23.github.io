import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from '../components/ui/Button';
import { FaGithub, FaEnvelope, FaPenNib } from 'react-icons/fa';

const Hero = () => {
  return (
    <Section id="hero">
      <Content>
        <Intro>안녕하세요, 저는</Intro>
        <Title>정혜원입니다.</Title>
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
          안정적이고 확장 가능한 시스템을 구축하는 것을 목표로 합니다.
        </Description>
        <ButtonGroup>
          <Button href="#about" variant="primary">더 알아보기</Button>
          <IconButton href="https://github.com/Clarus23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </IconButton>
          <IconButton href="mailto:dnjs3023@gmail.com" aria-label="Email">
            <FaEnvelope />
          </IconButton>

        </ButtonGroup>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: auto;
`;

const Content = styled.div`
  max-width: 1150px;
`;

const Intro = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: clamp(30px, 5vw, 60px);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.1;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.div`
  font-size: clamp(20px, 4vw, 40px);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.1;
  margin-bottom: 1rem;
  height: 60px;
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
