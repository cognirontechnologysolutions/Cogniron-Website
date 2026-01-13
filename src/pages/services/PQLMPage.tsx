import React from 'react';
import { Target, CheckCircle2, Workflow, Shield, GitBranch, Users, Gauge, FileCheck, Eye, Settings, Layers } from 'lucide-react';
import { ServicePageHero } from '../../components/ServicePageHero';
import { FeatureGrid } from '../../components/FeatureGrid';
import { CTASection } from '../../components/CTASection';
import { PageContainer } from '../../components/PageContainer';
import { useTheme } from '../../contexts/ThemeContext';
import { useGradientShimmer } from '../../hooks/useGradientShimmer';

export function PQLMPage() {
  const { theme } = useTheme();
  useGradientShimmer();

  const capabilities = [
    {
      icon: FileCheck,
      title: 'Requirement Ambiguity Engineering',
      description: 'Eliminate unclear or incomplete requirements using structured analysis and validation techniques.',
      link: '/services/pqlm/requirement-ambiguity-engineering',
    },
    {
      icon: CheckCircle2,
      title: 'Functional Testing',
      description: 'Validate every functional workflow and ensure expected system behavior with precision.',
      link: '/services/pqlm/functional-testing',
    },
    {
      icon: GitBranch,
      title: 'Integration Testing',
      description: 'Test interactions across modules, APIs, and third-party systems for seamless interoperability.',
      link: '/services/pqlm/integration-testing',
    },
    {
      icon: Settings,
      title: 'Compatibility Testing',
      description: 'Ensure consistent performance across browsers, platforms, OS versions, and device types.',
      link: '/services/pqlm/compatibility-testing',
    },
    {
      icon: Gauge,
      title: 'Build Verification Testing',
      description: 'Rapid smoke testing to confirm build stability before deeper validation begins.',
      link: '/services/pqlm/build-verification-testing',
    },
    {
      icon: Users,
      title: 'User Acceptance Testing',
      description: 'Validate business fitment and user expectations through structured acceptance cycles.',
      link: '/services/pqlm/user-acceptance-testing',
    },
    {
      icon: Shield,
      title: 'Readiness Testing',
      description: 'Pre-production checks confirming operational, functional, and release readiness.',
      link: '/services/pqlm/readiness-testing',
    },
    {
      icon: Workflow,
      title: 'TestOps',
      description: 'Optimize test operations with automation, virtualization, and continuous integration workflows.',
      link: '/services/pqlm/testops',
    },
    {
      icon: Target,
      title: 'Process Governance',
      description: 'Enforce standardized quality processes and ensure alignment across teams and stages.',
      link: '/services/pqlm/process-governance',
    },
    {
      icon: Eye,
      title: 'Production Monitoring',
      description: 'Real-time quality intelligence that surfaces issues before they impact end users.',
      link: '/services/pqlm/production-monitoring',
    },
    {
      icon: Layers,
      title: 'DevOps Toolchain Integration (TEM/TDM)',
      description: 'End-to-end CI/CD pipelines with environment orchestration and data provisioning.',
      link: '/services/pqlm/devops-toolchain',
    },
  ];

  const benefits = [
    {
      title: '60% Faster Release Cycles',
      description: 'Accelerate delivery through intelligent automation and streamlined workflows.',
    },
    {
      title: '40% Cost Optimization',
      description: 'Reduce operational overhead with reusability, efficiency, and integrated tooling.',
    },
    {
      title: '99.9% Quality Compliance',
      description: 'Maintain enterprise-grade reliability across every release.',
    },
    {
      title: 'Complete Lifecycle Coverage',
      description: 'Quality engineered across the full SDLC—from planning to production.',
    },
  ];

  const useCases = [
    {
      title: 'Enterprise Software Modernization',
      description: 'Global financial services firm migrating legacy systems to cloud-native architecture.',
      results: ['95% fewer defects', '3× faster deployments', 'Zero production incidents over 6 months'],
    },
    {
      title: 'SaaS Platform Acceleration',
      description: 'Fast-growing B2B SaaS provider with multi-tenant architecture.',
      results: ['99.99% uptime', '50% faster feature rollout', 'SOC 2 compliance achieved'],
    },
    {
      title: 'Mobile Commerce Revamp',
      description: 'Retail brand serving 10M+ mobile users.',
      results: ['40% better app ratings', '2× increase in conversions', 'Zero critical post-release defects'],
    },
  ];

  return (
    <PageContainer>
      <ServicePageHero
        title="PQLM"
        subtitle="Product Quality Lifecycle Management"
        description="AI-augmented, end-to-end quality management that spans your entire product journey, from requirement definition to production intelligence that ensures every release meets enterprise-grade standards."
        icon={Target}
        gradient="from-blue-500 to-cyan-400"
        badge="Product-specific journey"
      />

      {/* Overview Section */}
      <section className="relative py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-4xl mb-6" style={{ color: 'var(--text-primary)' }}>
                A Unified Quality Framework
              </h2>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                PQLM provides a complete, lifecycle-wide approach to software quality—eliminating ambiguity early, accelerating testing mid-cycle, and maintaining production resilience post-release.
              </p>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                Designed to integrate seamlessly with your DevOps ecosystem, PQLM brings governance, automation, analytics, and continuous monitoring into a single cohesive framework. With PQLM, quality becomes predictable, measurable, and strategically differentiating.
              </p>
              <div className="flex flex-wrap gap-3">
                {['ISO 9001', 'CMMI Level 5', 'Agile/DevOps Ready', 'CI/CD Native'].map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 rounded-lg text-sm"
                    style={{
                      background: theme === 'dark'
                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))'
                        : 'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(6, 182, 212, 0.08))',
                      border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(37, 99, 235, 0.15)'}`,
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                className="backdrop-blur-sm rounded-2xl p-8"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <h3 className="text-xl mb-6" style={{ color: 'var(--text-primary)' }}>Operational Metrics That Matter</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Test Coverage', value: '95%+' },
                    { label: 'Defect Detection Efficiency', value: '99%' },
                    { label: 'Automation Coverage', value: '80%+' },
                    { label: 'Mean Time to Resolution', value: '<4 hours' },
                  ].map((metric) => (
                    <div key={metric.label} className="flex justify-between items-center">
                      <span style={{ color: 'var(--text-secondary)' }}>{metric.label}</span>
                      <span className="text-2xl gradient-text">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Core <span className="gradient-text">Capabilities</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Ten specialized disciplines engineered to deliver uncompromising product quality.
              </p>
            </div>
            <FeatureGrid features={capabilities} columns={3} />
          </div>

          {/* Benefits */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Meaningful Business <span className="gradient-text">Outcomes</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div className="text-3xl gradient-text mb-3">
                    {benefit.title}
                  </div>
                  <p style={{ color: 'var(--text-secondary)' }}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Success in <span className="gradient-text">Action</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                How leading enterprises use PQLM to scale quality with confidence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-8 transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{useCase.title}</h3>
                  <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>{useCase.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>Outcomes:</div>
                    {useCase.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm" style={{ color: 'var(--accent-primary)' }}>
                        <span className="mr-2">•</span>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
              PQLM Delivery <span className="gradient-text">Blueprint</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A proven, structured implementation approach enabling rapid adoption.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div
              className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px"
              style={{
                background: 'linear-gradient(to bottom, #2563EB, #06B6D4, #A855F7)',
              }}
            ></div>

            <div className="space-y-12">
              {[
                { phase: 'Assessment', duration: '1–2 weeks', description: 'Analyze current QA operations, define baselines, and establish measurable KPIs.' },
                { phase: 'Design', duration: '2–3 weeks', description: 'Build a tailored testing strategy, tool selection framework, and governance model.' },
                { phase: 'Implementation', duration: '4–8 weeks', description: 'Deploy automation, integrate tools, enable reporting, and train delivery teams.' },
                { phase: 'Optimization', duration: 'Continuous', description: 'Refine, improve, and evolve processes through ongoing metrics and feedback.' },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row items-center gap-8"
                >
                  {/* Left Side */}
                  <div className="flex-1 w-full lg:text-right">
                    {index % 2 === 0 ? (
                      <div
                        className="backdrop-blur-sm rounded-2xl p-6"
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          border: '1px solid var(--border-color)',
                          boxShadow: 'var(--shadow-sm)',
                        }}
                      >
                        <h3 className="text-xl mb-2" style={{ color: 'var(--text-primary)' }}>{step.phase}</h3>
                        <p className="text-sm mb-3" style={{ color: 'var(--accent-primary)' }}>{step.duration}</p>
                        <p style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                      </div>
                    ) : (
                      <div className="hidden lg:block"></div>
                    )}
                  </div>

                  {/* Center Timeline Marker */}
                  <div
                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
                      boxShadow: 'var(--shadow-accent)',
                    }}
                  >
                    {index + 1}
                  </div>

                  {/* Right Side */}
                  <div className="flex-1 w-full lg:text-left">
                    {index % 2 === 1 ? (
                      <div
                        className="backdrop-blur-sm rounded-2xl p-6"
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          border: '1px solid var(--border-color)',
                          boxShadow: 'var(--shadow-sm)',
                        }}
                      >
                        <h3 className="text-xl mb-2" style={{ color: 'var(--text-primary)' }}>{step.phase}</h3>
                        <p className="text-sm mb-3" style={{ color: 'var(--accent-primary)' }}>{step.duration}</p>
                        <p style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                      </div>
                    ) : (
                      <div className="hidden lg:block"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Elevate Your Entire Quality Lifecycle"
        description="Let's explore how PQLM can modernize your QA framework, reduce release risk, and accelerate product delivery."
        primaryButtonText="Schedule Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Case Studies"
        secondaryButtonLink="/case-studies"
      />
    </PageContainer>
  );
}