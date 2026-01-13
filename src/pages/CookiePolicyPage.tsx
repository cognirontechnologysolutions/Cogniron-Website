import React from 'react';
import { Cookie, Settings, Eye, BarChart3 } from 'lucide-react';
import { PageContainer } from '../components/PageContainer';
import { useTheme } from '../contexts/ThemeContext';

export function CookiePolicyPage() {
  const { theme } = useTheme();
  
  return (
    <PageContainer>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--neural-orb)' }}></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--neural-orb)' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl mb-6">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>Cookie Policy</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Last updated: December 1, 2025</p>
          </div>

          <div
            className="backdrop-blur-sm rounded-2xl p-8 space-y-8"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <section>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>What Are Cookies</h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and improving our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                <Settings className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                Types of Cookies We Use
              </h2>
              <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                <div>
                  <h3 className="text-lg mb-2" style={{ color: 'var(--text-primary)' }}>Essential Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg mb-2" style={{ color: 'var(--text-primary)' }}>Performance Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg mb-2" style={{ color: 'var(--text-primary)' }}>Functional Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies enable the website to provide enhanced functionality and personalization, such as remembering your theme preference.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                <BarChart3 className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                Analytics Cookies
              </h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We use analytics cookies to measure and analyze how users interact with our website. This information helps us improve our services and provide better content. These cookies collect information such as the number of visitors, which pages they visit, and how long they spend on the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                <Eye className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                Managing Cookies
              </h2>
              <div className="space-y-3" style={{ color: 'var(--text-secondary)' }}>
                <p className="leading-relaxed">You can control and manage cookies in several ways:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                  <li>Delete cookies: You can delete cookies that have already been set</li>
                  <li>Third-party tools: Use privacy tools to manage tracking cookies</li>
                  <li>Opt-out: Visit our cookie preference center to adjust your settings</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Please note that blocking or deleting cookies may impact your experience on our website and limit certain functionalities.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Contact Us</h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                If you have any questions about our use of cookies, please contact us at{' '}
                <a href="mailto:privacy@cogniron.com" className="underline" style={{ color: 'var(--accent-primary)' }}>
                  privacy@cogniron.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}