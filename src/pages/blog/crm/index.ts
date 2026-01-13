/**
 * @fileoverview CRM Blog Articles Index
 * @module pages/blog/crm
 * 
 * Central export point for all CRM-related blog articles.
 * This index file enables clean imports and maintains a registry of all articles
 * in the CRM category for easy discovery and organization.
 * 
 * Usage:
 * ```typescript
 * import { crmArticles, WhyTechnologyAloneIsntEnough } from '@/pages/blog/crm';
 * ```
 * 
 * @author Cogniron Development Team
 * @version 1.0.0
 */

import { BlogArticleMetadata, BlogCategory } from '../types';

// Import all CRM article components and their metadata
export { WhyTechnologyAloneIsntEnough, metadata as whyTechnologyMetadata } from './why-technology-alone-isnt-enough-to-fix-customer-operations';
export { CrmIsntAToolAnymoreItsInfrastructure, metadata as crmInfrastructureMetadata } from './crm-isnt-a-tool-anymore-its-infrastructure';

/**
 * Registry of all CRM blog articles
 * 
 * This array serves as the single source of truth for all articles in the CRM category.
 * It's used by the blog system for:
 * - Category page listings
 * - Search and filtering
 * - Related article suggestions
 * - Tag aggregation
 * 
 * @constant {BlogArticleMetadata[]}
 */
export const crmArticles: BlogArticleMetadata[] = [
  {
    id: 'crm-isnt-a-tool-anymore-its-infrastructure',
    category: BlogCategory.CRM,
    title: 'CRM Isn\'t a Tool Anymore. It\'s Infrastructure.',
    excerpt: 'A decade ago, CRM was treated as an application you implemented, trained users on, and moved on from. Today, that thinking doesn\'t hold up.',
    author: 'Cogniron Team',
    date: 'January 6, 2026',
    readTime: '4–6 min read',
    tags: ['Enterprise CRM', 'CRM Architecture', 'Platform Engineering', 'Digital Systems', 'Cogniron'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHJlbGF0aW9uc2hpcCUyMHNvZnR3YXJlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NzU5NzEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'why-technology-alone-isnt-enough-to-fix-customer-operations',
    category: BlogCategory.CRM,
    title: 'Why Technology Alone Isn\'t Enough to Fix Customer Operations',
    excerpt: 'Most organizations begin their CRM journey with excitement. A new platform promises better visibility, cleaner sales processes, and stronger customer engagement. Yet once the implementation dust settles, many teams discover a gap between expectations and reality. The CRM is technically "live," but adoption is low, reporting is unreliable, and teams quietly fall back to spreadsheets or ad-hoc processes.',
    author: 'Cogniron Team',
    date: 'December 18, 2025',
    readTime: '7 min read',
    tags: ['crm', 'operations', 'business-strategy', 'customer-engagement'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9wZXJhdGlvbnN8ZW58MHx8fHwxNzM0NTQxMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

/**
 * Get CRM articles by tag
 * 
 * @param {string} tag - Tag to filter by
 * @returns {BlogArticleMetadata[]} Filtered articles
 */
export function getCrmArticlesByTag(tag: string): BlogArticleMetadata[] {
  return crmArticles.filter(article => article.tags.includes(tag));
}

/**
 * Get featured CRM articles
 * 
 * @returns {BlogArticleMetadata[]} Featured articles only
 */
export function getFeaturedCrmArticles(): BlogArticleMetadata[] {
  return crmArticles.filter(article => article.featured);
}

/**
 * Get CRM article by ID
 * 
 * @param {string} id - Article ID
 * @returns {BlogArticleMetadata | undefined} Article metadata or undefined if not found
 */
export function getCrmArticleById(id: string): BlogArticleMetadata | undefined {
  return crmArticles.find(article => article.id === id);
}