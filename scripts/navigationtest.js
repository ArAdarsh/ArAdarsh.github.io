// Navigation specific functionality
class Navigation {
  constructor() {
    this.header = document.querySelector('.header');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.currentSection = '';
    
    this.init();
  }

  init() {
    this.setupScrollSpy();
    this.setupMobileNavigation();
    this.setupHeaderScroll();
  }

  setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.updateActiveNavLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  updateActiveNavLink(sectionId) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      }
    });
  }

  setupMobileNavigation() {
    // Add mobile menu toggle if needed
    const mobileBreakpoint = 768;
    
    window.addEventListener('resize', throttle(() => {
      if (window.innerWidth <= mobileBreakpoint) {
        this.enableMobileNavigation();
      } else {
        this.disableMobileNavigation();
      }
    }, 250));

    // Initial check
    if (window.innerWidth <= mobileBreakpoint) {
      this.enableMobileNavigation();
    }
  }

  enableMobileNavigation() {
    // Mobile navigation logic
    this.header.classList.add('mobile-nav');
  }

  disableMobileNavigation() {
    // Desktop navigation logic
    this.header.classList.remove('mobile-nav');
  }

  setupHeaderScroll() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        this.header.classList.add('header-hidden');
      } else {
        // Scrolling up
        this.header.classList.remove('header-hidden');
      }
      
      // Add background on scroll
      if (scrollTop > 50) {
        this.header.classList.add('header-scrolled');
      } else {
        this.header.classList.remove('header-scrolled');
      }
      
      lastScrollTop = scrollTop;
    }, 100));
  }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
});

// Add CSS classes for navigation states
const style = document.createElement('style');
style.textContent = `
  .header {
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .header-hidden {
    transform: translateY(-100%);
  }
  
  .header-scrolled {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
  }
  
  .nav-link.active {
    color: var(--primary-black);
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    .mobile-nav .navigation {
      background: var(--primary-white);
      border-radius: 10px;
      padding: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
  }
`;
document.head.appendChild(style);
