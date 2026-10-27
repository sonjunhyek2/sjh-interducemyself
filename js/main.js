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
// Step 1-1: 아코디언 상세/근거 펼치기 토글 (마우스 및 키보드 Enter/Space 지원)
// 통과 기준: T01-C19 (상호작용), T01-C20 (마우스), T01-C21 (키보드)
// ============================================================
const toggleButtons = document.querySelectorAll(".evidence-toggle-btn");

toggleButtons.forEach(btn => {
  const toggleAction = () => {
    const targetId = btn.getAttribute("aria-controls");
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    const isExpanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isExpanded));
    targetEl.classList.toggle("hidden");

    const labelSpan = btn.querySelector("span");
    const icon = btn.querySelector("i");
    if (labelSpan) {
      labelSpan.textContent = isExpanded ? "경험 및 근거 펼치기" : "경험 및 근거 접기";
    }
    if (icon) {
      icon.style.transform = isExpanded ? "rotate(0deg)" : "rotate(180deg)";
    }
  };

  btn.addEventListener("click", toggleAction);
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAction();
    }
  });
});


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
