import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Clock, Phone, ArrowRight, AlertCircle } from 'lucide-react';
import { PageContainer } from '../components/PageContainer';
import { useTheme } from '../contexts/ThemeContext';
import { useGradientShimmer } from '../hooks/useGradientShimmer';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export function ContactPage() {
  const { theme } = useTheme();
  useGradientShimmer();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    otherService: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const { error } = await supabase.from('contacts').insert({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      service: formData.service,
      other_service: formData.otherService || null,
      message: formData.message,
    });

    setSubmitting(false);

    if (error) {
      setSubmitError('Something went wrong. Please try again or email us directly at info@cogniron.com.');
      return;
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      service: '',
      otherService: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      service: prev.service === service ? '' : service
    }));
  };

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ 
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-5xl lg:text-7xl mb-6 max-w-4xl mx-auto tracking-tight" style={{ color: 'var(--text-primary)' }}>
            We'd love to <span className="gradient-text">talk!</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Let's explore how Cogniron can accelerate your quality assurance transformation and strengthen your digital delivery pipeline.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 text-white rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
                boxShadow: 'var(--shadow-accent)',
              }}
            >
              Send a Message
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@cogniron.com?subject=Cogniron%20Contact%20Enquiry"
              className="px-8 py-4 rounded-lg border transition-all duration-300 flex items-center gap-2"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                color: 'var(--text-primary)',
                borderColor: 'var(--border-color)',
              }}
            >
              <Mail className="w-5 h-5" />
              Email Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="relative py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>Got a problem?</h2>
              <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
                We're here to support you in modernizing your QA practice, scaling automation, or exploring AI-driven quality engineering.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { icon: Mail, label: 'Email', value: 'info@cogniron.com', href: 'mailto:info@cogniron.com' },
                  { icon: MapPin, label: 'US Office', value: '8787 N MacArthur BLVD STE 120-A\nIrving, TX 75063' },
                  { icon: MapPin, label: 'India Office', value: '1502B, Manjeera Trinity Corporate\nHyderabad, TG 500072' },
                  { icon: Clock, label: 'Business Hours', value: 'Monday - Friday: 10am - 7pm CST\n24/7 Support for Enterprise Clients' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: theme === 'dark'
                          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                          : 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.1))',
                      }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                    </div>
                    <div>
                      <div className="mb-1" style={{ color: 'var(--text-primary)' }}>{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="transition-colors"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats removed per content update
              <div
                className="backdrop-blur-sm rounded-2xl p-6"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <h3 className="text-lg mb-4" style={{ color: 'var(--text-primary)' }}>Why Choose Us</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Response Time', value: '<2 hours' },
                    { label: 'Client Satisfaction', value: '98%' },
                    { label: 'Enterprise Clients', value: '50+' },
                  ].map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</span>
                      <span style={{ color: 'var(--accent-primary)' }}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              */}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div
                className="backdrop-blur-sm rounded-2xl p-8"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <h2 className="text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>Send Us a Message</h2>

                {submitted && (
                  <div
                    className="mb-6 p-4 rounded-xl flex items-center"
                    style={{
                      background: theme === 'dark'
                        ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2))'
                        : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#10B981' }} />
                    <span style={{ color: 'var(--text-primary)' }}>Thank you! We'll get back to you within 24 hours.</span>
                  </div>
                )}

                {submitError && (
                  <div
                    className="mb-6 p-4 rounded-xl flex items-center"
                    style={{
                      background: theme === 'dark'
                        ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1))'
                        : 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                    }}
                  >
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#EF4444' }} />
                    <span style={{ color: 'var(--text-primary)' }}>{submitError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* ROW 1: Full Name + Work Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2" style={{ color: 'var(--text-primary)' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl transition-all"
                        style={{
                          backgroundColor: 'var(--input-bg)',
                          border: '1px solid var(--input-border)',
                          color: 'var(--text-primary)',
                        }}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2" style={{ color: 'var(--text-primary)' }}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl transition-all"
                        style={{
                          backgroundColor: 'var(--input-bg)',
                          border: '1px solid var(--input-border)',
                          color: 'var(--text-primary)',
                        }}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* ROW 2: Company Name */}
                  <div>
                    <label htmlFor="company" className="block mb-2" style={{ color: 'var(--text-primary)' }}>
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl transition-all"
                      style={{
                        backgroundColor: 'var(--input-bg)',
                        border: '1px solid var(--input-border)',
                        color: 'var(--text-primary)',
                      }}
                      placeholder="Acme Inc."
                    />
                  </div>

                  {/* ROW 5: Service Dropdown */}
                  <div>
                    <label htmlFor="service" className="block mb-2" style={{ color: 'var(--text-primary)' }}>
                      What do you need help with? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl transition-all"
                      style={{
                        backgroundColor: 'var(--input-bg)',
                        border: '1px solid var(--input-border)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <option value="">Select a service...</option>
                      <option value="CogniTuring">CogniTuring</option>
                      <option value="Gretah AI">Gretah AI</option>
                      <option value="Functional / Regression Testing">Functional / Regression Testing</option>
                      <option value="Test Automation">Test Automation</option>
                      <option value="Performance / Load Testing">Performance / Load Testing</option>
                      <option value="Security / Compliance Testing">Security / Compliance Testing</option>
                      <option value="QA Strategy / Consulting">QA Strategy / Consulting</option>
                      <option value="Other">Other</option>
                    </select>
                    
                    {/* Show "Please specify" text input when "Other" is selected */}
                    {formData.service === 'Other' && (
                      <div className="mt-3">
                        <label htmlFor="otherService" className="block mb-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          Please specify
                        </label>
                        <input
                          type="text"
                          id="otherService"
                          name="otherService"
                          value={formData.otherService}
                          onChange={handleChange}
                          placeholder="Tell us more..."
                          className="w-full px-4 py-3 rounded-xl transition-all"
                          style={{
                            backgroundColor: 'var(--input-bg)',
                            border: '1px solid var(--input-border)',
                            color: 'var(--text-primary)',
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* ROW 4: Message / Project Details */}
                  <div>
                    <label htmlFor="message" className="block mb-2" style={{ color: 'var(--text-primary)' }}>
                      Tell us about your need *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl transition-all resize-none"
                      style={{
                        backgroundColor: 'var(--input-bg)',
                        border: '1px solid var(--input-border)',
                        color: 'var(--text-primary)',
                      }}
                      placeholder="Tell us about your needs, challenges, and what success looks like for your organization..."
                    />
                  </div>


                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                      background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                      color: '#FFFFFF',
                      boxShadow: 'var(--shadow-accent)',
                    }}
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section
        className="relative py-24"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), transparent, rgba(168, 85, 247, 0.05))'
            : '#ffffff',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
              Global Presence
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              With offices around the world, we're always ready to support your quality assurance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'US Address',
                phone: '+1-945-268-5213',
                address: '8787 N MacArthur BLVD\nSTE 120-A, Irving, TX 75063',
                email: 'info@cogniron.com',
              },
              {
                title: 'India Address',
                phone: '+91 7680039529',
                address: '1502B, Manjeera Trinity Corporate\nHyderabad, TG 500072',
                email: 'info@cogniron.com',
              },
            ].map((office, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-8 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div className="text-2xl mb-6" style={{ color: 'var(--text-primary)' }}>{office.title}</div>
                <div className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="transition-colors hover:text-[var(--accent-primary)]">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="whitespace-pre-line">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="transition-colors hover:text-[var(--accent-primary)]">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
