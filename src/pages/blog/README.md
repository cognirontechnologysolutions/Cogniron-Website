# Blog System Architecture

## Overview

This directory contains the complete blog system for the Cogniron website, organized using industry-standard patterns for scalability, maintainability, and type safety.

## Directory Structure

```
/pages/blog/
├── README.md                    # This file - documentation
├── types.ts                     # TypeScript type definitions
├── constants.ts                 # Constants and configuration
├── blogRegistry.ts              # Central article registry and utilities
│
├── pqlm/                        # PQLM service articles
│   ├── index.ts                 # Category index/exports
│   └── [article-name].tsx       # Individual articles
│
├── ux-assurance/                # UX Assurance articles
│   └── index.ts
│
├── x-first/                     # X-First articles
│   └── index.ts
│
├── cognitive-assurance/         # Cognitive Assurance articles
│   └── index.ts
│
├── ai-ml/                       # AI/ML articles
│   ├── index.ts
│   └── ai-driven-test-automation.tsx
│
├── automation/                  # Test Automation articles
│   └── index.ts
│
├── best-practices/              # Best Practices articles
│   └── index.ts
│
├── case-studies/                # Case Studies
│   └── index.ts
│
├── security/                    # Security Testing articles
│   └── index.ts
│
├── performance/                 # Performance Engineering articles
│   └── index.ts
│
└── devops/                      # DevOps & CI/CD articles
    └── index.ts
```

## Architecture Principles

### 1. **Category-Based Organization**
Articles are organized into folders by service category, matching the Cogniron service structure:
- **PQLM**: Product Quality Lifecycle Management
- **UX Assurance**: User experience and accessibility testing
- **X-First**: Shift-left and quality-first practices
- **Cognitive Assurance**: AI-driven testing
- **AI/ML**: Artificial intelligence and machine learning
- **Automation**: Test automation frameworks and tools
- **Best Practices**: Industry standards and methodologies
- **Case Studies**: Real-world implementations
- **Security**: Security testing and DevSecOps
- **Performance**: Performance engineering
- **DevOps**: DevOps and CI/CD integration

### 2. **Type Safety**
All blog data structures are strongly typed using TypeScript interfaces defined in `types.ts`:
- `BlogArticleMetadata`: Core article metadata
- `BlogArticle`: Complete article with content
- `BlogAuthor`: Author information
- `BlogCategory`: Service category enumeration
- `BlogTag`: Tag/topic structure
- And more...

### 3. **Registry Pattern**
The `blogRegistry.ts` module serves as a single source of truth:
- Aggregates articles from all categories
- Provides utility functions for querying and filtering
- Enables centralized article management
- Supports search, tagging, and relationships

### 4. **Separation of Concerns**
- **Content**: Article components (`.tsx` files)
- **Metadata**: Exported `metadata` objects
- **Organization**: Category index files (`index.ts`)
- **Utilities**: Central registry with helper functions
- **Configuration**: Constants and settings

## Adding a New Article

### Step 1: Create the Article Component

Create a new `.tsx` file in the appropriate category folder:

```typescript
// /pages/blog/pqlm/my-new-article.tsx

/**
 * @fileoverview Blog Article: Article Title
 * @module pages/blog/pqlm/my-new-article
 * 
 * Brief description of the article content.
 * 
 * @category PQLM
 * @tags tag1, tag2, tag3
 * @author Author Name
 * @publishDate YYYY-MM-DD
 */

import React from 'react';
import { ArticleDetailLayout } from '../../../components/ArticleDetailLayout';
import { ArticleContentSection } from '../../../components/ArticleContentSection';
import { BlogCategory } from '../types';

// Export metadata for registry
export const metadata = {
  id: 'my-new-article',
  category: BlogCategory.PQLM,
  title: 'My New Article Title',
  excerpt: 'Short description (120-160 chars)',
  author: 'Author Name',
  date: 'December 10, 2024',
  readTime: '10 min read',
  tags: ['tag1', 'tag2', 'tag3'],
  featured: false,
  image: null, // or URL to feature image
};

export function MyNewArticle(): JSX.Element {
  return (
    <ArticleDetailLayout
      backLink="/blog"
      backText="Back to Blog"
      hero={{
        category: 'PQLM',
        categoryColor: 'blue',
        title: metadata.title,
        subtitle: 'Article subtitle',
        author: metadata.author,
        date: metadata.date,
        readTime: metadata.readTime,
        tags: metadata.tags,
      }}
      // ... CTA and related articles config
    >
      <ArticleContentSection>
        {/* Your content here */}
      </ArticleContentSection>
    </ArticleDetailLayout>
  );
}

export default MyNewArticle;
```

### Step 2: Add to Category Index

Update the category's `index.ts` file:

