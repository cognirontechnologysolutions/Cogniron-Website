/**
 * Animations JavaScript - Cogniron Figma Make Theme
 * Scroll-triggered animations using Intersection Observer
 *
 * @package Cogniron_Figmake
 */

(function() {
  'use strict';

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Scroll Animation Observer
   */
  function initScrollAnimations() {
    if (prefersReducedMotion) return;

    // Elements to animate on scroll
    const animateElements = document.querySelectorAll(
      '.fade-in, .fade-in-up, .slide-in-left, .slide-in-right, .scale-in, .scroll-animate, .scroll-animate-left, .scroll-animate-right'
    );

    if (animateElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Optionally unobserve after animation to improve performance
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animateElements.forEach(element => {
      observer.observe(element);
    });
  }

  /**
   * Number Counter Animation for Stats
   */
  function initCounterAnimation() {
    if (prefersReducedMotion) return;

    const counters = document.querySelectorAll('.stat-item h2');

    if (counters.length === 0) return;

    const animateCounter = (element) => {
      const text = element.textContent;
      const match = text.match(/\d+/);
      
      if (!match) return;
      
      const target = parseInt(match[0]);
      const suffix = element.querySelector('span') ? element.querySelector('span').textContent : '';
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += increment;
        
        if (current < target) {
          const numberNode = element.firstChild;
          if (numberNode) {
            numberNode.textContent = Math.ceil(current);
          }
          requestAnimationFrame(updateCounter);
        } else {
          const numberNode = element.firstChild;
          if (numberNode) {
            numberNode.textContent = target;
          }
        }
      };

      updateCounter();
    };

    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = 'true';
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => {
      observer.observe(counter);
    });
  }

  /**
   * Card Tilt Effect (3D hover) - Optional enhancement
   */
  function initCardTilt() {
    if (prefersReducedMotion) return;

    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    });
  }

  /**
   * Image Reveal on Scroll
   */
  function initImageReveal() {
    if (prefersReducedMotion) return;

    const images = document.querySelectorAll('[data-image-reveal]');

    if (images.length === 0) return;

    images.forEach(img => {
      img.style.clipPath = 'inset(0 100% 0 0)';
      img.style.transition = 'clip-path 0.8s ease-out';
    });

    const observerOptions = {
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.clipPath = 'inset(0 0 0 0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    images.forEach(img => {
      observer.observe(img);
    });
  }

  /**
   * Stagger Animation for Grid Items
   */
  function initStaggerAnimation() {
    if (prefersReducedMotion) return;

    const gridContainers = document.querySelectorAll('.wp-block-post-template, .wp-block-columns');

    gridContainers.forEach(container => {
      const items = container.children;
      
      Array.from(items).forEach((item, index) => {
        const delay = index * 100; // 100ms delay between each item
        item.style.animationDelay = `${delay}ms`;
        
        // Add animation class if not already present
        if (!item.classList.contains('fade-in-up') && 
            !item.classList.contains('fade-in') &&
            item.classList.contains('post-card') || 
            item.classList.contains('feature-card') ||
            item.classList.contains('service-card')) {
          item.classList.add('fade-in-up');
        }
      });
    });
  }

  /**
   * Parallax Scroll Effect (subtle)
   */
  function initParallax() {
    if (prefersReducedMotion) return;

    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length === 0) return;

    function handleParallax() {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach(element => {
        const speed = element.dataset.parallax || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    }

    let ticking = false;

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          handleParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /**
   * Entrance Animation on Page Load
   */
  function initPageEntrance() {
    if (prefersReducedMotion) return;

    // Add fade-in to main content
    const main = document.querySelector('.site-main');
    if (main) {
      main.style.opacity = '0';
      main.style.transition = 'opacity 0.5s ease';

      window.addEventListener('load', function() {
        main.style.opacity = '1';
      });
    }
  }

  /**
   * Add hover effect to post cards
   */
  function initCardHoverEffects() {
    const cards = document.querySelectorAll('.post-card, .service-card, .feature-card, .testimonial-card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }

  /**
   * Initialize all animations
   */
  function init() {
    initScrollAnimations();
    initCounterAnimation();
    initCardTilt();
    initImageReveal();
    initStaggerAnimation();
    initParallax();
    initPageEntrance();
    initCardHoverEffects();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
