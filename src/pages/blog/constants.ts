/**
 * @fileoverview Constants and configuration for the blog system
 * @module pages/blog/constants
 * 
 * Central location for all blog-related constants, configuration values,
 * and static data used throughout the blog system.
 * 
 * @author Cogniron Development Team
 * @version 1.0.0
 */

import { BlogTag, BlogCategory, CategoryDisplayNames } from './types';

/**
 * Default pagination settings for blog listings
 */
export const BLOG_PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  FEATURED_PAGE_SIZE: 6,
  RELATED_ARTICLES_COUNT: 3,
} as const;

/**
 * Blog route configuration
 * Maps categories to their URL paths
 */
export const BLOG_ROUTES = {
  BASE: '/blog',
  CATEGORY: (category: BlogCategory) => `/blog/category/${category}`,
  ARTICLE: (categoryOrId: string, articleId?: string) => 
    articleId ? `/blog/${categoryOrId}/${articleId}` : `/blog/${categoryOrId}`,
  TAG: (tagId: string) => `/blog/tag/${tagId}`,
  AUTHOR: (authorId: string) => `/blog/author/${authorId}`,
  SEARCH: '/blog/search',
} as const;

/**
 * Available tags for blog articles
 * These should be kept in sync with actual article tags
 */
export const BLOG_TAGS: BlogTag[] = [
  {
    id: 'all',
    name: 'All Posts',
    count: 0, // Will be calculated dynamically
    description: 'All blog articles across all categories',
  },
  {
    id: 'ai',
    name: 'AI',
    count: 0,
    description: 'Artificial Intelligence in testing',
  },
  {
    id: 'ai-ml',
    name: 'AI/ML',
    count: 0,
    description: 'Artificial Intelligence and Machine Learning in testing',
  },
  {
    id: 'test-data-management',
    name: 'Test Data Management',
    count: 0,
    description: 'Test data strategies, generation, and management',
  },
  {
    id: 'compliance',
    name: 'Compliance',
    count: 0,
    description: 'Data privacy and regulatory compliance',
  },
  {
    id: 'data-privacy',
    name: 'Data Privacy',
    count: 0,
    description: 'GDPR, CCPA, and data privacy regulations',
  },
  {
    id: 'automation',
    name: 'Automation',
    count: 0,
    description: 'Test automation strategies and tools',
  },
  {
    id: 'test-automation',
    name: 'Test Automation',
    count: 0,
    description: 'Automated testing frameworks and practices',
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    count: 0,
    description: 'Machine learning applications in testing',
  },
  {
    id: 'innovation',
    name: 'Innovation',
    count: 0,
    description: 'Cutting-edge testing innovations and trends',
  },
  {
    id: 'best-practices',
    name: 'Best Practices',
    count: 0,
    description: 'Industry best practices and methodologies',
  },
  {
    id: 'functional-testing',
    name: 'Functional Testing',
    count: 0,
    description: 'Functional testing strategies and approaches',
  },
  {
    id: 'quality-engineering',
    name: 'Quality Engineering',
    count: 0,
    description: 'Modern quality engineering practices',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    count: 0,
    description: 'Enterprise-scale testing solutions',
  },
  {
    id: 'case-studies',
    name: 'Case Studies',
    count: 0,
    description: 'Real-world success stories and implementations',
  },
  {
    id: 'performance',
    name: 'Performance',
    count: 0,
    description: 'Performance testing and optimization',
  },
  {
    id: 'security',
    name: 'Security',
    count: 0,
    description: 'Security testing and DevSecOps',
  },
  {
    id: 'devops',
    name: 'DevOps',
    count: 0,
    description: 'DevOps practices and CI/CD integration',
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    count: 0,
    description: 'Accessibility testing and compliance',
  },
  {
    id: 'mobile',
    name: 'Mobile',
    count: 0,
    description: 'Mobile testing strategies',
  },
  {
    id: 'cloud',
    name: 'Cloud',
    count: 0,
    description: 'Cloud-native testing approaches',
  },
  {
    id: 'quality-assurance',
    name: 'Quality Assurance',
    count: 0,
    description: 'General QA practices and methodologies',
  },
  {
    id: 'intelligence-led',
    name: 'Intelligence-Led',
    count: 0,
    description: 'Intelligence-led quality assurance approaches',
  },
  {
    id: 'modern-qa',
    name: 'Modern QA',
    count: 0,
    description: 'Modern quality assurance methodologies',
  },
];

