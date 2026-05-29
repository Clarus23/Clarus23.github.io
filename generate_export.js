import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Data Embedded
const education = [
    { school: "삼성 청년 SW 아카데미(SSAFY) 14기 수료", period: "2025.07 - 2026.07", major: "Java 전공 트랙", description: "알고리즘 및 웹 개발 심화 과정 이수" },
    { school: "전북대학교", period: "2018.03 - 2025.02", major: "정보컴퓨터공학", description: "컴퓨터 공학 전반 학습" },
    { school: "창평고등학교", period: "2015.03 - 2018.02", major: "이과", description: "고등학교 과정 이수" }
];

const awards = [
    { title: "SSAFY 14기 공통 프로젝트 우수상", date: "2026.02", organization: "삼성 청년 SW 아카데미 (SSAFY)", description: "CONY — 기프티콘 통합 관리 서비스", isAward: true },
    { title: "1학기 성적 우수상", date: "2025.12", organization: "삼성 청년 SW 아카데미 (SSAFY)", description: "학업 성취 우수", isAward: true },
    { title: "정보처리기사", date: "2024", organization: "한국산업인력공단", description: "국가기술자격", isAward: false },
    { title: "SQLD (SQL 개발자)", date: "2025", organization: "한국데이터산업진흥원", description: "국가공인 민간자격", isAward: false }
];

