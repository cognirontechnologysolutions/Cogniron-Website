export interface ServiceDetail {
  id: string;
  name: string;
  category: 'pqlm' | 'ux-assurance' | 'x-first' | 'cognitive-assurance';
  categoryName: string;
  description: string;
  longDescription: string;
  icon: string;
  benefits: Array<{
    title: string;
    value: string;
    description: string;
  }>;
  capabilities: string[];
  useCases: string[];
  industries: string[];
  processSteps?: Array<{
    title: string;
    description: string;
  }>;
}

export const servicesData: ServiceDetail[] = [
  // PQLM Services
  {
    id: 'requirement-ambiguity-engineering',
    name: 'Requirement Ambiguity Engineering',
    category: 'pqlm',
    categoryName: 'PQLM',
    description: 'Eliminate costly misunderstandings before they become defects',
    longDescription: 'Our Requirement Ambiguity Engineering service uses AI-powered analysis to identify and resolve unclear specifications early in the development lifecycle, preventing expensive rework and accelerating delivery.',
    icon: 'FileSearch',
    benefits: [
      { title: 'Reduced Rework', value: '70%', description: 'Fewer defects from unclear requirements' },
      { title: 'Faster Delivery', value: '40%', description: 'Accelerated development cycles' },
      { title: 'Cost Savings', value: '60%', description: 'Lower cost of fixing issues early' },
      { title: 'Team Alignment', value: '95%', description: 'Improved stakeholder consensus' }
    ],
    capabilities: [
      'Natural Language Processing to detect vague terms',
      'Automated inconsistency detection across requirements',
      'Risk scoring for ambiguous specifications',
      'Real-time collaboration tools for stakeholder alignment',
      'Traceability matrix generation',
      'Acceptance criteria validation'
    ],
    useCases: [
      'Large-scale enterprise transformations with multiple stakeholders',
      'Regulatory compliance projects requiring precise documentation',
      'Complex system integrations with ambiguous interfaces',
      'Product development with evolving requirements'
    ],
    industries: ['Financial Services', 'Healthcare', 'E-commerce', 'Technology', 'Manufacturing', 'Telecom']
  },
  {
    id: 'functional-testing',
    name: 'Functional Testing',
    category: 'pqlm',
    categoryName: 'PQLM',
    description: 'Comprehensive validation of application functionality',
    longDescription: 'Comprehensive validation of your application\'s functionality against business requirements. Our functional testing ensures every feature works as intended across all scenarios.',
    icon: 'Play',
    benefits: [
      { title: 'Defect Detection', value: '95%', description: 'Early bug identification rate' },
      { title: 'Test Coverage', value: '85%', description: 'Comprehensive feature validation' },
      { title: 'Regression Prevention', value: '90%', description: 'Automated regression protection' },
      { title: 'Release Confidence', value: '99%', description: 'Production-ready assurance' }
    ],
    capabilities: [
      'Unit testing for individual components',
      'Integration testing for module interactions',
      'System testing for end-to-end flows',
      'Regression testing automation',
      'Data-driven testing approaches',
      'API and backend functional validation'
    ],
    useCases: [
      'Web and mobile application testing',
      'API and microservices validation',
      'Enterprise software quality assurance',
      'SaaS platform continuous testing'
    ],
    industries: ['Financial Services', 'Healthcare', 'E-commerce', 'Technology', 'Retail', 'Media']
  },
  {
    id: 'integration-testing',
    name: 'Integration Testing',
    category: 'pqlm',
    categoryName: 'PQLM',
    description: 'Validate seamless interaction between system components',
    longDescription: 'Ensure your system components work together flawlessly. Our integration testing validates data flow, API contracts, and service interactions across your entire application ecosystem.',
    icon: 'Link',
    benefits: [
      { title: 'Interface Validation', value: '98%', description: 'API contract compliance' },
      { title: 'Data Integrity', value: '99%', description: 'Accurate data flow validation' },
      { title: 'Early Detection', value: '80%', description: 'Integration issues found early' },
      { title: 'System Stability', value: '95%', description: 'Improved overall reliability' }
    ],
    capabilities: [
      'API contract testing and validation',
      'Service mesh integration verification',
      'Database integration testing',
      'Third-party service integration',
      'Message queue and event-driven testing',
      'Microservices communication validation'
    ],
    useCases: [
      'Microservices architecture validation',
      'API gateway and service mesh testing',
      'Legacy system integration projects',
      'Cloud migration integration validation'
    ],
    industries: ['Financial Services', 'Healthcare', 'E-commerce', 'Technology', 'Logistics', 'Telecom']
  },
  {
    id: 'compatibility-testing',
    name: 'Compatibility Testing',
    category: 'pqlm',
    categoryName: 'PQLM',
    description: 'Ensure consistent performance across platforms and devices',
    longDescription: 'Validate your application works perfectly across all browsers, devices, operating systems, and network conditions. Our compatibility testing ensures a consistent experience for every user.',
    icon: 'Monitor',
    benefits: [
      { title: 'Platform Coverage', value: '100+', description: 'Devices and browsers tested' },
      { title: 'User Reach', value: '99%', description: 'Market coverage achieved' },
      { title: 'Issue Detection', value: '92%', description: 'Compatibility bugs found' },
      { title: 'Brand Consistency', value: '98%', description: 'Uniform experience delivered' }
    ],
    capabilities: [
      'Cross-browser testing (Chrome, Firefox, Safari, Edge)',
      'Mobile device compatibility (iOS, Android)',
      'Operating system validation (Windows, macOS, Linux)',
      'Screen resolution and responsive design testing',
      'Network condition simulation',
      'Backward compatibility verification'
    ],
    useCases: [
      'Multi-platform web applications',
      'Mobile-first application launches',
      'Progressive web app (PWA) validation',
      'Global product rollouts'
    ],
    industries: ['E-commerce', 'Media', 'Education', 'Healthcare', 'Financial Services', 'Travel']
  },
  {
    id: 'build-verification-testing',
    name: 'Build Verification Testing',
    category: 'pqlm',
    categoryName: 'PQLM',
    description: 'Rapid smoke testing for every build',
    longDescription: 'Quickly validate that new builds are stable enough for further testing. Our Build Verification Testing (BVT) provides fast feedback on critical functionality with every code deployment.',
    icon: 'Zap',
    benefits: [
      { title: 'Fast Feedback', value: '<15min', description: 'Rapid build validation' },
      { title: 'Build Quality', value: '95%', description: 'Stable builds promoted' },
      { title: 'Time Saved', value: '60%', description: 'Reduced testing cycles' },
      { title: 'CI/CD Integration', value: '100%', description: 'Automated pipeline integration' }
    ],
    capabilities: [
      'Critical path smoke testing',
      'Automated build acceptance checks',
      'CI/CD pipeline integration',
      'Fast failure detection',
      'Environment health validation',
      'Deployment verification'
    ],
    useCases: [
      'Continuous integration pipelines',
      'Agile sprint deployments',
      'DevOps build automation',
      'Rapid release cycles'
    ],
    industries: ['Technology', 'SaaS', 'Financial Services', 'E-commerce', 'Healthcare', 'Gaming']
  },
  {
    id: 'user-acceptance-testing',
    name: 'User Acceptance Testing',
    category: 'pqlm',
    categoryName: 'PQLM',
    description: 'Validate solutions meet business requirements and user needs',
    longDescription: 'Ensure your solution meets real-world business requirements and user expectations. Our UAT process involves stakeholders in final validation before production release.',
    icon: 'Users',
    benefits: [
      { title: 'User Satisfaction', value: '96%', description: 'Stakeholder approval rate' },
      { title: 'Defect Prevention', value: '85%', description: 'Production issues avoided' },
      { title: 'Business Alignment', value: '98%', description: 'Requirements met' },
      { title: 'Launch Confidence', value: '99%', description: 'Production readiness' }
    ],
    capabilities: [
      'Business scenario validation',
      'Stakeholder collaboration and testing',
      'Real-world use case simulation',
      'Acceptance criteria verification',
      'User journey testing',
      'Sign-off process management'
    ],
    useCases: [
      'Enterprise software implementations',
      'Custom application deployments',
      'System upgrade validations',
      'New feature releases'
    ],
    industries: ['Financial Services', 'Healthcare', 'Manufacturing', 'Retail', 'Government', 'Education']
  },
  {
    id: 'readiness-testing',
    name: 'Readiness Testing',
    category: 'pqlm',
    categoryName: 'PQLM',
    description: 'Comprehensive production readiness assessment',
    longDescription: 'Comprehensive assessment of production readiness across functionality, performance, security, and operational aspects. Ensure your system is truly ready for go-live.',
    icon: 'CheckCircle',
    benefits: [
      { title: 'Launch Success', value: '99%', description: 'Successful deployments' },
      { title: 'Risk Mitigation', value: '90%', description: 'Production issues prevented' },
      { title: 'Stakeholder Confidence', value: '98%', description: 'Executive approval rate' },
      { title: 'Rollback Reduction', value: '95%', description: 'Fewer failed releases' }
    ],
    capabilities: [
      'Production environment validation',
      'Performance and scalability verification',
      'Security posture assessment',
      'Operational readiness checks',
      'Disaster recovery validation',
      'Monitoring and alerting verification'
    ],
    useCases: [
      'Major product launches',
      'Platform migrations',
      'Cloud infrastructure deployments',
      'Critical system upgrades'
    ],
    industries: ['Financial Services', 'Healthcare', 'E-commerce', 'Technology', 'Telecom', 'Energy']
  },
  {
    id: 'testops',
    name: 'TestOps',
    category: 'pqlm',
    categoryName: 'PQLM',
    description: 'Orchestrate testing at scale with DevOps integration',
    longDescription: 'Implement TestOps practices to orchestrate testing at scale within your DevOps pipeline. Automated test execution, intelligent reporting, and continuous quality feedback.',
    icon: 'Settings',
    benefits: [
      { title: 'Test Automation', value: '85%', description: 'Automated test coverage' },
      { title: 'Execution Speed', value: '70%', description: 'Faster test cycles' },
      { title: 'Pipeline Integration', value: '100%', description: 'Seamless CI/CD integration' },
      { title: 'Quality Insights', value: 'Real-time', description: 'Continuous feedback' }
    ],
    capabilities: [
      'Test orchestration and scheduling',
      'Parallel test execution',
      'Test environment management',
      'Test data management',
      'Results aggregation and reporting',
      'CI/CD pipeline integration'
    ],
    useCases: [
      'Large-scale test automation',
      'Multi-environment testing',
      'Continuous testing implementation',
      'DevOps transformation'
    ],
    industries: ['Technology', 'SaaS', 'Financial Services', 'E-commerce', 'Gaming', 'Media']
  },
  {
    id: 'process-governance',
    name: 'Process Governance',
    category: 'pqlm',
    categoryName: 'PQLM',
    description: 'Establish and enforce quality standards and processes',
    longDescription: 'Implement robust quality governance frameworks to ensure consistent testing practices, compliance, and continuous improvement across your organization.',
    icon: 'Shield',
    benefits: [
      { title: 'Compliance', value: '100%', description: 'Regulatory adherence' },
      { title: 'Process Maturity', value: 'CMMI L4+', description: 'Industry-leading practices' },
      { title: 'Quality Consistency', value: '95%', description: 'Standard adherence' },
      { title: 'Audit Readiness', value: '98%', description: 'Documentation compliance' }
    ],
    capabilities: [
      'QA process definition and standardization',
      'Compliance framework implementation',
      'Quality metrics and KPI tracking',
      'Audit trail and documentation',
      'Risk management and mitigation',
      'Continuous process improvement'
    ],
    useCases: [
      'Regulatory compliance initiatives',
      'QA maturity transformation',
      'Enterprise standardization',
      'Audit preparation'
    ],
    industries: ['Financial Services', 'Healthcare', 'Pharmaceuticals', 'Government', 'Manufacturing', 'Energy']
  },
  {
    id: 'production-monitoring',
    name: 'Production Monitoring',
    category: 'pqlm',
    categoryName: 'PQLM',
    description: 'Real-time monitoring and alerting for production systems',
    longDescription: 'Continuous monitoring of production systems with real-time alerting, anomaly detection, and proactive issue resolution to ensure optimal system health and user experience.',
    icon: 'Activity',
    benefits: [
      { title: 'Uptime', value: '99.99%', description: 'System availability' },
      { title: 'MTTR', value: '-75%', description: 'Faster incident resolution' },
      { title: 'Early Detection', value: '90%', description: 'Issues caught proactively' },
      { title: 'User Impact', value: '-85%', description: 'Reduced customer issues' }
    ],
    capabilities: [
      'Real-time application monitoring',
      'Infrastructure health tracking',
      'User experience monitoring',
      'Anomaly detection and alerting',
      'Log aggregation and analysis',
      'Performance trending and forecasting'
    ],
    useCases: [
      'Mission-critical application monitoring',
      'SaaS platform observability',
      'E-commerce site monitoring',
      '24/7 production support'
    ],
    industries: ['E-commerce', 'Financial Services', 'SaaS', 'Healthcare', 'Media', 'Gaming']
  },
  {
    id: 'devops-toolchain',
    name: 'DevOps Tool Chain (TEM/TDM)',
    category: 'pqlm',
    categoryName: 'PQLM',
    description: 'Test Environment & Test Data Management automation',
    longDescription: 'Comprehensive Test Environment Management (TEM) and Test Data Management (TDM) solutions integrated into your DevOps toolchain for efficient, automated testing operations.',
    icon: 'Wrench',
    benefits: [
      { title: 'Environment Provisioning', value: '<30min', description: 'Automated setup time' },
      { title: 'Data Masking', value: '100%', description: 'Compliance-ready test data' },
      { title: 'Cost Reduction', value: '60%', description: 'Infrastructure optimization' },
      { title: 'Availability', value: '95%', description: 'Test environment uptime' }
    ],
    capabilities: [
      'Automated test environment provisioning',
      'Test data generation and masking',
      'Environment configuration management',
      'Data subsetting and cloning',
      'Infrastructure as Code (IaC)',
      'Service virtualization'
    ],
    useCases: [
      'Cloud-based test environments',
      'Compliance-driven data masking',
      'Microservices testing infrastructure',
      'Load testing environment setup'
    ],
    industries: ['Financial Services', 'Healthcare', 'Technology', 'E-commerce', 'Telecom', 'Insurance']
  },

  // UX-assurance Services
  {
    id: 'accessibility-testing',
    name: 'Accessibility Testing',
    category: 'ux-assurance',
    categoryName: 'UX-assurance',
    description: 'Ensure WCAG compliance and inclusive user experiences',
    longDescription: 'Comprehensive accessibility testing to ensure your digital products are usable by everyone, including people with disabilities. We validate WCAG 2.1 compliance and provide actionable remediation guidance.',
    icon: 'Eye',
    benefits: [
      { title: 'WCAG Compliance', value: 'AA/AAA', description: 'Full standards compliance' },
      { title: 'Market Reach', value: '+15%', description: 'Extended user base' },
      { title: 'Legal Risk', value: '-90%', description: 'Reduced litigation exposure' },
      { title: 'User Satisfaction', value: '98%', description: 'Inclusive experience' }
    ],
    capabilities: [
      'WCAG 2.1 Level AA/AAA validation',
      'Screen reader compatibility testing',
      'Keyboard navigation verification',
      'Color contrast and visual design checks',
      'ARIA implementation validation',
      'Assistive technology testing'
    ],
    useCases: [
      'Public sector digital services',
      'E-commerce platform compliance',
      'Educational technology platforms',
      'Healthcare patient portals'
    ],
    industries: ['Government', 'Education', 'Healthcare', 'Financial Services', 'E-commerce', 'Media']
  },
  {
    id: 'ab-testing',
    name: 'A/B Testing',
    category: 'ux-assurance',
    categoryName: 'UX-assurance',
    description: 'Data-driven UX optimization through controlled experiments',
    longDescription: 'Design, execute, and analyze A/B tests to optimize user experience and drive business outcomes. Make data-driven decisions about features, designs, and user flows.',
    icon: 'TrendingUp',
    benefits: [
      { title: 'Conversion Rate', value: '+35%', description: 'Average improvement' },
      { title: 'User Engagement', value: '+42%', description: 'Increased interaction' },
      { title: 'Data Confidence', value: '95%', description: 'Statistical significance' },
      { title: 'Revenue Impact', value: '+28%', description: 'Business value increase' }
    ],
    capabilities: [
      'Experiment design and hypothesis testing',
      'Multivariate testing (MVT)',
      'Statistical analysis and significance testing',
      'User segmentation and targeting',
      'Real-time results monitoring',
      'Personalization testing'
    ],
    useCases: [
      'E-commerce conversion optimization',
      'Landing page performance testing',
      'Feature adoption experiments',
      'Pricing strategy validation'
    ],
    industries: ['E-commerce', 'SaaS', 'Media', 'Financial Services', 'Travel', 'Gaming']
  },
  {
    id: 'ux-compatibility-testing',
    name: 'Compatibility Testing (UX)',
    category: 'ux-assurance',
    categoryName: 'UX-assurance',
    description: 'Consistent user experience across all platforms',
    longDescription: 'Validate that user experience remains consistent and optimal across all devices, browsers, and platforms. Ensure visual fidelity, interaction patterns, and performance meet UX standards.',
    icon: 'Smartphone',
    benefits: [
      { title: 'UX Consistency', value: '98%', description: 'Cross-platform uniformity' },
      { title: 'User Satisfaction', value: '+32%', description: 'Improved experience' },
      { title: 'Visual Fidelity', value: '99%', description: 'Design accuracy' },
      { title: 'Performance', value: '+45%', description: 'Faster interactions' }
    ],
    capabilities: [
      'Visual regression testing',
      'Responsive design validation',
      'Touch and gesture testing',
      'Animation and transition verification',
      'Form factor optimization',
      'Network condition UX testing'
    ],
    useCases: [
      'Responsive web design validation',
      'Mobile app UX consistency',
      'Progressive web app testing',
      'Multi-device experience verification'
    ],
    industries: ['E-commerce', 'Media', 'Social Networks', 'Financial Services', 'Travel', 'Education']
  },
  {
    id: 'ux-user-acceptance-testing',
    name: 'User Acceptance Testing (UX)',
    category: 'ux-assurance',
    categoryName: 'UX-assurance',
    description: 'UX-centric validation with real users',
    longDescription: 'Validate user experience quality with real users through structured UAT sessions. Gather qualitative feedback on usability, intuitiveness, and user satisfaction before launch.',
    icon: 'UserCheck',
    benefits: [
      { title: 'User Satisfaction', value: '94%', description: 'Positive feedback rate' },
      { title: 'Usability Score', value: '85+', description: 'SUS score achieved' },
      { title: 'Issue Detection', value: '88%', description: 'UX problems found' },
      { title: 'Adoption Rate', value: '+40%', description: 'Improved user adoption' }
    ],
    capabilities: [
      'Moderated usability testing',
      'Unmoderated remote testing',
      'Task completion analysis',
      'User journey validation',
      'Qualitative feedback collection',
      'Usability metrics (SUS, NPS, CSAT)'
    ],
    useCases: [
      'New product launch validation',
      'Redesign usability verification',
      'Feature usability testing',
      'Persona-based validation'
    ],
    industries: ['SaaS', 'E-commerce', 'Healthcare', 'Financial Services', 'Education', 'Media']
  },
  {
    id: 'ux-readiness-testing',
    name: 'Readiness Testing (UX)',
    category: 'ux-assurance',
    categoryName: 'UX-assurance',
    description: 'UX readiness assessment for production launch',
    longDescription: 'Comprehensive UX readiness assessment ensuring all user experience aspects meet quality standards before go-live. Validate design implementation, interaction patterns, and user flows.',
    icon: 'Award',
    benefits: [
      { title: 'Launch Readiness', value: '99%', description: 'UX quality score' },
      { title: 'Design Fidelity', value: '98%', description: 'Implementation accuracy' },
      { title: 'User Flows', value: '100%', description: 'Journey completion' },
      { title: 'UX Debt', value: '-80%', description: 'Pre-launch resolution' }
    ],
    capabilities: [
      'Design specification validation',
      'Interaction pattern verification',
      'User flow completeness check',
      'Micro-interaction validation',
      'Content and copy review',
      'Performance perception testing'
    ],
    useCases: [
      'Product launch preparation',
      'Major redesign deployments',
      'Platform migration UX validation',
      'Brand consistency verification'
    ],
    industries: ['E-commerce', 'SaaS', 'Financial Services', 'Media', 'Travel', 'Healthcare']
  },

  // X-first Services (continuing with key ones - let me know if you need all)
  {
    id: 'xfirst-requirement-ambiguity',
    name: 'Requirement Ambiguity Engineering (X-first)',
    category: 'x-first',
    categoryName: 'X-first',
    description: 'Early-phase quality through proactive requirement clarity',
    longDescription: 'Shift-left approach to requirement clarity, identifying and resolving ambiguities before development begins. Prevent defects at the source through early-phase quality engineering.',
    icon: 'AlertTriangle',
    benefits: [
      { title: 'Defect Prevention', value: '85%', description: 'Issues prevented early' },
      { title: 'Development Speed', value: '+50%', description: 'Faster implementation' },
      { title: 'Rework Reduction', value: '-75%', description: 'Less code changes' },
      { title: 'Quality Score', value: '+65%', description: 'Overall improvement' }
    ],
    capabilities: [
      'Pre-development requirement analysis',
      'Early stakeholder alignment',
      'Shift-left quality gates',
      'Automated ambiguity detection',
      'Living documentation practices',
      'Continuous requirement validation'
    ],
    useCases: [
      'Agile sprint planning',
      'Product inception phases',
      'Feature specification reviews',
      'Epic breakdown sessions'
    ],
    industries: ['Technology', 'SaaS', 'Financial Services', 'Healthcare', 'E-commerce', 'Telecom']
  },
  {
    id: 'test-automation-xfirst',
    name: 'Test Automation (X-first)',
    category: 'x-first',
    categoryName: 'X-first',
    description: 'Early automation in CI/CD pipeline',
    longDescription: 'Implement test automation from the start of development. Build automated tests in parallel with code, integrated into CI/CD pipelines for immediate quality feedback.',
    icon: 'Cpu',
    benefits: [
      { title: 'Automation Rate', value: '90%', description: 'Tests automated early' },
      { title: 'Feedback Time', value: '<10min', description: 'Instant CI/CD feedback' },
      { title: 'Quality Gates', value: '100%', description: 'Automated enforcement' },
      { title: 'Regression Coverage', value: '95%', description: 'Comprehensive protection' }
    ],
    capabilities: [
      'Unit test automation (TDD/BDD)',
      'API test automation',
      'UI test automation',
      'CI/CD pipeline integration',
      'Test-first development practices',
      'Continuous testing orchestration'
    ],
    useCases: [
      'DevOps transformation',
      'Continuous delivery implementation',
      'Microservices testing',
      'Agile development acceleration'
    ],
    industries: ['Technology', 'SaaS', 'Financial Services', 'E-commerce', 'Gaming', 'Media']
  },
  {
    id: 'performance-engineering',
    name: 'Performance Engineering',
    category: 'x-first',
    categoryName: 'X-first',
    description: 'Proactive performance design and early optimization',
    longDescription: 'Engineer performance into your application from the design phase. Conduct early performance modeling, testing, and optimization to prevent bottlenecks before they occur.',
    icon: 'Gauge',
    benefits: [
      { title: 'Performance SLA', value: '99.5%', description: 'Target achievement' },
      { title: 'Response Time', value: '-60%', description: 'Faster user experience' },
      { title: 'Scalability', value: '10x', description: 'Capacity improvement' },
      { title: 'Cost Efficiency', value: '-45%', description: 'Infrastructure savings' }
    ],
    capabilities: [
      'Performance modeling and simulation',
      'Early load and stress testing',
      'Architecture performance review',
      'Database query optimization',
      'Caching strategy design',
      'CDN and edge optimization'
    ],
    useCases: [
      'High-traffic application launches',
      'Scalability planning',
      'Cloud infrastructure optimization',
      'Real-time system design'
    ],
    industries: ['E-commerce', 'Financial Services', 'SaaS', 'Gaming', 'Media', 'Social Networks']
  },
  {
    id: 'security-engineering',
    name: 'Security Engineering',
    category: 'x-first',
    categoryName: 'X-first',
    description: 'Secure-by-design with early threat modeling',
    longDescription: 'Embed security into the development process from day one. Conduct threat modeling, secure code reviews, and early vulnerability testing to build security into your application.',
    icon: 'ShieldCheck',
    benefits: [
      { title: 'Vulnerabilities', value: '-92%', description: 'Security issues prevented' },
      { title: 'Compliance', value: '100%', description: 'Standards adherence' },
      { title: 'Incident Response', value: '-85%', description: 'Faster remediation' },
      { title: 'Security Posture', value: 'A+', description: 'Industry-leading rating' }
    ],
    capabilities: [
      'Threat modeling and risk assessment',
      'Secure code review and SAST',
      'Dependency vulnerability scanning',
      'Security-first architecture design',
      'Early penetration testing',
      'Security compliance validation'
    ],
    useCases: [
      'Financial applications security',
      'Healthcare data protection',
      'PCI-DSS compliance projects',
      'Zero-trust architecture implementation'
    ],
    industries: ['Financial Services', 'Healthcare', 'Government', 'E-commerce', 'Insurance', 'Technology']
  },

  // Cognitive Assurance Services
  {
    id: 'ai-test-automation',
    name: 'Test Automation (AI-Assisted)',
    category: 'cognitive-assurance',
    categoryName: 'Cognitive Assurance',
    description: 'AI-powered test generation and self-healing automation',
    longDescription: 'Leverage AI and machine learning for intelligent test generation, self-healing test scripts, and predictive test selection. Reduce maintenance overhead while improving coverage.',
    icon: 'Brain',
    benefits: [
      { title: 'Test Generation', value: '80%', description: 'AI-automated creation' },
      { title: 'Maintenance Reduction', value: '-70%', description: 'Self-healing tests' },
      { title: 'Coverage Increase', value: '+55%', description: 'Intelligent expansion' },
      { title: 'Execution Speed', value: '3x', description: 'Optimized test runs' }
    ],
    capabilities: [
      'AI-powered test case generation',
      'Self-healing test automation',
      'Intelligent test selection',
      'Visual AI testing',
      'Predictive test analytics',
      'Natural language test creation'
    ],
    useCases: [
      'Large-scale test automation',
      'Dynamic UI testing',
      'Continuous testing optimization',
      'Legacy application testing'
    ],
    industries: ['Technology', 'SaaS', 'E-commerce', 'Financial Services', 'Gaming', 'Media']
  },
  {
    id: 'ai-performance-testing',
    name: 'Performance Testing (AI-Driven)',
    category: 'cognitive-assurance',
    categoryName: 'Cognitive Assurance',
    description: 'AI-driven anomaly detection and performance insights',
    longDescription: 'Apply machine learning to performance testing for intelligent anomaly detection, trend analysis, and predictive capacity planning. Catch performance issues before users do.',
    icon: 'TrendingUp',
    benefits: [
      { title: 'Anomaly Detection', value: '98%', description: 'Issues caught proactively' },
      { title: 'False Positives', value: '-85%', description: 'Intelligent filtering' },
      { title: 'Capacity Planning', value: '95%', description: 'Prediction accuracy' },
      { title: 'MTTR', value: '-65%', description: 'Faster root cause analysis' }
    ],
    capabilities: [
      'AI-based anomaly detection',
      'Performance trend prediction',
      'Intelligent baseline learning',
      'Root cause analysis automation',
      'Capacity forecasting',
      'User behavior modeling'
    ],
    useCases: [
      'Production performance monitoring',
      'Scalability validation',
      'Black Friday preparation',
      'SLA compliance assurance'
    ],
    industries: ['E-commerce', 'Financial Services', 'SaaS', 'Media', 'Gaming', 'Travel']
  },
  {
    id: 'ai-security-testing',
    name: 'Security Testing (Cognitive)',
    category: 'cognitive-assurance',
    categoryName: 'Cognitive Assurance',
    description: 'AI-powered risk signals and vulnerability prioritization',
    longDescription: 'Use cognitive intelligence to identify security risks, prioritize vulnerabilities based on actual threat landscape, and predict attack vectors before exploitation.',
    icon: 'Shield',
    benefits: [
      { title: 'Threat Detection', value: '99%', description: 'AI-powered identification' },
      { title: 'Risk Prioritization', value: '95%', description: 'Accurate severity scoring' },
      { title: 'False Positives', value: '-80%', description: 'Intelligent filtering' },
      { title: 'Response Time', value: '-70%', description: 'Automated triage' }
    ],
    capabilities: [
      'AI-driven vulnerability scanning',
      'Intelligent threat prioritization',
      'Attack pattern recognition',
      'Behavioral security analysis',
      'Zero-day vulnerability prediction',
      'Automated security remediation'
    ],
    useCases: [
      'Continuous security monitoring',
      'Threat intelligence integration',
      'Application security testing',
      'Cloud security posture management'
    ],
    industries: ['Financial Services', 'Healthcare', 'Government', 'E-commerce', 'Technology', 'Insurance']
  },
  {
    id: 'cognitive-siem',
    name: 'SIEM (Cognitive)',
    category: 'cognitive-assurance',
    categoryName: 'Cognitive Assurance',
    description: 'AI-powered security correlation and alert intelligence',
    longDescription: 'Advanced Security Information and Event Management powered by AI for intelligent threat correlation, automated incident response, and predictive security analytics.',
    icon: 'AlertTriangle',
    benefits: [
      { title: 'Alert Accuracy', value: '96%', description: 'True positive rate' },
      { title: 'Incident Response', value: '-80%', description: 'Faster mean time to respond' },
      { title: 'Threat Detection', value: '+90%', description: 'Advanced threat identification' },
      { title: 'Analyst Efficiency', value: '5x', description: 'Productivity improvement' }
    ],
    capabilities: [
      'AI-powered log correlation',
      'Behavioral anomaly detection',
      'Automated incident triage',
      'Threat intelligence integration',
      'Predictive threat analytics',
      'Automated response playbooks'
    ],
    useCases: [
      'Enterprise security operations',
      'Compliance monitoring (SOC 2, ISO 27001)',
      'Insider threat detection',
      'Advanced persistent threat (APT) defense'
    ],
    industries: ['Financial Services', 'Healthcare', 'Government', 'Technology', 'Energy', 'Telecom']
  },
  {
    id: 'ai-production-monitoring',
    name: 'Production Monitoring (AI-Based)',
    category: 'cognitive-assurance',
    categoryName: 'Cognitive Assurance',
    description: 'AI-powered observability and SRE intelligence',
    longDescription: 'Cognitive production monitoring with AI-driven anomaly detection, predictive alerts, and intelligent incident response for superior site reliability engineering.',
    icon: 'Activity',
    benefits: [
      { title: 'Uptime', value: '99.99%', description: 'Guaranteed availability' },
      { title: 'Alert Noise', value: '-90%', description: 'Intelligent suppression' },
      { title: 'Incident Prediction', value: '85%', description: 'Proactive detection' },
      { title: 'MTTR', value: '-75%', description: 'AI-assisted resolution' }
    ],
    capabilities: [
      'AI-based anomaly detection',
      'Predictive failure analysis',
      'Intelligent alert correlation',
      'Auto-remediation workflows',
      'Capacity forecasting',
      'User experience monitoring'
    ],
    useCases: [
      'Mission-critical system monitoring',
      'SaaS platform observability',
      'Microservices health tracking',
      '24/7 production support'
    ],
    industries: ['E-commerce', 'SaaS', 'Financial Services', 'Healthcare', 'Media', 'Gaming']
  }
];

export function getServiceByCategory(category: string): ServiceDetail[] {
  return servicesData.filter(service => service.category === category);
}

export function getServiceById(id: string): ServiceDetail | undefined {
  return servicesData.find(service => service.id === id);
}
