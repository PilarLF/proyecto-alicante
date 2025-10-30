/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

// Cargar todos los componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM cargado - Inicializando app');
  initializeApp();
});

// Función para inicializar toda la funcionalidad después de cargar componentes
function initializeApp() {
  /**
   * Barcelona Site - Main JavaScript
   */
  
  // Toggle del menú móvil
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  console.log('navToggle:', navToggle);
  console.log('navMenu:', navMenu);

  if (navToggle && navMenu) {
    console.log('Elementos encontrados, añadiendo event listener');
    
    // Probar con múltiples formas de capturar el click
    navToggle.addEventListener('click', toggleMenu, true);
    navToggle.addEventListener('touchstart', toggleMenu, true);
    
    function toggleMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Toggle clickeado');
      
      const isActive = navMenu.classList.contains('nav__menu--active');
      console.log('Menu activo antes:', isActive);
      
      navMenu.classList.toggle('nav__menu--active');
      
      console.log('Menu activo después:', navMenu.classList.contains('nav__menu--active'));
      console.log('Clases del menú:', navMenu.className);

      // Cambiar icono del toggle
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
        console.log('Icono cambiado. Clases:', icon.className);
      }
    }
  } else {
    console.error('No se encontraron los elementos navToggle o navMenu');
  }

  // Cerrar menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll('.nav__link');
  console.log('Enlaces encontrados:', navLinks.length);
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log('Link clickeado');
      
      if (navMenu) {
        navMenu.classList.remove('nav__menu--active');
      }

      // Restaurar icono del toggle
      const icon = navToggle?.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    });
  });
  
  // Debug: Verificar si el botón está bloqueado
  console.log('Estilo computado del botón:', window.getComputedStyle(navToggle).pointerEvents);
  console.log('Z-index del botón:', window.getComputedStyle(navToggle).zIndex);
}