      // JavaScript para el menú hamburguesa
      document.addEventListener('DOMContentLoaded', function() {
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const navList = document.getElementById('main-nav-list');
        
        hamburgerBtn.addEventListener('click', function() {
          // Alternar clase activa para el botón
          this.classList.toggle('active');
          
          // Alternar visibilidad del menú
          navList.classList.toggle('show');
          
          // Prevenir scroll cuando el menú está abierto
          document.body.classList.toggle('menu-open');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('#main-nav-list a');
        navLinks.forEach(link => {
          link.addEventListener('click', function() {
            hamburgerBtn.classList.remove('active');
            navList.classList.remove('show');
            document.body.classList.remove('menu-open');
          });
        });
      });