import React from 'react';
import { PageContainer } from '../components/PageContainer';
import { useTheme } from '../contexts/ThemeContext';
import { CheckCircle2, Lightbulb, AlertTriangle, Target, Zap, Award, Building2, TrendingUp, MapPin } from 'lucide-react';
import { KeyHighlights, MetadataCard, CalloutBox, StepsSection } from '../components/ArticleContentSection';

/**
 * ARTICLE DETAIL STYLE GUIDE
 * 
 * This page showcases all available components and patterns
 * for building article detail pages with the reusable system.
 * 
 * Use this as a reference when creating new detail pages.
 */

export function ArticleStyleGuidePage() {
  const { theme } = useTheme();
  
  return (
    <PageContainer>
      {/* Header */}
      <section className="relative pt-32 pb-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h1 className="text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
            Article Detail Components Style Guide
          </h1>
          <p className="text-xl max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            A comprehensive showcase of all components available for building Case Study, Blog, and Success Story detail pages with full light/dark theme support.
          </p>
        </div>
      </section>

      {/* Color Categories */}
      <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-8" style={{ color: 'var(--text-primary)' }}>Color Categories</h2>
          <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
            Three color themes for different article types, each with light and dark mode variants.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blue - Case Studies */}
            <div className="backdrop-blur-sm rounded-2xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <h3 className="text-xl mb-4" style={{ color: 'var(--text-primary)' }}>Blue - Case Studies</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg" style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>
                  <div className="text-white mb-2">Primary Gradient</div>
                  <div className="text-white text-sm opacity-80">#3B82F6 → #06B6D4</div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 p-4 rounded-lg text-center" style={{ backgroundColor: theme === 'dark' ? '#06B6D4' : '#0284C7', color: '#FFFFFF' }}>
                    {theme === 'dark' ? 'Dark' : 'Light'}
                  </div>
                </div>
              </div>
            </div>

            {/* Purple - Blog */}
            <div className="backdrop-blur-sm rounded-2xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <h3 className="text-xl mb-4" style={{ color: 'var(--text-primary)' }}>Purple - Blog</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg" style={{ background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)' }}>
                  <div className="text-white mb-2">Primary Gradient</div>
                  <div className="text-white text-sm opacity-80">#8B5CF6 → #3B82F6</div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 p-4 rounded-lg text-center" style={{ backgroundColor: theme === 'dark' ? '#A78BFA' : '#7C3AED', color: '#FFFFFF' }}>
                    {theme === 'dark' ? 'Dark' : 'Light'}
                  </div>
                </div>
              </div>
            </div>

            {/* Green - Success Stories */}
            <div className="backdrop-blur-sm rounded-2xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <h3 className="text-xl mb-4" style={{ color: 'var(--text-primary)' }}>Green - Success Stories</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg" style={{ background: 'linear-gradient(135deg, #10B981, #34D399)' }}>
                  <div className="text-white mb-2">Primary Gradient</div>
                  <div className="text-white text-sm opacity-80">#10B981 → #34D399</div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 p-4 rounded-lg text-center" style={{ backgroundColor: theme === 'dark' ? '#34D399' : '#059669', color: '#FFFFFF' }}>
                    {theme === 'dark' ? 'Dark' : 'Light'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Badges */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-8" style={{ color: 'var(--text-primary)' }}>Category Badges</h2>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-full" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))' : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))', color: theme === 'dark' ? '#06B6D4' : '#0284C7', border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}` }}>
              Case Study
            </span>
            <span className="px-4 py-2 rounded-full" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))' : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))', color: theme === 'dark' ? '#A78BFA' : '#7C3AED', border: `1px solid ${theme === 'dark' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.2)'}` }}>
              Blog Article
            </span>
            <span className="px-4 py-2 rounded-full" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(52, 211, 153, 0.2))' : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.1))', color: theme === 'dark' ? '#34D399' : '#059669', border: `1px solid ${theme === 'dark' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.2)'}` }}>
              Success Story
            </span>
          </div>
        </div>
      </section>

      {/* Metric Cards */}
      <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-8" style={{ color: 'var(--text-primary)' }}>Metric Cards</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: '70%', label: 'Improvement', icon: Target, color: 'blue' },
              { metric: '99.9%', label: 'Success Rate', icon: CheckCircle2, color: 'blue' },
              { metric: '3x', label: 'Faster', icon: Zap, color: 'blue' },
              { metric: '$2M', label: 'Cost Savings', icon: Award, color: 'blue' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="backdrop-blur-sm rounded-2xl p-6 text-center" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                  <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl mb-3" style={{ background: 'linear-gradient(to right, #3B82F6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {item.metric}
                  </div>
                  <div className="text-lg" style={{ color: 'var(--text-primary)' }}>{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Highlights Component */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-8" style={{ color: 'var(--text-primary)' }}>Key Highlights Component</h2>
          <div className="max-w-2xl">
            <div className="backdrop-blur-sm rounded-2xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <KeyHighlights
                title="Key Takeaways"
                highlights={[
                  'AI-powered testing reduces maintenance overhead by 90%',
                  'Cognitive approaches enable 5x increase in test coverage',
                  'ML-driven analytics helps focus testing on high-risk areas',
                  'Implementation can start with focused pilots',
                ]}
                icon={<CheckCircle2 className="w-4 h-4" style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }} />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metadata Card Component */}
      <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-8" style={{ color: 'var(--text-primary)' }}>Metadata Card Component</h2>
          <div className="max-w-md">
            <div className="backdrop-blur-sm rounded-2xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <h3 className="text-xl mb-6" style={{ color: 'var(--text-primary)' }}>Case Overview</h3>
              <MetadataCard items={[
                { label: 'Client', value: 'Global Digital Banking Platform', icon: <Building2 className="w-4 h-4" /> },
                { label: 'Industry', value: 'Financial Services', icon: <TrendingUp className="w-4 h-4" /> },
                { label: 'Region', value: 'North America', icon: <MapPin className="w-4 h-4" /> },
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* Callout Boxes */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-8" style={{ color: 'var(--text-primary)' }}>Callout Boxes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <CalloutBox
              type="Info"
              variant="info"
              icon={<Lightbulb className="w-6 h-6 text-white" />}
              title="Information Callout"
              content="Use this variant for general information, tips, or insights that add value to the article content."
            />
            
            <CalloutBox
              type="Pro Tip"
              variant="tip"
              icon={<CheckCircle2 className="w-6 h-6 text-white" />}
              title="Success Tip"
              content="Use this variant for best practices, success tips, or actionable advice that readers should follow."
            />
            
            <CalloutBox
              type="Warning"
              variant="warning"
              icon={<AlertTriangle className="w-6 h-6 text-white" />}
              title="Important Note"
              content="Use this variant for warnings, caveats, or important considerations that readers should be aware of."
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-8" style={{ color: 'var(--text-primary)' }}>Steps Section Component</h2>
          <StepsSection
            title="Implementation Process"
            description="A step-by-step breakdown of the approach taken"
            steps={[
              {
                title: 'Discovery & Assessment',
                description: 'Analyze current state, identify pain points, and establish success metrics',
              },
              {
                title: 'Strategy & Design',
                description: 'Develop comprehensive solution architecture and implementation roadmap',
              },
              {
                title: 'Implementation & Testing',
                description: 'Deploy solution with rigorous testing and validation at each stage',
              },
              {
                title: 'Optimization & Training',
                description: 'Fine-tune performance and train teams for ongoing success',
              },
            ]}
          />
        </div>
      </section>

      {/* Testimonial Styles */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-8" style={{ color: 'var(--text-primary)' }}>Testimonial Styles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Blue testimonial */}
            <div className="backdrop-blur-sm rounded-2xl p-8" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-lg)' }}>
              <div className="text-5xl mb-6" style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }}>"</div>
              <blockquote className="text-lg mb-6 italic" style={{ color: 'var(--text-primary)' }}>
                The transformation has been remarkable. We went from quarterly releases to daily deployments with higher confidence.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>
                  <span className="text-white text-xl">JD</span>
                </div>
                <div>
                  <div style={{ color: 'var(--text-primary)' }}>John Doe</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>VP of Engineering</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Tech Company</div>
                </div>
              </div>
            </div>

            {/* Green testimonial */}
            <div className="backdrop-blur-sm rounded-2xl p-8" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-lg)' }}>
              <div className="text-5xl mb-6" style={{ color: theme === 'dark' ? '#34D399' : '#059669' }}>"</div>
              <blockquote className="text-lg mb-6 italic" style={{ color: 'var(--text-primary)' }}>
                Cogniron's platform was instrumental in our ability to scale without compromising on quality or compliance.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #10B981, #34D399)' }}>
                  <span className="text-white text-xl">AS</span>
                </div>
                <div>
                  <div style={{ color: 'var(--text-primary)' }}>Alice Smith</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Chief Product Officer</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>SaaS Platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Examples */}
      <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-8" style={{ color: 'var(--text-primary)' }}>Typography Examples</h2>
          
          <div className="backdrop-blur-sm rounded-2xl p-8" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <h1 className="text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>Heading 1 - Article Title</h1>
            <h2 className="text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>Heading 2 - Section Title</h2>
            <h3 className="text-xl mb-4" style={{ color: 'var(--text-primary)' }}>Heading 3 - Subsection Title</h3>
            
            <p className="text-lg mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Large paragraph text - used for introductions and important content. This size provides emphasis while maintaining readability.
            </p>
            
            <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Regular paragraph text - the standard body copy size for article content. This is used for main content sections and provides optimal reading comfort.
            </p>
            
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Small text - used for metadata, captions, and secondary information that doesn't require emphasis.
            </p>
          </div>
        </div>
      </section>

      {/* Usage Notes */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl mb-8" style={{ color: 'var(--text-primary)' }}>Usage Guidelines</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-sm rounded-2xl p-8" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <h3 className="text-xl mb-4" style={{ color: 'var(--text-primary)' }}>✅ Do</h3>
              <ul className="space-y-3" style={{ color: 'var(--text-secondary)' }}>
                <li>• Use consistent color themes per article type</li>
                <li>• Keep hero titles between 8-12 words</li>
                <li>• Limit tags to 3-5 most relevant categories</li>
                <li>• Include 3-4 key metrics maximum</li>
                <li>• Test both light and dark modes</li>
                <li>• Use semantic HTML for accessibility</li>
              </ul>
            </div>
            
            <div className="backdrop-blur-sm rounded-2xl p-8" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <h3 className="text-xl mb-4" style={{ color: 'var(--text-primary)' }}>❌ Don't</h3>
              <ul className="space-y-3" style={{ color: 'var(--text-secondary)' }}>
                <li>• Mix color themes within one article</li>
                <li>• Use hard-coded colors instead of CSS variables</li>
                <li>• Overload with too many metrics or testimonials</li>
                <li>• Forget to provide alt text for images</li>
                <li>• Use non-responsive layouts</li>
                <li>• Neglect mobile optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}