"use client";

import React from 'react';
import { TestimonialSlider } from '../components/ui/TestimonialSlider';
import { useTheme } from '../contexts/ThemeContext';

/**
 * Testimonial Slider Demo Page
 * 
 * Showcases the TestimonialSlider component in both light and dark themes
 * with detailed specifications and usage examples.
 */
export function TestimonialSliderDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div 
      className="min-h-screen py-12 px-4 transition-colors duration-300"
      style={{
        backgroundColor: theme === 'dark' ? '#0A0F1C' : '#F5F7FA',
      }}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 
            className="text-4xl md:text-5xl font-bold transition-colors duration-300"
            style={{
              color: theme === 'dark' ? '#FFFFFF' : '#0D2344',
            }}
          >
            Testimonial Slider Component
          </h1>
          <p 
            className="text-lg max-w-3xl mx-auto transition-colors duration-300"
            style={{
              color: theme === 'dark' ? '#B5C3D0' : '#44546A',
            }}
          >
            A carousel-style testimonial slider with three cards featuring depth effects,
            smooth transitions, and theme-aware styling.
          </p>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="px-6 py-3 rounded-lg transition-all duration-300 font-medium"
            style={{
              background: theme === 'dark' 
                ? 'linear-gradient(135deg, #1E2438, #2A3248)' 
                : 'linear-gradient(135deg, #FFFFFF, #F0F4FF)',
              color: theme === 'dark' ? '#FFFFFF' : '#0D2344',
              border: theme === 'dark' 
                ? '1px solid rgba(60, 115, 255, 0.3)' 
                : '1px solid rgba(220, 229, 240, 0.8)',
              boxShadow: theme === 'dark'
                ? '0 4px 12px rgba(0, 0, 0, 0.3)'
                : '0 4px 12px rgba(0, 0, 0, 0.08)',
            }}
          >
            {theme === 'dark' ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
          </button>
        </div>

        {/* Live Demo */}
        <div>
          <h2 
            className="text-2xl font-semibold mb-6 transition-colors duration-300"
            style={{
              color: theme === 'dark' ? '#FFFFFF' : '#0D2344',
            }}
          >
            Live Demo - {theme === 'dark' ? 'Dark' : 'Light'} Theme
          </h2>
          <TestimonialSlider />
        </div>

        {/* Specifications */}
        <div 
          className="rounded-3xl p-8 transition-all duration-300"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, #141A2A, #1E2438)'
              : 'linear-gradient(135deg, #FFFFFF, #F8FBFF)',
            border: theme === 'dark'
              ? '1px solid rgba(60, 115, 255, 0.3)'
              : '1px solid rgba(220, 229, 240, 0.8)',
            boxShadow: theme === 'dark'
              ? '0 4px 24px rgba(0, 0, 0, 0.5)'
              : '0 4px 24px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 
            className="text-xl font-semibold mb-4 transition-colors duration-300"
            style={{
              color: theme === 'dark' ? '#FFFFFF' : '#0D2344',
            }}
          >
            Design Specifications
          </h3>

          <div className="space-y-6">
            {/* Layout Section */}
            <div>
              <h4 
                className="font-medium mb-2 transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? '#B5C3D0' : '#44546A',
                }}
              >
                Layout:
              </h4>
              <ul 
                className="space-y-1 text-sm transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? '#8A9BAF' : '#5A6C7D',
                }}
              >
                <li>• Center card is highlighted and slightly larger (scale: 1.0)</li>
                <li>• Left and right cards are scaled down (scale: 0.85) with blur effect</li>
                <li>• Side cards have reduced opacity (50%) for depth</li>
                <li>• Smooth scale-up animation when card becomes active</li>
              </ul>
            </div>

            {/* Card Content Section */}
            <div>
              <h4 
                className="font-medium mb-2 transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? '#B5C3D0' : '#44546A',
                }}
              >
                Card Content:
              </h4>
              <ul 
                className="space-y-1 text-sm transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? '#8A9BAF' : '#5A6C7D',
                }}
              >
                <li>• Circular profile image: 56x56px (top-left)</li>
                <li>• Name and designation next to image</li>
                <li>• Testimonial paragraph in quotation marks</li>
                <li>• Rounded corners: 24px border-radius</li>
                <li>• Min height: 360px (inactive), 380px (active)</li>
              </ul>
            </div>

            {/* Light Theme Section */}
            <div>
              <h4 
                className="font-medium mb-2 transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? '#B5C3D0' : '#44546A',
                }}
              >
                Light Theme Styling:
              </h4>
              <ul 
                className="space-y-1 text-sm font-mono transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? '#8A9BAF' : '#5A6C7D',
                }}
              >
                <li>• Background: linear-gradient(#E9F2FF → #F8F3FF)</li>
                <li>• Card background: linear-gradient(#FFFFFF → #F8FBFF)</li>
                <li>• Shadow: 0 4px 24px rgba(0, 0, 0, 0.1)</li>
                <li>• Title color: #0D2344 (Dark Navy)</li>
                <li>• Body text: #44546A</li>
                <li>• Image border: 2px solid #DCE5F0</li>
              </ul>
            </div>

            {/* Dark Theme Section */}
            <div>
              <h4 
                className="font-medium mb-2 transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? '#B5C3D0' : '#44546A',
                }}
              >
                Dark Theme Styling:
              </h4>
              <ul 
                className="space-y-1 text-sm font-mono transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? '#8A9BAF' : '#5A6C7D',
                }}
              >
                <li>• Background: linear-gradient(#0A1020 → #181C30)</li>
                <li>• Card background: linear-gradient(#141A2A → #1E2438)</li>
                <li>• Shadow: 0 4px 24px rgba(0, 0, 0, 0.5) + inner shadow</li>
                <li>• Title color: #FFFFFF</li>
                <li>• Body text: #B5C3D0</li>
                <li>• Image border: 2px solid rgba(60, 115, 255, 0.4)</li>
                <li>• Image glow: 0 0 16px rgba(60, 115, 255, 0.4)</li>
              </ul>
            </div>

            {/* Features Section */}
            <div>
              <h4 
                className="font-medium mb-2 transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? '#B5C3D0' : '#44546A',
                }}
              >
                Features:
              </h4>
              <ul 
                className="space-y-1 text-sm transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? '#8A9BAF' : '#5A6C7D',
                }}
              >
                <li>✓ Auto-play with 7-second delay</li>
                <li>✓ Pause on hover</li>
                <li>✓ Navigation arrows</li>
                <li>✓ Pagination dots with active indicator</li>
                <li>✓ Smooth transitions (500ms duration)</li>
                <li>✓ Responsive design (mobile-first)</li>
                <li>✓ Accessible (ARIA labels, keyboard support)</li>
                <li>✓ Theme-aware styling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Usage Example */}
        <div 
          className="rounded-3xl p-8 transition-all duration-300"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, #141A2A, #1E2438)'
              : 'linear-gradient(135deg, #FFFFFF, #F8FBFF)',
            border: theme === 'dark'
              ? '1px solid rgba(60, 115, 255, 0.3)'
              : '1px solid rgba(220, 229, 240, 0.8)',
            boxShadow: theme === 'dark'
              ? '0 4px 24px rgba(0, 0, 0, 0.5)'
              : '0 4px 24px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 
            className="text-xl font-semibold mb-4 transition-colors duration-300"
            style={{
              color: theme === 'dark' ? '#FFFFFF' : '#0D2344',
            }}
          >
            Usage Example
          </h3>

          <pre
            className="p-6 rounded-lg overflow-x-auto text-sm transition-colors duration-300"
            style={{
              background: theme === 'dark' ? '#0A0F1C' : '#F5F7FA',
              color: theme === 'dark' ? '#B5C3D0' : '#44546A',
              border: theme === 'dark'
                ? '1px solid rgba(60, 115, 255, 0.2)'
                : '1px solid rgba(220, 229, 240, 0.6)',
            }}
          >
            <code>{`import { TestimonialSlider } from '@/components/ui/TestimonialSlider';

function YourPage() {
  return (
    <section>
      <TestimonialSlider />
    </section>
  );
}

// With custom testimonials and auto-play delay
function CustomExample() {
  const testimonials = [
    {
      name: 'Your Name',
      designation: 'Your Title at Company',
      image: 'https://example.com/image.jpg',
      text: 'Your testimonial text here...'
    },
    // ... more testimonials
  ];

  return (
    <TestimonialSlider 
      testimonials={testimonials}
      autoPlayDelay={5000} // 5 seconds
    />
  );
}`}</code>
          </pre>
        </div>

        {/* Color Palette Reference */}
        <div 
          className="rounded-3xl p-8 transition-all duration-300"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, #141A2A, #1E2438)'
              : 'linear-gradient(135deg, #FFFFFF, #F8FBFF)',
            border: theme === 'dark'
              ? '1px solid rgba(60, 115, 255, 0.3)'
              : '1px solid rgba(220, 229, 240, 0.8)',
            boxShadow: theme === 'dark'
              ? '0 4px 24px rgba(0, 0, 0, 0.5)'
              : '0 4px 24px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 
            className="text-xl font-semibold mb-6 transition-colors duration-300"
            style={{
              color: theme === 'dark' ? '#FFFFFF' : '#0D2344',
            }}
          >
            Color Palette
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Light Theme Colors */}
            <div>
              <h4 
                className="font-medium mb-4 transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? '#B5C3D0' : '#44546A',
                }}
              >
                Light Theme
              </h4>
              <div className="space-y-3">
                {[
                  { name: 'Background Start', color: '#E9F2FF' },
                  { name: 'Background End', color: '#F8F3FF' },
                  { name: 'Card Background', color: '#FFFFFF' },
                  { name: 'Title Color', color: '#0D2344' },
                  { name: 'Body Color', color: '#44546A' },
                  { name: 'Border Color', color: '#DCE5F0' },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-lg border-2"
                      style={{
                        backgroundColor: item.color,
                        borderColor: theme === 'dark' ? '#2A3248' : '#DCE5F0',
                      }}
                    />
                    <div>
                      <div 
                        className="text-sm font-medium transition-colors duration-300"
                        style={{
                          color: theme === 'dark' ? '#FFFFFF' : '#0D2344',
                        }}
                      >
                        {item.name}
                      </div>
                      <div 
                        className="text-xs font-mono transition-colors duration-300"
                        style={{
                          color: theme === 'dark' ? '#8A9BAF' : '#5A6C7D',
                        }}
                      >
                        {item.color}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark Theme Colors */}
            <div>
              <h4 
                className="font-medium mb-4 transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? '#B5C3D0' : '#44546A',
                }}
              >
                Dark Theme
              </h4>
              <div className="space-y-3">
                {[
                  { name: 'Background Start', color: '#0A1020' },
                  { name: 'Background End', color: '#181C30' },
                  { name: 'Card Background', color: '#141A2A' },
                  { name: 'Title Color', color: '#FFFFFF' },
                  { name: 'Body Color', color: '#B5C3D0' },
                  { name: 'Accent Blue', color: '#3C73FF' },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-lg border-2"
                      style={{
                        backgroundColor: item.color,
                        borderColor: theme === 'dark' ? '#2A3248' : '#DCE5F0',
                      }}
                    />
                    <div>
                      <div 
                        className="text-sm font-medium transition-colors duration-300"
                        style={{
                          color: theme === 'dark' ? '#FFFFFF' : '#0D2344',
                        }}
                      >
                        {item.name}
                      </div>
                      <div 
                        className="text-xs font-mono transition-colors duration-300"
                        style={{
                          color: theme === 'dark' ? '#8A9BAF' : '#5A6C7D',
                        }}
                      >
                        {item.color}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSliderDemo;
