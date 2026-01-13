import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Building2, TrendingUp, Award, Target, Zap, Users, CheckCircle2 } from 'lucide-react';
import { PageContainer } from '../components/PageContainer';
import { useTheme } from '../contexts/ThemeContext';

// Sample success stories data
const successStories = {
  'global-bank-digital-transformation': {
    id: 'global-bank-digital-transformation',
    category: 'Success Story',
    title: 'Global Bank Accelerates Digital Transformation with 60% Faster Releases',
    subtitle: 'How a Fortune 500 financial institution transformed QA to enable continuous delivery',
    customer: {
      name: 'Leading Global Bank',
      industry: 'Financial Services',
      size: '50,000+ employees',
      region: 'Global',
      revenue: '$50B+ annually'
    },
    date: 'November 2025',
    duration: '18-month partnership',
    tags: ['Financial Services', 'Digital Transformation', 'Test Automation', 'DevOps'],
    
    heroMetrics: [
      { value: '60%', label: 'Faster Releases', icon: Zap },
      { value: '85%', label: 'Test Coverage', icon: Target },
      { value: '-50%', label: 'Defect Leakage', icon: Award },
      { value: '40%', label: 'Cost Reduction', icon: TrendingUp }
    ],
    
    challenge: {
      title: 'The Challenge: Legacy Testing Blocking Digital Innovation',
      context: `A top-10 global bank with millions of customers faced a critical challenge: their legacy testing practices were blocking digital transformation initiatives. Despite investing heavily in modern development practices, quality assurance remained a bottleneck.`,
      painPoints: [
        {
          title: 'Slow Release Cycles',
          description: 'Quarterly releases taking 6-8 weeks for regression testing, preventing rapid feature delivery'
        },
        {
          title: 'Manual Testing Burden',
          description: '80% manual testing requiring 200+ QA resources, creating unsustainable cost and scaling challenges'
        },
        {
          title: 'Quality Gaps',
          description: '15-20 critical defects escaping to production per quarter, impacting customer trust'
        },
        {
          title: 'Regulatory Constraints',
          description: 'Strict compliance requirements (SOX, PCI-DSS) demanding comprehensive audit trails'
        }
      ]
    },
    
    storyline: [
      {
        phase: 'Before',
        title: 'Legacy QA Bottleneck',
        description: 'Quarterly release cycles, 80% manual testing, high defect leakage rates, and unsustainable QA costs preventing digital innovation.'
      },
      {
        phase: 'During',
        title: 'Transformation Journey',
        description: 'Implemented AI-powered test automation, established DevOps integration, built quality dashboards, and trained teams on modern practices over 18 months.'
      },
      {
        phase: 'After',
        title: 'Continuous Delivery Excellence',
        description: 'Bi-weekly releases, 85% automated coverage, 50% reduction in defects, and 40% cost savings enabling rapid innovation.'
      }
    ],
    
    outcomes: [
      { metric: '60%', label: 'Faster Releases', description: 'From quarterly to bi-weekly deployments' },
      { metric: '85%', label: 'Test Coverage', description: 'Automated end-to-end testing' },
      { metric: '-50%', label: 'Defect Leakage', description: 'Production issues eliminated' },
      { metric: '40%', label: 'Cost Savings', description: 'QA efficiency improvements' },
      { metric: '4x', label: 'Deployment Frequency', description: 'Accelerated time-to-market' },
      { metric: '99.9%', label: 'Platform Uptime', description: 'Enhanced reliability' }
    ],
    
    testimonials: [
      {
        quote: "The transformation Cogniron led wasn't just about faster testing—it fundamentally changed how we deliver value to customers. We're now shipping features that used to take quarters in just weeks, with higher quality.",
        author: 'Jennifer Martinez',
        role: 'Chief Technology Officer',
        company: 'Global Bank'
      },
      {
        quote: "What impressed me most was the focus on sustainable change. Cogniron didn't just implement tools—they built our team's capabilities and established practices that continue to deliver value years later.",
        author: 'David Kim',
        role: 'VP of Quality Engineering',
        company: 'Global Bank'
      }
    ]
  },
  
  'healthcare-saas-scale': {
    id: 'healthcare-saas-scale',
    category: 'Success Story',
    title: 'Healthcare SaaS Scales to 1000+ Hospitals with Zero Downtime',
    subtitle: 'How cognitive testing and production monitoring enabled hypergrowth without quality compromise',
    customer: {
      name: 'Leading Healthcare SaaS Platform',
      industry: 'Healthcare Technology',
      size: '2,000+ employees',
      region: 'North America',
      revenue: '$500M+ ARR'
    },
    date: 'October 2025',
    duration: '12-month partnership',
    tags: ['Healthcare', 'SaaS', 'Scalability', 'Production Monitoring'],
    
    heroMetrics: [
      { value: '1000+', label: 'Hospitals Onboarded', icon: Building2 },
      { value: '99.99%', label: 'Platform Uptime', icon: Target },
      { value: 'Zero', label: 'HIPAA Violations', icon: Award },
      { value: '-75%', label: 'Incident Response Time', icon: Zap }
    ],
    
    challenge: {
      title: 'The Challenge: Scaling Without Breaking',
      context: `A rapidly growing healthcare SaaS platform serving 200 hospitals faced a critical inflection point. Customer demand was exploding, but their testing and monitoring capabilities couldn't scale without dramatically increasing costs and risking quality.`,
      painPoints: [
        {
          title: 'Hypergrowth Pressure',
          description: 'Customer base growing 400% year-over-year, requiring rapid onboarding without quality compromise'
        },
        {
          title: 'Multi-Tenancy Complexity',
          description: 'Each hospital required isolated testing and validation, creating exponential complexity'
        },
        {
          title: 'Production Incidents',
          description: 'Average of 8-10 severity-1 incidents per month impacting patient care workflows'
        },
        {
          title: 'Compliance at Scale',
          description: 'HIPAA compliance testing taking 4-6 weeks per major release, blocking deployments'
        }
      ]
    },
    
    storyline: [
      {
        phase: 'Before',
        title: 'Scaling Challenges',
        description: '200 hospitals served, 8-10 monthly incidents, 6-week compliance cycles, and manual multi-tenant testing creating growth bottlenecks.'
      },
      {
        phase: 'During',
        title: 'Quality at Scale Implementation',
        description: 'Deployed cognitive monitoring, automated compliance testing, built multi-tenant frameworks, and implemented predictive analytics over 12 months.'
      },
      {
        phase: 'After',
        title: 'Hypergrowth Enabled',
        description: '1000+ hospitals onboarded, 99.99% uptime, zero HIPAA violations, and 90% incident reduction supporting explosive growth.'
      }
    ],
    
    outcomes: [
      { metric: '1000+', label: 'Hospitals', description: 'Successfully onboarded and supported' },
      { metric: '99.99%', label: 'Uptime', description: 'Platform reliability maintained' },
      { metric: 'Zero', label: 'Violations', description: 'HIPAA compliance perfect record' },
      { metric: '-90%', label: 'Incidents', description: 'Severity-1 issues eliminated' },
      { metric: '-75%', label: 'Response Time', description: 'Faster incident resolution' },
      { metric: '400%', label: 'Growth', description: 'YoY customer growth sustained' }
    ],
    
    testimonials: [
      {
        quote: "Cogniron's platform was instrumental in our ability to scale from 200 to 1000+ hospitals without compromising on quality or compliance. Their AI-powered monitoring has become mission-critical for us.",
        author: 'Dr. Michael Chen',
        role: 'Chief Product Officer',
        company: 'Healthcare SaaS Platform'
      },
      {
        quote: "The automated compliance testing alone saved us months of effort and gave our customers confidence in our security posture. We can now onboard enterprise hospitals in days instead of months.",
        author: 'Lisa Rodriguez',
        role: 'VP of Compliance',
        company: 'Healthcare SaaS Platform'
      }
    ]
  }
};

