/**
 * @fileoverview Gretah AI Blog Articles Index
 * @module pages/blog/gretah-ai
 * 
 * Central export point for all Gretah AI blog articles.
 * Covers topics including AI quality engineering, multi-agent systems,
 * AI governance, and reliable AI testing automation.
 * 
 * @author Cogniron Development Team
 * @version 1.0.0
 */

import { BlogArticleMetadata, BlogCategory } from '../types';

// Import all Gretah AI article components and their metadata
export { 
  ReliabilityOverAutonomyWhy2026DemandsDisciplinedAITestingAgents, 
  metadata as reliabilityOverAutonomyMetadata 
} from './reliability-over-autonomy-why-2026-demands-disciplined-ai-testing-agents';

export {
  AIInHealthcareWhy90PercentInitiativesFailAndHowToFixIt,
  metadata as aiInHealthcareMetadata
} from './ai-in-healthcare-why-90-percent-initiatives-fail-and-how-to-fix-it';

/**
 * Registry of all Gretah AI blog articles
 * 
 * @constant {BlogArticleMetadata[]}
 */
export const gretahAiArticles: BlogArticleMetadata[] = [
  {
    id: 'ai-in-healthcare-why-90-percent-initiatives-fail-and-how-to-fix-it',
    category: BlogCategory.GRETAH_AI,
    title: 'AI in Healthcare: Why 90% Initiatives Fail and How to Fix It',
    excerpt: 'QA for AI is the dividing line between healthcare AI that passes pilot reviews and healthcare AI that survives production. Without structured QA for AI, even high-performing models break down when exposed to real-world clinical variability, regulatory scrutiny, and operational scale.',
    author: 'Cogniron Team',
    date: 'January 12, 2026',
    readTime: '6–8 min read',
    tags: ['QA for AI', 'Healthcare AI', 'AI Quality Engineering', 'Clinical AI Validation', 'Healthcare Technology', 'AI Compliance', 'Gretah AI'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1698306642516-9841228dcff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjgyMDA3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    seo: {
      metaTitle: 'AI in Healthcare: Why 90% Initiatives Fail and How to Fix It',
      metaDescription: '90% of healthcare AI initiatives fail to scale. Learn how QA for AI ensures clinical trust, compliance, and production-ready healthcare AI systems.',
      keywords: ['QA for AI', 'Healthcare AI', 'AI Quality Engineering', 'Clinical AI Validation', 'Healthcare Technology', 'AI Compliance', 'Gretah AI'],
    },
  },
  {
    id: 'reliability-over-autonomy-why-2026-demands-disciplined-ai-testing-agents',
    category: BlogCategory.GRETAH_AI,
    title: 'Reliability Over Autonomy: Why 2026 Demands Disciplined AI Testing Agents',
    excerpt: '2025 was branded as "the year of AI agents." In reality, it was the year enterprises learned a hard truth: autonomy without discipline creates fragile systems.',
    author: 'Cogniron Team',
    date: 'December 23, 2025',
    readTime: '4–6 min read',
    tags: ['Gretah AI', 'AI Quality Engineering', 'Reliable AI Agents', 'Multi-Agent Systems', 'AI Governance', 'Enterprise AI Resilience', 'AI Testing Automation'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1763568258244-9d5aa9c3ce45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2NjQxNzQ3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    seo: {
      metaTitle: 'Why AI Testing Needs Disciplined Intelligence in 2026',
      metaDescription: 'Discover why 2026 demands disciplined AI testing strategies. Learn how Gretah AI delivers reliability, resilience, and faster quality engineering through multi-agent governance.',
      keywords: ['AI Quality Engineering', 'Reliable AI Agents', 'Multi-Agent Systems', 'AI Governance', 'Enterprise AI Resilience', 'AI Testing Automation'],
    },
  },
];

/**
 * Get Gretah AI articles by tag
 */
export function getGretahAiArticlesByTag(tag: string): BlogArticleMetadata[] {
  return gretahAiArticles.filter(article => article.tags.includes(tag));
}

/**
 * Get featured Gretah AI articles
 */
export function getFeaturedGretahAiArticles(): BlogArticleMetadata[] {
  return gretahAiArticles.filter(article => article.featured);
}

/**
 * Get Gretah AI article by ID
 */
export function getGretahAiArticleById(id: string): BlogArticleMetadata | undefined {
  return gretahAiArticles.find(article => article.id === id);
}