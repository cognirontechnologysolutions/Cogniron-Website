/**
 * Main JavaScript - Cogniron Figma Make Theme
 * Core interactivity and functionality
 *
 * @package Cogniron_Figmake
 */

(function() {
  'use strict';

  /**
   * Mobile Menu Toggle
   */
  function initMobileMenu() {
    const menuButtons = document.querySelectorAll('.wp-block-navigation__responsive-container-open, .wp-block-navigation__responsive-container-close');
    
    menuButtons.forEach(button => {
      button.addEventListener('click', function() {
        const nav = this.closest('.wp-block-navigation');
        if (nav) {
          const isOpen = nav.classList.contains('has-modal-open');
          // Prevent body scroll when menu is open
          document.body.style.overflow = isOpen ? '' : 'hidden';
        }
      });
    });

    // Close menu on ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const openNav = document.querySelector('.wp-block-navigation.has-modal-open');
        if (openNav) {
          const closeButton = openNav.querySelector('.wp-block-navigation__responsive-container-close');
          if (closeButton) {
            closeButton.click();
          }
        }
      }
    });
  }

  /**
   * Smooth Scroll for Anchor Links
   */
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#' || href === '#!') return;
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          const headerOffset = 100;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Header Scroll Effect
   */
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > scrollThreshold) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  /**
   * Back to Top Button
   */
  function initBackToTop() {
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    `;
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.className = 'back-to-top-button';
    backToTop.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 48px;
      height: 48px;
      display: none;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0054A6 0%, #00C2C7 100%);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 10px 24px rgba(0, 55, 106, 0.12);
      transition: all 0.3s ease;
      z-index: 999;
    `;

    document.body.appendChild(backToTop);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'none';
      }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Hover effect
    backToTop.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
      this.style.boxShadow = '0 12px 28px rgba(0, 84, 166, 0.3)';
    });

    backToTop.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 10px 24px rgba(0, 55, 106, 0.12)';
    });
  }

  /**
   * External Links - Open in New Tab
   */
  function initExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]');
    const currentDomain = window.location.hostname;

    links.forEach(link => {
      try {
        const linkDomain = new URL(link.href).hostname;
        
        if (linkDomain !== currentDomain) {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      } catch (e) {
        // Invalid URL, skip
      }
    });
  }

  /**
   * Lazy Loading Images (if needed beyond native lazy loading)
   */
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const images = document.querySelectorAll('img[data-src]');
      
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }

  /**
   * Add button ripple effect
   */
  function initButtonRipple() {
    const buttons = document.querySelectorAll('.wp-block-button__link, button[type="submit"]');

    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.className = 'ripple-effect';
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          top: ${y}px;
          left: ${x}px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          pointer-events: none;
          transform: scale(0);
          animation: ripple 0.6s ease-out;
        `;

        // Ensure button has position relative
        const position = window.getComputedStyle(this).position;
        if (position === 'static') {
          this.style.position = 'relative';
        }
        
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  /**
   * Initialize all functions when DOM is ready
   */
  function init() {
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initBackToTop();
    initExternalLinks();
    initLazyLoading();
    initButtonRipple();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
