// Menjalankan fungsi setelah dokumen HTML selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  // 1. Inisialisasi Ikon Lucide
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. Mobile Nav Toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});
