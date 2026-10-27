---
trigger: always_on
---

**【3. 실무급 디렉토리 및 개발 표준】**

### **3.1 다중 페이지 아키텍처 (Multi-Page Architecture)**

- **단일 파일 욱여넣기 금지:** 모든 UI를 `index.html` 하나에 강제로 집어넣지 않는다. 화면과 목적에 따라 HTML 페이지를 명확히 분리한다.

- **구조 원칙:** 모든 웹 에셋은 `public/` 내에 배치하며, 각 화면과 기능에 맞춰 1:1로 매칭되는 CSS/JS를 연결하여 의존성을 분리한다.

- **공통 자산 트리:**

  - `public/index.html`: 서비스의 진입점 (메인 랜딩 또는 대시보드).

  - `public/pages/`: 서브 페이지 HTML 파일 분리 (예: `login.html`, `shop.html`, `profile.html`).

  - `public/css/`: 공통 스타일(`global.css`)과 각 페이지/컴포넌트별 개별 스타일 파일 분리.

  - `public/js/core/`: Firebase 초기화, API 통신 등 백엔드/인프라 공통 로직.

  - `public/js/ui/`: 각 페이지별 인터랙션 로직 및 컴포넌트 렌더링 스크립트 분리.

  - `doc/`: 실무 표준 문서 관리 (SRS, HLD, LLD, AI_REPORT_LOG).



### **3.2 Adaptive UX & UI (기기 최적화)**

- **모바일:** 하단 탭 바, 스와이프 제스처, 한 손 조작 환경을 우선 고려한 UI 설계.

- **PC:** 넓은 공간을 활용한 멀티 컬럼 레이아웃, 정교한 호버 효과, 키보드 단축키 지원.

- **공통:** 공통 헤더와 푸터는 유지보수를 위해 자바스크립트를 이용한 컴포넌트 주입 방식을 사용한다. ARIA 웹 접근성 표준 100% 준수.



### **3.3 주석 및 코드 품질**

- **Clean Documentation:** 주석에서 이모지를 배제하고 Purpose, Param, Return을 명시하는 전문적인 주석법을 사용한다. 또한, 복잡한 비즈니스 로직 내부에는 단계별(Step 1, Step 2...) 흐름을 설명하는 인라인 주석을 반드시 포함한다.

- **Token Efficiency:** 이미 작성된 코드를 무의미하게 반복 출력하지 않고, 변경된 로직만 핀포인트로 제시한다.



**【4. AI 에이전트 자율성 및 안전망】**

- **상시 배포 보증 (Zero Broken Builds):** 코드를 출력할 때는 항상 브라우저에서 즉시 실행이 보장되는 상태여야 한다. 문법 오류, 모듈 Import 에러가 발생하지 않도록 교차 검증한다.

- **Anti-Hallucination:** 에러 발생 시 최신 공식 문서를 실시간 검색하여 검증한다.

- **Circuit Breaker:** 동일 문제 3회 반복 시 즉시 보고하고 구조적 대안(우회 방법)을 제시한다.

- **Privacy & Security:** API 키 하드코딩 절대 금지. Firebase Security Rules 및 App Check를 기본으로 설정한다.



**【5. Firebase Base Setup (V4.0-PRO)】**

`public/js/core/firebase-init.js`



```javascript

/**

 * Firebase Infrastructure Configuration (Master Pro)

 * Version: 2026.04.18

 * Description: Unified configuration for high-performance web platforms.

 */



// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "your-api-key",

  authDomain: "your-auth-domain",

  projectId: "your-project-id",

  storageBucket: "your-storage-bucket",

  messagingSenderId: "your-messaging-sender-id",

  appId: "your-app-id",

  measurementId: "your-measurement-id"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);



// AI Note: Custom instance initialization logic (e.g. Remote Config) as requested by user.

```



**【6. AI (Gemini API) 연동 및 보안 표준 (Serverless 기반)】**

- **독립적 AI 구동:** 웹 서비스 내의 AI 기능(예: 텍스트/이미지 생성, 추천 시스템, 챗봇 등)은 파이썬 알림 봇의 데이터 모니터링 역할과 무관하게 독립적으로 작동해야 한다.

- **보안 최우선 원칙:** Gemini API Key 등 외부 AI 서비스 비밀 키는 클라이언트(HTML/JS)에 절대 하드코딩하지 않는다.

- **서버리스 프록시:** 브라우저에서 AI 기능을 호출할 때는 반드시 **Firebase Cloud Functions** 를 브릿지로 구축하여 서버 환경에서 API를 안전하게 호출하도록 설계한다. 반환된 데이터는 `DOMPurify`로 XSS 방어 후 렌더링한다.