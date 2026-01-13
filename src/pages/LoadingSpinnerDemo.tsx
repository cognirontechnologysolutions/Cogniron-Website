/**
 * Loading Spinner Demo Page
 * 
 * Showcases the snow ball loading spinner component with theme switching
 * and various background options to demonstrate the theme-aware gradient.
 */

import React from 'react';
import LoadingSpinner from '../components/ui/snow-ball-loading-spinner';
import { useTheme } from '../contexts/ThemeContext';
import { PageContainer } from '../components/PageContainer';
import { Sun, Moon } from 'lucide-react';

export function LoadingSpinnerDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <PageContainer>
      {/* Demo Header */}
      <section className="relative py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 text-center">
          <h1 className="text-5xl md:text-6xl mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Snow Ball Loading Spinner
          </h1>
          <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
            A theme-aware loading indicator with a moving gradient trail that follows the snow ball around the circular track.
          </p>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-5 h-5" />
                <span>Switch to Light Theme</span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5" />
                <span>Switch to Dark Theme</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* Demo Grid */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Centered on Primary Background */}
            <div
              className="rounded-2xl p-12 flex flex-col items-center justify-center min-h-[400px]"
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <h3 className="text-lg mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
                Primary Background
              </h3>
              <LoadingSpinner />
              <p className="mt-6 text-sm text-center" style={{ color: 'var(--text-secondary)' }}>
                Default page background color
              </p>
            </div>

            {/* Centered on Card Background */}
            <div
              className="rounded-2xl p-12 flex flex-col items-center justify-center min-h-[400px]"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <h3 className="text-lg mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
                Card Background
              </h3>
              <LoadingSpinner />
              <p className="mt-6 text-sm text-center" style={{ color: 'var(--text-secondary)' }}>
                Elevated card surface
              </p>
            </div>

            {/* Centered on Alternate Background */}
            <div
              className="rounded-2xl p-12 flex flex-col items-center justify-center min-h-[400px]"
              style={{
                backgroundColor: theme === 'dark' ? 'var(--bg-secondary)' : '#F7FBFF',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <h3 className="text-lg mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
                Alternate Background
              </h3>
              <LoadingSpinner />
              <p className="mt-6 text-sm text-center" style={{ color: 'var(--text-secondary)' }}>
                Subtle variation surface
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Full-Screen Overlay Demo */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Page Loading Overlay
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              This is how the spinner appears during page transitions
            </p>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              height: '500px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {/* Simulated Page Content */}
            <div className="p-8" style={{ color: 'var(--text-secondary)' }}>
              <h3 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>
                Simulated Page Content
              </h3>
              <p className="mb-4">
                This represents a page that is loading. The spinner overlay appears on top
                with a backdrop blur effect.
              </p>
              <p>
                Navigate between pages in the Cogniron website to see this spinner in action
                during lazy-loaded route transitions.
              </p>
            </div>

            {/* Overlay with Spinner */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                backgroundColor: theme === 'dark' 
                  ? 'rgba(2, 6, 23, 0.85)' 
                  : 'rgba(226, 242, 255, 0.85)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <LoadingSpinner />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="relative py-16" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
            Technical Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
              }}
            >
              <h3 className="text-xl mb-4" style={{ color: 'var(--text-primary)' }}>
                Features
              </h3>
              <ul className="space-y-3" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Theme-aware gradient colors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Smooth continuous animation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>3D snow ball with realistic shadows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Moving gradient trail on circular path</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Responsive and accessible</span>
                </li>
              </ul>
            </div>

            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
              }}
            >
              <h3 className="text-xl mb-4" style={{ color: 'var(--text-primary)' }}>
                Usage
              </h3>
              <pre
                className="text-sm p-4 rounded overflow-x-auto"
                style={{
                  backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                  color: theme === 'dark' ? '#e0e0e0' : '#333333',
                }}
              >
{`import LoadingSpinner from 
  "@/components/ui/snow-ball-loading-spinner";

function MyPage() {
  return (
    <div className="flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}`}
              </pre>
            </div>
          </div>

          <div
            className="mt-8 rounded-xl p-6"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
            }}
          >
            <h3 className="text-xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Gradient Colors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg mb-3" style={{ color: 'var(--text-primary)' }}>
                  Light Theme
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded" style={{ backgroundColor: '#04d4f4' }}></div>
                    <span style={{ color: 'var(--text-secondary)' }}>#04d4f4 (Cyan)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded" style={{ backgroundColor: '#0d6cfd' }}></div>
                    <span style={{ color: 'var(--text-secondary)' }}>#0d6cfd (Blue)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded" style={{ backgroundColor: '#8a5bff' }}></div>
                    <span style={{ color: 'var(--text-secondary)' }}>#8a5bff (Purple)</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg mb-3" style={{ color: 'var(--text-primary)' }}>
                  Dark Theme
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded" style={{ backgroundColor: '#00a8d1' }}></div>
                    <span style={{ color: 'var(--text-secondary)' }}>#00a8d1 (Deep Cyan)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded" style={{ backgroundColor: '#0056c9' }}></div>
                    <span style={{ color: 'var(--text-secondary)' }}>#0056c9 (Deep Blue)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded" style={{ backgroundColor: '#7443ec' }}></div>
                    <span style={{ color: 'var(--text-secondary)' }}>#7443ec (Deep Purple)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </PageContainer>
  );
}