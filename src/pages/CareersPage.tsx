import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Clock,
  Search,
  ChevronRight,
  Users,
  TrendingUp,
  Heart,
  Globe,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { PageContainer } from '../components/PageContainer';
import { SectionTag } from '../components/SectionTag';
import { useTheme } from '../contexts/ThemeContext';
import { useGradientShimmer } from '../hooks/useGradientShimmer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CareersPage() {
  const { theme } = useTheme();
  useGradientShimmer();
  // const [teamFilter, setTeamFilter] = useState('all');
  // const [workTypeFilter, setWorkTypeFilter] = useState('all');

  /* Currently not hiring - job postings hidden
  const openPositions = [
    {
      title: 'Senior QA Automation Engineer',
      team: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and scale test automation frameworks using AI-powered testing strategies.',
    },
    {
      title: 'AI/ML Engineer - Cognitive Testing',
      team: 'Engineering',
      location: 'San Francisco / Remote',
      type: 'Full-time',
      description: 'Develop machine learning models to predict defects and optimize testing coverage.',
    },
    {
      title: 'Product Manager - Gretah AI',
      team: 'Product',
      location: 'San Francisco',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for our flagship AI-powered QA platform.',
    },
    {
      title: 'Senior UX Designer',
      team: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design intuitive experiences for complex enterprise quality assurance tools.',
    },
    {
      title: 'Customer Success Manager',
      team: 'Customer Success',
      location: 'London / Remote',
      type: 'Full-time',
      description: 'Partner with enterprise clients to ensure successful QA transformations.',
    },
    {
      title: 'Solutions Architect',
      team: 'Customer Success',
      location: 'Singapore / Remote',
      type: 'Full-time',
      description: 'Design and implement custom testing solutions for Fortune 500 companies.',
    },
  ];
  */
  const openPositions = [];

  const lifeHighlights = [
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented teams across engineering, product, and customer success.',
    },
    {
      icon: TrendingUp,
      title: 'Growth & Learning',
      description: 'Mentorship, knowledge sharing, and meaningful opportunities to keep growing.',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'A supportive team culture that values balance, sustainability, and wellbeing.',
    },
    {
      icon: Globe,
      title: 'Global Team',
      description: 'Collaboration across teams and time zones to solve meaningful problems together.',
    },
  ];

  // const filteredPositions = openPositions.filter((position) => {
  //   const matchesTeam = teamFilter === 'all' || position.team === teamFilter;
  //   const matchesWorkType = workTypeFilter === 'all' || position.location.toLowerCase().includes(workTypeFilter.toLowerCase());
  //   return matchesTeam && matchesWorkType;
  // });

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20" style={{ 
        backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : '#FAFBFF'
      }}>
        {/* Background Layer */}
        <div className="absolute inset-0">
          {/* Grid Pattern - matches Platform page */}
          <div 
            className="absolute inset-0 neural-pattern"
            style={{
              opacity: theme === 'dark' ? 0.1 : 0.12
            }}
          ></div>
          
          {/* Light Theme: Central radial gradient spotlight (matches Platform page) */}
          {theme === 'light' && (
            <div
              className="absolute left-0 right-0"
              style={{
                top: '25%',
                height: '50%',
                background: 'radial-gradient(ellipse 70% 90% at 50% 50%, rgba(219, 234, 254, 0.6) 0%, rgba(191, 219, 254, 0.35) 30%, rgba(250, 251, 255, 0) 65%)',
                pointerEvents: 'none',
              }}
            ></div>
          )}
          
          {/* Dark Theme: Gradient Orbs (matches Platform page) */}
          {theme === 'dark' && (
            <div className="absolute inset-0" style={{ opacity: 0.2 }}>
              <div className="absolute top-0 left-0 w-full h-full">
                <div 
                  className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                  style={{ 
                    backgroundColor: 'rgba(59, 130, 246, 0.3)'
                  }}
                ></div>
                <div 
                  className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" 
                  style={{ 
                    backgroundColor: 'rgba(147, 51, 234, 0.3)',
                    animationDelay: '1s' 
                  }}
                ></div>
                <div 
                  className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse" 
                  style={{ 
                    backgroundColor: 'rgba(6, 182, 212, 0.2)',
                    animationDelay: '2s' 
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div
                className="inline-block mb-4 px-4 py-2 rounded-full text-sm"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.08)',
                  color: 'var(--accent-primary)',
                }}
              >
                Join the Team
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                Careers at <span className="gradient-text">Cogniron</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
                Join a team that's redefining <span className="gradient-text">quality assurance</span> with <span className="gradient-text">AI</span>. Build products that matter, work with brilliant people, and make an impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#open-positions"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 group"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                    color: '#FFFFFF',
                    boxShadow: 'var(--shadow-accent)',
                  }}
                >
                  <span className="mr-2">View Open Positions</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="#life-at-cogniron"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                    border: `1px solid var(--border-color)`,
                    color: 'var(--text-primary)',
                  }}
                >
                  Life at Cogniron
                </a>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                  border: '1px solid var(--border-color)',
                  aspectRatio: '4/3',
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="open-positions"
        className="relative py-24"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), transparent, rgba(168, 85, 247, 0.05))'
            : 'linear-gradient(135deg, rgba(37, 99, 235, 0.03), transparent, rgba(168, 85, 247, 0.03))',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-4">
              <SectionTag text="Work With Us" icon={Briefcase} />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 max-w-3xl mx-auto" style={{ color: 'var(--text-primary)' }}>
              Currently Not Hiring
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We do not have any open roles right now. We are still happy to hear from exceptional people interested in future opportunities.
            </p>
          </div>

          <div
            className="max-w-2xl mx-auto text-center backdrop-blur-sm rounded-2xl p-12"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--accent-primary)' }} />
            <h3 className="text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>
              We're Building Something Incredible
            </h3>
            <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
              We're not actively hiring at the moment, but we're always looking for exceptional talent to join Cogniron. If you're interested in future opportunities or want to explore how you can contribute to our mission, we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                color: '#FFFFFF',
                boxShadow: 'var(--shadow-accent)',
              }}
            >
              Get In Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Life at Cogniron Section */}
      <section id="life-at-cogniron" className="relative py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-4">
              <SectionTag text="Culture & Benefits" icon={Heart} />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 max-w-3xl mx-auto" style={{ color: 'var(--text-primary)' }}>
              Life at Cogniron
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We're building a place where talented people can do their best work. Our culture is rooted in craft, curiosity, collaboration, and care for both our customers and each other.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {lifeHighlights.map((highlight, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background:
                      theme === 'dark'
                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                        : 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.1))',
                  }}
                >
                  <highlight.icon className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                </div>
                <h3 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>
                  {highlight.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
              'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80',
              'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80',
              'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
            ].map((src, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                  border: '1px solid var(--border-color)',
                  aspectRatio: '1',
                }}
              >
                <ImageWithFallback src={src} alt={`Team moment ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Benefits List */}
          <div
            className="backdrop-blur-sm rounded-2xl p-8 mb-12"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <h3 className="text-2xl mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
              What We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'A collaborative, respectful team environment',
                'Challenging work with clear ownership',
                'Mentorship and continuous learning opportunities',
                'Cross-functional collaboration on real customer problems',
                'Modern tools and processes that support quality delivery',
                'A culture that values thoughtful communication',
                'Opportunities to contribute across initiatives',
                'A mission-driven team focused on long-term impact',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-xl mb-6" style={{ color: 'var(--text-secondary)' }}>
              Want to learn more about working at Cogniron?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#open-positions"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 group"
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                  color: '#FFFFFF',
                  boxShadow: 'var(--shadow-accent)',
                }}
              >
                <span className="mr-2">Explore Opportunities</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                  border: `1px solid var(--border-color)`,
                  color: 'var(--text-primary)',
                }}
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
