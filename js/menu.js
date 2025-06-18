document.addEventListener('DOMContentLoaded', () => {
  const toggleBtns = document.querySelectorAll('.menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('close-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');

  function toggleSidebar() {
    sidebar.classList.toggle('active');
    backdrop.classList.toggle('active');
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    backdrop.classList.remove('active');
  }

  // Añadir event listener a todos los botones toggle
  toggleBtns.forEach(btn => btn.addEventListener('click', toggleSidebar));

  closeBtn?.addEventListener('click', closeSidebar);
  backdrop?.addEventListener('click', closeSidebar);
});
