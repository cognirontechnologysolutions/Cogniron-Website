import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Shield, Users, Eye, ArrowRight } from 'lucide-react';
import { PageContainer } from '../../../components/PageContainer';
import { useTheme } from '../../../contexts/ThemeContext';

export function ReadinessTestingPage() {
  const { theme } = useTheme();

  const relatedServices = [
    {
      icon: Users,
      title: 'User Acceptance Testing',
      description: 'Confirm business and stakeholder readiness',
      gradient: 'from-purple-500 to-pink-500',
      link: '/services/pqlm/user-acceptance-testing'
    },
    {
      icon: Eye,
      title: 'Production Monitoring',
      description: 'Maintain stability and visibility post-launch',
      gradient: 'from-cyan-400 to-blue-500',
      link: '/services/pqlm/production-monitoring'
    },
    {
      icon: CheckCircle2,
      title: 'Functional Testing',
      description: 'Ensure feature-level correctness before go-live',
      gradient: 'from-blue-500 to-cyan-400',
      link: '/services/pqlm/functional-testing'
    }
  ];

  const capabilities = [
    'Production environment and configuration validation',
    'Performance, load, and scalability readiness',
    'Security, compliance, and access control checks',
    'Disaster recovery and failover testing',
    'Go-live checklist execution and audit readiness',
    'Rollback and contingency plan validation'
  ];

  const processSteps = [
    { title: 'Assessment', description: 'Define readiness benchmarks and success criteria' },
    { title: 'Validation', description: 'Test all infrastructure, performance, and security conditions' },
    { title: 'Documentation', description: 'Produce audit-ready readiness and risk reports' },
    { title: 'Sign-Off', description: 'Secure cross-functional stakeholder approval' },
    { title: 'Go-Live Support', description: 'Stabilization support and early production monitoring' }
  ];

  const tools = ['New Relic', 'Datadog', 'Splunk', 'LoadRunner', 'JMeter', 'Kubernetes'];

  const metrics = [
    { value: '99.9%', label: 'First-time launch success', sublabel: '' },
    { value: 'Zero', label: 'Critical production issues', sublabel: '' },
    { value: '100%', label: 'Go-live checklist completion', sublabel: '' }
  ];

  return (
    <PageContainer>
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div
          className="absolute inset-0"
          style={{
            opacity: theme === 'dark' ? 0.3 : 0.15,
          }}
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/services/pqlm" className="text-pink-500 hover:text-pink-600 transition-colors inline-flex items-center gap-2">
              ← Back to PQLM
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2))'
                    : 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))',
                  border: `1px solid ${theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'}`,
                }}
              >
                <span className="text-pink-500 text-sm">PQLM Service</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Readiness Testing
              </h1>
              <p className="text-xl leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Ensure your product is truly ready for production across infrastructure, performance, security, and operations. Readiness Testing provides a final, uncompromising validation layer that confirms your systems, teams, and environments are prepared for real-world scale.
              </p>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                With rigorous go-live validation and controlled sign-off, organizations achieve a 99.9% launch success rate with zero critical production incidents, turning releases into predictable outcomes—not high-risk events.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #EC4899 0%, #9333EA 100%)',
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
                    ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2))'
                    : 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))',
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
                <Shield className="w-16 h-16 text-pink-500 mb-4" />
                <h3 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Production-Grade Validation</h3>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Validate every critical dimension of readiness before deployment without assumptions and last-minute surprises.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="rounded-lg p-4"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 1)',
                    }}
                  >
                    <div className="text-3xl gradient-text">99.9%</div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Launch success</div>
                  </div>
                  <div
                    className="rounded-lg p-4"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 1)',
                    }}
                  >
                    <div className="text-3xl gradient-text">Zero</div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Critical incidents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}>Related <span className="gradient-text">Capabilities</span></h2>
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
                  <h3 className="text-xl mb-3 group-hover:text-pink-500 transition-colors" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
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
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}><span className="gradient-text">Core Capabilities</span></h2>
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
                      ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2))'
                      : 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))',
                  }}
                >
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                </div>
                <span className="text-lg" style={{ color: 'var(--text-secondary)' }}>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl md:text-5xl mb-12" style={{ color: 'var(--text-primary)' }}><span className="gradient-text">Our Readiness Validation Model</span></h2>
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
                      background: 'linear-gradient(135deg, #EC4899, #9333EA)',
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
              Additional platforms aligned to production environments
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}><span className="gradient-text">Client Impact</span></h2>
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
                    ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2))'
                    : 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))',
                  color: '#EC4899',
                  border: `1px solid ${theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'}`,
                }}
              >
                Enterprise Platform Launch
              </span>
              <h3 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Delivering Zero-Incident Go-Live at Global Scale</h3>
              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                A global enterprise conducted full readiness validation before a major production rollout across regions.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl gradient-text mb-2">
                      {metric.value}
                    </div>
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
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>Ready for an Efficient Go-Live?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>Validate production readiness with confidence before users experience it.</p>
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
              to="/services/pqlm" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300" 
              style={{ 
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF', 
                border: '1px solid var(--border-color)', 
                color: 'var(--text-primary)' 
              }}
            >
              Explore More PQLM Services
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}