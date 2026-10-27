# 📋 온라인 포트폴리오 웹사이트 프로젝트 계획서 (Project Master Plan)

> **문서 버전**: v1.0.0  
> **작성일**: 2026-09-09  
> **프로젝트 루트**: C:\Users\User\Desktop\자기소개서  
> **기준 문서**: doc/requirements/PRD-CoreFeatures.md, equirements-list.md, project-overview.md

---

## 1. 프로젝트 개요 (Executive Summary)

### 1.1 프로젝트 목적 및 배경
- **개발자 역량 입증**: 탄탄한 CS(컴퓨터 사이언스) 기본기와 빠른 학습력/성장성을 직관적으로 전달하는 개인 브랜딩 포트폴리오 구축.
- **채용 전환 극대화**: IT 채용 담당자 및 개발 실무 리더가 짧은 시간(3분 이내) 안에 개발자의 핵심 기여도, 트러블슈팅 경험, 협업 능력을 파악하고 면접 및 서류 합격 기회로 연결되도록 유도.

### 1.2 타겟 사용자 및 행동 패턴
- **주요 타겟**: IT 기업 채용 담당자(Recruiter), 엔지니어링 리드, 개발 팀장.
- **행동 특성**: 긴 텍스트보다 시각적 카드, 타임라인, 다이어그램 중심의 정보 구조를 선호하며, 관심 있는 프로젝트의 핵심 기술 기여도를 빠르게 확인하고 PDF 이력서를 다운로드하거나 직접 연락(Email/Contact)을 시도함.

### 1.3 핵심 성공 지표 (KPI)
1. **페이지 체류 시간**: 주요 프로젝트 열람 시간 2분 이상 유지.
2. **인터랙션율**: 프로젝트 상세 모달 열람률 60% 이상 달성.
3. **전환율 (Conversion)**: PDF 다운로드 및 Contact 폼 문의 발송 건수 극대화.
4. **웹 성능 & 접근성**: Lighthouse 성능 점수 90점 이상, 모바일/데스크톱 완벽 반응형.

---

## 2. 프로젝트 범위 및 핵심 기능 명세 (Scope & Core Features)

| 구분 | 섹션 / 기능 | 기능 상세 내용 | 우선순위 |
|---|---|---|---|
| **F-01** | **Hero (메인 소개)** | - 개발자 핵심 가치 슬로건('탄탄한 기본기를 바탕으로 빠르게 성장하는 개발자')<br>- 헤드라인 타이포그래피 및 시각적 GSAP 등장 모션<br>- Quick Action 버튼: '프로젝트 보기', '이력서 다운로드' | **P1 (필수)** |
| **F-02** | **About / History (이력 타임라인)** | - 연도/기간별 학력, 자격증, 부트캠프 프로젝트 이력의 인터랙티브 타임라인<br>- 스크롤 연동 등장 효과로 가독성 및 신뢰도 제고 | **P1 (필수)** |
| **F-03** | **Portfolio (프로젝트 쇼케이스)** | - 주요 대표 프로젝트 카드 그리드 (TutorBridge, Firstboot-1 등)<br>- 기술 스택 뱃지, 핵심 요약, 대표 이미지, 카드 호버 글로우(Glow) 효과 | **P1 (필수)** |
| **F-04** | **Project Detail Modal (상세 팝업)** | - 프로젝트 카드 클릭 시 열리는 상세 보기 모달(Glassmorphism Overlay)<br>- 담당 역할 및 기여도, 아키텍처 다이어그램, 트러블슈팅 및 성과 상세 기술<br>- GitHub 소스코드 및 Live Demo 링크 제공 | **P1 (필수)** |
| **F-05** | **Resume PDF Download** | - '이력서 다운로드' 클릭 시 정적 PDF 원본(public/assets/resume.pdf) 즉각 다운로드<br>- 새 탭 미리보기 및 오프라인 보관 편의성 제공 | **P1 (필수)** |
| **F-06** | **Contact Me (문의 발송)** | - 채용 담당자 전용 입력 폼(이름, 이메일/회사명, 제안 메시지)<br>- Firebase Firestore 연동을 통한 실시간 문의 데이터 영구 보관<br>- 유효성 검사 및 전송 완료 토스트(Toast) 피드백 제공 | **P1 (필수)** |
| **F-07** | **UI/UX & 모션 시스템** | - 모던 다크 모드(Deep Charcoal/Black) & Cyber-Teal/Violet 액센트<br>- 커스텀 글래스모피즘(Backdrop-filter blur) 및 GSAP ScrollTrigger<br>- 모바일, 태블릿, PC 완벽 반응형(Responsive) 레이아웃 | **P1 (필수)** |

