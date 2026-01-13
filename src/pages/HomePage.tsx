import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Target, Zap, Shield, CheckCircle2, Sparkles, TrendingUp, Users, Award, FileText, Search, Workflow, BarChart3, Network, ChevronLeft, ChevronRight, MessageSquare, Plus, Minus } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { CTASection } from '../components/CTASection';
import { StatsSection } from '../components/StatsSection';
import { FeatureGrid } from '../components/FeatureGrid';
import { SectionTag } from '../components/SectionTag';
import { Tag } from '../components/Tag';
import { useTheme } from '../contexts/ThemeContext';
import { useGradientShimmer } from '../hooks/useGradientShimmer';
import Slider from 'react-slick';

export function HomePage() {
  const { theme } = useTheme();
  useGradientShimmer();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const services = [
    {
      title: 'QA Solutions',
      description: 'Cogniron delivers a full-spectrum QA framework—PQLM, UX-Assurance, X-FIRST, and Cognitive Assurance—powered by advanced capabilities built for scale, speed, and precision.',
      icon: Target,
      gradient: 'from-blue-500 to-cyan-400',
      link: '/services/qa',
      features: ['4 High-Impact QA Categories', '32+ Specialized Testing Services', 'AI-Enabled Quality Intelligence'],
    },
    {
      title: 'CRM Solutions',
      description: 'A unified CRM ecosystem designed to enhance interactions, accelerate revenue cycles, and power decisions through deep intelligence.',
      icon: Users,
      gradient: 'from-purple-500 to-pink-500',
      link: '/services/crm',
      features: ['Customer Engagement', 'Sales Automation', 'Analytics & Insights'],
    },
  ];

  const stats = [
    { value: '7', suffix: '+', label: 'Years of Excellence' },
    { value: '50', suffix: '+', label: 'Enterprise Clients' },
    { value: '500', suffix: '+', label: 'Projects Delivered' },
    { value: '90', suffix: '%+', label: 'Client Retention' },
  ];

  const whyChoose = [
    {
      icon: Brain,
      title: 'AI-First Quality Engineering',
      description: 'AI-driven testing intelligence that predicts defects earlier, reduces manual effort, and strengthens release confidence.',
    },
    {
      icon: Shield,
      title: 'Security You Can Trust',
      description: 'Enterprise-grade security with strict compliance frameworks designed for regulated and high-risk industries.',
    },
    {
      icon: TrendingUp,
      title: 'Measurable Impact',
      description: 'Clients consistently see significant reductions in testing effort and accelerated release velocity across complex programs.',
    },
    {
      icon: Users,
      title: 'Specialized Expertise',
      description: 'A senior team of QA strategists, automation architects, and domain specialists delivering real-world transformation.',
    },
    {
      icon: Zap,
      title: 'Built for Agile + DevOps',
      description: 'Native integration with modern CI/CD toolchains for continuous, scalable, pipeline-aligned quality.',
    },
    {
      icon: Award,
      title: 'Recognized Performance',
      description: 'Trusted by global enterprises for consistent delivery excellence and intelligent quality transformation.',
    },
  ];

  const faqs = [
    {
      question: 'What is your typical engagement timeline?',
      answer: 'Most engagements start within 2 weeks. Implementation timelines vary from 4-12 weeks depending on scope.',
    },
    {
      question: 'Do you offer flexible pricing models?',
      answer: 'Yes, we offer project-based, retainer, and staff augmentation models to fit your needs and budget.',
    },
    {
      question: 'Can you integrate with our existing tools?',
      answer: 'Absolutely. We integrate with popular tools like Jira, Jenkins, Selenium, and custom platforms.',
    },
    {
      question: 'Do you provide training for our team?',
      answer: 'Yes, comprehensive training and knowledge transfer are included in all our engagements.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Trusted By Section Component with Carousel
  const TrustedBySection = ({ theme }: { theme: string }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    
    const testimonials = [
      {
        name: 'Lisa Anderson',
        role: 'CEO',
        company: 'Global Technology Enterprise',
        image: 'https://images.unsplash.com/photo-1758518729459-235dcaadc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc2NTMxMTU2OXww&ixlib=rb-4.1.0&q=80&w=1080',
        quote: 'Innovation meets reliability in quality assurance. Their AI-first approach to testing has given us a competitive edge in delivering flawless customer experiences.',
      },
      {
        name: 'Director of Product',
        role: 'Director of Product',
        company: 'Leading SaaS Enterprise',
        image: 'https://images.unsplash.com/photo-1758876021212-a87517fc8954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwbWFuYWdlciUyMHRlY2glMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUzNzE5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        quote: 'Qualiron\'s AI-assisted QE model scaled with our growth. Their automation-first framework is now a core part of our delivery pipeline.',
      },
      {
        name: 'Michael Chen',
        role: 'CTO',
        company: 'High-Growth Digital Platform',
        image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUzNzQ0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        quote: 'Predictive quality assurance that delivers real results. The cognitive testing capabilities have revolutionized how we approach software quality across our entire organization.',
      },
    ];

    // Auto-scroll functionality - advances every 7 seconds
    React.useEffect(() => {
      if (isPaused || isTransitioning) return;

      const autoScrollInterval = setInterval(() => {
        const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
        handleCardClick(nextIndex);
      }, 7000);

      return () => clearInterval(autoScrollInterval);
    }, [activeIndex, isPaused, isTransitioning]);

    // Keyboard navigation
    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
          const prevIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
          handleManualNavigation(prevIndex);
        } else if (e.key === 'ArrowRight') {
          const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
          handleManualNavigation(nextIndex);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex]);

    const handleCardClick = (index: number) => {
      if (index !== activeIndex && !isTransitioning) {
        setIsTransitioning(true);
        
        // Determine slide direction
        if (index > activeIndex || (activeIndex === testimonials.length - 1 && index === 0)) {
          setSlideDirection('left');
        } else {
          setSlideDirection('right');
        }
        
        setActiveIndex(index);
        
        // Reset transition state after animation completes
        setTimeout(() => {
          setIsTransitioning(false);
          setSlideDirection(null);
        }, 400);
      }
    };

    const handleManualNavigation = (index: number) => {
      setIsPaused(true);
      handleCardClick(index);
      
      // Resume auto-scroll after 3 seconds of inactivity
      setTimeout(() => {
        setIsPaused(false);
      }, 3000);
    };

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isLeftSwipe) {
        const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
        handleManualNavigation(nextIndex);
      }
      
      if (isRightSwipe) {
        const prevIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
        handleManualNavigation(prevIndex);
      }
    };

    const getVisibleTestimonials = () => {
      const leftIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
      const rightIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
      
      return {
        left: testimonials[leftIndex],
        center: testimonials[activeIndex],
        right: testimonials[rightIndex],
        leftIndex,
        rightIndex,
      };
    };

    const visible = getVisibleTestimonials();

    return (
      <section
        className="relative"
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem',
          backgroundColor: theme === 'dark' ? 'var(--bg-section)' : '#ffffff',
        }}
        aria-label="Client testimonials carousel"
        role="region"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Screen reader announcement for active testimonial */}
          <div 
            className="sr-only" 
            role="status" 
            aria-live="polite" 
            aria-atomic="true"
          >
            Showing testimonial {activeIndex + 1} of {testimonials.length}: {visible.center.name}, {visible.center.role}
          </div>

          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: '3rem', position: 'relative' }}>
            <div className="mb-4">
              <SectionTag text="Customer Success Stories" icon={Users} />
            </div>
            <h2
              className="text-4xl md:text-5xl"
              style={{
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              Where Innovation Meets <span className="gradient-text">Impact</span>
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{
                color: 'var(--text-secondary)',
              }}
            >
              Partnering with leading organizations to accelerate quality maturity and unlock scalable engineering outcomes.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative" style={{ paddingBottom: '4rem' }}>
            {/* Left Arrow */}
            <button
              onClick={() => handleManualNavigation(visible.leftIndex)}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-full transition-all duration-300"
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--bg-card)',
                border: `1px solid var(--border-color)`,
                boxShadow: 'var(--shadow-md)',
                color: 'var(--text-primary)',
                transform: 'translateY(-50%) translateX(-50%)',
              }}
              aria-label="Previous testimonial"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateY(-50%) translateX(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                e.currentTarget.style.transform = 'translateY(-50%) translateX(-50%) scale(1)';
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => handleManualNavigation(visible.rightIndex)}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-full transition-all duration-300"
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--bg-card)',
                border: `1px solid var(--border-color)`,
                boxShadow: 'var(--shadow-md)',
                color: 'var(--text-primary)',
                transform: 'translateY(-50%) translateX(50%)',
              }}
              aria-label="Next testimonial"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateY(-50%) translateX(50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                e.currentTarget.style.transform = 'translateY(-50%) translateX(50%) scale(1)';
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* 3-Card Horizontal Testimonial Layout */}
            <div 
              className="px-4 sm:px-6 md:px-8 lg:px-12"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4" style={{ minHeight: '380px' }}>
                {/* Left Card - 15% width, scaled down, blurred - Hidden on mobile and tablet */}
                <div
                  onClick={() => handleManualNavigation(visible.leftIndex)}
                  className="relative rounded-2xl backdrop-blur-sm cursor-pointer hidden lg:flex"
                  style={{
                    flex: '0 0 15%',
                    background: theme === 'dark'
                      ? 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.04) 0%, rgba(6, 182, 212, 0.03) 40%, rgba(15, 23, 42, 0.95) 100%)'
                      : 'radial-gradient(ellipse at center, rgba(219, 234, 254, 0.4) 0%, rgba(191, 219, 254, 0.25) 40%, rgba(255, 255, 255, 0.95) 100%)',
                    border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(37, 99, 235, 0.12)'}`,
                    boxShadow: 'var(--shadow-sm)',
                    padding: '1.75rem 1rem',
                    minHeight: '320px',
                    transform: hoveredCard === visible.leftIndex ? 'scale(0.92)' : 'scale(0.85)',
                    opacity: isTransitioning 
                      ? 0.4
                      : hoveredCard === visible.leftIndex ? 0.9 : 0.6,
                    filter: hoveredCard === visible.leftIndex ? 'blur(0px)' : 'blur(1px)',
                    overflow: 'hidden',
                    transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={() => {
                    setHoveredCard(visible.leftIndex);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                    setIsPaused(false);
                  }}
                >
                  <div className="flex flex-col items-start h-full w-full" style={{ transition: 'opacity 300ms ease-in-out', opacity: isTransitioning ? 0 : 1 }}>
                    {/* User Image */}
                    <div 
                      className="rounded-xl mb-3 overflow-hidden w-20 h-20" 
                      style={{ 
                        backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.08)',
                        transition: 'opacity 300ms ease-in-out',
                        flexShrink: 0,
                        border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.6)',
                        boxShadow: theme === 'dark' 
                          ? '0 4px 16px rgba(59, 130, 246, 0.3), 0 2px 8px rgba(6, 182, 212, 0.2)' 
                          : '0 4px 16px rgba(37, 99, 235, 0.08), 0 2px 8px rgba(59, 130, 246, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                      }}
                    >
                      <img 
                        src={visible.left.image} 
                        alt={`${visible.left.name}, ${visible.left.role}`}
                        loading="lazy"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          aspectRatio: '1 / 1',
                        }} 
                      />
                    </div>
                    
                    {/* Name & Role */}
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem', fontSize: '0.9rem', textAlign: 'left' }}>
                      {visible.left.name}
                    </h4>
                    <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                      {visible.left.role}
                    </p>
                  </div>
                </div>

                {/* Center Card - Responsive: full width on mobile, 85% on tablet, 70% on desktop */}
                <div
                  className="relative rounded-2xl backdrop-blur-sm testimonial-center-card"
                  style={{
                    flex: '1 1 auto',
                    maxWidth: '100%',
                    background: theme === 'dark'
                      ? 'radial-gradient(ellipse 120% 100% at 30% 50%, rgba(59, 130, 246, 0.12) 0%, rgba(6, 182, 212, 0.08) 35%, rgba(168, 85, 247, 0.06) 65%, rgba(15, 23, 42, 0.98) 100%)'
                      : 'radial-gradient(ellipse 120% 100% at 30% 50%, rgba(219, 234, 254, 0.8) 0%, rgba(191, 219, 254, 0.5) 30%, rgba(233, 213, 255, 0.4) 60%, rgba(255, 255, 255, 0.95) 100%)',
                    border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.25)' : 'rgba(37, 99, 235, 0.2)'}`,
                    boxShadow: hoveredCard === activeIndex 
                      ? theme === 'dark'
                        ? '0 20px 60px rgba(59, 130, 246, 0.25), 0 8px 24px rgba(6, 182, 212, 0.15)'
                        : '0 20px 60px rgba(59, 130, 246, 0.2), 0 8px 24px rgba(6, 182, 212, 0.12)'
                      : theme === 'dark'
                        ? '0 12px 40px rgba(59, 130, 246, 0.15), 0 4px 16px rgba(6, 182, 212, 0.1)'
                        : '0 12px 40px rgba(59, 130, 246, 0.12), 0 4px 16px rgba(6, 182, 212, 0.08)',
                    padding: '1.5rem',
                    minHeight: '320px',
                    transform: isTransitioning
                      ? 'scale(0.97)'
                      : hoveredCard === activeIndex 
                        ? 'translateY(-2px) scale(1)' 
                        : 'scale(1)',
                    transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                    filter: hoveredCard === activeIndex 
                      ? 'brightness(1.05)' 
                      : 'brightness(1)',
                  }}
                  onMouseEnter={() => {
                    if (!isTransitioning) {
                      setHoveredCard(activeIndex);
                      setIsPaused(true);
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                    setIsPaused(false);
                  }}
                >
                  {/* Abstract Geometric Accents on Hover */}
                  {hoveredCard === activeIndex && (
                    <>
                      <div
                        className="absolute top-4 right-4"
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #3B82F6, #22D3EE)',
                          opacity: 0.6,
                          animation: 'float 2s ease-in-out infinite',
                          transition: 'opacity 200ms ease-in-out',
                        }}
                      />
                      <div
                        className="absolute bottom-4 left-4"
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #A855F7, #3B82F6)',
                          opacity: 0.5,
                          animation: 'float 2.5s ease-in-out infinite',
                          transition: 'opacity 200ms ease-in-out',
                        }}
                      />
                      <div
                        className="absolute top-8 left-6"
                        style={{
                          width: '20px',
                          height: '1px',
                          background: 'linear-gradient(90deg, #06B6D4, transparent)',
                          opacity: 0.4,
                          transition: 'opacity 200ms ease-in-out',
                        }}
                      />
                    </>
                  )}

                  <div 
                    className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
                    style={{
                      transition: 'opacity 300ms ease-in-out, transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                      opacity: isTransitioning ? 0 : 1,
                      transform: isTransitioning 
                        ? slideDirection === 'left' ? 'translateX(-20px)' : 'translateX(20px)'
                        : 'translateX(0)',
                    }}
                  >
                    {/* Left Side - User Image (30% width on desktop/tablet, vertical rectangle) */}
                    <div 
                      className="rounded-2xl overflow-hidden flex-shrink-0 mx-auto sm:mx-0 w-full sm:w-[30%]" 
                      style={{ 
                        backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.08)',
                        border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.6)',
                        boxShadow: theme === 'dark' 
                          ? '0 4px 16px rgba(59, 130, 246, 0.3), 0 2px 8px rgba(6, 182, 212, 0.2)' 
                          : '0 4px 16px rgba(37, 99, 235, 0.08), 0 2px 8px rgba(59, 130, 246, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                        maxWidth: '280px', // Desktop: ~30% of card
                      }}
                    >
                      <img 
                        src={visible.center.image} 
                        alt={`${visible.center.name}, ${visible.center.role}`}
                        loading="eager"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          transition: 'opacity 300ms ease-in-out',
                          aspectRatio: '3 / 4', // Vertical rectangle: 3:4 aspect ratio
                        }} 
                      />
                    </div>

                    {/* Right Side - Text Content (70% width on desktop/tablet) */}
                    <div className="flex-1 text-left" style={{ width: '100%', minWidth: 0 }}>
                      <h3 className="text-xl sm:text-2xl" style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        {visible.center.name}
                      </h3>
                      <p className="mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
                        {visible.center.role}
                      </p>
                      <p 
                        className="leading-relaxed text-sm sm:text-base" 
                        style={{ 
                          color: 'var(--text-secondary)', 
                          lineHeight: '1.8',
                        }}
                      >
                        "{visible.center.quote}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Card - 15% width, scaled down, blurred - Hidden on mobile and tablet */}
                <div
                  onClick={() => handleManualNavigation(visible.rightIndex)}
                  className="relative rounded-2xl backdrop-blur-sm cursor-pointer hidden lg:flex"
                  style={{
                    flex: '0 0 15%',
                    background: theme === 'dark'
                      ? 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.04) 0%, rgba(6, 182, 212, 0.03) 40%, rgba(15, 23, 42, 0.95) 100%)'
                      : 'radial-gradient(ellipse at center, rgba(219, 234, 254, 0.4) 0%, rgba(191, 219, 254, 0.25) 40%, rgba(255, 255, 255, 0.95) 100%)',
                    border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(37, 99, 235, 0.12)'}`,
                    boxShadow: 'var(--shadow-sm)',
                    padding: '1.75rem 1rem',
                    minHeight: '320px',
                    transform: hoveredCard === visible.rightIndex ? 'scale(0.92)' : 'scale(0.85)',
                    opacity: isTransitioning 
                      ? 0.4
                      : hoveredCard === visible.rightIndex ? 0.9 : 0.6,
                    filter: hoveredCard === visible.rightIndex ? 'blur(0px)' : 'blur(1px)',
                    overflow: 'hidden',
                    transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={() => {
                    setHoveredCard(visible.rightIndex);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                    setIsPaused(false);
                  }}
                >
                  <div className="flex flex-col items-start h-full w-full" style={{ transition: 'opacity 300ms ease-in-out', opacity: isTransitioning ? 0 : 1 }}>
                    {/* User Image */}
                    <div 
                      className="rounded-xl mb-3 overflow-hidden w-20 h-20" 
                      style={{ 
                        backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.08)',
                        transition: 'opacity 300ms ease-in-out',
                        flexShrink: 0,
                        border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.6)',
                        boxShadow: theme === 'dark' 
                          ? '0 4px 16px rgba(59, 130, 246, 0.3), 0 2px 8px rgba(6, 182, 212, 0.2)' 
                          : '0 4px 16px rgba(37, 99, 235, 0.08), 0 2px 8px rgba(59, 130, 246, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                      }}
                    >
                      <img 
                        src={visible.right.image} 
                        alt={`${visible.right.name}, ${visible.right.role}`}
                        loading="lazy"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          aspectRatio: '1 / 1',
                        }} 
                      />
                    </div>
                    
                    {/* Name & Role */}
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem', fontSize: '0.9rem', textAlign: 'left' }}>
                      {visible.right.name}
                    </h4>
                    <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                      {visible.right.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualNavigation(index)}
                  className="transition-all duration-300 relative overflow-hidden"
                  style={{
                    width: activeIndex === index ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: activeIndex === index 
                      ? 'var(--accent-primary)' 
                      : theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    opacity: activeIndex === index ? 1 : 0.5,
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={activeIndex === index ? 'true' : 'false'}
                >
                  {/* Progress indicator for active dot */}
                  {activeIndex === index && !isPaused && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '0%',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        animation: 'progressBar 7s linear',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Keyframes for card entry and floating animations */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.1);
            }
          }

          @keyframes progressBar {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }

          /* Responsive testimonial card sizing */
          /* Mobile: Full width with safe padding */
          @media (max-width: 767px) {
            .testimonial-center-card {
              flex: 1 1 100% !important;
              max-width: 100% !important;
              padding: 1.5rem !important;
            }
          }
          
          /* Tablet: 85% width, one card at a time */
          @media (min-width: 768px) and (max-width: 1023px) {
            .testimonial-center-card {
              flex: 0 0 85% !important;
              max-width: 85% !important;
              padding: 2rem !important;
            }
          }
          
          /* Desktop: 70% width with side cards visible */
          @media (min-width: 1024px) {
            .testimonial-center-card {
              flex: 0 0 70% !important;
              max-width: 70% !important;
              padding: 2.5rem !important;
            }
          }
        `}</style>
      </section>
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ paddingTop: 'calc(var(--header-h) + var(--hero-top-gap))' }}
      >
        {/* Animated Background */}
        <div
          className="absolute inset-0 min-h-screen"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, #020617 0%, #0F172A 50%, #1E293B 100%)'
              : '#FAFBFF',
          }}
        >
          {/* Grid Pattern - adjusted opacity for light theme */}
          <div 
            className="absolute inset-0 neural-pattern"
            style={{
              opacity: theme === 'dark' ? 0.2 : 0.12
            }}
          ></div>
          
          {/* Light Theme: Localized central gradient "spotlight" */}
          {theme === 'light' && (
            <div
              className="absolute left-0 right-0"
              style={{
                top: '25%',
                height: '50%',
                background: 'radial-gradient(ellipse 70% 90% at 50% 50%, rgba(219, 234, 254, 0.6) 0%, rgba(191, 219, 254, 0.35) 30%, rgba(250, 251, 255, 0) 65%)',
                pointerEvents: 'none',
              }}
            ></div>
          )}
          
          {/* Dark Theme: Gradient Orbs */}
          {theme === 'dark' && (
            <>
              <div
                className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                style={{ backgroundColor: 'var(--neural-orb)' }}
              ></div>
              <div
                className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
                style={{ backgroundColor: 'var(--neural-orb)' }}
              ></div>
            </>
          )}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          {/* Badge with Moving Border */}
          <div className="mb-12">
            <Tag icon={Sparkles} size="md" variant="default">
              AI-powered Quality Systems
            </Tag>
          </div>

          {/* Heading */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight" 
            style={{ 
              color: theme === 'dark' ? 'var(--text-primary)' : '#0F172A'
            }}
          >
            Modern QE Enabling You
            <br />
            <span 
              className="gradient-text"
              style={{
                backgroundImage: theme === 'dark'
                  ? 'linear-gradient(135deg, #3B82F6 0%, #22D3EE 50%, #A855F7 100%)'
                  : 'linear-gradient(135deg, #1D4ED8 0%, #0EA5E9 25%, #06B6D4 50%, #8B5CF6 75%, #A855F7 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '600',
              }}
            >
              M.E.G.A
            </span>
          </h1>

          {/* Subheading */}
          <p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto" 
            style={{ 
              color: theme === 'dark' ? 'var(--text-secondary)' : '#475569'
            }}
          >
            From requirement clarity to production readiness, our solutions combine AI-driven automation, cognitive intelligence, and deep engineering expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 group"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                color: '#FFFFFF',
                boxShadow: theme === 'dark'
                  ? 'var(--shadow-accent)'
                  : '0 10px 30px rgba(37, 99, 235, 0.25), 0 4px 12px rgba(6, 182, 212, 0.2)',
              }}
            >
              <span className="mr-2">Speak to our Specialist →</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" style={{ display: 'none' }} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                border: `2px solid ${theme === 'dark' ? 'var(--border-color)' : 'rgba(37, 99, 235, 0.25)'}`,
                color: theme === 'dark' ? 'var(--text-primary)' : '#2563EB',
                boxShadow: theme === 'dark'
                  ? 'var(--shadow-sm)'
                  : '0 4px 12px rgba(37, 99, 235, 0.12)',
              }}
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pointer-events-none">
          <div
            className="w-6 h-10 rounded-full flex items-start justify-center p-2"
            style={{ border: `2px solid var(--border-color)` }}
          >
            <div className="w-1.5 h-3 rounded-full animate-bounce" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Gretah AI Section */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: 'var(--spacing-section-y)',
          paddingBottom: 'var(--spacing-section-y)',
          backgroundColor: theme === 'dark' ? '#0F172A' : '#FFFFFF',
        }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30 neural-pattern"></div>
        
        {/* Gradient Orbs */}
        <div
          className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--neural-orb)' }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--neural-orb)', opacity: 0.8 }}
        ></div>

        <div 
          className="relative mx-auto" 
          style={{ 
            maxWidth: 'var(--content-max-width)',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }}
        >
          {/* Section Header */}
          <div 
            className="text-center" 
            style={{ 
              marginBottom: 'var(--spacing-content-gap)',
            }}
          >
            <div className="mb-4">
              <SectionTag text="Intelligent Automation" icon={Brain} />
            </div>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl" 
              style={{ 
                color: 'var(--text-primary)', 
                marginBottom: '1.5rem',
                lineHeight: '1.1',
              }}
            >
              Meet{' '}
              <span className="gradient-text">
                Gretah AI
              </span>
            </h2>
            
            <p 
              className="text-lg md:text-xl mx-auto" 
              style={{ 
                color: 'var(--text-secondary)', 
                maxWidth: 'var(--content-text-width-lg)',
                lineHeight: '1.6',
              }}
            >
              Our AI-driven automation engine that accelerates test creation, elevates accuracy, and powers cognitive, self-optimizing quality workflows across the engineering lifecycle.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div 
            className="grid grid-cols-1 lg:grid-cols-2" 
            style={{ 
              gap: 'var(--spacing-grid-gap-lg)',
              alignItems: 'center',
            }}
          >
            {/* Left Column - Visual */}
            <div className="relative" style={{ width: '100%' }}>
              {/* Stronger Gradient Background Glow - matching Figma design */}
              <div
                className="absolute inset-0 rounded-2xl blur-3xl"
                style={{
                  background: theme === 'dark'
                    ? 'radial-gradient(ellipse at center, rgba(0, 194, 199, 0.25) 0%, rgba(59, 130, 246, 0.15) 40%, transparent 70%)'
                    : 'radial-gradient(ellipse at center, rgba(0, 194, 199, 0.3) 0%, rgba(59, 130, 246, 0.2) 40%, rgba(6, 182, 212, 0.08) 60%, transparent 80%)',
                  opacity: theme === 'dark' ? 0.5 : 0.6,
                  transform: 'scale(1.15)',
                  zIndex: 0,
                }}
              ></div>
              
              <div
                className="relative rounded-2xl"
                style={{
                  padding: 'var(--spacing-card-padding-lg)',
                  background: theme === 'dark'
                    ? 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.12) 0%, rgba(15, 23, 42, 0.96) 55%, rgba(15, 23, 42, 1) 100%)'
                    : 'radial-gradient(ellipse at center, rgba(139, 213, 255, 0.25) 0%, rgba(255, 255, 255, 0.9) 45%, rgba(255, 255, 255, 1) 100%)',
                  border: `1px solid var(--border-color)`,
                  boxShadow: theme === 'dark'
                    ? '0 20px 60px rgba(59, 130, 246, 0.2), var(--shadow-lg)'
                    : '0 20px 60px rgba(59, 130, 246, 0.18), 0 10px 30px rgba(0, 194, 199, 0.15), var(--shadow-lg)',
                  zIndex: 1,
                }}
              >
                {/* AI Visual Representation */}
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Central Brain Icon */}
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl flex items-center justify-center animate-pulse"
                    style={{
                      background: 'linear-gradient(135deg, #3B82F6 0%, #22D3EE 100%)',
                      boxShadow: '0 10px 40px rgba(59, 130, 246, 0.5)',
                    }}
                  >
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Orbiting Elements */}
                  <div className="absolute inset-0">
                    {/* Neural Network Lines */}
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                      <circle cx="200" cy="200" r="120" fill="none" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3" />
                      <circle cx="200" cy="200" r="160" fill="none" stroke="url(#gradient2)" strokeWidth="1" opacity="0.2" />
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#22d3ee" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  {/* Corner Nodes */}
                  <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/50">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/50">
                    <Workflow className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 'var(--spacing-element-gap)',
                width: '100%',
              }}
            >
              {/* Key Highlights */}
              <div 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 'var(--spacing-element-gap-sm)',
                }}
              >
                {[
                  {
                    icon: FileText,
                    title: 'AI-Generated Test Scenarios',
                    description: 'Creates complete, multi-layered test cases directly from requirements and user stories—instantly, consistently, and with full coverage.'
                  },
                  {
                    icon: Search,
                    title: 'Intelligent Defect Detection',
                    description: 'Spots hidden defects and anomalies using advanced ML pattern recognition and behavioral analysis.'
                  },
                  {
                    icon: BarChart3,
                    title: 'Predictive Quality Intelligence',
                    description: 'Anticipates risks before they impact delivery with real-time forecasts, quality trend analysis, and early warning signals.'
                  },
                  {
                    icon: Network,
                    title: 'Enterprise-Scale Integrations',
                    description: 'Plugs seamlessly into your DevOps ecosystem with CI/CD compatibility, toolchain interoperability, and zero-friction adoption.'
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group flex rounded-xl transition-all duration-300 hover:shadow-md"
                    style={{
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1.25rem',
                      backgroundColor: 'var(--bg-card)',
                      border: `1px solid var(--border-color)`,
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <div
                      className="rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        width: '3rem',
                        height: '3rem',
                        minWidth: '3rem',
                        minHeight: '3rem',
                        flexShrink: 0,
                        background: theme === 'dark'
                          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                          : 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.1))',
                      }}
                    >
                      <feature.icon className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 
                        style={{ 
                          color: 'var(--text-primary)', 
                          marginTop: 0,
                          marginBottom: '0.375rem',
                          lineHeight: '1.2',
                          fontWeight: '600',
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        className="text-sm" 
                        style={{ 
                          color: 'var(--text-secondary)',
                          lineHeight: '1.6',
                          margin: 0,
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div style={{ paddingTop: 'var(--spacing-element-gap)' }}>
                <Link
                  to="/GretahAI"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 group"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                    color: '#FFFFFF',
                    boxShadow: 'var(--shadow-accent)',
                  }}
                >
                  <span className="mr-2">Explore Gretah AI →</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" style={{ display: 'none' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className="relative" 
        style={{ 
          paddingTop: 'var(--spacing-section-y)', 
          paddingBottom: 'var(--spacing-section-y)',
          background: theme === 'dark'
            ? 'radial-gradient(ellipse 100% 85% at 50% 50%, rgba(15, 23, 42, 1) 0%, rgba(3, 7, 18, 1) 100%)'
            : 'linear-gradient(180deg, #FAFCFE 0%, #F4F8FC 50%, #FAFCFE 100%)',
        }}
      >
        {/* Subtle grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '180px 180px',
            opacity: 0.012,
          }}
        />

        {/* Geometric pattern - soft grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: theme === 'dark'
              ? 'linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(0deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)'
              : 'linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px), linear-gradient(0deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            opacity: 0.5,
          }}
        />

        {/* Content Container */}
        <div className="relative mx-auto px-4 sm:px-6 lg:px-12" style={{ maxWidth: 'var(--content-max-width)' }}>
          {/* Section Header with Enhanced Readability */}
          <div 
            className="relative text-center" 
            style={{ marginBottom: 'var(--spacing-content-gap)' }}
          >
            {/* Contrast boost backdrop behind heading */}
            <div
              className="absolute inset-x-0 top-0 h-full transform -translate-y-8 pointer-events-none"
              style={{
                background: theme === 'dark'
                  ? 'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.4) 50%, transparent 85%)'
                  : 'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 85%)',
                filter: 'blur(30px)',
              }}
            />

            <div className="relative mb-4">
              <SectionTag text="Comprehensive QA Suite" icon={Target} />
            </div>

            <h2 className="relative text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
              Solutions That <span className="gradient-text font-semibold text-[48px]">Transform Outcomes</span>
            </h2>
            <p className="relative text-xl mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: 'var(--content-text-width)' }}>
              Cogniron's capabilities blend AI, engineering insight, and domain expertise to automate, predict, and elevate quality across the software lifecycle.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--spacing-grid-gap)', marginBottom: 'var(--spacing-grid-gap)' }}>
            {services.map((service) => (
              <ServiceCard key={service.link} {...service} />
            ))}
          </div>
        </div>

        {/* Animation Keyframes */}
        <style>{`
          /* Aurora Rotation Animations - Slow, Smooth */
          @keyframes auroraRotate1 {
            0%, 100% {
              transform: translate(-50%, -50%) rotate(0deg) scale(1);
            }
            25% {
              transform: translate(-50%, -50%) rotate(10deg) scale(1.04) translateX(22px);
            }
            50% {
              transform: translate(-50%, -50%) rotate(-6deg) scale(1.07) translateY(-18px);
            }
            75% {
              transform: translate(-50%, -50%) rotate(14deg) scale(1.05) translateX(-20px);
            }
          }

          @keyframes auroraRotate2 {
            0%, 100% {
              transform: translate(-50%, -50%) rotate(0deg) scale(1);
            }
            30% {
              transform: translate(-50%, -50%) rotate(-12deg) scale(1.06) translateY(28px);
            }
            60% {
              transform: translate(-50%, -50%) rotate(9deg) scale(1.04) translateX(24px);
            }
            85% {
              transform: translate(-50%, -50%) rotate(-7deg) scale(1.08) translateY(-14px);
            }
          }

          /* Gradient shift animation for Quality Solutions text */
          @keyframes gradientShift {
            0%, 100% {
              filter: brightness(1) saturate(1);
            }
            50% {
              filter: brightness(1.15) saturate(1.2);
            }
          }

          /* Subtle float animation for Quality Solutions text */
          @keyframes subtleFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-2px);
            }
          }

          /* Reduce motion for users who prefer it */
          @media (prefers-reduced-motion: reduce) {
            .aurora-layer,
            [style*="animation"] {
              animation: none !important;
            }
          }
        `}</style>
      </section>

      {/* Why Choose Section */}
      <section
        className="relative overflow-hidden"
        style={{ 
          paddingTop: 'var(--spacing-section-y)',
          paddingBottom: 'var(--spacing-section-y)',
          background: theme === 'dark' 
            ? '#0F172A' 
            : 'linear-gradient(180deg, #FFFFFF 0%, #F7FBFF 50%, #FFFFFF 100%)'
        }}
      >
        {/* Background Elements - Light Mode Only */}
        {theme === 'light' && (
          <>
            {/* Subtle Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(0, 84, 166, 0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(0, 84, 166, 0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            ></div>
            
            {/* Gradient Orbs */}
            <div
              className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(0, 194, 199, 0.15) 0%, transparent 70%)' }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(0, 84, 166, 0.12) 0%, transparent 70%)' }}
            ></div>
          </>
        )}

        <div className="relative mx-auto px-4 sm:px-6 lg:px-12" style={{ maxWidth: 'var(--content-max-width)' }}>
          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: '4.5rem' }}>
            {/* Label Badge */}
            <div className="mb-4">
              <SectionTag text="The Cogniron Difference" icon={Award} />
            </div>

            <h2 
              className="text-4xl md:text-5xl" 
              style={{ 
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}
            >
              Why Choose <span className="gradient-text">Cogniron</span>
            </h2>
            <p 
              className="text-xl mx-auto" 
              style={{ 
                color: 'var(--text-secondary)', 
                maxWidth: 'var(--content-text-width)',
                lineHeight: '1.7',
              }}
            >
              Quality engineering built on intelligence, precision, and proven delivery excellence.
            </p>
          </div>

          <FeatureGrid features={whyChoose} columns={3} />
        </div>
      </section>

      {/* Process Section */}
      <section 
        className="relative" 
        style={{ 
          paddingTop: 'var(--spacing-section-y)', 
          paddingBottom: 'var(--spacing-section-y)',
          backgroundColor: theme === 'dark' ? 'var(--bg-secondary)' : '#E2F2FF'
        }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-12" style={{ maxWidth: 'var(--content-max-width)' }}>
          <div className="text-center" style={{ marginBottom: 'var(--spacing-content-gap)' }}>
            <div className="mb-4">
              <SectionTag text="Our QE Lifecycle" icon={Workflow} />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
              A Continuous Model for <span className="gradient-text">Intelligent Quality</span>
            </h2>
            <p className="text-xl mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: 'var(--content-text-width)' }}>
              A systematic approach to quality that ensures consistent, measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: 'var(--spacing-grid-gap)' }}>
            {[
              { number: '01', title: 'Discover', description: 'Analyse requirements, current gaps, and quality maturity to establish a clear baseline.' },
              { number: '02', title: 'Plan', description: 'Build a custom quality blueprint aligned with release velocity, risk tolerance, and business priorities.' },
              { number: '03', title: 'Execute', description: 'Run full-stack testing with continuous intelligence, automation, and real-time optimization.' },
              { number: '04', title: 'Improve', description: 'Refine, scale, and adapt quality practices using performance insights and long-term delivery trends.' },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div 
                  className="text-7xl mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #1D4ED8 0%, #0EA5E9 25%, #06B6D4 50%, #8B5CF6 75%, #A855F7 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: 0.5,
                  }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders - Carousel Section */}
      <TrustedBySection theme={theme} />

      {/* Quick Answers - FAQ Section */}
      <section className="relative py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
              Quick Answers
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Common questions answered. Need more? Just ask.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              
              return (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-200 group"
                    style={{
                      backgroundColor: isOpen 
                        ? (theme === 'dark' ? 'rgba(59, 130, 246, 0.05)' : 'rgba(37, 99, 235, 0.03)')
                        : 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!isOpen) {
                        e.currentTarget.style.backgroundColor = theme === 'dark' 
                          ? 'rgba(255, 255, 255, 0.02)' 
                          : 'rgba(0, 0, 0, 0.02)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isOpen) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <MessageSquare className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                      <h3 className="text-lg" style={{ color: 'var(--text-primary)' }}>{faq.question}</h3>
                    </div>
                    <div
                      className="ml-4 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        backgroundColor: theme === 'dark' 
                          ? 'rgba(59, 130, 246, 0.1)' 
                          : 'rgba(37, 99, 235, 0.08)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                      ) : (
                        <Plus className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    style={{
                      maxHeight: isOpen ? '200px' : '0',
                      opacity: isOpen ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease-in-out',
                    }}
                  >
                    <div
                      className="px-6 py-4"
                      style={{
                        borderTop: isOpen ? `1px solid var(--border-color)` : 'none',
                      }}
                    >
                      <p className="pl-8" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Make Assurance a Competitive Advantage"
        description="Engage with a partner that brings deep technical expertise, AI-driven intelligence, and proven frameworks to elevate your product quality and delivery speed."
        primaryButtonText="Book a Consultation →"
        primaryButtonLink="/contact"
        secondaryButtonText="View Case Studies"
        secondaryButtonLink="/case-studies"
      />
    </div>
  );
}