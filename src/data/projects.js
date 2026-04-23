import conyThumbnail from '../assets/images/cony-thumbnail.png';
import almaengiThumbnail from '../assets/images/almaengi-thumbnail.png';

export const projects = [
    {
        id: 1,
        title: "CONY",
        subtitle: "기프티콘 통합 관리 서비스",
        award: "🏆 SSAFY 14기 공통 프로젝트 우수상",
        period: "2026.01 - 2026.02",
        teamSize: "6인 팀 프로젝트",
        myRole: "백엔드 핵심 개발자",
        description: "OCR 자동 등록, Geofence 기반 위치 알림, 거래/결제, AI 개인화 추천까지 제공하는 모바일 중심 기프티콘 통합 관리 서비스입니다. 사용자 보유 기프티콘을 체계적으로 관리하고, 근처 매장 도착 시 사용 가능한 쿠폰을 즉시 안내합니다.",
        thumbnail: conyThumbnail,
        tags: ["Java 17", "Spring Boot", "JPA", "MySQL", "Redis", "Docker", "Jenkins", "AWS S3", "React Native", "FastAPI", "Firebase FCM", "KakaoPay"],
        github: "",
        demo: "",
        details: [
            "Redis GEO + Spring Batch 기반 매장 캐시 구조 설계 및 위치 기반 탐색 파이프라인 구현",
            "Greedy Clustering 알고리즘으로 Android OS 지오펜스 100개 제약 극복",
            "FCM 푸시 알림 + 스케줄러 기반 만료 임박 알림 자동화 (매일 오전 10시)",
            "거리/유효기간 기반 일반 추천 + 사용자 로그 기반 AI 개인화 추천 연동",
            "MSA 서버 간 X-Internal-Key 인터셉터 인증 경계 도입으로 보안 강화",
            "payment ↔ manage 내부 API 상태 동기화로 기프티콘 소유권 이전 정합성 확보"
        ],
        // 모달 상세 정보
        tech: {
            client: "React Native (TypeScript), Next.js",
            backend: "Java 17, Spring Boot, Spring Security, JPA, Spring Batch",
            ai: "Python, FastAPI (OCR / 추천)",
            infra: "MySQL, Redis GEO, AWS S3, Docker Compose, Jenkins, Prometheus, Grafana",
            external: "Google/Kakao OAuth, KakaoPay, Firebase Cloud Messaging"
        },
        contribution: "244 커밋 (전체 918건 중 약 26.6%)",
        modalSections: [
            {
                title: "기프티콘 관리 도메인 고도화",
                problem: "조회 조건 확대와 상태 변화(사용/취소/삭제)가 누적되며 로직 복잡도 증가",
                implementations: [
                    "JPA Specification 기반 동적 검색(브랜드/상품명/카테고리/만료임박/위치기반) 구현",
                    "soft delete 및 권한/예외 처리 강화",
                    "사용/사용취소/이력 관리 로직 안정화"
                ],
                result: "기능 확장 시 조건 추가가 용이한 구조로 전환"
            },
            {
                title: "Geofence 성능 최적화 및 위치 알림 구현",
                problem: "위치 기반 조회를 DB 중심으로 처리 시 응답 지연과 부하 위험",
                implementations: [
                    "Redis GEO + Hash + Pipeline으로 주변 매장 조회 구조 설계",
                    "Spring Batch로 매장 캐시 워밍업 자동화",
                    "Android 지오펜스 100개 제한 대응 — Greedy Clustering으로 근접 매장 묶음 처리",
                    "브랜드 단위 쿨다운으로 중복 알림 피로도 완화"
                ],
                result: "위치 기능 응답성 및 운영 안정성 개선, 알림 피로도 감소"
            },
            {
                title: "FCM 알림 시스템 운영 안정화",
                problem: "푸시 전송 실패 시 사용자/운영 측 추적이 어려움",
                implementations: [
                    "Geofence 진입 / 만료 임박 / 자동판매 알림 공통 발송 구조 구성",
                    "FCM 전송 실패 시에도 알림 히스토리 저장 (best-effort 보존)",
                    "만료 임박 알림 스케줄러(매일 오전 10시) 구현"
                ],
                result: "장애 상황에서도 이벤트 이력 추적 가능, 운영 대응성 향상"
            },
            {
                title: "MSA 간 정합성 및 내부 API 보안 강화",
                problem: "판매/구매 이벤트 시 payment ↔ manage 서버 간 상태 불일치 위험",
                implementations: [
                    "판매 시작/취소/구매 완료 시 상태 및 소유권 동기화 내부 API 구현",
                    "X-Internal-Key 기반 인터셉터로 내부 API 인증 경계 추가",
                    "내부 통신 테스트 코드 작성으로 회귀 리스크 관리"
                ],
                result: "도메인 정합성과 서비스 간 호출 신뢰성 강화"
            },
            {
                title: "OCR / 추천 외부 연동 고도화",
                problem: "외부 연동 시 DTO 포맷 불일치 및 추천 실패 대응 필요",
                implementations: [
                    "OCR 요청 snake_case 매핑 이슈 해결로 기프티콘 자동 등록 안정화",
                    "일반 추천(거리/유효기간) + AI 개인화 추천 fallback 전략 구현"
                ],
                result: "연동 안정성과 사용자 추천 지속성 확보"
            }
        ],
        outcomes: [
            "백엔드 핵심 기능을 end-to-end로 구현하며 서비스 핵심 가치(등록-알림-거래-추천)를 연결",
            "Redis 기반 위치 기능 최적화와 내부 API 동기화/보안 설계로 운영 안정성 개선",
            "이슈 대응 중심의 다수 fix/test 커밋을 통해 품질 안정화 주도"
        ],
        lessons: [
            "도메인 정합성은 기능 구현보다 우선 설계해야 운영 장애를 줄일 수 있음을 체감",
            "외부 연동은 성공 시나리오보다 실패 시나리오(fallback/히스토리 보존) 설계가 핵심임을 학습",
            "성능 최적화는 인프라 확장보다 먼저 조회 경로 재설계(캐시/파이프라인/배치)로 해결할 수 있음을 경험"
        ]
    },
    {
        id: 2,
        title: "알맹이",
        subtitle: "소상공인 인사·노무 올인원 플랫폼",
        period: "2026.02 - 2026.04",
        teamSize: "6인 팀 프로젝트",
        myRole: "Team Leader / 백엔드 핵심 개발자",
        description: "소상공인·자영업자의 근로계약, 출결, 급여 정산, 사내 채팅, 노동법 AI 질의를 하나의 서비스로 통합한 올인원 플랫폼입니다. 전자 근로계약 서명부터 급여명세서 자동 발급, 실시간 경매(대타) 시스템까지 실제 업무 흐름을 끊김 없이 연결합니다.",
        thumbnail: almaengiThumbnail,
        tags: ["Java 17", "Spring Boot", "JPA", "PostgreSQL", "Redis", "WebSocket(STOMP)", "FastAPI", "LangChain", "Qdrant", "Docker", "Jenkins", "React", "TypeScript", "Firebase FCM"],
        github: "",
        demo: "",
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
        contribution: "54 커밋 (비-머지 30개)",
        modalSections: [
            {
                title: "실시간 경매(대타) 동기화",
                problem: "경매 상태 변경(등록/수정/마감)이 사용자 화면에 즉시 반영되지 않음",
                implementations: [
                    "백엔드에서 경매 이벤트 발행 채널 구성 및 관리",
                    "트랜잭션 커밋 이후(afterCommit) 이벤트 발행으로 롤백 데이터 선노출 방지",
                    "프론트에서 WebSocket 구독 후 React Query 캐시 무효화로 화면 즉시 갱신",
                    "경매 인사이트 리포트(성공률/평균 낙찰가/타임라인) 구현"
                ],
                result: "새로고침 없이 실시간 동기화되는 사용자 경험 제공"
            },
            {
                title: "실시간 채팅 + 챗봇 통합 구조",
                problem: "실시간 채팅과 챗봇 응답을 같은 흐름에서 안정적으로 처리해야 함",
                implementations: [
                    "DM/GROUP/BOT 채팅방 구조 및 읽음 포인터 로직 구현",
                    "STOMP + Redis Pub/Sub로 멀티 인스턴스 fan-out 지원",
                    "챗봇 호출을 비동기로 처리하고 실패 시 fallback 메시지 제공",
                    "매장 생성/직원 승인 시 BOT 방 자동 생성 및 웰컴 메시지 처리"
                ],
                result: "채팅 지연 체감 감소 및 챗봇 장애 시에도 대화 흐름 유지"
            },
            {
                title: "FCM 알림 E2E 안정화",
                problem: "멀티탭/브라우저 환경에서 토큰 중복 등록 및 중복 알림 발생",
                implementations: [
                    "토큰 동기화에 in-flight lock, cross-tab lock, cooldown 적용",
                    "SW/foreground 처리 경계를 명확히 분리하여 중복 표시 방지",
                    "data-only 메시지 기반으로 단일 표시 전략 적용",
                    "push 실패는 best-effort로 처리하여 핵심 비즈니스 흐름 보호"
                ],
                result: "알림 신뢰도 향상 및 운영 중 장애 전파 최소화"
            },
            {
                title: "상태 기반 권한 정책 설계",
                problem: "승인 전 직원(WAITING/INVITED)의 기능 오남용 가능성",
                implementations: [
                    "직원 상태 전이 모델링 (WAITING → INVITED → WORKING → RESIGNED)",
                    "출결/채팅/경매/계약 등 모든 도메인에서 상태 조건 일관 검증",
                    "@AuthUser 기반 인증 사용자 주입 패턴으로 하드코딩 제거"
                ],
                result: "도메인별 권한 분기 일관성 확보 및 정책 누락 리스크 감소"
            }
        ],
        outcomes: [
            "백엔드 핵심 도메인(매장/직원, 경매, 채팅, 알림)을 주도적으로 설계/구현하고 프론트 연동까지 완료",
            "실시간/알림 영역에서 정합성과 안정성을 함께 고려한 구조 도입",
            "팀 리더로서 일정 조율, 코드 리뷰, 기술 의사결정 주도"
        ],
        lessons: [
            "실시간 시스템에서는 '빠른 전파'보다 트랜잭션 경계와 정합성 보장이 우선임을 체득",
            "장애가 발생하더라도 서비스 핵심 흐름을 유지하는 best-effort 설계의 중요성 학습",
            "권한 정책은 기능별 조건문이 아니라 상태 모델 중심으로 설계해야 유지보수가 쉬움"
        ]
    }
];
