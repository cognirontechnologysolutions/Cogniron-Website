import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// Logo assets stored in /public/logos/ - committed to Git, no conversion
const logoLight = '/logos/cogniron-logo-light.png';  // Full logo for light theme
const logoDark = '/logos/cogniron-logo-dark.png';    // Logo mark for dark theme

export function Footer() {
  const { theme } = useTheme();
  
  const services = [
    { name: 'QA Services', path: '/services/qa' },
    { name: 'PQLM', path: '/services/pqlm' },
    { name: 'UX-Assurance', path: '/services/ux-assurance' },
    { name: 'X-FIRST', path: '/services/x-first' },
    { name: 'Cognitive Assurance', path: '/services/cognitive-assurance' },
    { name: 'CRM Services', path: '/services/crm' },
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Insights', path: '/insights' },
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer
      className="relative"
      style={{
        background: theme === 'dark' 
          ? '#020617' 
          : 'linear-gradient(120deg, #EEF4FF 0%, #F7F9FC 100%)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 opacity-5 neural-pattern"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={theme === 'light' ? logoLight : logoDark}
                alt="Cogniron"
                className="h-10 w-auto transition-opacity duration-200"
                style={{ 
                  objectFit: 'contain',
                  maxWidth: '200px'
                }}
              />
            </Link>
            <p className="mb-6 max-w-sm" style={{ color: 'var(--text-secondary)' }}>
              Premium AI-driven quality assurance solutions for enterprise excellence. Transforming testing with cognitive intelligence and automation.
            </p>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/cogniron-technology-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cogniron on LinkedIn"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
              {/* X (formerly Twitter) */}
              <a
                href="https://x.com/cogniron"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cogniron on X (formerly Twitter)"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* X Icon (Twitter replacement) */}
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              
              {/* Instagram */}
              <a
                href="https://www.instagram.com/cogniron_technology_solutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cogniron on Instagram"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4" style={{ color: 'var(--text-primary)' }}>Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4" style={{ color: 'var(--text-primary)' }}>Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4" style={{ color: 'var(--text-primary)' }}>Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3" style={{ color: 'var(--text-secondary)' }}>
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailtoinfo@cogniron.com" className="transition-colors">
              info@cogniron.com
                </a>
              </li>
              <li className="flex items-start space-x-3" style={{ color: 'var(--text-secondary)' }}>
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+91 7680039529" className="transition-colors">
                  +91 7680039529
                </a>
              </li>
              <li className="flex items-start space-x-3" style={{ color: 'var(--text-secondary)' }}>
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>1502B, Manjeera Trinity Corporate, Hyderabad, TG 500072</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Cogniron. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/privacy"
              className="transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}