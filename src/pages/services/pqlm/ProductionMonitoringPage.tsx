import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Eye, Activity, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { PageContainer } from '../../../components/PageContainer';
import { useTheme } from '../../../contexts/ThemeContext';

export function ProductionMonitoringPage() {
  const { theme } = useTheme();

  const relatedServices = [
    {
      icon: Shield,
      title: 'Readiness Testing',
      description: 'Validate production readiness before go-live',
      gradient: 'from-blue-500 to-cyan-400',
      link: '/services/pqlm/readiness-testing'
    },
    {
      icon: TrendingUp,
      title: 'Performance Engineering',
      description: 'Ensure resilience under peak loads',
      gradient: 'from-purple-500 to-pink-500',
      link: '/services/x-first/performance-engineering'
    },
    {
      icon: CheckCircle2,
      title: 'Process Governance',
      description: 'Align monitoring with quality and compliance metrics',
      gradient: 'from-cyan-400 to-blue-500',
      link: '/services/pqlm/process-governance'
    }
  ];

  const capabilities = [
    'Real-time monitoring',
    'Error detection, tracking, and alerting',
    'Performance metrics and analysis',
    'User behavior and experience monitoring',
    'Infrastructure and dependency checks',
    'Incident response and remediation'
  ];

  const processSteps = [
    { title: 'Setup', description: 'Define scope and configure infrastructure' },
    { title: 'Instrumentation', description: 'Deploy agents and enable telemetry' },
    { title: 'Alerting', description: 'Configure intelligent, noise-reduced alerts' },
    { title: 'Analysis', description: 'Detect and analyze issues in real time' },
    { title: 'Response', description: 'Trigger automated incident resolution' }
  ];

  const tools = ['New Relic', 'Datadog', 'Splunk', 'Grafana', 'PagerDuty', 'Sentry'];

  const metrics = [
    { value: '99.99%', label: 'System availability', sublabel: '' },
    { value: '< 5 min', label: 'Issue detection time', sublabel: '' },
    { value: '95%', label: 'Alerts raised before user impact', sublabel: '' }
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/services/pqlm" className="text-blue-500 hover:text-blue-600 transition-colors inline-flex items-center gap-2">
              ← Back to PQLM
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
                  border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}`,
                }}
              >
                <span className="text-blue-500 text-sm">PQLM Service</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Production Monitoring
              </h1>
              <p className="text-xl leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Continuously monitor production systems to detect, diagnose, and resolve issues before they impact users. Production Monitoring provides real-time visibility, intelligent alerting, and rapid response to maintain 99.99% uptime and consistent user experience.
              </p>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                Our monitoring framework proactively identifies 95% of issues within 5 minutes, enabling fast remediation and operational confidence.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
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
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
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
                <Eye className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Proactive Observability</h3>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Gain end-to-end visibility across applications, infrastructure, and user experience with real-time insights and actionable alerts.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="rounded-xl p-4"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(241, 245, 249, 1)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <div className="text-blue-500 text-2xl mb-1">99.99%</div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Uptime</div>
                  </div>
                  <div
                    className="rounded-xl p-4"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(241, 245, 249, 1)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <div className="text-blue-500 text-2xl mb-1">{'< 5 min'}</div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Detection time</div>
                  </div>
                  <div
                    className="rounded-xl p-4"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(241, 245, 249, 1)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <div className="text-blue-500 text-2xl mb-1">95%</div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Issues detected proactively</div>
                  </div>
                  <div
                    className="rounded-xl p-4"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(241, 245, 249, 1)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <div className="text-blue-500 text-2xl mb-1">24×7</div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Monitoring coverage</div>
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
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-blue-500 transition-colors" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
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
            ? 'rgba(30, 41, 59, 0.3)'
            : 'rgba(241, 245, 249, 1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}><span className="gradient-text">Key Monitoring Capabilities</span></h2>
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
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-1" style={{ color: 'var(--text-primary)' }}>{capability}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl md:text-5xl mb-12" style={{ color: 'var(--text-primary)' }}><span className="gradient-text">Monitoring Methodology</span></h2>
          <div className="relative">
            <div
              className="absolute top-8 left-0 right-0 h-0.5 hidden lg:block"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(90deg, #3B82F6, #06B6D4, #9333EA)'
                  : 'linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3), rgba(147, 51, 234, 0.3))',
              }}
            ></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div
                    className="rounded-full w-16 h-16 flex items-center justify-center text-white mb-4 relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                      boxShadow: 'var(--shadow-accent)',
                    }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
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
            ? 'rgba(30, 41, 59, 0.3)'
            : 'rgba(241, 245, 249, 1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}>Tools & <span className="gradient-text">Technologies</span></h2>
          <div
            className="backdrop-blur-sm rounded-2xl p-8"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
              {tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center gap-3 group">
                  <div
                    className="rounded-xl w-full aspect-square flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(241, 245, 249, 1)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <Activity className="w-8 h-8 text-blue-500/50 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>{tool}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>
              Custom integrations aligned to your production architecture
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}><span className="gradient-text">Client Impact</span></h2>
          <div
            className="backdrop-blur-sm rounded-2xl overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div
              className="h-48 flex items-center justify-center"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))'
                  : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              <Eye className="w-16 h-16" style={{ color: theme === 'dark' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(6, 182, 212, 0.5)' }} />
            </div>
            <div className="p-8">
              <span
                className="inline-block px-4 py-2 text-sm rounded-lg mb-4"
                style={{
                  background: theme === 'dark'
                    ? 'rgba(59, 130, 246, 0.2)'
                    : 'rgba(59, 130, 246, 0.1)',
                  color: '#3B82F6',
                  border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}`,
                }}
              >
                E-commerce
              </span>
              <h3 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Achieving 99.99% Uptime Through Proactive Monitoring</h3>
              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                A large e-commerce platform implemented comprehensive production monitoring to ensure stability during peak traffic events. Intelligent alerting and automated response significantly reduced downtime and improved customer experience.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl text-blue-500 mb-2">{metric.value}</div>
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
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>Ready to Operate with Confidence?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>Detect issues early, respond faster, and protect user experience with always-on production monitoring.</p>
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