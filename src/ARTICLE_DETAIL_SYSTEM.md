# Article Detail Page System - Complete Guide

## Overview

This reusable article detail page system provides a consistent, theme-aware layout for **Case Studies**, **Blog Articles**, and **Success Stories**. The system automatically handles light/dark theme switching, responsive design, and maintains the Cogniron brand aesthetic.

## Core Components

### 1. ArticleDetailLayout (Main Layout Component)
**Location:** `/components/ArticleDetailLayout.tsx`

The primary layout component that handles the entire page structure including:
- Breadcrumb navigation
- Hero section with category badge, title, metadata
- Optional sidebar
- Main content area
- Metrics section (optional)
- Testimonials section (optional)
- CTA section
- Related content section
- Full light/dark theme support

### 2. ArticleContentSection (Content Helper Components)
**Location:** `/components/ArticleContentSection.tsx`

Helper components for article content:
- **ArticleContentSection** - Container for content blocks with alternating backgrounds
- **KeyHighlights** - Bulleted list of key points with icons
- **MetadataCard** - Structured metadata display with icons
- **CalloutBox** - Highlighted callout boxes (info/tip/warning variants)
- **StepsSection** - Numbered step-by-step process display

## Theme System

### Color Categories

The layout supports three color themes for different article types:

| Article Type | Category Color | Primary (Light) | Primary (Dark) |
|-------------|----------------|-----------------|----------------|
| Case Study  | `blue`         | #0284C7         | #06B6D4        |
| Blog        | `purple`       | #7C3AED         | #A78BFA        |
| Success Story | `green`      | #059669         | #34D399        |

### Theme Tokens

All components use CSS variables that automatically switch based on theme:
- `--bg-primary` - Main page background
- `--bg-secondary` - Secondary background
- `--bg-card` - Card/surface background
- `--text-primary` - Main text color
- `--text-secondary` - Secondary text color
- `--border-color` - Border colors
- `--accent-primary` - Accent color
- `--shadow-md` - Shadow effects

## Usage Examples

### Case Study Detail Page

```tsx
import { ArticleDetailLayout } from '../components/ArticleDetailLayout';
import { ArticleContentSection, StepsSection, MetadataCard } from '../components/ArticleContentSection';
import { Building2, TrendingUp, MapPin, Clock } from 'lucide-react';

export function CaseStudyDetail() {
  return (
    <ArticleDetailLayout
      // Navigation
      backLink="/case-studies"
      backText="Back to All Case Studies"
      
      // Hero Section
      hero={{
        category: 'Case Study',
        categoryColor: 'blue',
        title: 'Your Case Study Title',
        subtitle: 'Brief description of the case study',
        author: 'Cogniron Solutions Team',
        date: 'November 2025',
        readTime: '8 min read',
        tags: ['Tag1', 'Tag2', 'Tag3'],
      }}
      
      // Sidebar (Optional)
      sidebar={
        <>
          <h3 style={{ color: 'var(--text-primary)' }}>Case Overview</h3>
          <MetadataCard items={[
            { label: 'Client', value: 'Client Name', icon: <Building2 className="w-4 h-4" /> },
            { label: 'Industry', value: 'Industry Name', icon: <TrendingUp className="w-4 h-4" /> },
            { label: 'Region', value: 'Region Name', icon: <MapPin className="w-4 h-4" /> },
          ]} />
        </>
      }
      
      // Metrics
      metrics={[
        { metric: '70%', label: 'Improvement', description: 'Description of metric' },
        { metric: '99%', label: 'Success Rate', description: 'Description of metric' },
      ]}
      
      // Testimonials
      testimonials={[
        {
          quote: "Testimonial quote here",
          author: 'Person Name',
          role: 'Title',
          company: 'Company Name',
        },
      ]}
      
      // CTA Section
      ctaTitle="Ready for Similar Results?"
      ctaDescription="Description text"
      ctaPrimaryText="Schedule Consultation"
      ctaPrimaryLink="/contact"
      ctaSecondaryText="View More Case Studies"
      ctaSecondaryLink="/case-studies"
      
      // Related Content
      relatedTitle="Related Case Studies"
      relatedBasePath="/case-studies"
      relatedArticles={[
        {
          id: 'article-id',
          title: 'Article Title',
          subtitle: 'Brief description',
          category: 'Category',
          metadata: '8 min read',
        },
      ]}
    >
      {/* Main Content */}
      <ArticleContentSection title="The Challenge" variant="alternate">
        <p style={{ color: 'var(--text-secondary)' }}>
          Your content here...
        </p>
      </ArticleContentSection>
      
      <ArticleContentSection title="Our Approach">
        <StepsSection
          title=""
          steps={[
            { title: 'Step 1', description: 'Description' },
            { title: 'Step 2', description: 'Description' },
          ]}
        />
      </ArticleContentSection>
    </ArticleDetailLayout>
  );
}
```