```typescript
// /pages/blog/pqlm/index.ts

export { MyNewArticle, metadata as myNewArticleMetadata } from './my-new-article';

export const pqlmArticles: BlogArticleMetadata[] = [
  {
    id: 'my-new-article',
    category: BlogCategory.PQLM,
    title: 'My New Article Title',
    excerpt: 'Short description',
    author: 'Author Name',
    date: 'December 10, 2024',
    readTime: '10 min read',
    tags: ['tag1', 'tag2', 'tag3'],
    featured: false,
    image: null,
  },
  // ... other articles
];
```

### Step 3: Add Route (if creating dedicated component)

If creating a standalone article component, add a route in `/App.tsx`:

```typescript
const MyNewArticle = lazy(() => import("./pages/blog/pqlm/my-new-article").then(m => ({ default: m.MyNewArticle })));

// In Routes:
<Route path="/blog/pqlm/my-new-article" element={<MyNewArticle />} />
```

## Naming Conventions

### File Names
- Use kebab-case: `test-data-management.tsx`
- Be descriptive: `ai-driven-test-automation.tsx`
- Avoid abbreviations: `functional-testing-best-practices.tsx`

### Component Names
- Use PascalCase: `FunctionalTestingBestPractices`
- Match the article subject
- Export as both named and default export

### Article IDs
- Use kebab-case matching file name
- Must be unique across all categories
- Should be URL-friendly

### Tags
- Use lowercase, hyphenated
- Be consistent: `test-automation` not `testing-automation`
- Reuse existing tags when possible

## Best Practices

### Content Guidelines
1. **Comprehensive**: Provide depth, not just surface-level overview
2. **Structured**: Use clear headings, sections, and visual hierarchy
3. **Visual**: Include callouts, code blocks, images, and diagrams
4. **Actionable**: Provide practical guidance and examples
5. **SEO-Friendly**: Include relevant keywords naturally

### Technical Guidelines
1. **Type Safety**: Always define and export metadata
2. **Accessibility**: Use semantic HTML and proper ARIA labels
3. **Performance**: Lazy load images and heavy components
4. **Responsive**: Test on mobile, tablet, and desktop
5. **Consistency**: Use existing components and patterns

### Metadata Guidelines
1. **Title**: 50-60 characters, descriptive and keyword-rich
2. **Excerpt**: 120-160 characters, compelling summary
3. **Tags**: 3-5 relevant tags per article
4. **Read Time**: Calculate based on word count (~200 words/min)
5. **Date**: Use consistent format: "Month DD, YYYY"

## Utility Functions

The `blogRegistry.ts` module provides these utility functions:

```typescript
// Get all articles
const articles = getAllArticles();

// Get by category
const pqlmArticles = getArticlesByCategory(BlogCategory.PQLM);

// Search
const results = searchArticles('automation');

// Filter by tag
const automationArticles = getArticlesByTag('automation');

// Get featured
const featured = getFeaturedArticles(3);

// Get related
const related = getRelatedArticles('article-id', 3);

// Get by author
const authorArticles = getArticlesByAuthor('Dr. Sarah Chen');

// Tag statistics
const tags = getTagStatistics();
```

## Adding a New Category

1. Create category folder: `/pages/blog/new-category/`
2. Create `index.ts` with exports and article array
3. Update `BlogCategory` enum in `types.ts`
4. Update `CategoryDisplayNames` in `types.ts`
5. Update `CATEGORY_METADATA` in `constants.ts`
6. Import and add to `blogRegistry` in `blogRegistry.ts`

## SEO and Metadata

Each article should include SEO metadata:

```typescript
export const metadata = {
  // ... basic fields
  seo: {
    metaTitle: 'SEO optimized title (50-60 chars)',
    metaDescription: 'SEO description (120-160 chars)',
    keywords: ['keyword1', 'keyword2', 'keyword3'],
    canonicalUrl: '/blog/category/article-slug',
  },
};
```

## Testing

Before publishing an article:
- [ ] Verify article renders correctly in both light/dark themes
- [ ] Test responsive layout on mobile and tablet
- [ ] Validate all links work correctly
- [ ] Check that metadata is accurate
- [ ] Ensure images load with proper fallbacks
- [ ] Verify article appears in blog listing
- [ ] Test search functionality finds the article
- [ ] Validate tag filtering includes the article

## Future Enhancements

Potential improvements to the blog system:
- [ ] RSS feed generation
- [ ] Article series/collections
- [ ] Author profile pages
- [ ] Comment system integration
- [ ] Social sharing analytics
- [ ] Reading progress indicator
- [ ] Table of contents generation
- [ ] Print-friendly views
- [ ] Bookmark/save functionality
- [ ] Email newsletter integration

## Support

For questions or issues with the blog system:
- Review this documentation
- Check existing articles for examples
- Consult `types.ts` for data structures
- Refer to `constants.ts` for configuration options
