// Animation and interaction effects
class AnimationController {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupParallaxEffects();
    this.setupHoverEffects();
    this.setupBannerAnimation();
  }

  setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.hero-text, .project-showcase, .about-text, .contact-content');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, this.observerOptions);

    animatedElements.forEach(el => {
      el.classList.add('animate-ready');
      observer.observe(el);
    });
  }

  setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-image, .about-image');
    
    window.addEventListener('scroll', throttle(() => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      parallaxElements.forEach(el => {
        el.style.transform = `translateY(${rate}px)`;
      });
    }, 16));
  }

  setupHoverEffects() {
    // Project cards hover effect
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.classList.add('hover-effect');
      });
      
      item.addEventListener('mouseleave', function() {
        this.classList.remove('hover-effect');
      });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn, .project-button, .about-button, .contact-button, .portfolio-button, .cta-button');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.classList.add('button-hover');
      });
      
      button.addEventListener('mouseleave', function() {
        this.classList.remove('button-hover');
      });
    });
  }

  setupBannerAnimation() {
    const bannerText = document.querySelector('.banner-text');
    if (bannerText) {
      // Clone the banner text for seamless loop
      const clone = bannerText.cloneNode(true);
      bannerText.parentNode.appendChild(clone);
    }
  }

  // Stagger animation for multiple elements
  staggerAnimation(elements, delay = 100) {
    elements.forEach((el, index) =>