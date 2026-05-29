import conyThumbnail from '../assets/images/cony-thumbnail.png';
import almaengiThumbnail from '../assets/images/almaengi-thumbnail.png';
import anviThumbnail from '../assets/images/Anvi_thumbnail.png';

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
        tags: ["Java 17", "Spring Boot 3", "Spring Security 6", "Spring Cloud Gateway", "Eureka", "JPA", "MySQL 8.0", "Redis", "Kafka", "Docker", "Jenkins", "Nginx", "React", "Zustand", "PWA"],
        github: "https://github.com/Clarus23/CONY",
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
            "위치 기반 처리 한계 극복: Greedy Clustering과 Redis GEO를 활용해 Android의 지오펜스 100개 제약을 우회하고, 대규모 매장 탐색 파이프라인의 응답성을 확보했습니다.",
            "마이크로서비스 정합성 보장: 서비스 간(payment ↔ manage) 분리된 환경에서 X-Internal-Key 인증과 상태 동기화 API를 설계하여, 소유권 이전 시 발생할 수 있는 데이터 불일치 가능성을 차단했습니다.",
            "운영 리스크 방어 설계: 외부 연동(FCM, OCR) 실패 시에도 핵심 비즈니스 로직이 중단되지 않도록 Fallback 및 Best-effort 히스토리 보존 전략을 도입했습니다."
        ],
        lessons: [
            "도메인 정합성은 기능 구현보다 우선 설계해야 운영 장애를 줄일 수 있음을 체감",
            "외부 연동은 성공 시나리오보다 실패 시나리오(fallback/히스토리 보존) 설계가 핵심임을 학습",
            "성능 최적화는 인프라 확장보다 먼저 조회 경로 재설계(캐시/파이프라인/배치)로 해결할 수 있음을 경험"
        ]
    },
    {
        id: 2,
        title: "ANVI",
        subtitle: "온디바이스 AI 기반 비대면 시험 감독 솔루션",
        period: "2026.04 - 2026.05",
        teamSize: "6인 팀 (SSAFY 14기 기업연계 — Edint / S301 BADO)",
        myRole: "백엔드 개발자 / 인프라 · CI·CD · 모니터링",
        description: "CES 2024 발표 기업 Edint와 협업한 차세대 비대면 시험 감독 PoC 프로젝트입니다. 응시자의 Android 디바이스에서 YOLO + Gemma 4 VLM을 직접 추론(On-Device AI)해 부정행위를 실시간 감지하고, 서버에는 메타데이터와 비식별 처리된 이미지만 전송합니다. 이로써 기존 서버 중심 솔루션의 4대 문제(개인정보 침해 · 네트워크 의존 · 서버 비용 · 감지 지연)를 동시에 해결한 Privacy by Design 아키텍처를 구현했습니다.",
        thumbnail: anviThumbnail,
        tags: ["Java 17", "Spring Boot 3", "Spring Security 6", "JPA", "PostgreSQL 16", "Redis 7", "Redis Sentinel", "SSE", "Pub/Sub", "JWT", "Docker Compose", "Nginx", "GitLab CI/CD", "Prometheus", "Grafana", "AWS S3"],
        github: "https://github.com/Clarus23/ANVI",
        demo: "",
        details: [
            "App(:8090) / Web(:9090) 2서버 분리 + 단일 DB + Redis Pub/Sub 비동기 결합 구조의 BE 골격 설계·구축",
            "응시자 회원가입 없는 PIN 6자리 + JWT 인증, 만료 시각을 '시험 종료 + 30분'으로 동적 설정",
            "Heartbeat 만료 감지를 DB 폴링이 아닌 Redis TTL + Keyspace Notification으로 구현 (지연 평균 15초 → 1초 미만, O(N×M) → O(0))",
            "SSE + Redis Pub/Sub 8채널(App↔Web 양방향 7 + Redis 내부 expired 1)로 실시간 양방향 채널 + Fault Isolation 달성",
            "Redis Sentinel 3노드(쿼럼 2) HA로 메시지 브로커 단일 장애점 제거 및 자동 Failover 검증",
            "Docker Compose + Nginx Reverse Proxy(HTTPS, Let's Encrypt) + localhost 바인딩으로 변경 반경·외부 공격면 동시 축소",
            "GitLab CI/CD 변경 경로 단위 배포(BE/app/**, BE/web/**, FE/**) + sha 태깅으로 단일 서비스 무중단 배포 파이프라인 구축",
            "Prometheus + Grafana + Actuator 도입으로 Heartbeat 처리량·HTTP·JVM 메트릭 시각화"
        ],
        tech: {
            backend: "Java 17, Spring Boot 3.x, Spring Security 6, Spring Data JPA, jjwt 0.12.x, Lombok",
            realtime: "Spring MVC SSE(SseEmitter), RedisMessageListenerContainer, @Scheduled keep-alive",
            db: "PostgreSQL 16 (App/Web 공유), Redis 7 (Pub/Sub + TTL + Keyspace Notification)",
            infra: "Docker Compose, Nginx + certbot, GitLab CI/CD (Runner infra·android 분리), Redis Sentinel 3노드, AWS EC2",
            monitoring: "Spring Boot Actuator, Micrometer, Prometheus, Grafana",
            external: "AWS SDK v2 (S3 Presigned URL), Spring Mail, springdoc-openapi",
            test: "JUnit 5, Mockito, AssertJ, BDDMockito, Postman, curl -N, redis-cli PSUBSCRIBE"
        },

        modalSections: [
            {
                title: "BE 멀티 프로젝트 골격 + 컨벤션 규격화",
                problem: "App/Web 두 서버가 응답 포맷·예외·로깅·문서화 컨벤션이 갈라지면 6주 내내 누수가 누적되어 운영 장애로 이어짐",
                implementations: [
                    "BaseEntity + JPA Auditing + 논리 삭제 패턴 통일",
                    "ApiResponse<T> + GlobalResponseHandler(ResponseBodyAdvice)로 응답 포맷 자동 래핑",
                    "BusinessException ↔ ErrorCode 매핑 기반 GlobalExceptionHandler",
                    "LoggingAspect(AOP) + RequestLoggingFilter로 전역 API 호출 구조화 로그",
                    "Swagger docs 인터페이스 분리(컨트롤러는 로직만) + 환경별 yaml 분리(local/prod/secret + .gitignore)",
                    "backend_conventions.md / gitlab_convention.md / api_response_guide.md 등 컨벤션 문서 우선 작성"
                ],
                result: "이후 4주간 새 도메인 추가 시 비즈니스 로직에만 집중 가능, 6주 내내 코드 일관성 유지"
            },
            {
                title: "JWT + PIN 도메인 특화 인증",
                problem: "시험 1회용 응시자에게 회원가입을 강요할 수 없고, 시험 도중 토큰이 만료되면 응시 자체가 중단되는 위험",
                implementations: [
                    "감독관이 응시자 등록 시 PIN 6자리 자동 생성 + 이메일(QR + URL + PIN) 자동 발송",
                    "accessUrl(UUID) + PIN 조합 로그인 — 추측 불가능한 시험 단위 격리",
                    "JWT 만료 시각을 '시험 종료 시각 + 30분'으로 동적 설정",
                    "examId 클레임 추가로 응시자-시험 단위까지 함께 인증",
                    "OncePerRequestFilter 기반 JwtAuthenticationFilter + @CurrentUser 어노테이션",
                    "JwtProvider/Filter/AuthService 단위 테스트 (정상/만료/무효/존재안함/종료된 시험 분기)"
                ],
                result: "회원가입 단계 제거로 UX 개선 + 시험 도중 인증 만료 위험 0"
            },
            {
                title: "기기 + 4단계 사전 점검 + 감지 로그 도메인",
                problem: "사전 점검 단계별 결과를 어떻게 누적할지, 기기 상태 전이를 어떻게 안전하게 검증할지 설계 필요",
                implementations: [
                    "4단계 사전 점검(배터리/본인확인/환경/카메라) — 같은 precheck_result row에 dirty checking으로 누적 업데이트",
                    "마지막(카메라) 단계 완료 = SSE 연결 준비 완료 신호로 통합",
                    "DeviceStatusCode enum에 상태 전이 그래프(TRANSITIONS Map) 정적 데이터로 보관, canTransitionTo() 한 줄 검증",
                    "감지 로그 저장 시 best-effort S3 업로드 — S3 실패는 catch+log, Redis publish는 계속 진행",
                    "비식별 처리된 이미지만 S3 저장 (얼굴 블러는 Android 측 책임)",
                    "상태 이력 패턴 — detection_log_status 별도 테이블에 PENDING/CONFIRMED/FALSE_POSITIVE 이력 기록"
                ],
                result: "잘못된 상태 전이 컴파일·런타임 차단 + 외부 의존 실패가 핵심 흐름을 막지 않는 구조 확보"
            },
            {
                title: "Heartbeat 만료 감지 — Redis TTL + Keyspace Notification",
                problem: "DB 폴링으로 동시 응시자 N명 × 기기 M대의 상태를 추적하면 비용과 지연이 동시에 증가",
                implementations: [
                    "Heartbeat 수신 시 SET heartbeat:{examId}:{deviceId} EX 60",
                    "Redis __keyevent@0__:expired 채널 구독 → HeartbeatExpiryListener가 DB DEV_DIS INSERT + EXAMINEE_DISCONNECTED 재발행",
                    "redis 컨테이너 --notify-keyspace-events Ex 명시 + ApplicationRunner에서 CONFIG SET 재보장 (Sentinel Failover 후 새 Master 대응)",
                    "시험 완료 이벤트 시 TTL key 삭제로 종료된 기기의 중복 종료 메시지 방어"
                ],
                result: "감지 지연 폴링 평균 15초 → TTL 1초 미만, 동시 응시자 수에 무관한 O(0) 비용 달성"
            },
            {
                title: "SSE + Redis Pub/Sub 8채널 실시간 양방향 채널",
                problem: "App ↔ Web 동기 호출 결합 시 한쪽 장애가 다른 쪽으로 전파, 모바일 환경의 단속적 연결로 이벤트 손실 위험",
                implementations: [
                    "App→Web 4채널(EXAMINEE_CONNECTED/PAUSED/DISCONNECTED, DETECTION_ALERT) + Web→App 3채널(EXAM_STARTED/COMPLETED/CANCELLED) + Redis expired 1채널",
                    "App/Web 양쪽에 단방향 SSE 두 개로 양방향 효과 달성",
                    "SseEmitterRegistry(ConcurrentHashMap + CopyOnWriteArrayList)로 examId 기준 emitter 관리",
                    "25초 keep-alive @Scheduled ping + 10분 timeout + retry:3000 자동 재연결",
                    "CONNECTED 이벤트에 examStatus 포함 → 끊김 사이 누락 상태 복원"
                ],
                result: "App ↔ Web 결합도 제거(Fault Isolation), 단속적 연결에서도 이벤트 손실 0"
            },
            {
                title: "인프라 단단화 + Redis Sentinel HA + CI/CD",
                problem: "단일 Redis 장애가 실시간 파이프라인 전체를 마비시킬 위험, 단일 서비스 배포가 공용 인프라까지 재기동시키는 위험",
                implementations: [
                    "Redis Sentinel 3노드 + 쿼럼 2로 자동 Failover, Split-Brain 방지",
                    "변경 경로 단위 배포(rules + changes) — BE/app/**, BE/web/**, FE/** 라인 분리",
                    "Docker 이미지 sha 태깅(app-<sha>, web-<sha>, fe-<sha>)으로 버전 추적",
                    "docker compose up -d --no-deps 표준화로 단일 서비스 배포가 DB/Redis 흔드는 문제 차단",
                    "Nginx Reverse Proxy + HTTPS(certbot) 단일 진입점, App/Web 포트 localhost 바인딩",
                    "GitLab Runner 분리(infra/android) + APK는 Firebase App Distribution 자동 배포"
                ],
                result: "Master 자동 Failover 검증, 변경 반경 최소화 + 외부 공격면 축소 + 무중단 배포 동시 달성"
            },
            {
                title: "Prometheus + Grafana 운영 모니터링",
                problem: "운영 중 Heartbeat 처리량/지연을 시각적으로 확인할 수단이 없어 '감으로 운영'에 의존",
                implementations: [
                    "Spring Boot Actuator + Micrometer로 /actuator/prometheus 노출",
                    "Prometheus 15초 주기 scrape + Grafana 운영 대시보드 작성 (Heartbeat / HTTP / JVM / Tomcat)",
                    "Heartbeat 호출 횟수/처리 시간(histogram bucket) 메트릭 노출",
                    "GlobalResponseHandler가 /actuator/** 응답까지 ApiResponse로 래핑하던 문제를 분기 처리로 해결",
                    "SSE vs Polling 효율 정량 검증을 위한 부하 테스트 측정 환경 구축"
                ],
                result: "메트릭 기반 운영 체계 전환, 운영 의사결정의 정량적 근거 확보"
            }
        ],
        outcomes: [
            "초저지연 감지 아키텍처 달성: DB 폴링 대신 Redis TTL + Keyspace Notification을 도입하여, 동시 접속자 수에 관계없이 Heartbeat 만료 감지 지연 시간을 평균 15초에서 1초 미만으로 단축했습니다.",
            "단일 장애점(SPOF) 제거: Redis Sentinel 3노드(Quorum 2)를 구성하고 자동 Failover를 검증하여, 실시간 이벤트 브로커의 고가용성(HA)을 확보했습니다.",
            "장애 추적 방법론 정립: Spring Security 6.x 비동기 차단 이슈 발생 시, '타이밍 → 스레드 → 시스템 모델' 순서의 가설 검증을 통해 근본 원인을 파악하고 해결하는 트러블슈팅 역량을 증명했습니다.",
            "비즈니스 가치 창출: Edint 社의 차세대 온디바이스 추론 솔루션 PoC로 활용되어, 기존 서버 중심 아키텍처의 한계를 돌파하는 기반을 마련했습니다."
        ],
        lessons: [
            "공통 컴포넌트는 '투명한 래핑'이 아닌 '선택적 래핑'이어야 함을 체득 (SSE/Actuator 분기 사례)",
            "메시지 브로커 선택은 영속성·리플레이 필요성 기준 — 필요 없는 도메인에선 Redis Pub/Sub의 단순성이 정답",
            "Redis의 강력한 기능 다수는 기본값으로 꺼져 있다 — 운영 의존 기능은 활성화가 명시적·재현 가능하게 보장되는지 점검 필수",
            "분산 비동기 디버깅은 '타이밍 → 스레드 → 시스템 모델' 단서를 단계적으로 좁히는 사고법으로 접근",
            "컨벤션 문서를 첫 주에 단단히 작성한 결정이 6주 내내 협업 속도를 결정했다"
        ]
    },
    {
        id: 3,
        title: "알맹이",
        subtitle: "소상공인 인사·노무 올인원 플랫폼",
        period: "2026.02 - 2026.04",
        teamSize: "6인 팀 프로젝트",
        myRole: "Team Leader / 백엔드 핵심 개발자",
        description: "소상공인·자영업자의 근로계약, 출결, 급여 정산, 사내 채팅, 노동법 AI 질의를 하나의 서비스로 통합한 올인원 플랫폼입니다. 전자 근로계약 서명부터 급여명세서 자동 발급, 실시간 경매(대타) 시스템까지 실제 업무 흐름을 끊김 없이 연결합니다.",
        thumbnail: almaengiThumbnail,
        tags: ["Java 17", "Spring Boot", "JPA", "PostgreSQL", "Redis", "WebSocket(STOMP)", "FastAPI", "LangChain", "Qdrant", "Docker", "Jenkins", "React", "TypeScript", "Firebase FCM"],
        github: "https://github.com/Clarus23/Almaengi",
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
            "실시간 동기화 병목 해결: STOMP와 Redis Pub/Sub을 활용한 Fan-out 구조를 도입하여, 그룹 채팅 및 대타 경매의 실시간 알림 지연을 최소화했습니다.",
            "동시성 및 중복 발생 제어: 인메모리 락(Lock)과 쿨다운(Cooldown) 전략을 도입하여 크로스탭 환경에서의 FCM 중복 등록 및 중복 알림 이슈를 완전히 해결했습니다.",
            "견고한 상태 모델 기반 아키텍처: 단순한 분기문(if-else)이 아닌 직원의 '상태 전이 모델'을 구축하고 전 도메인 권한 정책에 일관되게 적용하여, 팀 전원의 개발 속도와 코드 안전성을 높였습니다."
        ],
        lessons: [
            "실시간 시스템에서는 '빠른 전파'보다 트랜잭션 경계와 정합성 보장이 우선임을 체득",
            "장애가 발생하더라도 서비스 핵심 흐름을 유지하는 best-effort 설계의 중요성 학습",
            "권한 정책은 기능별 조건문이 아니라 상태 모델 중심으로 설계해야 유지보수가 쉬움"
        ]
    }
];
