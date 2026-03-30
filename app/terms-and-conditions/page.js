import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";
import { FileText, Shield, Users, AlertTriangle, Scale, Globe, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read AllYonoMax's Terms and Conditions. Understand the rules, responsibilities, and guidelines for using our platform and the apps listed on it.",
  alternates: {
    canonical: "https://allyonomax.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="header-gradient py-12 px-4 text-center text-white">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Please read these terms carefully before using AllYonoMax. Last updated: March 2026.
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* ── Acceptance of Terms ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-teal" />
            </div>
            <h2 className="!mb-0">Acceptance of Terms</h2>
          </div>
          <p>
            By accessing or using the AllYonoMax website (&quot;allyonomax.com&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree with any part of these terms, you must not use our website. These Terms apply to all visitors, users, and others who access or use the website.
          </p>
        </div>

        {/* ── Description of Service ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <h2 className="!mb-0">Description of Service</h2>
          </div>
          <p>
            AllYonoMax is a digital platform that provides information about and links to third-party mobile applications (&quot;Apps&quot;), including but not limited to rummy, slots, casino, and other gaming applications. We do not develop, own, operate, or manage any of the listed Apps.
          </p>
          <ul>
            <li>We act solely as an information directory and referral platform.</li>
            <li>All Apps listed are developed and operated by independent third parties.</li>
            <li>We do not process any financial transactions related to the listed Apps.</li>
          </ul>
        </div>

        {/* ── User Eligibility ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-accent-dark" />
            </div>
            <h2 className="!mb-0">User Eligibility</h2>
          </div>
          <ul>
            <li>
              <strong>Age Requirement:</strong> You must be at least 18 years of age to use this website and download any listed applications. By using this site, you confirm that you are of legal age.
            </li>
            <li>
              <strong>Jurisdictional Compliance:</strong> You are responsible for ensuring that your use of any listed App complies with all applicable local, state, and national laws and regulations in your jurisdiction.
            </li>
            <li>
              <strong>Restricted States:</strong> Certain gaming applications may be restricted or prohibited in states like Andhra Pradesh, Assam, Odisha, Telangana, Meghalaya, Sikkim, and Nagaland. Users from these states must verify legality before using such Apps.
            </li>
          </ul>
        </div>

        {/* ── User Responsibilities ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-teal" />
            </div>
            <h2 className="!mb-0">User Responsibilities</h2>
          </div>
          <ul>
            <li>You agree to use the website only for lawful purposes and in accordance with these Terms.</li>
            <li>You shall not use the website in any manner that could damage, disable, or impair the website.</li>
            <li>You are responsible for all activity on accounts created through referral links shared via our platform.</li>
            <li>You acknowledge that any financial transactions within third-party Apps are conducted at your own risk.</li>
          </ul>
        </div>

        {/* ── Intellectual Property ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            <h2 className="!mb-0">Intellectual Property</h2>
          </div>
          <ul>
            <li>
              <strong>Our Content:</strong> The website design, layout, text, and original graphics are the property of AllYonoMax and are protected by intellectual property laws.
            </li>
            <li>
              <strong>Third-Party Content:</strong> App names, logos, and icons belong to their respective owners. Their display on our platform does not imply any endorsement or ownership by AllYonoMax.
            </li>
            <li>
              <strong>Usage Restrictions:</strong> You may not copy, reproduce, distribute, or create derivative works from our website content without prior written permission.
            </li>
          </ul>
        </div>

        {/* ── Limitation of Liability ── */}
        <div className="disclaimer-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-accent" />
            </div>
            <h2 className="text-xl font-extrabold text-red-accent !mb-0">
              Limitation of Liability
            </h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-3">
            <strong className="text-text-primary">No Warranty:</strong> AllYonoMax provides the website &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-3">
            <strong className="text-text-primary">Financial Losses:</strong> We shall not be liable for any direct, indirect, incidental, special, or consequential damages, including but not limited to financial losses, resulting from the use of third-party Apps accessed through our platform.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-3">
            <strong className="text-text-primary">Third-Party Actions:</strong> We are not responsible for the actions, content, or policies of any third-party App or website linked from our platform.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed">
            <strong className="text-text-primary">Service Availability:</strong> We do not guarantee that our website will be available at all times or that it will be free from errors or interruptions.
          </p>
        </div>

        {/* ── Affiliate Disclosure ── */}
        <div className="content-section">
          <h2>Affiliate Disclosure</h2>
          <p>
            AllYonoMax may earn referral commissions when users download and register on Apps through links provided on our platform. This does not affect the bonuses or features available to users. Our recommendations are based on app quality, user feedback, and bonus offerings.
          </p>
        </div>

        {/* ── Modifications ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-teal" />
            </div>
            <h2 className="!mb-0">Modifications to Terms</h2>
          </div>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes are posted constitutes acceptance of the modified Terms. We encourage you to review this page periodically.
          </p>
        </div>

        {/* ── Governing Law ── */}
        <div className="content-section">
          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts in India.
          </p>
        </div>

        {/* ── Contact ── */}
        <div className="info-card-teal rounded-2xl !p-6 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3">
            Questions About These Terms?
          </h2>
          <p className="text-white/90 text-sm mb-4">
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <p className="text-white font-bold text-sm mb-1">
            Email: contact@allyonomax.com
          </p>
          <p className="text-white font-bold text-sm">
            Telegram: @allyonomax
          </p>
        </div>

      </div>

      {/* ── Cross-Links ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-text-muted">
          <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
          <span>•</span>
          <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
          <span>•</span>
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
        </div>
      </section>

      <Footer />
      <FloatingTelegram />
    </div>
  );
}
