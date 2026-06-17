export const revalidate = 86400;

import Link from "next/link";
import {
  Gift, Wallet, Star, ShieldCheck, Zap, ArrowRight,
  BadgeCheck, Flame, Trophy, Crown, Users, CheckCircle2,
  AlertCircle, RefreshCw, Award, CreditCard,
  Sparkles, Gamepad, Coins, Rocket, MessageCircle, Tag
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";
import AppCard from "@/components/AppCard";
import { getAllApps } from "@/lib/helpers";
import {
  FAQSchema, BreadcrumbSchema, CollectionPageSchema, ItemListSchema
} from "@/components/SchemaMarkup";

const PAGE_URL = "https://allyonomax.com/yono-slots";

export const metadata = {
  title: "Yono Slots – Download Yono Slots APK, Jaiho Slots & All Yono Slot Games 2026 | AllYonoMax",
  description:
    "Download Yono Slots APK and Jaiho Slots with ₹51–₹550 sign-up bonus. Complete list of all Yono Slots apps 2026 including Yono 777 Slots, Yono Slot Game, Goa Spin, and more. Best Yono Slots app — verified, safe, instant UPI withdrawal. Updated daily.",
  keywords: [
    "yono slots",
    "yono slot game",
    "yono slots game",
    "all yono slots",
    "yono slots apk",
    "yono slots download",
    "yono slot apk",
    "jaiho slots",
    "jaiho slots apk",
    "jaiho slots download",
    "yono 777 slots",
    "yono slots 777",
    "yono slots app",
    "yono slots real money",
    "yono slots list",
    "slots yono",
    "yono slots 2026",
    "yono slots online",
    "yono slots apk download",
    "yono slots app download",
    "yono slots game download",
    "yono slots real or fake",
    "best yono slots app",
    "yono arcade slots",
    "yono slots promo code",
    "yono slots new app",
    "yono slots withdrawal",
    "yono slots telegram",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Yono Slots – Download Yono Slots APK, Jaiho Slots & All Yono Slot Games 2026 | AllYonoMax",
    description:
      "Download Yono Slots APK & Jaiho Slots with ₹51–₹550 bonus. All Yono Slots 2026 — verified, safe, instant UPI withdrawal.",
    url: PAGE_URL,
    siteName: "AllYonoMax",
    type: "website",
    images: [
      {
        url: "https://allyonomax.com/logo.webp",
        width: 512,
        height: 512,
        alt: "Yono Slots APK Download 2026 — AllYonoMax",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yono Slots – Download Yono Slots APK 2026 | AllYonoMax",
    description:
      "Download Yono Slots APK & Jaiho Slots. ₹51–₹550 bonus. All Yono Slot Games 2026.",
    images: ["https://allyonomax.com/logo.webp"],
  },
};

// HowTo Schema — targets "how to download yono slots apk" rich result
function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Download Yono Slots APK",
    description:
      "Step-by-step guide to download and install Yono Slots APK on Android and claim your sign-up bonus.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Choose a Yono Slots App",
        text: "Browse the all Yono Slots apps list on AllYonoMax. Each card shows the bonus, rating, and minimum withdrawal. Pick the best Yono Slots app with the highest jackpot.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Download the Yono Slots APK",
        text: "Tap the Download button. The official Yono Slots APK downloads directly from the official server — no third-party files, completely safe.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Enable Unknown Sources",
        text: "Go to Settings → Security → Install Unknown Apps and allow installation from your browser. One-time step.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Install, Register & Claim Bonus",
        text: "Tap Install, open the Yono Slots app, register with your mobile number. Sign-up bonus is credited instantly — no promo code needed.",
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
    question: "What is Yono Slots?",
    answer:
      "Yono Slots is a real money slot gaming app where players spin reels, hit jackpots, and earn real cash with instant UPI withdrawals. Yono Slots apps are among the most popular real money gaming apps in India, with 500,000+ monthly searches. Every Yono Slots game gives a sign-up bonus from ₹51 to ₹550 just for registering — no deposit required.",
  },
  {
    question: "What is Jaiho Slots?",
    answer:
      "Jaiho Slots is one of the most popular Yono Slots apps in India with 500,000 monthly searches. It offers classic slot games, 777 jackpots, and daily bonus spins. Jaiho Slots APK can be downloaded directly from the official Yono Games server. Players get an instant sign-up bonus and can withdraw winnings in 5–15 minutes via UPI.",
  },
  {
    question: "Is Yono Slots real or fake?",
    answer:
      "Yono Slots is real. All Yono Slots apps listed on AllYonoMax are verified working apps with real UPI withdrawal support. Players across India successfully withdraw winnings to Google Pay, PhonePe, and Paytm. The apps use standard UPI payment infrastructure — the same system used by all major banking apps in India.",
  },
  {
    question: "How to download Yono Slots APK on Android?",
    answer:
      "To download Yono Slots APK: (1) Tap any Yono Slots app listed on this page, (2) Click Download to get the official APK, (3) Enable 'Install Unknown Apps' from Settings → Security, (4) Install the APK and register with your mobile number. Your bonus is credited instantly. All Yono Slots APK links go directly to official servers.",
  },
  {
    question: "How to download Jaiho Slots APK?",
    answer:
      "To download Jaiho Slots APK: Find the Jaiho Slots card on this page and tap Download. The Jaiho Slots APK downloads from the official Yono Games server. Enable Install Unknown Apps in your Android settings, install the APK, and register. Your Jaiho Slots sign-up bonus is credited instantly to your wallet.",
  },
  {
    question: "What is the Yono Slots sign-up bonus?",
    answer:
      "Yono Slots sign-up bonus ranges from ₹51 to ₹550. New Yono Slots apps in 2026 typically offer ₹150–₹550 as a launch bonus before dropping to ₹51–₹100. All bonuses are credited instantly after registration with no deposit required.",
  },
  {
    question: "What is Yono 777 Slots?",
    answer:
      "Yono 777 Slots are a special category of slot games featuring the lucky number 777. These apps offer higher jackpot probabilities and special bonus rounds. Both 'yono 777 slots' and 'yono slots 777' searches have grown +900% in 2026, making them the fastest-growing segment in the Yono Slots ecosystem.",
  },
  {
    question: "Is there a Yono Slots promo code?",
    answer:
      "Most Yono Slots apps do not require a promo code — the sign-up bonus is applied automatically when you register through AllYonoMax referral links. Some apps occasionally release limited-time promo codes via their official Telegram channels. Check the app's official Telegram group for the latest Yono Slots promo codes.",
  },
  {
    question: "What is the minimum withdrawal in Yono Slots?",
    answer:
      "Most Yono Slots apps have a minimum withdrawal of ₹100. Some apps offer ₹50 minimum during launch promotions. Withdrawal time is 5–15 minutes via UPI — Google Pay, PhonePe, Paytm, and direct bank transfer all supported.",
  },
  {
    question: "Does Yono Slots have a referral program?",
    answer:
      "Yes. Every Yono Slots app has a referral program. After registration you receive a personal referral link. When friends download through your link and register, you earn ₹50–₹500 per referral. Some Yono Slots apps offer unlimited referral earnings with no cap on total income.",
  },
];

export default function YonoSlotsPage() {
  const allApps = getAllApps();

  const slotsApps = allApps.filter(
    (app) => app.categories?.some(c => c.toLowerCase() === "slots")
  );

  // Combined all slot-related apps (deduplicated)
  const allSlotApps = [...new Map(
    [...slotsApps].map((a) => [a.slug, a])
  ).values()];

  const sortedApps = [...allSlotApps].sort((a, b) => {
    const rA = typeof a.rating === "number" ? a.rating : parseFloat(a.rating) || 0;
    const rB = typeof b.rating === "number" ? b.rating : parseFloat(b.rating) || 0;
    return rB - rA;
  });

  const maxBonus = Math.max(
    ...sortedApps.map((a) => parseInt(a.bonus?.replace(/[^0-9]/g, "")) || 0),
    0
  );

  const avgRating = sortedApps.length
    ? (
        sortedApps.reduce((sum, a) => {
          const r = typeof a.rating === "number" ? a.rating : parseFloat(a.rating) || 0;
          return sum + r;
        }, 0) / sortedApps.length
      ).toFixed(1)
    : "4.5";

  const breadcrumbs = [
    { name: "Home", url: "https://allyonomax.com" },
    { name: "Yono Slots", url: PAGE_URL },
  ];

  const topSlots = sortedApps.slice(0, 8);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faq={faqData} />
      <HowToSchema />
      <CollectionPageSchema
        pageUrl={PAGE_URL}
        pageName="Yono Slots APK Download – All Yono Slot Games & Jaiho Slots 2026"
        pageDescription="Download Yono Slots APK, Jaiho Slots, and all Yono Slots games 2026. Get ₹51–₹550 sign-up bonus, ₹100 minimum withdrawal, instant UPI payment."
      />
      <ItemListSchema apps={sortedApps} pageUrl={PAGE_URL} />

      <div className="bg-bg min-h-screen">
        <Navbar />

        {/* ── BREADCRUMB ── */}
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-1" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-text-muted">
            <li>
              <Link href="/" className="hover:text-primary transition-colors font-medium">
                Home
              </Link>
            </li>
            <li className="text-text-muted/50">›</li>
            <li className="text-text-primary font-semibold">Yono Slots</li>
          </ol>
        </nav>

        <main>
          {/* ── HERO ── */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-4">
            <div
              className="content-section mb-5"
              style={{ background: "linear-gradient(135deg, #fff 0%, #fff0e6 100%)" }}
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
                  {sortedApps.length}+ Slot Apps
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-accent/10 text-accent px-2.5 py-1 rounded-full border border-accent/20">
                  <RefreshCw className="w-3 h-3" />
                  2026 Edition
                </span>
              </div>

              {/* H1 — Primary keywords: yono slots (500K) + yono slot game (50K) + jaiho slots (500K) */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary leading-tight mb-2">
                Yono Slots &amp;{" "}
                <span className="gradient-text">Jaiho Slots</span>
                {" "}– Download All Yono Slot Games 2026
              </h1>

              {/* Smart keyword note — captures "slots yono", "yono slot apk" without being unprofessional */}
              <p className="text-xs text-text-muted mb-4 font-medium">
                Also searched as:{" "}
                <span className="text-text-secondary">
                  Slots Yono, Yono Slot APK, Yono Slot Game, Yono 777 Slots, Jaiho Slots APK, Yono Arcade Slots
                </span>
              </p>

              {/* Hero content */}
              <div className="space-y-3 text-sm text-text-secondary leading-relaxed mb-6">
                <p>
                  <strong className="text-text-primary">Yono Slots</strong> and{" "}
                  <strong className="text-text-primary">Jaiho Slots</strong> are India's most searched
                  real money slot gaming apps — each with over 500,000 monthly searches. Every{" "}
                  <strong className="text-text-primary">Yono slot game</strong> offers players the chance to
                  spin reels, hit jackpots, and withdraw real cash via UPI. New players get a guaranteed{" "}
                  <strong className="text-primary">₹51 to ₹{maxBonus} sign-up bonus</strong> just for
                  registering — no deposit required.
                </p>
                <p>
                  This page is the most complete{" "}
                  <strong className="text-text-primary">all Yono Slots</strong>{" "}
                  directory available — and searches for{" "}
                  <strong className="text-text-primary">all Yono Slots</strong>{" "}
                  have grown{" "}
                  <strong className="text-accent">+900% in 2026</strong>.
                  Every <strong className="text-text-primary">Yono Slots APK</strong> listed here is verified
                  directly from official Yono Games servers. You'll find{" "}
                  <strong className="text-text-primary">Yono 777 Slots</strong>,{" "}
                  <strong className="text-text-primary">Jaiho Slots</strong>,{" "}
                  <strong className="text-text-primary">Yono Arcade Slots</strong>,
                  Goa Spin, MWM Bet, and every working Yono Slots app in one place.
                </p>
              </div>

              {/* Stats — 4 columns */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  {
                    label: "Yono Slot Apps",
                    value: `${sortedApps.length}+`,
                    icon: Gamepad,
                    color: "text-primary",
                    gradient: "from-primary/10 to-primary/5",
                    border: "border-primary/20",
                  },
                  {
                    label: "Max Jackpot Bonus",
                    value: `₹${maxBonus}`,
                    icon: Sparkles,
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
                ].map(({ label, value, icon: Icon, color, gradient, border }) => (
                  <div
                    key={label}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-gradient-to-br ${gradient} border ${border} text-center`}
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                    <span className={`text-xl sm:text-2xl font-extrabold ${color}`}>{value}</span>
                    <span className="text-[10px] text-text-muted font-semibold leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── ALL YONO SLOTS — "all yono slots" (50K, +900%), "yono slots list" (5K) ── */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8" aria-labelledby="app-list-heading">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 id="app-list-heading" className="text-xl font-extrabold text-text-primary">
                  All Yono Slots –{" "}
                  <span className="gradient-text">Complete List 2026</span>
                </h2>
                <p className="text-xs text-text-muted mt-0.5">
                  Every working Yono Slots app — sorted by rating, updated daily
                </p>
              </div>
              <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full whitespace-nowrap">
                {sortedApps.length} Slot Apps
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
                <p className="text-text-secondary font-semibold">No Yono Slots apps found.</p>
                <p className="text-sm text-text-muted mt-1">Check back soon — new slot games added regularly.</p>
              </div>
            )}
          </section>

          {/* ── JAIHO SLOTS — "jaiho slots" (500K), "jaiho slots apk" (5K), "jaiho slots download" (5K) ── */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8" aria-labelledby="jaiho-heading">
            <div className="content-section" style={{ background: "linear-gradient(135deg, #fff 0%, #f0fff8 100%)" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <h2 id="jaiho-heading" className="text-xl font-extrabold text-text-primary">
                    Jaiho Slots –{" "}
                    <span className="gradient-text">APK Download & Review</span>
                  </h2>
                  <p className="text-xs text-text-muted">
                    500,000+ monthly searches — India's most popular Yono Slots app
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  <strong className="text-text-primary">Jaiho Slots</strong> is one of the most searched{" "}
                  <strong className="text-text-primary">Yono Slots</strong> apps in India — with over
                  500,000 monthly searches for{" "}
                  <strong className="text-text-primary">Jaiho Slots APK</strong> and{" "}
                  <strong className="text-text-primary">Jaiho Slots download</strong> alone. It offers
                  classic 777 jackpot slots, daily free spin rewards, and an instant sign-up bonus
                  credited the moment you register.
                </p>
                <p>
                  The <strong className="text-text-primary">Jaiho Slots APK download</strong> link on
                  AllYonoMax goes directly to the official Yono Games server — no third-party files,
                  no redirects. Minimum withdrawal is ₹100 via UPI, processed in 5–15 minutes to
                  Google Pay, PhonePe, or Paytm. Find the{" "}
                  <strong className="text-text-primary">Jaiho Slots</strong> card in the app list above
                  to download and claim your bonus instantly.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { label: "Monthly Searches", value: "500K+", color: "text-teal", bg: "bg-teal/10", border: "border-teal/20" },
                  { label: "Sign-Up Bonus", value: "Instant", color: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
                  { label: "Min Withdrawal", value: "₹100", color: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
                ].map(({ label, value, color, bg, border }) => (
                  <div key={label} className={`p-3 rounded-xl ${bg} border ${border} text-center`}>
                    <p className={`text-base font-extrabold ${color}`}>{value}</p>
                    <p className="text-[10px] text-text-muted font-semibold mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── YONO 777 SLOTS — "yono 777 slots" (5K, +900%), "yono slots 777" (5K, +900%) ── */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8" aria-labelledby="yono777-heading">
            <div className="content-section">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-400/10 flex items-center justify-center">
                  <span className="text-amber-500 font-extrabold text-sm">777</span>
                </div>
                <div>
                  <h2 id="yono777-heading" className="text-xl font-extrabold text-text-primary">
                    Yono 777 Slots –{" "}
                    <span className="gradient-text">Lucky Jackpot Games</span>
                  </h2>
                  <p className="text-xs text-text-muted">
                    🔥 +900% search growth in 2026 — fastest-growing Yono Slots segment
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  <strong className="text-text-primary">Yono 777 Slots</strong> (also searched as{" "}
                  <strong className="text-text-primary">Yono Slots 777</strong>) are the fastest-growing
                  segment in the Yono Slots ecosystem in 2026, with +900% year-on-year search growth.
                  The number 777 is considered the luckiest combination in Indian slot culture, and{" "}
                  <strong className="text-text-primary">Yono 777</strong> apps deliver exactly that —
                  higher jackpot probability, special 777 bonus rounds, and larger payout multipliers
                  compared to standard Yono Slots games.
                </p>
                <p>
                  You can find the{" "}
                  <strong className="text-text-primary">Yono 777</strong> app in the complete{" "}
                  <strong className="text-text-primary">all Yono Slots</strong> list above.
                  Download the Yono 777 APK, register, and your sign-up bonus is credited instantly.
                  Minimum withdrawal is ₹100 via UPI — no waiting, no hassle.
                </p>
              </div>

              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-xs text-amber-800 leading-relaxed">
                  💡{" "}
                  <strong>Why Yono 777 Slots are trending:</strong>{" "}
                  777 is the luckiest number in Indian slot gaming. Yono 777 Slots consistently offer
                  bigger jackpots, more free spin rounds, and higher multipliers — which is exactly
                  why searches have grown +900% in 2026.
                </p>
              </div>
            </div>
          </section>

          {/* ── COMPARISON TABLE — "best yono slots app", "top yono slots apps", "yono slots real money" (5K) ── */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8" aria-labelledby="comparison-heading">
            <div className="content-section">
              <h2 id="comparison-heading" className="text-xl font-extrabold text-text-primary mb-1">
                Best Yono Slots Apps –{" "}
                <span className="gradient-text">Bonus Comparison</span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Compare top Yono Slots apps by bonus, withdrawal speed, and rating — find the best one for you.
              </p>

              <div className="overflow-x-auto -mx-2 sm:mx-0">
                <table className="w-full text-sm border-collapse min-w-[520px]">
                  <thead>
                    <tr className="bg-primary/5 border-b border-card-border">
                      <th className="text-left py-3 px-4 font-bold text-text-primary text-xs">#</th>
                      <th className="text-left py-3 px-4 font-bold text-text-primary text-xs">Yono Slots App</th>
                      <th className="text-left py-3 px-4 font-bold text-text-primary text-xs">Bonus</th>
                      <th className="text-left py-3 px-4 font-bold text-text-primary text-xs">Min Withdrawal</th>
                      <th className="text-left py-3 px-4 font-bold text-text-primary text-xs">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topSlots.map((app, i) => (
                      <tr key={app.slug} className="border-b border-card-border hover:bg-primary/3 transition-colors">
                        <td className="py-3 px-4 text-text-muted text-xs font-bold">{i + 1}</td>
                        <td className="py-3 px-4">
                          <Link
                            href={`/${app.slug}`}
                            className="font-semibold text-text-primary hover:text-primary transition-colors text-xs"
                          >
                            {app.name}
                          </Link>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-primary font-bold text-xs">{app.bonus}</span>
                        </td>
                        <td className="py-3 px-4 text-text-secondary text-xs">{app.minWithdrawal}</td>
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
            </div>
          </section>

          {/* ── WHY PLAY YONO SLOTS — "yono slots real money" (5K), "yono slots online" (500, +900%) ── */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8" aria-labelledby="why-play-heading">
            <div className="content-section">
              <h2 id="why-play-heading" className="text-xl font-extrabold text-text-primary mb-1">
                Why Play{" "}
                <span className="gradient-text">Yono Slots</span> for Real Money?
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Millions of players choose Yono Slots online for real cash winnings. Here's why they keep coming back.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: Sparkles,
                    title: "₹51–₹550 Instant Sign-Up Bonus",
                    desc: "Every Yono Slots app gives you real cash bonus the moment you register — no deposit required. Use your bonus to spin for free and keep what you win.",
                    color: "text-primary",
                    bg: "bg-primary/10",
                  },
                  {
                    icon: Zap,
                    title: "5-Minute UPI Withdrawal",
                    desc: "Yono Slots withdrawal takes 5–15 minutes. Minimum ₹100. Google Pay, PhonePe, Paytm, and direct bank transfer all supported — no long waiting periods.",
                    color: "text-teal",
                    bg: "bg-teal/10",
                  },
                  {
                    icon: Coins,
                    title: "Progressive Jackpots & Free Spins",
                    desc: "Top Yono Slots apps offer progressive jackpots growing with every spin. Plus daily free spins, bonus rounds, and exclusive 777 jackpot events.",
                    color: "text-accent",
                    bg: "bg-accent/10",
                  },
                  {
                    icon: Rocket,
                    title: "Fast-Paced, No Skill Required",
                    desc: "Unlike rummy, Yono Slots don't require skill — just spin and win. Perfect for quick sessions. Each spin takes 5–10 seconds. Play anytime, anywhere.",
                    color: "text-green-accent",
                    bg: "bg-green-accent/10",
                  },
                  {
                    icon: Trophy,
                    title: "Daily Slot Tournaments",
                    desc: "Compete in daily Yono Slots tournaments. Prize pools from ₹500 to ₹50,000. Extra cash beyond regular slot wins — tournaments run every 24 hours.",
                    color: "text-primary",
                    bg: "bg-primary/10",
                  },
                  {
                    icon: Users,
                    title: "Referral Earnings",
                    desc: "Get your personal Yono Slots referral link after registration. Earn ₹50–₹500 per friend who downloads and registers — unlimited earning potential.",
                    color: "text-accent",
                    bg: "bg-accent/10",
                  },
                ].map(({ icon: Icon, title, desc, color, bg }) => (
                  <div
                    key={title}
                    className="flex gap-3 p-4 rounded-2xl bg-bg border border-card-border hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <div className={`w-10 h-10 min-w-10 rounded-xl ${bg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${color}`} />
                    </div>
                    <div>
                      <p className="font-bold text-text-primary text-sm mb-1">{title}</p>
                      <p className="text-text-secondary text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── HOW TO DOWNLOAD — HowTo schema, "yono slots apk download" (5K), "yono slots app download" (5K) ── */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8" aria-labelledby="download-guide-heading">
            <div className="content-section">
              <h2 id="download-guide-heading" className="text-xl font-extrabold text-text-primary mb-1">
                How to Download{" "}
                <span className="gradient-text">Yono Slots APK</span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Download, install, and start playing Yono Slots in under 3 minutes on any Android phone.
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
                      title: "Choose Your Yono Slots App",
                      desc: (
                        <>
                          Browse the{" "}
                          <strong className="text-text-primary">all Yono Slots</strong>{" "}
                          list above — sorted by rating. Each card shows the sign-up bonus, jackpot potential,
                          and rating. Pick the{" "}
                          <strong className="text-text-primary">best Yono Slots app</strong>{" "}
                          — or try Jaiho Slots if you want the most popular one.
                        </>
                      ),
                    },
                    {
                      num: "02",
                      title: "Download the Official Yono Slots APK",
                      desc: (
                        <>
                          Tap the card, then click "Download". The{" "}
                          <strong className="text-text-primary">Yono Slots APK download</strong>{" "}
                          comes directly from the official Yono Games server —{" "}
                          <strong>no third-party hosting, completely safe</strong>.
                        </>
                      ),
                    },
                    {
                      num: "03",
                      title: "Enable Install Unknown Apps",
                      desc: (
                        <>
                          Open the APK. Go to{" "}
                          <strong>Settings → Security → Install Unknown Apps</strong>{" "}
                          and allow from your browser. One-time step for all APK files outside the Play Store.
                        </>
                      ),
                    },
                    {
                      num: "04",
                      title: "Register & Get Your Bonus Instantly",
                      desc: (
                        <>
                          Open the app, tap Register, enter your mobile number. Your{" "}
                          <strong className="text-primary">Yono Slots sign-up bonus</strong>{" "}
                          is credited <strong>instantly</strong> — no promo code needed. Start spinning immediately.
                        </>
                      ),
                    },
                  ].map(({ num, title, desc }) => (
                    <div key={num} className="flex gap-4 relative">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-extrabold text-xs z-10">
                        {num}
                      </div>
                      <div className="flex-1 pb-2">
                        <p className="font-bold text-text-primary text-sm mb-1">{title}</p>
                        <p className="text-text-secondary text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 p-4 bg-teal/5 border border-teal/20 rounded-2xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <p className="text-xs text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">Safe Download Guarantee:</strong>{" "}
                  Every Yono Slots APK and Jaiho Slots APK on AllYonoMax links to official servers only.
                  We never host, modify, or redirect APK files.
                </p>
              </div>
            </div>
          </section>

          {/* ── PROMO CODE & TELEGRAM — "yono slots promo code" (+900%), "yono slots telegram" (+900%) ── */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8" aria-labelledby="promo-heading">
            <div className="content-section">
              <h2 id="promo-heading" className="text-xl font-extrabold text-text-primary mb-1">
                Yono Slots{" "}
                <span className="gradient-text">Promo Code & Telegram</span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                How to find the latest Yono Slots promo codes and where to get daily bonus updates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Promo Code */}
                <div className="p-4 rounded-2xl bg-accent/5 border border-accent/20 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Tag className="w-5 h-5 text-accent" />
                    <p className="font-bold text-text-primary text-sm">Yono Slots Promo Code</p>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Most Yono Slots apps do not require a promo code — the sign-up bonus is applied
                    automatically when you register through AllYonoMax links. Occasionally, apps release
                    limited-time promo codes for extra bonuses (₹50–₹200 additional). These are shared
                    exclusively on the app's official Telegram channel.
                  </p>
                  <div className="text-xs text-text-muted bg-accent/5 p-2 rounded-lg">
                    💡 <strong className="text-text-primary">Tip:</strong> Register through this page's
                    links — the referral bonus is applied automatically, no code needed.
                  </div>
                </div>

                {/* Telegram */}
                <div className="p-4 rounded-2xl bg-teal/5 border border-teal/20 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-teal" />
                    <p className="font-bold text-text-primary text-sm">Yono Slots Telegram</p>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Searches for{" "}
                    <strong className="text-text-primary">Yono Slots Telegram</strong> have grown +900%
                    in 2026. AllYonoMax runs an official Telegram channel where we share new Yono Slots
                    app launches, bonus updates, and working APK links — the moment they go live.
                  </p>
                  <a
                    href="https://telegram.me/AllYonoMaxdotCom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-teal px-4 py-2 rounded-xl hover:opacity-90 transition-opacity w-fit"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Join AllYonoMax Telegram
                  </a>
                  <div className="text-xs text-text-muted bg-teal/5 p-2 rounded-lg">
                    💡 <strong className="text-text-primary">Tip:</strong> Turn on notifications so you
                    never miss a new Yono Slots launch with a high bonus.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── WITHDRAWAL GUIDE — "yono slots withdrawal" ── */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8" aria-labelledby="withdrawal-heading">
            <div className="content-section">
              <h2 id="withdrawal-heading" className="text-xl font-extrabold text-text-primary mb-1">
                Yono Slots{" "}
                <span className="gradient-text">Withdrawal Guide</span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                How to withdraw your Yono Slots winnings — minimum amounts, time, and UPI options explained.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                {[
                  {
                    icon: Wallet,
                    title: "Minimum Withdrawal",
                    value: "₹100",
                    desc: "Most Yono Slots apps allow withdrawal starting ₹100. Some offer ₹50 minimum during launch.",
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
                ].map(({ icon: Icon, title, value, desc, color, bg, border }) => (
                  <div key={title} className={`p-4 rounded-2xl border ${border} ${bg} flex flex-col gap-2`}>
                    <div className="flex items-center gap-2">
                      <Icon className={`w-5 h-5 ${color}`} />
                      <span className="text-xs font-bold text-text-primary">{title}</span>
                    </div>
                    <span className={`text-2xl font-extrabold ${color}`}>{value}</span>
                    <p className="text-xs text-text-secondary leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl">
                <p className="font-bold text-text-primary text-sm mb-2">
                  How to Withdraw from Yono Slots — Step by Step:
                </p>
                <ol className="space-y-1.5 text-xs text-text-secondary list-decimal list-inside leading-relaxed">
                  <li>Open your Yono Slots app and go to the Wallet section</li>
                  <li>Tap "Withdraw" and enter the amount (minimum ₹100)</li>
                  <li>Select your UPI ID or bank account</li>
                  <li>Confirm the withdrawal — funds arrive within 5–15 minutes</li>
                  <li>Check your UPI app for the credit notification</li>
                </ol>
                <p className="text-xs text-text-muted mt-3">
                  💡{" "}
                  <strong className="text-text-primary">Pro tip:</strong>{" "}
                  Withdraw a small amount first to verify your account before withdrawing larger jackpot winnings.
                </p>
              </div>
            </div>
          </section>

          {/* ── SLOTS TIPS & TRICKS — "yono slots winning trick", "yono slots game tricks" ── */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8" aria-labelledby="tips-heading">
            <div className="content-section">
              <h2 id="tips-heading" className="text-xl font-extrabold text-text-primary mb-1">
                Yono Slots{" "}
                <span className="gradient-text">Tips & Winning Tricks</span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Maximize your Yono Slots winnings with these proven strategies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <p className="font-bold text-text-primary text-sm">💰 Smart Slot Strategies:</p>
                  {[
                    "Always use your sign-up bonus first — play for free, withdraw real winnings",
                    "Start with lower stake spins (₹1–₹5) to extend your play time and learn the patterns",
                    "Play Yono 777 Slots for higher jackpot probabilities and bigger multipliers",
                    "Set a daily budget and stick to it — slots are a game of chance",
                    "Download multiple Yono Slots apps to claim sign-up bonuses from each",
                  ].map((tip) => (
                    <div key={tip} className="flex items-start gap-2">
                      <BadgeCheck className="w-3.5 h-3.5 text-green-accent flex-shrink-0 mt-0.5" />
                      <p className="text-text-secondary text-xs leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-accent/5 border border-accent/10">
                  <p className="font-bold text-text-primary text-sm mb-3">🎰 Slot Features to Look For:</p>
                  <ul className="space-y-2 text-xs text-text-secondary">
                    {[
                      "Free spins rounds — play without using your balance",
                      "Progressive jackpots — grows until someone wins",
                      "Bonus games — mini-games inside slots with extra rewards",
                      "Wild symbols — substitute for other symbols to create wins",
                      "Scatter symbols — trigger features regardless of position",
                      "Multipliers — multiply your winnings by 2x, 3x, or 10x",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Sparkles className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── INTERNAL LINKS — only real existing pages ── */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8" aria-labelledby="explore-heading">
            <div className="content-section">
              <h2 id="explore-heading" className="text-xl font-extrabold text-text-primary mb-1">
                Explore More{" "}
                <span className="gradient-text">Yono Game Categories</span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Looking for other Yono games beyond slots? Browse these dedicated pages.
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
                    name: "Yono Rummy",
                    href: "/yono-rummy",
                    icon: Crown,
                    desc: "All Yono Rummy apps with real cash prizes and tournaments",
                    color: "text-teal",
                    bg: "bg-teal/10",
                    border: "border-teal/20",
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
                ].map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className={`group flex flex-col gap-3 p-4 rounded-2xl bg-bg border ${cat.border} hover:shadow-md transition-all`}
                    >
                      <div className={`w-10 h-10 rounded-xl ${cat.bg} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${cat.color}`} />
                      </div>
                      <div>
                        <p className={`font-bold text-sm ${cat.color} group-hover:underline`}>{cat.name}</p>
                        <p className="text-xs text-text-muted mt-0.5 leading-snug">{cat.desc}</p>
                      </div>
                      <div className={`flex items-center gap-1 text-xs font-semibold ${cat.color}`}>
                        View all <ArrowRight className="w-3 h-3" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12" aria-labelledby="faq-heading">
            <div className="content-section">
              <h2 id="faq-heading" className="text-xl font-extrabold text-text-primary mb-1">
                Yono Slots –{" "}
                <span className="gradient-text">Frequently Asked Questions</span>
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Everything you need to know about{" "}
                <strong className="text-text-primary">Yono Slots</strong>,{" "}
                <strong className="text-text-primary">Jaiho Slots</strong>, bonuses, and withdrawals.
              </p>

              <div className="space-y-2">
                {faqData.map((faq, i) => (
                  <details key={i} className="group rounded-xl border border-card-border overflow-hidden">
                    <summary className="flex items-center justify-between p-4 bg-bg cursor-pointer list-none gap-3 hover:bg-primary/5 transition-colors">
                      <h3 className="text-sm font-semibold text-text-primary text-left">{faq.question}</h3>
                      <span className="text-text-muted flex-shrink-0 group-open:rotate-180 transition-transform duration-200">▾</span>
                    </summary>
                    <div className="px-4 pb-4 pt-2 border-t border-card-border bg-white/70">
                      <p className="text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 p-5 bg-gradient-to-r from-primary/8 to-accent/8 border border-primary/10 rounded-2xl text-center">
                <p className="text-sm font-bold text-text-primary mb-1">
                  Ready to spin and win with Yono Slots?
                </p>
                <p className="text-xs text-text-secondary mb-3">
                  Download any Yono Slots app above and claim up to ₹{maxBonus} bonus today. No deposit required.
                </p>
                <Link
                  href="#app-list-heading"
                  className="btn-primary text-sm px-5 py-2.5 inline-flex items-center gap-2"
                >
                  View All Yono Slots Apps
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