import React, { useState } from 'react';
import { FileText, BookOpen, Video, Download, TrendingUp, Users, ArrowRight, Play, Calendar, Clock } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { PageContainer } from '../components/PageContainer';
import { SectionTag } from '../components/SectionTag';
import { useTheme } from '../contexts/ThemeContext';
import { useGradientShimmer } from '../hooks/useGradientShimmer';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function InsightsPage() {
  const { theme } = useTheme();
  useGradientShimmer();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Insights' },
    { id: 'research', name: 'Research Reports' },
    { id: 'guides', name: 'Best Practice Guides' },
    { id: 'webinars', name: 'Webinars' },
    { id: 'whitepapers', name: 'Whitepapers' },
  ];

  const insights = [
    {
      id: 'ai-in-qa-2025',
      title: 'The State of AI in Quality Assurance 2025',
      category: 'research',
      type: 'Research Report',
      icon: FileText,
      description: 'Comprehensive analysis of AI adoption in testing, featuring insights from 500+ organizations.',
      readTime: '45 min read',
      date: 'November 2025',
      featured: true,
      image: 'https://images.unsplash.com/photo-1758873271740-f1fd6c6f1524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5c2lzJTIwZGF0YXxlbnwxfHx8fDE3NjQzMzI0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'shift-left-guide',
      title: 'Shift-Left Testing: A Practical Implementation Guide',
      category: 'guides',
      type: 'Best Practice Guide',
      icon: BookOpen,
      description: 'Step-by-step framework for implementing shift-left testing in enterprise organizations.',
      readTime: '30 min read',
      date: 'November 2025',
      featured: true,
      image: 'https://images.unsplash.com/photo-1556792189-55769c8dfbac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGV2ZWxvcG1lbnQlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NjQzMzI0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'qa-roi-metrics',
      title: 'Measuring QA ROI: Metrics That Matter',
      category: 'whitepapers',
      type: 'Whitepaper',
      icon: TrendingUp,
      description: 'Data-driven approach to quantifying the business value of quality assurance investments.',
      readTime: '25 min read',
      date: 'October 2025',
      featured: false,
      image: null,
    },
    {
      id: 'cognitive-testing-webinar',
      title: 'Cognitive Testing in Production: Webinar Recording',
      category: 'webinars',
      type: 'Webinar',
      icon: Video,
      description: 'Learn how leading companies use AI-powered monitoring to prevent production issues.',
      readTime: '60 min',
      date: 'October 2025',
      featured: false,
      image: null,
    },
    {
      id: 'accessibility-checklist',
      title: 'Accessibility Testing Compliance Checklist',
      category: 'guides',
      type: 'Best Practice Guide',
      icon: BookOpen,
      description: 'Complete WCAG 2.1 compliance checklist with testing strategies and tools.',
      readTime: '20 min read',
      date: 'September 2025',
      featured: false,
      image: null,
    },
    {
      id: 'test-automation-economics',
      title: 'The Economics of Test Automation',
      category: 'research',
      type: 'Research Report',
      icon: FileText,
      description: 'ROI analysis of test automation investments across different organization sizes.',
      readTime: '35 min read',
      date: 'September 2025',
      featured: false,
      image: null,
    },
    {
      id: 'devops-quality-integration',
      title: 'DevOps and Quality: Integration Strategies',
      category: 'whitepapers',
      type: 'Whitepaper',
      icon: TrendingUp,
      description: 'Best practices for integrating QA into continuous delivery pipelines.',
      readTime: '30 min read',
      date: 'August 2025',
      featured: false,
      image: null,
    },
    {
      id: 'performance-testing-scale',
      title: 'Performance Testing at Scale',
      category: 'guides',
      type: 'Best Practice Guide',
      icon: BookOpen,
      description: 'Strategies for performance testing high-traffic applications and microservices.',
      readTime: '40 min read',
      date: 'August 2025',
      featured: false,
      image: null,
    },
  ];

  const filteredInsights = selectedCategory === 'all'
    ? insights
    : insights.filter(i => i.category === selectedCategory);

  const featuredInsights = insights.filter(i => i.featured);
  const regularInsights = filteredInsights.filter(i => !i.featured);

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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Insights Hub
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Expert research, guides, and resources to elevate your quality assurance practice.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-12" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300`}
                style={
                  selectedCategory === category.id
                    ? {
                        background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
                        color: '#FFFFFF',
                        boxShadow: theme === 'dark' ? '0 0 30px rgba(59, 130, 246, 0.3)' : '0 4px 20px rgba(59, 130, 246, 0.2)',
                      }
                    : {
                        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-color)',
                      }
                }
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      {selectedCategory === 'all' && (
        <section className="relative py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Featured Insights
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Our latest and most impactful resources for quality assurance professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredInsights.map((insight, index) => (
                <div
                  key={index}
                  className="group relative backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  {insight.image && (
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: theme === 'dark'
                            ? 'linear-gradient(to top, rgba(15, 23, 42, 1) 0%, transparent 100%)'
                            : 'linear-gradient(to top, rgba(255, 255, 255, 0.9) 0%, transparent 100%)',
                        }}
                      ></div>
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          background: theme === 'dark'
                            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                            : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
                          border: `1px solid ${theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}`,
                          color: theme === 'dark' ? '#06B6D4' : '#0284C7',
                        }}
                      >
                        {insight.type}
                      </span>
                      <div className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <Calendar className="w-4 h-4 mr-1" />
                        {insight.date}
                      </div>
                    </div>
                    <h3 className="text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>{insight.title}</h3>
                    <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>{insight.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <Clock className="w-4 h-4 mr-1" />
                        {insight.readTime}
                      </div>
                      <Link
                        to={`/insights/${insight.id}`}
                        className="flex items-center transition-colors group"
                        style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }}
                      >
                        <span className="mr-2">Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Insights Grid */}
      <section
        className="relative py-24"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)'
            : 'linear-gradient(135deg, rgba(249, 250, 251, 1) 0%, rgba(241, 245, 249, 1) 50%, rgba(249, 250, 251, 1) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
              {selectedCategory === 'all' ? 'All Resources' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularInsights.map((insight, index) => (
              <div
                key={index}
                className="group backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
                  }}
                >
                  <insight.icon
                    className="w-6 h-6"
                    style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }}
                  />
                </div>
                
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-sm" style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }}>
                    {insight.type}
                  </span>
                  <span style={{ color: 'var(--text-tertiary)' }}>•</span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{insight.date}</span>
                </div>

                <h3 className="text-lg mb-3" style={{ color: 'var(--text-primary)' }}>{insight.title}</h3>
                <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>{insight.description}</p>

                <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                  <div className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <Clock className="w-4 h-4 mr-1" />
                    {insight.readTime}
                  </div>
                  <button
                    className="flex items-center transition-colors"
                    style={{ color: theme === 'dark' ? '#06B6D4' : '#0284C7' }}
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section
        className="relative py-24"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(147, 51, 234, 0.05) 100%)'
            : 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, transparent 50%, rgba(147, 51, 234, 0.03) 100%)',
          backgroundColor: 'var(--bg-primary)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
            Stay Updated
          </h2>
          <p className="text-xl mb-10" style={{ color: 'var(--text-secondary)' }}>
            Get the latest insights, research, and best practices delivered to your inbox monthly.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 transition-all"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.5)' : '#FFFFFF',
                border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'var(--border-color)'}`,
                color: 'var(--text-primary)',
                '::placeholder': { color: 'var(--text-tertiary)' },
              }}
            />
            <button
              className="px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
                color: '#FFFFFF',
                boxShadow: theme === 'dark' ? '0 0 30px rgba(59, 130, 246, 0.3)' : '0 4px 20px rgba(59, 130, 246, 0.2)',
              }}
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm mt-4" style={{ color: 'var(--text-secondary)' }}>
            Join 5,000+ QA professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </PageContainer>
  );
}