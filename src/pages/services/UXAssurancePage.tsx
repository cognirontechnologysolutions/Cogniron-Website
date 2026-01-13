import React from 'react';
import { Sparkles, Eye, Users, BarChart3, CheckCircle2, MonitorSmartphone, Accessibility } from 'lucide-react';
import { ServicePageHero } from '../../components/ServicePageHero';
import { FeatureGrid } from '../../components/FeatureGrid';
import { CTASection } from '../../components/CTASection';
import { PageContainer } from '../../components/PageContainer';
import { useTheme } from '../../contexts/ThemeContext';
import { useGradientShimmer } from '../../hooks/useGradientShimmer';

export function UXAssurancePage() {
  const { theme } = useTheme();
  useGradientShimmer();

  const capabilities = [
    {
      icon: Accessibility,
      title: 'Accessibility Testing',
      description: 'Ensure Level AA/AAA WCAG compliance and safeguard inclusive access for all users.',
      link: '/services/ux-assurance/accessibility-testing',
    },
    {
      icon: BarChart3,
      title: 'A/B Testing',
      description: 'Data-backed experimentation to validate design decisions and maximize engagement.',
      link: '/services/ux-assurance/ab-testing',
    },
    {
      icon: MonitorSmartphone,
      title: 'Compatibility Testing',
      description: 'Guarantee consistent UX across browsers, devices, resolutions, and operating systems.',
      link: '/services/ux-assurance/ux-compatibility-testing',
    },
    {
      icon: Users,
      title: 'User Acceptance Testing',
      description: 'Validate usability, clarity, and satisfaction through real-user evaluation.',
      link: '/services/ux-assurance/ux-user-acceptance-testing',
    },
    {
      icon: CheckCircle2,
      title: 'UX Readiness Assessment',
      description: 'Pre-launch UX quality scoring to ensure your experience is production-ready.',
      link: '/services/ux-assurance/ux-readiness-testing',
    },
  ];

  const benefits = [
    {
      metric: '45%',
      label: 'Increase in User Satisfaction',
      description: 'Improvement in CSAT and NPS driven by smoother flows and clearer interactions.',
    },
    {
      metric: '60%',
      label: 'Reduction in Support Tickets',
      description: 'Eliminate usability-related issues before they reach your customers.',
    },
    {
      metric: '2.5×',
      label: 'Higher Conversion Rates',
      description: 'Refined journeys and optimized interfaces that drive measurable growth.',
    },
    {
      metric: '100%',
      label: 'Accessibility Compliance',
      description: 'Fully compliant experiences aligned with WCAG and global standards.',
    },
  ];

  const testingAreas = [
    {
      title: 'Visual Design Quality',
      items: ['Contrast and readability', 'Visual hierarchy', 'Typography and consistency', 'Brand and style alignment'],
    },
    {
      title: 'Interaction Patterns',
      items: ['Touch & click responsiveness', 'Gesture and motion behavior', 'Micro-interactions', 'Feedback cues'],
    },
    {
      title: 'Information Architecture',
      items: ['Navigation and menu structure', 'Content structure and hierarchy', 'Discovery experience', 'Search Functionality'],
    },
    {
      title: 'Performance Perception',
      items: ['Loading states and transitions', 'Perceived speed and fluidity', 'Progressive enhancement best practices', 'Skeleton Screens'],
    },
  ];

  return (
    <PageContainer>
      <ServicePageHero
        title="UX-Assurance"
        subtitle="User Experience Quality Validation"
        description="Deliver exceptional digital experiences with comprehensive UX testing, accessibility compliance, and data-backed design optimization across every platform and interaction."
        icon={Sparkles}
        gradient="from-purple-500 to-pink-500"
        badge="User-Centric Quality"
      />

      {/* Overview Section */}
      <section className="relative py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div
                className="backdrop-blur-sm rounded-2xl p-8"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <h3 className="text-xl mb-6" style={{ color: 'var(--text-primary)' }}>Experience-Led Quality Framework</h3>
                <div className="space-y-4">
                  {[
                    { phase: 'Heuristic Evaluation', status: 'Expert analysis of interface clarity, usability, and design.' },
                    { phase: 'Usability Testing', status: 'Hands-on testing with real users to uncover behavioral insights.' },
                    { phase: 'Accessibility Audit', status: 'WCAG-aligned inclusivity and compliance.' },
                    { phase: 'Performance Experience Testing', status: 'Evaluate load speed and responsiveness through user perception.' },
                    { phase: 'A/B Experimentation', status: 'Optimize flows and layouts through experiments.' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: 'linear-gradient(135deg, #A855F7, #EC4899)',
                        }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div style={{ color: 'var(--text-primary)' }}>{item.phase}</div>
                        <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl mb-6" style={{ color: theme === 'light' ? '#000034' : 'var(--text-primary)' }}>
                Experience-Driven Quality
              </h2>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                UX-Assurance ensures your product isn't just functional—it feels intuitive, inclusive, and effortless to use. By combining expert evaluations, automated checks, and real-user feedback, we uncover what impacts satisfaction and what elevates delight.
              </p>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                Our approach detects usability challenges before they reach customers, ensures full accessibility compliance, and drives continuous UX improvement through measurable insights.
              </p>
              <div className="flex flex-wrap gap-3">
                {['WCAG 2.1', 'Section 508', 'ISO 9241', 'Nielsen\'s Heuristics'].map((standard) => (
                  <span
                    key={standard}
                    className="px-4 py-2 rounded-lg text-sm"
                    style={{
                      background: theme === 'dark'
                        ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))'
                        : 'linear-gradient(135deg, rgba(168, 85, 247, 0.08), rgba(236, 72, 153, 0.08))',
                      border: `1px solid ${theme === 'dark' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(168, 85, 247, 0.15)'}`,
                      color: '#EC4899',
                    }}
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Complete <span className="gradient-text">UX Validation</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Five core disciplines that shape exceptional experiences across all devices and environments.
              </p>
            </div>
            <FeatureGrid features={capabilities} columns={3} />
          </div>

          {/* Benefits */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Measurable <span className="gradient-text">UX Outcomes</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 text-center"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div className="text-5xl gradient-text mb-3">
                    {benefit.metric}
                  </div>
                  <div className="mb-2" style={{ color: 'var(--text-primary)' }}>{benefit.label}</div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testing Areas */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                What We Test <span className="gradient-text">For</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                A comprehensive examination of every dimension of user experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testingAreas.map((area, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-8 transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3 className="text-xl mb-6" style={{ color: 'var(--text-primary)' }}>{area.title}</h3>
                  <ul className="space-y-3">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-center" style={{ color: 'var(--text-secondary)' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section
        className="relative py-24"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.05), transparent, rgba(236, 72, 153, 0.05))'
            : 'linear-gradient(135deg, rgba(168, 85, 247, 0.03), transparent, rgba(236, 72, 153, 0.03))',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
              <span className="gradient-text">Accessibility</span> Excellence
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Deliver inclusive experiences that serve every user—while reducing legal risk and improving market reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Scanning',
                description: 'AI-based scanners identify foundational accessibility gaps instantly.',
                label: 'Includes:',
                features: ['ARIA attributes', 'Color contrast checks', 'Keyboard navigation', 'Semantic validation'],
              },
              {
                title: 'Manual Auditing',
                description: 'Expert evaluation uncovers complex issues no tool can detect.',
                label: 'Covers:',
                features: ['Screen reader testing', 'Cognitive load review', 'Focus order and management', 'Content clarity evaluation'],
              },
              {
                title: 'User Testing',
                description: 'Real users validate authentic accessibility performance.',
                label: 'Includes:',
                features: ['AT-based navigation', 'Diverse abilities and conditions', 'Real environment scenarios', 'Action-oriented feedback'],
              },
            ].map((approach, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-8 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <h3 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{approach.title}</h3>
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>{approach.description}</p>
                <div className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>{approach.label}</div>
                <ul className="space-y-2">
                  {approach.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <Eye className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Elevate Your User Experience"
        description="Create accessible, intuitive, and conversion-optimized experiences that transform how users interact with your product."
        primaryButtonText="Start UX Assessment"
        primaryButtonLink="/contact"
        secondaryButtonText="View Case Studies"
        secondaryButtonLink="/case-studies"
      />
    </PageContainer>
  );
}