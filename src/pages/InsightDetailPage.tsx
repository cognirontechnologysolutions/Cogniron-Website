import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Download, FileText, BookOpen, Tag, TrendingUp, Video, Lightbulb, CheckCircle2 } from 'lucide-react';
import { PageContainer } from '../components/PageContainer';
import { useTheme } from '../contexts/ThemeContext';

// Insight data matching InsightsPage.tsx
const insights = {
  'ai-in-qa-2025': {
    id: 'ai-in-qa-2025',
    title: 'The State of AI in Quality Assurance 2025',
    subtitle: 'Comprehensive research report analyzing AI adoption across 500+ testing organizations',
    category: 'Research Report',
    author: {
      name: 'Dr. Sarah Chen',
      role: 'Head of AI Research',
      bio: 'Leading AI research initiatives with 15+ years in quality assurance and machine learning applications.',
      avatar: 'SC'
    },
    date: 'November 2025',
    readTime: '45 min read',
    tags: ['AI/ML', 'Research', 'Testing Strategy', 'Industry Trends'],
    
    intro: `Artificial intelligence is transforming every facet of software quality assurance, from test generation to defect prediction. This comprehensive research report synthesizes insights from 500+ organizations across healthcare, finance, retail, and technology sectors to paint the definitive picture of AI adoption in QA as we enter 2025.

Our findings reveal that while AI adoption in testing is accelerating, most organizations remain in early experimental phases. This report provides quantified benchmarks, implementation patterns, and strategic frameworks to guide your AI testing journey.`,
    
    sections: [
      {
        title: 'Executive Summary: AI Adoption at an Inflection Point',
        content: `Our research reveals that 68% of organizations are now experimenting with AI-powered testing tools, up from just 23% in 2023. However, only 12% have achieved production-scale AI testing deployments.

**Key Findings**:
• **AI Test Generation**: 45% of organizations using AI to generate test cases, with 3.2x productivity gains reported
• **Intelligent Test Selection**: 38% leveraging ML models to predict which tests to run, reducing execution time by 60-75%
• **Defect Prediction**: 29% using historical data to predict defect-prone code areas before testing
• **Self-Healing Tests**: 52% experimenting with self-healing test automation, though only 8% in production
• **Visual Testing**: 61% adopting AI-powered visual regression testing tools

The gap between experimentation and production deployment highlights the primary challenge: organizations struggle to operationalize AI testing beyond proof-of-concept projects.`
      },
      {
        title: 'AI Testing Maturity Model: Where Organizations Stand',
        content: `We've identified five distinct maturity levels based on our research:

**Level 0 - Traditional Testing (18% of organizations)**:
No AI adoption. Fully manual or traditional automation approaches only.

**Level 1 - AI Awareness (32%)**:
Teams researching AI testing tools. Attended conferences, read articles, but no active implementation.

**Level 2 - Pilot Projects (38%)**:
Small-scale AI testing experiments. Typically 1-2 tools in evaluation with limited team exposure. This is where most organizations currently sit.

**Level 3 - Targeted Production Use (10%)**:
AI testing tools deployed for specific use cases (e.g., visual testing, test data generation). Still siloed rather than enterprise-wide.

**Level 4 - Strategic AI Testing (2%)**:
AI integrated across the testing lifecycle. Unified platform approach with dedicated AI testing COE (Center of Excellence). These organizations report 40-60% overall QA cost reduction.

The vast majority of organizations (70%) remain at Level 1-2, indicating significant room for maturation.`
      },
      {
        title: 'Top Use Cases: Where AI Delivers Immediate Value',
        content: `Based on reported ROI and adoption rates, we've identified the highest-value AI testing use cases:

**1. Visual Regression Testing (61% adoption, 4.5/5 satisfaction)**:
AI-powered visual comparison tools like Applitools and Percy deliver immediate value by automatically detecting UI changes across browsers and devices. Organizations report 70-85% reduction in visual testing time.

**2. Test Data Generation (47% adoption, 4.2/5 satisfaction)**:
AI systems generate realistic test data including edge cases that humans might miss. Particularly valuable for applications requiring large data volumes or complex referential integrity.

**3. Intelligent Test Selection (38% adoption, 4.7/5 satisfaction)**:
ML models analyze code changes and test coverage to predict which tests are most likely to fail. Despite lower adoption, this use case has the highest satisfaction due to 60-75% reduction in test execution time.

**4. Defect Prediction (29% adoption, 3.8/5 satisfaction)**:
Predictive models identify defect-prone code based on historical patterns, code complexity, and developer metrics. Enables targeted testing focus but requires significant historical data.

**5. Self-Healing Test Automation (27% production, 3.2/5 satisfaction)**:
AI automatically repairs broken tests when UI locators change. High experimental interest (52%) but low production deployment due to trust/reliability concerns.`
      },
      {
        title: 'Barriers to AI Testing Adoption',
        content: `While interest is high, organizations face significant hurdles:

**1. Data Quality & Volume (cited by 73% of respondents)**:
AI models require quality historical data. Many organizations lack comprehensive test results, defect tracking, or code history needed to train effective models.

**2. Skills Gap (68%)**:
QA teams often lack ML/AI expertise. Most AI testing tools require understanding of confidence thresholds, model training, and false positive management.

**3. Integration Complexity (61%)**:
Integrating AI tools into existing CI/CD pipelines, test frameworks, and reporting systems proves more complex than anticipated.

**4. Trust & Explainability (58%)**:
Teams struggle to trust "black box" AI decisions, especially for critical test selection or defect prediction. Lack of explainability reduces adoption.

**5. Cost & ROI Uncertainty (54%)**:
AI testing tools often carry premium pricing. Without clear ROI metrics, securing budget approval is challenging.`
      },
      {
        title: 'Strategic Recommendations: Your AI Testing Roadmap',
        content: `Based on successful implementations across our research sample:

**Short Term (0-6 months): Start with High-ROI, Low-Risk Use Cases**
• Deploy AI-powered visual testing for web/mobile applications
• Implement synthetic test data generation for non-production environments
• Use AI code review tools to predict defect-prone areas

**Medium Term (6-18 months): Expand to Core Testing Activities**
• Deploy intelligent test selection in CI/CD pipelines
• Implement AI-powered API testing and contract validation
• Begin collecting data for custom ML model training

**Long Term (18+ months): Strategic Transformation**
• Build centralized AI testing platform with unified data pipeline
• Establish AI Testing Center of Excellence (CoE)
• Develop custom ML models for organization-specific patterns
• Integrate AI across full SDLC (requirements, development, testing, monitoring)

**Critical Success Factors**:
• Executive sponsorship and dedicated budget allocation
• Cross-functional collaboration between QA, Dev, and Data Science teams
• Phased rollout with measurable success criteria
• Investment in training and capability building
• Focus on augmenting human testers, not replacing them`
      },
      {
        title: 'The Future: AI Testing in 2027',
        content: `Based on current trajectories and expert interviews, we predict:

**Near-Term (2025-2026)**:
• AI test generation becomes standard in major IDEs and testing frameworks
• Self-healing tests achieve 80%+ accuracy, driving mainstream adoption
• AI-powered performance testing predicts scalability issues during development
• Natural language test case authoring (write tests in plain English) goes mainstream

**Medium-Term (2026-2027)**:
• End-to-end autonomous testing systems handle routine regression testing with minimal human oversight
• AI testing assistants become as common as code completion tools
• Predictive quality models provide real-time risk assessment during development
• Industry consolidation creates 2-3 dominant AI testing platforms

**Key Uncertainty**: Will proprietary AI testing platforms dominate, or will open-source ML testing frameworks democratize access? Current trends favor proprietary solutions (78% market share), but open-source alternatives are gaining momentum.

Organizations that begin building AI testing capabilities today will hold a significant competitive advantage as these technologies mature.`
      }
    ],
    
    keyTakeaways: [
      '68% of organizations experimenting with AI testing, but only 12% have achieved production-scale deployment',
      'Visual regression testing (61% adoption) and test data generation (47%) lead in AI testing adoption',
      'Intelligent test selection delivers highest satisfaction (4.7/5) despite lower adoption (38%)',
      'Data quality, skills gaps, and trust concerns remain primary barriers to AI testing adoption',
      'Start with high-ROI use cases like visual testing before expanding to strategic AI transformation'
    ],
    
    callout: {
      type: 'Research Insight',
      content: 'Organizations with dedicated AI Testing Centers of Excellence report 40-60% QA cost reduction and 3-5x faster time-to-market compared to peers. However, establishing a CoE requires 18-24 months and executive-level commitment. The investment pays off for organizations with 50+ person QA teams, but smaller teams should focus on tactical AI tool adoption first.'
    }
  },
  
  'shift-left-guide': {
    id: 'shift-left-guide',
    title: 'Shift-Left Testing: A Practical Implementation Guide',
    subtitle: 'Step-by-step framework for embedding quality practices throughout the development lifecycle',
    category: 'Best Practice Guide',
    author: {
      name: 'Michael Rodriguez',
      role: 'VP of Quality Engineering',
      bio: 'Quality transformation leader with experience guiding Fortune 500 companies through agile and DevOps transitions.',
      avatar: 'MR'
    },
    date: 'November 2025',
    readTime: '30 min read',
    tags: ['Shift-Left', 'Best Practices', 'Process Improvement', 'DevOps'],
    
    intro: `Shift-left testing—moving quality activities earlier in the development lifecycle—has evolved from buzzword to business imperative. Yet most organizations struggle to operationalize shift-left beyond surface-level changes.

This practical guide provides a proven framework for shifting testing left in enterprise environments, complete with implementation roadmaps, organizational change strategies, and metrics to measure success.`,
    
    sections: [
      {
        title: 'Why Shift-Left? The Business Case for Early Testing',
        content: `The core principle of shift-left testing is simple: find defects when they're cheapest to fix.

**The Cost Multiplier Effect**:
• Defect found during requirements: 1x cost to fix
• Defect found during development: 5-10x cost
• Defect found during QA testing: 10-15x cost
• Defect found in production: 100x cost (includes business impact)

These numbers are well-established, yet most organizations still discover 60-70% of defects during dedicated QA phases or in production.

**Real-World Impact**:
A financial services company we worked with reduced their production defects by 73% after implementing comprehensive shift-left practices. More importantly, their time-to-market improved by 40% because teams spent less time fixing defects and more time building new features.

**Beyond Cost**: Shift-left also improves developer satisfaction (less context switching), customer experience (fewer production issues), and business agility (faster, more confident releases).`
      },
      {
        title: 'The Three Pillars of Shift-Left Testing',
        content: `Effective shift-left implementations rest on three foundational pillars:

**Pillar 1: Shift-Left in Process**
Move testing activities earlier in the SDLC:
• Test planning during requirements/design
• Unit testing as code is written (TDD)
• Static code analysis during development
• Security scanning on code commit
• Performance testing in dev environments

**Pillar 2: Shift-Left in People**
Developers become quality-first practitioners:
• Developers write and maintain automated tests
• QA engineers become quality coaches
• Quality champions embedded in each team
• Shared ownership of quality metrics

**Pillar 3: Shift-Left in Tools**
Enable early testing through tooling:
• IDE-integrated testing and analysis tools
• Pre-commit hooks for quality gates
• Fast feedback loops (test results in <10 minutes)
• Self-service test environments
• Integrated test data management

Most failed shift-left initiatives focus only on Pillar 1 (process) without addressing people and tools. All three pillars must advance together.`
      },
      {
        title: 'Phase 1: Foundation (Months 1-3)',
        content: `Before shifting left, establish the foundation that makes early testing possible.

**1. Implement Comprehensive Version Control**
• All code, tests, and infrastructure in Git
• Branching strategy supports parallel development
• Pull request workflow with required reviews

**2. Establish Basic CI/CD Pipeline**
• Automated builds on every commit
• Unit tests run automatically
• Build/test status visible to all developers

**3. Create Fast, Disposable Test Environments**
• Developers can spin up test environments in <15 minutes
• Environments identical to production (containers/IaC)
• Automated data provisioning

**4. Define Quality Metrics & Baselines**
• Code coverage (unit test baseline: 70%)
• Defect escape rate (defects found in prod vs. earlier)
• Mean time to detection (MTTD) and resolution (MTTR)
• Deployment frequency and change failure rate

**Success Criteria**: Developers can write code, test locally, commit, and see automated test results within 30 minutes.`
      },
      {
        title: 'Phase 2: Developer Enablement (Months 4-9)',
        content: `Equip developers with skills and tools to own quality.

**1. Training & Capability Building**
• TDD/BDD workshops for development teams
• Security awareness training (OWASP Top 10)
• Performance testing fundamentals
• Test automation frameworks

**2. Quality Champions Program**
• Identify 1-2 quality champions per squad
• Champions receive advanced testing training
• Facilitate knowledge sharing across teams
• Monthly quality champions forums

**3. Self-Service Testing Infrastructure**
• Developers can run full test suites locally
• Performance testing environments available on-demand
• Test data generation tools
• Visual testing integrated into IDE

**4. Shift QA Role from Gatekeeper to Enabler**
• QA engineers pair with developers on test design
• Code reviews include test quality assessment
• QA builds reusable test frameworks/utilities
• QA leads exploratory testing for complex scenarios

**Success Criteria**: Developers write automated tests before code review. 80%+ of defects found before code reaches QA.`
      },
      {
        title: 'Phase 3: Advanced Practices (Months 10-18)',
        content: `Build on the foundation with advanced shift-left techniques.

**1. Automated Security Testing**
• Static Application Security Testing (SAST) on commit
• Dependency vulnerability scanning
• Container image scanning
• Infrastructure-as-Code security validation

**2. Production-Like Performance Testing**
• Performance tests in CI for critical flows
• Load testing triggered by code changes
• Chaos engineering in staging environments

**3. Progressive Delivery with Quality Gates**
• Feature flags enable testing in production
• Canary deployments with automated rollback
• A/B testing with quality metrics
• Observability-driven development

**4. Predictive Quality Analytics**
• ML models predict defect-prone code
• Risk-based test selection
• Automated test suite optimization
• Real-time quality dashboards

**Success Criteria**: 95%+ of defects found before production. Deployment frequency 10x baseline. Change failure rate <5%.`
      },
      {
        title: 'Overcoming Common Obstacles',
        content: `Based on implementations across 50+ organizations, here are the most common obstacles and solutions:

**"Developers Don't Have Time to Write Tests"**
Solution: Make writing tests faster than not writing them. Provide test templates, generators, and frameworks that reduce effort. Track defect fix time vs. test writing time to show ROI.

**"Our Legacy Codebase Can't Be Unit Tested"**
Solution: Don't rewrite everything. Use the Strangler Fig pattern—wrap legacy code with characterization tests, then refactor incrementally. Set 70% coverage goal for new code only.

**"QA Team Fears Becoming Obsolete"**
Solution: Reframe shift-left as QA evolution, not elimination. QA roles become more strategic (test architecture, quality coaching, complex exploratory testing) rather than repetitive execution.

**"Tools Are Too Expensive"**
Solution: Start with open-source tools (JUnit, Selenium, SonarQube, OWASP ZAP). Prove value before investing in commercial platforms. Many tools offer free tiers for small teams.

**"Management Won't Give Us Time for Quality"**
Solution: Quantify the cost of NOT investing. Track time spent fixing production defects, customer escalations, and delayed releases. Frame shift-left as velocity enhancement, not quality tax.`
      }
    ],
    
    keyTakeaways: [
      'Shift-left reduces defect fix costs by 10-100x by catching issues during development instead of production',
      'Three pillars—Process, People, and Tools—must advance together for successful shift-left transformation',
      'Start with foundation (CI/CD, test environments) before expecting developers to own quality',
      'Reframe QA role from gatekeeper to enabler, focusing on coaching and advanced testing',
      'Phased 18-month implementation achieves 95%+ defects found pre-production in enterprise environments'
    ],
    
    callout: {
      type: 'Implementation Tip',
      content: 'The biggest predictor of shift-left success is the first metric you choose to track. Don\'t start with code coverage—it\'s gameable and doesn\'t directly measure quality. Instead, track "defect escape rate" (production defects / total defects found). This aligns teams around the true goal: finding defects early, not just writing tests.'
    }
  }
};

