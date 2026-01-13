import React, { useState } from 'react';
import { TrendingUp, Users, Zap, Target, ArrowRight, CheckCircle2, Building2, ShoppingCart, Heart, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { PageContainer } from '../components/PageContainer';
import { SectionTag } from '../components/SectionTag';
import { useTheme } from '../contexts/ThemeContext';
import { useGradientShimmer } from '../hooks/useGradientShimmer';

export function CaseStudiesPage() {
  const { theme } = useTheme();
  useGradientShimmer();
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building2 },
    { id: 'fintech', name: 'Fintech', icon: Briefcase },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'saas', name: 'SaaS', icon: Zap },
  ];

  const caseStudies = [
    {
      id: 'fintech-security-testing',
      company: 'GlobalPay Financial',
      industry: 'fintech',
      challenge: 'Manual testing processes causing 3-week release cycles and frequent production issues affecting 500K+ daily transactions',
      solution: 'Implemented Cognitive Assurance with AI-powered anomaly detection and X-first shift-left testing practices',
      results: [
        { metric: '70%', label: 'Faster Release Cycles', description: 'From 3 weeks to 9 days' },
        { metric: '95%', label: 'Defect Reduction', description: 'Production issues down 95%' },
        { metric: '99.99%', label: 'Uptime Achieved', description: 'From 99.2% to 99.99%' },
        { metric: '$2M', label: 'Cost Savings', description: 'Annual testing cost reduction' },
      ],
      services: ['Cognitive Assurance', 'X-first', 'PQLM'],
      testimonial: 'Cogniron transformed our quality assurance from a bottleneck into a competitive advantage. The AI-powered testing caught issues we never would have found manually.',
      author: 'CTO, GlobalPay',
      featured: true,
    },
    {
      id: 'ecommerce-test-automation',
      company: 'ShopNow E-commerce',
      industry: 'ecommerce',
      challenge: 'Poor mobile UX causing 40% cart abandonment rate and declining customer satisfaction scores',
      solution: 'Deployed comprehensive UX-assurance testing with accessibility validation and A/B testing optimization',
      results: [
        { metric: '2.5x', label: 'Conversion Increase', description: 'Mobile conversion rate doubled' },
        { metric: '60%', label: 'Reduced Cart Abandonment', description: 'From 40% to 16%' },
        { metric: '100%', label: 'Accessibility Compliance', description: 'WCAG 2.1 AA certified' },
        { metric: '4.8/5', label: 'App Rating', description: 'Up from 3.2 stars' },
      ],
      services: ['UX-assurance', 'Cognitive Assurance'],
      testimonial: 'The UX testing revealed critical issues we were blind to. Our app is now rated one of the best in retail.',
      author: 'VP Product, ShopNow',
      featured: true,
    },
    {
      id: 'medicare-health-platform',
      company: 'MediCare Health Platform',
      industry: 'healthcare',
      challenge: 'HIPAA compliance requirements and complex integrations with 50+ healthcare systems requiring rigorous testing',
      solution: 'Implemented PQLM with comprehensive security testing and integration validation framework',
      results: [
        { metric: '100%', label: 'Compliance Maintained', description: 'Zero audit findings' },
        { metric: '85%', label: 'Faster Integration Testing', description: 'Automated test coverage' },
        { metric: '0', label: 'Security Breaches', description: '2 years incident-free' },
        { metric: 'SOC 2', label: 'Type II Certified', description: 'Achieved in 4 months' },
      ],
      services: ['PQLM', 'X-first', 'CRM'],
      testimonial: 'Security and compliance are non-negotiable in healthcare. Cogniron gave us the confidence to scale rapidly while staying fully compliant.',
      author: 'CEO, MediCare',
      featured: false,
    },
    {
      id: 'cloudsuite-saas',
      company: 'CloudSuite SaaS',
      industry: 'saas',
      challenge: 'Rapid feature development (2-week sprints) requiring fast, reliable testing without quality compromises',
      solution: 'X-first shift-left approach with automated regression testing and continuous integration',
      results: [
        { metric: '90%', label: 'Test Automation', description: 'Comprehensive coverage' },
        { metric: '10min', label: 'Feedback Loop', description: 'From commit to results' },
        { metric: '3x', label: 'Release Velocity', description: 'Monthly to weekly releases' },
        { metric: '98%', label: 'Customer Retention', description: 'Up from 89%' },
      ],
      services: ['X-first', 'PQLM', 'CRM'],
      testimonial: 'We can now release confidently every week. The shift-left approach embedded quality into our DNA.',
      author: 'Head of Engineering, CloudSuite',
      featured: false,
    },
    {
      id: 'paytech-solutions',
      company: 'PayTech Solutions',
      industry: 'fintech',
      challenge: 'Legacy payment processing system requiring modernization without disrupting 24/7 operations',
      solution: 'Phased PQLM implementation with production monitoring and comprehensive regression testing',
      results: [
        { metric: '0', label: 'Downtime', description: 'During entire migration' },
        { metric: '50%', label: 'Performance Improvement', description: 'Transaction processing speed' },
        { metric: '99.5%', label: 'Backward Compatibility', description: 'All APIs maintained' },
        { metric: '6mo', label: 'Ahead of Schedule', description: '18-month project done in 12' },
      ],
      services: ['PQLM', 'Cognitive Assurance'],
      testimonial: 'The most complex migration we\'ve ever undertaken, executed flawlessly with zero customer impact.',
      author: 'VP Operations, PayTech',
      featured: false,
    },
    {
      id: 'stylehub-fashion',
      company: 'StyleHub Fashion',
      industry: 'ecommerce',
      challenge: '10,000+ SKUs with complex sizing/variants causing product data quality issues and customer complaints',
      solution: 'Custom test automation framework with AI-powered data validation and visual regression testing',
      results: [
        { metric: '92%', label: 'Data Quality Improvement', description: 'Product accuracy validated' },
        { metric: '75%', label: 'Reduction in Returns', description: 'Due to accurate product info' },
        { metric: '$5M', label: 'Revenue Recovery', description: 'From reduced returns' },
        { metric: '40%', label: 'Support Ticket Reduction', description: 'Fewer product questions' },
      ],
      services: ['Cognitive Assurance', 'UX-assurance'],
      testimonial: 'The AI-powered testing caught thousands of product data errors that would have cost us millions in returns and lost trust.',
      author: 'COO, StyleHub',
      featured: false,
    },
  ];

  const filteredStudies = selectedIndustry === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  const featuredStudies = filteredStudies.filter(cs => cs.featured);
  const regularStudies = filteredStudies.filter(cs => !cs.featured);

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
          <div className="absolute inset-0 opacity-10 neural-pattern"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            <span className="gradient-text">Case Studies</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Real results from real companies. See how we've helped organizations transform their quality assurance.
          </p>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="relative py-12" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className="px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2"
                  style={{
                    background: selectedIndustry === industry.id
                      ? 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)'
                      : theme === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : '#FFFFFF',
                    border: selectedIndustry === industry.id
                      ? 'none'
                      : `1px solid var(--border-color)`,
                    color: selectedIndustry === industry.id ? '#FFFFFF' : 'var(--text-primary)',
                    boxShadow: selectedIndustry === industry.id ? 'var(--shadow-accent)' : 'var(--shadow-sm)',
                  }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{industry.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Studies */}
      {featuredStudies.length > 0 && (
        <section className="relative py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Featured Success Stories
              </h2>
            </div>

            <div className="space-y-16">
              {featuredStudies.map((study, index) => (
                <article
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-8 md:p-12"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <div className="flex items-center space-x-3 mb-6">
                        <Building2 className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                        <span className="text-sm uppercase tracking-wide" style={{ color: 'var(--accent-primary)' }}>
                          {study.industry}
                        </span>
                      </div>

                      <h3 className="text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>
                        {study.company}
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="mb-2" style={{ color: 'var(--text-primary)' }}>
                            Challenge
                          </h4>
                          <p style={{ color: 'var(--text-secondary)' }}>{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="mb-2" style={{ color: 'var(--text-primary)' }}>
                            Solution
                          </h4>
                          <p style={{ color: 'var(--text-secondary)' }}>{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="mb-3" style={{ color: 'var(--text-primary)' }}>
                            Services Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {study.services.map((service, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 rounded-full text-sm"
                                style={{
                                  background: theme === 'dark'
                                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                                    : 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.1))',
                                  border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(37, 99, 235, 0.2)'}`,
                                  color: 'var(--accent-primary)',
                                }}
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div
                          className="rounded-xl p-6"
                          style={{
                            backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(37, 99, 235, 0.05)',
                            border: '1px solid var(--border-color)',
                          }}
                        >
                          <p className="italic mb-3" style={{ color: 'var(--text-secondary)' }}>
                            "{study.testimonial}"
                          </p>
                          <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
                            — {study.author}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div>
                      <h4 className="text-2xl mb-6" style={{ color: 'var(--text-primary)' }}>
                        Results Achieved
                      </h4>
                      <div className="grid grid-cols-2 gap-6">
                        {study.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl p-6 text-center"
                            style={{
                              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
                              border: '1px solid var(--border-color)',
                              boxShadow: 'var(--shadow-sm)',
                            }}
                          >
                            <div className="text-3xl mb-2 gradient-text">{result.metric}</div>
                            <div className="mb-1" style={{ color: 'var(--text-primary)' }}>
                              {result.label}
                            </div>
                            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                              {result.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Studies */}
      {regularStudies.length > 0 && (
        <section className="relative py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Featured Success Stories
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularStudies.map((study, index) => (
                <article
                  key={index}
                  className="group backdrop-blur-sm rounded-2xl p-8 transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Building2 className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                    <span className="text-sm uppercase tracking-wide" style={{ color: 'var(--accent-primary)' }}>
                      {study.industry}
                    </span>
                  </div>

                  <h3 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>
                    {study.company}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                        Challenge
                      </h4>
                      <p className="text-sm line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                        Solution
                      </h4>
                      <p className="text-sm line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Results (first 2) */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {study.results.slice(0, 2).map((result, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg p-3"
                        style={{
                          backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
                          border: '1px solid var(--border-color)',
                        }}
                      >
                        <div className="text-2xl gradient-text mb-1">{result.metric}</div>
                        <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded text-xs"
                        style={{
                          background: theme === 'dark'
                            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(6, 182, 212, 0.15))'
                            : 'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(6, 182, 212, 0.08))',
                          border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(37, 99, 235, 0.15)'}`,
                          color: 'var(--accent-primary)',
                        }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/case-studies/${study.id || study.company.toLowerCase().replace(/ /g, '-')}`}
                    className="w-full flex items-center justify-center px-4 py-3 rounded-lg transition-all duration-300 group"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <span className="mr-2">View Full Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats Summary */}
      <section
        className="relative py-24"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), transparent, rgba(168, 85, 247, 0.05))'
            : 'linear-gradient(135deg, rgba(37, 99, 235, 0.03), transparent, rgba(168, 85, 247, 0.03))',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
            Proven Results Across Industries
          </h2>
          <p className="text-xl mb-16 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Join leading companies achieving exceptional quality outcomes.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Enterprise Clients' },
              { value: '500+', label: 'Projects Delivered' },
              { value: '75%', label: 'Avg. Cost Reduction' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-6"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div className="text-4xl md:text-5xl mb-2 gradient-text">{stat.value}</div>
                <div style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Quality Assurance?"
        description="Let's discuss how we can help you achieve similar results."
        primaryButtonText="Schedule a Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/services"
      />
    </PageContainer>
  );
}