/**
 * Category metadata including descriptions and icons
 */
export const CATEGORY_METADATA: Record<BlogCategory, {
  displayName: string;
  description: string;
  slug: string;
  icon?: string;
  color?: string;
}> = {
  [BlogCategory.PQLM]: {
    displayName: CategoryDisplayNames[BlogCategory.PQLM],
    description: 'Articles about Product Quality Lifecycle Management, functional testing, and quality processes',
    slug: 'pqlm',
    color: '#2563EB',
  },
  [BlogCategory.UX_ASSURANCE]: {
    displayName: CategoryDisplayNames[BlogCategory.UX_ASSURANCE],
    description: 'UX testing, accessibility, and user experience quality assurance',
    slug: 'ux-assurance',
    color: '#7C3AED',
  },
  [BlogCategory.X_FIRST]: {
    displayName: CategoryDisplayNames[BlogCategory.X_FIRST],
    description: 'Shift-left testing, security-first, and quality-first engineering practices',
    slug: 'x-first',
    color: '#059669',
  },
  [BlogCategory.COGNITIVE_ASSURANCE]: {
    displayName: CategoryDisplayNames[BlogCategory.COGNITIVE_ASSURANCE],
    description: 'AI-driven testing, intelligent automation, and cognitive quality approaches',
    slug: 'cognitive-assurance',
    color: '#DC2626',
  },
  [BlogCategory.AI_ML]: {
    displayName: CategoryDisplayNames[BlogCategory.AI_ML],
    description: 'Artificial intelligence and machine learning applications in quality assurance',
    slug: 'ai-ml',
    color: '#2563EB',
  },
  [BlogCategory.AUTOMATION]: {
    displayName: CategoryDisplayNames[BlogCategory.AUTOMATION],
    description: 'Test automation frameworks, tools, and best practices',
    slug: 'automation',
    color: '#0891B2',
  },
  [BlogCategory.BEST_PRACTICES]: {
    displayName: CategoryDisplayNames[BlogCategory.BEST_PRACTICES],
    description: 'Industry best practices, patterns, and proven methodologies',
    slug: 'best-practices',
    color: '#059669',
  },
  [BlogCategory.CASE_STUDIES]: {
    displayName: CategoryDisplayNames[BlogCategory.CASE_STUDIES],
    description: 'Real-world implementations, success stories, and lessons learned',
    slug: 'case-studies',
    color: '#7C3AED',
  },
  [BlogCategory.SECURITY]: {
    displayName: CategoryDisplayNames[BlogCategory.SECURITY],
    description: 'Security testing, vulnerability assessment, and DevSecOps',
    slug: 'security',
    color: '#DC2626',
  },
  [BlogCategory.PERFORMANCE]: {
    displayName: CategoryDisplayNames[BlogCategory.PERFORMANCE],
    description: 'Performance testing, load testing, and optimization strategies',
    slug: 'performance',
    color: '#EA580C',
  },
  [BlogCategory.DEVOPS]: {
    displayName: CategoryDisplayNames[BlogCategory.DEVOPS],
    description: 'DevOps practices, CI/CD integration, and continuous testing',
    slug: 'devops',
    color: '#0891B2',
  },
  [BlogCategory.CRM]: {
    displayName: CategoryDisplayNames[BlogCategory.CRM],
    description: 'Customer relationship management and quality assurance',
    slug: 'crm',
    color: '#7C3AED',
  },
  [BlogCategory.GRETAH_AI]: {
    displayName: CategoryDisplayNames[BlogCategory.GRETAH_AI],
    description: 'AI-first Quality Engineering platform with multi-agent intelligence',
    slug: 'gretah-ai',
    color: '#2563EB',
  },
};