### Blog Article Detail Page

```tsx
import { ArticleDetailLayout } from '../components/ArticleDetailLayout';
import { ArticleContentSection, KeyHighlights, CalloutBox } from '../components/ArticleContentSection';
import { Lightbulb, CheckCircle2 } from 'lucide-react';

export function BlogDetail() {
  return (
    <ArticleDetailLayout
      backLink="/blog"
      backText="Back to Blog"
      
      hero={{
        category: 'AI & Innovation',
        categoryColor: 'purple',
        title: 'Your Blog Title',
        subtitle: 'Brief article description',
        author: 'Author Name, Title',
        date: 'December 1, 2025',
        readTime: '12 min read',
        tags: ['AI', 'Testing', 'Innovation'],
      }}
      
      sidebar={
        <KeyHighlights
          title="Key Takeaways"
          highlights={[
            'Key point 1',
            'Key point 2',
            'Key point 3',
          ]}
          icon={<CheckCircle2 className="w-4 h-4" style={{ color: '#A78BFA' }} />}
        />
      }
      
      ctaTitle="Want to Learn More?"
      ctaDescription="Subscribe to insights or talk to an expert"
      ctaPrimaryText="Subscribe"
      ctaPrimaryLink="/insights"
      ctaSecondaryText="Contact Us"
      ctaSecondaryLink="/contact"
      
      relatedTitle="Related Articles"
      relatedBasePath="/blog"
      relatedArticles={[
        { id: 'article-id', title: 'Title', category: 'Category' },
      ]}
    >
      <ArticleContentSection>
        <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
          Introduction paragraph...
        </p>
      </ArticleContentSection>
      
      <ArticleContentSection title="Section Title" variant="alternate">
        <p style={{ color: 'var(--text-secondary)' }}>
          Content...
        </p>
      </ArticleContentSection>
      
      <ArticleContentSection>
        <CalloutBox
          type="Pro Tip"
          variant="tip"
          icon={<Lightbulb className="w-6 h-6 text-white" />}
          content="Your tip content here"
        />
      </ArticleContentSection>
    </ArticleDetailLayout>
  );
}
```

### Success Story Detail Page

```tsx
import { ArticleDetailLayout } from '../components/ArticleDetailLayout';
import { ArticleContentSection, MetadataCard } from '../components/ArticleContentSection';
import { Building2, TrendingUp, Zap, Target } from 'lucide-react';

export function SuccessStoryDetail() {
  return (
    <ArticleDetailLayout
      backLink="/case-studies"
      backText="Back to Success Stories"
      
      hero={{
        category: 'Success Story',
        categoryColor: 'green',
        title: 'Your Success Story Title',
        subtitle: 'Brief description',
        date: 'November 2025',
        tags: ['Industry', 'Service', 'Result'],
      }}
      
      sidebar={
        <>
          <h3 style={{ color: 'var(--text-primary)' }}>Customer Profile</h3>
          <MetadataCard items={[
            { label: 'Company', value: 'Company Name', icon: <Building2 /> },
            { label: 'Industry', value: 'Industry', icon: <TrendingUp /> },
          ]} />
        </>
      }
      
      metrics={[
        { metric: '60%', label: 'Faster', icon: <Zap className="w-6 h-6 text-white" /> },
        { metric: '99%', label: 'Quality', icon: <Target className="w-6 h-6 text-white" /> },
      ]}
      
      testimonials={[
        {
          quote: "Quote here",
          author: 'Name',
          role: 'Title',
          company: 'Company',
        },
      ]}
      
      ctaTitle="Start Your Success Story"
      ctaDescription="Description"
      ctaPrimaryText="Schedule Consultation"
      ctaPrimaryLink="/contact"
      ctaSecondaryText="More Stories"
      ctaSecondaryLink="/case-studies"
      
      relatedTitle="More Success Stories"
      relatedBasePath="/success-stories"
      relatedArticles={[
        { id: 'story-id', title: 'Title', category: 'Category' },
      ]}
    >
      <ArticleContentSection title="The Challenge" variant="alternate">
        <p style={{ color: 'var(--text-secondary)' }}>Content...</p>
      </ArticleContentSection>
      
      <ArticleContentSection title="The Journey">
        {/* Journey timeline content */}
      </ArticleContentSection>
    </ArticleDetailLayout>
  );
}
```

## Props Reference

