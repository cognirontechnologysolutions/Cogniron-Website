/**
 * @fileoverview AI & Machine Learning Blog Articles Index
 * @module pages/blog/ai-ml
 * 
 * Central export point for all AI/ML-related blog articles.
 * Covers topics including machine learning applications in testing,
 * cognitive automation, predictive quality analytics, and AI-driven testing innovations.
 * 
 * @author Cogniron Development Team
 * @version 1.0.0
 */

import { BlogArticleMetadata, BlogCategory } from '../types';

// Import all AI/ML article components and their metadata
export { TestDataManagementAiCompliance, metadata as testDataManagementAiComplianceMetadata } from './test-data-management-ai-compliance';

/**
 * Registry of all AI/ML blog articles
 * 
 * @constant {BlogArticleMetadata[]}
 */
export const aiMlArticles: BlogArticleMetadata[] = [
  {
    id: 'test-data-management-ai-compliance',
    category: BlogCategory.AI_ML,
    title: 'The Future of Test Data Management: AI-Driven Automation & Compliance',
    excerpt: 'Explore how AI and automation are revolutionizing test data management while ensuring compliance with data privacy regulations like GDPR, CCPA, and HIPAA.',
    author: 'Cogniron Team',
    date: 'December 10, 2025',
    readTime: '12 min read',
    tags: ['test-data-management', 'ai', 'automation', 'compliance', 'data-privacy'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwbWFuYWdlbWVudHxlbnwwfHx8fDE3MzM4NTczNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

/**
 * Get AI/ML articles by tag
 */
export function getAiMlArticlesByTag(tag: string): BlogArticleMetadata[] {
  return aiMlArticles.filter(article => article.tags.includes(tag));
}

/**
 * Get featured AI/ML articles
 */
export function getFeaturedAiMlArticles(): BlogArticleMetadata[] {
  return aiMlArticles.filter(article => article.featured);
}

/**
 * Get AI/ML article by ID
 */
export function getAiMlArticleById(id: string): BlogArticleMetadata | undefined {
  return aiMlArticles.find(article => article.id === id);
}