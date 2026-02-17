export const projects = [
    {
        id: 1,
        title: "CONY",
        period: "2026.01 - 2026.02",
        description: "위치 기반 기프티콘 관리 및 판매 플랫폼입니다. 사용자의 위치를 기반으로 주변 매장에서 사용할 수 있는 기프티콘을 자동으로 알려주고, 유효기간 임박 기프티콘을 관리할 수 있습니다.",
        tags: ["Java", "Spring Boot", "JPA", "MySQL", "Redis", "Docker", "AWS", "React Native"],
        github: "", // User to fill
        demo: "",   // User to fill
        details: [
            "Redis GEO 기반 공간 인덱싱 시스템 구축 (반경 검색 속도 73% 개선)",
            "Redis Pipeline을 활용한 대용량 데이터 조회 최적화 (응답 속도 88% 개선)",
            "Android Native Module 개발을 통한 백그라운드 지오펜싱 및 위젯 구현",
            "Greedy Clustering 알고리즘으로 안드로이드 OS 지오펜스 개수 제약 극복",
            "Firebase FCM 기반 푸시 알림 및 알림 히스토리 시스템 구축",
            "MSA 아키텍처 설계 및 Jenkins/Docker 기반 CI/CD 파이프라인 구축"
        ]
    },
    {
        id: 2,
        title: "Portfolio Website",
        period: "2024.01 - 2024.02",
        description: "React와 Styled-components를 활용하여 제작한 개인 포트폴리오 웹사이트입니다. 반응형 디자인을 적용하여 다양한 디바이스에서 최적화된 화면을 제공합니다.",
        tags: ["React", "Styled-components", "Vite", "GitHub Pages"],
        github: "https://github.com/Clarus23/Clarus23.github.io",
        demo: "https://Clarus23.github.io",
        details: [
            "React & Vite 기반의 SPA(Single Page Application) 구조 설계",
            "Styled-components를 활용한 컴포넌트 단위 스타일링 및 테마 적용",
            "Typewriter 효과 및 스크롤 애니메이션 등 인터랙티브 요소 구현",
            "GitHub Actions를 활용한 자동 배포 파이프라인 구축 (예정)",
            "다크 모드 지원 및 반응형 레이아웃 구현"
        ]
    }
];
