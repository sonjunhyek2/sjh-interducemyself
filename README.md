# 손준혁 | Portfolio

로그인 없이 누구나 열람할 수 있는 정적 포트폴리오 페이지입니다. (GitHub Pages)

- **공개 페이지 주소**: https://sonjunhyek2.github.io/sjh-interducemyself/
- **공개 소스 코드 저장소**: https://github.com/sonjunhyek2/sjh-interducemyself

## 페이지의 대상과 목적

IT 채용 담당자에게, 탄탄한 CS 기본기로 빠르게 성장하며 맡은 일을 끝까지 해내는 개발자임을 보여 주기 위해 만들었습니다.

## 공개하는 정보

1. 이름과 개발자로서의 소개
2. 학력(전공)과 학습 중인 자격증
3. 기술 스택과 프로젝트 요약
4. GitHub 공개 저장소 주소

## 공개하지 않는 정보 (페이지와 소스 코드에 포함하지 않음)

1. 전화번호
2. 집 주소
3. 주민등록번호와 생년월일
4. 이메일 주소, 비밀번호, API 키 등 계정·인증 정보

## 구조

```
index.html        메인 진입점 (Hero 소개 및 각 페이지 탐색 허브)
history.html      이력 및 Core Stack 페이지
portfolio.html    포트폴리오 프로젝트 카드 및 상세 모달 페이지
info.html         페이지 대상·목적 및 공개/비공개 정보 명세 페이지
css/custom.css    공통 커스텀 스타일
js/main.js        모달, 모바일 메뉴, GSAP 모션
js/theme.js       다크/라이트 테마 제어
js/tailwind-config.js Tailwind 설정
.nojekyll         Jekyll 처리 비활성화
```

별도 서버, 로그인, 빌드 과정이 없습니다.
