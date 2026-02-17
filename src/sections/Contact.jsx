import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <ContactWrapper>
        <p>
          프로젝트 제안이나 질문이 있으시면 언제든지 연락주세요.<br />
          함께 성장할 수 있는 기회를 기다립니다.
        </p>
        <EmailButton href="mailto:email@example.com">
          이메일 보내기
        </EmailButton>
      </ContactWrapper>
    </Section>
  );
};

const Section = styled.section`
  padding: 40px 0;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 80px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const EmailButton = styled.a`
  margin-top: 1rem;
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1rem;
  transition: ${({ theme }) => theme.colors.transition};

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

export default Contact;
