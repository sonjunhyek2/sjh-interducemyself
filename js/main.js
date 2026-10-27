/**
 * main.js - UI Controller (Static / GitHub Pages)
 * Purpose: 모바일 메뉴, 프로젝트 상세 모달, GSAP 애니메이션 처리
 * Depends: GSAP (CDN). 외부 서버/로그인/API 키 의존성 없음
 */

// ============================================================
// Step 1: DOM 엘리먼트 참조
// ============================================================
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const modalOverlay = document.getElementById("modal-overlay");
const modalCloseBtn = document.getElementById("modal-close");

// ============================================================
// Step 2: 모바일 메뉴 토글
// ============================================================
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
// Step 3: 프로젝트 상세 모달
// 카드의 data-* 속성에서 값을 읽어 textContent로만 주입한다(XSS 방지).
// ============================================================
function openModal(card) {
  if (!card || !modalOverlay) return;
  const d = card.dataset;

  document.getElementById("modal-title").textContent = d.title || "";
  document.getElementById("modal-period").textContent = d.period || "";
  document.getElementById("modal-description").textContent = d.description || "";
  document.getElementById("modal-role").textContent = d.role || "";
  document.getElementById("modal-trouble").textContent = d.trouble || "";

  const gh = document.getElementById("modal-github");
  gh.href = d.github || "#";

  const stackContainer = document.getElementById("modal-stack");
  stackContainer.textContent = "";
  (d.stack || "").split(",").map(s => s.trim()).filter(Boolean).forEach(s => {
    const span = document.createElement("span");
    span.className = "px-3 py-1 text-xs font-mono border border-white/20 rounded-full text-gray-300";
    span.textContent = s;
    stackContainer.appendChild(span);
  });

  modalOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.add("hidden");
  document.body.style.overflow = "";
}

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => openModal(card));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(card);
    }
  });
});

if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ============================================================
// Step 4: GSAP 애니메이션 (CDN 로드 실패 시 조용히 건너뜀)
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".gsap-hero", {
    y: 40, opacity: 0, duration: 1.2, stagger: 0.25, ease: "power3.out"
  });

  gsap.utils.toArray(".gsap-section").forEach(section => {
    gsap.from(section, {
      scrollTrigger: { trigger: section, start: "top 82%" },
      y: 40, opacity: 0, duration: 0.9, ease: "power2.out"
    });
  });
});
