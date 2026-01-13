import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, Lock, FileCheck, Clock, Users, TrendingUp, Award, Target, Zap, Heart } from 'lucide-react';
import { PageContainer } from '../components/PageContainer';
import { useTheme } from '../contexts/ThemeContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export function CaseStudyMediCareDetailPage() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <PageContainer>
      {/* Breadcrumb & Back Navigation */}
      <section className="relative py-6" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <button
            onClick={() => navigate('/case-studies')}
            className="flex items-center space-x-2 transition-colors group"
            style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Case Studies</span>
          </button>
          <div className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            Home / Case Studies / MediCare Health Platform
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
              : 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #F0F9FF 100%)',
          }}
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl" style={{ background: theme === 'dark' ? '#06B6D4' : '#0284C7' }}></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl" style={{ background: theme === 'dark' ? '#3B82F6' : '#2563EB' }}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div
                className="inline-flex items-center px-4 py-2 rounded-full mb-6"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))'
                    : 'linear-gradient(135deg, rgba(2, 132, 199, 0.1), rgba(37, 99, 235, 0.1))',
                  border: `1px solid ${theme === 'dark' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(2, 132, 199, 0.2)'}`,
                  color: theme === 'dark' ? '#06B6D4' : '#0284C7',
                }}
              >
                <Heart className="w-4 h-4 mr-2" />
                <span className="text-sm">Healthcare Case Study</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6" style={{ color: 'var(--text-primary)' }}>
                MediCare Health Platform: Achieving Zero-Downtime Compliance at Scale
              </h1>

              <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
                How a leading healthcare technology platform scaled to 50+ system integrations while maintaining 100% HIPAA compliance and achieving SOC 2 Type II certification in record time.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['PQLM', 'X-first Testing', 'Security Testing', 'CRM Services', 'Compliance Automation'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background: theme === 'dark'
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.05)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar - Meta Information */}
            <div className="lg:col-span-1">
              <div
                className="backdrop-blur-sm rounded-2xl p-6 sticky top-24"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <h3 className="text-lg mb-4" style={{ color: 'var(--text-primary)' }}>Project Overview</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Client</div>
                    <div style={{ color: 'var(--text-primary)' }}>MediCare Health Platform</div>
                  </div>

                  <div>
                    <div className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Industry</div>
                    <div style={{ color: 'var(--text-primary)' }}>Healthcare Technology</div>
                  </div>

                  <div>
                    <div className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Region</div>
                    <div style={{ color: 'var(--text-primary)' }}>North America</div>
                  </div>

                  <div>
                    <div className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Company Size</div>
                    <div style={{ color: 'var(--text-primary)' }}>500+ employees, Series C</div>
                  </div>

                  <div>
                    <div className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Engagement Duration</div>
                    <div style={{ color: 'var(--text-primary)' }}>12 months</div>
                  </div>

                  <div>
                    <div className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Services Deployed</div>
                    <div className="space-y-2 mt-2">
                      {['PQLM', 'X-first', 'CRM Services', 'Security Testing', 'Compliance Automation'].map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }} />
                          <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Impact Metrics */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>Impact at a Glance</h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>Measurable outcomes delivered in 12 months</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: '100%',
                label: 'Compliance Maintained',
                description: 'Zero audit findings across 3 HIPAA audits',
                icon: Shield,
                gradient: 'from-blue-500 to-cyan-400',
              },
              {
                metric: '85%',
                label: 'Faster Integration Testing',
                description: 'Automated test coverage across 50+ systems',
                icon: Zap,
                gradient: 'from-cyan-500 to-blue-400',
              },
              {
                metric: '0',
                label: 'Security Breaches',
                description: '24 months incident-free operations',
                icon: Lock,
                gradient: 'from-blue-600 to-cyan-500',
              },
              {
                metric: '4 mo',
                label: 'SOC 2 Type II',
                description: 'Industry-leading certification timeline',
                icon: Award,
                gradient: 'from-cyan-600 to-blue-500',
              },
            ].map((kpi, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${kpi.gradient}`}
                  style={{
                    boxShadow: theme === 'dark'
                      ? '0 0 20px rgba(6, 182, 212, 0.3)'
                      : '0 4px 12px rgba(2, 132, 199, 0.2)',
                  }}
                >
                  <kpi.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-3xl md:text-4xl mb-2 bg-gradient-to-br ${kpi.gradient} bg-clip-text text-transparent`}>
                  {kpi.metric}
                </div>
                <div className="mb-2" style={{ color: 'var(--text-primary)' }}>{kpi.label}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{kpi.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client & Context */}
      <section className="relative py-20">
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
              : 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 50%, #F9FAFB 100%)',
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl mb-8" style={{ color: 'var(--text-primary)' }}>Client & Context</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl mb-4" style={{ color: 'var(--text-primary)' }}>About MediCare Health Platform</h3>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                MediCare Health Platform is a Series C healthcare technology company providing a unified platform that connects hospitals, clinics, insurance providers, and patients. With over 500 employees and serving 200+ healthcare organizations, MediCare processes millions of sensitive healthcare transactions daily.
              </p>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                Prior to engaging Cogniron, MediCare faced significant challenges with their legacy testing infrastructure. Manual testing processes couldn't keep pace with their aggressive integration roadmap, and compliance requirements (HIPAA, SOC 2) were becoming increasingly complex as they scaled.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                The platform needed to maintain 99.9% uptime while integrating with 50+ disparate healthcare systems—each with unique data formats, security requirements, and compliance constraints.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-4" style={{ color: 'var(--text-primary)' }}>Business Drivers</h3>
              <div className="space-y-3">
                {[
                  'Achieve and maintain HIPAA compliance across all system integrations',
                  'Accelerate integration testing without compromising security or data privacy',
                  'Obtain SOC 2 Type II certification to unlock enterprise contracts',
                  'Reduce production incidents caused by integration failures',
                  'Build scalable quality processes to support 100+ future integrations',
                  'Establish comprehensive audit trails for regulatory requirements',
                ].map((driver, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Target className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }} />
                    <span style={{ color: 'var(--text-secondary)' }}>{driver}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl mb-8" style={{ color: 'var(--text-primary)' }}>The Challenges</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="backdrop-blur-sm rounded-2xl p-8"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                MediCare's rapid growth exposed critical gaps in their quality assurance and compliance processes. The existing manual testing approach created significant bottlenecks and compliance risks:
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Complex Compliance Landscape',
                    description: 'HIPAA, SOC 2, state-specific healthcare regulations requiring continuous validation across 50+ integration points.',
                  },
                  {
                    title: 'Integration Testing Bottleneck',
                    description: 'Manual testing of healthcare system integrations took 3-4 weeks per new connection, severely limiting growth.',
                  },
                  {
                    title: 'Data Privacy Constraints',
                    description: 'Inability to use production data for testing required complex synthetic data generation strategies.',
                  },
                  {
                    title: 'Audit Trail Gaps',
                    description: 'Fragmented quality documentation made regulatory audits time-consuming and high-risk.',
                  },
                  {
                    title: 'Security Testing Gaps',
                    description: 'No systematic penetration testing or vulnerability assessment for new integrations.',
                  },
                  {
                    title: 'Limited Quality Visibility',
                    description: 'Executive team lacked real-time visibility into compliance status and quality metrics.',
                  },
                ].map((challenge, index) => (
                  <div key={index}>
                    <h4 className="mb-2 flex items-center" style={{ color: 'var(--text-primary)' }}>
                      <div
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: theme === 'dark' ? '#06B6D4' : '#0284C7' }}
                      ></div>
                      {challenge.title}
                    </h4>
                    <p className="text-sm ml-5" style={{ color: 'var(--text-secondary)' }}>
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div
                className="backdrop-blur-sm rounded-2xl p-6"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05))'
                    : 'linear-gradient(135deg, rgba(254, 226, 226, 0.5), rgba(254, 202, 202, 0.3))',
                  border: `1px solid ${theme === 'dark' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(220, 38, 38, 0.2)'}`,
                }}
              >
                <h4 className="text-lg mb-2" style={{ color: theme === 'dark' ? '#FCA5A5' : '#DC2626' }}>
                  Critical Incident
                </h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  A production integration failure with a major hospital network resulted in a 4-hour data synchronization outage affecting 10,000+ patients. Post-incident analysis revealed the failure could have been prevented with proper integration testing and monitoring.
                </p>
              </div>

              <div
                className="backdrop-blur-sm rounded-2xl p-6"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05))'
                    : 'linear-gradient(135deg, rgba(254, 243, 199, 0.5), rgba(253, 230, 138, 0.3))',
                  border: `1px solid ${theme === 'dark' ? 'rgba(251, 191, 36, 0.2)' : 'rgba(245, 158, 11, 0.2)'}`,
                }}
              >
                <h4 className="text-lg mb-2" style={{ color: theme === 'dark' ? '#FCD34D' : '#D97706' }}>
                  Business Impact
                </h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Enterprise contracts worth $15M+ were blocked pending SOC 2 Type II certification. The manual audit preparation process was estimated to take 12-18 months, putting business objectives at risk.
                </p>
              </div>

              <div
                className="backdrop-blur-sm rounded-2xl p-6"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <h4 className="text-lg mb-3" style={{ color: 'var(--text-primary)' }}>
                  Key Risk Factors
                </h4>
                <div className="space-y-2">
                  {[
                    'Manual testing consuming 40% of engineering capacity',
                    'Average 6-week integration cycle blocking sales pipeline',
                    'No automated compliance validation',
                    'Audit preparation requiring 3+ months of manual work',
                  ].map((risk, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme === 'dark' ? '#06B6D4' : '#0284C7' }}></div>
                      <span>{risk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Solution */}
      <section className="relative py-20">
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
              : 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 50%, #F9FAFB 100%)',
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>Our Approach & Solution</h2>
          <p className="text-lg mb-12 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            Cogniron deployed a comprehensive Product Quality Lifecycle Management (PQLM) framework specifically designed for healthcare technology, combining automated compliance validation, security testing, and integration quality assurance.
          </p>

          {/* Engagement Phases */}
          <div className="mb-16">
            <h3 className="text-2xl mb-8" style={{ color: 'var(--text-primary)' }}>Phased Implementation Approach</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Discovery & Assessment',
                  duration: '4 weeks',
                  activities: [
                    'Compliance gap analysis',
                    'Integration testing audit',
                    'Risk assessment',
                    'Stakeholder workshops',
                  ],
                },
                {
                  phase: 'Phase 2',
                  title: 'PQLM Design & Blueprint',
                  duration: '6 weeks',
                  activities: [
                    'Quality framework design',
                    'Compliance automation strategy',
                    'Test data management plan',
                    'Toolchain architecture',
                  ],
                },
                {
                  phase: 'Phase 3',
                  title: 'Implementation & Integration',
                  duration: '20 weeks',
                  activities: [
                    'Automated test suite deployment',
                    'CI/CD pipeline integration',
                    'Security testing framework',
                    'Compliance dashboard',
                  ],
                },
                {
                  phase: 'Phase 4',
                  title: 'Stabilization & Optimization',
                  duration: '18 weeks',
                  activities: [
                    'SOC 2 Type II preparation',
                    'Team training & handoff',
                    'Process optimization',
                    'Continuous improvement',
                  ],
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-6"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <div
                    className="text-sm mb-2 px-3 py-1 rounded-full inline-block"
                    style={{
                      background: theme === 'dark'
                        ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))'
                        : 'linear-gradient(135deg, rgba(2, 132, 199, 0.1), rgba(37, 99, 235, 0.1))',
                      color: theme === 'dark' ? '#06B6D4' : '#0284C7',
                    }}
                  >
                    {phase.phase}
                  </div>
                  <h4 className="text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{phase.title}</h4>
                  <div className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                    <Clock className="w-4 h-4 inline mr-1" />
                    {phase.duration}
                  </div>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }} />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Highlights */}
          <div className="mb-12">
            <h3 className="text-2xl mb-8" style={{ color: 'var(--text-primary)' }}>Solution Highlights</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Compliance-First PQLM Framework',
                  description: 'Automated compliance validation embedded throughout the development lifecycle, with real-time HIPAA and SOC 2 control monitoring.',
                  features: [
                    'Automated PHI data detection and masking',
                    'Continuous compliance dashboards',
                    'Audit trail automation',
                    'Regulatory change monitoring',
                  ],
                },
                {
                  icon: Zap,
                  title: 'Integration Testing Automation',
                  description: 'Intelligent test generation for healthcare system integrations with support for HL7, FHIR, and proprietary protocols.',
                  features: [
                    'Synthetic patient data generation',
                    'API contract testing',
                    'End-to-end workflow validation',
                    'Performance & load testing',
                  ],
                },
                {
                  icon: Lock,
                  title: 'Security Testing & Validation',
                  description: 'Comprehensive security testing framework including penetration testing, vulnerability scanning, and threat modeling.',
                  features: [
                    'Automated security scans',
                    'Penetration testing protocols',
                    'Access control validation',
                    'Encryption verification',
                  ],
                },
                {
                  icon: TrendingUp,
                  title: 'Quality Intelligence & Observability',
                  description: 'Real-time quality metrics and predictive analytics providing executive visibility into compliance and quality status.',
                  features: [
                    'Executive compliance dashboards',
                    'Predictive quality analytics',
                    'Risk scoring & alerts',
                    'Integration health monitoring',
                  ],
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-8"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-blue-500 to-cyan-400"
                    style={{
                      boxShadow: theme === 'dark'
                        ? '0 0 20px rgba(6, 182, 212, 0.3)'
                        : '0 4px 12px rgba(2, 132, 199, 0.2)',
                    }}
                  >
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{solution.title}</h4>
                  <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme === 'dark' ? '#06B6D4' : '#0284C7' }}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Architecture */}
      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>Solution Architecture</h2>
          <p className="text-lg mb-12 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            Multi-layered quality and compliance platform integrated across the entire development lifecycle.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                layer: 'Development Layer',
                color: 'from-blue-500 to-cyan-400',
                components: [
                  'X-first Shift-Left Testing',
                  'IDE Quality Plugins',
                  'Pre-commit Hooks',
                  'Code Quality Gates',
                  'Security SAST Scanning',
                ],
              },
              {
                layer: 'Integration Layer',
                color: 'from-cyan-500 to-blue-400',
                components: [
                  'CI/CD Pipeline Integration',
                  'Automated Regression Testing',
                  'Integration Test Automation',
                  'Compliance Validation',
                  'Security DAST Scanning',
                ],
              },
              {
                layer: 'Production Layer',
                color: 'from-blue-600 to-cyan-500',
                components: [
                  'Cognitive Monitoring',
                  'Synthetic Transaction Testing',
                  'Real-time Compliance Monitoring',
                  'Incident Detection & Response',
                  'Audit Trail Management',
                ],
              },
            ].map((tier, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-6"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div
                  className={`text-lg mb-4 px-4 py-2 rounded-lg inline-block bg-gradient-to-r ${tier.color} text-white`}
                  style={{
                    boxShadow: theme === 'dark'
                      ? '0 0 20px rgba(6, 182, 212, 0.3)'
                      : '0 4px 12px rgba(2, 132, 199, 0.2)',
                  }}
                >
                  {tier.layer}
                </div>
                <ul className="space-y-3">
                  {tier.components.map((component, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }} />
                      <span style={{ color: 'var(--text-primary)' }}>{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Business Impact */}
      <section className="relative py-20">
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
              : 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 50%, #F9FAFB 100%)',
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>Results & Business Impact</h2>
          <p className="text-lg mb-12 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            Within 12 months, MediCare Health Platform transformed from compliance-challenged to industry-leading in healthcare quality assurance, unlocking significant business value and competitive advantage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                category: 'Compliance & Security',
                icon: Shield,
                results: [
                  { metric: '100%', description: 'HIPAA compliance maintained across 3 audits with zero findings' },
                  { metric: 'SOC 2 Type II', description: 'Achieved in 4 months vs. 12-18 month industry average' },
                  { metric: '0 breaches', description: '24 months of incident-free operations with continuous monitoring' },
                  { metric: '95%', description: 'Reduction in audit preparation time (from 3 months to 1 week)' },
                ],
              },
              {
                category: 'Quality & Velocity',
                icon: TrendingUp,
                results: [
                  { metric: '85%', description: 'Faster integration testing with automated test suite coverage' },
                  { metric: '90%', description: 'Reduction in integration-related production incidents' },
                  { metric: '6 weeks → 1 week', description: 'Integration cycle time improvement unlocking sales pipeline' },
                  { metric: '60%', description: 'Reduction in manual testing effort freeing engineering capacity' },
                ],
              },
              {
                category: 'Business & Revenue',
                icon: TrendingUp,
                results: [
                  { metric: '$15M+', description: 'Enterprise contracts unlocked by SOC 2 certification' },
                  { metric: '300%', description: 'ROI in first year from reduced testing costs and revenue acceleration' },
                  { metric: '50 → 100+', description: 'Integration capacity doubled enabling aggressive growth strategy' },
                  { metric: '25%', description: 'Reduction in sales cycle time due to compliance readiness' },
                ],
              },
              {
                category: 'Operational Excellence',
                icon: Users,
                results: [
                  { metric: '99.9%', description: 'Platform uptime maintained during entire implementation' },
                  { metric: 'Real-time', description: 'Executive visibility into quality and compliance metrics' },
                  { metric: '40%', description: 'Engineering productivity improvement from automated quality gates' },
                  { metric: '100%', description: 'Team adoption of new PQLM processes within 6 months' },
                ],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-8"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-br from-blue-500 to-cyan-400"
                    style={{
                      boxShadow: theme === 'dark'
                        ? '0 0 20px rgba(6, 182, 212, 0.3)'
                        : '0 4px 12px rgba(2, 132, 199, 0.2)',
                    }}
                  >
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl" style={{ color: 'var(--text-primary)' }}>{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.results.map((result, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div
                        className="px-3 py-1 rounded-lg text-sm flex-shrink-0 bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                        style={{
                          boxShadow: theme === 'dark'
                            ? '0 0 15px rgba(6, 182, 212, 0.2)'
                            : '0 2px 8px rgba(2, 132, 199, 0.15)',
                        }}
                      >
                        {result.metric}
                      </div>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{result.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Transformation Story */}
          <div
            className="backdrop-blur-sm rounded-2xl p-8"
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))'
                : 'linear-gradient(135deg, rgba(2, 132, 199, 0.05), rgba(37, 99, 235, 0.05))',
              border: `1px solid ${theme === 'dark' ? 'rgba(6, 182, 212, 0.2)' : 'rgba(2, 132, 199, 0.15)'}`,
            }}
          >
            <h3 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Transformation Story: Before & After</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg mb-3" style={{ color: theme === 'dark' ? '#FCA5A5' : '#DC2626' }}>Before Cogniron</h4>
                <ul className="space-y-2">
                  {[
                    'Manual testing consuming 40% of engineering capacity',
                    '6-week integration cycles blocking sales pipeline',
                    'Compliance audits requiring 3 months of preparation',
                    'No automated security testing for new integrations',
                    'Enterprise contracts blocked by missing SOC 2 certification',
                    'Limited visibility into quality and compliance status',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: theme === 'dark' ? '#FCA5A5' : '#DC2626' }}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg mb-3" style={{ color: theme === 'dark' ? '#34D399' : '#059669' }}>After Cogniron</h4>
                <ul className="space-y-2">
                  {[
                    '85% automated testing coverage freeing engineering capacity',
                    '1-week integration cycles accelerating business growth',
                    'Continuous compliance validation with real-time dashboards',
                    'Comprehensive automated security testing framework',
                    'SOC 2 Type II certified unlocking $15M+ in contracts',
                    'Executive-level quality intelligence and predictive analytics',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: theme === 'dark' ? '#34D399' : '#059669' }}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div
            className="backdrop-blur-sm rounded-2xl p-12"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div
              className="text-6xl mb-6"
              style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7', opacity: 0.3 }}
            >
              "
            </div>
            <blockquote className="text-2xl md:text-3xl mb-8 italic" style={{ color: 'var(--text-primary)' }}>
              Security and compliance are non-negotiable in healthcare. Cogniron gave us the confidence to scale rapidly while staying fully compliant. The PQLM framework didn't just solve our immediate challenges—it became our competitive advantage.
            </blockquote>
            <div className="flex items-center space-x-4">
              <div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0"
                style={{
                  boxShadow: theme === 'dark'
                    ? '0 0 30px rgba(6, 182, 212, 0.4)'
                    : '0 8px 16px rgba(2, 132, 199, 0.3)',
                }}
              >
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <div style={{ color: 'var(--text-primary)' }}>Dr. Sarah Martinez</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>CEO & Co-founder, MediCare Health Platform</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="relative py-20">
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
              : 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 50%, #F9FAFB 100%)',
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>Key Takeaways & Lessons Learned</h2>
          <p className="text-lg mb-12 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            Success factors and insights from the MediCare engagement that apply across healthcare technology implementations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Compliance as Code',
                insight: 'Embedding compliance validation directly into the development workflow transformed compliance from a periodic audit burden to a continuous, automated process. This approach reduced audit preparation time by 95%.',
              },
              {
                title: 'Security by Design',
                insight: 'Integrating security testing from the earliest phases (X-first approach) prevented vulnerabilities from reaching production and dramatically reduced remediation costs.',
              },
              {
                title: 'Synthetic Data Strategy',
                insight: 'Creating realistic synthetic patient data that mirrors production complexity while maintaining privacy was critical for effective testing in a HIPAA-constrained environment.',
              },
              {
                title: 'Executive Visibility',
                insight: 'Real-time quality and compliance dashboards for executives transformed quality from an engineering concern to a strategic business enabler, accelerating decision-making.',
              },
              {
                title: 'Phased Implementation',
                insight: 'The four-phase approach allowed the team to deliver value incrementally while maintaining production stability, building confidence and buy-in across the organization.',
              },
              {
                title: 'Continuous Learning',
                insight: 'Comprehensive team training and knowledge transfer ensured sustainability and enabled MediCare to maintain and evolve the PQLM framework independently post-engagement.',
              },
            ].map((lesson, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-6"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div className="flex items-center mb-3">
                  <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0" style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }} />
                  <h3 className="text-lg" style={{ color: 'var(--text-primary)' }}>{lesson.title}</h3>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{lesson.insight}</p>
              </div>
            ))}
          </div>

          {/* Success Factors */}
          <div
            className="mt-12 backdrop-blur-sm rounded-2xl p-8"
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))'
                : 'linear-gradient(135deg, rgba(2, 132, 199, 0.05), rgba(37, 99, 235, 0.05))',
              border: `1px solid ${theme === 'dark' ? 'rgba(6, 182, 212, 0.2)' : 'rgba(2, 132, 199, 0.15)'}`,
            }}
          >
            <h3 className="text-xl mb-6" style={{ color: 'var(--text-primary)' }}>Critical Success Factors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="mb-3" style={{ color: 'var(--text-primary)' }}>Organizational</h4>
                <ul className="space-y-2">
                  {[
                    'Executive sponsorship and active involvement',
                    'Cross-functional collaboration (Engineering, Security, Compliance)',
                    'Dedicated QA champions within each team',
                    'Cultural commitment to quality excellence',
                  ].map((factor, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <Target className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }} />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-3" style={{ color: 'var(--text-primary)' }}>Technical</h4>
                <ul className="space-y-2">
                  {[
                    'Modern CI/CD infrastructure enabling automation',
                    'Investment in quality tooling and platforms',
                    'Comprehensive test data management strategy',
                    'Continuous monitoring and observability',
                  ].map((factor, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <Target className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }} />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-24"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))'
            : 'linear-gradient(135deg, rgba(2, 132, 199, 0.08), rgba(37, 99, 235, 0.08))',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
            Ready to Transform Your Healthcare Quality Assurance?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Whether you're pursuing compliance certification, scaling integrations, or modernizing your quality processes, Cogniron's PQLM framework can accelerate your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                color: '#FFFFFF',
                boxShadow: 'var(--shadow-accent)',
              }}
            >
              <span className="mr-2">Talk to Our Experts</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
              }}
            >
              Explore More Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
            More Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 'fintech-security-testing',
                title: 'GlobalPay Financial: 70% Faster Release Cycles',
                industry: 'Fintech',
                description: 'AI-powered cognitive assurance reduced production issues by 95% for a leading payment processor.',
                tags: ['Cognitive Assurance', 'X-first', 'PQLM'],
              },
              {
                id: 'ecommerce-test-automation',
                title: 'ShopNow: 2.5x Conversion Increase',
                industry: 'E-commerce',
                description: 'Comprehensive UX-assurance testing transformed mobile app experience and doubled conversion rates.',
                tags: ['UX-assurance', 'Cognitive Assurance'],
              },
              {
                title: 'CloudSuite SaaS: 3x Release Velocity',
                industry: 'SaaS',
                description: 'X-first shift-left approach enabled weekly releases with 90% test automation coverage.',
                tags: ['X-first', 'PQLM', 'CRM'],
              },
            ].map((study, index) => (
              <Link
                key={index}
                to={study.id ? `/case-studies/${study.id}` : '#'}
                className="group backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105 block"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div
                  className="text-sm mb-3 px-3 py-1 rounded-full inline-block"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))'
                      : 'linear-gradient(135deg, rgba(2, 132, 199, 0.1), rgba(37, 99, 235, 0.1))',
                    color: theme === 'dark' ? '#06B6D4' : '#0284C7',
                  }}
                >
                  {study.industry}
                </div>
                <h3 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{study.title}</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
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
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>Ready to Transform Your Quality Assurance?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>Let's discuss how Cogniron can help you achieve similar results</p>
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
              to="/case-studies" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300" 
              style={{ 
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF', 
                border: '1px solid var(--border-color)', 
                color: 'var(--text-primary)' 
              }}
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
