import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Monitor, Smartphone, Tablet, ArrowRight } from 'lucide-react';
import { PageContainer } from '../../../components/PageContainer';
import { useTheme } from '../../../contexts/ThemeContext';

export function UXCompatibilityTestingPage() {
  const { theme } = useTheme();

  const relatedServices = [
    {
      icon: CheckCircle2,
      title: 'Accessibility Testing',
      description: 'WCAG compliance validation',
      gradient: 'from-purple-500 to-pink-500',
      link: '/services/ux-assurance/accessibility-testing'
    },
    {
      icon: Monitor,
      title: 'A/B Testing',
      description: 'Cross-platform conversion optimization',
      gradient: 'from-cyan-400 to-blue-500',
      link: '/services/ux-assurance/ab-testing'
    },
    {
      icon: Smartphone,
      title: 'UX Readiness Testing',
      description: 'Multi-device launch assurance',
      gradient: 'from-pink-500 to-purple-600',
      link: '/services/ux-assurance/ux-readiness-testing'
    }
  ];

  const capabilities = [
    'Cross-browser and cross-device validation',
    'Responsive design and viewport testing',
    'Touch and gesture interaction testing',
    'Visual regression detection',
    'Performance perception across devices'
  ];

  const processSteps = [
    { title: 'Mapping', description: 'Spot the target devices and browsers' },
    { title: 'Baseline', description: 'Establish UX standards definition' },
    { title: 'Testing', description: 'Perform Cross-platform validation' },
    { title: 'Analysis', description: 'Identify inconsistencies' },
    { title: 'Optimization', description: 'Ensure uniform experience' }
  ];

  const tools = ['BrowserStack', 'Sauce Labs', 'Percy', 'LambdaTest', 'Applitools', 'CrossBrowserTesting'];

  const metrics = [
    { value: '100%', label: 'Platform Coverage', sublabel: 'All major devices' },
    { value: '99%', label: 'UX Consistency', sublabel: 'Cross-platform parity' },
    { value: '-75%', label: 'Device Issues', sublabel: 'Early detection' }
  ];

  return (
    <PageContainer>
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="absolute inset-0" style={{ opacity: theme === 'dark' ? 0.3 : 0.15 }}>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/services/ux-assurance" className="text-purple-500 hover:text-purple-600 transition-colors inline-flex items-center gap-2">
              ← Back to UX-assurance
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))'
                    : 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
                  border: `1px solid ${theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)'}`,
                }}
              >
                <span className="text-purple-500 text-sm">UX-assurance Service</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Compatibility Testing <span style={{ fontSize: '0.5em' }}>(from a user-experience perspective)</span>
              </h1>
              <p className="text-xl leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Deliver consistent, seamless user experiences across devices, browsers, and platforms. Validate responsive design, touch interactions, and visual integrity to eliminate device-specific issues before launch.
              </p>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                Achieve 100% platform coverage, 99% UX consistency, and reduce compatibility issues by 75% through structured cross-platform validation.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
                  color: '#FFFFFF',
                  boxShadow: 'var(--shadow-accent)',
                }}
              >
                Schedule Consultation
              </Link>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-2xl"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))'
                    : 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
                }}
              ></div>
              <div
                className="relative backdrop-blur-sm rounded-3xl p-8"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <Monitor className="w-16 h-16 text-purple-500 mb-4" />
                <h3 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Cross-Platform Excellence</h3>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Flawless UX across desktops, tablets, smartphones, and browsers.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="rounded-lg p-4"
                    style={{ backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 1)' }}
                  >
                    <div className="text-3xl gradient-text">100%</div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Coverage</div>
                  </div>
                  <div
                    className="rounded-lg p-4"
                    style={{ backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 1)' }}
                  >
                    <div className="text-3xl gradient-text">99%</div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Consistency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}>Related <span className="gradient-text">Services</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group relative backdrop-blur-sm rounded-2xl p-8 transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 transition-all group-hover:scale-110 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-purple-500 transition-colors" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="relative py-20"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)'
            : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}>Key <span className="gradient-text">Capabilities</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-start gap-4 backdrop-blur-sm rounded-xl p-6 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))'
                      : 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
                  }}
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                </div>
                <span className="text-lg" style={{ color: 'var(--text-secondary)' }}>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl md:text-5xl mb-12" style={{ color: 'var(--text-primary)' }}><span className="gradient-text">UX Validation Workflow</span></h2>
          <div className="relative">
            <div
              className="absolute top-8 left-0 right-0 h-px"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.5), transparent)'
                  : 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.3), transparent)',
              }}
            ></div>
            <div className="grid grid-cols-5 gap-4 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl mb-4 relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, #A855F7, #EC4899)',
                      boxShadow: 'var(--shadow-accent)',
                    }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-center mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                  <p className="text-sm text-center px-2" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)'
            : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}>Tools & <span className="gradient-text">Technologies</span></h2>
          <div
            className="backdrop-blur-sm rounded-2xl p-8"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div className="grid grid-cols-6 gap-8 mb-6">
              {tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div
                    className="rounded-xl w-full h-20 flex items-center justify-center transition-all"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 1)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>Logo</span>
                  </div>
                  <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>{tool}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>
              Additional tools based on project needs
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}><span className="gradient-text">Client Impact</span></h2>
          <div className="flex items-center justify-between">
            <Link to="/case-studies" className="text-purple-500 hover:text-purple-600 transition-colors ml-auto">
              View All Case Studies →
            </Link>
          </div>
          <div
            className="backdrop-blur-sm rounded-2xl overflow-hidden transition-all"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div
              className="h-40 flex items-center justify-center"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 1)',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              <p style={{ color: 'var(--text-secondary)' }}>Client Logo / Image</p>
            </div>
            <div className="p-8">
              <span
                className="inline-block px-4 py-2 text-sm rounded-lg mb-4"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))'
                    : 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
                  color: '#A855F7',
                  border: `1px solid ${theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)'}`,
                }}
              >
                Technology
              </span>
              <h3 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Global Technology Platform</h3>
              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                Achieved 99% UX consistency across devices and browsers, reducing device-specific issues by 75% for a 50M+ user base.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl gradient-text mb-2">{metric.value}</div>
                    <div className="mb-1" style={{ color: 'var(--text-primary)' }}>{metric.label}</div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{metric.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - matching master CTA background */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Pattern - matching master CTA */}
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent, rgba(168, 85, 247, 0.1))'
              : 'linear-gradient(135deg, rgba(37, 99, 235, 0.05), transparent, rgba(168, 85, 247, 0.05))',
          }}
        ></div>
        <div className="absolute inset-0 opacity-30 neural-pattern"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>Make Every Platform <span className="gradient-text">Feel Native</span></h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>Ensure a consistent, high-quality UX across every device and browser.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 group" 
              style={{ 
                background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)', 
                color: '#FFFFFF', 
                boxShadow: 'var(--shadow-accent)' 
              }}
            >
              <span className="mr-2">Schedule Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              to="/services/ux-assurance" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300" 
              style={{ 
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF', 
                border: '1px solid var(--border-color)', 
                color: 'var(--text-primary)' 
              }}
            >
              Explore More UX Assurance Services
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}