/**
 * @fileoverview X-First Quality Engineering Blog Articles Index
 * @module pages/blog/x-first
 * 
 * Central export point for all X-First quality engineering blog articles.
 * Covers topics including shift-left testing, quality-first practices,
 * and modern quality engineering methodologies.
 * 
 * @author Cogniron Development Team
 * @version 1.0.0
 */

import { BlogArticleMetadata, BlogCategory } from '../types';

// Import all X-First article components and their metadata
export { TheNewEraOfQualityIntelligenceLedAssurance, metadata as theNewEraOfQualityMetadata } from './the-new-era-of-quality-intelligence-led-assurance';
export { TheNewEraOfMobileAppTestingHow5GAndAIAutomationAreRedefiningQualityAtSpeed, metadata as theNewEraOfMobileAppTestingMetadata } from './the-new-era-of-mobile-app-testing-how-5g-and-ai-automation-are-redefining-quality-at-speed';
export { ApiTestingBestPracticesHowToPreventIntegrationFailures, metadata as apiTestingBestPracticesMetadata } from './api-testing-best-practices-how-to-prevent-integration-failures';
export { LoadTestingVsStressTestingHowToEnsurePeakSoftwarePerformance, metadata as loadTestingVsStressTestingMetadata } from './load-testing-vs-stress-testing-how-to-ensure-peak-software-performance';
export { BeyondAutomationHowGenaiIsRewritingTheRulesOfTestCaseDesign, metadata as beyondAutomationHowGenaiMetadata } from './beyond-automation-how-genai-is-rewriting-the-rules-of-test-case-design';
export { FunctionalTestingUpgradedAisRoleInIntelligentAutomation, metadata as functionalTestingUpgradedMetadata } from './functional-testing-upgraded-ais-role-in-intelligent-automation';
export { AiIsShippingFasterThanQuality, metadata as aiIsShippingFasterThanQualityMetadata } from './ai-is-shipping-faster-than-quality';
export { default as BuildVerificationTestingTheFirstLineOfDefenseInQualityEngineering, metadata as buildVerificationTestingMetadata } from './build-verification-testing-the-first-line-of-defense-in-quality-engineering';

/**
 * Registry of all X-First blog articles
 * 
 * @constant {BlogArticleMetadata[]}
 */
