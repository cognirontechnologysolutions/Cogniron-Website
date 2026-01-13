import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Building2, TrendingUp, CheckCircle2, Award, Users } from 'lucide-react';
import { PageContainer } from '../components/PageContainer';
import { useTheme } from '../contexts/ThemeContext';

// Sample case study data
const caseStudies = {
  'fintech-security-testing': {
    id: 'fintech-security-testing',
    category: 'Case Study',
    title: 'FinTech Platform Achieves 99.9% Security Coverage',
    subtitle: 'How a leading digital banking platform transformed their security testing with AI-driven cognitive assurance',
    client: 'Global Digital Banking Platform',
    industry: 'Financial Services',
    region: 'North America',
    engagement: '12 months',
    solutionType: 'Cognitive Security Testing + SIEM',
    heroMetric: { value: '99.9%', label: 'Security Coverage', change: '+45%' },
    author: 'Cogniron Solutions Team',
    date: 'November 2025',
    readTime: '8 min read',
    tags: ['Security', 'FinTech', 'AI-Driven', 'Cognitive Assurance'],
    
    problem: {
      title: 'The Challenge',
      content: `A rapidly growing digital banking platform was struggling with an overwhelming volume of security alerts and false positives. Their traditional security testing approach was generating over 10,000 alerts per week, with security teams spending 60% of their time triaging false positives instead of addressing real threats.

The platform needed to:
• Reduce false positive rates to focus on genuine threats
• Improve mean time to resolution (MTTR) for critical vulnerabilities
• Scale security testing to match rapid feature deployment cycles
• Achieve regulatory compliance across multiple jurisdictions`,
    },
    
    solution: {
      title: 'Our Approach',
      content: `Cogniron implemented a comprehensive Cognitive Security Testing solution combined with AI-powered SIEM correlation:`,
      steps: [
        {
          title: 'Intelligent Threat Detection',
          description: 'Deployed ML models trained on financial services threat patterns to identify genuine security risks with 99.9% accuracy'
        },
        {
          title: 'AI-Driven Alert Correlation',
          description: 'Implemented cognitive SIEM that automatically correlates events across systems, reducing alert volume by 85%'
        },
        {
          title: 'Risk-Based Prioritization',
          description: 'Built predictive models that score vulnerabilities based on actual business impact and exploit probability'
        },
        {
          title: 'Automated Remediation',
          description: 'Created intelligent workflows that suggest and automate fixes for common vulnerability patterns'
        }
      ]
    },
    
    results: [
      { metric: '85%', label: 'Alert Reduction', description: 'Eliminated noise from false positives' },
      { metric: '99.9%', label: 'Coverage', description: 'Critical threat detection rate' },
      { metric: '-75%', label: 'MTTR', description: 'Faster threat resolution' },
      { metric: '3x', label: 'Efficiency', description: 'Security team productivity gain' }
    ],
    
    testimonial: {
      quote: "Cogniron's cognitive security approach transformed how we handle threats. We went from drowning in alerts to having crystal-clear visibility into real risks. The 75% reduction in MTTR alone saved us millions in potential incident costs.",
      author: 'Sarah Chen',
      role: 'Chief Information Security Officer',
      company: 'Global Digital Banking Platform'
    },
    
    implementation: {
      timeline: '3 months to full deployment',
      scope: '500+ microservices, 15 development teams',
      stack: ['OWASP ZAP', 'Burp Suite', 'Snyk', 'Custom ML Models', 'Splunk SIEM', 'Azure Sentinel']
    }
  },
  
  'ecommerce-test-automation': {
    id: 'ecommerce-test-automation',
    category: 'Case Study',
    title: 'E-Commerce Giant Reduces Testing Time by 70%',
    subtitle: 'AI-powered test automation enables daily deployments with 99% confidence',
    client: 'Top 10 Global E-Commerce Platform',
    industry: 'Retail & E-Commerce',
    region: 'Global',
    engagement: '18 months',
    solutionType: 'Cognitive Test Automation + DevOps Integration',
    heroMetric: { value: '-70%', label: 'Test Execution Time', change: 'From 12h to 3.6h' },
    author: 'Cogniron Automation Team',
    date: 'October 2025',
    readTime: '10 min read',
    tags: ['Test Automation', 'E-Commerce', 'AI-Driven', 'DevOps'],
    
    problem: {
      title: 'The Challenge',
      content: `A leading e-commerce platform with 50M+ daily active users was constrained by slow, brittle test automation. Their existing test suite took 12+ hours to run, creating a bottleneck that prevented daily deployments and slowed time-to-market for critical features.

Key pain points:
• 12-hour test execution cycles limiting deployment frequency
• 40% test maintenance overhead due to UI changes
• Inability to scale testing for peak shopping seasons
• Limited confidence in release quality despite extensive testing`,
    },
    
    solution: {
      title: 'Our Approach',
      content: `Cogniron deployed an AI-powered cognitive test automation platform:`,
      steps: [
        {
          title: 'Self-Healing Test Framework',
          description: 'Implemented ML-powered test scripts that automatically adapt to UI changes, reducing maintenance by 90%'
        },
        {
          title: 'Intelligent Test Selection',
          description: 'Built predictive models that identify which tests to run based on code changes, reducing execution time by 70%'
        },
        {
          title: 'Parallel Execution Architecture',
          description: 'Designed cloud-native test infrastructure that scales to 500+ parallel test runners during peak seasons'
        },
        {
          title: 'AI-Driven Test Generation',
          description: 'Deployed natural language test creation that generates comprehensive test scenarios from user stories'
        }
      ]
    },
    
    results: [
      { metric: '-70%', label: 'Execution Time', description: 'From 12 hours to 3.6 hours' },
      { metric: '-90%', label: 'Maintenance', description: 'Self-healing automation' },
      { metric: '5x', label: 'Coverage', description: 'More scenarios tested' },
      { metric: '99%', label: 'Confidence', description: 'Release quality score' }
    ],
    
    testimonial: {
      quote: "The transformation has been remarkable. We went from quarterly releases to daily deployments with higher confidence. The AI-driven test automation doesn't just run faster—it's smarter, adapting to our rapid UI changes without constant maintenance.",
      author: 'Michael Rodriguez',
      role: 'VP of Engineering',
      company: 'Global E-Commerce Platform'
    },
    
    implementation: {
      timeline: '6 months to full rollout',
      scope: '10,000+ test scenarios, 25 agile teams',
      stack: ['Testim', 'Selenium', 'Applitools', 'Kubernetes', 'Jenkins', 'Custom AI Models']
    }
  },
  
  'medicare-health-platform': {
    id: 'medicare-health-platform',
    category: 'Case Study',
    title: 'MediCare Health Platform: Zero-Downtime Compliance at Scale',
    subtitle: 'How a healthcare technology leader achieved 100% HIPAA compliance while scaling to 50+ system integrations',
    client: 'MediCare Health Platform',
    industry: 'Healthcare Technology',
    region: 'North America',
    engagement: '12 months',
    solutionType: 'PQLM + Security Testing + CRM',
    heroMetric: { value: '100%', label: 'HIPAA Compliance', change: 'Zero audit findings' },
    author: 'Cogniron Healthcare Practice',
    date: 'November 2025',
    readTime: '12 min read',
    tags: ['Healthcare', 'PQLM', 'Security', 'Compliance', 'SOC 2'],
    
    problem: {
      title: 'The Challenge',
      content: `MediCare Health Platform, a Series C healthcare technology company serving 200+ organizations, faced critical challenges scaling their compliance and quality processes. With HIPAA requirements and complex integrations to 50+ disparate healthcare systems, their manual testing approach created dangerous bottlenecks.

Key challenges:
• Manual integration testing taking 3-4 weeks per new healthcare system connection
• No systematic HIPAA compliance validation across development lifecycle
• SOC 2 Type II certification blocked, preventing $15M+ in enterprise contracts
• Audit preparation requiring 3 months of manual documentation and evidence gathering
• Production integration failures affecting 10,000+ patients
• 40% of engineering capacity consumed by manual testing and compliance work`,
    },
    
    solution: {
      title: 'Our Approach',
      content: `Cogniron implemented a comprehensive Product Quality Lifecycle Management (PQLM) framework specifically designed for healthcare technology:`,
      steps: [
        {
          title: 'Compliance-First PQLM Framework',
          description: 'Embedded automated HIPAA and SOC 2 compliance validation throughout the development lifecycle with real-time monitoring and executive dashboards'
        },
        {
          title: 'Integration Testing Automation',
          description: 'Built intelligent test generation supporting HL7, FHIR, and proprietary protocols with synthetic patient data generation and API contract testing'
        },
        {
          title: 'Security Testing & Validation',
          description: 'Implemented comprehensive security framework including automated penetration testing, vulnerability scanning, and access control validation'
        },
        {
          title: 'Quality Intelligence Platform',
          description: 'Deployed real-time quality metrics and predictive analytics providing executive visibility into compliance status and integration health'
        }
      ]
    },
    
    results: [
      { metric: '100%', label: 'Compliance', description: 'Zero HIPAA audit findings' },
      { metric: '85%', label: 'Faster Testing', description: 'Integration cycle time reduction' },
      { metric: 'SOC 2', label: 'Type II', description: 'Achieved in 4 months' },
      { metric: '$15M+', label: 'Revenue Unlocked', description: 'Enterprise contracts enabled' }
    ],
    
    testimonial: {
      quote: "Security and compliance are non-negotiable in healthcare. Cogniron gave us the confidence to scale rapidly while staying fully compliant. The PQLM framework didn't just solve our immediate challenges—it became our competitive advantage. We went from 6-week integration cycles to 1 week, unlocking our growth strategy.",
      author: 'Dr. Sarah Martinez',
      role: 'CEO & Co-founder',
      company: 'MediCare Health Platform'
    },
    
    implementation: {
      timeline: '12 months across 4 phases',
      scope: '50+ healthcare system integrations, 500+ employees',
      stack: ['Synthetic Patient Data Engine', 'HL7/FHIR Testing Framework', 'OWASP ZAP', 'Burp Suite', 'SonarQube', 'Splunk SIEM', 'Custom Compliance Dashboard']
    }
  },
  
  'cloudsuite-saas': {
    id: 'cloudsuite-saas',
    category: 'Case Study',
    title: 'CloudSuite SaaS: 3x Release Velocity with Quality Confidence',
    subtitle: 'How a fast-growing SaaS platform embedded quality into rapid 2-week sprint cycles',
    client: 'CloudSuite SaaS Platform',
    industry: 'SaaS & Enterprise Software',
    region: 'Global',
    engagement: '9 months',
    solutionType: 'X-first Shift-Left + PQLM + CRM',
    heroMetric: { value: '3x', label: 'Release Velocity', change: 'Monthly to weekly releases' },
    author: 'Cogniron SaaS Practice',
    date: 'October 2025',
    readTime: '9 min read',
    tags: ['SaaS', 'X-first', 'PQLM', 'Agile', 'DevOps'],
    
    problem: {
      title: 'The Challenge',
      content: `CloudSuite, a Series B enterprise collaboration SaaS platform with 500+ enterprise customers, was struggling to maintain quality while supporting aggressive 2-week sprint cycles. Their rapid feature development cadence was creating quality bottlenecks that threatened customer satisfaction and market competitiveness.

Key challenges:
• Quality testing happening too late in 2-week sprints (test phase days 10-14)
• Defects discovered in final days forcing last-minute scope cuts or delayed releases
• Manual regression testing consuming entire final week of each sprint
• 89% customer retention rate declining due to quality issues in releases
• Engineering team spending 35% of time on post-release hotfixes
• No systematic approach to quality across 15 development teams`,
    },
    
    solution: {
      title: 'Our Approach',
      content: `Cogniron implemented a comprehensive X-first shift-left methodology that embedded quality validation from day 1 of each sprint:`,
      steps: [
        {
          title: 'X-first Requirement Validation',
          description: 'Implemented ambiguity engineering workshops at sprint planning, catching 70% of potential defects before coding begins through systematic requirement clarification'
        },
        {
          title: 'Shift-Left Test Automation',
          description: 'Deployed automated unit, integration, and API tests running on every commit with 10-minute feedback loops, catching issues immediately rather than days later'
        },
        {
          title: 'Continuous Integration Quality Gates',
          description: 'Built quality gates at every stage—commit, build, integration, deployment—with automated go/no-go decisions based on coverage, complexity, and test results'
        },
        {
          title: 'Sprint-Aligned PQLM Framework',
          description: 'Designed quality lifecycle management synchronized to 2-week sprints, with quality metrics visible to product owners and stakeholders in real-time'
        }
      ]
    },
    
    results: [
      { metric: '90%', label: 'Automation', description: 'Comprehensive test coverage' },
      { metric: '10min', label: 'Feedback', description: 'From commit to test results' },
      { metric: '3x', label: 'Velocity', description: 'Monthly to weekly releases' },
      { metric: '98%', label: 'Retention', description: 'Customer satisfaction up from 89%' }
    ],
    
    testimonial: {
      quote: "We can now release confidently every week instead of every month. The shift-left approach didn't just speed us up—it embedded quality into our DNA. Developers now write better code because they get immediate feedback, and our customers notice the difference in product stability.",
      author: 'James Patterson',
      role: 'Head of Engineering',
      company: 'CloudSuite SaaS'
    },
    
    implementation: {
      timeline: '9 months with phased rollout across 15 teams',
      scope: '15 agile teams, 120 engineers, 50+ microservices',
      stack: ['Jest', 'Cypress', 'TestCafe', 'SonarQube', 'Jenkins', 'GitHub Actions', 'DataDog', 'Custom Quality Dashboard']
    }
  },
  
  'paytech-solutions': {
    id: 'paytech-solutions',
    category: 'Case Study',
    title: 'PayTech Solutions: Zero-Downtime Legacy Modernization',
    subtitle: 'Migrating a critical payment platform processing $50B annually without a single minute of downtime',
    client: 'PayTech Solutions',
    industry: 'Financial Services',
    region: 'North America',
    engagement: '12 months',
    solutionType: 'PQLM + Cognitive Assurance + Production Monitoring',
    heroMetric: { value: '0min', label: 'Downtime', change: 'During entire migration' },
    author: 'Cogniron FinTech Practice',
    date: 'September 2025',
    readTime: '11 min read',
    tags: ['FinTech', 'PQLM', 'Legacy Modernization', 'Cognitive Assurance', 'Zero Downtime'],
    
    problem: {
      title: 'The Challenge',
      content: `PayTech Solutions, a payment processor handling $50B in annual transaction volume for 10,000+ merchants, faced a critical mandate: modernize their 15-year-old monolithic payment platform to a cloud-native microservices architecture—without a single minute of downtime or transaction failure.

Mission-critical constraints:
• 24/7/365 uptime requirement processing 100,000+ transactions per hour
• Zero tolerance for payment failures (each failure = merchant revenue loss + regulatory penalty)
• Complete backward compatibility with 10,000+ existing API integrations
• PCI DSS compliance maintained throughout migration
• 18-month timeline with quarterly milestone validations
• Parallel operation of legacy and new systems during transition`,
    },
    
    solution: {
      title: 'Our Approach',
      content: `Cogniron designed and executed a sophisticated phased migration strategy with comprehensive quality validation at every stage:`,
      steps: [
        {
          title: 'Dual-System PQLM Framework',
          description: 'Architected quality processes supporting simultaneous testing of legacy system, new microservices, and hybrid transaction flows with automated validation of functional equivalence'
        },
        {
          title: 'Shadow Traffic Testing',
          description: 'Implemented shadow traffic replication sending 100% of production transactions to new system in parallel, validating output equivalence without impacting live transactions'
        },
        {
          title: 'Cognitive Anomaly Detection',
          description: 'Deployed AI-powered monitoring detecting transaction pattern deviations in real-time, with automatic rollback triggers if anomalies exceeded baselines'
        },
        {
          title: 'Phased Migration Orchestration',
          description: 'Executed gradual merchant migration in cohorts (1% → 5% → 25% → 100%) with comprehensive regression testing and automated rollback capabilities at each phase'
        }
      ]
    },
    
    results: [
      { metric: '0', label: 'Downtime', description: 'Zero minutes across migration' },
      { metric: '50%', label: 'Performance', description: 'Transaction processing speed' },
      { metric: '99.5%', label: 'Compatibility', description: 'APIs backward compatible' },
      { metric: '6mo', label: 'Early Completion', description: '18-month plan done in 12' }
    ],
    
    testimonial: {
      quote: "The most complex migration we've ever undertaken, executed flawlessly with zero customer impact. Cogniron's quality framework gave us confidence to migrate $50 billion in annual transactions without a single failure. The shadow testing approach was brilliant—we validated everything in production before cutting over.",
      author: 'Michael Chen',
      role: 'VP of Platform Operations',
      company: 'PayTech Solutions'
    },
    
    implementation: {
      timeline: '12 months across 5 migration phases',
      scope: '15-year legacy monolith → 40 microservices, 10,000+ merchant integrations',
      stack: ['Kafka', 'Kubernetes', 'Istio', 'Prometheus', 'Grafana', 'ELK Stack', 'Custom Shadow Testing Platform', 'AI Anomaly Detection']
    }
  },
  
  'stylehub-fashion': {
    id: 'stylehub-fashion',
    category: 'Case Study',
    title: 'StyleHub Fashion: $5M Revenue Recovery Through Data Quality',
    subtitle: 'How AI-powered testing solved product data chaos across 10,000+ SKUs',
    client: 'StyleHub Fashion E-commerce',
    industry: 'Retail & E-Commerce',
    region: 'North America',
    engagement: '6 months',
    solutionType: 'Cognitive Assurance + UX-assurance + Visual Regression',
    heroMetric: { value: '$5M', label: 'Revenue Recovery', change: 'From reduced returns' },
    author: 'Cogniron E-Commerce Practice',
    date: 'August 2025',
    readTime: '8 min read',
    tags: ['E-Commerce', 'Cognitive Assurance', 'UX Testing', 'Data Quality', 'AI-Driven'],
    
    problem: {
      title: 'The Challenge',
      content: `StyleHub, a fast-growing online fashion retailer with $100M annual GMV, was hemorrhaging revenue due to product data quality issues. With 10,000+ SKUs across 50 brands and complex sizing/color/fit variants, manual data validation couldn't keep pace with weekly catalog updates.

Critical business impact:
• 75% of customer returns attributed to "not as described" or "wrong size/color"
• $8M annual loss from returns, restocking, and customer dissatisfaction
• 40% spike in customer service tickets related to product information
• Declining repeat purchase rate (from 45% to 31%) due to trust erosion
• Manual spot-checking catching only 5% of data errors before publication
• New product launches delayed weeks for manual quality validation`,
    },
    
    solution: {
      title: 'Our Approach',
      content: `Cogniron deployed an AI-powered cognitive quality assurance platform specifically designed for e-commerce product data:`,
      steps: [
        {
          title: 'AI-Powered Product Data Validation',
          description: 'Trained computer vision models to validate product images match descriptions, detect color/style mismatches, and flag inconsistent sizing information across variants'
        },
        {
          title: 'Intelligent Cross-Variant Testing',
          description: 'Built ML algorithms analyzing relationships between SKU variants, automatically detecting anomalies like missing sizes, incorrect pricing hierarchies, or orphaned variants'
        },
        {
          title: 'Visual Regression Testing',
          description: 'Implemented automated screenshot comparison across 1,000+ product pages detecting unintended layout changes, missing images, or rendering issues before publication'
        },
        {
          title: 'UX-Assurance for Purchase Flow',
          description: 'Deployed comprehensive testing of cart, checkout, and size selection flows with accessibility validation ensuring seamless experience across devices'
        }
      ]
    },
    
    results: [
      { metric: '92%', label: 'Data Accuracy', description: 'Product quality validated' },
      { metric: '75%', label: 'Returns Reduced', description: 'Due to accurate info' },
      { metric: '$5M', label: 'Revenue Recovery', description: 'From reduced returns + trust' },
      { metric: '40%', label: 'Support Reduction', description: 'Fewer product questions' }
    ],
    
    testimonial: {
      quote: "The AI-powered testing caught thousands of product data errors that would have cost us millions in returns and lost customer trust. What used to take our team 2 weeks of manual checking now happens automatically in 2 hours with 10x better accuracy. Our return rate dropped from 15% to 6%, and customers trust our product pages again.",
      author: 'Lisa Rodriguez',
      role: 'Chief Operating Officer',
      company: 'StyleHub Fashion'
    },
    
    implementation: {
      timeline: '6 months from pilot to full catalog coverage',
      scope: '10,000+ SKUs, 50 brands, 5 marketplaces, 200K monthly visitors',
      stack: ['TensorFlow', 'OpenCV', 'Selenium Grid', 'Percy', 'Applitools Eyes', 'Custom AI Models', 'DataDog Synthetic Monitoring']
    }
  }
};

