import React from 'react';
import styled from 'styled-components';
import { FaUser, FaCalendar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGraduationCap } from 'react-icons/fa';

const About = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(`${text} 복사되었습니다!`); // Simple alert for now, can be upgraded to Toast
        });
    };

    const infoList = [
        { icon: <FaUser />, label: '이름', value: '홍길동' },
        { icon: <FaCalendar />, label: '생년월일', value: '199X.XX.XX' },
        { icon: <FaMapMarkerAlt />, label: '주소', value: '서울시 강남구' },
        { icon: <FaPhone />, label: '연락처', value: '010-1234-5678' },
        { icon: <FaEnvelope />, label: '이메일', value: 'email@example.com', isCopyable: true },
        { icon: <FaGraduationCap />, label: '학력', value: 'OO대학교 컴퓨터공학부' },
    ];

    return (
        <Section id="about">
            <SectionTitle>About Me</SectionTitle>
            <Grid>
                {infoList.map((info, index) => (
                    <InfoCard key={index} onClick={() => info.isCopyable && copyToClipboard(info.value)} isCopyable={info.isCopyable}>
                        <IconWrapper>{info.icon}</IconWrapper>
                        <InfoContext>
                            <Label>{info.label}</Label>
                            <Value>{info.value}</Value>
                        </InfoContext>
                    </InfoCard>
                ))}
            </Grid>
            <Bio>
                <p>
                    <b>"새로운 기술에 도전하는 것을 두려워하지 않는 개발자입니다."</b><br /><br />
                    웹 개발의 매력에 빠져 다양한 프로젝트를 경험하며 성장해왔습니다.
                    사용자 경험을 최우선으로 생각하며, 유지보수하기 좋은 코드를 작성하기 위해 항상 고민합니다.
                </p>
            </Bio>
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  cursor: ${({ isCopyable }) => isCopyable ? 'pointer' : 'default'};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const InfoContext = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.25rem;
`;

const Value = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
`;

const Bio = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
`;

export default About;