const projects = [
    {
        title: "CONY",
        subtitle: "기프티콘 통합 관리 서비스",
        award: "🏆 SSAFY 14기 공통 프로젝트 우수상",
        period: "2026.01 - 2026.02",
        teamSize: "6인 팀 프로젝트",
        myRole: "백엔드 핵심 개발자",
        thumbnail: "../src/assets/images/cony-thumbnail.png",
        description: "OCR 자동 등록, Geofence 기반 위치 알림, 거래/결제, AI 개인화 추천까지 제공하는 모바일 중심 기프티콘 통합 관리 서비스입니다. 사용자 보유 기프티콘을 체계적으로 관리하고, 근처 매장 도착 시 사용 가능한 쿠폰을 즉시 안내합니다.",
        tags: ["Java 17", "Spring Boot", "JPA", "MySQL", "Redis", "Docker", "Jenkins", "AWS S3", "React Native", "FastAPI", "Firebase FCM", "KakaoPay"],
        details: [
            "Redis GEO + Spring Batch 기반 매장 캐시 구조 설계 및 위치 기반 탐색 파이프라인 구현",
            "Greedy Clustering 알고리즘으로 Android OS 지오펜스 100개 제약 극복",
            "FCM 푸시 알림 + 스케줄러 기반 만료 임박 알림 자동화 (매일 오전 10시)",
            "거리/유효기간 기반 일반 추천 + 사용자 로그 기반 AI 개인화 추천 연동",
            "MSA 서버 간 X-Internal-Key 인터셉터 인증 경계 도입으로 보안 강화",
            "payment ↔ manage 내부 API 상태 동기화로 기프티콘 소유권 이전 정합성 확보"
        ],
        tech: {
            client: "React Native (TypeScript), Next.js",
            backend: "Java 17, Spring Boot, Spring Security, JPA, Spring Batch",
            ai: "Python, FastAPI (OCR / 추천)",
            infra: "MySQL, Redis GEO, AWS S3, Docker Compose, Jenkins, Prometheus, Grafana",
            external: "Google/Kakao OAuth, KakaoPay, Firebase Cloud Messaging"
        },
        modalSections: [
            {
                title: "Geofence 성능 최적화 및 위치 알림 구현",
                problem: "위치 기반 조회를 DB 중심으로 처리 시 응답 지연과 부하 위험 발생",
                implementations: [
                    "Redis GEO + Hash + Pipeline으로 주변 매장 조회 구조 설계 및 Batch 워밍업",
                    "Android 지오펜스 100개 제한 극복을 위해 Greedy Clustering으로 근접 매장 묶음 처리"
                ],
                result: "위치 기능 응답성 개선 및 운영 안정성 확보"
            },
            {
                title: "FCM 알림 시스템 운영 안정화",
                problem: "푸시 전송 실패 시 추적이 어렵고, 대량 알림 발송 시 부하 우려",
                implementations: [
                    "Geofence 진입 / 만료 임박 / 자동판매 알림 공통 발송 구조 구성",
                    "FCM 전송 실패 시 알림 히스토리 저장 (Best-effort 전략)",
                    "만료 임박 알림 스케줄러(매일 오전 10시) 구현"
                ],
                result: "장애 상황에서도 이벤트 이력 추적 가능, 운영 대응성 향상"
            },
            {
                title: "MSA 간 정합성 및 내부 API 보안 강화",
                problem: "판매/구매 이벤트 시 payment ↔ manage 서버 간 상태 불일치 위험",
                implementations: [
                    "판매 시작/취소/구매 완료 시 상태 및 소유권 동기화 내부 API 구현",
                    "X-Internal-Key 기반 인터셉터로 내부 API 인증 경계 추가"
                ],
                result: "도메인 정합성과 서비스 간 호출 신뢰성 100% 보장"
            }
        ],
        outcomes: [
            "위치 기반 처리 한계 극복: Greedy Clustering과 Redis GEO를 활용해 Android의 지오펜스 100개 제약을 우회하고, 탐색 응답성을 확보했습니다.",
            "마이크로서비스 정합성 보장: X-Internal-Key 인증과 상태 동기화 API를 설계하여, 소유권 이전 시 발생할 수 있는 데이터 불일치를 차단했습니다.",
            "운영 리스크 방어 설계: 외부 연동(FCM, OCR) 실패 시에도 핵심 로직이 중단되지 않도록 Best-effort 히스토리 보존 전략을 도입했습니다."
        ]
    },
    {
        title: "ANVI",
        subtitle: "온디바이스 AI 기반 비대면 시험 감독 솔루션",
        award: "",
        period: "2026.04 - 2026.05",
        teamSize: "6인 팀 (SSAFY 14기 기업연계 — Edint)",
        myRole: "백엔드 개발자 / 인프라 · CI·CD · 모니터링",
        thumbnail: "../src/assets/images/Anvi_thumbnail.png",
        description: "CES 2024 발표 기업 Edint와 협업한 차세대 비대면 시험 감독 PoC 프로젝트입니다. 응시자의 Android 디바이스에서 YOLO + Gemma 4 VLM을 직접 추론(On-Device AI)해 부정행위를 실시간 감지하고, 비식별 처리된 이미지만 서버로 전송하여 개인정보 보호와 서버 비용 절감을 달성했습니다.",
        tags: ["Java 17", "Spring Boot 3", "PostgreSQL 16", "Redis Sentinel", "SSE", "Pub/Sub", "JWT", "Docker Compose", "GitLab CI/CD", "Prometheus", "Grafana"],
        details: [
            "Heartbeat 만료 감지를 Redis TTL + Keyspace Notification으로 구현 (지연 평균 15초 → 1초 미만)",
            "SSE + Redis Pub/Sub 8채널로 실시간 양방향 채널 및 Fault Isolation 달성",
            "Redis Sentinel 3노드(쿼럼 2) HA로 메시지 브로커 단일 장애점 제거 및 자동 Failover 검증",
            "GitLab CI/CD를 통한 단일 서비스 단위 무중단 배포 파이프라인 구축"
        ],
        tech: {
            backend: "Java 17, Spring Boot 3.x, Spring Security 6",
            realtime: "Spring MVC SSE(SseEmitter), Redis Pub/Sub",
            infra: "Docker Compose, GitLab CI/CD, Redis Sentinel, EC2",
            monitoring: "Prometheus, Grafana, Micrometer"
        },
        modalSections: [
            {
                title: "Heartbeat 만료 감지 최적화",
                problem: "DB 폴링으로 동시 접속자의 연결 만료를 추적하면 DB 부하 및 지연 시간(15초) 증가",
                implementations: [
                    "Heartbeat 수신 시 Redis Key(TTL 60초) 업데이트 방식으로 전환",
                    "Redis Keyspace Notification(__keyevent@0__:expired) 이벤트를 스프링에서 구독",
                    "만료 이벤트 발생 시 즉각적으로 연결 끊김 이벤트를 발송"
                ],
                result: "감지 지연 시간 평균 15초 → 1초 미만 단축, DB 부하 O(0) 달성"
            },
            {
                title: "SSE + Redis Pub/Sub 실시간 양방향 채널",
                problem: "모바일 환경의 잦은 네트워크 단절 시 이벤트 손실 위험 및 App-Web 강결합 문제",
                implementations: [
                    "App/Web 양쪽에 단방향 SSE 두 개로 논리적 양방향 효과 달성",
                    "SseEmitterRegistry를 통한 Thread-safe 한 커넥션 관리",
                    "25초 주기 Keep-alive ping 및 재연결 시 상태 복원 로직 구현"
                ],
                result: "App ↔ Web 결합도 제거, 단속적 연결 환경에서도 이벤트 손실 0 보장"
            },
            {
                title: "인프라 HA 구성 및 CI/CD",
                problem: "단일 Redis 노드 장애 시 실시간 파이프라인 전체 마비 위험",
                implementations: [
                    "Redis Sentinel 3노드(Quorum 2) 구성으로 자동 Failover 설정",
                    "변경 경로(BE/FE) 단위의 GitLab CI/CD 무중단 파이프라인 구성",
                    "Prometheus + Grafana를 연동하여 Heartbeat 메트릭 시각화 대시보드 구축"
                ],
                result: "SPOF 제거로 고가용성 확보 및 데이터 기반 운영 모니터링 체계 확립"
            }
        ],
        outcomes: [
            "초저지연 감지 아키텍처 달성: Redis TTL + Keyspace Notification을 도입하여 동시 접속자 수에 무관하게 감지 지연 시간을 1초 미만으로 단축했습니다.",
            "단일 장애점(SPOF) 제거: Redis Sentinel HA를 구성하고 Failover를 검증하여, 실시간 이벤트 브로커의 고가용성을 확보했습니다.",
            "운영 가시성 확보: Prometheus와 Grafana를 도입하여 실시간 트래픽 및 시스템 메트릭을 정량적으로 모니터링할 수 있는 체계를 마련했습니다."
        ]
    },
    {
        title: "알맹이",
        subtitle: "소상공인 인사·노무 올인원 플랫폼",
        award: "",
        period: "2026.02 - 2026.04",
        teamSize: "6인 팀 프로젝트",
        myRole: "Team Leader / 백엔드 핵심 개발자",
        thumbnail: "../src/assets/images/almaengi-thumbnail.png",
        description: "소상공인·자영업자의 근로계약, 출결, 급여 정산, 사내 채팅, 노동법 AI 질의를 하나의 서비스로 통합한 올인원 플랫폼입니다. 전자 근로계약 서명부터 급여명세서 자동 발급, 실시간 경매(대타) 시스템까지 실제 업무 흐름을 끊김 없이 연결합니다.",
        tags: ["Java 17", "Spring Boot", "JPA", "PostgreSQL", "Redis", "WebSocket(STOMP)", "FastAPI", "LangChain", "Qdrant", "Docker", "Jenkins", "React", "TypeScript", "Firebase FCM"],
        details: [
            "STOMP + Redis Pub/Sub 기반 실시간 채팅 fan-out 구조 구현 (DM/GROUP/BOT)",
            "경매(대타) 도메인: 등록/입찰/낙찰/인사이트 리포트 + WebSocket 실시간 동기화",
            "afterCommit 기반 이벤트 발행으로 트랜잭션 롤백 시 잘못된 이벤트 선노출 방지",
            "FCM E2E 고도화: data-only 메시지 + 중복 등록 방지 + 크로스탭 락/쿨다운",
            "직원 상태(WAITING→WORKING) 기반 권한 정책 도메인 전반 반영"
        ],
        tech: {
            frontend: "React, TypeScript, Vite, React Query, Zustand, Tailwind CSS, PWA",
            backend: "Java 17, Spring Boot, Spring Security, JPA, JWT, Redis, STOMP(WebSocket)",
            ai: "FastAPI, LangChain, Qdrant (RAG 기반 질의응답)",
            infra: "Docker Compose, Nginx, Jenkins",
            db: "PostgreSQL",
            external: "Firebase Cloud Messaging"
        },
        modalSections: [
            {
                title: "실시간 채팅 + 챗봇 통합 구조",
                problem: "실시간 채팅과 챗봇 응답을 같은 흐름에서 지연 없이 안정적으로 처리해야 함",
                implementations: [
                    "DM/GROUP/BOT 채팅방 구조 및 읽음 포인터 로직 구현",
                    "STOMP + Redis Pub/Sub로 멀티 인스턴스 환경에서 Fan-out 지원",
                    "챗봇 호출을 비동기로 처리하고 실패 시 Fallback 메시지 제공"
                ],
                result: "채팅 지연 체감 감소 및 챗봇 장애 시에도 끊김 없는 대화 유지"
            },
            {
                title: "FCM 알림 E2E 안정화",
                problem: "멀티탭 환경에서 FCM 토큰 중복 등록 및 동일한 알림 중복 수신 문제 발생",
                implementations: [
                    "토큰 동기화에 In-flight Lock, Cross-tab Lock, Cooldown 전략 적용",
                    "Data-only 메시지 기반으로 단일 표시 전략 적용하여 중복 렌더링 방지",
                    "Push 실패는 Best-effort로 처리하여 핵심 비즈니스 로직(결제/가입 등) 보호"
                ],
                result: "크로스탭 중복 알림을 원천 차단하여 사용자 피로도 감소"
            },
            {
                title: "상태 기반 권한 정책 설계",
                problem: "승인 전 직원(WAITING)의 API 오남용 가능성 및 권한 분기 누락 리스크",
                implementations: [
                    "직원 상태 전이 모델링 (WAITING → INVITED → WORKING → RESIGNED)",
                    "출결/채팅/경매 등 모든 도메인에서 상태 조건 일관 검증 로직 반영",
                    "@AuthUser 커스텀 어노테이션으로 인증 객체 주입 패턴 표준화"
                ],
                result: "전 도메인의 권한 분기 일관성 확보 및 보안 누수 방지"
            }
        ],
        outcomes: [
            "실시간 동기화 병목 해결: STOMP와 Redis Pub/Sub을 활용한 Fan-out 구조를 도입하여, 그룹 채팅 및 대타 경매의 실시간 알림 지연을 최소화했습니다.",
            "동시성 및 중복 발생 제어: 인메모리 락(Lock)과 쿨다운 전략을 도입하여 크로스탭 환경에서의 FCM 중복 등록 이슈를 완전히 해결했습니다.",
            "견고한 상태 모델 기반 아키텍처: 직원의 '상태 전이 모델'을 구축하고 전 도메인 권한 정책에 일관되게 적용하여 코드 안전성을 높였습니다."
        ]
    }
];

