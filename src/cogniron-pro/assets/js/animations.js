/**
 * Animations JavaScript - AOS and Custom Animations
 *
 * @package Cogniron_Pro
 */

(function() {
    'use strict';

    // ========================================================================
    // Simple AOS (Animate On Scroll) Implementation
    // ========================================================================
    
    function initAOS() {
        const elements = document.querySelectorAll('[data-aos]');
        
        if (elements.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    
                    // Optional: Unobserve after animation (one-time animation)
                    // observer.unobserve(entry.target);
                } else {
                    // Optional: Remove class when out of view (repeating animation)
                    // entry.target.classList.remove('aos-animate');
                }
            });
        }, observerOptions);

        elements.forEach(function(element) {
            observer.observe(element);
        });
    }

    // ========================================================================
    // Scroll Reveal Animation
    // ========================================================================
    
    function initScrollReveal() {
        const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        
        if (reveals.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        reveals.forEach(function(element) {
            observer.observe(element);
        });
    }

    // ========================================================================
    // Counter Animation (Number Count Up)
    // ========================================================================
    
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = parseInt(element.getAttribute('data-duration')) || 2000;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);
            
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        }
        
        requestAnimationFrame(updateCounter);
    }

    function initCounters() {
        const counters = document.querySelectorAll('[data-count]');
        
        if (counters.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        counters.forEach(function(counter) {
            observer.observe(counter);
        });
    }

    // ========================================================================
    // Parallax Effect
    // ========================================================================
    
    function initParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        if (parallaxElements.length === 0) return;

        function updateParallax() {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(function(element) {
                const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = 'translateY(' + yPos + 'px)';
            });
        }

        let ticking = false;
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        updateParallax();
    }

    // ========================================================================
    // Stagger Animation for Lists
    // ========================================================================
    
    function initStaggerAnimation() {
        const staggerContainers = document.querySelectorAll('[data-stagger]');
        
        staggerContainers.forEach(function(container) {
            const children = container.children;
            const delay = parseInt(container.getAttribute('data-stagger')) || 100;
            
            Array.from(children).forEach(function(child, index) {
                child.style.animationDelay = (index * delay) + 'ms';
                child.classList.add('animate-slide-up');
            });
        });
    }

    // ========================================================================
    // Image Fade In on Load
    // ========================================================================
    
    function initImageFadeIn() {
        const images = document.querySelectorAll('img[data-fade-in]');
        
        images.forEach(function(img) {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', function() {
                    this.classList.add('loaded');
                });
            }
        });
        
        // Add CSS for fade in effect
        const style = document.createElement('style');
        style.textContent = `
            img[data-fade-in] {
                opacity: 0;
                transition: opacity 0.6s ease-in-out;
            }
            
            img[data-fade-in].loaded {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }

    // ========================================================================
    // Typewriter Effect
    // ========================================================================
    
    function typewriterEffect(element) {
        const text = element.getAttribute('data-typewriter');
        const speed = parseInt(element.getAttribute('data-typewriter-speed')) || 50;
        let index = 0;
        
        element.textContent = '';
        
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    function initTypewriter() {
        const typewriterElements = document.querySelectorAll('[data-typewriter]');
        
        if (typewriterElements.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
                    entry.target.classList.add('typed');
                    typewriterEffect(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        typewriterElements.forEach(function(element) {
            observer.observe(element);
        });
    }

    // ========================================================================
    // Progress Bar Animation
    // ========================================================================
    
    function animateProgressBar(element) {
        const progress = parseInt(element.getAttribute('data-progress'));
        const bar = element.querySelector('.progress-bar-fill');
        
        if (!bar) return;
        
        setTimeout(function() {
            bar.style.width = progress + '%';
        }, 100);
    }

    function initProgressBars() {
        const progressBars = document.querySelectorAll('[data-progress]');
        
        if (progressBars.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    animateProgressBar(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        progressBars.forEach(function(progressBar) {
            observer.observe(progressBar);
        });
    }

    // ========================================================================
    // Hover Tilt Effect
    // ========================================================================
    
    function initTiltEffect() {
        const tiltElements = document.querySelectorAll('[data-tilt]');
        
        tiltElements.forEach(function(element) {
            element.addEventListener('mousemove', function(e) {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                element.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.05, 1.05, 1.05)';
            });
            
            element.addEventListener('mouseleave', function() {
                element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
            
            element.style.transition = 'transform 0.3s ease';
        });
    }

    // ========================================================================
    // Ripple Effect on Click
    // ========================================================================
    
    function initRippleEffect() {
        const rippleElements = document.querySelectorAll('[data-ripple]');
        
        rippleElements.forEach(function(element) {
            element.style.position = 'relative';
            element.style.overflow = 'hidden';
            
            element.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = element.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.className = 'ripple-effect';
                
                element.appendChild(ripple);
                
                setTimeout(function() {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Add CSS for ripple effect
        const style = document.createElement('style');
        style.textContent = `
            .ripple-effect {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            }
            
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ========================================================================
    // Initialize All Animations
    // ========================================================================
    
    document.addEventListener('DOMContentLoaded', function() {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!prefersReducedMotion) {
            initAOS();
            initScrollReveal();
            initCounters();
            initParallax();
            initStaggerAnimation();
            initImageFadeIn();
            initTypewriter();
            initProgressBars();
            initTiltEffect();
            initRippleEffect();
        }
    });

    // ========================================================================
    // Refresh Animations on Window Resize
    // ========================================================================
    
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Refresh parallax on resize
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            if (parallaxElements.length > 0) {
                initParallax();
            }
        }, 250);
    });

})();
