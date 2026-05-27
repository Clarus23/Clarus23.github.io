import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaUsers, FaUserTie, FaCalendarAlt, FaLayerGroup, FaCheckCircle, FaLightbulb } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
    // ESC 키로 닫기
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <Overlay onClick={onClose}>
            <Modal onClick={(e) => e.stopPropagation()}>
                {/* 닫기 버튼 */}
                <CloseBtn onClick={onClose} aria-label="닫기"><FaTimes /></CloseBtn>

                {/* 헤더 배너 */}
                <ModalBanner>
                    {project.thumbnail && <BannerImg src={project.thumbnail} alt={project.title} />}
                    <BannerGradient />
                    <BannerText>
                        <ModalTitle>{project.title}</ModalTitle>
                        <ModalSubtitle>{project.subtitle}</ModalSubtitle>
                    </BannerText>
                </ModalBanner>

                <ModalBody>
                    {/* 메타 정보 */}
                    <MetaRow>
                        <MetaItem><FaCalendarAlt />{project.period}</MetaItem>
                        <MetaItem><FaUsers />{project.teamSize}</MetaItem>
                        <MetaItem $highlight><FaUserTie />{project.myRole}</MetaItem>

                    </MetaRow>

                    {/* 프로젝트 설명 */}
                    <SectionBlock>
                        <p style={{ lineHeight: '1.75', color: 'inherit' }}>{project.description}</p>
                    </SectionBlock>

                    {/* 기술 스택 */}
                    {project.tech && (
                        <SectionBlock>
                            <SectionLabel>기술 환경</SectionLabel>
                            <TechTable>
                                {Object.entries(project.tech).map(([key, value]) => (
                                    <TechRow key={key}>
                                        <TechKey>{key}</TechKey>
                                        <TechVal>{value}</TechVal>
                                    </TechRow>
                                ))}
                            </TechTable>
                        </SectionBlock>
                    )}

                    <Divider />

                    {/* 상세 구현 섹션 */}
                    {project.modalSections && project.modalSections.map((sec, i) => (
                        <SectionBlock key={i}>
                            <SectionLabel>
                                <SectionNum>{String(i + 1).padStart(2, '0')}</SectionNum>
                                {sec.title}
                            </SectionLabel>

                            <ProblemBox>
                                <ProblemLabel>문제 상황</ProblemLabel>
                                <p>{sec.problem}</p>
                            </ProblemBox>

                            <ImplList>
                                <ImplLabel>구현 내용</ImplLabel>
                                {sec.implementations.map((impl, j) => (
                                    <ImplItem key={j}>{impl}</ImplItem>
                                ))}
                            </ImplList>

                            <ResultBox>
                                <FaCheckCircle style={{ flexShrink: 0 }} />
                                <span>{sec.result}</span>
                            </ResultBox>
                        </SectionBlock>
                    ))}

                    <Divider />

                    {/* 성과 */}
                    {project.outcomes && (
                        <SectionBlock>
                            <SectionLabel>성과</SectionLabel>
                            <OutcomeList>
                                {project.outcomes.map((o, i) => (
                                    <OutcomeItem key={i}>{o}</OutcomeItem>
                                ))}
                            </OutcomeList>
                        </SectionBlock>
                    )}



                    {/* 링크 */}
                    {(project.github || project.demo) && (
                        <LinkRow>
                            {project.github && (
                                <LinkBtn href={project.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> GitHub
                                </LinkBtn>
                            )}
                            {project.demo && (
                                <LinkBtn href={project.demo} target="_blank" rel="noopener noreferrer" $primary>
                                    <FaExternalLinkAlt /> Live Demo
                                </LinkBtn>
                            )}
                        </LinkRow>
                    )}


                </ModalBody>
            </Modal>
        </Overlay>
    );
};

/* ─── Animations ─── */
const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideUp = keyframes`from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); }`;

/* ─── Styled Components ─── */
const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    animation: ${fadeIn} 0.2s ease;
`;

const Modal = styled.div`
    background: ${({ theme }) => theme.colors.bgLight};
    border-radius: 16px;
    max-width: 780px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: ${slideUp} 0.3s ease;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.secondary}44 transparent;