---

## 3. 시스템 아키텍처 및 기술 스택 (System Architecture)

### 3.1 기술 스택 선정 및 근거
- **Frontend Core**: HTML5, Vanilla JavaScript (ES Modules)
  - *선정 이유*: 프레임워크 오버헤드 없는 초경량성, 빠른 초기 로딩 속도, 브라우저 표준 준수.
- **Styling**: Tailwind CSS (CDN) + Custom CSS (custom.css)
  - *선정 이유*: 유연한 유틸리티 클래스 기반의 빠른 UI 구축 + 커스텀 글래스모피즘 및 네온 효과의 완벽한 조화.
- **Animation**: GSAP (GreenSock Animation Platform) + ScrollTrigger
  - *선정 이유*: 60fps의 부드러운 스크롤 연동 모션 및 인터랙션 제어.
- **Backend & Database**: Firebase v10 SDK + Cloud Firestore
  - *선정 이유*: 별도 백엔드 서버 구축 없이 안정적인 Serverless Contact 데이터 적재.
- **Hosting / Infra**: Firebase Hosting
  - *선정 이유*: 전 세계 CDN 기반 초고속 정적 파일 배포 및 무료 SSL(HTTPS) 기본 제공.

### 3.2 데이터 흐름 및 구조 다이어그램
`mermaid
flowchart TD
    User([채용 담당자 / 사용자]) -->|1. 접속 및 탐색| Client[웹 클라이언트: index.html]
    Client -->|2. 스크롤 인터랙션| GSAP[GSAP / ScrollTrigger Engine]
    Client -->|3. 상세 정보 요청| Modal[Project Detail Modal]
    Client -->|4. 이력서 요청| PDF[assets/resume.pdf 다운로드]
    Client -->|5. Contact 폼 제출| Controller[main.js Form Handler]
    Controller -->|6. 데이터 검증 및 전송| FBInit[core/firebase-init.js]
    FBInit -->|7. Firestore Write API| Firestore[(Google Cloud Firestore)]
    FBInit -->|8. 성공 콜백| Toast[토스트 알림 피드백 표출]
`

---

## 4. 디렉터리 구조 및 모듈 배치 (Directory Structure)

`
C:\Users\User\Desktop\자기소개서/
├── public/                       # 정적 서빙 루트 (Firebase Hosting Root)
│   ├── index.html                # 메인 페이지 (Hero, History, Portfolio, Contact, Modal)
│   ├── css/
│   │   └── custom.css            # 글래스모피즘, 스크롤바, 애니메이션 전용 스타일
│   ├── js/
│   │   ├── main.js               # UI 컨트롤러, GSAP 모션, 모달 제어, 폼 이벤트 리스너
│   │   └── core/
│   │       └── firebase-init.js  # Firebase SDK 초기화 및 Firestore 통신 모듈
│   └── assets/
│       ├── images/               # 프로필, 프로젝트 썸네일, 아키텍처 이미지
│       └── resume.pdf            # 다운로드용 이력서 원본 파일
├── doc/                          # 프로젝트 문서 아카이브
│   ├── requirements/             # 요구사항 정의서 (PRD, Requirements List, Overview)
│   ├── design/                   # 시스템 설계서 (HLD, LLD, Screen Design, Module Structure)
│   ├── project-plan.md           # [본 문서] 프로젝트 총괄 계획서
│   └── AI_REPORT_LOG.md          # 변경 및 작업 이력 추적 로그
├── firebase.json                 # Firebase Hosting 배포 설정 파일
└── .firebaserc                   # Firebase 프로젝트 식별자 설정
`

---