/**
 * SEO configuration for blog pages
 */
export const BLOG_SEO = {
  DEFAULT_TITLE: 'Blog - Cogniron',
  DEFAULT_DESCRIPTION: 'Expert insights on quality assurance, testing automation, and AI-driven quality engineering from the Cogniron team.',
  DEFAULT_KEYWORDS: ['quality assurance', 'test automation', 'AI testing', 'DevOps', 'software testing'],
  SITE_NAME: 'Cogniron Blog',
  TWITTER_HANDLE: '@cogniron',
} as const;

/**
 * Image configuration for blog articles
 */
export const BLOG_IMAGES = {
  DEFAULT_FEATURED_IMAGE: '/images/blog/default-featured.jpg',
  DEFAULT_AUTHOR_AVATAR: '/images/blog/default-avatar.jpg',
  IMAGE_SIZES: {
    THUMBNAIL: { width: 400, height: 300 },
    CARD: { width: 800, height: 450 },
    FEATURED: { width: 1200, height: 630 },
    HERO: { width: 1920, height: 1080 },
  },
} as const;

/**
 * Reading time calculation constants
 * Based on average adult reading speed
 */
export const READING_TIME = {
  WORDS_PER_MINUTE: 200,
  IMAGE_TIME_SECONDS: 12, // Additional time per image
  CODE_BLOCK_TIME_SECONDS: 15, // Additional time per code block
} as const;

/**
 * Social sharing configuration
 */
export const SOCIAL_SHARING = {
  ENABLED_PLATFORMS: ['twitter', 'linkedin', 'facebook', 'email'],
  TWITTER_SHARE_TEXT: (title: string) => `Check out this article: ${title}`,
  HASHTAGS: ['QualityAssurance', 'TestAutomation', 'DevOps', 'AI'],
} as const;

/**
 * Blog analytics events
 * For tracking user interactions
 */
export const ANALYTICS_EVENTS = {
  ARTICLE_VIEW: 'blog_article_view',
  ARTICLE_SHARE: 'blog_article_share',
  CATEGORY_FILTER: 'blog_category_filter',
  TAG_FILTER: 'blog_tag_filter',
  SEARCH: 'blog_search',
  CTA_CLICK: 'blog_cta_click',
  RELATED_ARTICLE_CLICK: 'blog_related_article_click',
} as const;

/**
 * Newsletter signup configuration
 */
export const NEWSLETTER = {
  PLACEHOLDER: 'Enter your email',
  BUTTON_TEXT: 'Subscribe',
  SUCCESS_MESSAGE: 'Thank you for subscribing!',
  ERROR_MESSAGE: 'Please enter a valid email address.',
  ADDITIONAL_TEXT: 'Weekly digest. No spam. Unsubscribe anytime.',
} as const;

/**
 * Author information for common authors
 * This can be expanded to include full author profiles
 */
export const COMMON_AUTHORS = {
  COGNIRON_TEAM: {
    name: 'Cogniron Team',
    role: 'Quality Engineering Experts',
    bio: 'The Cogniron team consists of experienced quality assurance professionals, automation engineers, and AI specialists dedicated to advancing software quality practices.',
    avatar: 'CT',
  },
  SARAH_CHEN: {
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Strategist',
    bio: 'Leading AI research and innovation in quality assurance with 15+ years of experience.',
    avatar: 'SC',
  },
  MICHAEL_RODRIGUEZ: {
    name: 'Michael Rodriguez',
    role: 'VP of Quality Engineering',
    bio: 'Veteran quality engineering leader with expertise in enterprise transformations.',
    avatar: 'MR',
  },
  EMILY_JOHNSON: {
    name: 'Emily Johnson',
    role: 'UX Testing Lead',
    bio: 'Accessibility and user experience testing expert with a passion for inclusive design.',
    avatar: 'EJ',
  },
} as const;