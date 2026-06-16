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
  Sparkles,
  Trophy,
  Crown,
  Gamepad,
  Dice6,
  Clock,
  Users,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
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

const PAGE_URL = "https://allyonomax.com/new-yono-games";

export const metadata = {
  title:
    "New Yono Games 2026 — Latest Yono Apps Download | ₹550 Bonus | AllYonoMax",
  description:
    "Download the latest new Yono Games and new Yono apps in 2026. Get ₹51 to ₹550 sign-up bonus on every new Yono game. Updated daily with the freshest Yono app launches, highest bonuses, and instant UPI withdrawal options. 70+ Yono apps available.",
  keywords: [
    "new yono games",
    "new yono apps",
    "latest yono games",
    "new yono game download",
    "yono games 2026",
    "new yono game apk",
    "yono new games",
    "latest yono apps 2026",
    "new yono app bonus",
    "yono games latest version",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "New Yono Games 2026 — Latest Yono Apps Download | AllYonoMax",
    description:
      "Download the latest new Yono Games and new Yono apps. Get ₹51–₹550 bonus on every new launch. Updated daily with 70+ Yono apps.",
    url: PAGE_URL,
    siteName: "AllYonoMax",
    type: "website",
    images: [
      {
        url: "https://allyonomax.com/logo.webp",
        width: 512,
        height: 512,
        alt: "New Yono Games 2026 — AllYonoMax",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Yono Games 2026 — Latest Yono Apps Download",
    description:
      "Download the latest new Yono Games. Get ₹51–₹550 bonus. Updated daily.",
    images: ["https://allyonomax.com/logo.webp"],
  },
};

const faqData = [
  {
    question: "What are the newest Yono Games available in 2026?",
    answer:
      "AllYonoMax tracks every new Yono game launch in real time. The newest Yono apps are listed on this page with their current sign-up bonus, minimum withdrawal amount, and direct APK download link. New Yono games typically launch every week, and this page is updated the moment each one goes live. Currently we have 70+ new Yono games listed with bonuses ranging from ₹51 to ₹550.",
  },
  {
    question: "Do new Yono apps give higher bonuses than older ones?",
    answer:
      "Yes — new Yono apps almost always launch with promotional bonuses higher than their long-term offer. It is common to see ₹150 to ₹550 sign-up bonuses on freshly launched Yono games, while the same app may reduce the offer after a few weeks. Downloading a new Yono app early is the best way to lock in the highest bonus.",
  },
  {
    question: "How do I download a new Yono app safely?",
    answer:
      "Tap on any new Yono game listed on this page. On the app's page, tap the Download button to get the official APK file. Enable 'Install Unknown Apps' in your phone settings, install the APK, and register with your mobile number. Your sign-up bonus is credited instantly. AllYonoMax links go directly to the official Yono Games servers — no third-party files, no redirects, completely safe.",
  },
  {
    question: "Are new Yono games safe to install?",
    answer:
      "Every Yono app listed on AllYonoMax is verified and links to the official Yono Games server. The apps use standard UPI payment infrastructure for deposits and withdrawals — the same system used by Google Pay, PhonePe, and Paytm. As with any APK installation, ensure you are downloading from a trusted source. AllYonoMax is one of India's most referenced Yono Games directories with daily updates.",
  },
  {
    question: "How often does AllYonoMax add new Yono games?",
    answer:
      "This page is updated the same day a new Yono game launches. The Yono Games platform releases new apps regularly — sometimes multiple apps in a single week. AllYonoMax monitors every new launch so you never miss a high-bonus new Yono app. We also track bonus changes, so you always see the current offer, not outdated information.",
  },
  {
    question: "Can I earn by referring friends to new Yono apps?",
    answer:
      "Yes. Every new Yono app includes a referral program. Once you register, you receive a personal referral link. When a friend downloads the new Yono app through your link and registers, you earn a commission — typically ₹50 to ₹500 per referral depending on the app. Some new Yono games offer double commissions during the launch week.",
  },
  {
    question: "What is the minimum withdrawal amount in new Yono games?",
    answer:
      "Most new Yono apps have a minimum withdrawal of ₹100. Some apps offer lower limits like ₹50 during launch promotions. All apps listed on AllYonoMax support UPI withdrawal directly to your bank account. Withdrawal processing time is typically 5–15 minutes for new Yono apps during their launch period.",
  },
  {
    question: "Which new Yono game gives the highest bonus right now?",
    answer:
      "Bonus amounts change frequently as new Yono apps launch and older offers expire. The highest bonus among currently listed new Yono games is shown on the app cards on this page. We recommend checking the cards sorted by rating — higher-rated apps tend to maintain their bonus offers longer.",
  },
];

// Category links — only link to pages that actually EXIST
const categoryLinks = [
  {
    label: "All Yono Games",
    href: "/",
    icon: Trophy,
    desc: "Complete directory of every Yono app",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    label: "Yono Rummy",
    href: "/yono-rummy",
    icon: Crown,
    desc: "All rummy apps with real cash prizes",
    color: "text-teal",
    bg: "bg-teal/10",
    border: "border-teal/20",
  },
  {
    label: "Yono Slots & 777",
    href: "/yono-slots",
    icon: Gamepad,
    desc: "Slots, 777, and spin-to-win apps",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
];

export default function NewYonoGamesPage() {
  const allApps = getAllApps();

  const newApps = allApps.filter((a) => a.isNew || a.isHot || a.isTrending);
  const sortedNew = [...newApps].sort((a, b) => {
    const rA =
      typeof a.rating === "number" ? a.rating : parseFloat(a.rating) || 0;
    const rB =
      typeof b.rating === "number" ? b.rating : parseFloat(b.rating) || 0;
    return rB - rA;
  });

  const maxBonus = Math.max(
    ...newApps.map((a) => parseInt(a.bonus?.replace(/[^0-9]/g, "")) || 0),
    0,
  );

  const breadcrumbs = [
    { name: "Home", url: "https://allyonomax.com" },
    { name: "New Yono Games", url: PAGE_URL },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faq={faqData} />
      <CollectionPageSchema
        pageUrl={PAGE_URL}
        pageName="New Yono Games 2026 — Latest Yono Apps Download"
        pageDescription="Download the latest new Yono Games and new Yono apps in 2026. Get ₹51 to ₹550 sign-up bonus on every new Yono game. Updated daily."
      />
      <ItemListSchema apps={sortedNew} pageUrl={PAGE_URL} />

      <div className="bg-bg min-h-screen">
        <Navbar />

        {/* ── BREADCRUMB ── */}
        <nav
          className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 pb-1"
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
            <li className="text-text-primary font-semibold">New Yono Games</li>
          </ol>
        </nav>

        <main>
          {/* ── HERO ── */}
          <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-2 pb-4">
            <div
              className="content-section mb-5"
              style={{
                background: "linear-gradient(135deg, #fff 0%, #fff7f7 100%)",
              }}
            >
              {/* Badge row */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-primary text-white px-2.5 py-1 rounded-full">
                  <Flame className="w-3 h-3" />
                  Updated Daily
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-green-accent/10 text-green-accent px-2.5 py-1 rounded-full border border-green-accent/20">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Links
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-accent/10 text-accent px-2.5 py-1 rounded-full border border-accent/20">
                  <RefreshCw className="w-3 h-3" />
                  2026 Edition
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight mb-3">
                New Yono Games 2026 —{" "}
                <span className="gradient-text">Latest Yono Apps</span>
              </h1>

              {/* Intro paragraphs */}
              <div className="space-y-3 text-sm text-text-secondary leading-relaxed mb-5">
                <p>
                  <strong className="text-text-primary">New Yono Games</strong>{" "}
                  are the freshest additions to the Yono Games ecosystem. Every{" "}
                  <strong className="text-text-primary">new Yono app</strong>{" "}
                  launches with its highest-ever sign-up bonus — typically{" "}
                  <strong className="text-primary">₹150 to ₹550</strong> —
                  before settling into a lower long-term rate. Downloading early
                  locks you in at the peak offer.
                </p>
                <p>
                  AllYonoMax monitors every new Yono game launch and adds it to
                  this page the same day it goes live. Every listing shows the
                  verified bonus, minimum withdrawal (as low as ₹100), and a
                  direct APK download link to the official Yono Games server —
                  no redirects, no third-party files.
                </p>
              </div>

              {/* Stats row — premium design */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  {
                    label: "New Apps",
                    value: `${sortedNew.length}+`,
                    icon: Sparkles,
                    color: "text-primary",
                    bg: "from-primary/10 to-primary/5",
                    border: "border-primary/20",
                  },
                  {
                    label: "Max Bonus",
                    value: `Up to ₹${maxBonus}`,
                    icon: Gift,
                    color: "text-accent",
                    bg: "from-accent/10 to-accent/5",
                    border: "border-accent/20",
                  },
                ].map(({ label, value, icon: Icon, color, bg, border }) => (
                  <div
                    key={label}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-gradient-to-br ${bg} border ${border} text-center`}
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
                ))}
              </div>
            </div>
          </section>

          {/* ── APP LIST ── */}
          <section
            className="max-w-3xl mx-auto px-4 sm:px-6 pb-8"
            aria-labelledby="app-list-heading"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2
                  id="app-list-heading"
                  className="text-lg font-extrabold text-text-primary"
                >
                  All New Yono Apps{" "}
                  <span className="text-sm font-semibold text-text-muted">
                    (2026)
                  </span>
                </h2>
                <p className="text-xs text-text-muted mt-0.5">
                  Sorted by rating — grab the highest bonuses before they drop
                </p>
              </div>
              <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                {sortedNew.length} Apps
              </span>
            </div>

            <div className="space-y-2">
              {sortedNew.map((app, i) => (
                <AppCard key={app.slug} app={app} index={i} />
              ))}
            </div>

            {sortedNew.length === 0 && (
              <div className="text-center py-16 content-section">
                <AlertCircle className="w-10 h-10 text-text-muted mx-auto mb-3" />
                <p className="text-text-secondary font-semibold">
                  No new apps right now.
                </p>
                <p className="text-sm text-text-muted mt-1">
                  Check back soon — new Yono games launch every week.
                </p>
              </div>
            )}
          </section>

          {/* ── WHY NEW FIRST ── */}
          <section
            className="max-w-3xl mx-auto px-4 sm:px-6 pb-8"
            aria-labelledby="why-new-heading"
          >
            <div className="content-section">
              <h2
                id="why-new-heading"
                className="text-xl font-extrabold text-text-primary mb-1"
              >
                Why Download{" "}
                <span className="gradient-text">New Yono Games</span> First?
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                There are real, measurable advantages to joining a Yono app at
                launch rather than months later.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: Gift,
                    title: "Highest Launch Bonuses",
                    desc: "New Yono games set their sign-up bonus at its peak during launch — ₹150 to ₹550 is common. The same app often drops to ₹51–₹100 after the first month. Early adopters lock in the best deal.",
                    color: "text-primary",
                    bg: "bg-primary/10",
                  },
                  {
                    icon: TrendingUp,
                    title: "Less Competition, More Earnings",
                    desc: "With fewer players on a newly launched Yono game, referral pools are smaller. Early adopters consistently earn 2–3x more per referral than users who join after the app is established.",
                    color: "text-teal",
                    bg: "bg-teal/10",
                  },
                  {
                    icon: Zap,
                    title: "Faster Withdrawals at Launch",
                    desc: "New Yono apps prioritize fast UPI settlements during their launch period to build a positive reputation. Many early users report same-minute withdrawals — faster than mature apps.",
                    color: "text-accent",
                    bg: "bg-accent/10",
                  },
                  {
                    icon: BadgeCheck,
                    title: "Exclusive Launch Promotions",
                    desc: "Fresh Yono new games run limited-time offers — extra cashback, bonus spins, and boosted referral rates — that disappear once the app matures. Launch week offers can double your earnings.",
                    color: "text-green-accent",
                    bg: "bg-green-accent/10",
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

          {/* ── HOW TO DOWNLOAD ── */}
          <section
            className="max-w-3xl mx-auto px-4 sm:px-6 pb-8"
            aria-labelledby="how-to-download-heading"
          >
            <div className="content-section">
              <h2
                id="how-to-download-heading"
                className="text-xl font-extrabold text-text-primary mb-1"
              >
                How to Download{" "}
                <span className="gradient-text">New Yono Apps</span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                From this page to a registered account with bonus — in under 3
                minutes.
              </p>

              {/* Stepped guide with connector line */}
              <div className="relative">
                {/* Vertical connector */}
                <div
                  className="absolute left-[19px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary/40 via-teal/30 to-green-accent/20"
                  aria-hidden="true"
                />

                <div className="space-y-4">
                  {[
                    {
                      num: "01",
                      title: "Choose a New Yono Game",
                      desc: (
                        <>
                          Browse the{" "}
                          <strong className="text-text-primary">
                            new Yono apps
                          </strong>{" "}
                          listed above. Each card shows the current bonus,
                          rating, and minimum withdrawal — pick the{" "}
                          <strong className="text-text-primary">
                            latest Yono app
                          </strong>{" "}
                          that matches your preferred game type (Rummy, Slots,
                          Spin, etc.).
                        </>
                      ),
                    },
                    {
                      num: "02",
                      title: "Download the Official APK",
                      desc: (
                        <>
                          Tap the app card and hit "Download" on the app's page.
                          The APK downloads directly from the official Yono
                          Games server —{" "}
                          <strong>
                            no third-party hosting, completely safe
                          </strong>
                          . Approve the download if your browser asks.
                        </>
                      ),
                    },
                    {
                      num: "03",
                      title: "Install & Enable Unknown Sources",
                      desc: (
                        <>
                          Open the downloaded APK. If prompted, go to{" "}
                          <strong>
                            Settings → Security → Install Unknown Apps
                          </strong>{" "}
                          and allow installation from your browser. Tap
                          "Install" — the{" "}
                          <strong className="text-text-primary">
                            new Yono game
                          </strong>{" "}
                          installs in under 30 seconds.
                        </>
                      ),
                    },
                    {
                      num: "04",
                      title: "Register & Claim Your Bonus",
                      desc: (
                        <>
                          Open the app, register with your mobile number, and
                          your sign-up bonus is credited to your wallet{" "}
                          <strong>instantly</strong>. No promo code needed — the
                          AllYonoMax referral link applies the bonus
                          automatically.
                        </>
                      ),
                    },
                  ].map(({ num, title, desc }, i) => (
                    <div key={num} className="flex gap-4 relative">
                      {/* Step circle */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-extrabold text-xs z-10">
                        {num}
                      </div>
                      {/* Content */}
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

              {/* Safety callout */}
              <div className="mt-5 p-4 bg-teal/5 border border-teal/20 rounded-2xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <div className="text-xs text-text-secondary leading-relaxed">
                  <p>
                    <strong className="text-text-primary">
                      Safe Download Guarantee:
                    </strong>{" "}
                    Every APK link on AllYonoMax points directly to the official
                    Yono Games server. We do not host files, modify APKs, or use
                    redirects.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── CATEGORY HUB LINKS ── */}
          <section
            className="max-w-3xl mx-auto px-4 sm:px-6 pb-8"
            aria-labelledby="categories-heading"
          >
            <div className="content-section">
              <h2
                id="categories-heading"
                className="text-xl font-extrabold text-text-primary mb-1"
              >
                Explore More{" "}
                <span className="gradient-text">Yono Game Categories</span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Looking for a specific type of Yono game? Browse dedicated
                category pages with complete listings.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {categoryLinks.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className={`group flex flex-col gap-3 p-4 rounded-2xl bg-bg border ${cat.border} hover:shadow-md hover:border-opacity-60 transition-all`}
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
                          {cat.label}
                        </p>
                        <p className="text-xs text-text-muted mt-0.5 leading-snug">
                          {cat.desc}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-text-muted group-hover:text-primary transition-colors">
                        View all
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section
            className="max-w-3xl mx-auto px-4 sm:px-6 pb-12"
            aria-labelledby="faq-heading"
          >
            <div className="content-section">
              <h2
                id="faq-heading"
                className="text-xl font-extrabold text-text-primary mb-1"
              >
                Frequently Asked{" "}
                <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Everything you need to know about{" "}
                <strong className="text-text-primary">new Yono games</strong>,{" "}
                bonuses, downloads, and withdrawals.
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
                      <span className="text-text-muted flex-shrink-0 transition-transform group-open:rotate-180 duration-200">
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
              <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-2xl text-center">
                <p className="text-sm font-bold text-text-primary mb-1">
                  Ready to start?
                </p>
                <p className="text-xs text-text-secondary mb-3">
                  Download any new Yono game above and claim your ₹{maxBonus}{" "}
                  sign-up bonus today.
                </p>
                <Link
                  href="/"
                  className="btn-primary text-sm px-5 py-2 inline-flex items-center gap-2"
                >
                  View All Yono Games
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