## 5. 단계별 개발 추진 일정 및 마일스톤 (WBS & Roadmap)

| 단계 | 주요 태스크 | 산출물 | 상태 |
|---|---|---|---|
| **Phase 1: 기획 및 설계** | - 요구사항 분석 및 PRD 작성<br>- 시스템 아키텍처(HLD/LLD) 및 모듈 설계<br>- 화면 와이어프레임 및 인터랙션 설계 | doc/requirements/*<br>doc/design/* | **완료 (100%)** |
| **Phase 2: UI 퍼블리싱 & 프로토타입** | - public/ 디렉터리 스캐폴딩<br>- index.html 4개 핵심 섹션 및 모달 마크업<br>- custom.css 글래스모피즘 스타일링<br>- main.js GSAP 모션 및 인터랙션 구현 | public/index.html<br>public/css/custom.css<br>public/js/main.js | **완료 (100%)** |
| **Phase 3: Firebase 인프라 연동** | - Firebase 프로젝트 생성 및 웹 앱 등록<br>- irebase-init.js 실제 API Key 구성<br>- Firestore contacts 컬렉션 보안 규칙(Security Rules) 설정<br>- Contact 폼 실제 발송 및 전송 완료 피드백 검증 | public/js/core/firebase-init.js<br>Firebase Console 설정 | **준비 중** |
| **Phase 4: 콘텐츠 및 에셋 최적화** | - 실제 증명사진/프로필 이미지 에셋 배치<br>- 대표 프로젝트 실제 스크린샷 및 썸네일 교체<br>- public/assets/resume.pdf 실제 이력서 PDF 파일 배치<br>- 프로젝트 상세 모달 내 실무 기여도 데이터 보강 | public/assets/* 에셋 완성 | **대기 중** |
| **Phase 5: 검증 및 최종 배포** | - 크로스 브라우징 및 반응형 기기별 테스트<br>- Lighthouse 성능/접근성/SEO 감사 및 튜닝<br>- irebase deploy를 통한 글로벌 CDN 실서비스 배포 | 프로덕션 배포 완료 | **대기 중** |

---

## 6. 리스크 분석 및 대응 방안 (Risk Management)

| 리스크 항목 | 영향도 | 발생 가능성 | 예방 및 완화 대책 |
|---|---|---|---|
| **Firebase API Key 클라이언트 노출** | 중간 | 높음 | - Firebase API Key는 본질적으로 공개 클라이언트 식별자이므로, **Firestore Security Rules**에서 쓰기 조건을 검증(메시지 길이 제한, 필수 필드 체크)하여 무단 접근 차단. |
| **Contact 폼 스팸 공격** | 높음 | 중간 | - 클라이언트단 30초 내 재전송 방지 Throttle 로직 적용.<br>- 비정상적인 대량 요청 차단을 위한 Firestore 보안 룰 및 입력값 유효성 검증. |
| **고용량 에셋에 따른 초기 로딩 지연** | 높음 | 중간 | - 썸네일 이미지는 WebP 포맷 권장 및 HTML loading="lazy" 속성 기본 적용.<br>- 대용량 PDF는 온디맨드 다운로드 방식으로 초기 로드 부하 격리. |
| **구형 브라우저 호환성 이슈** | 낮음 | 낮음 | - ES Modules 미지원 브라우저 대비 모던 표준 스크립트 구조 유지.<br>- custom.css 내 CSS Fallback 색상 선언으로 레이아웃 붕괴 예방. |

---

## 7. 향후 확장 및 유지보수 계획 (Future Enhancements)

1. **프로젝트 데이터 분리**: 프로젝트 추가/수정 시 HTML을 직접 수정하지 않고 JSON 데이터 파일 하나로 관리할 수 있는 동적 렌더링 확장 고려.
2. **Google Analytics (GA4) 연동**: 채용 담당자의 유입 경로, 가장 많이 본 프로젝트 섹션, PDF 다운로드 클릭 이벤트를 트래킹하여 포트폴리오 개선에 활용.
3. **다국어(영문) 지원**: 글로벌 기업 지원을 대비한 원클릭 영문/국문 토글 인터페이스 확장성 확보.