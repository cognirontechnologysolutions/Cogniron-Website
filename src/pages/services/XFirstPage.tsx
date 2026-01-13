import React from 'react';
import { Zap, FileCheck, Gauge, GitBranch, Bot, TrendingUp, Shield, Workflow, Settings, Code, Rocket } from 'lucide-react';
import { ServicePageHero } from '../../components/ServicePageHero';
import { FeatureGrid } from '../../components/FeatureGrid';
import { CTASection } from '../../components/CTASection';
import { PageContainer } from '../../components/PageContainer';
import { useTheme } from '../../contexts/ThemeContext';
import { useGradientShimmer } from '../../hooks/useGradientShimmer';

export function XFirstPage() {
  const { theme } = useTheme();
  useGradientShimmer();

  const capabilities = [
    {
      icon: FileCheck,
      title: 'Requirement Ambiguity Engineering',
      description: 'Eliminate unclear requirements to prevent early defects.',
      link: '/services/x-first/xfirst-requirement-ambiguity',
    },
    {
      icon: Gauge,
      title: 'Build Verification Testing',
      description: 'Instant smoke checks for build stability within minutes.',
      link: '/services/x-first/xfirst-build-verification',
    },
    {
      icon: Code,
      title: 'Functional Testing',
      description: 'Early functional validation aligned to developer workflows.',
      link: '/services/x-first/xfirst-functional-testing',
    },
    {
      icon: GitBranch,
      title: 'Integration Testing',
      description: 'Always-on integration checks that catch issues at the boundary.',
      link: '/services/x-first/xfirst-integration-testing',
    },
    {
      icon: Rocket,
      title: 'Readiness Testing',
      description: 'Comprehensive pre-release validation ensuring a seamless go-live.',
      link: '/services/x-first/xfirst-readiness-testing',
    },
    {
      icon: Bot,
      title: 'Test Automation',
      description: 'Scalable automation frameworks for fast and reliable regression coverage.',
      link: '/services/x-first/test-automation',
    },
    {
      icon: TrendingUp,
      title: 'Performance Engineering',
      description: 'Shift-left performance diagnostics built into CI/CD.',
      link: '/services/x-first/performance-engineering',
    },
    {
      icon: Shield,
      title: 'Security Engineering',
      description: 'Early-stage vulnerability detection and secure coding validation.',
      link: '/services/x-first/security-engineering',
    },
    {
      icon: Workflow,
      title: 'Process Governance',
      description: 'Automated quality gates that enforce standards across all stages.',
      link: '/services/x-first/xfirst-process-governance',
    },
    {
      icon: Settings,
      title: 'TestOps',
      description: 'Continuous testing operations tightly integrated with DevOps.',
      link: '/services/x-first/xfirst-testops',
    },
    {
      icon: Zap,
      title: 'DevOps Tool Chain',
      description: 'A complete CI/CD environment built for speed, reliability, and automation.',
      link: '/services/x-first/xfirst-devops-toolchain',
    },
  ];

  const shiftLeftBenefits = [
    {
      label: 'Defect Detection',
      traditional: '80% of defects discovered in production',
      xFirst: '80% of defects detected before code review',
      improvement: 'Defect Detection',
    },
    {
      label: 'Testing Timeline',
      traditional: 'Testing begins after development',
      xFirst: 'Testing starts at requirements',
      improvement: 'Testing Timeline',
    },
    {
      label: 'Release Velocity',
      traditional: 'Manual testing slows releases',
      xFirst: 'Automated testing runs 24/7 on every commit',
      improvement: 'Release Velocity',
    },
    {
      label: 'Quality Model',
      traditional: 'Quality is a final checkpoint',
      xFirst: 'Quality is built into every stage of development',
      improvement: 'Quality Model',
    },
  ];

  const automationFrameworks = [
    {
      category: 'Web Automation',
      tools: 'Selenium WebDriver • Playwright • Cypress • Puppeteer',
      coverage: '95%+ UI coverage',
    },
    {
      category: 'API Testing',
      tools: 'REST Assured • Postman • Karate DSL • SoapUI',
      coverage: '100% endpoint validation',
    },
    {
      category: 'Mobile Testing',
      tools: 'Appium • Detox • XCUITest • Espresso',
      coverage: 'Native support for iOS & Android',
    },
    {
      category: 'Performance Testing',
      tools: 'JMeter • Gatling • K6 • Locust',
      coverage: 'Load, stress, and scalability checks',
    },
  ];

  return (
    <PageContainer>
      <ServicePageHero
        title="X-FIRST"
        subtitle="Shift-Left Quality Engineering"
        description="Embed quality from the very first requirement with shift-left testing, intelligent automation, and continuous validation across your entire SDLC."
        icon={Zap}
        gradient="from-cyan-400 to-blue-500"
        badge="Engineering with purpose"
      />

      {/* Overview Section */}
      <section className="relative py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-4xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Shift <span className="gradient-text">Quality</span> Left
              </h2>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                X-FIRST redefines how quality is engineered. By shifting testing and validation to the earliest stages of development, you prevent defects before they occur and eliminate downstream waste.
              </p>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                Integrated seamlessly into Agile and DevOps ecosystems, X-FIRST enables continuous feedback loops—from first commit to deployment—empowering teams to deliver cleaner, faster, and more reliable releases.
              </p>
              <div
                className="rounded-xl p-6"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))'
                    : 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(59, 130, 246, 0.08))',
                  border: `1px solid ${theme === 'dark' ? 'rgba(6, 182, 212, 0.2)' : 'rgba(6, 182, 212, 0.15)'}`,
                }}
              >
                <h4 className="mb-3" style={{ color: 'var(--text-primary)' }}>The X-FIRST Philosophy</h4>
                <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Experience-First: Prioritize user impact and real-world behavior early.</li>
                  <li>• Quality-First: Engineer quality into every artifact—not after the fact.</li>
                  <li>• Shift-Left: Validate early, validate often, validate continuously.</li>
                </ul>
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
                <h3 className="text-xl mb-6" style={{ color: 'var(--text-primary)' }}>Shift-Left Impact</h3>
                <div className="space-y-6">
                  {[
                    { metric: '10×', label: 'Lower Fix Costs' },
                    { metric: '60%', label: 'Faster Release Cycles' },
                    { metric: '90%', label: 'Automation Coverage' },
                    { metric: '99.9%', label: 'Quality Rating' },
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</span>
                        <span className="text-2xl gradient-text">
                          {stat.metric}
                        </span>
                      </div>
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
                End-to-End <span className="gradient-text">X-FIRST Capabilities</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Eleven integrated engineering practices that embed quality throughout your SDLC.
              </p>
            </div>
            <FeatureGrid features={capabilities} columns={3} />
          </div>

          {/* Shift-Left Benefits */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Traditional vs <span className="gradient-text">X-FIRST</span> Approach
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                See the dramatic difference shift-left testing makes.
              </p>
            </div>
            <div className="space-y-6">
              {shiftLeftBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-6"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div>
                      <div className="text-xs mb-2 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                        Traditional Approach
                      </div>
                      <p style={{ color: 'var(--text-secondary)' }}>{benefit.traditional}</p>
                    </div>
                    <div className="text-center">
                      <div
                        className="inline-block px-4 py-2 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, #06B6D4, #2563EB)',
                          color: '#FFFFFF',
                        }}
                      >
                        {benefit.improvement}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs mb-2 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                        X-FIRST Approach
                      </div>
                      <p style={{ color: 'var(--text-primary)' }}><strong>{benefit.xFirst}</strong></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Automation Frameworks */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Automation Frameworks
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Best-in-class automation toolsets powering every layer of testing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {automationFrameworks.map((framework, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-6"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3 className="text-lg mb-4" style={{ color: 'var(--text-primary)' }}>{framework.category}</h3>
                  <ul className="space-y-2 mb-4">
                    {framework.tools.split(' • ').map((tool, idx) => (
                      <li key={idx} className="text-sm flex items-center" style={{ color: 'var(--text-secondary)' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></div>
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="text-xs px-3 py-1 rounded-full inline-block"
                    style={{
                      background: theme === 'dark'
                        ? 'rgba(6, 182, 212, 0.1)'
                        : 'rgba(6, 182, 212, 0.08)',
                      color: '#06B6D4',
                    }}
                  >
                    {framework.coverage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CI/CD Integration */}
      <section
        className="relative py-24"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.05), transparent, rgba(59, 130, 246, 0.05))'
            : 'linear-gradient(135deg, rgba(6, 182, 212, 0.03), transparent, rgba(59, 130, 246, 0.03))',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
              Seamless <span className="gradient-text">CI/CD</span> Integration
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              X-FIRST fully aligns with your DevOps workflows for uninterrupted quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                title: '1. Commit Stage',
                description: 'Unit tests, static analysis & quick smoke checks',
                time: '≤ 5 minutes',
              },
              {
                number: '2',
                title: '2. Build Stage',
                description: 'API, integration & component tests',
                time: '≤ 15 minutes',
              },
              {
                number: '3',
                title: '3. Deploy Stage',
                description: 'E2E workflows, performance & security scans',
                time: '≤ 30 minutes',
              },
            ].map((stage, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-8 text-center"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #06B6D4, #2563EB)',
                  }}
                >
                  <span className="text-white text-lg">{stage.number}</span>
                </div>
                <h3 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{stage.title}</h3>
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>{stage.description}</p>
                <div
                  className="inline-block px-4 py-2 rounded-lg text-sm"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(6, 182, 212, 0.1)' : 'rgba(6, 182, 212, 0.08)',
                    color: '#06B6D4',
                  }}
                >
                  {stage.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Shift-Left?"
        description="Transform your development lifecycle with X-FIRST and accelerate your path to release-ready quality."
        primaryButtonText="Start Your Journey"
        primaryButtonLink="/contact"
        secondaryButtonText="View Case Studies"
        secondaryButtonLink="/case-studies"
      />
    </PageContainer>
  );
}