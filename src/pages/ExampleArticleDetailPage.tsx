import React from 'react';
import { Building2, TrendingUp, MapPin, Clock, CheckCircle2, Lightbulb, Target, Zap, Award } from 'lucide-react';
import { ArticleDetailLayout } from '../components/ArticleDetailLayout';
import { ArticleContentSection, KeyHighlights, MetadataCard, CalloutBox, StepsSection } from '../components/ArticleContentSection';

/**
 * EXAMPLE ARTICLE DETAIL PAGE
 * 
 * This demonstrates how to use the reusable ArticleDetailLayout component
 * for Case Studies, Blog Articles, or Success Stories.
 * 
 * The layout automatically handles:
 * - Light/Dark theme switching
 * - Responsive design (desktop/tablet/mobile)
 * - Consistent structure across all article types
 * - Color theming per article category
 */

export function ExampleArticleDetailPage() {
  // EXAMPLE 1: CASE STUDY
  const caseStudyExample = (
    <ArticleDetailLayout
      // Navigation
      backLink="/case-studies"
      backText="Back to All Case Studies"
      
      // Hero Section
      hero={{
        category: 'Case Study',
        categoryColor: 'blue', // blue | purple | green
        title: 'FinTech Platform Achieves 99.9% Security Coverage',
        subtitle: 'How a leading digital banking platform transformed their security testing with AI-driven cognitive assurance',
        author: 'Cogniron Solutions Team',
        date: 'November 2025',
        readTime: '8 min read',
        tags: ['Security', 'FinTech', 'AI-Driven', 'Cognitive Assurance'],
      }}
      
      // Sidebar Content (Optional)
      sidebar={
        <>
          <h3 className="text-xl mb-6" style={{ color: 'var(--text-primary)' }}>Case Overview</h3>
          <MetadataCard items={[
            { label: 'Client', value: 'Global Digital Banking Platform', icon: <Building2 className="w-4 h-4" /> },
            { label: 'Industry', value: 'Financial Services', icon: <TrendingUp className="w-4 h-4" /> },
            { label: 'Region', value: 'North America', icon: <MapPin className="w-4 h-4" /> },
            { label: 'Engagement', value: '12 months', icon: <Clock className="w-4 h-4" /> },
          ]} />
          
          <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
            <div className="text-center p-6 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))' }}>
              <div className="text-4xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-sm" style={{ color: 'var(--text-primary)' }}>Security Coverage</div>
              <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>+45% improvement</div>
            </div>
          </div>
        </>
      }
      
      // Metrics
      metrics={[
        { metric: '85%', label: 'Alert Reduction', description: 'Eliminated noise from false positives', icon: <Target className="w-6 h-6 text-white" /> },
        { metric: '99.9%', label: 'Coverage', description: 'Critical threat detection rate', icon: <CheckCircle2 className="w-6 h-6 text-white" /> },
        { metric: '-75%', label: 'MTTR', description: 'Faster threat resolution', icon: <Zap className="w-6 h-6 text-white" /> },
        { metric: '3x', label: 'Efficiency', description: 'Security team productivity gain', icon: <Award className="w-6 h-6 text-white" /> },
      ]}
      
      // Testimonials
      testimonials={[
        {
          quote: "Cogniron's cognitive security approach transformed how we handle threats. We went from drowning in alerts to having crystal-clear visibility into real risks. The 75% reduction in MTTR alone saved us millions in potential incident costs.",
          author: 'Sarah Chen',
          role: 'Chief Information Security Officer',
          company: 'Global Digital Banking Platform',
        },
      ]}
      
      // CTA
      ctaTitle="Ready for Similar Results?"
      ctaDescription="Let's discuss how Cogniron can transform your quality assurance operations"
      ctaPrimaryText="Schedule Consultation"
      ctaPrimaryLink="/contact"
      ctaSecondaryText="View More Case Studies"
      ctaSecondaryLink="/case-studies"
      
      // Related Content
      relatedTitle="Related Case Studies"
      relatedBasePath="/case-studies"
      relatedArticles={[
        {
          id: 'ecommerce-test-automation',
          title: 'E-Commerce Giant Reduces Testing Time by 70%',
          subtitle: 'AI-powered test automation enables daily deployments with 99% confidence',
          category: 'E-Commerce',
          metadata: '10 min read',
        },
        {
          id: 'healthcare-compliance',
          title: 'Healthcare Platform Achieves 100% HIPAA Compliance',
          subtitle: 'Automated compliance testing accelerates time-to-market',
          category: 'Healthcare',
          metadata: '12 min read',
        },
      ]}
    >
      {/* Main Content Sections */}
      <ArticleContentSection title="The Challenge" variant="alternate">
        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
          A rapidly growing digital banking platform was struggling with an overwhelming volume of security alerts and false positives. Their traditional security testing approach was generating over 10,000 alerts per week, with security teams spending 60% of their time triaging false positives instead of addressing real threats.
        </p>
        <p style={{ color: 'var(--text-secondary)' }}>The platform needed to:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2" style={{ color: 'var(--text-secondary)' }}>
          <li>Reduce false positive rates to focus on genuine threats</li>
          <li>Improve mean time to resolution (MTTR) for critical vulnerabilities</li>
          <li>Scale security testing to match rapid feature deployment cycles</li>
          <li>Achieve regulatory compliance across multiple jurisdictions</li>
        </ul>
      </ArticleContentSection>
      
      <ArticleContentSection title="Our Approach" maxWidth="wide">
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
          Cogniron implemented a comprehensive Cognitive Security Testing solution combined with AI-powered SIEM correlation:
        </p>
        <StepsSection
          title=""
          steps={[
            {
              title: 'Intelligent Threat Detection',
              description: 'Deployed ML models trained on financial services threat patterns to identify genuine security risks with 99.9% accuracy',
            },
            {
              title: 'AI-Driven Alert Correlation',
              description: 'Implemented cognitive SIEM that automatically correlates events across systems, reducing alert volume by 85%',
            },
            {
              title: 'Risk-Based Prioritization',
              description: 'Built predictive models that score vulnerabilities based on actual business impact and exploit probability',
            },
            {
              title: 'Automated Remediation',
              description: 'Created intelligent workflows that suggest and automate fixes for common vulnerability patterns',
            },
          ]}
        />
      </ArticleContentSection>
      
      <ArticleContentSection variant="alternate">
        <CalloutBox
          type="Pro Tip"
          variant="tip"
          icon={<Lightbulb className="w-6 h-6 text-white" />}
          content="Start with your most critical systems when implementing cognitive security testing. Focus on high-volume alert sources first to demonstrate immediate ROI and build organizational confidence."
        />
      </ArticleContentSection>
      
      <ArticleContentSection title="Implementation Details" maxWidth="medium">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="backdrop-blur-sm rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5" style={{ color: '#06B6D4' }} />
              <h3 style={{ color: 'var(--text-primary)' }}>Timeline</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>3 months to full deployment</p>
          </div>
          
          <div className="backdrop-blur-sm rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5" style={{ color: '#06B6D4' }} />
              <h3 style={{ color: 'var(--text-primary)' }}>Scope</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>500+ microservices, 15 development teams</p>
          </div>
        </div>
        
        <div className="backdrop-blur-sm rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
          <h3 className="mb-4" style={{ color: 'var(--text-primary)' }}>Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            {['OWASP ZAP', 'Burp Suite', 'Snyk', 'Custom ML Models', 'Splunk SIEM', 'Azure Sentinel'].map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 rounded-lg text-sm"
                style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </ArticleContentSection>
    </ArticleDetailLayout>
  );
  
  // EXAMPLE 2: BLOG ARTICLE
  const blogExample = (
    <ArticleDetailLayout
      backLink="/blog"
      backText="Back to Blog"
      
      hero={{
        category: 'AI & Innovation',
        categoryColor: 'purple',
        title: 'The AI Testing Revolution: How Machine Learning is Transforming Quality Assurance',
        subtitle: 'Exploring the fundamental shift from traditional testing to cognitive quality assurance',
        author: 'Dr. Sarah Chen, Chief AI Strategist',
        date: 'December 1, 2025',
        readTime: '12 min read',
        tags: ['AI Testing', 'Machine Learning', 'Automation', 'Innovation'],
      }}
      
      sidebar={
        <>
          <KeyHighlights
            title="Key Takeaways"
            highlights={[
              'AI-powered testing reduces maintenance overhead by 90%',
              'Cognitive approaches enable 5x increase in test coverage',
              'ML-driven analytics helps focus testing on high-risk areas',
              'Implementation can start with focused pilots',
              'QA roles are evolving to strategic quality advisors',
            ]}
            icon={<CheckCircle2 className="w-4 h-4" style={{ color: '#A78BFA' }} />}
          />
        </>
      }
      
      ctaTitle="Want to Learn More?"
      ctaDescription="Subscribe to our insights or talk to an expert about implementing these strategies"
      ctaPrimaryText="Subscribe to Insights"
      ctaPrimaryLink="/insights"
      ctaSecondaryText="Talk to an Expert"
      ctaSecondaryLink="/contact"
      
      relatedTitle="Related Articles"
      relatedBasePath="/blog"
      relatedArticles={[
        {
          id: 'shift-left-security',
          title: 'Shift-Left Security: Integrating Security Testing into Development',
          category: 'Security',
          metadata: '10 min read',
        },
      ]}
    >
      <ArticleContentSection>
        <p className="mb-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          The quality assurance landscape is experiencing a seismic shift. As AI and machine learning technologies mature, they're not just augmenting traditional testing practices—they're fundamentally reimagining how we think about software quality.
        </p>
        <p className="mb-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          In this comprehensive guide, we'll explore how cognitive testing approaches are reshaping the QA industry and what this means for testing professionals, development teams, and organizations at large.
        </p>
      </ArticleContentSection>
      
      <ArticleContentSection title="The Limitations of Traditional Testing" variant="alternate">
        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
          Traditional testing approaches, while effective for decades, are struggling to keep pace with modern software development:
        </p>
        <ul className="list-disc pl-6 space-y-2" style={{ color: 'var(--text-secondary)' }}>
          <li>Manual testing can't scale with CI/CD velocity</li>
          <li>Scripted automation becomes brittle as UIs evolve</li>
          <li>Test coverage gaps emerge as complexity increases</li>
          <li>False positives consume valuable engineering time</li>
        </ul>
      </ArticleContentSection>
      
      <ArticleContentSection>
        <CalloutBox
          type="Framework"
          variant="info"
          icon={<Lightbulb className="w-6 h-6 text-white" />}
          title="The Cognitive Testing Framework"
          content="Cognitive testing leverages three pillars: Self-healing automation that adapts to UI changes, intelligent test generation from requirements, and predictive analytics that identify high-risk areas before deployment."
        />
      </ArticleContentSection>
    </ArticleDetailLayout>
  );
  
  // EXAMPLE 3: SUCCESS STORY
  const successStoryExample = (
    <ArticleDetailLayout
      backLink="/case-studies"
      backText="Back to Success Stories"
      
      hero={{
        category: 'Success Story',
        categoryColor: 'green',
        title: 'Global Bank Accelerates Digital Transformation with 60% Faster Releases',
        subtitle: 'How a Fortune 500 financial institution transformed QA to enable continuous delivery',
        date: 'November 2025',
        tags: ['Financial Services', 'Digital Transformation', 'Test Automation', 'DevOps'],
      }}
      
      sidebar={
        <>
          <h3 className="text-xl mb-6" style={{ color: 'var(--text-primary)' }}>Customer Profile</h3>
          <MetadataCard items={[
            { label: 'Company', value: 'Leading Global Bank', icon: <Building2 className="w-4 h-4" /> },
            { label: 'Industry', value: 'Financial Services', icon: <TrendingUp className="w-4 h-4" /> },
            { label: 'Size', value: '50,000+ employees', icon: <Award className="w-4 h-4" /> },
            { label: 'Region', value: 'Global', icon: <MapPin className="w-4 h-4" /> },
          ]} />
        </>
      }
      
      metrics={[
        { metric: '60%', label: 'Faster Releases', icon: <Zap className="w-6 h-6 text-white" /> },
        { metric: '85%', label: 'Test Coverage', icon: <Target className="w-6 h-6 text-white" /> },
        { metric: '-50%', label: 'Defect Leakage', icon: <Award className="w-6 h-6 text-white" /> },
        { metric: '40%', label: 'Cost Reduction', icon: <TrendingUp className="w-6 h-6 text-white" /> },
      ]}
      
      testimonials={[
        {
          quote: "The transformation Cogniron led wasn't just about faster testing—it fundamentally changed how we deliver value to customers. We're now shipping features that used to take quarters in just weeks, with higher quality.",
          author: 'Jennifer Martinez',
          role: 'Chief Technology Officer',
          company: 'Global Bank',
        },
      ]}
      
      ctaTitle="Start Your Success Story"
      ctaDescription="Let's discuss how Cogniron can help you achieve transformational results"
      ctaPrimaryText="Schedule Consultation"
      ctaPrimaryLink="/contact"
      ctaSecondaryText="More Success Stories"
      ctaSecondaryLink="/case-studies"
      
      relatedTitle="More Success Stories"
      relatedBasePath="/success-stories"
      relatedArticles={[
        {
          id: 'healthcare-saas-scale',
          title: 'Healthcare SaaS Scales to 1000+ Hospitals with Zero Downtime',
          category: 'Healthcare',
        },
      ]}
    >
      <ArticleContentSection title="The Challenge: Legacy Testing Blocking Digital Innovation" variant="alternate">
        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
          A top-10 global bank with millions of customers faced a critical challenge: their legacy testing practices were blocking digital transformation initiatives. Despite investing heavily in modern development practices, quality assurance remained a bottleneck.
        </p>
      </ArticleContentSection>
      
      <ArticleContentSection title="The Journey">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { phase: 'Before', title: 'Legacy QA Bottleneck', desc: 'Quarterly releases, 80% manual testing, high defect rates' },
            { phase: 'During', title: 'Transformation Journey', desc: 'AI-powered automation, DevOps integration, team training' },
            { phase: 'After', title: 'Continuous Delivery Excellence', desc: 'Bi-weekly releases, 85% automation, 50% fewer defects' },
          ].map((item, index) => (
            <div key={index} className="backdrop-blur-sm rounded-2xl p-8 text-center" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #10B981, #34D399)' }}>
                <span className="text-white text-2xl">{index + 1}</span>
              </div>
              <div className="text-sm mb-2" style={{ color: '#34D399' }}>{item.phase}</div>
              <h3 className="text-xl mb-4" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </ArticleContentSection>
    </ArticleDetailLayout>
  );
  
  // Return one of the examples (you can switch between them)
  return caseStudyExample; // or blogExample or successStoryExample
}