export function SuccessStoryDetailPage() {
  const { theme } = useTheme();
  const { id } = useParams<{ id: string }>();
  
  const story = id ? successStories[id as keyof typeof successStories] : successStories['global-bank-digital-transformation'];
  
  if (!story) {
    return (
      <PageContainer>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>Success Story Not Found</h1>
            <Link to="/case-studies" className="text-blue-500 hover:text-blue-600">← Back to Success Stories</Link>
          </div>
        </div>
      </PageContainer>
    );
  }
  
  const relatedStories = Object.values(successStories)
    .filter(s => s.id !== story.id)
    .slice(0, 1);

  return (
    <PageContainer>
      {/* Breadcrumbs */}
      <section className="relative pt-32 pb-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 transition-colors hover:underline"
            style={{ color: theme === 'dark' ? '#34D399' : '#059669' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Success Stories
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pb-16 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="absolute inset-0" style={{ opacity: theme === 'dark' ? 0.3 : 0.1 }}>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(52, 211, 153, 0.2))' : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.1))', border: `1px solid ${theme === 'dark' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.2)'}` }}>
            <Award className="w-4 h-4" style={{ color: theme === 'dark' ? '#34D399' : '#059669' }} />
            <span style={{ color: theme === 'dark' ? '#34D399' : '#059669' }} className="text-sm">{story.category}</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
            {story.title}
          </h1>
          
          <p className="text-xl mb-12" style={{ color: 'var(--text-secondary)' }}>
            {story.subtitle}
          </p>
          
          {/* Hero Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {story.heroMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="backdrop-blur-sm rounded-2xl p-6 text-center" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
                  <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #10B981, #34D399)' }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl bg-gradient-to-r from-emerald-500 to-green-400 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Overview */}
      <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-8" style={{ color: 'var(--text-primary)' }}>Customer Profile</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="backdrop-blur-sm rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5" style={{ color: theme === 'dark' ? '#34D399' : '#059669' }} />
                <h3 className="text-sm" style={{ color: 'var(--text-secondary)' }}>Company</h3>
              </div>
              <p style={{ color: 'var(--text-primary)' }}>{story.customer.name}</p>
            </div>
            
            <div className="backdrop-blur-sm rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5" style={{ color: theme === 'dark' ? '#34D399' : '#059669' }} />
                <h3 className="text-sm" style={{ color: 'var(--text-secondary)' }}>Industry</h3>
              </div>
              <p style={{ color: 'var(--text-primary)' }}>{story.customer.industry}</p>
            </div>
            
            <div className="backdrop-blur-sm rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5" style={{ color: theme === 'dark' ? '#34D399' : '#059669' }} />
                <h3 className="text-sm" style={{ color: 'var(--text-secondary)' }}>Size</h3>
              </div>
              <p style={{ color: 'var(--text-primary)' }}>{story.customer.size}</p>
            </div>
            
            <div className="backdrop-blur-sm rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5" style={{ color: theme === 'dark' ? '#34D399' : '#059669' }} />
                <h3 className="text-sm" style={{ color: 'var(--text-secondary)' }}>Region</h3>
              </div>
              <p style={{ color: 'var(--text-primary)' }}>{story.customer.region}</p>
            </div>
            
            <div className="backdrop-blur-sm rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5" style={{ color: theme === 'dark' ? '#34D399' : '#059669' }} />
                <h3 className="text-sm" style={{ color: 'var(--text-secondary)' }}>Revenue</h3>
              </div>
              <p style={{ color: 'var(--text-primary)' }}>{story.customer.revenue}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>{story.challenge.title}</h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>{story.challenge.context}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {story.challenge.painPoints.map((pain, index) => (
              <div key={index} className="backdrop-blur-sm rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                <h3 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{pain.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storyline: Before → During → After */}
      <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-12 text-center" style={{ color: 'var(--text-primary)' }}>The Journey</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {story.storyline.map((phase, index) => (
              <div key={index} className="backdrop-blur-sm rounded-2xl p-8 text-center" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #10B981, #34D399)' }}>
                  <span className="text-white text-2xl">{index + 1}</span>
                </div>
                <div className="text-sm mb-2" style={{ color: theme === 'dark' ? '#34D399' : '#059669' }}>{phase.phase}</div>
                <h3 className="text-xl mb-4" style={{ color: 'var(--text-primary)' }}>{phase.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-12 text-center" style={{ color: 'var(--text-primary)' }}>Results & Impact</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {story.outcomes.map((outcome, index) => (
              <div key={index} className="backdrop-blur-sm rounded-2xl p-6 text-center" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                <div className="text-4xl bg-gradient-to-r from-emerald-500 to-green-400 bg-clip-text text-transparent mb-3">
                  {outcome.metric}
                </div>
                <div className="text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{outcome.label}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{outcome.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl blur-2xl" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(52, 211, 153, 0.2))' : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.1))' }}></div>
            <div className="relative backdrop-blur-sm rounded-3xl p-12" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
              <h2 className="text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>What They're Saying</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {story.testimonials.map((testimonial, index) => (
                  <div key={index} className="backdrop-blur-sm rounded-2xl p-8" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
                    <div className="text-4xl mb-4" style={{ color: theme === 'dark' ? '#34D399' : '#059669' }}>"</div>
                    <blockquote className="text-lg mb-6 italic" style={{ color: 'var(--text-secondary)' }}>
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #10B981, #34D399)' }}>
                        <span className="text-white">{testimonial.author.charAt(0)}</span>
                      </div>
                      <div>
                        <div style={{ color: 'var(--text-primary)' }}>{testimonial.author}</div>
                        <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl blur-2xl" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(52, 211, 153, 0.2))' : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.1))' }}></div>
            <div className="relative backdrop-blur-sm rounded-3xl p-12" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
              <h2 className="text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>Start Your Success Story</h2>
              <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>Let's discuss how Cogniron can help you achieve transformational results</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)', color: '#FFFFFF', boxShadow: theme === 'dark' ? '0 0 30px rgba(16, 185, 129, 0.3)' : '0 4px 20px rgba(16, 185, 129, 0.2)' }}
                >
                  Schedule Consultation
                </Link>
                <Link 
                  to="/case-studies" 
                  className="px-8 py-4 rounded-lg transition-all duration-300"
                  style={{ backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                >
                  More Success Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Stories */}
      {relatedStories.length > 0 && (
        <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl mb-12" style={{ color: 'var(--text-primary)' }}>More Success Stories</h2>
            
            <div className="grid md:grid-cols-1 gap-8">
              {relatedStories.map((relatedStory) => (
                <Link 
                  key={relatedStory.id}
                  to={`/success-stories/${relatedStory.id}`}
                  className="group backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.01]"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}
                >
                  <div className="p-8">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-sm mb-4"
                      style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(52, 211, 153, 0.2))' : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.1))', color: theme === 'dark' ? '#34D399' : '#059669', border: `1px solid ${theme === 'dark' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.2)'}` }}
                    >
                      {relatedStory.customer.industry}
                    </span>
                    <h3 className="text-2xl mb-3 group-hover:text-emerald-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {relatedStory.title}
                    </h3>
                    <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>{relatedStory.subtitle}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {relatedStory.heroMetrics.map((metric, index) => (
                        <div key={index} className="text-center p-3 rounded-lg" style={{ backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.5)' : 'rgba(241, 245, 249, 1)' }}>
                          <div className="text-2xl bg-gradient-to-r from-emerald-500 to-green-400 bg-clip-text text-transparent">
                            {metric.value}
                          </div>
                          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageContainer>
  );
}