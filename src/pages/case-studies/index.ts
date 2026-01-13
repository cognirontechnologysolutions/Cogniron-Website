/**
 * @fileoverview Case Studies Articles Index
 * @module pages/case-studies
 * 
 * Central export point for all case study articles.
 * Real-world success stories, implementation examples, and lessons learned
 * from enterprise quality engineering transformations.
 * 
 * @author Cogniron Development Team
 * @version 1.0.0
 */

import { BlogArticleMetadata, BlogCategory } from '../blog/types';

/**
 * Registry of all Case Studies articles
 * 
 * @constant {BlogArticleMetadata[]}
 */
export const caseStudiesArticles: BlogArticleMetadata[] = [
  // Articles will be added here as they are created
];

export function getCaseStudiesArticlesByTag(tag: string): BlogArticleMetadata[] {
  return caseStudiesArticles.filter(article => article.tags.includes(tag));
}

export function getFeaturedCaseStudiesArticles(): BlogArticleMetadata[] {
  return caseStudiesArticles.filter(article => article.featured);
}

export function getCaseStudiesArticleById(id: string): BlogArticleMetadata | undefined {
  return caseStudiesArticles.find(article => article.id === id);
}
