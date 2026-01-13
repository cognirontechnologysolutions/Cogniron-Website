import React from 'react';
import { Target, Users, Award, TrendingUp, Heart, Zap, Globe, Shield, CheckCircle2, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { StatsSection } from '../components/StatsSection';
import { CTASection } from '../components/CTASection';
import { PageContainer } from '../components/PageContainer';
import { SectionTag } from '../components/SectionTag';
import { useTheme } from '../contexts/ThemeContext';
import { useGradientShimmer } from '../hooks/useGradientShimmer';
import { Link } from 'react-router-dom';

export function AboutPage() {
  const { theme } = useTheme();
  useGradientShimmer();
  
  const stats = [
    { value: '7', suffix: '+', label: 'Years of Excellence' },
    { value: '50', suffix: '+', label: 'Enterprise Clients' },
    { value: '500', suffix: '+', label: 'Projects Delivered' },
    { value: '90', suffix: '%', label: 'Client Retention' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'Uncompromised excellence in every test, every release, every engagement.',
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'We build partnerships by aligning our success with yours, not just delivering services.',
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description: 'Relentlessly advancing QA with AI, automation, and next-generation engineering.',
    },
    {
      icon: Shield,
      title: 'Integrity Always',
      description: 'Transparency, accountability, and ethical practice in every decision.',
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'We thrive on teamwork both within our teams and alongside our clients.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Every project makes us stronger. Every outcome informs the next innovation.',
    },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Cogniron Founded',
      description: 'Cogniron is established with a vision to redefine software quality engineering through AI, automation, and deep domain expertise.',
    },
    {
      year: '2019',
      title: 'First Enterprise Engagements',
      description: 'Early enterprise customers adopt Cogniron\'s engineering-led quality model, accelerating their shift toward modern, continuous validation practices.',
    },
    {
      year: '2021',
      title: 'Cognitive Assurance Emerges',
      description: 'Cogniron expands into cognitive assurance, integrating machine learning, observability, and proactive risk intelligence across delivery pipelines.',
    },
    {
      year: '2023',
      title: 'Global Scale & Trust',
      description: 'Delivery pods scale across regions and major certifications are achieved, positioning Cogniron as a trusted quality partner for global digital enterprises.',
    },
    {
      year: '2025',
      title: 'AI Quality Platform Launched',
      description: 'Cogniron unveils its AI Quality Platform, unifying automation, intelligence, and production into a single autonomous quality framework.',
    },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      bio: '20+ years in quality engineering. Former VP at major tech companies.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      bio: 'AI/ML expert. PhD in Computer Science. Published researcher in automated testing.',
    },
  ];

  const certifications = [
    'ISO 9001:2015',
    'ISO 27001',
    'SOC 2 Type II',
    'CMMI Level 5',
    'ISTQB Certified',
    'AWS Partner',
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ 
        backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : '#FAFBFF'
      }}>
        {/* Background Layer */}
        <div className="absolute inset-0">
          {/* Grid Pattern - matches Platform page */}
          <div 
            className="absolute inset-0 neural-pattern"
            style={{
              opacity: theme === 'dark' ? 0.1 : 0.12
            }}
          ></div>
          
          {/* Light Theme: Central radial gradient spotlight (matches Platform page) */}
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
          
          {/* Dark Theme: Gradient Orbs (matches Platform page) */}
          {theme === 'dark' && (
            <div className="absolute inset-0" style={{ opacity: 0.2 }}>
              <div className="absolute top-0 left-0 w-full h-full">
                <div 
                  className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                  style={{ 
                    backgroundColor: 'rgba(59, 130, 246, 0.3)'
                  }}
                ></div>
                <div 
                  className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" 
                  style={{ 
                    backgroundColor: 'rgba(147, 51, 234, 0.3)',
                    animationDelay: '1s' 
                  }}
                ></div>
                <div 
                  className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse" 
                  style={{ 
                    backgroundColor: 'rgba(6, 182, 212, 0.2)',
                    animationDelay: '2s' 
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-5xl lg:text-7xl mb-6 max-w-4xl mx-auto tracking-tight" style={{ color: 'var(--text-primary)' }}>
            About <span className="gradient-text">Cogniron</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Pioneering AI-driven quality engineering since 2018. Our evolution reflects a singular purpose: redefining how the world builds, tests, and trusts software.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 text-white rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
                boxShadow: 'var(--shadow-accent)',
              }}
            >
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/careers"
              className="px-8 py-4 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                color: 'var(--text-primary)',
                borderColor: 'var(--border-color)',
              }}
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection stats={stats} />

      {/* Mission & Vision */}
      <section className="relative py-24" style={{ backgroundColor: theme === 'light' ? '#FFFFFF' : 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div
              className="backdrop-blur-sm rounded-2xl p-8"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>Our <span className="gradient-text">Mission</span></h2>
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                To reinvent quality assurance through cognitive intelligence, making enterprise-grade testing faster, smarter, and inherently predictive. We want to empower organizations to deliver flawless digital experiences by embedding AI-driven quality at every stage of the software development lifecycle.
              </p>
            </div>

            <div
              className="backdrop-blur-sm rounded-2xl p-8"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>Our <span className="gradient-text">Vision</span></h2>
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                To become the global benchmark in cognitive quality assurance. We envision a future where every product ships with precision and confidence by empowering intelligent automation, continuous learning, and zero-defect engineering.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div 
            className="py-24 -mx-4 sm:-mx-6 lg:-mx-12 px-4 sm:px-6 lg:px-12"
            style={{ 
              backgroundColor: theme === 'light' ? '#E2F2FF' : 'transparent' 
            }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="mb-4">
                  <SectionTag text="What We Stand For" icon={Heart} />
                </div>
                <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>Core Values <span className="gradient-text">That Shape Us</span></h2>
                <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Here are our 6 pillars of focus
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-sm rounded-xl p-6 transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{
                        background: theme === 'dark'
                          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                          : 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.1))',
                      }}
                    >
                      <value.icon className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                    </div>
                    <h3 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{value.title}</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-4">
              <SectionTag text="Company History" icon={TrendingUp} />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>Our Journey <span className="gradient-text">of Growth & Reinvention</span></h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              7 years of excellence in quality assurance.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 hidden lg:block"
              style={{ backgroundColor: 'var(--border-color)' }}
            ></div>

            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="lg:w-1/2 lg:px-8">
                    <div
                      className="backdrop-blur-sm rounded-xl p-6 transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        boxShadow: 'var(--shadow-md)',
                      }}
                    >
                      <div className="text-3xl gradient-text mb-2">{event.year}</div>
                      <h3 className="text-xl mb-2" style={{ color: 'var(--text-primary)' }}>{event.title}</h3>
                      <p style={{ color: 'var(--text-secondary)' }}>{event.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div
                    className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-4">
              <SectionTag text="Leading at the front" icon={Users} />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>Our <span className="gradient-text">Leadership Team</span></h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Veterans Who Are Driving the Future of Quality Engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
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
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #22D3EE 100%)',
                  }}
                >
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl mb-1" style={{ color: 'var(--text-primary)' }}>{member.name}</h3>
                <p className="mb-3" style={{ color: 'var(--accent-primary)' }}>{member.role}</p>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{member.bio}</p>
                
                {/* Social Icons */}
                <div className="flex items-center justify-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${member.name} on LinkedIn`}
                    className="social-icon-link p-2 rounded-lg transition-all duration-200 hover:scale-105"
                    style={{
                      color: 'var(--accent-primary)',
                    }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${member.name} on Twitter`}
                    className="social-icon-link p-2 rounded-lg transition-all duration-200 hover:scale-105"
                    style={{
                      color: 'var(--accent-primary)',
                    }}
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Join Our Journey"
        description="Ready to elevate your software quality with cognitive intelligence? Let's build the future of digital excellence together."
        primaryButtonText="Explore Careers"
        primaryButtonLink="/careers"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </PageContainer>
  );
}