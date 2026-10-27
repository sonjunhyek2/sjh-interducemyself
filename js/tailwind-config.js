/**
 * tailwind-config.js
 * Purpose: 전역 Tailwind CSS 테마 설정 (디자인 토큰 단일 관리 파일)
 * 모든 HTML 페이지에서 이 파일 하나를 참조하여 일관된 색상 시스템을 유지한다.
 * 색상/폰트 변경 시 이 파일만 수정하면 전체 페이지에 적용된다.
 */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['Pretendard', 'sans-serif'] },
      colors: {
        background: '#0a0a0a',
        surface:    '#111111',
        'surface-2': '#1a1a1a',
        accent:     '#3b82f6'
      }
    }
  }
}
