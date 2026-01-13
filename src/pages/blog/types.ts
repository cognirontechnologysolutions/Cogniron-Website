/**
 * @fileoverview Type definitions for blog articles and related entities
 * @module pages/blog/types
 * 
 * This module provides comprehensive TypeScript interfaces and types for the blog system.
 * It ensures type safety across all blog-related components and data structures.
 * 
 * @author Cogniron Development Team
 * @version 1.0.0
 */

/**
 * Represents the metadata for a blog article author
 * 
 * @interface BlogAuthor
 * @property {string} name - Full name of the author
 * @property {string} role - Professional role or title
 * @property {string} [bio] - Optional biographical information
 * @property {string} [avatar] - Optional avatar image URL or initials
 * @property {string} [email] - Optional contact email
 */
export interface BlogAuthor {
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  email?: string;
}

/**
 * Enumeration of available service categories for blog organization
 * Maps to the service structure of the Cogniron platform
 * 
 * @enum {string}
 */
export enum BlogCategory {
  PQLM = 'pqlm',
  UX_ASSURANCE = 'ux-assurance',
  X_FIRST = 'x-first',
  COGNITIVE_ASSURANCE = 'cognitive-assurance',
  AI_ML = 'ai-ml',
  AUTOMATION = 'automation',
  BEST_PRACTICES = 'best-practices',
  CASE_STUDIES = 'case-studies',
  SECURITY = 'security',
  PERFORMANCE = 'performance',
  DEVOPS = 'devops',
  CRM = 'crm',
  GRETAH_AI = 'gretah-ai',
}

/**
 * Maps category enum values to human-readable display names
 * Used for UI rendering and navigation
 */
export const CategoryDisplayNames: Record<BlogCategory, string> = {
  [BlogCategory.PQLM]: 'Product Quality Lifecycle Management',
  [BlogCategory.UX_ASSURANCE]: 'UX Assurance',
  [BlogCategory.X_FIRST]: 'X-First Quality Engineering',
  [BlogCategory.COGNITIVE_ASSURANCE]: 'Cognitive Assurance',
  [BlogCategory.AI_ML]: 'AI & Machine Learning',
  [BlogCategory.AUTOMATION]: 'Test Automation',
  [BlogCategory.BEST_PRACTICES]: 'Best Practices',
  [BlogCategory.CASE_STUDIES]: 'Case Studies',
  [BlogCategory.SECURITY]: 'Security Testing',
  [BlogCategory.PERFORMANCE]: 'Performance Engineering',
  [BlogCategory.DEVOPS]: 'DevOps & CI/CD',
  [BlogCategory.CRM]: 'CRM',
  [BlogCategory.GRETAH_AI]: 'Gretah AI',
};

/**
 * Represents a tag/topic that can be associated with blog articles
 * 
 * @interface BlogTag
 * @property {string} id - Unique identifier for the tag (kebab-case)
 * @property {string} name - Display name for the tag
 * @property {number} count - Number of articles with this tag
 * @property {string} [description] - Optional description of the tag
 */
export interface BlogTag {
  id: string;
  name: string;
  count: number;
  description?: string;
}

/**
 * Core metadata structure for a blog article
 * Contains all information needed to display article cards and listings
 * 
 * @interface BlogArticleMetadata
 */
export interface BlogArticleMetadata {
  /** Unique identifier (slug) for the article, used in URLs */
  id: string;
  
  /** Primary service category this article belongs to */
  category: BlogCategory;
  
  /** Full title of the article */
  title: string;
  
  /** Short description/excerpt (recommended 120-160 characters) */
  excerpt: string;
  
  /** Author information */
  author: BlogAuthor | string;
  
  /** Publication date in ISO format or human-readable string */
  date: string;
  
  /** Estimated reading time (e.g., "8 min read") */
  readTime: string;
  
  /** Array of topic tags for filtering and categorization */
  tags: string[];
  
  /** Whether this article should be featured on the homepage */
  featured: boolean;
  
  /** Optional featured image URL */
  image?: string;
  
  /** Optional SEO metadata */
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    canonicalUrl?: string;
  };
}

/**
 * Complete blog article structure including full content
 * Extends metadata with actual article body and additional fields
 * 
 * @interface BlogArticle
 * @extends BlogArticleMetadata
 */
export interface BlogArticle extends BlogArticleMetadata {
  /** Optional subtitle or deck for the article */
  subtitle?: string;
  
  /** Introduction paragraph(s) */
  intro?: string;
  
  /** Main content sections of the article */
  sections?: BlogSection[];
  
  /** Optional key highlights or takeaways */
  highlights?: string[];
  
  /** Optional related article IDs for cross-referencing */
  relatedArticles?: string[];
  
  /** Article status for draft/published workflow */
  status?: 'draft' | 'published' | 'archived';
  
  /** Last modified timestamp */
  lastModified?: string;
}

/**
 * Represents a section within a blog article
 * Used for structured content organization
 * 
 * @interface BlogSection
 */
export interface BlogSection {
  /** Section heading */
  title: string;
  
  /** Section content (supports markdown or HTML) */
  content: string;
  
  /** Optional subsections for nested content */
  subsections?: BlogSection[];
  
  /** Optional images for the section */
  images?: string[];
  
  /** Optional code snippets */
  codeBlocks?: {
    language: string;
    code: string;
    caption?: string;
  }[];
}

/**
 * Configuration for blog filtering and search
 * 
 * @interface BlogFilterConfig
 */
export interface BlogFilterConfig {
  /** Selected category filter */
  category?: BlogCategory | 'all';
  
  /** Selected tag filters */
  tags?: string[];
  
  /** Search query string */
  searchQuery?: string;
  
  /** Author filter */
  author?: string;
  
  /** Date range filter */
  dateRange?: {
    start: string;
    end: string;
  };
  
  /** Sort configuration */
  sort?: {
    field: 'date' | 'title' | 'readTime' | 'views';
    order: 'asc' | 'desc';
  };
}

/**
 * Pagination configuration for blog listings
 * 
 * @interface BlogPaginationConfig
 */
export interface BlogPaginationConfig {
  /** Current page number (1-indexed) */
  currentPage: number;
  
  /** Number of articles per page */
  pageSize: number;
  
  /** Total number of articles */
  totalArticles: number;
  
  /** Total number of pages */
  totalPages: number;
}

/**
 * Blog registry entry mapping categories to article lists
 * Used for organizing and accessing articles by service category
 * 
 * @type BlogRegistry
 */
export type BlogRegistry = {
  [K in BlogCategory]: BlogArticleMetadata[];
};

/**
 * Props for blog listing components
 * 
 * @interface BlogListingProps
 */
export interface BlogListingProps {
  /** Array of articles to display */
  articles: BlogArticleMetadata[];
  
  /** Whether to show featured articles separately */
  showFeatured?: boolean;
  
  /** Layout variant */
  layout?: 'grid' | 'list' | 'masonry';
  
  /** Loading state */
  isLoading?: boolean;
  
  /** Error state */
  error?: string;
  
  /** Pagination config */
  pagination?: BlogPaginationConfig;
  
  /** Callback for pagination */
  onPageChange?: (page: number) => void;
}

/**
 * Props for individual blog card components
 * 
 * @interface BlogCardProps
 */
export interface BlogCardProps {
  /** Article metadata to display */
  article: BlogArticleMetadata;
  
  /** Card variant */
  variant?: 'default' | 'featured' | 'compact';
  
  /** Optional click handler */
  onClick?: () => void;
  
  /** Show category badge */
  showCategory?: boolean;
  
  /** Show author information */
  showAuthor?: boolean;
}