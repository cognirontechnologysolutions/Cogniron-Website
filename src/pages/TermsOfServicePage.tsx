import React from 'react';
import { FileText, AlertTriangle, Scale, Users } from 'lucide-react';
import { PageContainer } from '../components/PageContainer';
import { useTheme } from '../contexts/ThemeContext';

export function TermsOfServicePage() {
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>Terms of Service</h1>
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
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Agreement to Terms</h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                By accessing or using Cogniron's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                <Scale className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                Use License
              </h2>
              <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                <p className="leading-relaxed">
                  Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                <AlertTriangle className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                Disclaimer
              </h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                The materials on Cogniron's website and services are provided on an 'as is' basis. Cogniron makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                <Users className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                User Responsibilities
              </h2>
              <div className="space-y-3" style={{ color: 'var(--text-secondary)' }}>
                <p className="leading-relaxed">As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Use the services in compliance with all applicable laws</li>
                  <li>Not engage in any activity that could harm our systems or other users</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Limitations</h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                In no event shall Cogniron or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Cogniron's services, even if Cogniron or a Cogniron authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Revisions</h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Cogniron may revise these terms of service at any time without notice. By using our services, you agree to be bound by the current version of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Contact Information</h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Questions about the Terms of Service should be sent to us at{' '}
                <a href="mailto:legal@cogniron.com" className="underline" style={{ color: 'var(--accent-primary)' }}>
                  legal@cogniron.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}