export function InsightDetailPage() {
  const { theme } = useTheme();
  const { id } = useParams<{ id: string }>();
  
  const insight = id ? insights[id as keyof typeof insights] : insights['ai-in-qa-2025'];
  
  if (!insight) {
    return (
      <PageContainer>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>Insight Not Found</h1>
            <Link to="/insights" className="text-blue-500 hover:text-blue-600">← Back to Insights</Link>
          </div>
        </div>
      </PageContainer>
    );
  }
  
  const relatedInsights = Object.values(insights)
    .filter(i => i.id !== insight.id)
    .slice(0, 2);
  
  return (
    <PageContainer>
      {/* Breadcrumb */}
      <section className="relative pt-24 pb-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <Link
            to="/insights"
            className="inline-flex items-center transition-colors mb-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights Hub
          </Link>
        </div>
      </section>

      {/* Article Hero */}
      <section className="relative pb-12" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-6 flex items-center flex-wrap gap-3">
            <span
              className="px-4 py-2 rounded-full text-sm"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                  : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
                border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}`,
                color: theme === 'dark' ? '#06B6D4' : '#0284C7',
              }}
            >
              {insight.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
            {insight.title}
          </h1>

          {insight.subtitle && (
            <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              {insight.subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8" style={{ borderBottom: '1px solid var(--border-color)' }}>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">{insight.author.avatar}</span>
              </div>
              <div>
                <div className="text-sm" style={{ color: 'var(--text-primary)' }}>{insight.author.name}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{insight.author.role}</div>
              </div>
            </div>
            <div className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
              <Calendar className="w-4 h-4 mr-2" />
              {insight.date}
            </div>
            <div className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
              <Clock className="w-4 h-4 mr-2" />
              {insight.readTime}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {insight.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.08)',
                  border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.15)'}`,
                  color: theme === 'dark' ? '#60A5FA' : '#2563EB',
                }}
              >
                <Tag className="w-3 h-3 inline mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative py-12" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="mb-12">
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {insight.intro}
                  </p>
                </div>

                {/* Sections */}
                {insight.sections.map((section, index) => (
                  <div key={index} className="mb-12">
                    <h2 className="text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>
                      {section.title}
                    </h2>
                    <div
                      className="text-lg leading-relaxed whitespace-pre-line"
                      style={{ color: 'var(--text-secondary)' }}
                      dangerouslySetInnerHTML={{ __html: section.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                    />
                  </div>
                ))}

                {/* Callout */}
                {insight.callout && (
                  <div
                    className="my-12 p-8 rounded-2xl"
                    style={{
                      background: theme === 'dark'
                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))'
                        : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))',
                      border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <Lightbulb className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: theme === 'dark' ? '#60A5FA' : '#2563EB' }} />
                      <div>
                        <h4 className="text-lg mb-3" style={{ color: 'var(--text-primary)' }}>
                          {insight.callout.type}
                        </h4>
                        <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {insight.callout.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Key Takeaways */}
                <div
                  className="p-6 rounded-2xl"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <h3 className="text-xl mb-4 flex items-center" style={{ color: 'var(--text-primary)' }}>
                    <BookOpen className="w-5 h-5 mr-2" />
                    Key Takeaways
                  </h3>
                  <ul className="space-y-3">
                    {insight.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: theme === 'dark' ? '#10B981' : '#059669' }} />
                        <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {takeaway}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Author Bio */}
                <div
                  className="p-6 rounded-2xl"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <h3 className="text-xl mb-4" style={{ color: 'var(--text-primary)' }}>About the Author</h3>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg font-semibold">{insight.author.avatar}</span>
                    </div>
                    <div>
                      <div className="text-lg mb-1" style={{ color: 'var(--text-primary)' }}>{insight.author.name}</div>
                      <div className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>{insight.author.role}</div>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{insight.author.bio}</p>
                    </div>
                  </div>
                </div>

                {/* Download CTA */}
                <div
                  className="p-6 rounded-2xl text-center"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))'
                      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(6, 182, 212, 0.08))',
                    border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.15)'}`,
                  }}
                >
                  <Download className="w-8 h-8 mx-auto mb-4" style={{ color: theme === 'dark' ? '#60A5FA' : '#2563EB' }} />
                  <h4 className="text-lg mb-2" style={{ color: 'var(--text-primary)' }}>Download Full Report</h4>
                  <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>Get the complete PDF with additional data and appendices</p>
                  <button
                    className="w-full px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
                      color: '#FFFFFF',
                      boxShadow: theme === 'dark' ? '0 0 30px rgba(59, 130, 246, 0.3)' : '0 4px 20px rgba(59, 130, 246, 0.2)',
                    }}
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - matching master CTA background */}
      <section
        className="relative py-24 overflow-hidden"
      >
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
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
            Ready to Transform Your QA Practice?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Let's discuss how Cogniron can help you implement these insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 group"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                color: '#FFFFFF',
                boxShadow: 'var(--shadow-accent)',
              }}
            >
              <span className="mr-2">Talk to an Expert</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/insights"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
              }}
            >
              Explore More Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Related Insights */}
      <section className="relative py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
            Related Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedInsights.map((related) => (
              <Link
                key={related.id}
                to={`/insights/${related.id}`}
                className="group backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <span
                  className="px-3 py-1 rounded-full text-sm inline-block mb-4"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
                    border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}`,
                    color: theme === 'dark' ? '#06B6D4' : '#0284C7',
                  }}
                >
                  {related.category}
                </span>
                <h3 className="text-xl mb-3 group-hover:text-blue-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {related.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {related.subtitle}
                </p>
                <div className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <Clock className="w-4 h-4 mr-1" />
                  {related.readTime}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}