export function CaseStudyDetailPage() {
  const { theme } = useTheme();
  const { id } = useParams<{ id: string }>();
  
  // Get case study by ID or default to first one
  const caseStudy = id ? caseStudies[id as keyof typeof caseStudies] : caseStudies['fintech-security-testing'];
  
  if (!caseStudy) {
    return (
      <PageContainer>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>Case Study Not Found</h1>
            <Link to="/case-studies" className="text-blue-500 hover:text-blue-600">← Back to Case Studies</Link>
          </div>
        </div>
      </PageContainer>
    );
  }
  
  // Get related case studies (exclude current one)
  const relatedStudies = Object.values(caseStudies)
    .filter(cs => cs.id !== caseStudy.id)
    .slice(0, 2);

  return (
    <PageContainer>
      {/* Breadcrumbs */}
      <section className="relative pt-32 pb-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 transition-colors hover:underline"
            style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Case Studies
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pb-16 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="absolute inset-0" style={{ opacity: theme === 'dark' ? 0.3 : 0.1 }}>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))' : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))', border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}` }}>
                <Award className="w-4 h-4" style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }} />
                <span style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }} className="text-sm">{caseStudy.category}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                {caseStudy.title}
              </h1>
              
              <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
                {caseStudy.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                  <Calendar className="w-5 h-5" />
                  <span>{caseStudy.date}</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                  <Clock className="w-5 h-5" />
                  <span>{caseStudy.readTime}</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                  <Users className="w-5 h-5" />
                  <span>{caseStudy.author}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)', color: theme === 'dark' ? '#60A5FA' : '#0284C7', border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Sidebar - Key Info */}
            <div className="lg:col-span-1">
              <div className="backdrop-blur-sm rounded-2xl p-6 sticky top-24" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
                <h3 className="text-xl mb-6" style={{ color: 'var(--text-primary)' }}>Case Overview</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                      <Building2 className="w-4 h-4" />
                      <span>Client</span>
                    </div>
                    <p style={{ color: 'var(--text-primary)' }}>{caseStudy.client}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                      <TrendingUp className="w-4 h-4" />
                      <span>Industry</span>
                    </div>
                    <p style={{ color: 'var(--text-primary)' }}>{caseStudy.industry}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                      <MapPin className="w-4 h-4" />
                      <span>Region</span>
                    </div>
                    <p style={{ color: 'var(--text-primary)' }}>{caseStudy.region}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                      <Clock className="w-4 h-4" />
                      <span>Engagement</span>
                    </div>
                    <p style={{ color: 'var(--text-primary)' }}>{caseStudy.engagement}</p>
                  </div>
                </div>
                
                <div className="pt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
                  <div className="text-center p-6 rounded-xl" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))' : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))' }}>
                    <div className="text-4xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {caseStudy.heroMetric.value}
                    </div>
                    <div className="text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{caseStudy.heroMetric.label}</div>
                    <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{caseStudy.heroMetric.change}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>{caseStudy.problem.title}</h2>
          <div className="prose prose-lg" style={{ color: 'var(--text-secondary)' }}>
            {caseStudy.problem.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4" style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>{caseStudy.solution.title}</h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>{caseStudy.solution.content}</p>
          
          <div className="grid gap-6">
            {caseStudy.solution.steps.map((step, index) => (
              <div key={index} className="flex gap-4 backdrop-blur-sm rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>
                    <span className="text-white">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-12 text-center" style={{ color: 'var(--text-primary)' }}>Results & Impact</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="backdrop-blur-sm rounded-2xl p-6 text-center" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                <div className="text-4xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-3">
                  {result.metric}
                </div>
                <div className="text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{result.label}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="backdrop-blur-sm rounded-2xl p-8 lg:p-12" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-lg)' }}>
            <div className="text-5xl mb-6" style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }}>"</div>
            <blockquote className="text-xl lg:text-2xl mb-8 italic" style={{ color: 'var(--text-primary)' }}>
              {caseStudy.testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>
                <span className="text-white text-xl">{caseStudy.testimonial.author.charAt(0)}</span>
              </div>
              <div>
                <div style={{ color: 'var(--text-primary)' }}>{caseStudy.testimonial.author}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{caseStudy.testimonial.role}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{caseStudy.testimonial.company}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-8" style={{ color: 'var(--text-primary)' }}>Implementation Details</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="backdrop-blur-sm rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5" style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }} />
                <h3 style={{ color: 'var(--text-primary)' }}>Timeline</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>{caseStudy.implementation.timeline}</p>
            </div>
            
            <div className="backdrop-blur-sm rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5" style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }} />
                <h3 style={{ color: 'var(--text-primary)' }}>Scope</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>{caseStudy.implementation.scope}</p>
            </div>
          </div>
          
          <div className="backdrop-blur-sm rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <h3 className="mb-4" style={{ color: 'var(--text-primary)' }}>Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.implementation.stack.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 rounded-lg text-sm"
                  style={{ backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl blur-2xl" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))' : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))' }}></div>
            <div className="relative backdrop-blur-sm rounded-3xl p-12" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
              <h2 className="text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>Ready for Similar Results?</h2>
              <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>Let's discuss how Cogniron can transform your quality assurance operations</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)', color: '#FFFFFF', boxShadow: theme === 'dark' ? '0 0 30px rgba(59, 130, 246, 0.3)' : '0 4px 20px rgba(59, 130, 246, 0.2)' }}
                >
                  Schedule Consultation
                </Link>
                <Link 
                  to="/case-studies" 
                  className="px-8 py-4 rounded-lg transition-all duration-300"
                  style={{ backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                >
                  View More Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl mb-12" style={{ color: 'var(--text-primary)' }}>Related Case Studies</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {relatedStudies.map((study) => (
                <Link 
                  key={study.id}
                  to={`/case-studies/${study.id}`}
                  className="group backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}
                >
                  <div className="p-6">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-sm mb-4"
                      style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))' : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))', color: theme === 'dark' ? '#06B6D4' : '#0284C7', border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}` }}
                    >
                      {study.industry}
                    </span>
                    <h3 className="text-xl mb-3 group-hover:text-blue-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {study.title}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{study.subtitle}</p>
                    <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                      <div className="text-2xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        {study.heroMetric.value}
                      </div>
                      <CheckCircle2 className="w-5 h-5" style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }} />
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