### ArticleDetailLayout Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `backLink` | string | Yes | URL for back navigation |
| `backText` | string | Yes | Text for back button |
| `hero` | ArticleHero | Yes | Hero section data |
| `sidebar` | ReactNode | No | Optional sidebar content |
| `children` | ReactNode | Yes | Main article content |
| `metrics` | MetricCard[] | No | Array of metric cards |
| `testimonials` | Testimonial[] | No | Array of testimonials |
| `ctaTitle` | string | Yes | CTA section title |
| `ctaDescription` | string | Yes | CTA description |
| `ctaPrimaryText` | string | Yes | Primary CTA button text |
| `ctaPrimaryLink` | string | Yes | Primary CTA link |
| `ctaSecondaryText` | string | Yes | Secondary CTA button text |
| `ctaSecondaryLink` | string | Yes | Secondary CTA link |
| `relatedTitle` | string | Yes | Related content section title |
| `relatedArticles` | RelatedArticle[] | Yes | Array of related articles |
| `relatedBasePath` | string | Yes | Base path for related links |

### ArticleHero Interface

```typescript
{
  category: string;           // "Case Study" | "Blog" | "Success Story"
  categoryColor: 'blue' | 'purple' | 'green';
  title: string;
  subtitle: string;
  author?: string;            // Optional
  date: string;
  readTime?: string;          // Optional
  tags: string[];
}
```

### MetricCard Interface

```typescript
{
  metric: string;             // "70%" | "99.9%" | "3x"
  label: string;              // "Improvement" | "Success Rate"
  description?: string;       // Optional description
  icon?: ReactNode;          // Optional icon
}
```

### Testimonial Interface

```typescript
{
  quote: string;
  author: string;
  role: string;
  company?: string;           // Optional
}
```

## Responsive Behavior

### Desktop (1024px+)
- Two-column layout (content + sidebar)
- Metrics in 3-4 column grid
- Full-width hero with side-by-side content

### Tablet (768px - 1023px)
- Single column layout (sidebar below content)
- Metrics in 2 column grid
- Maintained spacing and hierarchy

### Mobile (< 768px)
- Fully stacked layout
- Metrics in single column or 2 columns for smaller metrics
- Touch-friendly spacing
- Optimized typography scaling

## Best Practices

### Content Structure
1. **Keep hero sections concise** - Title should be 8-12 words, subtitle 1-2 lines
2. **Use 3-5 tags maximum** - Focus on most relevant categories
3. **Limit metrics to 3-4** - Highlight most impactful results
4. **Include 1-2 testimonials** - More than 2 can dilute impact
5. **Provide 2-3 related articles** - Keep recommendations focused

### Theme Consistency
1. Always use CSS variables for colors (`var(--text-primary)`)
2. Test both light and dark modes before publishing
3. Ensure images/graphics work in both themes
4. Use theme-aware gradients from the color map

### Performance
1. Keep images optimized (<200KB)
2. Lazy load related content
3. Use semantic HTML for better accessibility
4. Maintain WCAG AA contrast ratios in both themes

## File Structure

```
/components/
  ArticleDetailLayout.tsx       # Main layout component
  ArticleContentSection.tsx     # Content helper components
  
/pages/
  CaseStudyDetailPage.tsx       # Case study implementation
  BlogDetailPage.tsx            # Blog implementation  
  SuccessStoryDetailPage.tsx    # Success story implementation
  ExampleArticleDetailPage.tsx  # Usage examples
```

## Customization

### Adding New Content Sections

Create custom sections using the ArticleContentSection wrapper:

```tsx
<ArticleContentSection title="Custom Section" variant="alternate">
  {/* Your custom content */}
</ArticleContentSection>
```

### Custom Callout Boxes

```tsx
<CalloutBox
  type="Custom Type"
  variant="info"  // or "tip" | "warning"
  icon={<YourIcon className="w-6 h-6 text-white" />}
  title="Optional Title"
  content="Your content"
/>
```

### Custom Metrics Display

```tsx
metrics={[
  {
    metric: 'Your Value',
    label: 'Metric Name',
    description: 'Details',
    icon: <YourIcon className="w-6 h-6 text-white" />
  }
]}
```

## Migration Guide

To convert existing detail pages to use this system:

1. **Import the layout component:**
   ```tsx
   import { ArticleDetailLayout } from '../components/ArticleDetailLayout';
   ```

2. **Extract hero data into the hero prop**
3. **Move sidebar content into sidebar prop**
4. **Wrap main content in ArticleContentSection components**
5. **Convert metrics to metrics prop format**
6. **Convert testimonials to testimonials prop format**
7. **Update CTA and related content props**

## Support & Questions

For questions or issues with the article detail system:
- Check `/pages/ExampleArticleDetailPage.tsx` for comprehensive examples
- Review existing implementations in CaseStudyDetailPage, BlogDetailPage, SuccessStoryDetailPage
- Ensure theme context is properly configured in your app

---

**Last Updated:** December 2025  
**Version:** 1.0.0
