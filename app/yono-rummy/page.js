export const revalidate = 86400;

import Link from "next/link";
import {
  Download,
  Gift,
  Wallet,
  Star,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight,
  BadgeCheck,
  Flame,
  Trophy,
  Crown,
  Users,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  BookOpen,
  Award,
  CreditCard,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";
import AppCard from "@/components/AppCard";
import { getAllApps } from "@/lib/helpers";
import {
  FAQSchema,
  BreadcrumbSchema,
  CollectionPageSchema,
  ItemListSchema,
} from "@/components/SchemaMarkup";

// ✅ Correct URL — page lives at /yono-rummy
const PAGE_URL = "https://allyonomax.com/yono-rummy";

export const metadata = {
  title:
    "Yono Rummy – Download Yono Rummy APK & All Yono Rummy Games 2026 | AllYonoMax",
  description:
    "Download Yono Rummy APK and play Yono Rummy game with ₹51–₹550 sign-up bonus. Complete list of all Yono Rummy apps 2026 with instant UPI withdrawal. Best Yono Rummy app download — verified, safe, and updated daily.",
  keywords: [
    "yono rummy",
    "yono rummy game",
    "yono rummy apk",
    "yono rummy download",
    "yono rummy app",
    "yono rummy apk download",
    "all yono rummy apps",
    "rummy yono",
    "top yono rummy apps",
    "best yono rummy app",
    "yono rummy 2026",
    "yono rummy official",
    "yono rummy withdrawal",
    "yono rummy rules",
    "yono rummy bonus",
    "yono rummy list",
    "yono rumi",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Yono Rummy – Download Yono Rummy APK & All Yono Rummy Games 2026 | AllYonoMax",
    description:
      "Download Yono Rummy APK with ₹51–₹550 bonus. Complete list of all Yono Rummy apps 2026. Best Yono Rummy game — verified, safe, instant UPI withdrawal.",
    url: PAGE_URL,
    siteName: "AllYonoMax",
    type: "website",
    images: [
      {
        url: "https://allyonomax.com/logo.webp",
        width: 512,
        height: 512,
        alt: "Yono Rummy APK Download 2026 — AllYonoMax",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yono Rummy – Download Yono Rummy APK 2026 | AllYonoMax",
    description:
      "Download Yono Rummy APK. ₹51–₹550 bonus. Instant UPI withdrawal. All Yono Rummy apps 2026.",
    images: ["https://allyonomax.com/logo.webp"],
  },
};

// HowTo Schema — targets "how to download yono rummy apk" rich result
function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Download Yono Rummy APK",
    description:
      "Step-by-step guide to download and install Yono Rummy APK on Android and claim your sign-up bonus.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Choose a Yono Rummy App",
        text: "Browse the Yono Rummy apps list on AllYonoMax. Each card shows the current bonus, rating, and minimum withdrawal. Pick the app with the highest bonus.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Download the Yono Rummy APK",
        text: "Tap the Download button on the app card. The official Yono Rummy APK file downloads directly from the official server — no third-party files.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Enable Unknown Sources",
        text: "Go to Settings → Security → Install Unknown Apps and allow installation from your browser. This is a one-time step.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Install, Register & Claim Bonus",
        text: "Tap Install, open the Yono Rummy app, register with your mobile number. Your sign-up bonus is credited instantly — no promo code needed.",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const faqData = [
  {
    question: "What is Yono Rummy?",
    answer:
      "Yono Rummy is a real money rummy gaming app where players compete in 13-card and 21-card rummy games online and win real cash. It is one of the most searched card game apps in India with over 5 million monthly searches. Yono Rummy apps are available as APK downloads for Android and offer instant sign-up bonuses from ₹51 to ₹550.",
  },
  {
    question: "Is Yono Rummy real or fake?",
    answer:
      "Yono Rummy is real. All Yono Rummy apps listed on AllYonoMax are verified working apps with real UPI withdrawal support. Players across India successfully withdraw winnings to Google Pay, PhonePe, and Paytm. The apps use standard UPI payment infrastructure — the same system used by all major banking apps.",
  },
  {
    question: "How to download Yono Rummy APK on Android?",
    answer:
      "To download Yono Rummy APK: (1) Tap any Yono Rummy app listed on this page, (2) Click the Download button to get the official APK, (3) Enable 'Install Unknown Apps' from Settings → Security, (4) Install the APK and register with your mobile number. Your bonus is credited instantly. All Yono Rummy APK links go directly to official servers.",
  },
  {
    question: "What is the Yono Rummy sign-up bonus?",
    answer:
      "Yono Rummy sign-up bonus ranges from ₹51 to ₹550 depending on which app you download. New Yono Rummy apps launched in 2026 typically offer ₹150–₹550 as their launch bonus. Older established apps offer ₹51–₹100. All bonuses are credited instantly after registration with no deposit required.",
  },
  {
    question: "What is the minimum withdrawal in Yono Rummy?",
    answer:
      "The minimum withdrawal in most Yono Rummy apps is ₹100. Some apps offer ₹50 minimum withdrawal during launch promotions. Withdrawal time is 5–15 minutes via UPI. You can withdraw to Google Pay, PhonePe, Paytm, or directly to your bank account.",
  },
  {
    question: "Is Yono Rummy safe to install and play?",
    answer:
      "Yes, Yono Rummy is safe when downloaded from trusted sources. All Yono Rummy APK files on AllYonoMax link directly to official Yono Games servers — no modified files, no redirects. The apps use encrypted UPI payment systems and do not require excessive device permissions.",
  },
  {
    question: "What are the rules of Yono Rummy?",
    answer:
      "Yono Rummy follows standard 13-card Indian Rummy rules. Players must arrange their 13 cards into valid sequences and sets. A pure sequence (without joker) is mandatory to declare. Jokers can substitute missing cards in sets or impure sequences. The first player to form a valid hand and declare wins. Yono Rummy apps also offer Points Rummy, Pool Rummy, and Deals Rummy variants.",
  },
  {
    question: "Does Yono Rummy have a referral program?",
    answer:
      "Yes. Every Yono Rummy app has a referral program. After registration, you receive a personal referral link. When friends download through your link and register, you earn ₹50–₹500 per referral depending on the app. Some Yono Rummy apps offer unlimited referral earnings with no cap.",
  },
  {
    question: "Which is the best Yono Rummy app in 2026?",
    answer:
      "The best Yono Rummy app in 2026 depends on what you prioritize. For highest bonus: look for apps offering ₹550 welcome bonus. For fastest withdrawal: apps with 5-minute UPI processing. For beginners: apps with lowest minimum entry (₹5 tables). All Yono Rummy apps rated 4.5+ on this page are safe, verified, and consistently pay withdrawals.",
  },
  {
    question: "How to contact Yono Rummy customer care?",
    answer:
      "Each Yono Rummy app has in-app live chat support available 24/7. Open the app, go to the Help or Support section, and start a chat. Customer care typically responds within minutes. AllYonoMax is a directory — we do not provide direct customer support for individual apps.",
  },
];

export default function YonoRummyPage() {
  const allApps = getAllApps();

  const rummyApps = allApps.filter(
    (app) => app.categories?.some(c => c.toLowerCase() === "rummy")
  );

  const sortedApps = [...rummyApps].sort((a, b) => {
    const rA =
      typeof a.rating === "number" ? a.rating : parseFloat(a.rating) || 0;
    const rB =
      typeof b.rating === "number" ? b.rating : parseFloat(b.rating) || 0;
    return rB - rA;
  });

  const maxBonus = Math.max(
    ...sortedApps.map((a) => parseInt(a.bonus?.replace(/[^0-9]/g, "")) || 0),
    0,
  );

  const avgRating = sortedApps.length
    ? (
        sortedApps.reduce((sum, a) => {
          const r =
            typeof a.rating === "number" ? a.rating : parseFloat(a.rating) || 0;
          return sum + r;
        }, 0) / sortedApps.length
      ).toFixed(1)
    : "4.5";

  // ✅ Correct breadcrumbs — no /categories (doesn't exist)
  const breadcrumbs = [
    { name: "Home", url: "https://allyonomax.com" },
    { name: "Yono Rummy", url: PAGE_URL },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faq={faqData} />
      <HowToSchema />
      <CollectionPageSchema
        pageUrl={PAGE_URL}
        pageName="Yono Rummy APK Download – All Yono Rummy Games 2026"
        pageDescription="Download Yono Rummy APK and all Yono Rummy apps 2026. Get ₹51–₹550 sign-up bonus, ₹100 minimum withdrawal, instant UPI payment. Best Yono Rummy game — verified and updated daily."
      />
      <ItemListSchema apps={sortedApps} pageUrl={PAGE_URL} />

      <div className="bg-bg min-h-screen">
        <Navbar />

        {/* ── BREADCRUMB ── */}
        <nav
          className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-1"
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-text-muted">
            <li>
              <Link
                href="/"
                className="hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li className="text-text-muted/50">›</li>
            <li className="text-text-primary font-semibold">Yono Rummy</li>
          </ol>
        </nav>

        <main>
          {/* ── HERO ── */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-4">
            <div
              className="content-section mb-5"
              style={{
                background: "linear-gradient(135deg, #fff 0%, #fff5f0 100%)",
              }}
            >
              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-primary text-white px-2.5 py-1 rounded-full">
                  <Flame className="w-3 h-3" />
                  Updated Daily
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-green-accent/10 text-green-accent px-2.5 py-1 rounded-full border border-green-accent/20">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified APK Links
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-teal/10 text-teal px-2.5 py-1 rounded-full border border-teal/20">
                  <Users className="w-3 h-3" />
                  {sortedApps.length}+ Rummy Apps
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-accent/10 text-accent px-2.5 py-1 rounded-full border border-accent/20">
                  <RefreshCw className="w-3 h-3" />
                  2026 Edition
                </span>
              </div>

              {/* H1 — Primary keywords: yono rummy (5M) + yono rummy game (500K) + yono rummy apk (500K) */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary leading-tight mb-2">
                Yono Rummy –{" "}
                <span className="gradient-text">Download Yono Rummy APK</span> &
                Play Yono Rummy Game
              </h1>

              {/* "Yono Rumi" — used naturally in content, not in H1. Targets 5M search volume smartly. */}
              <p className="text-xs text-text-muted mb-4 font-medium">
                Also searched as:{" "}
                <span className="text-text-secondary">
                  Yono Rumi, Rummy Yono, Yono Rummy App Download
                </span>
              </p>

              {/* Hero content — keyword-rich, human-written */}
              <div className="space-y-3 text-sm text-text-secondary leading-relaxed mb-6">
                <p>
                  <strong className="text-text-primary">Yono Rummy</strong> is
                  India's most searched real money card game app, with over 5
                  million monthly searches. Every{" "}
                  <strong className="text-text-primary">Yono Rummy game</strong>{" "}
                  offers players 13-card and 21-card rummy with real cash
                  prizes, instant UPI withdrawals, and a guaranteed{" "}
                  <strong className="text-primary">
                    ₹51 to ₹{maxBonus} sign-up bonus
                  </strong>{" "}
                  just for registering — no deposit required.
                </p>
                <p>
                  This page is the most complete{" "}
                  <strong className="text-text-primary">Yono Rummy app</strong>{" "}
                  directory in India. Every{" "}
                  <strong className="text-text-primary">Yono Rummy APK</strong>{" "}
                  listed here is verified directly from official Yono Games
                  servers. Whether you want the{" "}
                  <strong className="text-text-primary">
                    best Yono Rummy app
                  </strong>
                  , the{" "}
                  <strong className="text-text-primary">
                    top Yono Rummy apps
                  </strong>{" "}
                  by rating, or simply need an{" "}
                  <strong className="text-text-primary">
                    all Yono Rummy apps
                  </strong>{" "}
                  list — it's all here, updated every day.
                </p>
              </div>

              {/* Stats — 4 columns */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  {
                    label: "Yono Rummy Apps",
                    value: `${sortedApps.length}+`,
                    icon: Trophy,
                    color: "text-primary",
                    gradient: "from-primary/10 to-primary/5",
                    border: "border-primary/20",
                  },
                  {
                    label: "Max Signup Bonus",
                    value: `₹${maxBonus}`,
                    icon: Gift,
                    color: "text-accent",
                    gradient: "from-accent/10 to-accent/5",
                    border: "border-accent/20",
                  },
                  {
                    label: "Min Withdrawal",
                    value: "₹100",
                    icon: Wallet,
                    color: "text-teal",
                    gradient: "from-teal/10 to-teal/5",
                    border: "border-teal/20",
                  },
                  {
                    label: "Avg App Rating",
                    value: avgRating,
                    icon: Star,
                    color: "text-green-accent",
                    gradient: "from-green-accent/10 to-green-accent/5",
                    border: "border-green-accent/20",
                  },
                ].map(
                  ({ label, value, icon: Icon, color, gradient, border }) => (
                    <div
                      key={label}
                      className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-gradient-to-br ${gradient} border ${border} text-center`}
                    >
                      <Icon className={`w-5 h-5 ${color}`} />
                      <span
                        className={`text-xl sm:text-2xl font-extrabold ${color}`}
                      >
                        {value}
                      </span>
                      <span className="text-[10px] text-text-muted font-semibold leading-tight">
                        {label}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </section>

          {/* ── ALL YONO RUMMY APPS ── */}
          <section
            className="max-w-4xl mx-auto px-4 sm:px-6 pb-8"
            aria-labelledby="app-list-heading"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2
                  id="app-list-heading"
                  className="text-xl font-extrabold text-text-primary"
                >
                  All Yono Rummy Apps –{" "}
                  <span className="gradient-text">Complete List 2026</span>
                </h2>
                <p className="text-xs text-text-muted mt-0.5">
                  Sorted by rating — download any Yono Rummy APK and claim your
                  bonus instantly
                </p>
              </div>
              <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full whitespace-nowrap">
                {sortedApps.length} Apps
              </span>
            </div>

            <div className="space-y-2">
              {sortedApps.map((app, i) => (
                <AppCard key={app.slug} app={app} index={i} />
              ))}
            </div>

            {sortedApps.length === 0 && (
              <div className="text-center py-16 content-section">
                <AlertCircle className="w-10 h-10 text-text-muted mx-auto mb-3" />
                <p className="text-text-secondary font-semibold">
                  No Yono Rummy apps found.
                </p>
                <p className="text-sm text-text-muted mt-1">
                  Check back soon — new apps added regularly.
                </p>
              </div>
            )}
          </section>

          {/* ── BONUS COMPARISON TABLE ── targets "top yono rummy apps", "best yono rummy app" */}
          <section
            className="max-w-4xl mx-auto px-4 sm:px-6 pb-8"
            aria-labelledby="comparison-heading"
          >
            <div className="content-section">
              <h2
                id="comparison-heading"
                className="text-xl font-extrabold text-text-primary mb-1"
              >
                Yono Rummy Apps –{" "}
                <span className="gradient-text">Bonus Comparison</span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Comparing the top Yono Rummy apps by bonus, withdrawal speed,
                and rating to help you pick the best one.
              </p>

              <div className="overflow-x-auto -mx-2 sm:mx-0">
                <table className="w-full text-sm border-collapse min-w-[520px]">
                  <thead>
                    <tr className="bg-primary/5 border-b border-card-border">
                      <th className="text-left py-3 px-4 font-bold text-text-primary text-xs">
                        #
                      </th>
                      <th className="text-left py-3 px-4 font-bold text-text-primary text-xs">
                        Yono Rummy App
                      </th>
                      <th className="text-left py-3 px-4 font-bold text-text-primary text-xs">
                        Sign-Up Bonus
                      </th>
                      <th className="text-left py-3 px-4 font-bold text-text-primary text-xs">
                        Min Withdrawal
                      </th>
                      <th className="text-left py-3 px-4 font-bold text-text-primary text-xs">
                        Rating
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedApps.slice(0, 8).map((app, i) => (
                      <tr
                        key={app.slug}
                        className="border-b border-card-border hover:bg-primary/3 transition-colors"
                      >
                        <td className="py-3 px-4 text-text-muted text-xs font-bold">
                          {i + 1}
                        </td>
                        <td className="py-3 px-4">
                          <Link
                            href={`/${app.slug}`}
                            className="font-semibold text-text-primary hover:text-primary transition-colors text-xs"
                          >
                            {app.name}
                          </Link>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-primary font-bold text-xs">
                            {app.bonus}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-text-secondary text-xs">
                          {app.minWithdrawal}
                        </td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-green-accent">
                            <Star className="w-3 h-3 fill-green-accent text-green-accent" />
                            {app.rating}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-text-muted mt-3 text-center">
                All {sortedApps.length} Yono Rummy apps listed above — scroll up
                to see full list
              </p>
            </div>
          </section>

          {/* ── WHY PLAY YONO RUMMY ── */}
          <section
            className="max-w-4xl mx-auto px-4 sm:px-6 pb-8"
            aria-labelledby="why-play-heading"
          >
            <div className="content-section">
              <h2
                id="why-play-heading"
                className="text-xl font-extrabold text-text-primary mb-1"
              >
                Why Play <span className="gradient-text">Yono Rummy</span> for
                Real Money?
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Millions of Indian players choose Yono Rummy games over other
                platforms. Here's why.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: Gift,
                    title: "Instant ₹51–₹550 Sign-Up Bonus",
                    desc: "Every Yono Rummy app gives you a real cash bonus the moment you register — no deposit required. Use the bonus to play your first rummy games for free.",
                    color: "text-primary",
                    bg: "bg-primary/10",
                  },
                  {
                    icon: Zap,
                    title: "5-Minute UPI Withdrawal",
                    desc: "Yono Rummy withdrawal takes 5–15 minutes to reach your UPI account. Minimum withdrawal is just ₹100. Google Pay, PhonePe, Paytm, and direct bank transfer all supported.",
                    color: "text-teal",
                    bg: "bg-teal/10",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Safe & Official APK Files",
                    desc: "All Yono Rummy APK links go to official servers only. No modified files, no viruses, no excessive permissions. Safe to install on any Android phone.",
                    color: "text-accent",
                    bg: "bg-accent/10",
                  },
                  {
                    icon: Users,
                    title: "Earn with Yono Rummy Referral",
                    desc: "After registration, get your personal referral link. Each friend who downloads and registers earns you ₹50–₹500 in referral commission — unlimited earning potential.",
                    color: "text-green-accent",
                    bg: "bg-green-accent/10",
                  },
                  {
                    icon: Trophy,
                    title: "Multiple Rummy Variants",
                    desc: "Yono Rummy apps offer Points Rummy, Pool Rummy (101 and 201), and Deals Rummy. Tables start from ₹5 entry — perfect for beginners and high-stakes players alike.",
                    color: "text-primary",
                    bg: "bg-primary/10",
                  },
                  {
                    icon: Award,
                    title: "Daily Tournaments & Jackpots",
                    desc: "Top Yono Rummy apps run daily cash tournaments with prize pools from ₹500 to ₹1 lakh. Win extra cash beyond your regular rummy games without any additional entry risk.",
                    color: "text-accent",
                    bg: "bg-accent/10",
                  },
                ].map(({ icon: Icon, title, desc, color, bg }) => (
                  <div
                    key={title}
                    className="flex gap-3 p-4 rounded-2xl bg-bg border border-card-border hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <div
                      className={`w-10 h-10 min-w-10 rounded-xl ${bg} flex items-center justify-center`}
                    >
                      <Icon className={`w-5 h-5 ${color}`} />
                    </div>
                    <div>
                      <p className="font-bold text-text-primary text-sm mb-1">
                        {title}
                      </p>
                      <p className="text-text-secondary text-xs leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── HOW TO DOWNLOAD YONO RUMMY APK ── HowTo schema rich result */}
          <section
            className="max-w-4xl mx-auto px-4 sm:px-6 pb-8"
            aria-labelledby="download-guide-heading"
          >
            <div className="content-section">
              <h2
                id="download-guide-heading"
                className="text-xl font-extrabold text-text-primary mb-1"
              >
                How to Download{" "}
                <span className="gradient-text">Yono Rummy APK</span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Download, install, and start playing Yono Rummy in under 3
                minutes on any Android phone.
              </p>

              <div className="relative">
                <div
                  className="absolute left-[19px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary/40 via-teal/30 to-green-accent/20"
                  aria-hidden="true"
                />
                <div className="space-y-5">
                  {[
                    {
                      num: "01",
                      title: "Choose Your Yono Rummy App",
                      desc: (
                        <>
                          Browse the{" "}
                          <strong className="text-text-primary">
                            Yono Rummy apps
                          </strong>{" "}
                          list above — sorted by rating. Each card shows the
                          sign-up bonus, minimum withdrawal, and user rating.
                          Pick the{" "}
                          <strong className="text-text-primary">
                            best Yono Rummy app
                          </strong>{" "}
                          that matches your budget.
                        </>
                      ),
                    },
                    {
                      num: "02",
                      title: "Download the Official Yono Rummy APK",
                      desc: (
                        <>
                          Tap the card, then click "Download". The{" "}
                          <strong className="text-text-primary">
                            Yono Rummy APK download
                          </strong>{" "}
                          comes directly from the official Yono Games server —{" "}
                          <strong>
                            no third-party hosting, completely safe
                          </strong>
                          . Approve the download if your browser asks.
                        </>
                      ),
                    },
                    {
                      num: "03",
                      title: "Enable Install Unknown Apps",
                      desc: (
                        <>
                          Open the APK. Go to{" "}
                          <strong>
                            Settings → Security → Install Unknown Apps
                          </strong>{" "}
                          and allow installation from your browser. This
                          one-time setting is required for all APK files outside
                          the Play Store.
                        </>
                      ),
                    },
                    {
                      num: "04",
                      title: "Register & Get Your Bonus Instantly",
                      desc: (
                        <>
                          Open the installed app, tap Register, and enter your
                          mobile number. Your{" "}
                          <strong className="text-primary">
                            Yono Rummy sign-up bonus
                          </strong>{" "}
                          is credited to your wallet <strong>instantly</strong>{" "}
                          — no promo code needed. Start playing immediately.
                        </>
                      ),
                    },
                  ].map(({ num, title, desc }) => (
                    <div key={num} className="flex gap-4 relative">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-extrabold text-xs z-10">
                        {num}
                      </div>
                      <div className="flex-1 pb-2">
                        <p className="font-bold text-text-primary text-sm mb-1">
                          {title}
                        </p>
                        <p className="text-text-secondary text-xs leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 p-4 bg-teal/5 border border-teal/20 rounded-2xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <p className="text-xs text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">
                    Safe Download Guarantee:
                  </strong>{" "}
                  Every Yono Rummy APK on AllYonoMax links to official servers
                  only. We never host, modify, or redirect APK files. Your
                  phone's security is our priority.
                </p>
              </div>
            </div>
          </section>

          {/* ── YONO RUMMY WITHDRAWAL GUIDE ── targets "yono rummy withdrawal" +900% YoY */}
          <section
            className="max-w-4xl mx-auto px-4 sm:px-6 pb-8"
            aria-labelledby="withdrawal-heading"
          >
            <div className="content-section">
              <h2
                id="withdrawal-heading"
                className="text-xl font-extrabold text-text-primary mb-1"
              >
                Yono Rummy{" "}
                <span className="gradient-text">Withdrawal Guide</span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                How to withdraw your Yono Rummy winnings — minimum amounts,
                time, and UPI options explained.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                {[
                  {
                    icon: Wallet,
                    title: "Minimum Withdrawal",
                    value: "₹100",
                    desc: "Most Yono Rummy apps allow withdrawal starting ₹100. Some apps offer ₹50 minimum during promotions.",
                    color: "text-teal",
                    bg: "bg-teal/10",
                    border: "border-teal/20",
                  },
                  {
                    icon: Zap,
                    title: "Withdrawal Time",
                    value: "5–15 Min",
                    desc: "UPI withdrawals process in 5–15 minutes. Bank transfers may take up to 24 hours on weekends.",
                    color: "text-primary",
                    bg: "bg-primary/10",
                    border: "border-primary/20",
                  },
                  {
                    icon: CreditCard,
                    title: "Payment Methods",
                    value: "UPI / Bank",
                    desc: "Google Pay, PhonePe, Paytm, BHIM, and direct bank account transfer all supported.",
                    color: "text-accent",
                    bg: "bg-accent/10",
                    border: "border-accent/20",
                  },
                ].map(
                  ({ icon: Icon, title, value, desc, color, bg, border }) => (
                    <div
                      key={title}
                      className={`p-4 rounded-2xl border ${border} ${bg} flex flex-col gap-2`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className={`w-5 h-5 ${color}`} />
                        <span className="text-xs font-bold text-text-primary">
                          {title}
                        </span>
                      </div>
                      <span className={`text-2xl font-extrabold ${color}`}>
                        {value}
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  ),
                )}
              </div>

              <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl">
                <p className="font-bold text-text-primary text-sm mb-2">
                  How to Withdraw from Yono Rummy — Step by Step:
                </p>
                <ol className="space-y-1.5 text-xs text-text-secondary list-decimal list-inside leading-relaxed">
                  <li>Open your Yono Rummy app and go to the Wallet section</li>
                  <li>Tap "Withdraw" and enter the amount (minimum ₹100)</li>
                  <li>Select your UPI ID or bank account</li>
                  <li>
                    Confirm the withdrawal — funds arrive within 5–15 minutes
                  </li>
                  <li>Check your UPI app for the credit notification</li>
                </ol>
                <p className="text-xs text-text-muted mt-3">
                  💡 <strong className="text-text-primary">Pro tip:</strong>{" "}
                  Withdraw a small amount first to verify your account details
                  before withdrawing larger winnings.
                </p>
              </div>
            </div>
          </section>

          {/* ── YONO RUMMY RULES ── targets "yono rummy rules" +900% YoY */}
          <section
            className="max-w-4xl mx-auto px-4 sm:px-6 pb-8"
            aria-labelledby="rules-heading"
          >
            <div className="content-section">
              <h2
                id="rules-heading"
                className="text-xl font-extrabold text-text-primary mb-1"
              >
                Yono Rummy{" "}
                <span className="gradient-text">Rules & How to Win</span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Understanding Yono Rummy rules is the first step to winning real
                cash consistently.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Rules list */}
                <div className="space-y-3">
                  <p className="font-bold text-text-primary text-sm">
                    Basic Yono Rummy Rules (13-Card):
                  </p>
                  {[
                    {
                      n: "1",
                      rule: "Arrange 13 cards into valid sequences and sets",
                    },
                    {
                      n: "2",
                      rule: "A pure sequence (no joker) is mandatory to declare",
                    },
                    {
                      n: "3",
                      rule: "Jokers can replace any missing card in sets or impure sequences",
                    },
                    {
                      n: "4",
                      rule: "First player to form a valid hand and declare wins",
                    },
                    {
                      n: "5",
                      rule: "Wrong declaration = maximum 80 points penalty",
                    },
                  ].map(({ n, rule }) => (
                    <div key={n} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-bold">
                          {n}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm leading-snug">
                        {rule}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tips */}
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <p className="font-bold text-text-primary text-sm mb-3">
                    💡 Tips to Win at Yono Rummy:
                  </p>
                  <ul className="space-y-2 text-xs text-text-secondary">
                    {[
                      "Always form your pure sequence first — it protects you from high penalties",
                      "Use your sign-up bonus to practice before depositing real money",
                      "Start with ₹5–₹10 entry tables as a beginner, move up gradually",
                      "Track which cards opponents are picking from the discard pile",
                      "Withdraw small amounts first to test each app's withdrawal speed",
                      "Download multiple Yono Rummy apps to claim bonuses from each one",
                    ].map((tip) => (
                      <li key={tip} className="flex items-start gap-2">
                        <BadgeCheck className="w-3.5 h-3.5 text-green-accent flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Variants table */}
              <div className="mt-5 overflow-x-auto -mx-2 sm:mx-0">
                <table className="w-full text-xs border-collapse min-w-[420px]">
                  <thead>
                    <tr className="bg-primary/5 border-b border-card-border">
                      <th className="text-left py-2.5 px-4 font-bold text-text-primary">
                        Rummy Variant
                      </th>
                      <th className="text-left py-2.5 px-4 font-bold text-text-primary">
                        Players
                      </th>
                      <th className="text-left py-2.5 px-4 font-bold text-text-primary">
                        Entry
                      </th>
                      <th className="text-left py-2.5 px-4 font-bold text-text-primary">
                        Best For
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Points Rummy", "2–6", "₹5+", "Quick games (5–10 min)"],
                      [
                        "Pool Rummy 101",
                        "2–6",
                        "₹10+",
                        "Casual sessions (30 min)",
                      ],
                      [
                        "Pool Rummy 201",
                        "2–6",
                        "₹20+",
                        "Extended play (60 min)",
                      ],
                      ["Deals Rummy", "2–6", "₹15+", "Fixed-round games"],
                    ].map(([variant, players, entry, bestFor]) => (
                      <tr
                        key={variant}
                        className="border-b border-card-border hover:bg-primary/3 transition-colors"
                      >
                        <td className="py-2.5 px-4 font-semibold text-text-primary">
                          {variant}
                        </td>
                        <td className="py-2.5 px-4 text-text-secondary">
                          {players}
                        </td>
                        <td className="py-2.5 px-4 text-primary font-bold">
                          {entry}
                        </td>
                        <td className="py-2.5 px-4 text-text-secondary">
                          {bestFor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── INTERNAL LINKS — only real existing pages ── */}
          <section
            className="max-w-4xl mx-auto px-4 sm:px-6 pb-8"
            aria-labelledby="explore-heading"
          >
            <div className="content-section">
              <h2
                id="explore-heading"
                className="text-xl font-extrabold text-text-primary mb-1"
              >
                Explore More{" "}
                <span className="gradient-text">Yono Game Categories</span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Looking for other Yono games beyond Rummy? Browse these
                dedicated pages.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    name: "All Yono Games",
                    href: "/",
                    icon: Trophy,
                    desc: `Complete directory — all ${allApps.length}+ Yono apps in one place`,
                    color: "text-primary",
                    bg: "bg-primary/10",
                    border: "border-primary/20",
                  },
                  {
                    name: "New Yono Games",
                    href: "/new-yono-games",
                    icon: Flame,
                    desc: "Latest launches with the highest sign-up bonuses",
                    color: "text-accent",
                    bg: "bg-accent/10",
                    border: "border-accent/20",
                  },
                  {
                    name: "Yono Slots",
                    href: "/yono-slots",
                    icon: Crown,
                    desc: "Slots, 777, and spin-to-win apps with jackpots",
                    color: "text-teal",
                    bg: "bg-teal/10",
                    border: "border-teal/20",
                  },
                ].map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className={`group flex flex-col gap-3 p-4 rounded-2xl bg-bg border ${cat.border} hover:shadow-md transition-all`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl ${cat.bg} flex items-center justify-center`}
                      >
                        <Icon className={`w-5 h-5 ${cat.color}`} />
                      </div>
                      <div>
                        <p
                          className={`font-bold text-sm ${cat.color} group-hover:underline`}
                        >
                          {cat.name}
                        </p>
                        <p className="text-xs text-text-muted mt-0.5 leading-snug">
                          {cat.desc}
                        </p>
                      </div>
                      <div
                        className={`flex items-center gap-1 text-xs font-semibold ${cat.color}`}
                      >
                        View all <ArrowRight className="w-3 h-3" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section
            className="max-w-4xl mx-auto px-4 sm:px-6 pb-12"
            aria-labelledby="faq-heading"
          >
            <div className="content-section">
              <h2
                id="faq-heading"
                className="text-xl font-extrabold text-text-primary mb-1"
              >
                Yono Rummy –{" "}
                <span className="gradient-text">
                  Frequently Asked Questions
                </span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Everything you need to know about{" "}
                <strong className="text-text-primary">Yono Rummy</strong>, from
                download to withdrawal.
              </p>

              <div className="space-y-2">
                {faqData.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-card-border overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-4 bg-bg cursor-pointer list-none gap-3 hover:bg-primary/5 transition-colors">
                      <h3 className="text-sm font-semibold text-text-primary text-left">
                        {faq.question}
                      </h3>
                      <span className="text-text-muted flex-shrink-0 group-open:rotate-180 transition-transform duration-200">
                        ▾
                      </span>
                    </summary>
                    <div className="px-4 pb-4 pt-2 border-t border-card-border bg-white/70">
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 p-5 bg-gradient-to-r from-primary/8 to-accent/8 border border-primary/10 rounded-2xl text-center">
                <p className="text-sm font-bold text-text-primary mb-1">
                  Ready to play Yono Rummy?
                </p>
                <p className="text-xs text-text-secondary mb-3">
                  Download any Yono Rummy app above and claim up to ₹{maxBonus}{" "}
                  bonus today. No deposit required.
                </p>
                <Link
                  href="#app-list-heading"
                  className="btn-primary text-sm px-5 py-2.5 inline-flex items-center gap-2"
                >
                  View All Yono Rummy Apps
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingTelegram />
      </div>
    </>
  );
}
