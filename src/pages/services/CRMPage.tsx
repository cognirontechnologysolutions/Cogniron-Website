import React from 'react';
import { Users, Heart, TrendingUp, BarChart3, MessageSquare, Target, Zap, Shield, Clock } from 'lucide-react';
import { ServicePageHero } from '../../components/ServicePageHero';
import { FeatureGrid } from '../../components/FeatureGrid';
import { CTASection } from '../../components/CTASection';
import { PageContainer } from '../../components/PageContainer';
import { SectionTag } from '../../components/SectionTag';
import { useTheme } from '../../contexts/ThemeContext';
import { useGradientShimmer } from '../../hooks/useGradientShimmer';

export function CRMPage() {
  const { theme } = useTheme();
  useGradientShimmer();

  const capabilities = [
    {
      icon: Users,
      title: 'Customer Success Management',
      description: 'Strategic support from implementation to maintenance ensuring long-term relationship growth.',
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence Integration',
      description: 'Unified visibility connecting Salesforce and Dynamics performance with real-time business KPIs.',
    },
    {
      icon: MessageSquare,
      title: 'Feedback Loop Management',
      description: 'Rigorous analysis of stakeholder requirements to ensure implementations deliver trusted insights.',
    },
    {
      icon: Target,
      title: 'Opportunity Health Monitoring',
      description: 'Real-time dashboards tracking Sales Cloud and Dynamics 365 to prevent revenue leakage.',
    },
    {
      icon: TrendingUp,
      title: 'Performance ROI Mapping',
      description: 'Clear visibility into cost-effective solutions and measurable outcomes achieved through BI.',
    },
    {
      icon: Shield,
      title: 'SLA Management',
      description: 'Automated tracking of Case, Asset, and Contract management ensuring enterprise commitments are met.',
    },
  ];

  const features = [
    {
      title: 'Unified Client Portal',
      description: 'Real-time, self-service access to interactive Tableau and Power BI dashboards for full visibility.',
      benefits: [],
    },
    {
      title: 'Data-Driven Correlation',
      description: 'Advanced analytics mapping platform performance to customer behavior and business trends.',
      benefits: [],
    },
    {
      title: 'Automated Communication',
      description: 'CTI and Marketing Cloud integration for intelligent escalation and alerts.',
      benefits: [],
    },
    {
      title: 'Success Planning',
      description: 'Aligning analytics strategy with business objectives and user requirements.',
      benefits: [],
    },
  ];

  const metrics = [
    { label: 'Customer Retention (95%+)', value: '95%+', description: 'Sustainable asset growth driven by proactive engagement and clear value realization.' },
    { label: 'Issue Response Time (<2 Hours)', value: '<2 Hours', description: 'Rapid support across Sales and Service modules to maintain an uninterrupted experience.' },
    { label: 'Success Plan Adoption (90%+)', value: '90%+', description: 'High participation in co-created roadmaps that track goals, milestones, and ROI.' },
    { label: 'Churn Prediction Accuracy (85%+)', value: '85%+', description: 'Leveraging Power BI and Tableau for early risk visibility and intervention.' },
  ];

  return (
    <PageContainer>
      <ServicePageHero
        title="Customer Relationship Management"
        subtitle=""
        description="Strategic CRM architectures that synchronize Salesforce and Dynamics 365 ecosystems with actionable business intelligence. We eliminate revenue leakage through data-driven results that secure the growth of customer assets and streamline global capabilities."
        icon={Users}
        gradient="from-purple-500 to-pink-500"
        badge=""
      />

      {/* Overview Section */}
      <section className="relative py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-4xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Quality Through Every Stage
              </h2>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                At Cogniron, CRM is a high-performance success engine. Our services unify Salesforce and Dynamics 365 modules with advanced BI platforms like Power BI and Tableau, enabling stakeholders to visualize how implementation quality directly influences retention and the bottom line.
              </p>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                From migration to maintenance, our CRM ecosystem mitigates lifecycle friction through proactive communication and rapid issue resolution. We leverage industry best practices into customizations so every enterprise client feels supported and prioritized.
              </p>
              <div
                className="rounded-xl p-6"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))'
                    : 'linear-gradient(135deg, rgba(147, 51, 234, 0.08), rgba(236, 72, 153, 0.08))',
                  border: `1px solid ${theme === 'dark' ? 'rgba(147, 51, 234, 0.2)' : 'rgba(147, 51, 234, 0.15)'}`,
                }}
              >
                <h4 className="mb-3 flex items-center" style={{ color: 'var(--text-primary)' }}>
                  <Heart className="w-5 h-5 text-pink-500 mr-2" />
                  Customer-First Philosophy
                </h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Every architectural decision is evaluated through the lens of customer impact. Our solutions ensure Salesforce and Dynamics 365 priorities always align with user expectations, stakeholder value, and long-term success.
                </p>
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
                <h3 className="text-xl mb-6" style={{ color: 'var(--text-primary)' }}>Performance Metrics</h3>
                <div className="space-y-6">
                  {metrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span style={{ color: 'var(--text-secondary)' }}>{metric.label}</span>
                        <span className="text-2xl gradient-text">
                          {metric.value}
                        </span>
                      </div>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{metric.description}</p>
                      {index < metrics.length - 1 && (
                        <div
                          className="mt-4 h-px"
                          style={{
                            background: theme === 'dark'
                              ? 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)'
                              : 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.08), transparent)',
                          }}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <div className="mb-4">
                <SectionTag text="Customer Success Experience" icon={Users} />
              </div>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Extensive CRM Service Suite
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Six connected pillars designed to elevate customer engagement and quality outcomes:
              </p>
            </div>
            <FeatureGrid features={capabilities} columns={3} />
          </div>

          {/* Features Detail */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <div className="mb-4">
                <SectionTag text="Platform Capabilities" icon={Zap} />
              </div>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Features Built for Customer Success
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-8 transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Points */}
          <div>
            <div className="text-center mb-16">
              <div className="mb-4">
                <SectionTag text="Integration Capabilities" icon={Target} />
              </div>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Seamless Integrations for a Unified View
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Centralize customer data, eliminate data silos, and deliver stakeholder-ready reports using industry-leading platforms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: 'BI Platforms',
                  tools: ['Power BI', 'Tableau', 'enterprise data warehouses'],
                  integration: '',
                },
                {
                  category: 'CRM Ecosystem',
                  tools: ['Salesforce (Marketing, Sales, Service Clouds)', 'Dynamics 365'],
                  integration: '',
                },
                {
                  category: 'Data Strategy',
                  tools: ['Secure, role-based access control', '3rd party tool integration'],
                  integration: '',
                },
              ].map((integration, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <Zap className="w-8 h-8 text-purple-500 mb-4" />
                  <h3 className="text-lg mb-4" style={{ color: 'var(--text-primary)' }}>{integration.category}</h3>
                  <div className="space-y-2 mb-4">
                    {integration.tools.map((tool, idx) => (
                      <div key={idx} className="text-sm flex items-center" style={{ color: 'var(--text-secondary)' }}>
                        <div className="w-1 h-1 rounded-full bg-purple-500 mr-2"></div>
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="relative py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-4">
              <SectionTag text="Customer Lifecycle" icon={TrendingUp} />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
              End-to-End Journey Management
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Structured approach to customer success at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                phase: 'Onboarding',
                icon: Users,
                activities: ['Requirement assessment', 'configuration', 'secure architecture design'],
                duration: 'Week 1–2',
              },
              {
                phase: 'Execution',
                icon: Zap,
                activities: ['Lead, Campaign, and Opportunity management', 'real-time performance tracking'],
                duration: 'Ongoing',
              },
              {
                phase: 'Review',
                icon: BarChart3,
                activities: ['Dashboard analysis of trends', 'KPIs', 'metric-based improvements'],
                duration: 'Bi-weekly',
              },
              {
                phase: 'Renewal',
                icon: Heart,
                activities: ['Value demonstration', 'ROI tracking', 'roadmap refinement for continued growth'],
                duration: 'Quarterly',
              },
            ].map((stage, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
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
                      ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))'
                      : 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
                  }}
                >
                  <stage.icon className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{stage.phase}</h3>
                <div className="flex items-center text-sm mb-4" style={{ color: '#9333EA' }}>
                  <Clock className="w-4 h-4 mr-1" />
                  {stage.duration}
                </div>
                <ul className="space-y-2">
                  {stage.activities.map((activity, idx) => (
                    <li key={idx} className="text-sm flex items-start" style={{ color: 'var(--text-secondary)' }}>
                      <div className="w-1 h-1 rounded-full bg-pink-500 mr-2 mt-1.5 flex-shrink-0"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-4">
              <SectionTag text="Client Success Stories" icon={Heart} />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
              Real impact derived from our customer-centric approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: 'Enterprise SaaS Provider',
                challenge: 'Limited alignment between QA and customer success',
                outcome: '60% fewer support tickets • 98% retention • +25 NPS increase',
              },
              {
                company: 'Financial Services Platform',
                challenge: 'No visibility into quality\'s impact on customer satisfaction',
                outcome: 'Real-time quality-to-CSAT mapping • 40% faster issue resolution',
              },
              {
                company: 'Healthcare Technology',
                challenge: 'Manual reporting consuming 20+ hours weekly',
                outcome: 'Automated dashboards saving 80+ hours monthly • Higher stakeholder engagement',
              },
            ].map((story, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-8 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div className="mb-4" style={{ color: '#9333EA' }}>{story.company}</div>
                <h3 className="text-lg mb-3" style={{ color: 'var(--text-primary)' }}>Challenge:</h3>
                <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>{story.challenge}</p>
                <h3 className="text-lg mb-3" style={{ color: 'var(--text-primary)' }}>Outcome:</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{story.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Transform Customer Success with Quality"
        description="Create a unified ecosystem where enterprise CRM and Business Intelligence move together."
        primaryButtonText="Schedule a Demo"
        primaryButtonLink="/contact"
        secondaryButtonText="Connect with our Architects"
        secondaryButtonLink="/contact"
      />
    </PageContainer>
  );
}