`;

const CloseBtn = styled.button`
    position: sticky;
    top: 1rem;
    float: right;
    margin: 1rem 1rem 0 0;
    background: ${({ theme }) => theme.colors.bg}cc;
    border: none;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.1rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: color 0.2s, background 0.2s;

    &:hover {
        color: ${({ theme }) => theme.colors.textPrimary};
        background: ${({ theme }) => theme.colors.bg};
    }
`;

const ModalBanner = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 6;
    overflow: hidden;
    background: #111827;
    margin-top: -2.5rem; /* overlap with close btn */
`;

const BannerImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
`;

const BannerGradient = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, ${({ theme }) => theme.colors.bgLight} 0%, transparent 60%);
`;

const BannerText = styled.div`
    position: absolute;
    bottom: 1.2rem;
    left: 2rem;
`;

const ModalTitle = styled.h2`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 2rem;
    margin: 0;
    text-shadow: 0 2px 8px rgba(0,0,0,0.6);
`;

const ModalSubtitle = styled.p`
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.9rem;
    margin: 0.25rem 0 0;
`;

const ModalBody = styled.div`
    padding: 1.5rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.92rem;
    line-height: 1.7;
`;

const MetaRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const MetaItem = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    background: ${({ $highlight, theme }) => $highlight ? `${theme.colors.secondary}22` : theme.colors.bg};
    color: ${({ $highlight, theme }) => $highlight ? theme.colors.secondary : theme.colors.textSecondary};
    border: 1px solid ${({ $highlight, theme }) => $highlight ? `${theme.colors.secondary}55` : 'transparent'};
    font-size: 0.78rem;
    padding: 0.22rem 0.6rem;
    border-radius: 4px;
    font-family: ${({ theme }) => theme.fonts.main};
`;

const SectionBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`;

const SectionLabel = styled.h4`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1rem;
    margin: 0;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary}33;
`;

const SectionNum = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.85rem;
`;

const TechTable = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;

const TechRow = styled.div`
    display: grid;
    grid-template-columns: 90px 1fr;
    gap: 0.5rem;
    font-size: 0.85rem;
`;

const TechKey = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.78rem;
    padding-top: 0.1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
`;

const TechVal = styled.span`
    color: ${({ theme }) => theme.colors.textSecondary};
`;

const Divider = styled.hr`
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.secondary}22;
    margin: 0.3rem 0;
`;

const ProblemBox = styled.div`
    background: ${({ theme }) => theme.colors.bg};
    border-left: 3px solid ${({ theme }) => theme.colors.secondary}88;
    border-radius: 0 6px 6px 0;
    padding: 0.7rem 1rem;
    font-size: 0.88rem;

    p { margin: 0.25rem 0 0; }
`;

const ProblemLabel = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.75rem;
    font-weight: bold;
    letter-spacing: 0.05em;
`;

const ImplList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;

const ImplLabel = styled.div`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
`;

const ImplItem = styled.li`
    padding-left: 1.2em;
    position: relative;
    font-size: 0.88rem;

    &::before {
        content: '▸';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.secondary};
    }
`;

const ResultBox = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.88rem;
    font-weight: 500;
`;

const OutcomeList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;

const OutcomeItem = styled.li`
    padding-left: 1.2em;
    position: relative;
    font-size: 0.88rem;

    &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.secondary};
        font-weight: bold;
    }
`;

const LessonList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;

const LessonItem = styled.li`
    padding-left: 1.2em;
    position: relative;
    font-size: 0.88rem;

    &::before {
        content: '→';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.secondary};
    }
`;

const LinkRow = styled.div`
    display: flex;
    gap: 0.8rem;
    margin-top: 0.5rem;
`;

const LinkBtn = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.2rem;
    border-radius: 6px;
    font-size: 0.88rem;
    background: ${({ $primary, theme }) => $primary ? theme.colors.secondary : theme.colors.bg};
    color: ${({ $primary, theme }) => $primary ? theme.colors.bg : theme.colors.textPrimary};
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover { opacity: 0.8; }
`;

const TagRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.5rem;
`;

const Tag = styled.span`
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.72rem;
    padding: 0.18rem 0.5rem;
    border-radius: 4px;
`;

export default ProjectModal;
