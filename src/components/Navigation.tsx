import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

// Logo assets stored in /public/logos/ - committed to Git, no conversion
const logoLight = '/logos/cogniron-logo-light.png';  // Full logo for light theme
const logoDark = '/logos/cogniron-logo-dark.png';    // Logo mark for dark theme

export function Navigation() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [qaSubmenuOpen, setQASubmenuOpen] = useState(false);
  const [insightsDropdownOpen, setInsightsDropdownOpen] = useState(false);
  const location = useLocation();
  
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const qaSubmenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const insightsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const qaCategories = [
    { name: 'PQLM', path: '/services/pqlm', description: 'Product Quality Lifecycle Management' },
    { name: 'UX-Assurance', path: '/services/ux-assurance', description: 'User Experience Quality' },
    { name: 'X-FIRST', path: '/services/x-first', description: 'Shift-Left & Quality-First' },
    { name: 'Cognitive Assurance', path: '/services/cognitive-assurance', description: 'AI-Driven Testing' },
  ];

  const insightsMenu = [
    { name: 'Blog', path: '/blog', description: 'Latest articles and insights' },
    { name: 'Case Studies', path: '/case-studies', description: 'Success stories and results' },
  ];

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
      setQASubmenuOpen(false);
    }, 250);
  };

  const handleQAMouseEnter = () => {
    if (qaSubmenuTimeoutRef.current) clearTimeout(qaSubmenuTimeoutRef.current);
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setQASubmenuOpen(true);
  };

  const handleQAMouseLeave = () => {
    qaSubmenuTimeoutRef.current = setTimeout(() => {
      setQASubmenuOpen(false);
    }, 250);
  };

  const handleInsightsMouseEnter = () => {
    if (insightsTimeoutRef.current) clearTimeout(insightsTimeoutRef.current);
    setInsightsDropdownOpen(true);
  };

  const handleInsightsMouseLeave = () => {
    insightsTimeoutRef.current = setTimeout(() => {
      setInsightsDropdownOpen(false);
    }, 150);
  };

  const closeAllDropdowns = () => {
    setServicesDropdownOpen(false);
    setQASubmenuOpen(false);
    setInsightsDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        backgroundColor: 'var(--header-glass-bg)',
        backdropFilter: 'var(--header-glass-blur)',
        WebkitBackdropFilter: 'var(--header-glass-blur)',
        borderBottom: `1px solid var(--header-glass-border)`,
        boxShadow: 'var(--header-glass-shadow)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 overflow-visible">
        <div className="flex justify-between items-center h-20 overflow-visible">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-[200px] h-10 flex items-center">
              <img 
                src={theme === 'light' ? logoLight : logoDark}
                alt="Cogniron"
                className="w-full h-full transition-opacity duration-200"
                style={{ 
                  objectFit: 'contain',
                  objectPosition: 'left center'
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0.5 overflow-visible">
            <Link
              to="/GretahAI"
              className="px-3 py-2 rounded-lg transition-all duration-200"
              style={{
                color: location.pathname === '/GretahAI' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                backgroundColor: location.pathname === '/GretahAI'
                  ? theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(37, 99, 235, 0.08)'
                  : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== '/GretahAI') {
                  e.currentTarget.style.color = '#0054A6';
                  e.currentTarget.style.fontWeight = '600';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== '/GretahAI') {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.fontWeight = 'normal';
                }
              }}
            >
              Gretah AI
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative overflow-visible"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className="px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-1"
                style={{
                  color: location.pathname.startsWith('/services') ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  backgroundColor: location.pathname.startsWith('/services')
                    ? theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(37, 99, 235, 0.08)'
                    : 'transparent',
                }}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <>
                  {/* Invisible bridge to cover the gap */}
                  <div 
                    className="absolute left-0 right-0"
                    style={{
                      top: '100%',
                      height: '0.5rem',
                      pointerEvents: 'auto',
                    }}
                  />
                  <div
                    className="absolute left-0 w-80 backdrop-blur-xl rounded-xl overflow-hidden z-[60]"
                    style={{
                      top: 'calc(100% + 0.5rem)',
                      backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                      border: `1px solid var(--border-color)`,
                      boxShadow: 'var(--shadow-lg)',
                    }}
                  >
                    {/* QA Services */}
                    <div
                      className="relative"
                      onMouseEnter={handleQAMouseEnter}
                    >
                      <div className="flex items-stretch" style={{ borderBottom: `1px solid var(--border-color)` }}>
                        <Link
                          to="/services/qa"
                          onClick={closeAllDropdowns}
                          className="group/qa flex-1 flex items-center px-5 py-3.5 transition-all duration-300"
                          style={{
                            backgroundColor: 'transparent',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = theme === 'dark'
                              ? 'rgba(59, 130, 246, 0.1)'
                              : 'rgba(37, 99, 235, 0.05)';
                            const titleDiv = e.currentTarget.querySelector('div > div:first-child') as HTMLElement;
                            if (titleDiv) {
                              titleDiv.style.color = '#0054A6';
                              titleDiv.style.fontWeight = '600';
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            const titleDiv = e.currentTarget.querySelector('div > div:first-child') as HTMLElement;
                            if (titleDiv) {
                              titleDiv.style.color = 'var(--text-primary)';
                              titleDiv.style.fontWeight = 'normal';
                            }
                          }}
                        >
                          <div className="text-left">
                            <div style={{ color: 'var(--text-primary)', transition: 'color 200ms ease-in-out, font-weight 200ms ease-in-out' }}>QA Services</div>
                            <div className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                              Comprehensive Quality Assurance
                            </div>
                          </div>
                        </Link>
                        <button
                          onClick={() => setQASubmenuOpen(!qaSubmenuOpen)}
                          className="px-4 transition-all duration-300"
                          style={{ borderLeft: `1px solid var(--border-color)` }}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-all duration-200 ${qaSubmenuOpen ? 'rotate-180' : ''}`}
                            style={{ color: 'var(--text-secondary)' }}
                          />
                        </button>
                      </div>

                      {/* QA Submenu */}
                      {qaSubmenuOpen && (
                        <div style={{
                          backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : '#F5F5F7',
                          borderBottom: `1px solid var(--border-color)`,
                        }}>
                          {qaCategories.map((category, index) => (
                            <Link
                              key={category.path}
                              to={category.path}
                              onClick={closeAllDropdowns}
                              className="block px-8 py-3 transition-all duration-200"
                              style={{
                                borderBottom: index < qaCategories.length - 1 ? `1px solid var(--border-color)` : 'none',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = theme === 'dark'
                                  ? 'rgba(59, 130, 246, 0.1)'
                                  : 'rgba(37, 99, 235, 0.05)';
                                const titleDiv = e.currentTarget.querySelector('div:first-child') as HTMLElement;
                                if (titleDiv) {
                                  titleDiv.style.color = '#0054A6';
                                  titleDiv.style.fontWeight = '600';
                                }
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                const titleDiv = e.currentTarget.querySelector('div:first-child') as HTMLElement;
                                if (titleDiv) {
                                  titleDiv.style.color = 'var(--text-primary)';
                                  titleDiv.style.fontWeight = 'normal';
                                }
                              }}
                            >
                              <div style={{ color: 'var(--text-primary)', transition: 'color 200ms ease-in-out, font-weight 200ms ease-in-out' }}>{category.name}</div>
                              <div className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                                {category.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* CRM Services */}
                    <Link
                      to="/services/crm"
                      onClick={closeAllDropdowns}
                      className="block px-5 py-3.5 transition-all duration-300"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = theme === 'dark'
                          ? 'rgba(168, 85, 247, 0.1)'
                          : 'rgba(168, 85, 247, 0.05)';
                        const titleDiv = e.currentTarget.querySelector('div:first-child') as HTMLElement;
                        if (titleDiv) {
                          titleDiv.style.color = '#0054A6';
                          titleDiv.style.fontWeight = '600';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        const titleDiv = e.currentTarget.querySelector('div:first-child') as HTMLElement;
                        if (titleDiv) {
                          titleDiv.style.color = 'var(--text-primary)';
                          titleDiv.style.fontWeight = 'normal';
                        }
                      }}
                    >
                      <div style={{ color: 'var(--text-primary)', transition: 'color 200ms ease-in-out, font-weight 200ms ease-in-out' }}>CRM Services</div>
                      <div className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                        Customer Relationship Management
                      </div>
                    </Link>
                  </div>
                </>
              )}
            </div>

            {/* Insights Dropdown */}
            <div
              className="relative overflow-visible"
              onMouseEnter={handleInsightsMouseEnter}
              onMouseLeave={handleInsightsMouseLeave}
            >
              <button
                className="px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-1"
                style={{
                  color: ['/insights', '/blog', '/case-studies'].includes(location.pathname)
                    ? 'var(--accent-primary)'
                    : 'var(--text-secondary)',
                  backgroundColor: ['/insights', '/blog', '/case-studies'].includes(location.pathname)
                    ? theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(37, 99, 235, 0.08)'
                    : 'transparent',
                }}
              >
                <span>Insights</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${insightsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {insightsDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 backdrop-blur-xl rounded-xl overflow-hidden z-[60]"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                    border: `1px solid var(--border-color)`,
                    boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  {insightsMenu.map((item, index) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeAllDropdowns}
                      className="block px-5 py-3.5 transition-all duration-200"
                      style={{
                        borderBottom: index < insightsMenu.length - 1 ? `1px solid var(--border-color)` : 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = theme === 'dark'
                          ? 'rgba(59, 130, 246, 0.1)'
                          : 'rgba(37, 99, 235, 0.05)';
                        const titleDiv = e.currentTarget.querySelector('div:first-child') as HTMLElement;
                        if (titleDiv) {
                          titleDiv.style.color = '#0054A6';
                          titleDiv.style.fontWeight = '600';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        const titleDiv = e.currentTarget.querySelector('div:first-child') as HTMLElement;
                        if (titleDiv) {
                          titleDiv.style.color = 'var(--text-primary)';
                          titleDiv.style.fontWeight = 'normal';
                        }
                      }}
                    >
                      <div style={{ color: 'var(--text-primary)', transition: 'color 200ms ease-in-out, font-weight 200ms ease-in-out' }}>{item.name}</div>
                      <div className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="px-3 py-2 rounded-lg transition-all duration-200"
              style={{
                color: location.pathname === '/about' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                backgroundColor: location.pathname === '/about'
                  ? theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(37, 99, 235, 0.08)'
                  : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== '/about') {
                  e.currentTarget.style.color = '#0054A6';
                  e.currentTarget.style.fontWeight = '600';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== '/about') {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.fontWeight = 'normal';
                }
              }}
            >
              About
            </Link>

            <Link
              to="/careers"
              className="px-3 py-2 rounded-lg transition-all duration-200"
              style={{
                color: location.pathname === '/careers' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                backgroundColor: location.pathname === '/careers'
                  ? theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(37, 99, 235, 0.08)'
                  : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== '/careers') {
                  e.currentTarget.style.color = '#0054A6';
                  e.currentTarget.style.fontWeight = '600';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== '/careers') {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.fontWeight = 'normal';
                }
              }}
            >
              Careers
            </Link>

            {/* Theme Toggle Button */}
            <div className="ml-2 mr-2">
              <ThemeToggle />
            </div>

            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                color: '#FFFFFF',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden backdrop-blur-xl"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            borderTop: `1px solid var(--border-color)`,
          }}
        >
          <div className="px-4 py-6 space-y-2">
            <Link
              to="/GretahAI"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              Gretah AI
            </Link>
            
            <div className="px-4 py-2 text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              Services
            </div>
            
            <Link
              to="/services/qa"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block pl-8 pr-4 py-3 rounded-lg transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              QA Services
            </Link>
            
            <Link
              to="/services/crm"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block pl-8 pr-4 py-3 rounded-lg transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              CRM Services
            </Link>
            
            <div className="px-4 py-2 text-sm uppercase tracking-wider mt-4" style={{ color: 'var(--text-muted)' }}>
              Insights
            </div>
            
            {insightsMenu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-8 pr-4 py-3 rounded-lg transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg transition-colors mt-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              About
            </Link>
            
            <Link
              to="/careers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg transition-colors mt-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              Careers
            </Link>
            
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg transition-all mt-2"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                color: '#FFFFFF',
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}