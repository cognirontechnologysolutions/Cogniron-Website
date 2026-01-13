import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { PageContainer } from './PageContainer';
import { useTheme } from '../contexts/ThemeContext';

interface ArticleHero {
  category: string;
  categoryColor: 'blue' | 'purple' | 'green';
  title: string;
  subtitle: string;
  author?: string;
  date: string;
  readTime?: string;
  tags: string[];
}

interface MetricCard {
  metric: string;
  label: string;
  description?: string;
  icon?: ReactNode;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

interface RelatedArticle {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  metadata?: string;
}

interface ArticleDetailLayoutProps {
  // Navigation
  backLink: string;
  backText: string;
  
  // Hero section
  hero: ArticleHero;
  
  // Optional sidebar content
  sidebar?: ReactNode;
  
  // Main content sections
  children: ReactNode;
  
  // Optional metrics section
  metrics?: MetricCard[];
  
  // Optional testimonials
  testimonials?: Testimonial[];
  
  // CTA section
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryText: string;
  ctaPrimaryLink: string;
  ctaSecondaryText: string;
  ctaSecondaryLink: string;
  
  // Related content
  relatedTitle: string;
  relatedArticles: RelatedArticle[];
  relatedBasePath: string;
}

export function ArticleDetailLayout({
  backLink,
  backText,
  hero,
  sidebar,
  children,
  metrics,
  testimonials,
  ctaTitle,
  ctaDescription,
  ctaPrimaryText,
  ctaPrimaryLink,
  ctaSecondaryText,
  ctaSecondaryLink,
  relatedTitle,
  relatedArticles,
  relatedBasePath,
}: ArticleDetailLayoutProps) {
  const { theme } = useTheme();
  
  // Color mapping for different article types
  const colorMap = {
    blue: {
      light: '#0284C7',
      dark: '#06B6D4',
      gradientLight: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
      gradientDark: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
      borderLight: 'rgba(59, 130, 246, 0.2)',
      borderDark: 'rgba(59, 130, 246, 0.3)',
      tagBgLight: 'rgba(59, 130, 246, 0.05)',
      tagBgDark: 'rgba(59, 130, 246, 0.1)',
      tagTextLight: '#0284C7',
      tagTextDark: '#60A5FA',
      glowLight: 'rgba(59, 130, 246, 0.2)',
      glowDark: 'rgba(59, 130, 246, 0.3)',
    },
    purple: {
      light: '#7C3AED',
      dark: '#A78BFA',
      gradientLight: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
      gradientDark: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))',
      borderLight: 'rgba(139, 92, 246, 0.2)',
      borderDark: 'rgba(139, 92, 246, 0.3)',
      tagBgLight: 'rgba(139, 92, 246, 0.05)',
      tagBgDark: 'rgba(139, 92, 246, 0.1)',
      tagTextLight: '#7C3AED',
      tagTextDark: '#A78BFA',
      glowLight: 'rgba(139, 92, 246, 0.2)',
      glowDark: 'rgba(139, 92, 246, 0.3)',
    },
    green: {
      light: '#059669',
      dark: '#34D399',
      gradientLight: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.1))',
      gradientDark: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(52, 211, 153, 0.2))',
      borderLight: 'rgba(16, 185, 129, 0.2)',
      borderDark: 'rgba(16, 185, 129, 0.3)',
      tagBgLight: 'rgba(16, 185, 129, 0.05)',
      tagBgDark: 'rgba(16, 185, 129, 0.1)',
      tagTextLight: '#059669',
      tagTextDark: '#34D399',
      glowLight: 'rgba(16, 185, 129, 0.2)',
      glowDark: 'rgba(16, 185, 129, 0.3)',
    },
  };
  
  const colors = colorMap[hero?.categoryColor || 'blue'];
  const accentColor = theme === 'dark' ? colors.dark : colors.light;
  const gradient = theme === 'dark' ? colors.gradientDark : colors.gradientLight;

  return (
    <PageContainer>
      {/* Breadcrumbs */}
      <section className="relative pt-32 pb-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <Link 
            to={backLink} 
            className="inline-flex items-center gap-2 transition-colors hover:underline"
            style={{ color: accentColor }}
          >
            <ArrowLeft className="w-4 h-4" />
            {backText}
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pb-16 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="absolute inset-0" style={{ opacity: theme === 'dark' ? 0.3 : 0.1 }}>
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: `${accentColor}50` }}></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: `${accentColor}30` }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`grid gap-12 ${sidebar ? 'lg:grid-cols-3' : 'lg:grid-cols-1 max-w-4xl mx-auto'}`}>
            <div className={sidebar ? 'lg:col-span-2' : ''}>
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: colors.gradientLight, border: `1px solid ${colors.borderLight}` }}>
                <Tag className="w-4 h-4" style={{ color: accentColor }} />
                <span style={{ color: accentColor }} className="text-sm">{hero.category}</span>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl lg:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                {hero.title}
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
                {hero.subtitle}
              </p>
              
              {/* Meta Information */}
              <div className="flex flex-wrap gap-6 mb-8">
                {hero.author && (
                  <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                    <User className="w-5 h-5" />
                    <span>{hero.author}</span>
                  </div>
                )}
                <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                  <Calendar className="w-5 h-5" />
                  <span>{hero.date}</span>
                </div>
                {hero.readTime && (
                  <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                    <Clock className="w-5 h-5" />
                    <span>{hero.readTime}</span>
                  </div>
                )}
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {hero.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ backgroundColor: colors.tagBgLight, color: colors.tagTextLight, border: `1px solid ${colors.borderLight}` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            {sidebar && (
              <div className="lg:col-span-1">
                <div className="backdrop-blur-sm rounded-2xl p-6 sticky top-24" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
                  {sidebar}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {children}
      </div>

      {/* Metrics Section */}
      {metrics && metrics.length > 0 && (
        <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl mb-12 text-center" style={{ color: 'var(--text-primary)' }}>Results & Impact</h2>
            
            <div className={`grid gap-6 ${metrics.length === 3 ? 'md:grid-cols-3' : metrics.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
              {metrics.map((metric, index) => (
                <div key={index} className="backdrop-blur-sm rounded-2xl p-6 text-center" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                  {metric.icon && (
                    <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${colors.light}, ${colors.dark})` }}>
                      {metric.icon}
                    </div>
                  )}
                  <div className="text-4xl mb-3" style={{ background: `linear-gradient(to right, ${colors.light}, ${colors.dark})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {metric.metric}
                  </div>
                  <div className="text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{metric.label}</div>
                  {metric.description && (
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{metric.description}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl mb-12 text-center" style={{ color: 'var(--text-primary)' }}>What They're Saying</h2>
            
            <div className={`grid gap-8 ${testimonials.length === 1 ? 'max-w-4xl mx-auto' : 'md:grid-cols-2'}`}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="backdrop-blur-sm rounded-2xl p-8 lg:p-12" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-lg)' }}>
                  <div className="text-5xl mb-6" style={{ color: accentColor }}>"</div>
                  <blockquote className={`mb-8 italic ${testimonials.length === 1 ? 'text-xl lg:text-2xl' : 'text-lg'}`} style={{ color: 'var(--text-primary)' }}>
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(135deg, ${colors.light}, ${colors.dark})` }}>
                      <span className="text-white text-xl">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-primary)' }}>{testimonial.author}</div>
                      <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{testimonial.role}</div>
                      {testimonial.company && (
                        <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{testimonial.company}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-16" style={{ background: theme === 'dark' ? 'linear-gradient(180deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)' : 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl blur-2xl" style={{ background: colors.gradientLight }}></div>
            <div className="relative backdrop-blur-sm rounded-3xl p-12" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
              <h2 className="text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>{ctaTitle}</h2>
              <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>{ctaDescription}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  to={ctaPrimaryLink} 
                  className="px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${colors.light} 0%, ${colors.dark} 100%)`, color: '#FFFFFF', boxShadow: `0 ${theme === 'dark' ? '0 30px' : '4px 20px'} ${colors.glowLight}` }}
                >
                  {ctaPrimaryText}
                </Link>
                <Link 
                  to={ctaSecondaryLink} 
                  className="px-8 py-4 rounded-lg transition-all duration-300"
                  style={{ backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                >
                  {ctaSecondaryText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      {relatedArticles.length > 0 && (
        <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl mb-12" style={{ color: 'var(--text-primary)' }}>{relatedTitle}</h2>
            
            <div className={`grid gap-8 ${relatedArticles.length === 1 ? 'max-w-2xl' : 'md:grid-cols-2'} ${relatedArticles.length > 2 ? 'lg:grid-cols-3' : ''}`}>
              {relatedArticles.map((article) => (
                <Link 
                  key={article.id}
                  to={`${relatedBasePath}/${article.id}`}
                  className="group backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}
                >
                  <div className="p-6">
                    {article.category && (
                      <span 
                        className="inline-block px-3 py-1 rounded-full text-sm mb-4"
                        style={{ background: colors.gradientLight, color: accentColor, border: `1px solid ${colors.borderLight}` }}
                      >
                        {article.category}
                      </span>
                    )}
                    <h3 className="text-xl mb-3 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {article.title}
                    </h3>
                    {article.subtitle && (
                      <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{article.subtitle}</p>
                    )}
                    {article.metadata && (
                      <div className="pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                        <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{article.metadata}</div>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageContainer>
  );
}