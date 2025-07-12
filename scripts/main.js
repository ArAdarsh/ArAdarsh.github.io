// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initializeNavigation();
  initializeAnimations();
  initializeInteractions();
});

// Smooth scrolling for navigation links
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link, .footer-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Back to top functionality
function initializeInteractions() {
  const backToTopButton = document.querySelector('.back-to-top');
  
  if (backToTopButton) {
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Contact button interaction
  const contactButton = document.querySelector('.contact-button');
  if (contactButton) {
    contactButton.addEventListener('click', function() {
      // Add contact form or email functionality here
      window.location.href = 'mailto:adarsh@example.com';
    });
  }

  // Portfolio button interaction
  const portfolioButton = document.querySelector('.portfolio-button');
  if (portfolioButton) {
    portfolioButton.addEventListener('click', function() {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }

  // CTA button interaction
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      const contactSection = document.querySelector('.contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }

  // Project buttons interaction
  const projectButtons = document.querySelectorAll('.project-button');
  projectButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Add project detail page navigation or modal functionality
      console.log('Project button clicked');
    });
  });

  // About button interaction
  const aboutButton = document.querySelector('.about-button');
  if (aboutButton) {
    aboutButton.addEventListener('click', function() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
}

// Utility function for throttling scroll events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add loading state management
function showLoading() {
  document.body.classList.add('loading');
}

function hideLoading() {
  document.body.classList.remove('loading');
}

// Image lazy loading
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Error handling for images
function handleImageErrors() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
      console.warn('Failed to load image:', this.src);
    });
  });
}

// Initialize error handling
handleImageErrors();
