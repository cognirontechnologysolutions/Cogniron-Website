/**
 * @fileoverview Test Automation Blog Articles Index
 * @module pages/blog/automation
 * 
 * Central export point for all test automation-related blog articles.
 * Covers topics including automation frameworks, tools, best practices,
 * and strategies for effective test automation implementation.
 * 
 * @author Cogniron Development Team
 * @version 1.0.0
 */

import { BlogArticleMetadata, BlogCategory } from '../types';

/**
 * Registry of all Automation blog articles
 * 
 * @constant {BlogArticleMetadata[]}
 */
export const automationArticles: BlogArticleMetadata[] = [
  // Articles will be added here as they are created
];

export function getAutomationArticlesByTag(tag: string): BlogArticleMetadata[] {
  return automationArticles.filter(article => article.tags.includes(tag));
}

export function getFeaturedAutomationArticles(): BlogArticleMetadata[] {
  return automationArticles.filter(article => article.featured);
}

export function getAutomationArticleById(id: string): BlogArticleMetadata | undefined {
  return automationArticles.find(article => article.id === id);
}
