import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import LoadingSpinner from "./components/ui/snow-ball-loading-spinner";
import { GlobalLoadingProvider } from "./components/providers/global-loading-provider";

// Enhanced loading component with global overlay styling
const PageLoader = () => (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/60 dark:bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300"
    style={{
      isolation: 'isolate',
    }}
    aria-live="polite"
    aria-busy="true"
    role="status"
  >
    <LoadingSpinner />
    <span className="sr-only">Loading page, please wait...</span>
  </div>
);

// Lazy load all pages
const HomePage = lazy(() => import("./pages/HomePage").then(module => ({ default: module.HomePage })));
const QAServicesPage = lazy(() => import("./pages/services/QAServicesPage").then(module => ({ default: module.QAServicesPage })));
const PQLMPage = lazy(() => import("./pages/services/PQLMPage").then(module => ({ default: module.PQLMPage })));
const UXAssurancePage = lazy(() => import("./pages/services/UXAssurancePage").then(module => ({ default: module.UXAssurancePage })));
const XFirstPage = lazy(() => import("./pages/services/XFirstPage").then(module => ({ default: module.XFirstPage })));
const CognitiveAssurancePage = lazy(() => import("./pages/services/CognitiveAssurancePage").then(module => ({ default: module.CognitiveAssurancePage })));
const CRMPage = lazy(() => import("./pages/services/CRMPage").then(module => ({ default: module.CRMPage })));
const ServicesOverviewPage = lazy(() => import("./pages/ServicesOverviewPage").then(module => ({ default: module.ServicesOverviewPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(module => ({ default: module.ContactPage })));
const InsightsPage = lazy(() => import("./pages/InsightsPage").then(module => ({ default: module.InsightsPage })));
const BlogPage = lazy(() => import("./pages/BlogPage").then(module => ({ default: module.BlogPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(module => ({ default: module.AboutPage })));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage").then(module => ({ default: module.CaseStudiesPage })));
const PlatformPage = lazy(() => import("./pages/PlatformPage").then(module => ({ default: module.PlatformPage })));
const CareersPage = lazy(() => import("./pages/CareersPage").then(module => ({ default: module.CareersPage })));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage").then(module => ({ default: module.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage").then(module => ({ default: module.TermsOfServicePage })));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage").then(module => ({ default: module.CookiePolicyPage })));
const CaseStudyDetailPage = lazy(() => import("./pages/CaseStudyDetailPage").then(module => ({ default: module.CaseStudyDetailPage })));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage").then(module => ({ default: module.BlogDetailPage })));
const InsightDetailPage = lazy(() => import("./pages/InsightDetailPage").then(module => ({ default: module.InsightDetailPage })));
const SuccessStoryDetailPage = lazy(() => import("./pages/SuccessStoryDetailPage").then(module => ({ default: module.SuccessStoryDetailPage })));
const ArticleStyleGuidePage = lazy(() => import("./pages/ArticleStyleGuidePage").then(module => ({ default: module.ArticleStyleGuidePage })));
const ExampleArticleDetailPage = lazy(() => import("./pages/ExampleArticleDetailPage").then(module => ({ default: module.ExampleArticleDetailPage })));

// Blog Articles
const HowEtlTestingHelpsEnterprisesPage = lazy(() => import("./pages/blog/pqlm/how-etl-testing-helps-enterprises-maintain-data-accuracy-and-compliance").then(m => ({ default: m.HowEtlTestingHelpsEnterprisesPage })));
const TheFutureOfTestDataManagementAiDrivenAutomationAndCompliance = lazy(() => import("./pages/blog/pqlm/the-future-of-test-data-management-ai-driven-automation-and-compliance").then(m => ({ default: m.TheFutureOfTestDataManagementAiDrivenAutomationAndCompliance })));
const EnsuringBusinessCriticalSoftwareMeetsUserExpectationsWithUAT = lazy(() => import("./pages/blog/pqlm/ensuring-business-critical-software-meets-user-expectations-with-uat").then(m => ({ default: m.EnsuringBusinessCriticalSoftwareMeetsUserExpectationsWithUAT })));
const WhyTestEnvironmentManagementIsCriticalForScalableQAInEnterprises = lazy(() => import("./pages/blog/pqlm/why-test-environment-management-is-critical-for-scalable-qa-in-enterprises").then(m => ({ default: m.WhyTestEnvironmentManagementIsCriticalForScalableQAInEnterprises })));
const EnsuringSmoothPaymentsAndSaferTransactionsACognironViewOnQAForDigitalPaymentsAndPoSSystems = lazy(() => import("./pages/blog/pqlm/ensuring-smooth-payments-and-safer-transactions-a-cogniron-view-on-qa-for-digital-payments-and-pos-systems").then(m => ({ default: m.EnsuringSmoothPaymentsAndSaferTransactionsACognironViewOnQAForDigitalPaymentsAndPoSSystems })));
const RPAThatWorksWhyTestingIsTheRealKeyToReliability = lazy(() => import("./pages/blog/pqlm/rpa-that-works-why-testing-is-the-real-key-to-reliability").then(m => ({ default: m.RPAThatWorksWhyTestingIsTheRealKeyToReliability })));
const TheNewEraOfQualityIntelligenceLedAssurance = lazy(() => import("./pages/blog/x-first/the-new-era-of-quality-intelligence-led-assurance").then(m => ({ default: m.TheNewEraOfQualityIntelligenceLedAssurance })));
const ApiTestingBestPracticesHowToPreventIntegrationFailures = lazy(() => import("./pages/blog/x-first/api-testing-best-practices-how-to-prevent-integration-failures").then(m => ({ default: m.ApiTestingBestPracticesHowToPreventIntegrationFailures })));
const TheNewEraOfMobileAppTestingHow5GAndAIAutomationAreRedefiningQualityAtSpeed = lazy(() => import("./pages/blog/x-first/the-new-era-of-mobile-app-testing-how-5g-and-ai-automation-are-redefining-quality-at-speed"));
const LoadTestingVsStressTestingHowToEnsurePeakSoftwarePerformance = lazy(() => import("./pages/blog/x-first/load-testing-vs-stress-testing-how-to-ensure-peak-software-performance").then(m => ({ default: m.LoadTestingVsStressTestingHowToEnsurePeakSoftwarePerformance })));
const BeyondAutomationHowGenaiIsRewritingTheRulesOfTestCaseDesign = lazy(() => import("./pages/blog/x-first/beyond-automation-how-genai-is-rewriting-the-rules-of-test-case-design").then(m => ({ default: m.BeyondAutomationHowGenaiIsRewritingTheRulesOfTestCaseDesign })));
const FunctionalTestingUpgradedAisRoleInIntelligentAutomation = lazy(() => import("./pages/blog/x-first/functional-testing-upgraded-ais-role-in-intelligent-automation").then(m => ({ default: m.FunctionalTestingUpgradedAisRoleInIntelligentAutomation })));
const AiIsShippingFasterThanQuality = lazy(() => import("./pages/blog/x-first/ai-is-shipping-faster-than-quality").then(m => ({ default: m.AiIsShippingFasterThanQuality })));
const BuildVerificationTestingTheFirstLineOfDefenseInQualityEngineering = lazy(() => import("./pages/blog/x-first/build-verification-testing-the-first-line-of-defense-in-quality-engineering").then(m => ({ default: m.BuildVerificationTestingTheFirstLineOfDefenseInQualityEngineering })));
const AgenticAiForTestOptimizationEnhancingSpeedAndAccuracyInSoftwareQA = lazy(() => import("./pages/blog/cognitive-assurance/agentic-ai-for-test-optimization-enhancing-speed-and-accuracy-in-software-qa").then(m => ({ default: m.AgenticAiForTestOptimizationEnhancingSpeedAndAccuracyInSoftwareQA })));
const AiDrivenDecisionMakingInQE = lazy(() => import("./pages/blog/cognitive-assurance/ai-driven-decision-making-in-qe").then(m => ({ default: m.AiDrivenDecisionMakingInQE })));
const WhyEveryEnterpriseNeedsAnAIPoweredTestAutomationStrategy = lazy(() => import("./pages/blog/cognitive-assurance/why-every-enterprise-needs-an-ai-powered-test-automation-strategy").then(m => ({ default: m.WhyEveryEnterpriseNeedsAnAIPoweredTestAutomationStrategy })));
const TheRoleOfLargeLanguageModelsInSoftwareTestingAndDebugging = lazy(() => import("./pages/blog/cognitive-assurance/the-role-of-large-language-models-in-software-testing-and-debugging").then(m => ({ default: m.TheRoleOfLargeLanguageModelsInSoftwareTestingAndDebugging })));
const EnsuringExplainabilityAndTransparencyInAiMlSystemsThroughRobustTesting = lazy(() => import("./pages/blog/cognitive-assurance/ensuring-explainability-and-transparency-in-aiml-systems-through-robust-testing").then(m => ({ default: m.EnsuringExplainabilityAndTransparencyInAiMlSystemsThroughRobustTesting })));
const BeyondComplianceHowAccessibilityTestingBecameATrueBusinessAdvantage = lazy(() => import("./pages/blog/ux-assurance/beyond-compliance-how-accessibility-testing-became-a-true-business-advantage").then(m => ({ default: m.BeyondComplianceHowAccessibilityTestingBecameATrueBusinessAdvantage })));
const EnsuringCompatibilityInTheEraOfMultiDeviceDigitalExperiences = lazy(() => import("./pages/blog/ux-assurance/ensuring-compatibility-in-the-era-of-multi-device-digital-experiences"));
const IoTQualityAssuranceBuildingTrustThroughSeamlessUserExperiences = lazy(() => import("./pages/blog/ux-assurance/iot-quality-assurance-building-trust-through-seamless-user-experiences"));
const EnsuringSeamlessUserExperienceWithAiPoweredUxUiTesting = lazy(() => import("./pages/blog/ux-assurance/ensuring-seamless-user-experience-with-ai-powered-ux-ui-testing").then(m => ({ default: m.EnsuringSeamlessUserExperienceWithAiPoweredUxUiTesting })));
const WhyTechnologyAloneIsntEnough = lazy(() => import("./pages/blog/crm/why-technology-alone-isnt-enough-to-fix-customer-operations"));
const CrmIsntAToolAnymoreItsInfrastructure = lazy(() => import("./pages/blog/crm/crm-isnt-a-tool-anymore-its-infrastructure"));
const TestDataManagementAiCompliance = lazy(() => import("./pages/blog/ai-ml/test-data-management-ai-compliance"));
const ReliabilityOverAutonomyWhy2026DemandsDisciplinedAITestingAgents = lazy(() => import("./pages/blog/gretah-ai/reliability-over-autonomy-why-2026-demands-disciplined-ai-testing-agents").then(m => ({ default: m.ReliabilityOverAutonomyWhy2026DemandsDisciplinedAITestingAgents })));
const AIInHealthcareWhy90PercentInitiativesFailAndHowToFixIt = lazy(() => import("./pages/blog/gretah-ai/ai-in-healthcare-why-90-percent-initiatives-fail-and-how-to-fix-it").then(m => ({ default: m.AIInHealthcareWhy90PercentInitiativesFailAndHowToFixIt })));

// PQLM Individual Service Pages
const RequirementAmbiguityEngineeringPage = lazy(() => import("./pages/services/pqlm/RequirementAmbiguityEngineeringPage").then(m => ({ default: m.RequirementAmbiguityEngineeringPage })));
const FunctionalTestingPage = lazy(() => import("./pages/services/pqlm/FunctionalTestingPage").then(m => ({ default: m.FunctionalTestingPage })));
const IntegrationTestingPage = lazy(() => import("./pages/services/pqlm/IntegrationTestingPage").then(m => ({ default: m.IntegrationTestingPage })));
const CompatibilityTestingPage = lazy(() => import("./pages/services/pqlm/CompatibilityTestingPage").then(m => ({ default: m.CompatibilityTestingPage })));
const BuildVerificationTestingPage = lazy(() => import("./pages/services/pqlm/BuildVerificationTestingPage").then(m => ({ default: m.BuildVerificationTestingPage })));
const UserAcceptanceTestingPage = lazy(() => import("./pages/services/pqlm/UserAcceptanceTestingPage").then(m => ({ default: m.UserAcceptanceTestingPage })));
const ReadinessTestingPage = lazy(() => import("./pages/services/pqlm/ReadinessTestingPage").then(m => ({ default: m.ReadinessTestingPage })));
const TestOpsPage = lazy(() => import("./pages/services/pqlm/TestOpsPage").then(m => ({ default: m.TestOpsPage })));
const ProcessGovernancePage = lazy(() => import("./pages/services/pqlm/ProcessGovernancePage").then(m => ({ default: m.ProcessGovernancePage })));
const ProductionMonitoringPage = lazy(() => import("./pages/services/pqlm/ProductionMonitoringPage").then(m => ({ default: m.ProductionMonitoringPage })));
const DevOpsToolChainPage = lazy(() => import("./pages/services/pqlm/DevOpsToolChainPage").then(m => ({ default: m.DevOpsToolChainPage })));

// UX Assurance Individual Service Pages
const AccessibilityTestingPage = lazy(() => import("./pages/services/ux-assurance/AccessibilityTestingPage").then(m => ({ default: m.AccessibilityTestingPage })));
const ABTestingPage = lazy(() => import("./pages/services/ux-assurance/ABTestingPage").then(m => ({ default: m.ABTestingPage })));
const UXCompatibilityTestingPage = lazy(() => import("./pages/services/ux-assurance/UXCompatibilityTestingPage").then(m => ({ default: m.UXCompatibilityTestingPage })));
const UXUserAcceptanceTestingPage = lazy(() => import("./pages/services/ux-assurance/UXUserAcceptanceTestingPage").then(m => ({ default: m.UXUserAcceptanceTestingPage })));
const UXReadinessTestingPage = lazy(() => import("./pages/services/ux-assurance/UXReadinessTestingPage").then(m => ({ default: m.UXReadinessTestingPage })));

// X-First Individual Service Pages
const XFirstRequirementAmbiguityPage = lazy(() => import("./pages/services/x-first/XFirstRequirementAmbiguityPage").then(m => ({ default: m.XFirstRequirementAmbiguityPage })));
const TestAutomationPage = lazy(() => import("./pages/services/x-first/TestAutomationPage").then(m => ({ default: m.TestAutomationPage })));
const PerformanceEngineeringPage = lazy(() => import("./pages/services/x-first/PerformanceEngineeringPage").then(m => ({ default: m.PerformanceEngineeringPage })));
const SecurityEngineeringPage = lazy(() => import("./pages/services/x-first/SecurityEngineeringPage").then(m => ({ default: m.SecurityEngineeringPage })));
const XFirstBuildVerificationPage = lazy(() => import("./pages/services/x-first/XFirstBuildVerificationPage").then(m => ({ default: m.XFirstBuildVerificationPage })));
const XFirstFunctionalTestingPage = lazy(() => import("./pages/services/x-first/XFirstFunctionalTestingPage").then(m => ({ default: m.XFirstFunctionalTestingPage })));
const XFirstIntegrationTestingPage = lazy(() => import("./pages/services/x-first/XFirstIntegrationTestingPage").then(m => ({ default: m.XFirstIntegrationTestingPage })));
const XFirstReadinessTestingPage = lazy(() => import("./pages/services/x-first/XFirstReadinessTestingPage").then(m => ({ default: m.XFirstReadinessTestingPage })));
const XFirstProcessGovernancePage = lazy(() => import("./pages/services/x-first/XFirstProcessGovernancePage").then(m => ({ default: m.XFirstProcessGovernancePage })));
const XFirstTestOpsPage = lazy(() => import("./pages/services/x-first/XFirstTestOpsPage").then(m => ({ default: m.XFirstTestOpsPage })));
const XFirstDevOpsToolChainPage = lazy(() => import("./pages/services/x-first/XFirstDevOpsToolChainPage").then(m => ({ default: m.XFirstDevOpsToolChainPage })));

// Cognitive Assurance Individual Service Pages
const CognitiveTestAutomationPage = lazy(() => import("./pages/services/cognitive-assurance/CognitiveTestAutomationPage").then(m => ({ default: m.CognitiveTestAutomationPage })));
const CognitivePerformanceTestingPage = lazy(() => import("./pages/services/cognitive-assurance/CognitivePerformanceTestingPage").then(m => ({ default: m.CognitivePerformanceTestingPage })));
const CognitiveSecurityTestingPage = lazy(() => import("./pages/services/cognitive-assurance/CognitiveSecurityTestingPage").then(m => ({ default: m.CognitiveSecurityTestingPage })));
const SIEMPage = lazy(() => import("./pages/services/cognitive-assurance/SIEMPage").then(m => ({ default: m.SIEMPage })));
const CognitiveProductionMonitoringPage = lazy(() => import("./pages/services/cognitive-assurance/CognitiveProductionMonitoringPage").then(m => ({ default: m.CognitiveProductionMonitoringPage })));

// Demo Pages
const LoadingSpinnerDemo = lazy(() => import("./pages/LoadingSpinnerDemo").then(m => ({ default: m.LoadingSpinnerDemo })));
const TestimonialSliderDemo = lazy(() => import("./pages/TestimonialSliderDemo").then(m => ({ default: m.TestimonialSliderDemo })));

export default function App() {
  // Add no-transition class on initial load
  React.useEffect(() => {
    document.documentElement.classList.add("no-transition");
    // Remove it after a short delay to enable transitions
    setTimeout(() => {
      document.documentElement.classList.remove(
        "no-transition",
      );
    }, 100);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <ScrollToTopButton />
        <div
          className="min-h-screen flex flex-col"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <Navigation />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/GretahAI"
                  element={<PlatformPage />}
                />
                <Route
                  path="/services"
                  element={<ServicesOverviewPage />}
                />
                <Route
                  path="/services/qa"
                  element={<QAServicesPage />}
                />
                <Route
                  path="/services/pqlm"
                  element={<PQLMPage />}
                />
                <Route
                  path="/services/ux-assurance"
                  element={<UXAssurancePage />}
                />
                <Route
                  path="/services/x-first"
                  element={<XFirstPage />}
                />
                <Route
                  path="/services/cognitive-assurance"
                  element={<CognitiveAssurancePage />}
                />
                <Route
                  path="/services/crm"
                  element={<CRMPage />}
                />

                {/* PQLM Individual Services */}
                <Route
                  path="/services/pqlm/requirement-ambiguity-engineering"
                  element={
                    <RequirementAmbiguityEngineeringPage />
                  }
                />
                <Route
                  path="/services/pqlm/functional-testing"
                  element={<FunctionalTestingPage />}
                />
                <Route
                  path="/services/pqlm/integration-testing"
                  element={<IntegrationTestingPage />}
                />
                <Route
                  path="/services/pqlm/compatibility-testing"
                  element={<CompatibilityTestingPage />}
                />
                <Route
                  path="/services/pqlm/build-verification-testing"
                  element={<BuildVerificationTestingPage />}
                />
                <Route
                  path="/services/pqlm/user-acceptance-testing"
                  element={<UserAcceptanceTestingPage />}
                />
                <Route
                  path="/services/pqlm/readiness-testing"
                  element={<ReadinessTestingPage />}
                />
                <Route
                  path="/services/pqlm/testops"
                  element={<TestOpsPage />}
                />
                <Route
                  path="/services/pqlm/process-governance"
                  element={<ProcessGovernancePage />}
                />
                <Route
                  path="/services/pqlm/production-monitoring"
                  element={<ProductionMonitoringPage />}
                />
                <Route
                  path="/services/pqlm/devops-toolchain"
                  element={<DevOpsToolChainPage />}
                />

                {/* UX-assurance Individual Services */}
                <Route
                  path="/services/ux-assurance/accessibility-testing"
                  element={<AccessibilityTestingPage />}
                />
                <Route
                  path="/services/ux-assurance/ab-testing"
                  element={<ABTestingPage />}
                />
                <Route
                  path="/services/ux-assurance/ux-compatibility-testing"
                  element={<UXCompatibilityTestingPage />}
                />
                <Route
                  path="/services/ux-assurance/ux-user-acceptance-testing"
                  element={<UXUserAcceptanceTestingPage />}
                />
                <Route
                  path="/services/ux-assurance/ux-readiness-testing"
                  element={<UXReadinessTestingPage />}
                />

                {/* X-first Individual Services */}
                <Route
                  path="/services/x-first/xfirst-requirement-ambiguity"
                  element={<XFirstRequirementAmbiguityPage />}
                />
                <Route
                  path="/services/x-first/test-automation"
                  element={<TestAutomationPage />}
                />
                <Route
                  path="/services/x-first/performance-engineering"
                  element={<PerformanceEngineeringPage />}
                />
                <Route
                  path="/services/x-first/security-engineering"
                  element={<SecurityEngineeringPage />}
                />
                <Route
                  path="/services/x-first/xfirst-build-verification"
                  element={<XFirstBuildVerificationPage />}
                />
                <Route
                  path="/services/x-first/xfirst-functional-testing"
                  element={<XFirstFunctionalTestingPage />}
                />
                <Route
                  path="/services/x-first/xfirst-integration-testing"
                  element={<XFirstIntegrationTestingPage />}
                />
                <Route
                  path="/services/x-first/xfirst-readiness-testing"
                  element={<XFirstReadinessTestingPage />}
                />
                <Route
                  path="/services/x-first/xfirst-process-governance"
                  element={<XFirstProcessGovernancePage />}
                />
                <Route
                  path="/services/x-first/xfirst-testops"
                  element={<XFirstTestOpsPage />}
                />
                <Route
                  path="/services/x-first/xfirst-devops-toolchain"
                  element={<XFirstDevOpsToolChainPage />}
                />

                {/* Cognitive Assurance Individual Services */}
                <Route
                  path="/services/cognitive-assurance/cognitive-test-automation"
                  element={<CognitiveTestAutomationPage />}
                />
                <Route
                  path="/services/cognitive-assurance/cognitive-performance-testing"
                  element={<CognitivePerformanceTestingPage />}
                />
                <Route
                  path="/services/cognitive-assurance/cognitive-security-testing"
                  element={<CognitiveSecurityTestingPage />}
                />
                <Route
                  path="/services/cognitive-assurance/siem"
                  element={<SIEMPage />}
                />
                <Route
                  path="/services/cognitive-assurance/ai-production-monitoring"
                  element={<CognitiveProductionMonitoringPage />}
                />

                <Route
                  path="/contact"
                  element={<ContactPage />}
                />
                <Route
                  path="/insights"
                  element={<InsightsPage />}
                />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route
                  path="/careers"
                  element={<CareersPage />}
                />
                <Route
                  path="/case-studies"
                  element={<CaseStudiesPage />}
                />

                {/* Detail Pages */}
                <Route
                  path="/case-studies/:id"
                  element={<CaseStudyDetailPage />}
                />
                <Route
                  path="/blog/:id"
                  element={<BlogDetailPage />}
                />
                <Route
                  path="/insights/:id"
                  element={<InsightDetailPage />}
                />
                <Route
                  path="/success-stories/:id"
                  element={<SuccessStoryDetailPage />}
                />

                {/* Development & Style Guide Pages */}
                <Route
                  path="/style-guide"
                  element={<ArticleStyleGuidePage />}
                />
                <Route
                  path="/example-article"
                  element={<ExampleArticleDetailPage />}
                />

                {/* Blog Articles */}
                <Route
                  path="/blog/pqlm/how-etl-testing-helps-enterprises-maintain-data-accuracy-and-compliance"
                  element={<HowEtlTestingHelpsEnterprisesPage />}
                />
                <Route
                  path="/blog/pqlm/the-future-of-test-data-management-ai-driven-automation-and-compliance"
                  element={<TheFutureOfTestDataManagementAiDrivenAutomationAndCompliance />}
                />
                <Route
                  path="/blog/pqlm/ensuring-business-critical-software-meets-user-expectations-with-uat"
                  element={<EnsuringBusinessCriticalSoftwareMeetsUserExpectationsWithUAT />}
                />
                <Route
                  path="/blog/pqlm/why-test-environment-management-is-critical-for-scalable-qa-in-enterprises"
                  element={<WhyTestEnvironmentManagementIsCriticalForScalableQAInEnterprises />}
                />
                <Route
                  path="/blog/pqlm/ensuring-smooth-payments-and-safer-transactions-a-cogniron-view-on-qa-for-digital-payments-and-pos-systems"
                  element={<EnsuringSmoothPaymentsAndSaferTransactionsACognironViewOnQAForDigitalPaymentsAndPoSSystems />}
                />
                <Route
                  path="/blog/pqlm/rpa-that-works-why-testing-is-the-real-key-to-reliability"
                  element={<RPAThatWorksWhyTestingIsTheRealKeyToReliability />}
                />
                <Route
                  path="/blog/x-first/the-new-era-of-quality-intelligence-led-assurance"
                  element={<TheNewEraOfQualityIntelligenceLedAssurance />}
                />
                <Route
                  path="/blog/x-first/api-testing-best-practices-how-to-prevent-integration-failures"
                  element={<ApiTestingBestPracticesHowToPreventIntegrationFailures />}
                />
                <Route
                  path="/blog/x-first/the-new-era-of-mobile-app-testing-how-5g-and-ai-automation-are-redefining-quality-at-speed"
                  element={<TheNewEraOfMobileAppTestingHow5GAndAIAutomationAreRedefiningQualityAtSpeed />}
                />
                <Route
                  path="/blog/x-first/load-testing-vs-stress-testing-how-to-ensure-peak-software-performance"
                  element={<LoadTestingVsStressTestingHowToEnsurePeakSoftwarePerformance />}
                />
                <Route
                  path="/blog/x-first/beyond-automation-how-genai-is-rewriting-the-rules-of-test-case-design"
                  element={<BeyondAutomationHowGenaiIsRewritingTheRulesOfTestCaseDesign />}
                />
                <Route
                  path="/blog/x-first/functional-testing-upgraded-ais-role-in-intelligent-automation"
                  element={<FunctionalTestingUpgradedAisRoleInIntelligentAutomation />}
                />
                <Route
                  path="/blog/x-first/ai-is-shipping-faster-than-quality"
                  element={<AiIsShippingFasterThanQuality />}
                />
                <Route
                  path="/blog/x-first/build-verification-testing-the-first-line-of-defense-in-quality-engineering"
                  element={<BuildVerificationTestingTheFirstLineOfDefenseInQualityEngineering />}
                />
                <Route
                  path="/blog/cognitive-assurance/agentic-ai-for-test-optimization-enhancing-speed-and-accuracy-in-software-qa"
                  element={<AgenticAiForTestOptimizationEnhancingSpeedAndAccuracyInSoftwareQA />}
                />
                <Route
                  path="/blog/cognitive-assurance/ai-driven-decision-making-in-qe"
                  element={<AiDrivenDecisionMakingInQE />}
                />
                <Route
                  path="/blog/cognitive-assurance/why-every-enterprise-needs-an-ai-powered-test-automation-strategy"
                  element={<WhyEveryEnterpriseNeedsAnAIPoweredTestAutomationStrategy />}
                />
                <Route
                  path="/blog/cognitive-assurance/the-role-of-large-language-models-in-software-testing-and-debugging"
                  element={<TheRoleOfLargeLanguageModelsInSoftwareTestingAndDebugging />}
                />
                <Route
                  path="/blog/cognitive-assurance/ensuring-explainability-and-transparency-in-aiml-systems-through-robust-testing"
                  element={<EnsuringExplainabilityAndTransparencyInAiMlSystemsThroughRobustTesting />}
                />
                <Route
                  path="/blog/ux-assurance/beyond-compliance-how-accessibility-testing-became-a-true-business-advantage"
                  element={<BeyondComplianceHowAccessibilityTestingBecameATrueBusinessAdvantage />}
                />
                <Route
                  path="/blog/ux-assurance/ensuring-compatibility-in-the-era-of-multi-device-digital-experiences"
                  element={<EnsuringCompatibilityInTheEraOfMultiDeviceDigitalExperiences />}
                />
                <Route
                  path="/blog/ux-assurance/iot-quality-assurance-building-trust-through-seamless-user-experiences"
                  element={<IoTQualityAssuranceBuildingTrustThroughSeamlessUserExperiences />}
                />
                <Route
                  path="/blog/ux-assurance/ensuring-seamless-user-experience-with-ai-powered-ux-ui-testing"
                  element={<EnsuringSeamlessUserExperienceWithAiPoweredUxUiTesting />}
                />
                <Route
                  path="/blog/crm/why-technology-alone-isnt-enough-to-fix-customer-operations"
                  element={<WhyTechnologyAloneIsntEnough />}
                />
                <Route
                  path="/blog/crm/crm-isnt-a-tool-anymore-its-infrastructure"
                  element={<CrmIsntAToolAnymoreItsInfrastructure />}
                />
                <Route
                  path="/blog/ai-ml/test-data-management-ai-compliance"
                  element={<TestDataManagementAiCompliance />}
                />
                <Route
                  path="/blog/gretah-ai/reliability-over-autonomy-why-2026-demands-disciplined-ai-testing-agents"
                  element={<ReliabilityOverAutonomyWhy2026DemandsDisciplinedAITestingAgents />}
                />
                <Route
                  path="/blog/gretah-ai/ai-in-healthcare-why-90-percent-initiatives-fail-and-how-to-fix-it"
                  element={<AIInHealthcareWhy90PercentInitiativesFailAndHowToFixIt />}
                />

                {/* Demo Pages */}
                <Route
                  path="/demo/loading-spinner"
                  element={<LoadingSpinnerDemo />}
                />
                <Route
                  path="/demo/testimonial-slider"
                  element={<TestimonialSliderDemo />}
                />

                {/* Legal Pages */}
                <Route
                  path="/privacy"
                  element={<PrivacyPolicyPage />}
                />
                <Route
                  path="/terms"
                  element={<TermsOfServicePage />}
                />
                <Route
                  path="/cookies"
                  element={<CookiePolicyPage />}
                />

                {/* Redirect any /author/* routes to /blog */}
                <Route
                  path="/author/*"
                  element={<Navigate to="/blog" replace />}
                />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}