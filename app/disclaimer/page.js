import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";
import { AlertTriangle, Shield, Scale, Brain, FileText, Gamepad2, DollarSign, Trophy, Briefcase, Globe, ArrowRight } from "lucide-react";
import { getAllApps } from "@/lib/helpers";

const topApps = getAllApps().slice(0, 3);

export const metadata = {
  title: "Disclaimer",
  description:
    "Read the full disclaimer for AllYonoMax. Understand the terms, risks, and responsibilities associated with using apps listed on our platform.",
  alternates: {
    canonical: "https://allyonomax.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="header-gradient py-12 px-4 text-center text-white">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight">
          Disclaimer
        </h1>
        <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Please read this disclaimer carefully before using AllYonoMax
        </p>
      </section>

      {/* ── Welcome ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 -mt-6">
        <div className="disclaimer-card shadow-lg border-t-4 border-t-red-accent">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-accent" />
            </div>
            <h2 className="text-xl font-extrabold text-red-accent !mb-0">
              Welcome to AllYonoMax
            </h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">
            This extensive disclaimer applies to all users of the AllYonoMax website and the wide array of applications (&quot;Apps&quot;) available on it. Our platform includes diverse apps such as Poker, Rummy, Ludo, fantasy sports, investment apps, and trading apps. By accessing AllYonoMax, you acknowledge and agree to the terms outlined in this disclaimer.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* ── Understanding the Scope ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-teal" />
            </div>
            <h2 className="!mb-0">Understanding the Scope of Our Platform</h2>
          </div>
          <p>
            AllYonoMax serves as a digital distribution platform for various third-party applications. Our role is limited to providing access to these apps. We do not develop, modify, or have any control over the content and functionality of these apps.
          </p>
        </div>

        {/* ── User Responsibility ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <h2 className="!mb-0">User Responsibility and Financial Risk</h2>
          </div>
          <ul>
            <li>
              <strong>Risk of Financial Activities:</strong> The Apps, particularly those involving financial transactions like betting games or investment platforms, may carry inherent risks including the potential for significant financial loss. You are solely responsible for any financial outcomes resulting from your use of these Apps.
            </li>
            <li>
              <strong>Informed Decision-Making:</strong> We strongly encourage you to thoroughly research and understand each App, especially those involving financial risks, before participation. This includes seeking advice from financial experts or professionals as needed.
            </li>
            <li>
              <strong>No Endorsement of Financial Strategies:</strong> Our platform does not endorse any specific financial strategies, nor do we guarantee their success. Decisions made based on any App&apos;s content are solely your responsibility.
            </li>
          </ul>
        </div>

        {/* ── Legal Age ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Scale className="w-5 h-5 text-accent-dark" />
            </div>
            <h2 className="!mb-0">Legal Age and Compliance</h2>
          </div>
          <ul>
            <li>
              <strong>Age Restrictions:</strong> Some Apps, particularly those involving gambling or financial investments, are designed for use by individuals above a certain age (usually 18 or 21 years). You must comply with these age restrictions.
            </li>
            <li>
              <strong>Compliance with Local Laws:</strong> It is your responsibility to ensure that the use of any App complies with local laws and regulations. This includes understanding legal constraints related to gambling, investments, and other financial activities.
            </li>
          </ul>
        </div>

        {/* ── Critical Review ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h2 className="!mb-0">Critical Review of App-Specific Terms</h2>
          </div>
          <ul>
            <li>
              <strong>User Due Diligence:</strong> Before signing up, registering, or engaging with any App on our platform, it is crucial that you thoroughly review and understand that App&apos;s specific Terms and Conditions, disclaimers, and privacy policies.
            </li>
            <li>
              <strong>No Responsibility for Discrepancies:</strong> We are not responsible for any discrepancies or misunderstandings resulting from the App&apos;s terms, conditions, or policies.
            </li>
          </ul>
        </div>

        {/* ── No Liability ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-teal" />
            </div>
            <h2 className="!mb-0">No Liability for Losses</h2>
          </div>
          <p>
            AllYonoMax shall not be liable for any direct, indirect, incidental, consequential, or punitive damages, including financial losses, resulting from the use or inability to use any App listed on our website. Your engagement with these Apps is entirely at your own risk and discretion.
          </p>
        </div>

        {/* ── Addiction Risks ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            <h2 className="!mb-0">Awareness of Addiction Risks</h2>
          </div>
          <ul>
            <li>
              <strong>Risk of Addiction:</strong> Certain apps, especially games and those involving gambling or trading, can be addictive. We encourage responsible use of these apps and awareness of the potential for addictive behavior.
            </li>
            <li>
              <strong>Seeking Help:</strong> If you or someone you know is struggling with addiction related to these apps, we advise seeking professional help.
            </li>
          </ul>
        </div>

        {/* ── Additional Disclaimers ── */}
        <div className="content-section">
          <h2>Additional Disclaimers</h2>
          <ul>
            <li>
              <strong>Variability in App Functionality:</strong> The functionality and content of the Apps may change over time, and we do not guarantee their consistency or availability.
            </li>
            <li>
              <strong>Non-Endorsement of App Content:</strong> Display of an App on our platform does not constitute an endorsement of its content or functionality.
            </li>
            <li>
              <strong>No Financial or Legal Advice:</strong> AllYonoMax does not provide financial, legal, or investment advice. Any information obtained from our platform should not be treated as professional advice.
            </li>
          </ul>
        </div>

        {/* ── Changes and Amendments ── */}
        <div className="content-section">
          <h2>Changes and Amendments</h2>
          <p>
            We reserve the right to modify this disclaimer at any time. Such changes will be effective immediately upon posting on our website. It is your responsibility to regularly review this disclaimer.
          </p>
        </div>

        {/* ── App-Specific Disclaimers ── */}
        <div className="info-card-teal rounded-2xl !p-6">
          <h2 className="text-xl font-extrabold text-white mb-4">
            App-Specific Disclaimers
          </h2>
        </div>

        {/* Rummy */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-primary" />
            </div>
            <h2 className="!mb-0">Disclaimer for Rummy Apps on AllYonoMax</h2>
          </div>
          <p>
            <strong>General Notice:</strong> This is a brief and partial disclaimer. For full details, refer to the specific Rummy app&apos;s own disclaimer. Rummy games are intended for users aged 18+ and involve elements of skill and chance. Play at your own risk and ensure compliance with local gambling laws. Adding money to these games is done at the user&apos;s own risk.
          </p>
        </div>

        {/* Ludo */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-accent-dark" />
            </div>
            <h2 className="!mb-0">Disclaimer for Ludo Apps on AllYonoMax</h2>
          </div>
          <p>
            <strong>General Notice:</strong> This disclaimer is concise and may not cover all aspects. Review the full disclaimer in the specific Ludo app. Ludo apps are for entertainment and suitable for users 18+. Play responsibly and at your own risk. Any financial transactions within the app are the responsibility of the user.
          </p>
        </div>

        {/* Investment */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-teal" />
            </div>
            <h2 className="!mb-0">Disclaimer for Investment Apps on AllYonoMax</h2>
          </div>
          <p>
            <strong>General Notice:</strong> This disclaimer is partial. For complete information, review the specific investment app&apos;s disclaimer. Investment apps are for users aged 18+ and involve financial risks, including potential loss of capital. Decisions should be made based on personal financial situations. Any investments are made at the user&apos;s own risk.
          </p>
        </div>

        {/* Fantasy Sports */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <h2 className="!mb-0">Disclaimer for Fantasy Sports Apps on AllYonoMax</h2>
          </div>
          <p>
            <strong>General Notice:</strong> This is a summarized disclaimer. Refer to the full disclaimer in each Fantasy Sports app for comprehensive details. These apps are intended for users aged 18+ and involve an element of financial risk. There is no guarantee of winning, and losses incurred are the user&apos;s responsibility. Play and engage in financial transactions at your own risk.
          </p>
        </div>

        {/* Other Earning Apps */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-accent-dark" />
            </div>
            <h2 className="!mb-0">Disclaimer for Other Earning Apps on AllYonoMax</h2>
          </div>
          <p>
            <strong>General Notice:</strong> This is an abbreviated disclaimer. Consult the full disclaimer in each earning app for more details. These apps are suitable for users aged 18+ and may offer potential income opportunities with no guaranteed earnings. Any financial involvement or transactions within these apps are entirely at the user&apos;s risk.
          </p>
        </div>

        {/* ── General Disclaimer for Third-Party ── */}
        <div className="disclaimer-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-red-accent" />
            </div>
            <h2 className="text-xl font-extrabold text-red-accent !mb-0">
              General Disclaimer for Third-Party Apps on AllYonoMax
            </h2>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-3">
            <strong className="text-text-primary">Notice of Non-Affiliation and Disclaimer:</strong> AllYonoMax does not operate, control, or manage any of the applications (Apps) listed on our platform, including Rummy, Ludo, Fantasy Sports, Investment Apps, Trading Apps, and other earning apps. These Apps are developed, owned, and operated by independent third parties.
          </p>

          <p className="text-text-secondary text-sm leading-relaxed mb-3">
            <strong className="text-text-primary">Third-Party Apps:</strong> Each App available through AllYonoMax is the sole responsibility of the respective third-party developers or companies. AllYonoMax acts as a platform to provide access to these Apps but is not involved in their operation or management.
          </p>

          <p className="text-text-secondary text-sm leading-relaxed mb-3">
            <strong className="text-text-primary">User Discretion and Responsibility:</strong> Users are advised that any interaction, financial transaction, or participation in activities within these Apps is conducted at their own risk. AllYonoMax does not endorse or assume responsibility for the functionality, content, or any aspect of these third-party Apps.
          </p>

          <p className="text-text-secondary text-sm leading-relaxed mb-3">
            <strong className="text-text-primary">Age Restriction and Risk Acknowledgment:</strong> The Apps listed on our platform are intended for users aged 18+ and may involve various levels of risk, including financial risk. Users should play, invest, or engage in these Apps at their own discretion and risk.
          </p>

          <p className="text-text-secondary text-sm leading-relaxed mb-3">
            <strong className="text-text-primary">Independent App Disclaimers:</strong> We strongly recommend that users review and understand the full disclaimer, terms and conditions, and privacy policy of each App they intend to use. The brief disclaimers provided here on AllYonoMax are not exhaustive and may not encapsulate all the terms of use and risks associated with each App.
          </p>

          <p className="text-text-secondary text-sm leading-relaxed mb-3">
            <strong className="text-text-primary">No Liability:</strong> AllYonoMax assumes no liability for any losses, damages, or issues arising from the use of these third-party Apps. Our role is limited to providing a platform for accessing these Apps, and we are not responsible for their operation, content, or any outcomes from their use.
          </p>

          <p className="text-text-secondary text-sm leading-relaxed mb-3">
            <strong className="text-text-primary">Notice of Regional Legal Restrictions:</strong> Users are hereby informed that certain applications (Apps) available on AllYonoMax, such as Rummy, Poker, and Fantasy Sports, may be subject to legal restrictions in certain states within India.
          </p>

          <p className="text-text-secondary text-sm leading-relaxed">
            By using AllYonoMax, users acknowledge and agree to this general disclaimer, affirming their understanding that the Apps are managed by respective third-party entities and that all interactions with these Apps are at their own risk and responsibility.
          </p>
        </div>

      </div>

      {/* ── Cross-Links ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
        <div className="content-section">
          <h2>Explore Our Apps</h2>
          <p className="mb-4">
            Despite the risks mentioned above, here are some of the most popular and trusted apps available on our platform:
          </p>
          <div className="space-y-2 mb-4">
            {topApps.map((app) => (
              <Link
                key={app.id}
                href={`/${app.slug}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-bg border border-card-border/50 hover:border-primary/30 transition-colors"
              >
                <Gamepad2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-text-primary text-sm font-medium">{app.name}</span>
                <span className="text-primary text-xs font-bold ml-auto">{app.bonus} Bonus</span>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-text-muted">
            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingTelegram />
    </div>
  );
}
