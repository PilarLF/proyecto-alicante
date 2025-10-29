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
// Función para cargar componentes HTML
async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
    } catch (error) {
        console.error(`Error cargando ${file}:`, error);
    }
}

// Cargar todos los componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'components/header.html');
    loadComponent('main', 'components/main.html');
    loadComponent('footer', 'components/footer.html');
});

// Función para inicializar toda la funcionalidad después de cargar componentes
function initializeApp() {
  /**
   * Barcelona Site - Main JavaScript
   */

  // Toggle mobile menu
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('nav__menu--active');
      
      // Cambiar icono del toggle
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
  }

  // Cerrar menú al hacer clic en un enlace (móvil)
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
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

  // Smooth scroll para navegación
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Ignorar enlaces solo con "#"
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const nav = document.querySelector('.nav');
        const navHeight = nav ? nav.offsetHeight : 0;
        const targetPosition = target.offsetTop - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Animación de entrada para las cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar las tarjetas de lugares
  document.querySelectorAll('.place').forEach(place => {
    place.style.opacity = '0';
    place.style.transform = 'translateY(30px)';
    place.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(place);
  });

  // Cambiar estilo del nav al hacer scroll
  let lastScroll = 0;
  const nav = document.querySelector('.nav');

  if (nav) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      } else {
        nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
      }
      
      lastScroll = currentScroll;
    });
  }

  // Log de bienvenida
  console.log('%c¡Bienvenido a Barcelona! 🏛️', 'color: #667eea; font-size: 20px; font-weight: bold;');
  console.log('%cEste sitio fue creado con UOC Boilerplate', 'color: #764ba2; font-size: 14px;');
}

// Cargar todos los componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', async () => {
    // Cargar componentes
    await loadComponent('header', '../../views/header.html');
    await loadComponent('main', '../../views/main.html');
    await loadComponent('footer', '../../views/footer.html');
    
    // Inicializar la aplicación después de cargar los componentes
    initializeApp();
});


/**
 * Barcelona Site - Main JavaScript
 */

// // Toggle mobile menu
// const navToggle = document.getElementById('navToggle');
// const navMenu = document.getElementById('navMenu');

// if (navToggle && navMenu) {
//   navToggle.addEventListener('click', () => {
//     navMenu.classList.toggle('nav__menu--active');
    
//     // Cambiar icono del toggle
//     const icon = navToggle.querySelector('i');
//     if (icon) {
//       icon.classList.toggle('fa-bars');
//       icon.classList.toggle('fa-times');
//     }
//   });
// }

// // Cerrar menú al hacer clic en un enlace (móvil)
// const navLinks = document.querySelectorAll('.nav__link');

// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     navMenu.classList.remove('nav__menu--active');
    
//     // Restaurar icono del toggle
//     const icon = navToggle?.querySelector('i');
//     if (icon) {
//       icon.classList.add('fa-bars');
//       icon.classList.remove('fa-times');
//     }
//   });
// });

// // Smooth scroll para navegación
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     const href = this.getAttribute('href');
    
//     // Ignorar enlaces solo con "#"
//     if (href === '#') return;
    
//     e.preventDefault();
//     const target = document.querySelector(href);
    
//     if (target) {
//       const navHeight = document.querySelector('.nav').offsetHeight;
//       const targetPosition = target.offsetTop - navHeight - 20;
      
//       window.scrollTo({
//         top: targetPosition,
//         behavior: 'smooth'
//       });
//     }
//   });
// });

// // Animación de entrada para las cards
// const observerOptions = {
//   threshold: 0.1,
//   rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry, index) => {
//     if (entry.isIntersecting) {
//       setTimeout(() => {
//         entry.target.style.opacity = '1';
//         entry.target.style.transform = 'translateY(0)';
//       }, index * 100);
//       observer.unobserve(entry.target);
//     }
//   });
// }, observerOptions);

// // Observar las tarjetas de lugares
// document.querySelectorAll('.place').forEach(place => {
//   place.style.opacity = '0';
//   place.style.transform = 'translateY(30px)';
//   place.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//   observer.observe(place);
// });

// // Cambiar estilo del nav al hacer scroll
// let lastScroll = 0;
// const nav = document.querySelector('.nav');

// window.addEventListener('scroll', () => {
//   const currentScroll = window.pageYOffset;
  
//   if (currentScroll > 100) {
//     nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
//   } else {
//     nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
//   }
  
//   lastScroll = currentScroll;
// });

// // Log de bienvenida
// console.log('%c¡Bienvenido a Barcelona! 🏛️', 'color: #667eea; font-size: 20px; font-weight: bold;');
// console.log('%cEste sitio fue creado con UOC Boilerplate', 'color: #764ba2; font-size: 14px;');


