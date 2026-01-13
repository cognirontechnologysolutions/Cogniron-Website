/**
 * @fileoverview UX-Assurance Blog Articles Index
 * @module pages/blog/ux-assurance
 * 
 * Central export point for all UX-Assurance blog articles.
 * Covers topics including compatibility testing, accessibility, user experience quality,
 * and cross-device validation strategies.
 * 
 * @author Cogniron Development Team
 * @version 1.0.0
 */

import { BlogArticleMetadata, BlogCategory } from '../types';

// Import all UX-Assurance article components and their metadata
export { EnsuringCompatibilityInTheEraOfMultiDeviceDigitalExperiences, metadata as ensuringCompatibilityMetadata } from './ensuring-compatibility-in-the-era-of-multi-device-digital-experiences';
export { IoTQualityAssuranceBuildingTrustThroughSeamlessUserExperiences, metadata as iotQualityAssuranceMetadata } from './iot-quality-assurance-building-trust-through-seamless-user-experiences';
export { BeyondComplianceHowAccessibilityTestingBecameATrueBusinessAdvantage, metadata as beyondComplianceMetadata } from './beyond-compliance-how-accessibility-testing-became-a-true-business-advantage';
export { EnsuringSeamlessUserExperienceWithAiPoweredUxUiTesting, metadata as ensuringSeamlessUserExperienceMetadata } from './ensuring-seamless-user-experience-with-ai-powered-ux-ui-testing';

/**
 * Registry of all UX-Assurance blog articles
 * 
 * @constant {BlogArticleMetadata[]}
 */
export const uxAssuranceArticles: BlogArticleMetadata[] = [
  {
    id: 'iot-quality-assurance-building-trust-through-seamless-user-experiences',
    category: BlogCategory.UX_ASSURANCE,
    title: 'IoT Quality Assurance: Building Trust Through Seamless User Experiences',
    excerpt: 'The Internet of Things has moved far beyond connected gadgets. It now defines how industries operate — from predictive manufacturing and logistics tracking to connected healthcare and automotive intelligence.',
    author: 'Cogniron Team',
    date: 'October 27, 2025',
    readTime: '6–8 min read',
    tags: ['IoT', 'UX-Assurance', 'Quality Engineering', 'Device Ecosystems'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1718866033984-c3ddab9af2a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBjb25uZWN0ZWQlMjBkZXZpY2VzfGVufDF8fHx8MTc2NTk2NzkxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'beyond-compliance-how-accessibility-testing-became-a-true-business-advantage',
    category: BlogCategory.UX_ASSURANCE,
    title: 'Beyond Compliance: How Accessibility Testing Became a True Business Advantage',
    excerpt: 'For a long time, accessibility testing sat quietly in the background of digital development — something teams did to tick off compliance boxes and move on. But somewhere along the way, things started to change.',
    author: 'Cogniron Team',
    date: 'October 23, 2025',
    readTime: '6–8 min read',
    tags: ['Accessibility', 'UX-Assurance', 'Inclusive Design', 'Quality Engineering'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1611926653670-e18689373857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwaW5jbHVzaXZlJTIwZGVzaWdufGVufDF8fHx8MTc2NTk1MzA1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'ensuring-compatibility-in-the-era-of-multi-device-digital-experiences',
    category: BlogCategory.UX_ASSURANCE,
    title: 'Ensuring Compatibility in the Era of Multi-Device Digital Experiences',
    excerpt: 'A decade ago, digital testing was straightforward. You had a few browsers, limited device variations, and a relatively predictable user journey. Today, that landscape has transformed completely.',
    author: 'Cogniron Team',
    date: 'November 21, 2025',
    readTime: '9 min read',
    tags: ['UX-Assurance', 'Compatibility', 'Multi-Device', 'Quality Engineering'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1763161786687-43d0c9babdf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aSUyMGRldmljZSUyMGNvbXBhdGliaWxpdHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTg5MTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'ensuring-seamless-user-experience-with-ai-powered-ux-ui-testing',
    category: BlogCategory.UX_ASSURANCE,
    title: 'Ensuring Seamless User Experience with AI-Powered UX/UI Testing',
    excerpt: 'In 2025, a user\'s first tap, swipe, or voice command isn\'t just an interaction—it\'s the product. The design, flow, and responsiveness are as critical as the features themselves. Yet, delivering perfection at scale is harder than ever.',
    author: 'Cogniron Team',
    date: 'August 21, 2025',
    readTime: '4–6 min read',
    tags: ['UX-Assurance', 'UX/UI Testing', 'AI', 'Digital Experience', 'Quality Engineering'],
    featured: false,
    image: null,
  },
];

/**
 * Get UX-Assurance articles by tag
 */
export function getUxAssuranceArticlesByTag(tag: string): BlogArticleMetadata[] {
  return uxAssuranceArticles.filter(article => article.tags.includes(tag));
}

/**
 * Get featured UX-Assurance articles
 */
export function getFeaturedUxAssuranceArticles(): BlogArticleMetadata[] {
  return uxAssuranceArticles.filter(article => article.featured);
}

/**
 * Get UX-Assurance article by ID
 */
export function getUxAssuranceArticleById(id: string): BlogArticleMetadata | undefined {
  return uxAssuranceArticles.find(article => article.id === id);
}