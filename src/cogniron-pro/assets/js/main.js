/**
 * Main JavaScript File
 *
 * @package Cogniron_Pro
 */

(function() {
    'use strict';

    // ========================================================================
    // Theme Toggle (Light/Dark Mode)
    // ========================================================================
    
    function initThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        const body = document.body;
        
        if (!themeToggle) return;

        // Get saved theme from localStorage or default to 'light'
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', savedTheme);

        // Toggle theme on button click
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // ========================================================================
    // Mobile Menu Toggle
    // ========================================================================
    
    function initMobileMenu() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const navigation = document.querySelector('.main-navigation');
        
        if (!menuToggle || !navigation) return;

        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            this.setAttribute('aria-expanded', !isExpanded);
            this.classList.toggle('active');
            navigation.classList.toggle('active');
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navigation.classList.contains('active')) {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.classList.remove('active');
                navigation.classList.remove('active');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navigation.contains(e.target) && !menuToggle.contains(e.target)) {
                if (navigation.classList.contains('active')) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.classList.remove('active');
                    navigation.classList.remove('active');
                }
            }
        });
    }

    // ========================================================================
    // Sticky Header on Scroll
    // ========================================================================
    
    function initStickyHeader() {
        const header = document.querySelector('.site-header');
        
        if (!header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }

    // ========================================================================
    // Smooth Scroll for Anchor Links
    // ========================================================================
    
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#') return;
                
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    const headerOffset = 80;
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

    // ========================================================================
    // Back to Top Button
    // ========================================================================
    
    function initBackToTop() {
        const backToTop = document.createElement('button');
        backToTop.className = 'back-to-top';
        backToTop.setAttribute('aria-label', 'Back to top');
        backToTop.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>';
        document.body.appendChild(backToTop);

        // Add CSS for the button
        const style = document.createElement('style');
        style.textContent = `
            .back-to-top {
                position: fixed;
                bottom: 32px;
                right: 32px;
                width: 48px;
                height: 48px;
                background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
                color: #ffffff;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                visibility: hidden;
                transform: translateY(20px);
                transition: all 0.3s ease;
                z-index: 999;
                box-shadow: var(--shadow-lg);
            }
            
            .back-to-top.visible {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            .back-to-top:hover {
                transform: translateY(-4px);
                box-shadow: var(--shadow-xl);
            }
        `;
        document.head.appendChild(style);

        // Show/hide based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        // Scroll to top on click
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================================================
    // Form Validation Enhancement
    // ========================================================================
    
    function initFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                const requiredFields = form.querySelectorAll('[required]');
                let isValid = true;

                requiredFields.forEach(function(field) {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.classList.add('error');
                        
                        // Remove error class on input
                        field.addEventListener('input', function() {
                            this.classList.remove('error');
                        }, { once: true });
                    }
                });

                if (!isValid) {
                    e.preventDefault();
                }
            });
        });
    }

    // ========================================================================
    // Lazy Loading Images
    // ========================================================================
    
    function initLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(function(img) {
                img.src = img.dataset.src || img.src;
            });
        } else {
            // Fallback for browsers that don't support lazy loading
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
            document.body.appendChild(script);
        }
    }

    // ========================================================================
    // External Links - Open in New Tab
    // ========================================================================
    
    function initExternalLinks() {
        const links = document.querySelectorAll('a[href^="http"]');
        const host = window.location.hostname;

        links.forEach(function(link) {
            if (link.hostname !== host) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    // ========================================================================
    // Initialize All Functions
    // ========================================================================
    
    document.addEventListener('DOMContentLoaded', function() {
        initThemeToggle();
        initMobileMenu();
        initStickyHeader();
        initSmoothScroll();
        initBackToTop();
        initFormValidation();
        initLazyLoading();
        initExternalLinks();
    });

    // ========================================================================
    // Re-initialize on Dynamic Content Load
    // ========================================================================
    
    window.addEventListener('load', function() {
        initExternalLinks();
    });

})();
