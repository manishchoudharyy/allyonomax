import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";
import { Shield, Eye, Database, Cookie, Mail, UserCheck, Lock, Globe, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read AllYonoMax's Privacy Policy. Learn how we collect, use, and protect your personal information when using our platform.",
  alternates: {
    canonical: "https://allyonomax.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="header-gradient py-12 px-4 text-center text-white">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Your privacy matters to us. Last updated: March 2026.
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* ── Introduction ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-teal" />
            </div>
            <h2 className="!mb-0">Introduction</h2>
          </div>
          <p>
            AllYonoMax (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website allyonomax.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. By using the website, you consent to the data practices described in this policy.
          </p>
        </div>

        {/* ── Information We Collect ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Database className="w-5 h-5 text-primary" />
            </div>
            <h2 className="!mb-0">Information We Collect</h2>
          </div>
          <ul>
            <li>
              <strong>Automatically Collected Information:</strong> When you visit our website, we may automatically collect certain information including your IP address, browser type, device type, operating system, referral URLs, pages viewed, and time spent on pages.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We may use cookies, web beacons, and similar tracking technologies to collect information about your browsing activity on our website.
            </li>
            <li>
              <strong>Information You Provide:</strong> If you contact us via email or Telegram, we may collect your name, email address, or Telegram username.
            </li>
          </ul>
        </div>

        {/* ── How We Use Information ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Eye className="w-5 h-5 text-accent-dark" />
            </div>
            <h2 className="!mb-0">How We Use Your Information</h2>
          </div>
          <ul>
            <li>To operate and maintain our website</li>
            <li>To improve and personalize your experience</li>
            <li>To understand how users interact with our website</li>
            <li>To respond to your inquiries and support requests</li>
            <li>To prevent fraudulent activity and ensure security</li>
            <li>To comply with legal obligations</li>
          </ul>
        </div>

        {/* ── Cookies ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
              <Cookie className="w-5 h-5 text-teal" />
            </div>
            <h2 className="!mb-0">Cookies Policy</h2>
          </div>
          <p>
            Our website may use cookies to enhance your browsing experience. Cookies are small text files placed on your device by a website. You can control cookies through your browser settings and may choose to disable cookies. However, disabling cookies may affect the functionality of our website.
          </p>
        </div>

        {/* ── Third-Party Links ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <h2 className="!mb-0">Third-Party Links</h2>
          </div>
          <p>
            Our website contains links to third-party applications and websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policy of each application and website you visit through our platform. When you click on a referral link, you may be redirected to a third-party application that has its own privacy policy and terms.
          </p>
        </div>

        {/* ── Data Security ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-accent-dark" />
            </div>
            <h2 className="!mb-0">Data Security</h2>
          </div>
          <p>
            We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against unauthorized access.
          </p>
        </div>

        {/* ── Children's Privacy ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-teal" />
            </div>
            <h2 className="!mb-0">Children&apos;s Privacy</h2>
          </div>
          <p>
            Our website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. The applications listed on our platform involve real money and are strictly for adults. If we learn that we have collected personal information from a child under 18, we will delete that information promptly.
          </p>
        </div>

        {/* ── Changes to This Policy ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-primary" />
            </div>
            <h2 className="!mb-0">Changes to This Privacy Policy</h2>
          </div>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
          </p>
        </div>

        {/* ── Contact Us ── */}
        <div className="info-card-teal rounded-2xl !p-6 text-center">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-extrabold text-white !mb-0">
              Contact Information
            </h2>
          </div>
          <p className="text-white/90 text-sm mb-4">
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <p className="text-white font-bold text-sm mb-1">
            Email: contact@allyonomax.com
          </p>
          <p className="text-white font-bold text-sm">
            Telegram: @allyonomax
          </p>
        </div>

      </div>

      <Footer />
      <FloatingTelegram />
    </div>
  );
}
