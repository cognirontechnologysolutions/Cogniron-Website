import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Sparkles, Zap, Brain, ArrowRight, CheckCircle2, Shield, Users } from 'lucide-react';
import { PageContainer } from '../../components/PageContainer';
import { SectionTag } from '../../components/SectionTag';
import { useTheme } from '../../contexts/ThemeContext';
import { useGradientShimmer } from '../../hooks/useGradientShimmer';

export function QAServicesPage() {
  const { theme } = useTheme();
  useGradientShimmer();
  
  const qaCategories = [
    {
      icon: Target,
      title: 'PQLM',
      subtitle: 'Product Quality Lifecycle Management',
      description: 'A unified, end-to-end quality framework spanning requirement validation, functional and integration testing, compatibility checks, UAT, TestOps, governance, and production assurance.',
      gradient: 'from-blue-500 to-cyan-400',
      link: '/services/pqlm',
      services: ['11 Specialized Sub-Services', 'Complete Lifecycle Coverage', 'Native DevOps Alignment']
    },
    {
      icon: Sparkles,
      title: 'UX-Assurance',
      subtitle: 'User Experience Quality Engineering',
      description: 'Experience-focused validation ensuring accessibility compliance, device compatibility, usability benchmarking, and high-fidelity user acceptance.',
      gradient: 'from-purple-500 to-pink-500',
      link: '/services/ux-assurance',
      services: ['5 Specialized Sub-Services', 'WCAG-Aligned Accessibility', 'UX-First Validation Approach']
    },
    {
      icon: Zap,
      title: 'X-FIRST',
      subtitle: 'Shift-Left & Continuous Quality Engineering',
      description: 'Quality engineered from the earliest SDLC stages with requirement refinement, automation frameworks, performance engineering, security testing, and CI-driven execution.',
      gradient: 'from-cyan-400 to-blue-500',
      link: '/services/x-first',
      services: ['11 Specialized Sub-Services', 'Shift-Left Quality Strategy', 'Continuous Testing at Scale']
    },
    {
      icon: Brain,
      title: 'Cognitive Assurance',
      subtitle: 'AI-Driven Quality Intelligence',
      description: 'AI-powered quality systems delivering autonomous testing, cognitive performance insights, intelligent defect prediction, SIEM-linked security monitoring, and predictive production analytics.',
      gradient: 'from-pink-500 to-purple-600',
      link: '/services/cognitive-assurance',
      services: ['5 Specialized Sub-Services', 'AI-Enabled Decisioning', 'Predictive Quality Analytics']
    }
  ];

  const stats = [
    { value: '32+', label: 'QA Sub-Services' },
    { value: '4', label: 'Quality Categories' },
    { value: '99.9%', label: 'Quality Rate' },
    { value: '50%', label: 'Faster Delivery' }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Comprehensive Coverage',
      description: 'End-to-end QA across the entire lifecycle—from requirements and development to deployment and production stability.'
    },
    {
      icon: Brain,
      title: 'AI-Driven Quality Intelligence',
      description: 'Harness cognitive testing, intelligent automation, and predictive analytics for smarter, faster, and more accurate validation.'
    },
    {
      icon: Zap,
      title: 'Shift-Left Quality Engineering',
      description: 'Reduce defects early by embedding quality from the first line of code through continuous integration.'
    },
    {
      icon: Users,
      title: 'User-Focused Validation',
      description: 'Deliver seamless, accessible, and intuitive user experiences through advanced UX and accessibility assurance.'
    }
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--neural-orb)' }}></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--neural-orb)' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--neural-orb)' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                  : 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.1))',
                border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(37, 99, 235, 0.2)'}`,
              }}
            >
              <span className="text-sm" style={{ color: theme === 'dark' ? '#FFFFFF' : '#0054A6' }}>Comprehensive Quality Assurance Services</span>
            </div>
            <h1 className="text-5xl lg:text-7xl mb-6" style={{ color: 'var(--text-primary)' }}>
              End-to-End Quality <span className="gradient-text">Innovation</span>
            </h1>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
              Enhanced by AI intelligence, automation-first strategies, and proven engineering methodologies. From design validation to production assurance, we elevate quality across every stage of the lifecycle.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                  color: '#FFFFFF',
                  boxShadow: 'var(--shadow-accent)',
                }}
              >
                Begin Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                  border: `1px solid var(--border-color)`,
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                Explore Success Stories
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-6 text-center"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div className="text-4xl gradient-text mb-2">
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QA Categories */}
      <section className="relative py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-4">
              <SectionTag text="Quality Assurance Pillars" icon={Target} />
            </div>
            <h2 className="text-4xl lg:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
              Our Core: Modern QA Excellence
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              All four pillars are purpose-built to solve distinct quality dimensions with specialized frameworks, intelligent automation, and domain-driven methodologies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {qaCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} rounded-t-2xl`}></div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl mb-2" style={{ color: 'var(--text-primary)' }}>{category.title}</h3>
                <p className="text-lg mb-4" style={{ color: 'var(--accent-primary)' }}>{category.subtitle}</p>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>{category.description}</p>

                {/* Services List */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.08)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center" style={{ color: 'var(--accent-primary)' }}>
                  <span className="mr-2">Explore Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <SectionTag text="Why Choose Us" icon={CheckCircle2} />
            </div>
            <h2 className="text-5xl lg:text-6xl mb-6" style={{ fontWeight: 600 }}>
              <span style={{ color: 'var(--text-primary)' }}>Why Our </span>
              <span
                className="gradient-text"
                style={{
                  backgroundImage: theme === 'dark'
                    ? 'linear-gradient(135deg, #00A8B7 0%, #00C2C7 50%, #9333EA 100%)'
                    : 'linear-gradient(135deg, #0054A6 0%, #00A8B7 50%, #9333EA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                QA Services
              </span>
              <span style={{ color: 'var(--text-primary)' }}> Stand Apart</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Precision-engineered quality assurance that strengthens every layer of your software lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  className="w-14 h-14 mx-auto rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                      : 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.1))',
                  }}
                >
                  <benefit.icon className="w-7 h-7" style={{ color: 'var(--accent-primary)' }} />
                </div>
                <h3 className="text-lg mb-3" style={{ color: 'var(--text-primary)' }}>{benefit.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Layer - Dark Theme: Radial gradient with aurora effect */}
        {theme === 'dark' && (
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59, 130, 246, 0.08) 0%, rgba(15, 23, 42, 0) 100%)',
            }}
          />
        )}
        
        {/* Background Layer - Light Theme: Subtle gradient wash */}
        {theme === 'light' && (
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(239, 246, 255, 0.6) 0%, rgba(219, 234, 254, 0.4) 50%, rgba(239, 246, 255, 0.6) 100%)',
            }}
          />
        )}
        
        {/* Accent gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(168, 85, 247, 0.05) 100%)'
              : 'linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, transparent 50%, rgba(168, 85, 247, 0.03) 100%)',
          }}
        ></div>
        
        {/* Neural pattern overlay */}
        <div className="absolute inset-0 opacity-30 neural-pattern"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
            Build With Confidence. Deliver With <span className="gradient-text">Intelligence</span>.
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Let's discuss how our comprehensive QA services can transform your software quality and accelerate your delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                color: '#FFFFFF',
                boxShadow: 'var(--shadow-accent)',
              }}
            >
              Talk to our Expert
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                border: `1px solid var(--border-color)`,
                color: 'var(--text-primary)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              Get a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}