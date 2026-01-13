import React from 'react';
import { Shield, Eye, Lock, FileText } from 'lucide-react';
import { PageContainer } from '../components/PageContainer';
import { useTheme } from '../contexts/ThemeContext';

export function PrivacyPolicyPage() {
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
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>Privacy Policy</h1>
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
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Introduction</h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                At Cogniron, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                <Eye className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                Information We Collect
              </h2>
              <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                <div>
                  <h3 className="text-lg mb-2" style={{ color: 'var(--text-primary)' }}>Personal Information</h3>
                  <p className="leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Fill out contact forms or request consultations</li>
                    <li>Subscribe to our newsletter or blog</li>
                    <li>Register for events or webinars</li>
                    <li>Apply for employment opportunities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg mb-2" style={{ color: 'var(--text-primary)' }}>Usage Information</h3>
                  <p className="leading-relaxed">
                    We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                <FileText className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                How We Use Your Information
              </h2>
              <div className="space-y-3" style={{ color: 'var(--text-secondary)' }}>
                <p className="leading-relaxed">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Analyze usage patterns and optimize user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                <Lock className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                Data Security
              </h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Your Rights</h2>
              <div className="space-y-3" style={{ color: 'var(--text-secondary)' }}>
                <p className="leading-relaxed">You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Contact Us</h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
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