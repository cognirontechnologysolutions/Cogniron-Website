import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, Lightbulb, CheckCircle2, BookOpen } from 'lucide-react';
import { PageContainer } from '../components/PageContainer';
import { useTheme } from '../contexts/ThemeContext';
import { additionalBlogArticles } from './blog/additionalBlogArticles';
import { moreBlogArticles } from './blog/moreBlogArticles';

// Sample blog articles data
const blogArticles = {
  'ai-testing-transformation': {
    id: 'ai-testing-transformation',
    category: 'AI & Innovation',
    title: 'The AI Testing Revolution: How Machine Learning is Transforming Quality Assurance',
    subtitle: 'Exploring the fundamental shift from traditional testing to cognitive quality assurance',
    author: {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Strategist',
      bio: 'Leading AI research and innovation in quality assurance with 15+ years of experience in machine learning and software testing.',
      avatar: 'SC'
    },
    date: 'December 1, 2025',
    readTime: '12 min read',
    tags: ['AI Testing', 'Machine Learning', 'Automation', 'Innovation'],
    
    intro: `The quality assurance landscape is experiencing a seismic shift. As AI and machine learning technologies mature, they're not just augmenting traditional testing practices—they're fundamentally reimagining how we think about software quality.

In this comprehensive guide, we'll explore how cognitive testing approaches are reshaping the QA industry and what this means for testing professionals, development teams, and organizations at large.`,
    
    sections: [
      {
        title: 'The Limitations of Traditional Testing',
        content: `Traditional testing approaches, while effective for decades, are struggling to keep pace with modern software development:

• Manual testing can't scale with CI/CD velocity
• Scripted automation becomes brittle as UIs evolve
• Test coverage gaps emerge as complexity increases
• False positives consume valuable engineering time

The average enterprise maintains 10,000+ test cases, with 40% requiring constant maintenance due to application changes. This creates a testing bottleneck that slows releases and reduces confidence in quality.`
      },
      {
        title: 'Enter Cognitive Testing: The AI-Powered Approach',
        content: `Cognitive testing leverages machine learning to transform how we approach quality assurance:

**Self-Healing Test Automation**
ML models learn application patterns and automatically adapt test scripts when UI elements change. This reduces maintenance overhead by up to 90% compared to traditional automation.

**Intelligent Test Generation**
Natural language processing enables teams to generate comprehensive test scenarios from user stories and requirements. AI analyzes patterns to suggest additional edge cases human testers might miss.

**Predictive Quality Analytics**
Machine learning models analyze historical defect data, code changes, and test results to predict where bugs are most likely to occur—enabling risk-based testing that focuses effort where it matters most.`
      },
      {
        title: 'Real-World Impact: The Numbers Speak',
        content: `Organizations implementing cognitive testing approaches are seeing transformational results:

• 70% reduction in test execution time through intelligent test selection
• 90% decrease in test maintenance effort via self-healing automation
• 5x increase in defect detection through AI-powered scenario generation
• 85% improvement in false positive reduction using ML correlation

These aren't incremental improvements—they represent a fundamental shift in testing economics and effectiveness.`
      }
    ],
    
    keyTakeaways: [
      'AI-powered testing reduces maintenance overhead by 90% through self-healing automation',
      'Cognitive approaches enable 5x increase in test coverage through intelligent generation',
      'ML-driven predictive analytics helps teams focus testing effort on high-risk areas',
      'Implementation can start with focused pilots and scale progressively',
      'QA roles are evolving from executors to strategic quality advisors'
    ],
    
    callout: {
      type: 'Pro Tip',
      content: 'Start with your most brittle, high-maintenance test suites when piloting cognitive testing. These areas deliver the fastest ROI and build organizational confidence in AI-powered approaches.'
    }
  },
  
  'shift-left-security': {
    id: 'shift-left-security',
    category: 'Security & Compliance',
    title: 'Shift-Left Security: Integrating Security Testing into Development Workflows',
    subtitle: 'A practical guide to embedding security validation throughout the SDLC',
    author: {
      name: 'Marcus Johnson',
      role: 'Security Testing Lead',
      bio: 'Cybersecurity expert specializing in DevSecOps and shift-left security practices with 12 years of experience.',
      avatar: 'MJ'
    },
    date: 'November 28, 2025',
    readTime: '10 min read',
    tags: ['Security', 'DevSecOps', 'Shift-Left', 'Best Practices'],
    
    intro: `Security vulnerabilities discovered in production cost 100x more to fix than those caught during development. Yet most organizations still treat security testing as a pre-release checkpoint rather than a continuous development practice.

This comprehensive guide explores how to shift security left—embedding it throughout your development workflow for faster, more secure software delivery.`,
    
    sections: [
      {
        title: 'The Cost of Late-Stage Security Discovery',
        content: `Traditional security testing happens too late in the SDLC:

**The Reality of Late-Stage Security**
- Security scans conducted only before production release
- Critical vulnerabilities discovered days before launch
- Emergency fixes rushed through without proper testing
- Release delays costing millions in lost opportunity

Organizations following this pattern spend 60% of security budgets on remediation rather than prevention. The average data breach costs $4.45M—far more than proactive security investment.`
      },
      {
        title: 'Core Principles of Shift-Left Security',
        content: `Effective shift-left security is built on four foundational principles:

**1. Automated Security Gates**
Every code commit triggers automated security scans:
- Static Application Security Testing (SAST) in IDE
- Dependency vulnerability scanning in CI pipeline
- Container image security validation before deployment
- Infrastructure-as-Code security policy checks

**2. Developer Empowerment**
Security becomes a developer responsibility through:
- IDE plugins that flag vulnerabilities in real-time
- Security training integrated into onboarding
- Clear remediation guidance, not just vulnerability reports
- Secure coding templates and guardrails

**3. Continuous Validation**
Security testing runs continuously, not just at milestones:
- Pre-commit hooks for secret scanning
- PR checks for security policy compliance
- Daily dynamic security scans in staging environments
- Production runtime threat detection`
      },
      {
        title: 'Implementation Framework',
        content: `**Step 1: Baseline Current State**
- Map current security touchpoints in SDLC
- Identify critical security gaps and bottlenecks
- Measure time-to-fix for security issues
- Establish security metrics dashboard

**Step 2: Define Security Policies as Code**
- Codify organizational security requirements
- Create automated policy enforcement rules
- Version control security policies alongside code
- Enable policy exceptions with approval workflow

**Step 3: Integrate Security Tools into Workflow**
- Deploy SAST tools in developer IDEs
- Add dependency scanning to CI pipelines
- Implement container security in registries
- Enable DAST for deployed environments`
      }
    ],
    
    keyTakeaways: [
      'Shift-left security reduces remediation costs by 100x compared to late-stage discovery',
      'Automated security gates should run at every stage: commit, build, deploy, runtime',
      'Developer empowerment through training and tooling is critical for success',
      'Security policies defined as code enable consistent, automated enforcement',
      'Measuring MTTR and scan coverage validates shift-left effectiveness'
    ],
    
    callout: {
      type: 'Framework',
      content: 'The Security Feedback Loop: Developers should receive security feedback within 10 minutes of code commit. Anything longer creates context-switching overhead and slows adoption.'
    }
  }
};