const bioText = `
<p style="font-size: 1.25rem; font-weight: 700; color: var(--primary); margin-bottom: 1.2rem; line-height: 1.5;">장애 없는 서비스를 만들기 위해, 실패 경로까지 설계하는 백엔드 개발자 정혜원입니다.</p>
<p style="margin-bottom: 8px;">백엔드 시스템의 진정한 가치는 '사용자가 체감하지 못하는 안정성'에 있다고 믿습니다. 그렇기에 단순히 기능이 동작하는 해피 경로(Happy Path)에 만족하지 않고, 외부 시스템 장애나 트랜잭션 롤백과 같은 예측 불가능한 실패 상황에서도 비즈니스 로직이 멈추지 않도록 방어적으로 설계합니다.</p>
<p style="margin-bottom: 8px;">이런 철학을 바탕으로, 실시간 채팅의 동기화 일관성 확보부터 Redis 고가용성(HA) 인프라 구축, 그리고 시스템 메트릭 모니터링 환경 구성까지 시스템 전반의 단단함을 다져왔습니다.</p>
<p>또한, 개인이 잘 짜는 코드를 넘어 팀 전체가 무너지지 않는 구조를 고민합니다. 상태 모델에 기반한 안전한 권한 정책을 설계하고 초기 컨벤션을 단단하게 주도하여, 팀원 모두가 비즈니스 로직에만 집중할 수 있는 환경을 만들기 위해 노력합니다.</p>
`;

