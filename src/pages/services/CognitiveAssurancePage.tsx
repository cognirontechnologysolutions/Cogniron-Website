import React from 'react';
import { Brain, Bot, TrendingUp, Shield, Eye, Sparkles, Zap, BarChart3, AlertTriangle, Activity } from 'lucide-react';
import { ServicePageHero } from '../../components/ServicePageHero';
import { FeatureGrid } from '../../components/FeatureGrid';
import { CTASection } from '../../components/CTASection';
import { PageContainer } from '../../components/PageContainer';
import { useTheme } from '../../contexts/ThemeContext';
import { useGradientShimmer } from '../../hooks/useGradientShimmer';

export function CognitiveAssurancePage() {
  const { theme } = useTheme();
  useGradientShimmer();

  const capabilities = [
    {
      icon: Bot,
      title: 'Test Automation',
      description: 'ML models auto-generate, self-heal, and optimize test suites.',
      link: '/services/cognitive-assurance/cognitive-test-automation',
    },
    {
      icon: TrendingUp,
      title: 'Performance Testing',
      description: 'AI identifies degradation patterns before they affect users.',
      link: '/services/cognitive-assurance/cognitive-performance-testing',
    },
    {
      icon: Shield,
      title: 'Security Testing',
      description: 'Behavioral ML detects vulnerabilities and correlates threats.',
      link: '/services/cognitive-assurance/cognitive-security-testing',
    },
    {
      icon: AlertTriangle,
      title: 'SIEM Correlation',
      description: 'Automated event analysis for real-time security insight.',
      link: '/services/cognitive-assurance/siem',
    },
    {
      icon: Activity,
      title: 'Production Monitoring',
      description: 'Predictive anomaly detection with automated root-cause analysis.',
      link: '/services/cognitive-assurance/ai-production-monitoring',
    },
  ];

  const aiCapabilities = [
    {
      capability: 'Self-Healing Tests',
      description: 'Adapts to UI changes automatically',
      impact: '→ 90% reduction in maintenance',
    },
    {
      capability: 'Predictive Defect Detection',
      description: 'Identifies high-risk code before execution',
      impact: '→ 60% faster defect discovery',
    },
    {
      capability: 'AI-Generated Test Suites',
      description: 'Creates optimal cases using coverage and risk models',
      impact: '→ 3× faster suite creation',
    },
    {
      capability: 'Anomaly Pattern Recognition',
      description: 'Detects abnormal logs, events, and behaviors',
      impact: '→ 80% faster incident response',
    },
    {
      capability: 'Smart Test Prioritization',
      description: 'Executes highest-risk tests first',
      impact: '→ 50% reduction in execution time',
    },
    {
      capability: 'Automated Root-Cause Analysis',
      description: 'Maps failures directly to code changes',
      impact: '→ 70% faster debugging',
    },
  ];

  const technologies = [
    {
      category: 'Machine Learning',
      tools: 'TensorFlow • PyTorch • Scikit-learn • XGBoost',
    },
    {
      category: 'NLP',
      tools: 'GPT • BERT • spaCy • Hugging Face',
    },
    {
      category: 'Observability',
      tools: 'Prometheus • Grafana • ELK • Datadog',
    },
    {
      category: 'Test Intelligence',
      tools: 'Testim • Mabl • Applitools • Functionize',
    },
  ];

  return (
    <PageContainer>
      <ServicePageHero
        title="Cognitive Assurance"
        subtitle="AI-Powered Testing Intelligence"
        description="Harness advanced machine learning, NLP, and predictive analytics to move from reactive testing to intelligent, self-optimizing quality engineering."
        icon={Brain}
        gradient="from-pink-500 to-purple-600"
        badge="AI-Driven Quality"
      />

      {/* Overview Section */}
      <section className="relative py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div
                  className="backdrop-blur-sm rounded-2xl p-8"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <h3 className="text-xl mb-6" style={{ color: 'var(--text-primary)' }}>AI-Powered Insights</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'Test Maintenance Reduction', value: '90%', icon: Bot },
                      { label: 'Defect Prediction Accuracy', value: '95%', icon: TrendingUp },
                      { label: 'Anomaly Detection Speed', value: '<1s', icon: Zap },
                      { label: 'False Positive Reduction', value: '85%', icon: BarChart3 },
                    ].map((metric, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{
                              background: theme === 'dark'
                                ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2))'
                                : 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))',
                            }}
                          >
                            <metric.icon className="w-5 h-5 text-pink-500" />
                          </div>
                          <span style={{ color: 'var(--text-secondary)' }}>{metric.label}</span>
                        </div>
                        <span className="text-2xl gradient-text">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl mb-6" style={{ color: 'var(--text-primary)' }}>
                The Future of Quality Assurance
              </h2>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                Cognitive Assurance elevates QA from manual execution to AI-driven intelligence. Our models learn from code patterns, production behavior, and historical defects—enabling predictive testing, automated optimization, and faster release cycles.
              </p>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                We apply machine learning, deep learning, NLP, and computer vision to deliver QA that is adaptive, proactive, and deeply insightful.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-3 rounded-lg text-center"
                    style={{
                      background: theme === 'dark'
                        ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))'
                        : 'linear-gradient(135deg, rgba(236, 72, 153, 0.08), rgba(147, 51, 234, 0.08))',
                      border: `1px solid ${theme === 'dark' ? 'rgba(236, 72, 153, 0.2)' : 'rgba(236, 72, 153, 0.15)'}`,
                    }}
                  >
                    <Sparkles className="w-5 h-5 text-pink-500 mx-auto mb-1" />
                    <span className="text-pink-500 text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                <span className="gradient-text">AI-Powered</span> Capabilities
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Five core capabilities redefining your enterprise's QA
              </p>
            </div>
            <FeatureGrid features={capabilities} columns={3} />
          </div>

          {/* AI Capabilities Detail */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Cognitive Intelligence in Action
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                See how AI transforms every aspect of quality assurance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiCapabilities.map((item, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg" style={{ color: 'var(--text-primary)' }}>{item.capability}</h3>
                    <Brain className="w-5 h-5 text-pink-500 flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                  <div
                    className="px-3 py-2 rounded-lg"
                    style={{
                      background: theme === 'dark'
                        ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2))'
                        : 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))',
                      border: `1px solid ${theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'}`,
                    }}
                  >
                    <span className="text-pink-500 text-sm">{item.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Cutting-Edge <span className="gradient-text">Technology Stack</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Leverage the most advanced AI/ML frameworks and platforms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3 className="text-lg mb-4" style={{ color: 'var(--text-primary)' }}>{tech.category}</h3>
                  <div className="space-y-2 mb-4">
                    {tech.tools.split(' • ').map((tool, idx) => (
                      <div key={idx} className="text-sm flex items-center" style={{ color: 'var(--text-secondary)' }}>
                        <div className="w-1 h-1 rounded-full bg-purple-500 mr-2"></div>
                        {tool}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                    <span className="text-purple-500 text-xs">{tech.use}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section
        className="relative py-24"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.05), transparent, rgba(147, 51, 234, 0.05))'
            : 'linear-gradient(135deg, rgba(236, 72, 153, 0.03), transparent, rgba(147, 51, 234, 0.03))',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
              Real-World <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Here's how leading organizations benefited from Cognitive Assurance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: 'E-commerce Platform',
                challenge: '10k+ UI tests, inconsistent element locators',
                solution: 'Self-healing intelligent test automation',
                results: ['90% maintenance reduction', 'Zero false positives', 'Fully autonomous nightly runs'],
              },
              {
                industry: 'Financial Services',
                challenge: 'Latency spikes affecting 100k+ transactions/day',
                solution: 'Predictive anomaly detection',
                results: ['99.99% uptime', '80% faster incident response', '$2M cost avoidance'],
              },
              {
                industry: 'Healthcare SaaS',
                challenge: 'Multi-integration security compliance',
                solution: 'Cognitive security testing',
                results: ['100% compliance', '95% reduction in vulnerabilities', 'SOC 2 Type II certified'],
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-8 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-sm mb-4"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2))'
                      : 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))',
                    border: `1px solid ${theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'}`,
                    color: '#EC4899',
                  }}
                >
                  {useCase.industry}
                </div>
                <h3 className="text-lg mb-2" style={{ color: 'var(--text-primary)' }}>Challenge</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{useCase.challenge}</p>
                <h3 className="text-lg mb-2" style={{ color: 'var(--text-primary)' }}>Solution</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{useCase.solution}</p>
                <h3 className="text-lg mb-3" style={{ color: 'var(--text-primary)' }}>Results</h3>
                <ul className="space-y-2">
                  {useCase.results.map((result, idx) => (
                    <li key={idx} className="flex items-center text-purple-500 text-sm">
                      <Sparkles className="w-4 h-4 mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="relative py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
              Start Your AI Journey
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Three phases to transforming your quality assurance with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: '1. Assessment',
                description: 'Evaluate current QA maturity and identify AI opportunities.',
                duration: '1–2 weeks',
              },
              {
                phase: '2. Pilot',
                description: 'Deploy AI-driven testing in a controlled scope.',
                duration: '4–6 weeks',
              },
              {
                phase: '3. Scale',
                description: 'Roll out Cognitive Assurance across the enterprise.',
                duration: 'Ongoing',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative backdrop-blur-sm rounded-2xl p-8 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  className="absolute -top-4 left-8 w-8 h-8 rounded-full flex items-center justify-center text-white"
                  style={{
                    background: 'linear-gradient(135deg, #EC4899, #9333EA)',
                    boxShadow: 'var(--shadow-accent)',
                  }}
                >
                  {index + 1}
                </div>
                <h3 className="text-xl mb-2 mt-2" style={{ color: 'var(--text-primary)' }}>{step.phase}</h3>
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                <div className="text-purple-500 text-sm">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Experience AI-Driven Quality"
        description="Transform how your organization tests, scales, and assures quality."
        primaryButtonText="Request a Demo"
        primaryButtonLink="/contact"
        secondaryButtonText="View Case Studies"
        secondaryButtonLink="/case-studies"
      />
    </PageContainer>
  );
}