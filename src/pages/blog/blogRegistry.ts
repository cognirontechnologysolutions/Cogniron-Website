/**
 * @fileoverview Central Blog Registry and Article Management System
 * @module pages/blog/blogRegistry
 * 
 * This module serves as the single source of truth for all blog articles across
 * all categories. It aggregates articles from category-specific indices and provides
 * utility functions for querying, filtering, and organizing blog content.
 * 
 * The registry pattern enables:
 * - Centralized article discovery and management
 * - Type-safe article access across the application
 * - Efficient filtering and search capabilities
 * - Easy addition of new articles and categories
 * - Automatic tag counting and metadata aggregation
 * 
 * @author Cogniron Development Team
 * @version 1.0.0
 */

import { BlogArticleMetadata, BlogCategory, BlogRegistry, BlogTag } from './types';
import { BLOG_TAGS } from './constants';

// Import category-specific article registries
import { pqlmArticles } from './pqlm';
import { aiMlArticles } from './ai-ml';
import { automationArticles } from './automation';
import { bestPracticesArticles } from './best-practices';
import { caseStudiesArticles } from '../case-studies';
import { xFirstArticles } from './x-first';
import { uxAssuranceArticles } from './ux-assurance';
import { crmArticles } from './crm';
import { cognitiveAssuranceArticles } from './cognitive-assurance';
import { gretahAiArticles } from './gretah-ai';

/**
 * Complete blog registry mapping all categories to their articles
 * 
 * This is the master registry that aggregates all blog articles from all categories.
 * Each category maintains its own index file, which is imported and included here.
 * 
 * To add a new category:
 * 1. Create the category folder under /pages/blog/
 * 2. Create an index.ts file that exports the category's articles
 * 3. Import and add to this registry
 * 
 * @constant {BlogRegistry}
 */
export const blogRegistry: BlogRegistry = {
  [BlogCategory.PQLM]: pqlmArticles,
  [BlogCategory.UX_ASSURANCE]: uxAssuranceArticles,
  [BlogCategory.X_FIRST]: xFirstArticles,
  [BlogCategory.COGNITIVE_ASSURANCE]: cognitiveAssuranceArticles,
  [BlogCategory.AI_ML]: aiMlArticles,
  [BlogCategory.AUTOMATION]: automationArticles,
  [BlogCategory.BEST_PRACTICES]: bestPracticesArticles,
  [BlogCategory.CASE_STUDIES]: caseStudiesArticles,
  [BlogCategory.SECURITY]: [],
  [BlogCategory.PERFORMANCE]: [],
  [BlogCategory.DEVOPS]: [],
  [BlogCategory.CRM]: crmArticles,
  [BlogCategory.GRETAH_AI]: gretahAiArticles,
};

/**
 * Get all blog articles across all categories
 * 
 * Returns a flattened array of all articles, sorted by date (newest first).
 * Useful for displaying complete article listings and search results.
 * 
 * @returns {BlogArticleMetadata[]} All blog articles
 * 
 * @example
 * ```typescript
 * const allArticles = getAllArticles();
 * console.log(`Total articles: ${allArticles.length}`);
 * ```
 */
