/**
 * @fileoverview PQLM (Product Quality Lifecycle Management) Blog Articles Index
 * @module pages/blog/pqlm
 * 
 * Central export point for all PQLM-related blog articles.
 * This index file enables clean imports and maintains a registry of all articles
 * in the PQLM category for easy discovery and organization.
 * 
 * Usage:
 * ```typescript
 * import { pqlmArticles, FunctionalTestingBestPractices } from '@/pages/blog/pqlm';
 * ```
 * 
 * @author Cogniron Development Team
 * @version 1.0.0
 */

import { BlogArticleMetadata, BlogCategory } from '../types';

// Import all PQLM article components and their metadata
export { HowEtlTestingHelpsEnterprisesPage, metadata as etlTestingMetadata } from './how-etl-testing-helps-enterprises-maintain-data-accuracy-and-compliance';
export { TheFutureOfTestDataManagementAiDrivenAutomationAndCompliance, metadata as theFutureOfTestDataManagementMetadata } from './the-future-of-test-data-management-ai-driven-automation-and-compliance';
export { EnsuringBusinessCriticalSoftwareMeetsUserExpectationsWithUAT, metadata as uatMetadata } from './ensuring-business-critical-software-meets-user-expectations-with-uat';
export { WhyTestEnvironmentManagementIsCriticalForScalableQAInEnterprises, metadata as temMetadata } from './why-test-environment-management-is-critical-for-scalable-qa-in-enterprises';
export { EnsuringSmoothPaymentsAndSaferTransactionsACognironViewOnQAForDigitalPaymentsAndPoSSystems, metadata as digitalPaymentsMetadata } from './ensuring-smooth-payments-and-safer-transactions-a-cogniron-view-on-qa-for-digital-payments-and-pos-systems';
export { RPAThatWorksWhyTestingIsTheRealKeyToReliability, metadata as rpaTestingMetadata } from './rpa-that-works-why-testing-is-the-real-key-to-reliability';

/**
 * Registry of all PQLM blog articles
 * 
 * This array serves as the single source of truth for all articles in the PQLM category.
 * It's used by the blog system for:
 * - Category page listings
 * - Search and filtering
 * - Related article suggestions
 * - Tag aggregation
 * 
 * @constant {BlogArticleMetadata[]}
 */
export const pqlmArticles: BlogArticleMetadata[] = [
  {
    id: 'how-etl-testing-helps-enterprises-maintain-data-accuracy-and-compliance',
    category: BlogCategory.PQLM,
    title: 'How ETL Testing Helps Enterprises Maintain Data Accuracy & Compliance',
    excerpt: 'In today\'s data-driven world, every decision depends on accuracy. Yet, behind every analytics dashboard or business report, there\'s an invisible process quietly moving data from one place to another — the ETL pipeline.',
    author: 'Cogniron Team',
    date: 'November 6, 2025',
    readTime: '6–8 min read',
    tags: ['ETL', 'Data Quality', 'Compliance', 'PQLM', 'Data Engineering'],
    featured: false,
    image: null,
  },
  {
    id: 'the-future-of-test-data-management-ai-driven-automation-and-compliance',
    category: BlogCategory.PQLM,
    title: 'The Future of Test Data Management: AI-Driven Automation & Compliance',
    excerpt: 'If you ask most QA teams where their biggest delays come from, the answer isn\'t coding or testing — it\'s waiting for data. Reliable, relevant, and compliant test data has become one of the most difficult pieces in the software delivery puzzle.',
    author: 'Cogniron Team',
    date: 'October 09, 2025',
    readTime: '6–8 min read',
    tags: ['Test Data Management', 'AI', 'Compliance', 'PQLM', 'Quality Engineering'],
    featured: false,
    image: null,
  },
  {
    id: 'ensuring-business-critical-software-meets-user-expectations-with-uat',
    category: BlogCategory.PQLM,
    title: 'Ensuring Business-Critical Software Meets User Expectations with UAT',
    excerpt: 'In the rush to deliver new features and digital products, it\'s easy to assume that passing system and integration tests is enough. But anyone who has been on the front line of a major rollout knows the truth: software can be technically sound and still fall short of user expectations.',
    author: 'Cogniron Team',
    date: 'October 16, 2025',
    readTime: '6–8 min read',
    tags: ['UAT', 'PQLM', 'Quality Engineering', 'User Experience', 'Business-Critical Systems'],
    featured: false,
    image: null,
  },
  {
    id: 'why-test-environment-management-is-critical-for-scalable-qa-in-enterprises',
    category: BlogCategory.PQLM,
    title: 'Why Test Environment Management is Critical for Scalable QA in Enterprises',
    excerpt: 'When enterprises aim to deliver software at scale, one of the least visible yet most decisive factors is the stability of their test environments. Applications, integrations, and data models can only be validated with confidence if the environments supporting them are reliable, available, and representative of production.',
    author: 'Cogniron Team',
    date: 'September 22, 2025',
    readTime: '5–7 min read',
    tags: ['Test Environment Management', 'TEM', 'PQLM', 'Enterprise QA', 'Scalability'],
    featured: false,
    image: null,
  },
  {
    id: 'ensuring-smooth-payments-and-safer-transactions-a-cogniron-view-on-qa-for-digital-payments-and-pos-systems',
    category: BlogCategory.PQLM,
    title: 'Ensuring Smooth Payments and Safer Transactions: A Cogniron View on QA for Digital Payments and PoS Systems',
    excerpt: 'It\'s easy to overlook how much depends on payments working without a hitch. We swipe a card, scan a QR code, or tap a phone—and the money transfers seamlessly. That\'s all customers see. But behind every transaction is a complex system that must perform flawlessly, even when the unexpected happens.',
    author: 'Cogniron Team',
    date: 'September 15, 2025',
    readTime: '5–7 min read',
    tags: ['Digital Payments', 'PoS Systems', 'PQLM', 'Quality Assurance', 'Security'],
    featured: false,
    image: null,
  },
  {
    id: 'rpa-that-works-why-testing-is-the-real-key-to-reliability',
    category: BlogCategory.PQLM,
    title: "RPA That Works: Why Testing Is the Real Key to Reliability",
    excerpt: "Robotic Process Automation is no longer a side project. For many organizations, it's woven into daily operations—processing invoices, updating records, handling customer requests. It saves time, reduces errors, and frees people to focus on higher-value work.",
    author: 'Cogniron Team',
    date: 'September 11, 2025',
    readTime: '4–6 min read',
    tags: ['RPA', 'Automation', 'PQLM', 'Quality Assurance', 'Enterprise QA'],
    featured: false,
    image: null,
  },
  // Additional PQLM articles can be added here as they are created
];

/**
 * Get PQLM articles by tag
 * 
 * @param {string} tag - Tag to filter by
 * @returns {BlogArticleMetadata[]} Filtered articles
 */
export function getPqlmArticlesByTag(tag: string): BlogArticleMetadata[] {
  return pqlmArticles.filter(article => article.tags.includes(tag));
}

/**
 * Get featured PQLM articles
 * 
 * @returns {BlogArticleMetadata[]} Featured articles only
 */
export function getFeaturedPqlmArticles(): BlogArticleMetadata[] {
  return pqlmArticles.filter(article => article.featured);
}

/**
 * Get PQLM article by ID
 * 
 * @param {string} id - Article ID
 * @returns {BlogArticleMetadata | undefined} Article metadata or undefined if not found
 */
export function getPqlmArticleById(id: string): BlogArticleMetadata | undefined {
  return pqlmArticles.find(article => article.id === id);
}