export function BlogDetailPage() {
  const { theme } = useTheme();
  const { id } = useParams<{ id: string }>();
  
  // Merge all blog articles
  const allBlogArticles = {
    ...blogArticles,
    ...additionalBlogArticles,
    ...moreBlogArticles
  };
  
  const article = id ? allBlogArticles[id as keyof typeof allBlogArticles] : allBlogArticles['ai-testing-transformation'];
  
  if (!article) {
    return (
      <PageContainer>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>Article Not Found</h1>
            <Link to="/blog" className="text-blue-500 hover:text-blue-600">← Back to Blog</Link>
          </div>
        </div>
      </PageContainer>
    );
  }
  
  const relatedArticles = Object.values(allBlogArticles)
    .filter(a => a.id !== article.id)
    .slice(0, 2);

  return (
    <PageContainer>
      {/* Breadcrumbs */}
      <section className="relative pt-32 pb-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 transition-colors hover:underline"
            style={{ color: theme === 'dark' ? '#A78BFA' : '#7C3AED' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pb-16 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="absolute inset-0" style={{ opacity: theme === 'dark' ? 0.3 : 0.1 }}>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))' : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))', border: `1px solid ${theme === 'dark' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.2)'}` }}>
            <BookOpen className="w-4 h-4" style={{ color: theme === 'dark' ? '#A78BFA' : '#7C3AED' }} />
            <span style={{ color: theme === 'dark' ? '#A78BFA' : '#7C3AED' }} className="text-sm">{article.category}</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
            {article.title}
          </h1>
          
          <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
            {article.subtitle}
          </p>
          
          <div className="flex items-center gap-6 mb-8 pb-8" style={{ borderBottom: '1px solid var(--border-color)' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)' }}>
                <span className="text-white">{article.author.avatar}</span>
              </div>
              <div>
                <div style={{ color: 'var(--text-primary)' }}>{article.author.name}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{article.author.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 rounded-full text-sm"
                style={{ backgroundColor: theme === 'dark' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.05)', color: theme === 'dark' ? '#A78BFA' : '#7C3AED', border: `1px solid ${theme === 'dark' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.1)'}` }}
              >
                <Tag className="w-3 h-3 inline mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="prose prose-lg" style={{ color: 'var(--text-secondary)' }}>
            {article.intro.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      {article.sections.map((section, index) => (
        <section 
          key={index} 
          className="relative py-16" 
          style={{ background: index % 2 === 0 ? (theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)') : 'var(--bg-primary)' }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>{section.title}</h2>
            <div className="prose prose-lg">
              {section.content.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Callout Box */}
      {article.callout && (
        <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="backdrop-blur-sm rounded-2xl p-8" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))' : 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05))', border: `2px solid ${theme === 'dark' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.2)'}` }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)' }}>
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{article.callout.type}</h3>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{article.callout.content}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Key Takeaways */}
      <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-8" style={{ color: 'var(--text-primary)' }}>Key Takeaways</h2>
          <div className="grid gap-4">
            {article.keyTakeaways.map((takeaway, index) => (
              <div key={index} className="flex items-start gap-4 backdrop-blur-sm rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: theme === 'dark' ? '#8B5CF6' : '#7C3AED' }} />
                <p style={{ color: 'var(--text-secondary)' }}>{takeaway}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="backdrop-blur-sm rounded-2xl p-8" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
            <h3 className="text-xl mb-6" style={{ color: 'var(--text-primary)' }}>About the Author</h3>
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)' }}>
                <span className="text-white text-2xl">{article.author.avatar}</span>
              </div>
              <div>
                <div className="text-xl mb-2" style={{ color: 'var(--text-primary)' }}>{article.author.name}</div>
                <div className="mb-3" style={{ color: 'var(--text-secondary)' }}>{article.author.role}</div>
                <p style={{ color: 'var(--text-secondary)' }}>{article.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl blur-2xl" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))' : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))' }}></div>
            <div className="relative backdrop-blur-sm rounded-3xl p-12" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
              <h2 className="text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>Want to Learn More?</h2>
              <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>Subscribe to our insights or talk to an expert about implementing these strategies</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  to="/insights" 
                  className="px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)', color: '#FFFFFF', boxShadow: theme === 'dark' ? '0 0 30px rgba(139, 92, 246, 0.3)' : '0 4px 20px rgba(139, 92, 246, 0.2)' }}
                >
                  Subscribe to Insights
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-4 rounded-lg transition-all duration-300"
                  style={{ backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl mb-12" style={{ color: 'var(--text-primary)' }}>Related Articles</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link 
                  key={relatedArticle.id}
                  to={`/blog/${relatedArticle.id}`}
                  className="group backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}
                >
                  <div className="p-6">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-sm mb-4"
                      style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))' : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))', color: theme === 'dark' ? '#A78BFA' : '#7C3AED', border: `1px solid ${theme === 'dark' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.2)'}` }}
                    >
                      {relatedArticle.category}
                    </span>
                    <h3 className="text-xl mb-3 group-hover:text-purple-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{relatedArticle.subtitle}</p>
                    <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                      <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{relatedArticle.readTime}</div>
                      <User className="w-5 h-5" style={{ color: theme === 'dark' ? '#A78BFA' : '#7C3AED' }} />
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