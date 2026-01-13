import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Tag, User, Clock, Calendar, ArrowRight } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { PageContainer } from '../components/PageContainer';
import { SectionTag } from '../components/SectionTag';
import { SearchInput } from '../components/SearchInput';
import { Pagination } from '../components/Pagination';
import { useTheme } from '../contexts/ThemeContext';
import { useGradientShimmer } from '../hooks/useGradientShimmer';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { getAllArticles, getFeaturedArticles, searchArticles, getTagStatistics } from './blog/blogRegistry';
import { BlogArticleMetadata, BlogCategory } from './blog/types';

/**
 * BlogPage Component
 * 
 * Main blog listing page that displays all published articles with filtering,
 * search, and categorization capabilities. Integrates with the centralized
 * blog registry system for content management.
 * 
 * Features:
 * - Dynamic article loading from registry
 * - Real-time search functionality
 * - Tag-based filtering
 * - Featured articles section
 * - Responsive grid layout
 * - Newsletter subscription CTA
 * 
 * @returns {JSX.Element} Rendered blog page
 */
export function BlogPage(): JSX.Element {
  const { theme } = useTheme();
  useGradientShimmer();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9; // Exactly 9 posts per page
  const latestArticlesRef = useRef<HTMLElement>(null); // Reference for scrolling

  // Service filter options
  const serviceFilters = [
    { id: 'all', name: 'All Posts' },
    { id: BlogCategory.PQLM, name: 'PQLM' },
    { id: BlogCategory.UX_ASSURANCE, name: 'UX-Assurance' },
    { id: BlogCategory.X_FIRST, name: 'X-First' },
    { id: BlogCategory.COGNITIVE_ASSURANCE, name: 'Cognitive Assurance' },
    { id: BlogCategory.CRM, name: 'CRM' },
    { id: BlogCategory.GRETAH_AI, name: 'Gretah AI' },
  ];

  // Get all articles and featured articles from registry
  const allArticles = useMemo(() => getAllArticles(), []);

  // Filter articles based on search and service selection
  const filteredPosts = useMemo(() => {
    let articles = allArticles;

    // Apply search filter
    if (searchQuery.trim()) {
      articles = searchArticles(searchQuery);
    }

    // Apply service filter
    if (selectedService !== 'all') {
      articles = articles.filter(article => article.category === selectedService);
    }

    return articles;
  }, [allArticles, searchQuery, selectedService]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedService]);
  
  const regularPosts = filteredPosts; // Show all articles in Latest Articles

  /**
   * Helper function to parse article date string to Date object
   * Handles format like "November 21, 2025"
   */
  const parseArticleDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  /**
   * Sort regular posts by date in descending order (newest first)
   */
  const sortedRegularPosts = useMemo(() => {
    return [...regularPosts].sort((a, b) => {
      const dateA = parseArticleDate(a.date);
      const dateB = parseArticleDate(b.date);
      return dateB.getTime() - dateA.getTime(); // Descending order (newest first)
    });
  }, [regularPosts]);

  /**
   * Helper function to get article author name
   * Handles both string and object author formats
   */
  const getAuthorName = (author: BlogArticleMetadata['author']): string => {
    return typeof author === 'string' ? author : author.name;
  };

  /**
   * Helper function to get article author role
   * Returns role if author is object, default role if string
   */
  const getAuthorRole = (author: BlogArticleMetadata['author']): string => {
    return typeof author === 'string' ? 'Contributor' : author.role;
  };

  /**
   * Helper function to get article URL path
   * Constructs the proper route based on whether article has a dedicated page
   */
  const getArticlePath = (article: BlogArticleMetadata): string => {
    // Articles with dedicated component pages use category-based routing
    const dedicatedArticles = [
      'how-etl-testing-helps-enterprises-maintain-data-accuracy-and-compliance',
      'the-future-of-test-data-management-ai-driven-automation-and-compliance',
      'ensuring-business-critical-software-meets-user-expectations-with-uat',
      'why-test-environment-management-is-critical-for-scalable-qa-in-enterprises',
      'ensuring-smooth-payments-and-safer-transactions-a-cogniron-view-on-qa-for-digital-payments-and-pos-systems',
      'rpa-that-works-why-testing-is-the-real-key-to-reliability',
      'test-data-management-ai-compliance',
      'the-new-era-of-quality-intelligence-led-assurance',
      'api-testing-best-practices-how-to-prevent-integration-failures',
      'load-testing-vs-stress-testing-how-to-ensure-peak-software-performance',
      'the-new-era-of-mobile-app-testing-how-5g-and-ai-automation-are-redefining-quality-at-speed',
      'beyond-automation-how-genai-is-rewriting-the-rules-of-test-case-design',
      'functional-testing-upgraded-ais-role-in-intelligent-automation',
      'ai-is-shipping-faster-than-quality',
      'build-verification-testing-the-first-line-of-defense-in-quality-engineering',
      'ensuring-compatibility-in-the-era-of-multi-device-digital-experiences',
      'iot-quality-assurance-building-trust-through-seamless-user-experiences',
      'beyond-compliance-how-accessibility-testing-became-a-true-business-advantage',
      'ensuring-seamless-user-experience-with-ai-powered-ux-ui-testing',
      'why-technology-alone-isnt-enough-to-fix-customer-operations',
      'crm-isnt-a-tool-anymore-its-infrastructure',
      'ai-driven-decision-making-in-qe',
      'why-every-enterprise-needs-an-ai-powered-test-automation-strategy',
      'the-role-of-large-language-models-in-software-testing-and-debugging',
      'agentic-ai-for-test-optimization-enhancing-speed-and-accuracy-in-software-qa',
      'ensuring-explainability-and-transparency-in-aiml-systems-through-robust-testing',
      'reliability-over-autonomy-why-2026-demands-disciplined-ai-testing-agents',
      'ai-in-healthcare-why-90-percent-initiatives-fail-and-how-to-fix-it',
    ];

    if (dedicatedArticles.includes(article.id)) {
      return `/blog/${article.category}/${article.id}`;
    }

    // Fallback to generic blog detail page for other articles
    return `/blog/${article.id}`;
  };

  // Get the latest 2 articles for Featured Articles section
  const latestTwoArticles = useMemo(() => {
    return filteredPosts.slice(0, 2);
  }, [filteredPosts]);

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedRegularPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Calculate total pages
  const totalPages = Math.ceil(sortedRegularPosts.length / postsPerPage);

  // Get the current filter name for empty state message
  const getCurrentFilterName = (): string => {
    const filter = serviceFilters.find(f => f.id === selectedService);
    return filter ? filter.name : 'this category';
  };

  // Handle page change with scroll to top of Latest Articles section
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    
    // Scroll to the top of the Latest Articles section
    if (latestArticlesRef.current) {
      const yOffset = -100; // Offset to account for header
      const y = latestArticlesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, #020617 0%, #0F172A 50%, #1E293B 100%)'
              : 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #F0F9FF 100%)',
          }}
        >
          <div className="absolute inset-0 opacity-10 neural-pattern"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-24 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Blog
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
            Expert perspectives on quality assurance, testing automation, and AI-driven quality engineering.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <SearchInput
              placeholder="Search Blog..."
              value={searchQuery}
              onChange={setSearchQuery}
              ariaLabel="Search blog articles"
            />
          </div>
        </div>
      </section>

      {/* Service Filter */}
      <section className="relative py-12" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {serviceFilters.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                aria-pressed={selectedService === service.id}
                aria-label={`Filter by ${service.name}`}
                className="px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 hover:scale-105"
                style={{
                  background: selectedService === service.id
                    ? 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)'
                    : theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.05)'
                    : '#FFFFFF',
                  border: selectedService === service.id
                    ? 'none'
                    : `1px solid var(--border-color)`,
                  color: selectedService === service.id ? '#FFFFFF' : 'var(--text-primary)',
                  boxShadow: selectedService === service.id ? 'var(--shadow-accent)' : 'var(--shadow-sm)',
                }}
              >
                <Tag className="w-4 h-4" />
                <span>{service.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedService === 'all' && latestTwoArticles.length > 0 && (
        <section className="relative py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Latest Blogs
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {latestTwoArticles.map((post, index) => (
                <article
                  key={index}
                  className="group relative backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-md)',
                    minHeight: '700px',
                  }}
                >
                  {post.image && (
                    <div className="relative h-64 overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: theme === 'dark'
                            ? 'linear-gradient(to top, #0F172A, transparent)'
                            : 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
                        }}
                      ></div>
                    </div>
                  )}
                  
                  <div className="p-8 flex flex-col flex-grow">
                    {/* Content Section - grows to fill available space */}
                    <div className="flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-sm"
                            style={{
                              background: theme === 'dark'
                                ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                                : 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.1))',
                              border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(37, 99, 235, 0.2)'}`,
                              color: 'var(--accent-primary)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl mb-3 transition-colors" style={{ color: 'var(--text-primary)' }}>
                        {post.title}
                      </h3>
                      <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>{post.excerpt}</p>
                    </div>

                    {/* Footer Section - stays at bottom */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm" style={{ color: 'var(--text-primary)' }}>{getAuthorName(post.author)}</div>
                            <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{getAuthorRole(post.author)}</div>
                          </div>
                        </div>
                        <div className="text-sm flex items-center" style={{ color: 'var(--text-secondary)' }}>
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <div className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>

                      {/* Read Article Button */}
                      <Link
                        to={getArticlePath(post)}
                        className="w-full flex items-center justify-center px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 group"
                        style={{
                          background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                          color: '#FFFFFF',
                          boxShadow: theme === 'dark' ? '0 0 30px rgba(37, 99, 235, 0.3)' : 'var(--shadow-accent)',
                        }}
                      >
                        <span className="mr-2 font-medium">Read Blog</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section ref={latestArticlesRef} className="relative py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
              All Blogs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <article
                key={index}
                className="group backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 flex flex-col"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                  minHeight: '480px',
                }}
              >
                {/* Content Section - grows to fill available space */}
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded text-xs"
                        style={{
                          background: theme === 'dark'
                            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))'
                            : 'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(6, 182, 212, 0.08))',
                          border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(37, 99, 235, 0.15)'}`,
                          color: 'var(--accent-primary)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg mb-3 transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {post.title}
                  </h3>
                  <p className="text-sm mb-6 line-clamp-3" style={{ color: 'var(--text-secondary)' }}>{post.excerpt}</p>
                </div>

                {/* Footer Section - stays at bottom */}
                <div className="space-y-3 pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm truncate" style={{ color: 'var(--text-primary)' }}>{getAuthorName(post.author)}</div>
                      <div className="text-xs truncate" style={{ color: 'var(--text-secondary)' }}>{getAuthorRole(post.author)}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link
                    to={getArticlePath(post)}
                    className="w-full flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 group"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <span className="mr-2">Read Blog</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" 
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.08)',
                    border: `2px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(37, 99, 235, 0.2)'}`,
                  }}
                >
                  <Tag className="w-8 h-8" style={{ color: 'var(--accent-primary)' }} />
                </div>
                <h3 className="text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>
                  No Articles Found
                </h3>
                <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {searchQuery 
                    ? `No articles match "${searchQuery}"${selectedService !== 'all' ? ` in ${getCurrentFilterName()}` : ''}.`
                    : `No articles available in ${getCurrentFilterName()} category yet.`
                  }
                </p>
                {selectedService !== 'all' && (
                  <button
                    onClick={() => setSelectedService('all')}
                    className="px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                      color: '#FFFFFF',
                      boxShadow: 'var(--shadow-accent)',
                    }}
                  >
                    View All Articles
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Pagination - positioned inside Latest Articles section, bottom-right */}
          {totalPages > 1 && (
            <div className="mt-16">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <CTASection
        title="Never Miss an Update"
        description="Subscribe to our blog for the latest insights on quality assurance and testing automation."
        placeholder="Enter your email"
        buttonText="Subscribe"
        buttonStyle={{
          background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
          color: '#FFFFFF',
          boxShadow: 'var(--shadow-accent)',
        }}
        inputStyle={{
          backgroundColor: 'var(--input-bg)',
          border: '1px solid var(--input-border)',
          color: 'var(--text-primary)',
        }}
        formStyle={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), transparent, rgba(168, 85, 247, 0.05))'
            : 'linear-gradient(135deg, rgba(37, 99, 235, 0.03), transparent, rgba(168, 85, 247, 0.03))',
        }}
        additionalText="Weekly digest. No spam. Unsubscribe anytime."
      />
    </PageContainer>
  );
}