const htmlContent = `
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>정혜원 - 포트폴리오</title>
<style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  
  :root {
    --primary: #0056b3;
    --text-main: #212529;
    --text-sub: #495057;
    --border: #dee2e6;
    --bg-light: #f8f9fa;
  }
  
  body {
    font-family: 'Pretendard', system-ui, sans-serif;
    color: var(--text-main);
    margin: 0;
    padding: 0;
    background: white;
  }

  @page {
    size: A4 landscape;
    margin: 10mm;
  }

  .page {
    width: 277mm; 
    height: 190mm;
    page-break-after: always;
    position: relative;
    box-sizing: border-box;
    padding: 6mm;
    overflow: hidden;
  }

  .page:last-child {
    page-break-after: auto;
  }

  h1, h2, h3, h4, h5, p { margin: 0; padding: 0; }

  .section-title {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
    padding-bottom: 4px;
    margin-bottom: 12px;
  }

  /* Page 1: Info */
  .grid-2col {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 20px;
    height: 100%;
  }

  .profile-col { display: flex; flex-direction: column; gap: 12px; }
  .profile-img {
    width: 190px; height: 240px; object-fit: cover; border-radius: 8px; border: 1px solid var(--border);
  }
  .info-item { font-size: 13px; margin-bottom: 4px; }
  .info-label { font-weight: 600; color: var(--text-sub); width: 60px; display: inline-block; }

  .content-col { display: flex; flex-direction: column; gap: 15px; }
  .bio-text { font-size: 13px; line-height: 1.5; color: var(--text-main); }
  
  .list-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .list-item { margin-bottom: 10px; }
  .list-title { font-weight: 700; font-size: 14px; }
  .list-sub { font-size: 12px; color: var(--text-sub); margin-top: 2px;}

  /* Project Headers */
  .proj-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 16px; border-bottom: 2px solid var(--border); padding-bottom: 12px; }
  .proj-title { font-size: 26px; font-weight: 800; color: var(--primary); }
  .proj-subtitle { font-size: 16px; color: var(--text-sub); font-weight: 600; margin-top: 4px; }
  .proj-meta { font-size: 12px; color: var(--text-sub); text-align: right; line-height: 1.5; }
  .proj-role { color: var(--primary); font-weight: 700; font-size: 14px; }

  /* Tags */
  .proj-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
  .proj-tag { font-size: 11px; background: var(--bg-light); border: 1px solid var(--border); padding: 4px 12px; border-radius: 20px; color: var(--text-sub); font-weight: 500; }

  /* 2-Column Text Layouts */
  .layout-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 28px; }
  
  .box-title { font-size: 16px; font-weight: 700; color: var(--primary); margin-bottom: 10px; margin-top: 10px; display: flex; align-items: center; gap: 8px; }
  .box-title::before { content: ''; display: inline-block; width: 4px; height: 16px; background: var(--primary); border-radius: 2px; }
  
  .proj-desc-text { font-size: 13px; line-height: 1.6; margin-bottom: 20px; color: var(--text-main); }
  
  /* Bullet Lists */
  .bullet-list { padding-left: 20px; margin: 0; font-size: 13px; line-height: 1.5; }
  .bullet-list li { margin-bottom: 8px; }
  
  .outcomes-list li { margin-bottom: 14px; background: var(--bg-light); padding: 12px 16px; border-radius: 8px; border-left: 4px solid var(--primary); list-style: none; margin-left: -20px; }
  .outcomes-list li strong { display: block; font-size: 14px; color: var(--primary); margin-bottom: 4px; }
  
  .tech-list li { margin-bottom: 6px; }
  .tech-list strong { display: inline-block; width: 100px; color: var(--text-sub); }

  .problem-box { border: 1px solid var(--border); border-radius: 8px; padding: 10px 14px; margin-bottom: 18px; background: white; }
  .problem-title { font-weight: 700; font-size: 14px; margin-bottom: 6px; color: #111827; }
  .problem-context { font-size: 13px; color: #b91c1c; margin-bottom: 6px; background: #fef2f2; padding: 4px 8px; border-radius: 4px; display: inline-block; }
  .problem-impl { font-size: 12px; padding-left: 18px; margin: 0 0 6px 0; color: var(--text-sub); line-height: 1.5; }
  .problem-impl li { margin-bottom: 4px; }
  .problem-result { color: var(--primary); font-size: 13px; font-weight: 600; display: flex; gap: 6px; margin-top: 6px; border-top: 1px dashed var(--border); padding-top: 8px; }
  .problem-result::before { content: '✓'; }
</style>
</head>
<body>

  <!-- Page 1: Profile -->
  <div class="page">
    <div class="grid-2col">
      <div class="profile-col">
        <div class="section-title">Profile</div>
        <img src="../public/profile.jpg" alt="Profile" class="profile-img" onerror="this.style.display='none'" />
        <div>
          <div class="info-item"><span class="info-label">이름</span> 정혜원</div>
          <div class="info-item"><span class="info-label">생년월일</span> 1999.03.23</div>
          <div class="info-item"><span class="info-label">이메일</span> dnjs3023@gmail.com</div>
          <div class="info-item"><span class="info-label">연락처</span> 010-4372-3023</div>
          <div class="info-item"><span class="info-label">주소</span> 광주광역시 광산구</div>
        </div>
      </div>
      <div class="content-col">
        <div class="section-title">About Me</div>
        <div class="bio-text">${bioText}</div>
        
        <div class="list-grid">
          <div>
            <div class="section-title" style="font-size: 20px; margin-top: 10px;">Education</div>
            ${education.map(edu => `
              <div class="list-item">
                <div class="list-title">${edu.school}</div>
                <div class="list-sub">${edu.period} | ${edu.major}</div>
                <div class="list-sub">${edu.description}</div>
              </div>
            `).join('')}
          </div>
          <div>
            <div class="section-title" style="font-size: 20px; margin-top: 10px; margin-bottom: 10px;">Awards & Certifications</div>
            <div style="display: flex; gap: 20px;">
              <div style="flex: 1;">
                <div style="font-weight: 700; color: #1f2937; margin-bottom: 8px; border-bottom: 1px solid #ddd; padding-bottom: 4px;">Awards</div>
                ${awards.filter(a => a.isAward).map(aw => `
                  <div class="list-item">
                    <div class="list-title" style="font-size: 13px; white-space: nowrap;">${aw.title}</div>
                    <div class="list-sub">${aw.date} | ${aw.organization}</div>
                    <div class="list-sub">${aw.description}</div>
                  </div>
                `).join('')}
              </div>
              <div style="flex: 1;">
                <div style="font-weight: 700; color: #1f2937; margin-bottom: 8px; border-bottom: 1px solid #ddd; padding-bottom: 4px;">Certifications</div>
                ${awards.filter(a => !a.isAward).map(aw => `
                  <div class="list-item">
                    <div class="list-title" style="font-size: 13px; white-space: nowrap;">${aw.title}</div>
                    <div class="list-sub">${aw.date} | ${aw.organization}</div>
                    <div class="list-sub">${aw.description}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Projects (2 pages per project) -->
  ${projects.map((proj, idx) => {
    const outcomesHtml = proj.outcomes.map(o => {
      const parts = o.split(':');
      if(parts.length > 1) {
        return `<li><strong>${parts[0]}</strong>${parts.slice(1).join(':')}</li>`;
      }
      return `<li>${o}</li>`;
    }).join('');

    return `
    <!-- Project Part 1: Overview & Tech & Details -->
    <div class="page">
      <div class="proj-header">
        <div>
          <div class="proj-title">Project 0${idx + 1}. ${proj.title}</div>
          <div class="proj-subtitle">${proj.subtitle} ${proj.award ? `<span style="font-size:14px; color:#eab308; background:#fef9c3; padding:2px 8px; border-radius:12px; margin-left:10px;">${proj.award}</span>` : ''}</div>
        </div>
        <div class="proj-meta">
          <div>${proj.period}</div>
          <div>${proj.teamSize}</div>
          <div class="proj-role">${proj.myRole}</div>
        </div>
      </div>
      
      <div class="proj-tags">
        ${proj.tags.map(tag => `<div class="proj-tag">${tag}</div>`).join('')}
      </div>
      
      <div class="layout-grid">
        <div>
          <img src="${proj.thumbnail}" alt="${proj.title}" style="width: 100%; height: auto; max-height: 220px; object-fit: contain; border-radius: 8px; margin-bottom: 24px; border: 1px solid var(--border);" />
          <div class="box-title" style="margin-top: 5px;">Project Overview</div>
          <div class="proj-desc-text">${proj.description}</div>
        </div>
        
        <div>
          <div class="box-title" style="margin-top: 0;">Key Implementation Details</div>
          <ul class="bullet-list" style="margin-bottom: 24px;">
            ${proj.details.map(d => `<li>${d}</li>`).join('')}
          </ul>
          
          <div class="box-title">Tech Stack</div>
          <ul class="bullet-list tech-list">
            ${Object.entries(proj.tech).map(([k, v]) => `<li><strong>${k.toUpperCase()}</strong> ${v}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>

    <!-- Project Part 2: Impact & Problem Solving -->
    <div class="page">
      <div class="proj-header" style="margin-bottom: 16px;">
        <div class="proj-title">${proj.title} <span style="font-size:18px; font-weight:600; color:var(--text-sub);">— Impacts & Problem Solving</span></div>
      </div>

      <div class="layout-grid">
        <!-- Left: Outcomes -->
        <div>
          <div class="box-title">Project Outcomes (핵심 성과)</div>
          <ul class="bullet-list outcomes-list">
            ${outcomesHtml}
          </ul>
        </div>

        <!-- Right: Problem Solving -->
        <div>
          <div class="box-title">Problem Solving (트러블슈팅)</div>
          <div>
            ${proj.modalSections.map(m => `
              <div class="problem-box">
                <div class="problem-title">${m.title}</div>
                <div class="problem-context">문제: ${m.problem}</div>
                <ul class="problem-impl">
                  ${m.implementations.map(i => `<li>${i}</li>`).join('')}
                </ul>
                <div class="problem-result">${m.result}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
    `;
  }).join('')}

</body>
</html>
`;

const exportDir = path.join(__dirname, 'export');
if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir, { recursive: true });
}

fs.writeFileSync(path.join(exportDir, 'portfolio_export.html'), htmlContent, 'utf-8');
console.log('HTML exported successfully to export/portfolio_export.html');
