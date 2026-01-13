import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Workflow, Zap, GitMerge, ArrowRight } from 'lucide-react';
import { PageContainer } from '../../../components/PageContainer';
import { useTheme } from '../../../contexts/ThemeContext';

export function XFirstTestOpsPage() {
  const { theme } = useTheme();

  const relatedServices = [
    { icon: Zap, title: 'Test Automation', description: 'Automated execution and coverage', gradient: 'from-cyan-400 to-blue-500', link: '/services/x-first/test-automation' },
    { icon: GitMerge, title: 'XFirst DevOps ToolChain', description: 'End-to-end CI/CD tooling', gradient: 'from-blue-500 to-cyan-400', link: '/services/x-first/xfirst-devops-toolchain' },
    { icon: Workflow, title: 'XFirst Process Governance', description: 'Quality gate automation', gradient: 'from-cyan-500 to-blue-600', link: '/services/x-first/xfirst-process-governance' }
  ];

  const capabilities = ['Pipeline-first test orchestration', 'Intelligent parallel test execution', 'Dynamic test environment management', 'Smart test selection and prioritization', 'Real-time test reporting and insights', 'CI/CD-native integration'];
  const processSteps = [
    { title: 'Design', description: 'Define test pipeline workflows' },
    { title: 'Parallelize', description: 'Distribute tests across nodes' },
    { title: 'Execute', description: 'Run optimized test suites' },
    { title: 'Report', description: 'Real-time dashboard insights' },
    { title: 'Optimize', description: 'Continuously improve pipelines' }
  ];
  const tools = ['Jenkins', 'GitLab CI', 'Azure DevOps', 'CircleCI', 'GitHub Actions', 'ArgoCD'];
  const metrics = [
    { value: '+60%', label: 'Pipeline Speed', sublabel: '' },
    { value: '5x', label: 'Parallel Tests', sublabel: '' },
    { value: '99.5%', label: 'Uptime', sublabel: '' }
  ];

  return (
    <PageContainer>
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="absolute inset-0" style={{ opacity: theme === 'dark' ? 0.3 : 0.15 }}>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/services/x-first" className="text-cyan-500 hover:text-cyan-600 transition-colors inline-flex items-center gap-2">← Back to X-FIRST</Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(59, 130, 246, 0.2))' : 'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(59, 130, 246, 0.1))', border: `1px solid ${theme === 'dark' ? 'rgba(34, 211, 238, 0.3)' : 'rgba(34, 211, 238, 0.2)'}` }}>
                <span className="text-cyan-500 text-sm">X-FIRST Service</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6" style={{ color: 'var(--text-primary)' }}>TestOps <span style={{ fontSize: '0.5em' }}>(Pipeline-first test orchestration)</span></h1>
              <p className="text-xl leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>Orchestrate intelligent test workflows with pipeline-native automation. Achieve 60% faster pipelines, 5x parallel test execution, and 99.5% uptime.</p>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>Optimize test selection, manage environments dynamically, and deliver real-time insights with CI/CD-integrated TestOps.</p>
              <Link to="/contact" className="inline-block px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(135deg, #22D3EE 0%, #3B82F6 100%)', color: '#FFFFFF', boxShadow: 'var(--shadow-accent)' }}>Schedule Consultation</Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-2xl" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(59, 130, 246, 0.2))' : 'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(59, 130, 246, 0.1))' }}></div>
              <div className="relative backdrop-blur-sm rounded-3xl p-8" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
                <Workflow className="w-16 h-16 text-cyan-500 mb-4" />
                <h3 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Optimized Pipelines, Built In</h3>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>Parallel execution and intelligent orchestration. Real-time visibility into performance and health.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 1)' }}><div className="text-3xl gradient-text">+60%</div><div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Faster</div></div>
                  <div className="rounded-lg p-4" style={{ backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 1)' }}><div className="text-3xl gradient-text">5x</div><div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Parallel</div></div>
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
                <Link key={index} to={service.link} className="group relative backdrop-blur-sm rounded-2xl p-8 transition-all duration-300" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 transition-all group-hover:scale-110 shadow-lg`}><Icon className="w-7 h-7 text-white" /></div>
                  <h3 className="text-xl mb-3 group-hover:text-cyan-500 transition-colors" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}>Key <span className="gradient-text">Capabilities</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start gap-4 backdrop-blur-sm rounded-xl p-6 transition-all duration-300" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(59, 130, 246, 0.2))' : 'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(59, 130, 246, 0.1))' }}><CheckCircle2 className="w-5 h-5 text-cyan-500" /></div>
                <span className="text-lg" style={{ color: 'var(--text-secondary)' }}>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl md:text-5xl mb-12" style={{ color: 'var(--text-primary)' }}><span className="gradient-text">Our Process / Methodology</span></h2>
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-px" style={{ background: theme === 'dark' ? 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.5), transparent)' : 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.3), transparent)' }}></div>
            <div className="grid grid-cols-5 gap-4 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl mb-4 relative z-10" style={{ background: 'linear-gradient(135deg, #22D3EE, #3B82F6)', boxShadow: 'var(--shadow-accent)' }}>{index + 1}</div>
                  <h3 className="text-center mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                  <p className="text-sm text-center px-2" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}>Tools & <span className="gradient-text">Technologies</span></h2>
          <div className="backdrop-blur-sm rounded-2xl p-8" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <div className="grid grid-cols-6 gap-8 mb-6">
              {tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div className="rounded-xl w-full h-20 flex items-center justify-center transition-all" style={{ backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 1)', border: '1px solid var(--border-color)' }}><span className="text-xs" style={{ color: 'var(--text-secondary)' }}>Logo</span></div>
                  <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>{tool}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>+ More tools and frameworks based on project requirements</p>
          </div>
        </div>
      </section>

      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ color: 'var(--text-primary)' }}><span className="gradient-text">Success Stories</span></h2>
          <div className="flex items-center justify-between">
            <Link to="/case-studies" className="text-cyan-500 hover:text-cyan-600 transition-colors ml-auto">View All Case Studies →</Link>
          </div>
          <div className="backdrop-blur-sm rounded-2xl overflow-hidden transition-all" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
            <div className="h-40 flex items-center justify-center" style={{ backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 1)', borderBottom: '1px solid var(--border-color)' }}><p style={{ color: 'var(--text-secondary)' }}>Client Logo / Image</p></div>
            <div className="p-8">
              <span className="inline-block px-4 py-2 text-sm rounded-lg mb-4" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(59, 130, 246, 0.2))' : 'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(59, 130, 246, 0.1))', color: '#22D3EE', border: `1px solid ${theme === 'dark' ? 'rgba(34, 211, 238, 0.3)' : 'rgba(34, 211, 238, 0.2)'}` }}>Cloud Platform</span>
              <h3 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Cloud Platform</h3>
              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>Achieved 60% faster pipelines, 5x parallel test execution, and 99.5% uptime through intelligent TestOps orchestration.</p>
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
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>Accelerate with <span className="gradient-text">TestOps</span></h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>Build faster, smarter pipelines with orchestrated test automation.</p>
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