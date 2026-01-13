document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Toggle Logic ---
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      // Toggle between bars and times icon
      const icon = menuToggle.querySelector('i');
      if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      }
    });
  }

  // --- Theme Toggle Logic (Click Handler) ---
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = '<i class="fas fa-sun"></i>';
  const moonIcon = '<i class="fas fa-moon"></i>';

  // Function to update the toggle icon based on current theme
  const updateToggleIcon = () => {
    if (document.documentElement.classList.contains('dark')) {
      themeToggle.innerHTML = sunIcon;
    } else {
      themeToggle.innerHTML = moonIcon;
    }
  };

  if (themeToggle) {
    // Set initial icon immediately after DOM is ready
    updateToggleIcon();

    // Add click listener to toggle theme
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
      updateToggleIcon(); // Update icon after toggling theme
    });
  }

  // --- Initialize AOS (Animate on Scroll) ---
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
    });
  } else {
    console.error('AOS library not found.');
  }

  // --- Particles.js Initializations ---
  // Particles.js for Landing Page (index.html)
  if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#FFD700' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#FFD700', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: 'none', random: false }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
      },
      retina_detect: true
    });
  }

  // Particles.js for Timeline (skills.html)
  if (document.getElementById('timeline-particles') && typeof particlesJS !== 'undefined') {
    particlesJS('timeline-particles', {
      particles: {
        number: { value: 70, density: { enable: true, value_area: 1000 } },
        color: { value: ['#F4A7B9', '#FFD700', '#C4A1FF'] },
        shape: { type: 'star' },
        opacity: { value: 0.9, random: true },
        size: { value: 5, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 4, direction: 'none', random: true }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'bubble' }, onclick: { enable: true, mode: 'push' } },
        modes: { bubble: { distance: 200, size: 7, opacity: 0.9 }, push: { particles_nb: 3 } }
      },
      retina_detect: true
    });
  }

  // Particles.js for Skills section (skills.html)
  if (document.getElementById('skills-particles') && typeof particlesJS !== 'undefined') {
    particlesJS('skills-particles', {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 1000 } },
        color: { value: ['#F4A7B9', '#C4A1FF'] },
        shape: { type: 'circle' },
        opacity: { value: 0.6, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 2, direction: 'none', random: true }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'bubble' }, onclick: { enable: false } },
        modes: { bubble: { distance: 150, size: 5, opacity: 0.8 } }
      },
      retina_detect: true
    });
  }

  // Particles.js for Projects Page (projects.html) - Assuming you want particles here too
  if (document.getElementById('projects-particles') && typeof particlesJS !== 'undefined') {
    particlesJS('projects-particles', {
      particles: {
        number: { value: 120, density: { enable: true, value_area: 800 } },
        color: { value: ['#F4A7B9', '#C4A1FF', '#FFD700'] },
        shape: { type: ['star', 'circle'], stroke: { width: 0 } },
        opacity: { value: 0.7, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 4, direction: 'none', random: true },
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 10 } },
      },
      retina_detect: true,
    });
  }


  // --- Floating Hearts ---
  const heartsContainer = document.querySelector('.hearts-container');
  if (heartsContainer) {
    if (heartsContainer.children.length === 0) { // Prevents adding hearts multiple times
      for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 8}s`;
        heartsContainer.appendChild(heart);
      }
    }
  }

  // --- CCNA Glitch Effect (skills.html) ---
  const ccnaLoading = document.querySelector('.ccna-loading');
  if (ccnaLoading) {
    ccnaLoading.addEventListener('mouseover', () => ccnaLoading.classList.add('glitch'));
    ccnaLoading.addEventListener('mouseout', () => ccnaLoading.classList.remove('glitch'));
  }

  // --- Node Explosions on click (skills.html timeline) ---
  const explosionNodes = document.querySelectorAll('.timeline-item'); // Targeting timeline-item now
  if (explosionNodes.length) {
    explosionNodes.forEach(node => {
      node.addEventListener('click', (event) => {
        // Only trigger explosion if clicking on the card itself, not children
        if (event.target.closest('.timeline-card')) {
            const rect = node.getBoundingClientRect();
            for (let i = 0; i < 15; i++) {
              const particle = document.createElement('div');
              particle.classList.add('explosion-particle');
              document.body.appendChild(particle);
              
              particle.style.left = `${rect.left + rect.width / 2}px`;
              particle.style.top = `${rect.top + rect.height / 2}px`;
              
              const angle = Math.random() * 2 * Math.PI;
              const distance = Math.random() * 50 + 30;

              particle.animate([
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                { transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`, opacity: 0 }
              ], {
                duration: 600 + Math.random() * 200,
                easing: 'ease-out'
              }).onfinish = () => particle.remove();
            }
        }
      });
    });
  }

  // --- Parallax Effect (projects.html) ---
  if (document.querySelector('.parallax-section')) {
    window.addEventListener('scroll', () => {
      const parallaxSections = document.querySelectorAll('.parallax-section');
      parallaxSections.forEach(section => {
        const bg = section.querySelector('.parallax-bg');
        if (bg) {
          const offset = section.getBoundingClientRect().top;
          const speed = 0.5;
          bg.style.transform = `translateY(${offset * speed}px)`;
        }
      });
    });
  }

  // --- Social Sidebar Animation (projects.html) ---
  const socialIcons = document.querySelectorAll('.social-icon');
  if (socialIcons.length > 0) {
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseover', () => {
        icon.style.transform = 'translateX(10px)';
      });
      icon.addEventListener('mouseout', () => {
        icon.style.transform = 'translateX(0)';
      });
    });
  }

}); // End of DOMContentLoaded