export const xFirstArticles: BlogArticleMetadata[] = [
  {
    id: 'build-verification-testing-the-first-line-of-defense-in-quality-engineering',
    category: BlogCategory.X_FIRST,
    title: 'Build Verification Testing: The First Line of Defense in Quality Engineering',
    excerpt: 'In the world of software engineering, quality doesn\'t happen by accident — it\'s designed into the system. Yet, too often teams wait to discover defects deep in the delivery pipeline — after weeks of development, integration, and even late-stage user acceptance testing.',
    author: 'Cogniron Team',
    date: 'January 8, 2026',
    readTime: '4–6 min read',
    tags: ['Software Quality Engineering', 'Build Verification Testing', 'Verification & Validation', 'DevOps Integration', 'Cogniron Quality Services'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBhdXRvbWF0aW9uJTIwcGlwZWxpbmV8ZW58MXx8fHwxNzY3ODUyOTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'the-new-era-of-quality-intelligence-led-assurance',
    category: BlogCategory.X_FIRST,
    title: 'The New Era of Quality: Why Modern Products Need Intelligence-Led Assurance, Not Just Testing',
    excerpt: 'For more than a decade, digital teams treated QA as a downstream activity: a necessary final step before release, handled by a team that mostly operated in isolation. But the products being built today are no longer simple applications with predictable behaviors.',
    author: 'Cogniron Team',
    date: 'December 16, 2025',
    readTime: '8 min read',
    tags: ['quality-engineering', 'intelligence-led', 'ai', 'quality-assurance', 'modern-qa'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1760952851538-17a59f691efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjU4NjY1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'the-new-era-of-mobile-app-testing-how-5g-and-ai-automation-are-redefining-quality-at-speed',
    category: BlogCategory.X_FIRST,
    title: 'The New Era of Mobile App Testing: How 5G and AI Automation Are Redefining Quality at Speed',
    excerpt: 'Mobile applications have quietly become the invisible infrastructure of our daily lives. Whether it is streaming a movie, checking into a flight, or managing financial transactions, every action is mediated by an app.',
    author: 'Cogniron Team',
    date: 'October 21, 2025',
    readTime: '6–8 min read',
    tags: ['Mobile Testing', '5G', 'AI Automation', 'X-First', 'Quality Engineering'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1685061976345-ec95182914a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHw1RyUyMG1vYmlsZSUyMHRlc3RpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NjAzNTk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'api-testing-best-practices-how-to-prevent-integration-failures',
    category: BlogCategory.X_FIRST,
    title: 'API Testing Best Practices: How to Prevent Integration Failures',
    excerpt: 'Enterprises are only as strong as the connections that bind their systems together. These connections—driven largely by APIs—enable everything from customer transactions to supply chain visibility and employee productivity. When APIs fail, the impact is rarely isolated.',
    author: 'Cogniron Team',
    date: 'September 29, 2025',
    readTime: '4–6 min read',
    tags: ['API Testing', 'Integration', 'Quality Engineering', 'X-First'],
    featured: false,
    image: null,
  },
  {
    id: 'load-testing-vs-stress-testing-how-to-ensure-peak-software-performance',
    category: BlogCategory.X_FIRST,
    title: 'Load Testing vs. Stress Testing: How to Ensure Peak Software Performance',
    excerpt: 'You\'ve probably heard the terms "load testing" and "stress testing" tossed around in meetings. Maybe they even sound like the same thing, or maybe you\'re wondering why your team needs both. I get it—it\'s easy to blur the lines between them.',
    author: 'Cogniron Team',
    date: 'September 18, 2025',
    readTime: '5–7 min read',
    tags: ['Performance Testing', 'Load Testing', 'Stress Testing', 'X-First', 'Quality Engineering'],
    featured: false,
    image: null,
  },
  {
    id: 'beyond-automation-how-genai-is-rewriting-the-rules-of-test-case-design',
    category: BlogCategory.X_FIRST,
    title: 'Beyond Automation: How GenAI Is Rewriting the Rules of Test Case Design',
    excerpt: 'Quality Assurance has always chased a moving target. Software changes faster than teams can test, and the scripts meant to guarantee stability often age into liabilities. Entire QA cycles get consumed not by discovery of defects, but by endless maintenance of outdated test cases.',
    author: 'Cogniron Team',
    date: 'August 28, 2025',
    readTime: '4–6 min read',
    tags: ['GenAI', 'Test Case Design', 'X-First', 'Quality Engineering', 'Self-Healing QA'],
    featured: false,
    image: null,
  },
  {
    id: 'functional-testing-upgraded-ais-role-in-intelligent-automation',
    category: BlogCategory.X_FIRST,
    title: 'Functional Testing, Upgraded: AI\'s Role in Intelligent Automation',
    excerpt: 'For as long as software has existed, functional testing has been the safety net. You build a feature, run it through its paces, and tick the box that says, "Yes, it works." That approach still matters—it\'s the foundation everything else rests on.',
    author: 'Cogniron Team',
    date: 'August 19, 2025',
    readTime: '4–6 min read',
    tags: ['Functional Testing', 'AI', 'Intelligent Automation', 'X-First', 'Quality Engineering'],
    featured: false,
    image: null,
  },
  {
    id: 'ai-is-shipping-faster-than-quality',
    category: BlogCategory.X_FIRST,
    title: 'AI Is Shipping Faster Than Quality',
    excerpt: 'AI is shipping faster than traditional QA can handle. Discover how AI for QE enables smarter testing, AI assurance, and predictable enterprise delivery.',
    author: 'Cogniron Team',
    date: 'December 30, 2025',
    readTime: '5 min read',
    tags: ['ai', 'quality-engineering', 'enterprise', 'ai-first-qa', 'delivery-speed'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1731846584223-81977e156b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRlcGxveW1lbnQlMjBzcGVlZCUyMGFsZXJ0c3xlbnwxfHx8fDE3NjcwOTU1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

/**
 * Get X-First articles by tag
 */
export function getXFirstArticlesByTag(tag: string): BlogArticleMetadata[] {
  return xFirstArticles.filter(article => article.tags.includes(tag));
}

/**
 * Get featured X-First articles
 */
export function getFeaturedXFirstArticles(): BlogArticleMetadata[] {
  return xFirstArticles.filter(article => article.featured);
}

/**
 * Get X-First article by ID
 */
export function getXFirstArticleById(id: string): BlogArticleMetadata | undefined {
  return xFirstArticles.find(article => article.id === id);
}