export function getAllArticles(): BlogArticleMetadata[] {
  const articles = Object.values(blogRegistry).flat();
  return articles.sort((a, b) => {
    // Sort by date, newest first
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

/**
 * Get articles by category
 * 
 * Returns all articles from a specific category, sorted by date (newest first).
 * 
 * @param {BlogCategory} category - Category to filter by
 * @returns {BlogArticleMetadata[]} Articles in the category
 * 
 * @example
 * ```typescript
 * const pqlmArticles = getArticlesByCategory(BlogCategory.PQLM);
 * ```
 */
export function getArticlesByCategory(category: BlogCategory): BlogArticleMetadata[] {
  const articles = blogRegistry[category] || [];
  return articles.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

/**
 * Get articles by tag
 * 
 * Returns all articles containing a specific tag, sorted by date (newest first).
 * 
 * @param {string} tag - Tag to filter by
 * @returns {BlogArticleMetadata[]} Articles with the tag
 * 
 * @example
 * ```typescript
 * const aiArticles = getArticlesByTag('AI');
 * ```
 */
export function getArticlesByTag(tag: string): BlogArticleMetadata[] {
  const allArticles = getAllArticles();
  return allArticles.filter(article => article.tags.includes(tag));
}

/**
 * Get featured articles
 * 
 * Returns articles marked as featured, sorted by date (newest first).
 * By default, returns the 2 most recent featured articles.
 * Featured articles typically appear prominently on the blog homepage.
 * 
 * @param {number} [limit=2] - Number of featured articles to return (default: 2)
 * @returns {BlogArticleMetadata[]} Featured articles
 * 
 * @example
 * ```typescript
 * const topFeatured = getFeaturedArticles(2);
 * ```
 */
export function getFeaturedArticles(limit: number = 2): BlogArticleMetadata[] {
  const allArticles = getAllArticles();
  const featured = allArticles.filter(article => article.featured);
  
  // Sort by date, newest first
  const sortedFeatured = featured.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
  
  return limit ? sortedFeatured.slice(0, limit) : sortedFeatured;
}

/**
 * Get article by ID
 * 
 * Searches across all categories for an article with the specified ID.
 * Returns undefined if no matching article is found.
 * 
 * @param {string} id - Article ID (slug)
 * @returns {BlogArticleMetadata | undefined} Article metadata or undefined
 * 
 * @example
 * ```typescript
 * const article = getArticleById('ai-driven-test-automation');
 * if (article) {
 *   console.log(article.title);
 * }
 * ```
 */
export function getArticleById(id: string): BlogArticleMetadata | undefined {
  const allArticles = getAllArticles();
  return allArticles.find(article => article.id === id);
}

/**
 * Search articles by query string
 * 
 * Performs a case-insensitive search across article titles, excerpts, and tags.
 * Returns articles that match any of these fields.
 * 
 * @param {string} query - Search query
 * @returns {BlogArticleMetadata[]} Matching articles
 * 
 * @example
 * ```typescript
 * const results = searchArticles('artificial intelligence');
 * ```
 */
export function searchArticles(query: string): BlogArticleMetadata[] {
  if (!query || query.trim() === '') {
    return getAllArticles();
  }
  
  const searchTerm = query.toLowerCase().trim();
  const allArticles = getAllArticles();
  
  return allArticles.filter(article => {
    const titleMatch = article.title.toLowerCase().includes(searchTerm);
    const excerptMatch = article.excerpt.toLowerCase().includes(searchTerm);
    const tagMatch = article.tags.some(tag => tag.toLowerCase().includes(searchTerm));
    const authorMatch = typeof article.author === 'string' 
      ? article.author.toLowerCase().includes(searchTerm)
      : article.author.name.toLowerCase().includes(searchTerm);
    
    return titleMatch || excerptMatch || tagMatch || authorMatch;
  });
}

/**
 * Get related articles
 * 
 * Finds articles related to a given article based on shared tags and category.
 * Excludes the source article from results.
 * 
 * @param {string} articleId - ID of the source article
 * @param {number} [limit=3] - Maximum number of related articles to return
 * @returns {BlogArticleMetadata[]} Related articles
 * 
 * @example
 * ```typescript
 * const related = getRelatedArticles('ai-driven-test-automation', 3);
 * ```
 */
export function getRelatedArticles(articleId: string, limit: number = 3): BlogArticleMetadata[] {
  const sourceArticle = getArticleById(articleId);
  if (!sourceArticle) {
    return [];
  }
  
  const allArticles = getAllArticles();
  
  // Score articles based on relevance
  const scoredArticles = allArticles
    .filter(article => article.id !== articleId)
    .map(article => {
      let score = 0;
      
      // Same category: +10 points
      if (article.category === sourceArticle.category) {
        score += 10;
      }
      
      // Shared tags: +5 points per shared tag
      const sharedTags = article.tags.filter(tag => 
        sourceArticle.tags.includes(tag)
      );
      score += sharedTags.length * 5;
      
      // Featured article: +3 points
      if (article.featured) {
        score += 3;
      }
      
      return { article, score };
    })
    .sort((a, b) => b.score - a.score)
    .map(item => item.article);
  
  return scoredArticles.slice(0, limit);
}

/**
 * Get articles by author
 * 
 * Filters articles written by a specific author.
 * Supports both string author names and BlogAuthor objects.
 * 
 * @param {string} authorName - Name of the author
 * @returns {BlogArticleMetadata[]} Articles by the author
 * 
 * @example
 * ```typescript
 * const sarahArticles = getArticlesByAuthor('Dr. Sarah Chen');
 * ```
 */
export function getArticlesByAuthor(authorName: string): BlogArticleMetadata[] {
  const allArticles = getAllArticles();
  return allArticles.filter(article => {
    if (typeof article.author === 'string') {
      return article.author.toLowerCase() === authorName.toLowerCase();
    }
    return article.author.name.toLowerCase() === authorName.toLowerCase();
  });
}

/**
 * Get tag statistics
 * 
 * Calculates the number of articles for each tag and returns updated tag data.
 * This is used to display tag counts in filter interfaces.
 * 
 * @returns {BlogTag[]} Tags with accurate article counts
 * 
 * @example
 * ```typescript
 * const tags = getTagStatistics();
 * tags.forEach(tag => console.log(`${tag.name}: ${tag.count} articles`));
 * ```
 */
export function getTagStatistics(): BlogTag[] {
  const allArticles = getAllArticles();
  
  return BLOG_TAGS.map(tag => {
    if (tag.id === 'all') {
      return { ...tag, count: allArticles.length };
    }
    
    const count = allArticles.filter(article => 
      article.tags.includes(tag.id)
    ).length;
    
    return { ...tag, count };
  });
}

/**
 * Get recent articles
 * 
 * Returns the most recently published articles across all categories.
 * 
 * @param {number} [limit=5] - Number of recent articles to return
 * @returns {BlogArticleMetadata[]} Recent articles
 * 
 * @example
 * ```typescript
 * const recentPosts = getRecentArticles(10);
 * ```
 */
export function getRecentArticles(limit: number = 5): BlogArticleMetadata[] {
  const allArticles = getAllArticles();
  return allArticles.slice(0, limit);
}

/**
 * Get article count by category
 * 
 * Returns a map of category names to article counts.
 * Useful for displaying category statistics.
 * 
 * @returns {Record<BlogCategory, number>} Category article counts
 * 
 * @example
 * ```typescript
 * const counts = getArticleCountByCategory();
 * console.log(`PQLM articles: ${counts[BlogCategory.PQLM]}`);
 * ```
 */
export function getArticleCountByCategory(): Record<BlogCategory, number> {
  const counts = {} as Record<BlogCategory, number>;
  
  Object.entries(blogRegistry).forEach(([category, articles]) => {
    counts[category as BlogCategory] = articles.length;
  });
  
  return counts;
}

/**
 * Validate article ID uniqueness
 * 
 * Checks if an article ID is unique across all categories.
 * Useful for development and content management workflows.
 * 
 * @param {string} id - Article ID to validate
 * @returns {boolean} True if ID is unique, false if duplicate exists
 * 
 * @example
 * ```typescript
 * if (!isArticleIdUnique('new-article-id')) {
 *   console.error('Article ID already exists!');
 * }
 * ```
 */
export function isArticleIdUnique(id: string): boolean {
  const allArticles = getAllArticles();
  return !allArticles.some(article => article.id === id);
}

/**
 * Get articles published in date range
 * 
 * Filters articles published between start and end dates.
 * 
 * @param {string} startDate - Start date (ISO format or parseable string)
 * @param {string} endDate - End date (ISO format or parseable string)
 * @returns {BlogArticleMetadata[]} Articles in date range
 * 
 * @example
 * ```typescript
 * const decemberArticles = getArticlesInDateRange('2024-12-01', '2024-12-31');
 * ```
 */
export function getArticlesInDateRange(startDate: string, endDate: string): BlogArticleMetadata[] {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const allArticles = getAllArticles();
  
  return allArticles.filter(article => {
    const articleDate = new Date(article.date).getTime();
    return articleDate >= start && articleDate <= end;
  });
}

// Export all functions and registry
export default {
  blogRegistry,
  getAllArticles,
  getArticlesByCategory,
  getArticlesByTag,
  getFeaturedArticles,
  getArticleById,
  searchArticles,
  getRelatedArticles,
  getArticlesByAuthor,
  getTagStatistics,
  getRecentArticles,
  getArticleCountByCategory,
  isArticleIdUnique,
  getArticlesInDateRange,
};