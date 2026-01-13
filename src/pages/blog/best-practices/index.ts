/**
 * @fileoverview Best Practices Blog Articles Index
 * @module pages/blog/best-practices
 * 
 * Central export point for all best practices blog articles.
 * Covers industry standards, proven methodologies, and practical guidance
 * for quality assurance and software testing excellence.
 * 
 * @author Cogniron Development Team
 * @version 1.0.0
 */

import { BlogArticleMetadata, BlogCategory } from '../types';

/**
 * Registry of all Best Practices blog articles
 * 
 * @constant {BlogArticleMetadata[]}
 */
export const bestPracticesArticles: BlogArticleMetadata[] = [
  // Articles will be added here as they are created
];

export function getBestPracticesArticlesByTag(tag: string): BlogArticleMetadata[] {
  return bestPracticesArticles.filter(article => article.tags.includes(tag));
}

export function getFeaturedBestPracticesArticles(): BlogArticleMetadata[] {
  return bestPracticesArticles.filter(article => article.featured);
}

export function getBestPracticesArticleById(id: string): BlogArticleMetadata | undefined {
  return bestPracticesArticles.find(article => article.id === id);
}
