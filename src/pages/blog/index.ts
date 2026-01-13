/**
 * @fileoverview Main Blog System Export
 * @module pages/blog
 * 
 * Central export point for the entire blog system. This file re-exports
 * all types, constants, utilities, and category registries for easy importing
 * throughout the application.
 * 
 * Usage:
 * ```typescript
 * import { getAllArticles, BlogCategory, BLOG_ROUTES } from '@/pages/blog';
 * ```
 * 
 * @author Cogniron Development Team
 * @version 1.0.0
 */

// Export all types
export type {
  BlogAuthor,
  BlogArticleMetadata,
  BlogArticle,
  BlogSection,
  BlogTag,
  BlogFilterConfig,
  BlogPaginationConfig,
  BlogRegistry,
  BlogListingProps,
  BlogCardProps,
} from './types';

// Export enums and constants
export { BlogCategory, CategoryDisplayNames } from './types';

// Export constants
export {
  BLOG_PAGINATION,
  BLOG_ROUTES,
  BLOG_TAGS,
  CATEGORY_METADATA,
  BLOG_SEO,
  BLOG_IMAGES,
  READING_TIME,
  SOCIAL_SHARING,
  ANALYTICS_EVENTS,
  NEWSLETTER,
  COMMON_AUTHORS,
} from './constants';

// Export registry and all utility functions
export {
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
} from './blogRegistry';

// Export category-specific registries
export { pqlmArticles } from './pqlm';
export { aiMlArticles } from './ai-ml';
export { automationArticles } from './automation';
export { bestPracticesArticles } from './best-practices';
export { caseStudiesArticles } from './case-studies';

/**
 * Blog System Version
 * Update this when making significant changes to the blog architecture
 */
export const BLOG_SYSTEM_VERSION = '1.0.0';

/**
 * Blog System Metadata
 * Information about the blog system for debugging and analytics
 */
export const BLOG_SYSTEM_METADATA = {
  version: BLOG_SYSTEM_VERSION,
  lastUpdated: '2024-12-10',
  architecture: 'category-based-registry',
  features: [
    'Type-safe article management',
    'Centralized registry system',
    'Category-based organization',
    'Full-text search',
    'Tag filtering',
    'Related article suggestions',
    'Author profiles',
    'SEO optimization',
  ],
} as const;
