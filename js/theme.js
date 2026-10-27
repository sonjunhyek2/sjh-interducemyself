/**
 * theme.js
 * Purpose: 다크/라이트 모드 전환 및 사용자 선호 설정 localStorage 영속화
 * Note: 일반 스크립트로 로드 (body 최하단). FOUC 방지는 각 HTML head의 인라인 스크립트가 담당.
 */
(function () {
  const STORAGE_KEY = 'sjh-theme';

  /**
   * 버튼 아이콘 및 aria-label 갱신
   * @param {boolean} isDark - 현재 다크 모드 여부
   */
  function updateBtn(isDark) {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    // 다크 모드면 라이트 전환 아이콘(태양), 라이트 모드면 다크 전환 아이콘(달)
    btn.innerHTML = isDark
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
    btn.setAttribute('aria-label', isDark ? '라이트 모드로 전환' : '다크 모드로 전환');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');

    // Step 1: 초기 버튼 상태 동기화
    updateBtn(isDark);

    // Step 2: 클릭 이벤트 바인딩
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;

    btn.addEventListener('click', function () {
      const currentlyDark = html.classList.contains('dark');

      if (currentlyDark) {
        html.classList.remove('dark');
        localStorage.setItem(STORAGE_KEY, 'light');
        updateBtn(false);
      } else {
        html.classList.add('dark');
        localStorage.setItem(STORAGE_KEY, 'dark');
        updateBtn(true);
      }
    });
  });
})();
