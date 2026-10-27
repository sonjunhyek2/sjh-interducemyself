/**
 * main.js - UI Controller (Static / GitHub Pages)
 * Purpose: 모바일 메뉴 토글, GSAP 스크롤 모션 제어
 * Depends: GSAP (CDN). 외부 서버/로그인/API 키 의존성 없음
 */

// ============================================================
// Step 1: 모바일 메뉴 토글
// ============================================================
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  // 메뉴 항목 클릭 시 자동 닫힘
  mobileMenu.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => mobileMenu.classList.add("hidden"))
  );
}

// ============================================================
// Step 2: GSAP 애니메이션 (CDN 로드 실패 시 조용히 건너뜀)
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".gsap-hero", {
    y: 40,
    opacity: 0,
    duration: 1.2,
    stagger: 0.25,
    ease: "power3.out"
  });

  gsap.utils.toArray(".gsap-section").forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 82%"
      },
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out"
    });
  });
});
