/**
 * @fileoverview Cognitive Assurance Blog Articles Index
 * @module pages/blog/cognitive-assurance
 * 
 * Central export point for all Cognitive Assurance-related blog articles.
 * This index file enables clean imports and maintains a registry of all articles
 * in the Cognitive Assurance category for easy discovery and organization.
 * 
 * Usage:
 * ```typescript
 * import { cognitiveAssuranceArticles, AiDrivenDecisionMakingInQE } from '@/pages/blog/cognitive-assurance';
 * ```
 * 
 * @author Cogniron Development Team
 * @version 1.0.0
 */

import { BlogArticleMetadata, BlogCategory } from '../types';

// Import all Cognitive Assurance article components and their metadata
export { AiDrivenDecisionMakingInQE, metadata as aiDrivenDecisionMakingMetadata } from './ai-driven-decision-making-in-qe';
export { WhyEveryEnterpriseNeedsAnAIPoweredTestAutomationStrategy, metadata as whyEveryEnterpriseNeedsAnAIPoweredTestAutomationStrategyMetadata } from './why-every-enterprise-needs-an-ai-powered-test-automation-strategy';
export { TheRoleOfLargeLanguageModelsInSoftwareTestingAndDebugging, metadata as theRoleOfLargeLanguageModelsMetadata } from './the-role-of-large-language-models-in-software-testing-and-debugging';
export { AgenticAiForTestOptimizationEnhancingSpeedAndAccuracyInSoftwareQA, metadata as agenticAiForTestOptimizationMetadata } from './agentic-ai-for-test-optimization-enhancing-speed-and-accuracy-in-software-qa';
export { EnsuringExplainabilityAndTransparencyInAiMlSystemsThroughRobustTesting, metadata as ensuringExplainabilityAndTransparencyMetadata } from './ensuring-explainability-and-transparency-in-aiml-systems-through-robust-testing';

/**
 * Registry of all Cognitive Assurance blog articles
 * 
 * This array serves as the single source of truth for all articles in the Cognitive Assurance category.
 * It's used by the blog system for:
 * - Category page listings
 * - Search and filtering
 * - Related article suggestions
 * - Tag aggregation
 * 
 * @constant {BlogArticleMetadata[]}
 */
export const cognitiveAssuranceArticles: BlogArticleMetadata[] = [
  {
    id: 'why-every-enterprise-needs-an-ai-powered-test-automation-strategy',
    category: BlogCategory.COGNITIVE_ASSURANCE,
    title: 'Why Every Enterprise Needs an AI-Powered Test Automation Strategy',
    excerpt: "There's a quiet truth in every modern software team: the faster you innovate, the harder it gets to keep quality under control. Deadlines shrink, systems expand, and customers expect perfection every single time they log in.",
    author: 'Cogniron Team',
    date: 'November 13, 2025',
    readTime: '7 min read',
    tags: ['AI', 'Test Automation', 'Quality Engineering', 'Cognitive Assurance'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGF1dG9tYXRpb258ZW58MHx8fHwxNzM0NTQxMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'ai-driven-decision-making-in-qe',
    category: BlogCategory.COGNITIVE_ASSURANCE,
    title: 'AI-Driven Decision Making in QE: How Intelligent Agents Improve Risk-Based Testing',
    excerpt: 'Quality Engineering has always been about choices. Every release cycle demands decisions: which areas to test most deeply, what to automate, how to allocate limited time and resources, and when the risk of release outweighs the cost of delay. Traditionally, these decisions have relied on human expertise—skilled testers drawing from experience, intuition, and available metrics.',
    author: 'Cogniron Team',
    date: 'October 01, 2025',
    readTime: '5–7 min read',
    tags: ['AI', 'Risk-Based Testing', 'Quality Engineering', 'Cognitive Assurance'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGRlY2lzaW9uJTIwbWFraW5nfGVufDB8fHx8MTczNDU0MTIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'the-role-of-large-language-models-in-software-testing-and-debugging',
    category: BlogCategory.COGNITIVE_ASSURANCE,
    title: 'The Role of Large Language Models (LLMs) in Software Testing & Debugging',
    excerpt: "If there's one thing every software team agrees on, it's that testing and debugging take time — a lot of it. From reproducing issues to untangling error logs, QA engineers often spend more hours tracking problems than writing new tests. But that's starting to change.",
    author: 'Cogniron Team',
    date: 'November 3, 2025',
    readTime: '6–8 min read',
    tags: ['LLM', 'AI', 'Software Testing', 'Debugging', 'Cognitive Assurance'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGRlY2lzaW9uJTIwbWFraW5nfGVufDB8fHx8MTczNDU0MTIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'agentic-ai-for-test-optimization-enhancing-speed-and-accuracy-in-software-qa',
    category: BlogCategory.COGNITIVE_ASSURANCE,
    title: 'Agentic AI for Test Optimization: Enhancing Speed & Accuracy in Software QA',
    excerpt: 'In software testing, speed and accuracy have always pulled in opposite directions. Push too hard for speed, and quality slips. Focus only on accuracy, and delivery slows down. In 2025, a new approach is changing how teams manage this balance: Agentic AI.',
    author: 'Cogniron Team',
    date: 'October 06, 2025',
    readTime: '5–7 min read',
    tags: ['Agentic AI', 'Test Optimization', 'Cognitive Assurance', 'Quality Engineering', 'AI in QA'],
    featured: false,
    image: null,
  },
  {
    id: 'ensuring-explainability-and-transparency-in-aiml-systems-through-robust-testing',
    category: BlogCategory.COGNITIVE_ASSURANCE,
    title: 'Ensuring Explainability & Transparency in AI/ML Systems Through Robust Testing',
    excerpt: 'AI is everywhere now—powering decisions that affect finances, healthcare, hiring, and even the way cities run. But with that influence comes a pressing question: Can we explain how these systems actually work?',
    author: 'Cogniron Team',
    date: 'September 4, 2025',
    readTime: '4–6 min read',
    tags: ['AI/ML', 'Explainability', 'Transparency', 'Cognitive Assurance', 'Risk & Compliance'],
    featured: false,
    image: null,
  },
];

/**
 * Get Cognitive Assurance articles by tag
 * 
 * @param {string} tag - Tag to filter by
 * @returns {BlogArticleMetadata[]} Filtered articles
 */
export function getCognitiveAssuranceArticlesByTag(tag: string): BlogArticleMetadata[] {
  return cognitiveAssuranceArticles.filter(article => article.tags.includes(tag));
}

/**
 * Get featured Cognitive Assurance articles
 * 
 * @returns {BlogArticleMetadata[]} Featured articles only
 */
export function getFeaturedCognitiveAssuranceArticles(): BlogArticleMetadata[] {
  return cognitiveAssuranceArticles.filter(article => article.featured);
}

/**
 * Get Cognitive Assurance article by ID
 * 
 * @param {string} id - Article ID
 * @returns {BlogArticleMetadata | undefined} Article metadata or undefined if not found
 */
export function getCognitiveAssuranceArticleById(id: string): BlogArticleMetadata | undefined {
  return cognitiveAssuranceArticles.find(article => article.id === id);
}