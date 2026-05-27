import React from 'react';
import styled from 'styled-components';
import { FaUser, FaCalendar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import { education } from '../data/education';

const About = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(`${text} 복사되었습니다!`);
        });
    };

    const infoList = [
        { icon: <FaUser />, label: '이름', value: '정혜원' },
        { icon: <FaCalendar />, label: '생년월일', value: '1999.03.23' },
        { icon: <FaMapMarkerAlt />, label: '주소', value: '광주광역시 광산구' },
        { icon: <FaPhone />, label: '연락처', value: '010-4372-3023' },
        { icon: <FaEnvelope />, label: '이메일', value: 'dnjs3023@gmail.com', isCopyable: true },
        { icon: <FaGraduationCap />, label: '학력', value: '전북대학교 컴퓨터공학부' },
    ];

    return (
        <Section id="about">
            <SectionTitle>About Me</SectionTitle>

            <TwoColumn>
                {/* 왼쪽: 사진 + Personal Info */}
                <LeftColumn>
                    <ProfilePhoto src="/profile.jpg" alt="정혜원 프로필 사진" />
                    <SubTitle>Personal Info</SubTitle>
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
                </LeftColumn>

                {/* 오른쪽: Bio + Education */}
                <RightColumn>
                    <Bio>
                        <p>
                            <b>"장애 없는 서비스를 만들기 위해, 실패 경로까지 설계하는 백엔드 개발자 정혜원입니다."</b><br /><br />
                            백엔드 시스템의 진정한 가치는 '사용자가 체감하지 못하는 안정성'에 있다고 믿습니다. 그렇기에 단순히 기능이 동작하는 해피 경로(Happy Path)에 만족하지 않고, 외부 시스템 장애나 트랜잭션 롤백과 같은 예측 불가능한 실패 상황에서도 비즈니스 로직이 멈추지 않도록 방어적으로 설계합니다.<br /><br />
                            이런 철학을 바탕으로, 실시간 채팅의 동기화 일관성 확보부터 Redis 고가용성(HA) 인프라 구축, 그리고 시스템 메트릭 모니터링 환경 구성까지 시스템 전반의 단단함을 다져왔습니다.<br /><br />
                            또한, 개인이 잘 짜는 코드를 넘어 팀 전체가 무너지지 않는 구조를 고민합니다. 상태 모델에 기반한 안전한 권한 정책을 설계하고 초기 컨벤션을 단단하게 주도하여, 팀원 모두가 비즈니스 로직에만 집중할 수 있는 환경을 만드는 것을 즐깁니다.
                        </p>
                    </Bio>

                    <SubTitle>Education</SubTitle>
                    <EducationList>
                        {education.map((edu) => (
                            <EducationItem key={edu.id}>
                                <EduHeader>
                                    <EduSchool>{edu.school}</EduSchool>
                                    <EduPeriod>{edu.period}</EduPeriod>
                                </EduHeader>
                                <EduMajor>{edu.major}</EduMajor>
                                <EduDesc>{edu.description}</EduDesc>
                            </EducationItem>
                        ))}
                    </EducationList>
                </RightColumn>
            </TwoColumn>
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

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProfilePhoto = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  object-position: center top;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.secondary}44;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
  display: block;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding-left: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  width: 100%;
`;

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  cursor: ${({ isCopyable }) => isCopyable ? 'pointer' : 'default'};
  transition: transform 0.2s;
  background: ${({ theme }) => theme.colors.backgroundAlt}; /* Added background for better card feel */
  border-radius: 8px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary}; /* Changed to primary color */
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
  font-size: 1.05rem;
`;

/* Education Styles */
const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EducationItem = styled.div`
  background: ${({ theme }) => theme.colors.bgLight};
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border || '#eee'};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const EduHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const EduPeriod = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  background: ${({ theme }) => theme.colors.bg};
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
`;



const EduSchool = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
`;

const EduMajor = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
`;

const EduDesc = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
`;

export default About;
