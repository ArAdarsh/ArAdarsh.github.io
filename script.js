// Wait for the DOM to be fully loaded before running scripts

/**
 * Pre-loader and Starting Animation
 * Fades out the pre-loader after the window loads and triggers
 * the hero section's staggered animation.
 */
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // Hide the pre-loader
    if(preloader) {
        preloader.classList.add('hidden');
    }
    
    // Add 'loaded' class to the body to trigger hero animations
    document.body.classList.add('loaded');
});



document.addEventListener('DOMContentLoaded', () => {

    /**
     * Mobile Navigation Toggle
     * Handles the opening and closing of the mobile navigation menu.
     */
    const navToggle = document.querySelector('.header__toggle');
    const navMenu = document.querySelector('.header__menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            // Toggle the 'nav--open' class to show/hide the menu
            navMenu.classList.toggle('nav--open');
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('nav--open');
            });
        });
    }


    /**
     * "Scroll to Top" Button
     * Smoothly scrolls the user to the top of the page when clicked.
     */
    const toTopButton = document.querySelector('.footer__to-top');

    if (toTopButton) {
        toTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // This creates the smooth scrolling effect
            });
        });
    }

});