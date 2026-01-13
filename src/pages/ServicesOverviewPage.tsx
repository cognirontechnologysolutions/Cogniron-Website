import React, { useState } from 'react';
import { Target, Sparkles, Zap, Brain, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../components/ServiceCard';
import { CTASection } from '../components/CTASection';
import { PageContainer } from '../components/PageContainer';
import { useTheme } from '../contexts/ThemeContext';
import { useGradientShimmer } from '../hooks/useGradientShimmer';

export function ServicesOverviewPage() {
  const { theme } = useTheme();
  useGradientShimmer();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const mainServices = [
    {
      title: 'QA Services',
      description: 'Comprehensive Quality Assurance across four specialized categories with 32+ sub-services powered by AI-driven insights and cognitive intelligence.',
      icon: Target,
      gradient: 'from-blue-500 to-cyan-400',
      link: '/services/qa',
      category: 'qa',
      features: [
        'PQLM - Product Quality Lifecycle Management',
        'UX-Assurance - User Experience Quality',
        'X-FIRST - Shift-Left & Quality-First',
        'Cognitive Assurance - AI-Driven Testing',
      ],
    },
    {
      title: 'CRM Services',
      description: 'Customer Relationship Management solutions designed to optimize customer engagement and drive business growth.',
      icon: Users,
      gradient: 'from-purple-500 to-pink-500',
      link: '/services/crm',
      category: 'crm',
      features: [
        'Customer Engagement',
        'Sales Automation',
        'Marketing Integration',
        'Analytics & Insights',
      ],
    },
  ];

  const qaCategories = [
    {
      title: 'PQLM',
      description: 'End-to-end Product Quality Lifecycle Management with comprehensive testing frameworks and governance.',
      icon: Target,
      gradient: 'from-blue-500 to-cyan-400',
      link: '/services/pqlm',
      category: 'pqlm',
      features: [
        'Requirement Ambiguity Engineering',
        'Functional Testing',
        'Integration Testing',
        'Build Verification Testing',
        'User Acceptance Testing',
        'TestOps & Process Governance',
      ],
    },
    {
      title: 'UX-Assurance',
      description: 'User-centric quality validation ensuring exceptional experiences across all touchpoints.',
      icon: Sparkles,
      gradient: 'from-purple-500 to-pink-500',
      link: '/services/ux-assurance',
      category: 'ux',
      features: [
        'Accessibility Testing',
        'A/B Testing',
        'Compatibility Testing',
        'User Acceptance Testing',
        'UX Readiness Assessment',
      ],
    },
    {
      title: 'X-FIRST',
      description: 'Shift-Left testing strategies embedding quality at every stage of your development lifecycle.',
      icon: Zap,
      gradient: 'from-cyan-400 to-blue-500',
      link: '/services/x-first',
      category: 'xfirst',
      features: [
        'Test Automation',
        'Performance Engineering',
        'Security Engineering',
        'Process Governance',
        'DevOps Integration',
      ],
    },
    {
      title: 'Cognitive Assurance',
      description: 'AI-powered testing intelligence with predictive analytics and automated anomaly detection.',
      icon: Brain,
      gradient: 'from-pink-500 to-purple-600',
      link: '/services/cognitive-assurance',
      category: 'cognitive',
      features: [
        'AI-Assisted Test Automation',
        'Performance Anomaly Detection',
        'Cognitive Security Testing',
        'SIEM Intelligence',
        'Production Monitoring',
      ],
    },
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: 2 },
    { id: 'qa', name: 'QA Services', count: 1 },
    { id: 'crm', name: 'CRM', count: 1 },
  ];

  const allServices = [...mainServices, ...qaCategories];
  const filteredServices = selectedCategory === 'all' 
    ? mainServices 
    : allServices.filter(s => s.category === selectedCategory);

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, #020617 0%, #0F172A 50%, #1E293B 100%)'
              : 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #F0F9FF 100%)',
          }}
        >
          <div className="absolute inset-0" style={{ opacity: theme === 'dark' ? 0.1 : 0.05 }}>
            <div 
              className="absolute top-1/3 left-0 w-full h-px"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.5), transparent)'
                  : 'linear-gradient(to right, transparent, rgba(37, 99, 235, 0.3), transparent)',
              }}
            ></div>
            <div 
              className="absolute top-0 left-1/2 w-px h-full"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.5), transparent)'
                  : 'linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.3), transparent)',
              }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
            Comprehensive quality assurance and CRM solutions tailored to your needs—from lifecycle management to AI-powered testing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.link} {...service} />
            ))}
          </div>

          {/* QA Categories Section - Show when QA or All is selected */}
          {(selectedCategory === 'all' || selectedCategory === 'qa') && (
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl mb-4" style={{ color: 'var(--text-primary)' }}><span className="gradient-text">QA Service</span> Categories</h2>
                <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Four specialized quality assurance domains, each with comprehensive sub-services
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {qaCategories.map((category) => (
                  <ServiceCard key={category.link} {...category} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        className="relative py-20"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 100%)'
            : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6" style={{ color: 'var(--text-primary)' }}>Why Choose <span className="gradient-text">Cogniron</span></h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Industry-leading expertise with AI-powered solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="backdrop-blur-sm rounded-2xl p-8"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                  boxShadow: theme === 'dark' ? '0 0 30px rgba(59, 130, 246, 0.3)' : '0 4px 20px rgba(59, 130, 246, 0.2)',
                }}
              >
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Comprehensive Coverage</h3>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Full-spectrum QA services across all domains with deep expertise and proven methodologies.
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
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: 'linear-gradient(135deg, #A855F7, #EC4899)',
                  boxShadow: theme === 'dark' ? '0 0 30px rgba(168, 85, 247, 0.3)' : '0 4px 20px rgba(168, 85, 247, 0.2)',
                }}
              >
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}><span className="gradient-text">AI-Powered</span> Intelligence</h3>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Leverage cognitive testing capabilities with predictive analytics and intelligent automation.
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
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
                  boxShadow: theme === 'dark' ? '0 0 30px rgba(6, 182, 212, 0.3)' : '0 4px 20px rgba(6, 182, 212, 0.2)',
                }}
              >
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}><span className="gradient-text">Shift-Left</span> Approach</h3>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Catch defects early with quality embedded at every stage of your development lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Ready to Elevate Your Quality Assurance?"
        description="Partner with Cogniron to access comprehensive QA and CRM solutions powered by AI-driven insights. Let's build quality into every aspect of your digital products."
        primaryButtonText="Start Your Journey"
        primaryButtonLink="/contact"
      />
    </PageContainer>
  );
}