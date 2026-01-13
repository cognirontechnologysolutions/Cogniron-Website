import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Layers, 
  Network,
  Cpu,
  Eye,
  RefreshCw,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  Clock,
  GitBranch,
  Database,
  Settings,
  Activity,
  Lock,
  ChevronRight
} from 'lucide-react';
import { PageContainer } from '../components/PageContainer';
import { SectionTag } from '../components/SectionTag';
import { Tag } from '../components/Tag';
import { useTheme } from '../contexts/ThemeContext';
import { useGradientShimmer } from '../hooks/useGradientShimmer';

export function PlatformPage() {
  const { theme } = useTheme();
  useGradientShimmer();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeModule, setActiveModule] = useState(0);

  const aiCapabilities = [
    {
      title: 'Cognitive Test Generation',
      description: 'Automatically produces end-to-end test scenarios using application insights, code intelligence, and real user behavior patterns.',
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Adaptive Automation',
      description: 'Self-healing automation that dynamically adjusts to UI changes and regenerates locators and scripts in real time.',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-400'
    },
    {
      title: 'Predictive Quality Analytics',
      description: 'ML-driven forecasting that identifies risk hotspots and potential defects long before they reach production.',
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Visual Intelligence',
      description: 'Computer vision–powered analysis that detects UI inconsistencies, layout shifts, and visual regressions with high precision.',
      icon: <Eye className="w-8 h-8" />,
      gradient: 'from-pink-400 to-purple-500'
    },
    {
      title: 'Continuous Learning Engine',
      description: 'Improves accuracy with every execution cycle—reducing false positives and strengthening test reliability over time.',
      icon: <RefreshCw className="w-8 h-8" />,
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Security Testing',
      description: 'AI-enabled vulnerability assessment that correlates threat signals, flags security risks, and enhances overall application resilience.',
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-orange-400 to-red-500'
    }
  ];

  const intelligenceModules = [
    {
      name: 'Neural Test Engine',
      description: 'Deep-learning engine interprets product behavior and autonomously creates high-coverage test assets.',
      features: ['Auto-generates functional, regression, and edge-case scenarios', 'Learns from application workflows and code patterns', 'Adapts instantly to UI, logic, and integration changes', 'Maximizes test coverage through intelligent prioritization'],
      icon: <Cpu className="w-6 h-6" />,
      color: 'blue'
    },
    {
      name: 'Cognitive Analytics',
      description: 'Real-time analytics layer delivers predictive and actionable quality intelligence across your engineering ecosystem.',
      features: ['Live dashboards with granular execution insights', 'Automated trend and anomaly detection', 'Risk scoring to prioritize critical issues', 'Predictive indicators for release readiness'],
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'purple'
    },
    {
      name: 'Automation Orchestrator',
      description: 'Unified automation fabric that synchronizes testing across tools, pipelines, and environments.',
      features: ['Multi-platform, cross-browser, cross-device execution', 'High-speed parallel runs for accelerated cycles', 'Smart resource allocation based on load and priority', 'Event-driven scheduling aligned with CI/CD triggers'],
      icon: <Network className="w-6 h-6" />,
      color: 'cyan'
    },
    {
      name: 'Quality Intelligence Hub',
      description: 'Our central intelligence core consolidates all quality signals into one cohesive, data-driven ecosystem.',
      features: ['Unified quality view across teams and releases', 'Cross-project intelligence for strategic decision-making', 'Collaboration-ready workspace for QE teams', 'Knowledge base with patterns, insights, and recommendations'],
      icon: <Layers className="w-6 h-6" />,
      color: 'pink'
    }
  ];

  const automationWorkflows = [
    {
      step: '1. Code Push',
      description: 'Developer commits changes',
      icon: <GitBranch className="w-5 h-5" />
    },
    {
      step: '2. Impact Scan',
      description: 'Gretah AI identifies risks & scope',
      icon: <Brain className="w-5 h-5" />
    },
    {
      step: '3. Test Auto-Build',
      description: 'AI generates targeted test cases',
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      step: '4. Smart Execution',
      description: 'Automated execution across environments',
      icon: <Zap className="w-5 h-5" />
    },
    {
      step: '5. AI Validation',
      description: 'Platform analyzes outcomes & flags issues',
      icon: <Eye className="w-5 h-5" />
    },
    {
      step: '6. Release Intelligence',
      description: 'Delivers readiness scores & risk indicators',
      icon: <Target className="w-5 h-5" />
    }
  ];

  const platformBenefits = [
    { 
      metric: '10x',
      label: 'Faster Testing',
      description: 'Accelerate testing cycles with AI automation',
      gradient: 'from-blue-500 to-cyan-400'
    },
    { 
      metric: '85%',
      label: 'Cost Reduction',
      description: 'Reduce QA costs through intelligent automation',
      gradient: 'from-purple-500 to-pink-400'
    },
    { 
      metric: '99.7%',
      label: 'Accuracy',
      description: 'Industry-leading defect detection accuracy',
      gradient: 'from-cyan-400 to-blue-500'
    },
    { 
      metric: '24/7',
      label: 'Continuous',
      description: 'Always-on quality assurance and monitoring',
      gradient: 'from-green-400 to-emerald-500'
    }
  ];

  const useCases = [
    {
      title: 'Enterprise Applications',
      description: 'End-to-end validation for complex, mission-critical enterprise systems.',
      icon: <Database className="w-6 h-6" />,
      benefits: ['Scenario coverage', 'System modernization', 'Deep integration validation']
    },
    {
      title: 'Mobile Applications',
      description: 'Robust cross-platform testing powered by real devices and cloud execution.',
      icon: <Activity className="w-6 h-6" />,
      benefits: ['Broad coverage', 'Performance and stability checks', 'Visual consistency validation']
    },
    {
      title: 'SaaS Products',
      description: 'Continuous, multi-tenant quality assurance for modern cloud-native software.',
      icon: <Settings className="w-6 h-6" />,
      benefits: ['Multi-tenant scenario testing', 'API and service-level validation', 'Automated release and regression']
    },
    {
      title: 'Security-Critical Systems',
      description: 'Advanced security and compliance-driven quality engineering for regulated industries.',
      icon: <Lock className="w-6 h-6" />,
      benefits: ['Compliance and regulatory testing', 'Penetration & vulnerability assessment', 'Continuous risk monitoring']
    }
  ];

  const integrationEcosystem = [
    { category: 'CI/CD', tools: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps', 'CircleCI'] },
    { category: 'Version Control', tools: ['GitHub', 'GitLab', 'Bitbucket', 'Azure Repos'] },
    { category: 'Project Management', tools: ['Jira', 'Azure Boards', 'Asana', 'Monday.com'] },
    { category: 'Communication', tools: ['Slack', 'Microsoft Teams', 'Discord', 'Email'] },
    { category: 'Cloud Platforms', tools: ['AWS', 'Azure', 'Google Cloud', 'Oracle Cloud'] },
    { category: 'Monitoring', tools: ['Datadog', 'New Relic', 'Splunk', 'Grafana'] }
  ];

  const colorMap: { [key: string]: { light: string; dark: string; accent: string } } = {
    blue: { 
      light: 'rgba(59, 130, 246, 0.08)', 
      dark: 'rgba(59, 130, 246, 0.2)', 
      accent: '#2563EB' 
    },
    purple: { 
      light: 'rgba(147, 51, 234, 0.08)', 
      dark: 'rgba(147, 51, 234, 0.2)', 
      accent: '#9333EA' 
    },
    cyan: { 
      light: 'rgba(6, 182, 212, 0.08)', 
      dark: 'rgba(6, 182, 212, 0.2)', 
      accent: '#06B6D4' 
    },
    pink: { 
      light: 'rgba(236, 72, 153, 0.08)', 
      dark: 'rgba(236, 72, 153, 0.2)', 
      accent: '#EC4899' 
    }
  };

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ 
        backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : '#FAFBFF'
      }}>
        {/* Background Layer */}
        <div className="absolute inset-0">
          {/* Grid Pattern - matches Home page */}
          <div 
            className="absolute inset-0 neural-pattern"
            style={{
              opacity: theme === 'dark' ? 0.1 : 0.12
            }}
          ></div>
          
          {/* Light Theme: Central radial gradient spotlight (matches Home page) */}
          {theme === 'light' && (
            <div
              className="absolute left-0 right-0"
              style={{
                top: '25%',
                height: '50%',
                background: 'radial-gradient(ellipse 70% 90% at 50% 50%, rgba(219, 234, 254, 0.6) 0%, rgba(191, 219, 254, 0.35) 30%, rgba(250, 251, 255, 0) 65%)',
                pointerEvents: 'none',
              }}
            ></div>
          )}
          
          {/* Dark Theme: Gradient Orbs (keep existing) */}
          {theme === 'dark' && (
            <div className="absolute inset-0" style={{ opacity: 0.2 }}>
              <div className="absolute top-0 left-0 w-full h-full">
                <div 
                  className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                  style={{ 
                    backgroundColor: 'rgba(59, 130, 246, 0.3)'
                  }}
                ></div>
                <div 
                  className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" 
                  style={{ 
                    backgroundColor: 'rgba(147, 51, 234, 0.3)',
                    animationDelay: '1s' 
                  }}
                ></div>
                <div 
                  className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse" 
                  style={{ 
                    backgroundColor: 'rgba(6, 182, 212, 0.2)',
                    animationDelay: '2s' 
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            {/* Logo/Brand Badge with Moving Border */}
            <div className="mb-8">
              <Tag icon={Brain} size="lg" variant="default">
                Gretah AI | Powered by Cogniron
              </Tag>
            </div>

            <h1 className="text-5xl lg:text-7xl mb-6 max-w-4xl mx-auto" style={{ color: 'var(--text-primary)' }}>
              <span style={{ color: 'var(--text-primary)' }}>AI-Driven QE</span>
              <span className="gradient-text font-semibold"> for Modern Teams</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Gretah AI is our multi-agent Quality Engineering platform that automates test design, scripting, execution, and release intelligence—so teams ship faster with higher confidence.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link
                to="/contact"
                className="px-8 py-4 text-white rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
                  boxShadow: 'var(--shadow-accent)',
                }}
              >
                Try Gretah AI now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="px-8 py-4 rounded-lg border transition-all duration-300 flex items-center gap-2"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Platform Preview */}
            <div className="relative max-w-5xl mx-auto">
              <div 
                className="absolute inset-0 rounded-3xl blur-3xl"
                style={{
                  background: theme === 'dark' 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))'
                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                }}
              ></div>
              <div 
                className="relative rounded-2xl border overflow-hidden backdrop-blur-xl"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  boxShadow: theme === 'dark' 
                    ? '0 20px 40px rgba(59, 130, 246, 0.2)'
                    : 'var(--shadow-xl)',
                }}
              >
                {!isVideoPlaying ? (
                  <div className="aspect-video flex flex-col items-center justify-center p-12">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-24 h-24 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg mb-6"
                      style={{
                        background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
                        boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)',
                      }}
                    >
                      <Play className="w-10 h-10 text-white ml-1" />
                    </button>
                    <h3 className="text-2xl mb-2" style={{ color: 'var(--text-primary)' }}>See Gretah AI in Action</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>3-minute platform overview</p>
                  </div>
                ) : (
                  <div className="aspect-video flex items-center justify-center" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                    <p style={{ color: 'var(--text-secondary)' }}>Video Player Placeholder</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Grid */}
      <section className="py-24 relative" style={{ backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-4">
              <SectionTag text="Capabilities driven by Intelligence" icon={Brain} />
            </div>
            <h2 className="text-4xl lg:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Think, Design & Test with <span className="gradient-text">Gretah</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Unify requirement analysis, test design, automation scripting, execution, and certification—powered by domain-trained LLMs and multi-agent collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((capability, index) => {
              const baseStyles = {
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: theme === 'dark' 
                  ? 'var(--shadow-sm)' 
                  : '0 2px 8px rgba(0, 55, 106, 0.04)',
                transition: 'all 300ms',
              };

              const hoverStyles = {
                boxShadow: theme === 'dark'
                  ? '0 12px 32px rgba(0, 0, 0, 0.3)'
                  : '0 12px 32px rgba(0, 84, 166, 0.12)',
                transform: 'translateY(-4px)',
              };

              return (
                <div
                  key={index}
                  className="group relative rounded-2xl p-8 hover:shadow-xl"
                  tabIndex={0}
                  role="article"
                  style={baseStyles}
                  onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, hoverStyles);
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.currentTarget.style, baseStyles);
                  }}
                  onFocus={(e) => {
                    Object.assign(e.currentTarget.style, hoverStyles);
                  }}
                  onBlur={(e) => {
                    Object.assign(e.currentTarget.style, baseStyles);
                  }}
                >
                  <div 
                    className={`w-16 h-16 bg-gradient-to-br ${capability.gradient} rounded-xl flex items-center justify-center mb-6 text-white relative`}
                  >
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      {capability.icon}
                    </div>
                  </div>
                  <h3 
                    className="text-xl mb-3" 
                    style={{ 
                      color: 'var(--text-primary)',
                    }}
                  >
                    {capability.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Measurable Business Impact */}
      <section 
        className="py-24 relative"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), transparent, rgba(147, 51, 234, 0.05))'
            : 'linear-gradient(135deg, rgba(59, 130, 246, 0.02), transparent, rgba(147, 51, 234, 0.02))',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-4">
              <SectionTag text="Proven Results" icon={TrendingUp} />
            </div>
            <h2 className="text-4xl lg:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Measurable <span className="gradient-text">Business Impact</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Real results from organizations using Gretah AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformBenefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 text-center"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div className={`text-6xl mb-4 bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                  {benefit.metric}
                </div>
                <h3 className="text-xl mb-2" style={{ color: 'var(--text-primary)' }}>{benefit.label}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Modules */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(to bottom, #020617, #0F172A, #020617)'
            : 'linear-gradient(to bottom, #F9FAFB, #F3F4F6, #F9FAFB)',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div 
              className="inline-block px-4 py-2 rounded-full border mb-4"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(147, 51, 234, 0.05)',
                borderColor: theme === 'dark' ? 'rgba(147, 51, 234, 0.2)' : 'rgba(147, 51, 234, 0.15)',
              }}
            >
              <span className="text-sm" style={{ color: '#9333EA' }}>Core Intelligence Modules</span>
            </div>
            <h2 className="text-4xl lg:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
              The Four Pillars of <span className="gradient-text">Cogniron Intelligence</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Engineered for scale, speed, and absolute reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {intelligenceModules.map((module, index) => (
              <div
                key={index}
                className="group relative cursor-pointer h-full flex"
                onMouseEnter={() => setActiveModule(index)}
              >
                <div 
                  className="absolute inset-0 rounded-2xl blur-xl transition-opacity duration-300"
                  style={{
                    background: theme === 'dark' 
                      ? `linear-gradient(135deg, ${colorMap[module.color].dark}, transparent)`
                      : `linear-gradient(135deg, ${colorMap[module.color].light}, transparent)`,
                    opacity: 0,
                  }}
                ></div>
                <div 
                  className="relative rounded-2xl p-8 transition-all duration-300 flex flex-col w-full"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: activeModule === index 
                      ? `1px solid ${colorMap[module.color].accent}` 
                      : '1px solid var(--border-color)',
                    boxShadow: activeModule === index 
                      ? `0 10px 40px ${theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`
                      : 'var(--shadow-sm)',
                  }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${colorMap[module.color].accent}, ${colorMap[module.color].accent}dd)`,
                      }}
                    >
                      {module.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-2" style={{ color: 'var(--text-primary)' }}>{module.name}</h3>
                      <p style={{ color: 'var(--text-secondary)' }}>{module.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    {module.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#06B6D4' }} />
                        <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Workflow */}
      <section className="py-24 relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div 
              className="inline-block px-4 py-2 rounded-full border mb-4"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(6, 182, 212, 0.1)' : 'rgba(6, 182, 212, 0.05)',
                borderColor: theme === 'dark' ? 'rgba(6, 182, 212, 0.2)' : 'rgba(6, 182, 212, 0.15)',
              }}
            >
              <span className="text-sm" style={{ color: '#06B6D4' }}>How it works</span>
            </div>
            <h2 className="text-4xl lg:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
              <span className="gradient-text">AI-Orchestrated </span><span style={{ color: 'var(--text-primary)' }}>Lifecycle</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A clear, linear workflow optimized for speed and accuracy.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div 
              className="absolute left-0 right-0 hidden lg:block"
              style={{
                top: '32px', // Vertically centered on the 64px icons
                height: '4px',
                borderRadius: '2px',
                background: theme === 'dark'
                  ? 'linear-gradient(90deg, rgba(37, 99, 235, 0.7) 0%, rgba(6, 182, 212, 0.8) 40%, rgba(168, 85, 247, 0.7) 100%)'
                  : 'linear-gradient(90deg, rgba(59, 130, 246, 0.35) 0%, rgba(6, 182, 212, 0.4) 40%, rgba(168, 85, 247, 0.35) 100%)',
                boxShadow: theme === 'dark'
                  ? '0 0 12px rgba(6, 182, 212, 0.3), 0 0 4px rgba(59, 130, 246, 0.2)'
                  : '0 1px 3px rgba(59, 130, 246, 0.1)',
                zIndex: 0,
                marginLeft: '32px', // Align with center of first icon
                marginRight: '32px', // Align with center of last icon
              }}
            />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
              {automationWorkflows.map((workflow, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white relative z-10"
                    style={{
                      background: `linear-gradient(135deg, #2563EB, #06B6D4)`,
                      boxShadow: theme === 'dark' 
                        ? '0 8px 24px rgba(59, 130, 246, 0.3)'
                        : '0 8px 24px rgba(59, 130, 246, 0.15)',
                    }}
                  >
                    {workflow.icon}
                  </div>
                  <h4 className="mb-2" style={{ color: 'var(--text-primary)' }}>{workflow.step}</h4>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{workflow.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Built for Every Use Case
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Scalable, industry-ready quality engineering for teams of every size—from fast-moving startups to global enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: theme === 'dark' 
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
                    color: '#2563EB',
                  }}
                >
                  {useCase.icon}
                </div>
                <h3 className="text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>{useCase.title}</h3>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(6, 182, 212, 0.1)' : 'rgba(6, 182, 212, 0.08)',
                        color: '#06B6D4',
                      }}
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section 
        className="py-24 relative"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(to bottom, #020617, #0F172A)'
            : 'linear-gradient(to bottom, #F9FAFB, #F3F4F6)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Seamless Integration Ecosystem
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Effortlessly connect Gretah AI with the tools you already rely on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationEcosystem.map((integration, index) => (
              <div
                key={index}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <h3 className="text-lg mb-4" style={{ color: 'var(--text-primary)' }}>{integration.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {integration.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-sm"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>Ready to Modernize Your <span className="gradient-text">QA</span>?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>Use Gretah AI to boost coverage, speed, and product stability.</p>
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
              <span className="mr-2">Start for Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300" 
              style={{ 
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF', 
                border: '1px solid var(--border-color)', 
                color: 'var(--text-primary)' 
              }}
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}