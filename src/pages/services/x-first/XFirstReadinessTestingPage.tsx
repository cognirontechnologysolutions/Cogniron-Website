import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { PageContainer } from '../../../components/PageContainer';
import { useTheme } from '../../../contexts/ThemeContext';
import { ServicePill } from '../../../components/ServicePill';

export function XFirstReadinessTestingPage() {
  const { theme } = useTheme();
  const relatedServices = [
    {
      icon: Clock,
      title: 'XFirst Process Governance',
      description: 'Quality gates and compliance',
      gradient: 'from-cyan-400 to-blue-500',
      link: '/services/x-first/xfirst-process-governance'
    },
    {
      icon: CheckCircle2,
      title: 'XFirst Build Verification',
      description: 'Rapid smoke testing',
      gradient: 'from-blue-500 to-cyan-400',
      link: '/services/x-first/xfirst-build-verification'
    }
  ];

  const capabilities = [
    'Pre-release readiness assessment',
    'Production environment validation',
    'Go/No-go decision criteria',
    'Cross-functional readiness checks',
    'Performance benchmarking',
    'Security compliance verification'
  ];

  const processSteps = [
    { title: 'Criteria', description: 'Define go-live requirements' },
    { title: 'Validation', description: 'Execute readiness checks' },
    { title: 'Assessment', description: 'Evaluate all checkpoints' },
    { title: 'Decision', description: 'Go/No-go recommendation' },
    { title: 'Sign-off', description: 'Stakeholder approval' }
  ];

  const tools = ['Jira', 'TestRail', 'qTest', 'Azure DevOps', 'ServiceNow', 'PagerDuty'];

  const metrics = [
    { value: '99.9%', label: 'Go-live Success', sublabel: 'First-time deployment' },
    { value: 'Zero', label: 'Rollbacks', sublabel: 'Due to readiness gaps' },
    { value: '100%', label: 'Criteria Met', sublabel: 'Before production' }
  ];

  return (
    <PageContainer>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/services/x-first" className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
              ← Back to X-first
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <ServicePill type="xfirst">X-FIRST Service</ServicePill>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Readiness Testing
              </h1>
              <p className="text-xl leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Comprehensive go-live readiness validation ensuring production success. Early assessment of deployment readiness across performance, security, functionality, and user experience.
              </p>
              <p className="text-lg mb-8" style={{ color: 'var(--text-tertiary)' }}>
                Achieve 99.9% go-live success with zero rollbacks, ensuring 100% readiness criteria are met before production deployment.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              <div 
                className="relative backdrop-blur-sm rounded-3xl p-8"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                  border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(226, 232, 240, 0.8)',
                  boxShadow: theme === 'dark' ? 'none' : '0 4px 24px rgba(0, 0, 0, 0.06)'
                }}
              >
                <Clock className="w-16 h-16 mb-4" style={{ color: theme === 'dark' ? '#22D3EE' : '#0891B2' }} />
                <h3 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Production Confidence</h3>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Deploy with certainty. Comprehensive readiness validation across all critical dimensions before go-live.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className="rounded-lg p-4"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(226, 232, 240, 0.3)',
                      border: theme === 'dark' ? 'none' : '1px solid rgba(226, 232, 240, 0.5)'
                    }}
                  >
                    <div className="text-3xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">99.9%</div>
                    <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Success</div>
                  </div>
                  <div 
                    className="rounded-lg p-4"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(226, 232, 240, 0.3)',
                      border: theme === 'dark' ? 'none' : '1px solid rgba(226, 232, 240, 0.5)'
                    }}
                  >
                    <div className="text-3xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zero</div>
                    <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Rollbacks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}>Related <span className="gradient-text">Services</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 transition-all group-hover:scale-110 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                  <p className="text-slate-400">{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}>Key <span className="gradient-text">Capabilities</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-slate-900/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-slate-300 text-lg">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl md:text-5xl mb-12" style={{ color: 'var(--text-primary)' }}><span className="gradient-text">Our Process / Methodology</span></h2>
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
            <div className="grid grid-cols-5 gap-4 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xl mb-4 relative z-10 shadow-lg shadow-cyan-400/50">
                    {index + 1}
                  </div>
                  <h3 className="text-white text-center mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm text-center px-2">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}>Tools & <span className="gradient-text">Technologies</span></h2>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-6 gap-8 mb-6">
              {tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div className="bg-slate-800/50 border border-white/10 rounded-xl w-full h-20 flex items-center justify-center hover:border-cyan-400/50 transition-all">
                    <span className="text-slate-500 text-xs">Logo</span>
                  </div>
                  <p className="text-slate-400 text-sm text-center">{tool}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm text-center">
              + More tools and frameworks based on project requirements
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}><span className="gradient-text">Success Stories</span></h2>
          <div className="flex items-center justify-between">
            <Link to="/case-studies" className="text-cyan-500 hover:text-cyan-600 transition-colors ml-auto">
              View All Case Studies →
            </Link>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all">
            <div className="bg-slate-800/50 h-40 flex items-center justify-center border-b border-white/10">
              <p className="text-slate-500">Client Logo / Image</p>
            </div>
            <div className="p-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-400 text-sm rounded-lg border border-cyan-400/30 mb-4">
                Enterprise Deployment
              </span>
              <h3 className="text-2xl text-white mb-4">99.9% go-live success with comprehensive readiness testing</h3>
              <p className="text-slate-400 mb-6">
                A global enterprise achieved flawless production deployments with comprehensive readiness testing, eliminating rollbacks and ensuring 100% criteria compliance...
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      {metric.value}
                    </div>
                    <div className="text-white mb-1">{metric.label}</div>
                    <div className="text-slate-500 text-sm">{metric.sublabel}</div>
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
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>Ready to <span className="gradient-text">Get Started</span>?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>Validate production readiness with every sprint increment</p>
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
              to="/services/x-first" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300" 
              style={{ 
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF', 
                border: '1px solid var(--border-color)', 
                color: 'var(--text-primary)' 
              }}
            >
              Explore More X-First Services
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}