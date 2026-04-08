import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  BarChart3,
  FileText,
  Activity,
  Lock,
  GitBranch,
  Search,
  Users,
  Target,
  TrendingUp,
  Server,
  Cloud,
  Cpu,
  Eye,
  ClipboardCheck,
  Workflow,
  ShieldAlert,
  Layers,
  Building2,
  BadgeCheck,
  Wrench,
} from 'lucide-react';
import { PageContainer } from '../components/PageContainer';
import { SectionTag } from '../components/SectionTag';
import { Tag } from '../components/Tag';
import { useTheme } from '../contexts/ThemeContext';
import { useGradientShimmer } from '../hooks/useGradientShimmer';

export function CogniTuringPage() {
  const { theme } = useTheme();
  useGradientShimmer();
  const [activePillar, setActivePillar] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ── Pillars ──────────────────────────────────────────────────────────────
  const pillars = [
    {
      tab: 'Foundational QA',
      icon: <CheckCircle2 className="w-5 h-5" />,
      headline: 'Does Your AI Actually Answer Correctly?',
      body: 'The first question any AI team needs to answer: is my model producing accurate, safe, fair, and coherent responses? CogniTuring gives you a structured evaluation engine to find out — before your users do.',
      items: [
        'Accuracy & faithfulness',
        'Hallucination detection',
        'Fairness & bias analysis',
        'Safety & harmful content',
        'Privacy & PII leakage',
        'Robustness under edge cases',
        'Instruction following',
        'Transparency & explainability',
        'Multi-turn context retention',
      ],
      cta: 'Stop guessing what your model will say next. Get scored, reproducible evidence that your AI is production-ready.',
      gradient: 'from-blue-500 to-cyan-400',
      accent: '#2563EB',
    },
    {
      tab: 'Functional QA for Agents',
      icon: <Workflow className="w-5 h-5" />,
      headline: 'Your Agent Said It Would Do Something. Did It?',
      body: "When AI systems don't just respond — they act — standard text evaluation misses everything that matters. CogniTuring intercepts function calls, validates tool sequences, models state transitions, and verifies that your agent does exactly what it's supposed to do.",
      items: [
        'Function call argument validation',
        'Expected vs. actual call sequence analysis',
        'State machine transition coverage',
        'Multi-step workflow completion scoring',
        'Excessive agency & unauthorized action detection',
        'Error recovery & resilience analysis',
      ],
      cta: 'Your agent says the right things AND takes the right actions. Now you can prove both.',
      gradient: 'from-indigo-500 to-blue-400',
      accent: '#4F46E5',
    },
    {
      tab: 'Adversarial & Security',
      icon: <ShieldAlert className="w-5 h-5" />,
      headline: 'What Happens When Someone Tries to Break It?',
      body: 'Every AI system in production is a potential attack surface. CogniTuring\'s red-team engine runs 80+ adversarial attack patterns — including every major scenario in the OWASP LLM Top 10 — so you find the exploitable failure modes before a threat actor does.',
      items: [
        'Prompt injection',
        'Jailbreak resistance',
        'Indirect injection via tool outputs',
        'System prompt extraction',
        'Tool misuse & privilege escalation',
        'Unsafe content elicitation',
        'Domain-specific abuse scenarios',
      ],
      cta: 'Know exactly how your AI behaves under pressure — and fix it before it becomes a headline.',
      gradient: 'from-red-500 to-orange-400',
      accent: '#DC2626',
    },
    {
      tab: 'Compliance & Governance',
      icon: <ClipboardCheck className="w-5 h-5" />,
      headline: 'Engineering Tested It. Now Prove It to Everyone Else.',
      body: 'Your risk team, audit team, legal team, and procurement partners don\'t speak engineering. CogniTuring automatically translates test results into governance-ready evidence — mapped to the frameworks they recognize.',
      items: [
        'ISO/IEC 42001 (AI Management System)',
        'ISO/IEC 23894 (AI Risk Management)',
        'NIST AI RMF',
        'EU AI Act',
        'OWASP LLM Top 10',
        'ISO 25010, ISO 29119, IEEE 7000-series',
        'Organization-specific AI policies',
      ],
      cta: 'One click produces a signed release scorecard, audit-ready evidence pack, and a control pass/fail narrative.',
      gradient: 'from-emerald-500 to-teal-400',
      accent: '#059669',
    },
    {
      tab: 'Continuous Monitoring',
      icon: <Activity className="w-5 h-5" />,
      headline: 'Your AI Passed QA Three Months Ago. What About Today?',
      body: 'Prompt changes. Model updates. Provider migrations. Every change is a regression risk you can\'t afford to discover in production. CogniTuring runs continuous regression testing, tracks quality over time, and alerts you the moment something drifts.',
      items: [
        'Scheduled regression runs',
        'Canary evaluations before rollout',
        'Production shadow testing',
        'Prompt-set drift monitoring',
        'Model version comparison & side-by-side validation',
        'CI/CD release gate integrations',
        'Score trend dashboards',
      ],
      cta: 'AI quality becomes a living operational metric — not a checkbox you run once before launch.',
      gradient: 'from-cyan-500 to-blue-400',
      accent: '#0891B2',
    },
  ];

  // ── How It Works steps ───────────────────────────────────────────────────
  const steps = [
    { step: 1, title: 'Connect', desc: 'Plug in your model, application, or agent endpoint. Supports hosted models, self-hosted, gateways, and agent frameworks.', icon: <Zap className="w-5 h-5" /> },
    { step: 2, title: 'Define Scope', desc: 'Set your evaluation scope, risk profile, and SME ownership. Decide what "correct" means for your specific use case.', icon: <Target className="w-5 h-5" /> },
    { step: 3, title: 'Build Your Dataset', desc: 'Import existing prompts or build scenarios from scratch. Single-turn, multi-turn, agent workflows, red-team campaigns — all supported.', icon: <FileText className="w-5 h-5" /> },
    { step: 4, title: 'AI Suggests. Humans Decide.', desc: 'CogniTuring proposes test case expansions and expected-output drafts. Your domain experts review and approve. AI accelerates. Humans own the ground truth.', icon: <Eye className="w-5 h-5" /> },
    { step: 5, title: 'Configure Dimensions & Gates', desc: 'Choose which quality, safety, functional, and compliance dimensions apply. Set pass/fail thresholds that match your release standards.', icon: <BarChart3 className="w-5 h-5" /> },
    { step: 6, title: 'Run', desc: 'Execute evaluation runs across prompts, conversations, tool calls, and workflows. Deterministic scoring where possible. AI-judge scoring where semantics matter.', icon: <Cpu className="w-5 h-5" /> },
    { step: 7, title: 'Analyze', desc: 'Review findings by dimension, severity, and business impact. Failures automatically clustered into root-cause patterns — not 38 individual tickets.', icon: <Search className="w-5 h-5" /> },
    { step: 8, title: 'Generate Evidence', desc: 'One click produces executive summaries, engineering reports, compliance evidence packs, and signed release scorecards. PASS or FAIL — computed, not debated.', icon: <ClipboardCheck className="w-5 h-5" /> },
    { step: 9, title: 'Remediate & Retest', desc: 'Track remediation, re-run regressions, validate fixes. Loop until you\'re confident.', icon: <GitBranch className="w-5 h-5" /> },
    { step: 10, title: 'Monitor Continuously', desc: 'Scheduled regression runs, CI/CD hooks, and drift alerts keep your AI quality score live — long after launch.', icon: <Activity className="w-5 h-5" /> },
  ];

  // ── Persona cards ────────────────────────────────────────────────────────
  const personas = [
    {
      icon: <Wrench className="w-7 h-7" />,
      label: 'For QA Leads & AI Engineers',
      title: 'QA & Engineering Teams',
      pain: '"We test our AI bot with a handful of prompts before every release and call it done. We know it\'s not enough. We just don\'t have anything better."',
      value: 'A structured, automated evaluation workflow that plugs into existing CI/CD pipelines. Reproducible test coverage. Scored results. Failure patterns — not failure piles.',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      label: 'For CTOs, VPs of Engineering, Head of QA',
      title: 'Engineering & AI Platform Leaders',
      pain: '"My team has three different ways of validating AI quality and none of them produce evidence I can show to our risk committee."',
      value: 'A single platform that consolidates evaluation, safety testing, agent validation, and compliance reporting. Release decisions become measurable.',
      gradient: 'from-indigo-500 to-blue-400',
    },
    {
      icon: <Shield className="w-7 h-7" />,
      label: 'For CROs, Compliance Analysts, Internal Audit',
      title: 'Risk, Compliance & Governance',
      pain: '"Engineering says the AI system is safe. I have no way to independently verify that or present it to our audit committee."',
      value: 'Standards-mapped scorecards, audit-ready evidence packs, and control pass/fail narratives — generated automatically from every evaluation run.',
      gradient: 'from-emerald-500 to-teal-400',
    },
  ];

  // ── Use cases ─────────────────────────────────────────────────────────────
  const useCases = [
    {
      title: 'Customer Support Copilot',
      desc: 'Test answer accuracy, grounding, tone consistency, fairness across demographics, and model behavior across versions — so you know what customers will experience before they do.',
      icon: <Users className="w-6 h-6" />,
      tags: ['Accuracy', 'Tone Consistency', 'Fairness'],
    },
    {
      title: 'Regulated Industry Chatbot',
      desc: 'Validate multi-turn retention, escalation behavior, privacy leakage risk, and unsafe advice scenarios. Package everything as compliance evidence your auditors and regulators will recognize.',
      icon: <Building2 className="w-6 h-6" />,
      tags: ['Finance', 'Healthcare', 'Government'],
    },
    {
      title: 'Agentic Procurement / Ops Assistant',
      desc: 'CogniTuring validates every call, every sequence, every state transition. If it miscalls a tool, skips a step, or acts beyond its authority — you\'ll know before production.',
      icon: <Workflow className="w-6 h-6" />,
      tags: ['Tool Calls', 'State Machine', 'Workflows'],
    },
    {
      title: 'Internal Enterprise Copilot',
      desc: 'As prompts change and backend models update, behavior drifts. CogniTuring benchmarks every version, catches regressions, and enforces organization-specific policy thresholds continuously.',
      icon: <Layers className="w-6 h-6" />,
      tags: ['Drift Detection', 'Regression', 'Policy'],
    },
    {
      title: 'AI Vendor Due Diligence',
      desc: 'Run a third-party AI system through CogniTuring\'s evaluation suite before you commit. Compare quality, safety, and compliance readiness across vendors with a common framework.',
      icon: <BadgeCheck className="w-6 h-6" />,
      tags: ['Vendor Comparison', 'Due Diligence', 'Evidence'],
    },
  ];

  // ── Comparison table rows ─────────────────────────────────────────────────
  const comparisonRows = [
    {
      capability: 'Foundational QA (accuracy, safety, fairness)',
      manual: '⚠️ Partial',
      observability: '✗',
      pointEval: '⚠️ Partial',
      cognituring: '✓ Full',
    },
    {
      capability: 'Multi-turn conversational testing',
      manual: '✗',
      observability: '✗',
      pointEval: '✗',
      cognituring: '✓',
    },
    {
      capability: 'Functional QA for agent tool calls',
      manual: '✗',
      observability: '⚠️ Logs only',
      pointEval: '✗',
      cognituring: '✓ Full',
    },
    {
      capability: 'Adversarial / red-team testing',
      manual: '✗',
      observability: '✗',
      pointEval: '⚠️ Some',
      cognituring: '✓ 80+ patterns',
    },
    {
      capability: 'Compliance-mapped evidence output',
      manual: '✗',
      observability: '✗',
      pointEval: '✗',
      cognituring: '✓ Auto-generated',
    },
    {
      capability: 'CI/CD release gate integration',
      manual: '✗',
      observability: '⚠️ Partial',
      pointEval: '⚠️ Some',
      cognituring: '✓',
    },
    {
      capability: 'Continuous drift monitoring',
      manual: '✗',
      observability: '⚠️ Partial',
      pointEval: '✗',
      cognituring: '✓',
    },
    {
      capability: 'AI-suggested + human-validated datasets',
      manual: '✗',
      observability: '✗',
      pointEval: '⚠️ AI only',
      cognituring: '✓ Hybrid',
    },
    {
      capability: 'Expert-led managed service option',
      manual: '✗',
      observability: '✗',
      pointEval: '✗',
      cognituring: '✓',
    },
    {
      capability: 'Usable by QA teams (not just researchers)',
      manual: '✗',
      observability: '⚠️',
      pointEval: '✗',
      cognituring: '✓',
    },
  ];

  // ── FAQ ───────────────────────────────────────────────────────────────────
  const faqs = [
    {
      q: 'How long does it take to get started?',
      a: 'Most teams are running their first evaluation within 30 minutes. You connect your AI endpoint, define your test scope, and run. No re-engineering of your existing system required.',
    },
    {
      q: 'Does CogniTuring work with any AI model or stack?',
      a: 'Yes. It connects to all major AI providers, self-hosted models, model gateways, and agent frameworks. It\'s designed to be model-agnostic and stack-agnostic by default.',
    },
    {
      q: 'Is this just another prompt testing tool?',
      a: 'No. Prompt testing is one component. CogniTuring covers foundational QA, adversarial testing, functional validation for agents, compliance evidence, and continuous monitoring — in one platform. It\'s a QA operating model, not a prompt checker.',
    },
    {
      q: 'What if we need help defining what "correct" means for our AI use case?',
      a: 'That\'s exactly what our expert service model is for. CogniTuring specialists and domain SMEs work alongside your team to define rubrics, curate datasets, and validate ground truths — particularly in high-stakes or regulated domains.',
    },
    {
      q: 'How does CogniTuring handle AI model updates and provider changes?',
      a: 'When your backend model changes — through a version update, a provider migration, or a prompt change — you re-run your evaluation suite against the new version and compare results side by side. Release gates catch regressions before they reach production.',
    },
    {
      q: 'Can we generate compliance documentation directly?',
      a: 'Yes. CogniTuring automatically produces standards-mapped scorecards, audit-ready evidence packs, executive summaries, and control pass/fail narratives — exportable in one click.',
    },
  ];

  // ── Pricing tiers ─────────────────────────────────────────────────────────
  const tiers = [
    {
      name: 'Core Platform',
      subtitle: 'For teams beginning their AI QA journey.',
      features: [
        'Foundational QA (9+ dimensions)',
        'Dataset & evaluation management',
        'Model comparison & historical tracking',
        'Dashboards & reporting',
        'Multi-provider connector',
      ],
      cta: 'Get Started',
      featured: false,
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      name: 'Platform + Service & Agents',
      subtitle: 'For teams with agents in production or security requirements.',
      features: [
        'Everything in Core, plus:',
        'Functional QA for agents & tool calls',
        'Adversarial red-team engine (80+ attacks)',
        'OWASP LLM Top 10 coverage',
        'State machine validation',
      ],
      cta: 'Talk to Us',
      featured: true,
      gradient: 'from-indigo-500 to-blue-400',
    },
    {
      name: 'Enterprise',
      subtitle: 'For organizations with compliance, governance, and expert service needs.',
      features: [
        'Everything in Tiers 1 & 2, plus:',
        'Compliance & governance evidence module',
        'Standards mapping (ISO, NIST, EU AI Act)',
        'Release sign-off workflows',
        'SSO, private deployment, custom frameworks',
        'Expert service layer & managed assurance',
      ],
      cta: 'Book a Call',
      featured: false,
      gradient: 'from-emerald-500 to-teal-400',
    },
  ];

  // ── Compliance frameworks ─────────────────────────────────────────────────
  const frameworks = [
    'ISO/IEC 42001',
    'ISO/IEC 23894',
    'NIST AI RMF',
    'EU AI Act',
    'OWASP LLM Top 10',
    'ISO 25010',
    'ISO 29119',
    'IEEE 7000-series',
  ];

  // ── Deployment options ────────────────────────────────────────────────────
  const deploymentOptions = [
    { icon: <Cloud className="w-6 h-6" />, title: 'SaaS', desc: 'Up and running in minutes. No infrastructure required.' },
    { icon: <Server className="w-6 h-6" />, title: 'Private Cloud', desc: 'Deploy inside your cloud environment. Your data stays yours.' },
    { icon: <Lock className="w-6 h-6" />, title: 'Customer-Managed VPC', desc: 'Full isolation. For the most regulated environments.' },
    { icon: <Layers className="w-6 h-6" />, title: 'Hybrid', desc: 'Mix of managed and self-hosted components for complex architectures.' },
  ];

  // ── Shared card base styles ───────────────────────────────────────────────
  const cardBase = {
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    boxShadow: theme === 'dark' ? 'var(--shadow-sm)' : '0 2px 8px rgba(0,55,106,0.04)',
    transition: 'all 300ms',
    transform: 'translateY(0)',
  };
  const cardHover = {
    boxShadow: theme === 'dark'
      ? '0 12px 32px rgba(0,0,0,0.3)'
      : '0 12px 32px rgba(0,84,166,0.12)',
    transform: 'translateY(-4px)',
  };

  // ── Brand name highlighter ────────────────────────────────────────────────
  const hl = (text: string, dark = false) =>
    text.split('CogniTuring').flatMap((part, i, arr) =>
      i < arr.length - 1
        ? [part, <strong key={i} style={{ 
            background: dark
              ? 'linear-gradient(135deg, #60A5FA 0%, #34D399 100%)'
              : 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 900,
            fontSize: '1.4em',
            letterSpacing: '0.3px',
            display: 'inline',
          }}>CogniTuring</strong>]
        : [part]
    );

  return (
    <PageContainer>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{ backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : 'var(--bg-primary)' }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 neural-pattern" style={{ opacity: theme === 'dark' ? 0.1 : 0.12 }} />
          {theme === 'light' && (
            <div
              className="absolute left-0 right-0"
              style={{
                top: '25%',
                height: '50%',
                background: 'radial-gradient(ellipse 70% 90% at 50% 50%, rgba(233,213,255,0.55) 0%, rgba(196,181,253,0.3) 30%, rgba(250,251,255,0) 65%)',
                pointerEvents: 'none',
              }}
            />
          )}
          {theme === 'dark' && (
            <div className="absolute inset-0" style={{ opacity: 0.18 }}>
              <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(37,99,235,0.35)' }} />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(16,185,129,0.25)', animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(99,102,241,0.2)', animationDelay: '2s' }} />
            </div>
          )}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="mb-8">
              <Tag icon={Shield} size="lg" variant="default">
                CogniTuring · Enterprise AI QA Platform
              </Tag>
            </div>

            <h1 className="text-5xl lg:text-7xl mb-6 max-w-4xl mx-auto" style={{ color: 'var(--text-primary)', lineHeight: '1.2', fontWeight: 700 }}>
              Your AI Is Live.
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Do You Know If It's Safe?
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong style={{ background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 900, fontSize: '1.4em', letterSpacing: '0.3px', display: 'inline' }}>CogniTuring</strong> is the enterprise QA platform for AI systems, copilots, and agents.
              Test what your AI says. Verify what it does. Prove it's ready — before it costs you.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-14">
              <Link
                to="/contact"
                className="px-8 py-4 text-white rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                  boxShadow: '0 4px 16px rgba(37,99,235,0.35)',
                }}
              >
                Book a 30-Min Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 font-medium"
                style={{
                  border: '1.5px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'transparent',
                }}
              >
                Watch a 3-Min Walkthrough
              </Link>
            </div>

            <p className="text-sm mb-10" style={{ color: 'var(--text-muted)' }}>No slides. No sales pitch. Just the product.</p>

            {/* Social Proof Bar */}
            <div
              className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 px-8 py-4 rounded-2xl mx-auto max-w-4xl text-sm font-medium"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(37,99,235,0.08)' : 'rgba(37,99,235,0.06)',
                border: '1px solid rgba(37,99,235,0.15)',
                color: 'var(--text-secondary)',
              }}
            >
              {['Works with any LLM or agent', 'Live in under 30 minutes', 'CI/CD-ready', 'ISO 42001 · NIST AI RMF · EU AI Act aligned'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#2563EB' }} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM + PRODUCT INTRO ──────────────────────────────────────── */}
      <section
        className="py-24 relative"
        style={{ backgroundColor: '#0F172A', color: '#fff' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">

            {/* Left box — The AI Quality Gap */}
            <div
              className="rounded-3xl p-8 flex flex-col gap-5"
              style={{
                backgroundColor: 'rgba(99,60,180,0.18)',
                border: '1px solid rgba(167,139,250,0.28)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="self-start">
                <SectionTag text="The AI Quality Gap" icon={AlertTriangle} />
              </div>

              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-white mb-3" style={{ lineHeight: '1.3' }}>
                  Most Teams Ship AI Without a Real QA Process.
                  <span className="block mt-1" style={{ color: '#7DD3FC' }}>
                    And Find Out What They Missed After the Fact.
                  </span>
                </h2>
                <p className="text-[14px] leading-6" style={{ color: 'rgba(148,163,184,1)' }}>
                  Traditional QA was built for deterministic software. AI is not.
                  Your bot can pass every manual test on Tuesday — and hallucinate on Wednesday.
                  {' '}{hl('CogniTuring was built to close that gap.', true)}
                </p>
              </div>

              <div className="flex flex-col gap-3 flex-1">
                {[
                  { quote: '"Most AI teams have no formal evaluation process beyond manual review."', source: 'Enterprise AI Governance Survey, 2024' },
                  { quote: '"Hallucination, bias, and prompt injection are the top three AI failure modes enterprises are unprepared for."', source: 'AI Risk Report, Gartner' },
                  { quote: '"Compliance teams report receiving insufficient evidence of AI system readiness from engineering."', source: 'Internal Audit AI Readiness Index' },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-4"
                    style={{
                      backgroundColor: 'rgba(30,58,138,0.25)',
                      border: '1px solid rgba(59,130,246,0.2)',
                    }}
                  >
                    <p className="text-[13px] italic leading-6 mb-1.5" style={{ color: 'rgba(226,232,240,0.85)' }}>{card.quote}</p>
                    <p className="text-xs font-medium tracking-wide" style={{ color: '#7DD3FC' }}>— {card.source}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right box — What CogniTuring Is */}
            <div
              className="rounded-3xl p-8 flex flex-col gap-0"
              style={{
                backgroundColor: '#EFF6FF',
                border: '1px solid #BFDBFE',
              }}
            >
              <div className="self-start mb-5">
                <SectionTag text="What CogniTuring Is" icon={Shield} />
              </div>

              <h2 className="text-xl lg:text-2xl font-bold mb-4" style={{ color: '#1E3A8A', lineHeight: '1.3' }}>
                QA for AI Systems.{' '}
                <span style={{ color: '#2563EB' }}>Finally Built the Right Way.</span>
              </h2>

              {/* Quick-stat chips */}
              <div className="flex flex-wrap gap-2 mb-5">
                {['5 Evaluation Pillars', '80+ Adversarial Patterns', 'One-Click Compliance Evidence'].map((stat, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap"
                    style={{
                      backgroundColor: 'rgba(37,99,235,0.1)',
                      color: '#1E40AF',
                      border: '1px solid rgba(37,99,235,0.25)',
                    }}
                  >
                    {stat}
                  </span>
                ))}
              </div>

              <p className="text-[14px] leading-7 mb-5" style={{ color: '#374151' }}>
                {hl('CogniTuring is an enterprise platform and expert service for testing, validating, and governing AI systems — from chatbots and copilots to multi-step agentic workflows.')} It brings the discipline of modern DevOps — structured testing, measurable coverage, audit-ready evidence — to probabilistic AI systems that change constantly underneath you.
              </p>

              {/* Key differentiators grid */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  { icon: <CheckCircle2 className="w-4 h-4 flex-shrink-0" />, text: 'Works with any AI stack or provider' },
                  { icon: <CheckCircle2 className="w-4 h-4 flex-shrink-0" />, text: 'First evaluation run in 30 minutes' },
                  { icon: <CheckCircle2 className="w-4 h-4 flex-shrink-0" />, text: 'Single-turn to agentic workflows' },
                  { icon: <CheckCircle2 className="w-4 h-4 flex-shrink-0" />, text: 'Expert service layer available' },
                  { icon: <CheckCircle2 className="w-4 h-4 flex-shrink-0" />, text: 'CI/CD & release gate integration' },
                  { icon: <CheckCircle2 className="w-4 h-4 flex-shrink-0" />, text: 'Audit-ready evidence in one click' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ color: '#2563EB', marginTop: '2px' }}>{item.icon}</span>
                    <span className="text-[13px] leading-5" style={{ color: '#4B5563' }}>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Tagline with accent bar */}
              <div
                className="flex items-start gap-3 pt-5 mt-auto"
                style={{ borderTop: '1px solid #BFDBFE' }}
              >
                <div
                  className="w-1 rounded-full flex-shrink-0 mt-0.5"
                  style={{ height: '2.25rem', background: 'linear-gradient(180deg, #2563EB 0%, #0891B2 100%)' }}
                />
                <p className="text-sm font-medium leading-relaxed" style={{ color: '#1E40AF' }}>
                  One platform. Five pillars. From first test to continuous production monitoring.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FIVE PILLARS ─────────────────────────────────────────────────── */}
      <section
        className="py-24 relative"
        style={{ backgroundColor: theme === 'dark' ? 'rgba(15,23,42,0.5)' : 'var(--bg-alternate)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14">
            <div className="mb-4">
              <SectionTag text="The Platform" icon={Layers} />
            </div>
            <h2 className="text-4xl lg:text-5xl mb-4" style={{ color: 'var(--text-primary)', fontWeight: 700, lineHeight: '1.2' }}>
              Five Pillars.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                One Control Tower for AI Quality.
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              {hl('CogniTuring covers quality, safety, and compliance — in one system — with a workflow your QA and engineering teams will actually use.')}
            </p>
          </div>

          {/* Tab row */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {pillars.map((pillar, i) => (
              <button
                key={i}
                onClick={() => setActivePillar(i)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={
                  activePillar === i
                    ? {
                        background: `linear-gradient(135deg, ${pillar.accent}22, ${pillar.accent}11)`,
                        border: `1.5px solid ${pillar.accent}55`,
                        color: pillar.accent,
                      }
                    : {
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-secondary)',
                      }
                }
              >
                {pillar.icon}
                {pillar.tab}
              </button>
            ))}
          </div>

          {/* Active pillar panel */}
          {(() => {
            const p = pillars[activePillar];
            return (
              <div
                className="rounded-2xl p-8 lg:p-12 grid lg:grid-cols-2 gap-10"
                style={cardBase}
              >
                <div>
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${p.gradient} rounded-xl flex items-center justify-center mb-6 text-white`}
                  >
                    {p.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                    {p.headline}
                  </h3>
                  <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                    {hl(p.body)}
                  </p>
                  <p
                    className="text-sm font-medium p-4 rounded-lg"
                    style={{
                      backgroundColor: theme === 'dark' ? `${p.accent}18` : `${p.accent}0D`,
                      border: `1px solid ${p.accent}33`,
                      color: p.accent,
                    }}
                  >
                    {p.cta}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {/* Stat header */}
                  <div
                    className="rounded-xl p-4 flex items-center gap-4"
                    style={{
                      background: `linear-gradient(135deg, ${p.accent}20, ${p.accent}0A)`,
                      border: `1px solid ${p.accent}35`,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center font-bold text-xl text-white"
                      style={{ background: `linear-gradient(135deg, ${p.accent}, ${p.accent}BB)` }}
                    >
                      {p.items.length}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {activePillar === 3 ? 'Compliance Frameworks' : 'Scored Dimensions'}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                        Evaluated on every run
                      </p>
                    </div>
                    <div className="ml-auto">
                      <BarChart3 className="w-6 h-6 opacity-30" style={{ color: p.accent }} />
                    </div>
                  </div>

                  {/* Vertical checklist */}
                  <div
                    className="rounded-xl p-5 flex-1"
                    style={{
                      backgroundColor: theme === 'dark' ? `${p.accent}0A` : `${p.accent}06`,
                      border: `1px solid ${p.accent}20`,
                    }}
                  >
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"
                      style={{ color: p.accent }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {activePillar === 3 ? 'Framework Coverage' : 'Tested / Scored Dimensions'}
                    </p>
                    <div className="space-y-0">
                      {p.items.map((item, idx) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 py-2"
                          style={{
                            borderBottom: idx < p.items.length - 1 ? `1px solid ${p.accent}14` : 'none',
                          }}
                        >
                          <div
                            className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                            style={{
                              backgroundColor: `${p.accent}20`,
                              border: `1px solid ${p.accent}45`,
                            }}
                          >
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: p.accent }}
                            />
                          </div>
                          <span
                            className="text-sm font-medium"
                            style={{ color: theme === 'dark' ? '#e2e8f0' : 'var(--text-primary)' }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Output preview card */}
                  <div
                    className="rounded-xl p-4 flex items-center gap-3"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: `${p.accent}22`, border: `1px solid ${p.accent}35` }}
                    >
                      <FileText className="w-4 h-4" style={{ color: p.accent }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Output: Scored Release Report
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                        PASS / FAIL scorecard generated per run
                      </p>
                    </div>
                    <div
                      className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: '#16a34a22',
                        color: '#16a34a',
                        border: '1px solid #16a34a35',
                      }}
                    >
                      PASS
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section
        className="py-24 relative"
        style={{ backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : 'var(--bg-secondary)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-4">
              <SectionTag text="The Workflow" icon={GitBranch} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)', lineHeight: '1.2' }}>
              From First Connection to{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Continuous Assurance.
              </span>
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              In ten steps your QA team will recognize.
            </p>
          </div>

          <div className="space-y-14">
            {/* Phase 1: Setup & Configuration — Steps 1–5 */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.08)',
                    color: '#2563EB',
                    border: '1px solid rgba(37,99,235,0.25)',
                  }}
                >
                  Phase 1 — Setup &amp; Configuration
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-color)' }} />
              </div>
              <div className="relative">
                <div
                  className="absolute hidden lg:block"
                  style={{
                    left: '28px',
                    right: '28px',
                    top: '27px',
                    height: '2px',
                    background: 'linear-gradient(90deg, rgba(37,99,235,0.5) 0%, rgba(37,99,235,0.5) 100%)',
                    zIndex: 0,
                  }}
                />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative">
                  {steps.slice(0, 5).map((s) => (
                    <div key={s.step} className="flex flex-col items-center text-center">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base mb-4 flex-shrink-0 relative z-10"
                        style={{
                          background: 'linear-gradient(135deg, #2563EB, #2563EB)',
                          boxShadow: theme === 'dark' ? '0 4px 16px rgba(37,99,235,0.35)' : '0 4px 16px rgba(37,99,235,0.18)',
                        }}
                      >
                        {s.step}
                      </div>
                      <div className="mb-1.5" style={{ color: '#2563EB' }}>{s.icon}</div>
                      <h4 className="text-sm font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{s.title}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{hl(s.desc)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phase 2: Evaluate, Report & Monitor — Steps 6–10 */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(6,182,212,0.15)' : 'rgba(6,182,212,0.08)',
                    color: '#06B6D4',
                    border: '1px solid rgba(6,182,212,0.25)',
                  }}
                >
                  Phase 2 — Evaluate, Report &amp; Monitor
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-color)' }} />
              </div>
              <div className="relative">
                <div
                  className="absolute hidden lg:block"
                  style={{
                    left: '28px',
                    right: '28px',
                    top: '27px',
                    height: '2px',
                    background: 'linear-gradient(90deg, rgba(6,182,212,0.5) 0%, rgba(16,185,129,0.5) 100%)',
                    zIndex: 0,
                  }}
                />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative">
                  {steps.slice(5).map((s) => (
                    <div key={s.step} className="flex flex-col items-center text-center">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base mb-4 flex-shrink-0 relative z-10"
                        style={{
                          background: 'linear-gradient(135deg, #0891B2, #06B6D4)',
                          boxShadow: theme === 'dark' ? '0 4px 16px rgba(6,182,212,0.35)' : '0 4px 16px rgba(6,182,212,0.18)',
                        }}
                      >
                        {s.step}
                      </div>
                      <div className="mb-1.5" style={{ color: '#06B6D4' }}>{s.icon}</div>
                      <h4 className="text-sm font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{s.title}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{hl(s.desc)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S BUILT FOR ───────────────────────────────────────────── */}
      <section
        className="py-24 relative"
        style={{ backgroundColor: theme === 'dark' ? 'rgba(15,23,42,0.5)' : 'var(--bg-alternate)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-4">
              <SectionTag text="Who Uses CogniTuring" icon={Users} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: 'var(--text-primary)', lineHeight: '1.2' }}>
              Built for the Teams{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Accountable for AI Quality.
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {personas.map((p, i) => {
              const personaGradients = [
                'linear-gradient(135deg, #3B82F6, #06B6D4)',
                'linear-gradient(135deg, #6366F1, #3B82F6)',
                'linear-gradient(135deg, #10B981, #14B8A6)',
              ];
              return (
              <div
                key={i}
                className="rounded-2xl p-8 hover:shadow-xl"
                style={cardBase}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardBase)}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-5"
                  style={{ background: personaGradients[i] }}
                >
                  {p.icon}
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>{p.label}</p>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{p.title}</h3>
                <p className="text-sm italic mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.pain}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.value}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────────── */}
      <section
        className="py-24 relative"
        style={{ backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : 'var(--bg-secondary)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-4">
              <SectionTag text="Use Cases" icon={Target} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: 'var(--text-primary)', lineHeight: '1.2' }}>
              The Same Problems.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Across Every Industry Deploying AI.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => {
              const ucGradients = [
                'linear-gradient(135deg, #2563EB, #06B6D4)',
                'linear-gradient(135deg, #0891B2, #06B6D4)',
                'linear-gradient(135deg, #4F46E5, #2563EB)',
                'linear-gradient(135deg, #2563EB, #0891B2)',
                'linear-gradient(135deg, #0054A6, #06B6D4)',
              ];
              const accents = ['#2563EB', '#0891B2', '#4F46E5', '#2563EB', '#0054A6'];
              const accent = accents[i];
              const isOrphan = i === useCases.length - 1 && useCases.length % 3 === 2;
              return (
                <div
                  key={i}
                  className="rounded-2xl p-6 flex flex-col hover:shadow-xl"
                  style={{
                    ...cardBase,
                    ...(isOrphan ? { gridColumn: '2 / 3' } : {}),
                  }}
                  onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
                  onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardBase)}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white mb-4 flex-shrink-0"
                    style={{ background: ucGradients[i] }}
                  >
                    {uc.icon}
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{uc.title}</h3>
                  <p className="text-sm leading-relaxed flex-grow mb-4" style={{ color: 'var(--text-secondary)' }}>{hl(uc.desc)}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {uc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: theme === 'dark' ? `${accent}20` : `${accent}10`,
                          color: accent,
                          border: `1px solid ${accent}28`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
      <section
        className="py-24 relative"
        style={{ backgroundColor: theme === 'dark' ? 'rgba(15,23,42,0.5)' : 'var(--bg-alternate)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14">
            <div className="mb-4">
              <SectionTag text="Why CogniTuring" icon={TrendingUp} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)', lineHeight: '1.2' }}>
              The Only Platform That Covers{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                All of This in One Place.
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Most teams are solving the AI quality problem with a patchwork of point tools, internal spreadsheets, and manual expert review.
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid var(--border-color)' }}
          >
            {/* Header row */}
            <div
              className="grid grid-cols-5 gap-0 text-sm font-semibold text-center py-4"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.08)',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              <div className="px-4 text-left" style={{ color: 'var(--text-primary)' }}>Capability</div>
              {['Manual Spreadsheets', 'Observability Tools', 'Point Eval Tools', 'CogniTuring'].map((h) => (
                <div key={h} className="px-2" style={{ color: h === 'CogniTuring' ? '#2563EB' : 'var(--text-secondary)' }}>
                  {h}
                </div>
              ))}
            </div>

            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-5 gap-0 text-sm text-center items-center py-3.5"
                style={{
                  borderBottom: i < comparisonRows.length - 1 ? '1px solid var(--border-color)' : 'none',
                  backgroundColor: i % 2 === 0
                    ? 'transparent'
                    : theme === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)',
                }}
              >
                <div className="px-4 text-left text-xs" style={{ color: 'var(--text-secondary)' }}>{row.capability}</div>
                <div className="px-2" style={{ color: row.manual === '✗' ? (theme === 'dark' ? '#6b7280' : '#9ca3af') : 'var(--text-secondary)' }}>{row.manual}</div>
                <div className="px-2" style={{ color: row.observability === '✗' ? (theme === 'dark' ? '#6b7280' : '#9ca3af') : 'var(--text-secondary)' }}>{row.observability}</div>
                <div className="px-2" style={{ color: row.pointEval === '✗' ? (theme === 'dark' ? '#6b7280' : '#9ca3af') : 'var(--text-secondary)' }}>{row.pointEval}</div>
                <div className="px-2 font-semibold" style={{ color: '#2563EB' }}>{row.cognituring}</div>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-base font-medium max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: '#2563EB', fontWeight: 700 }}>CogniTuring is the only platform</strong> that gives QA teams, engineering leaders, and governance functions a single, shared evidence base — from first test run to ongoing production monitoring.
          </p>
        </div>
      </section>

      {/* ── PLATFORM + SERVICE ───────────────────────────────────────────── */}
      <section
        className="py-24 relative"
        style={{ backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : 'var(--bg-secondary)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14">
            <div className="mb-4">
              <SectionTag text="How We Deliver" icon={Layers} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: 'var(--text-primary)', lineHeight: '1.2' }}>
              Software That Works Out of the Box.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Experts When the Stakes Are Higher.
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Platform */}
            <div className="rounded-2xl p-8" style={cardBase}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5"
                style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}>
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Run It Yourself</h3>
              <p className="text-sm mb-5" style={{ color: 'var(--text-muted)' }}>For teams that want AI quality workflows in-house</p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {hl('CogniTuring is a platform your QA engineers can operate directly. Connect your AI endpoint, import or generate test datasets, configure dimensions and gates, and get scored evaluation results with one click.')}
              </p>
              <ul className="space-y-2.5">
                {['7-stage evaluation workflow', '9+ evaluation dimensions', 'AI-judge + deterministic hybrid scoring', 'Multi-provider connector', 'CI/CD pipeline hooks', 'SQLite persistence, exportable evidence'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#2563EB' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service */}
            <div className="rounded-2xl p-8" style={cardBase}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5"
                style={{ background: 'linear-gradient(135deg, #2563EB, #EC4899)' }}>
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Work With Our Experts</h3>
              <p className="text-sm mb-5" style={{ color: 'var(--text-muted)' }}>For organizations where evaluation stakes require domain expertise</p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {hl("AI assurance is rarely just a tooling problem. When the quality of evaluation depends on deep business context — healthcare, financial services, legal, regulated environments — CogniTuring's specialists work alongside your team.")}
              </p>
              <ul className="space-y-2.5">
                {['Evaluation strategy definition', 'Domain-specific rubric development', 'Dataset curation and gold-set validation', 'Ground truth sign-off for release-critical scenarios', 'Managed assurance programs and ongoing support', 'Customer-facing assurance artifacts'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#2563EB' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center mt-8 text-sm" style={{ color: 'var(--text-muted)' }}>
            Most enterprise customers use both. The platform accelerates; the experts validate what matters most.
          </p>
        </div>
      </section>

      {/* ── COMPLIANCE FRAMEWORKS ────────────────────────────────────────── */}
      <section
        className="py-20 relative"
        style={{ backgroundColor: theme === 'dark' ? 'rgba(15,23,42,0.5)' : 'var(--bg-alternate)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="mb-4">
              <SectionTag text="Compliance-Ready" icon={FileText} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              Built-In Mapping to the Frameworks Your Governance Team Is Already Using.
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              {hl('CogniTuring automatically maps test outcomes to the standards that matter — no manual compliance layer required.')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {frameworks.map((fw) => (
              <div
                key={fw}
                className="px-5 py-3 rounded-xl text-sm font-semibold"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(37,99,235,0.12)' : 'rgba(37,99,235,0.07)',
                  border: '1px solid rgba(37,99,235,0.25)',
                  color: theme === 'dark' ? '#93C5FD' : '#2563EB',
                }}
              >
                {fw}
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm" style={{ color: 'var(--text-muted)' }}>
            Plus support for organization-specific AI policy frameworks. Your standards. Your thresholds. Mapped automatically.
          </p>
        </div>
      </section>

      {/* ── ENTERPRISE / DEPLOYMENT ──────────────────────────────────────── */}
      <section
        className="py-24 relative"
        style={{ backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : 'var(--bg-secondary)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14">
            <div className="mb-4">
              <SectionTag text="Enterprise-Ready" icon={Building2} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: 'var(--text-primary)', lineHeight: '1.2' }}>
              Deploy Your Way.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                On Your Terms.
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {deploymentOptions.map((opt, i) => (
              <div key={i} className="rounded-2xl p-6 text-center hover:shadow-lg" style={cardBase}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardBase)}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(6,182,212,0.1))', border: '1px solid rgba(37,99,235,0.2)', color: '#2563EB' }}>
                  {opt.icon}
                </div>
                <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{opt.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{opt.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Role-based access control',
              'Audit logs',
              'Encrypted data handling',
              'Region-specific deployment',
              'Configurable retention policies',
              'SSO integration',
              'Custom framework mapping',
              'Enterprise SLAs and onboarding',
            ].map((feat) => (
              <div key={feat} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#2563EB' }} />
                {feat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section
        className="py-24 relative"
        style={{ backgroundColor: theme === 'dark' ? 'rgba(15,23,42,0.5)' : 'var(--bg-alternate)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
              The Questions We Get Most Often.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-card)' }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-base font-semibold pr-4" style={{ color: 'var(--text-primary)' }}>{hl(faq.q)}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#2563EB' }} />
                    : <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--text-muted)' }} />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{hl(faq.a)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section
        className="py-24 relative"
        style={{ backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : 'var(--bg-secondary)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14">
            <div className="mb-4">
              <SectionTag text="Packaging" icon={BarChart3} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)', lineHeight: '1.2' }}>
              Start With What You Need.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Expand as You Grow.
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              {hl("CogniTuring is modular by design — whether you're starting with foundational QA for a single AI application or building a full enterprise assurance program.")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-7">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 flex flex-col"
                style={{
                  ...cardBase,
                  ...(tier.featured ? {
                    border: '2px solid rgba(37,99,235,0.5)',
                    boxShadow: theme === 'dark'
                      ? '0 0 0 1px rgba(37,99,235,0.3), 0 20px 48px rgba(37,99,235,0.15)'
                      : '0 0 0 1px rgba(37,99,235,0.15), 0 20px 48px rgba(37,99,235,0.1)',
                  } : {}),
                }}
              >
                {tier.featured && (
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-4 px-2.5 py-1 rounded-full w-fit"
                    style={{ backgroundColor: 'rgba(37,99,235,0.15)', color: '#2563EB' }}
                  >
                    Most Popular
                  </div>
                )}
                <div className={`w-12 h-12 bg-gradient-to-br ${tier.gradient} rounded-xl flex items-center justify-center text-white mb-5`}>
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{tier.name}</h3>
                <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>{tier.subtitle}</p>
                <ul className="space-y-3 flex-grow mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#2563EB' }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block text-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
                  style={
                    tier.featured
                      ? { background: 'linear-gradient(135deg, #2563EB 0%, #2563EB 100%)', color: '#fff', boxShadow: '0 4px 12px rgba(37,99,235,0.3)' }
                      : { border: '1.5px solid var(--border-color)', color: 'var(--text-secondary)' }
                  }
                >
                  {tier.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageContainer>
  );
}
