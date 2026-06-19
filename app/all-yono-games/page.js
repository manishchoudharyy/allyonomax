export const revalidate = 86400;

import Link from "next/link";
import {
  Gift,
  Wallet,
  Star,
  Trophy,
  ShieldCheck,
  Zap,
  ArrowRight,
  ChevronDown,
  Layers,
  TrendingUp,
  Users,
  Smartphone,
  LayoutGrid,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";
import AppCard from "@/components/AppCard";
import { getAllApps } from "@/lib/helpers";
import {
  FAQSchema,
  BreadcrumbSchema,
  WebsiteSchema,
  ItemListSchema,
  CollectionPageSchema,
} from "@/components/SchemaMarkup";

export const metadata = {
  title:
    "All Yono Games — Complete List of All Yono Apps Download 2026 | AllYonoMax",
  description:
    "Download all Yono Games in one place. Complete list of 60+ Yono apps including Yono Rummy, Yono Slots, Yono 777, new Yono apps with ₹51–₹550 sign-up bonus. Updated daily.",
  keywords: [
    "all yono games",
    "all yono apps",
    "yono games list",
    "all yono game download",
    "yono app list",
    "download all yono games",
    "all yono games 2026",
    "complete yono games list",
  ],
  alternates: { canonical: "https://allyonomax.com/all-yono-games" },
  openGraph: {
    title: "All Yono Games — Complete List of All Yono Apps 2026 | AllYonoMax",
    description:
      "Complete list of 60+ Yono apps with sign-up bonuses up to ₹550 and instant UPI withdrawal. All Yono Games in one directory.",
    url: "https://allyonomax.com/all-yono-games",
    siteName: "AllYonoMax",
    type: "website",
  },
};

const faqData = [
  {
    question: "What is the complete list of all Yono Games?",
    answer:
      "AllYonoMax maintains the most comprehensive directory of all Yono Games apps. The full list includes 60+ active apps across six categories: Rummy, Slots, 777, Bingo, Arcade, and Spin. Every app on the Yono Games platform is listed here with its current sign-up bonus, rating, and direct APK download link. New apps are added the day they launch.",
  },
  {
    question: "How many Yono apps are there?",
    answer:
      "As of 2026, there are over 60 active Yono Games apps. The platform releases new apps regularly — sometimes weekly. AllYonoMax tracks every launch and updates this page the same day a new Yono app goes live. Occasionally, older apps are retired; those are removed from this list immediately.",
  },
  {
    question: "Can I download all Yono games on one phone?",
    answer:
      "Yes — all Yono Games apps are lightweight Android APKs, typically 30–70 MB each. You can install multiple Yono apps on the same phone, and each has its own separate wallet and sign-up bonus. Many players install 3–5 Yono apps to maximize their total sign-up bonus earnings.",
  },
  {
    question: "Which Yono game is the best to start with?",
    answer:
      "For new players, we recommend starting with one of the top-rated Yono Rummy apps — Love Rummy, Rummy 91, or Club INR — which offer strong bonuses and a familiar card game format. If you prefer slots, Goa Spin or Jaiho 777 are the most popular. Browse the full list below and filter by rating to find the highest-rated option for your preferred game type.",
  },
  {
    question: "Are all Yono Games the same?",
    answer:
      "All Yono Games share the same backend infrastructure, UPI payment system, and referral program. However, each app has its own sign-up bonus, game selection, and promotional offers. Some focus on rummy, others on slots or 777. The key difference between apps is the bonus amount and the specific games available within each app.",
  },
  {
    question: "Do all Yono apps have a referral program?",
    answer:
      "Yes — every Yono Games app includes a referral program. Once you register, you get a personal referral link. When a friend downloads and registers through your link, you earn a commission. Referral earnings are credited to your in-app wallet and can be withdrawn to UPI along with any game winnings.",
  },
  {
    question: "Are all Yono Games apps safe to download?",
    answer:
      "All Yono Games apps listed on AllYonoMax are downloaded directly from the official Yono Games servers. The APKs use standard Android security and UPI payment systems. AllYonoMax does not host or modify any APK files — every download link goes straight to the official source.",
  },
];

export default function AllYonoGamesPage() {
  const allApps = getAllApps();
  const sortedApps = [...allApps].sort(
    (a, b) => parseFloat(b.rating) - parseFloat(a.rating),
  );

  const rummyApps = allApps.filter((a) => a.categories?.includes("rummy"));
  const slotsApps = allApps.filter(
    (a) => a.categories?.includes("slots") || a.categories?.includes("777")
  );
  const newApps = allApps.filter((a) => a.isNew || a.isHot || a.isTrending);

  const breadcrumbs = [
    { name: "Home", url: "https://allyonomax.com" },
    { name: "All Yono Games", url: "https://allyonomax.com/all-yono-games" },
  ];

  const faqForSchema = faqData.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  return (
    <>
      <WebsiteSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faq={faqForSchema} />
      <CollectionPageSchema />
      <ItemListSchema apps={sortedApps} />

      <div className="bg-bg min-h-screen">
        <Navbar />

        {/* HERO */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pt-5 pb-2">
          <nav
            className="flex items-center gap-2 text-xs text-text-muted mb-4"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-text-primary font-semibold">
              All Yono Games
            </span>
          </nav>

          <div className="content-section mb-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <LayoutGrid className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-text-primary leading-tight">
                  All Yono Games 2026 —{" "}
                  <span className="gradient-text">Complete App List</span>
                </h1>
                <p className="text-xs text-text-muted mt-1 font-medium">
                  {allApps.length} verified apps · All categories · Updated
                  daily
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              {[
                {
                  label: "Total Apps",
                  value: allApps.length + "+",
                  Icon: Layers,
                  color: "text-primary",
                  bg: "bg-primary/10",
                },
                {
                  label: "Rummy Apps",
                  value: rummyApps.length + "+",
                  Icon: Trophy,
                  color: "text-teal",
                  bg: "bg-teal/10",
                },
                {
                  label: "Slots Apps",
                  value: slotsApps.length + "+",
                  Icon: Zap,
                  color: "text-accent",
                  bg: "bg-accent/10",
                },
                {
                  label: "New Apps",
                  value: newApps.length + "+",
                  Icon: TrendingUp,
                  color: "text-green-accent",
                  bg: "bg-green-accent/10",
                },
              ].map(({ label, value, Icon, color, bg }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 p-2 rounded-lg bg-bg border border-card-border"
                >
                  <div
                    className={`w-7 h-7 rounded-md ${bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${color}`} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className={`text-sm font-extrabold leading-none ${color}`}>
                      {value}
                    </span>
                    <span className="text-[9px] text-text-muted font-medium mt-0.5">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ALL APPS LIST */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-extrabold text-text-primary">
              Complete List of{" "}
              <span className="gradient-text">All Yono Apps</span>
            </h2>
            <span className="text-xs text-text-muted bg-card border border-card-border px-2.5 py-1 rounded-full font-medium">
              {allApps.length} Apps
            </span>
          </div>
          <div className="space-y-2">
            {sortedApps.map((app, i) => (
              <AppCard key={app.slug} app={app} index={i} />
            ))}
          </div>
        </section>

        {/* CATEGORY QUICK NAV */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-5">
          <div className="content-section">
            <h2 className="text-lg font-extrabold text-text-primary mb-3">
              Browse by <span className="gradient-text">Category</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  label: "New Yono Games",
                  sub: "Latest launches with highest bonuses",
                  href: "/new-yono-games",
                  badge: "Updated Daily",
                  count: newApps.length,
                },
                {
                  label: "Yono Rummy Games",
                  sub: "Classic 13-card rummy for real money",
                  href: "/yono-rummy",
                  badge: "Most Popular",
                  count: rummyApps.length,
                },
                {
                  label: "Yono Slots & 777",
                  sub: "Slots, spin games, and 777 apps",
                  href: "/yono-slots",
                  badge: "High Bonus",
                  count: slotsApps.length,
                },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="relative flex flex-col gap-2 p-4 rounded-xl bg-bg border-2 border-card-border hover:border-primary transition-all group"
                >
                  <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary text-white">
                    {c.badge}
                  </span>
                  <span className="font-extrabold text-text-primary text-sm group-hover:text-primary pr-16 leading-tight transition-colors">
                    {c.label}
                  </span>
                  <span className="text-text-muted text-xs">{c.sub}</span>
                  <span className="text-xs font-semibold text-primary">
                    {c.count} apps <ArrowRight className="w-3 h-3 inline" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SEO CONTENT (MOVED DOWN) */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2 className="text-xl font-extrabold text-text-primary mb-3">
              About <span className="gradient-text">All Yono Games</span> Directory
            </h2>
            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p>
                This is the most complete directory of{" "}
                <strong className="text-text-primary">
                  all Yono Games apps
                </strong>{" "}
                available in 2026. Every active app on the Yono Games platform
                is listed here — from Yono Rummy and Yono Slots to new Yono
                games launched this week. Each listing shows the current
                verified sign-up bonus, minimum withdrawal amount, and player
                rating, along with a safe direct download link.
              </p>
              <p>
                AllYonoMax monitors the Yono Games platform continuously. When a
                new Yono app launches, it is added to this page the same day.
                When an app goes offline, it is removed immediately so you never
                hit a dead link. The result is the most reliable, up-to-date
                list of all Yono apps you will find anywhere.
              </p>
              <p>
                You can install multiple Yono apps on the same Android phone —
                each is a separate lightweight APK (30–70 MB) with its own
                wallet and sign-up bonus. Many players use three to five Yono
                games simultaneously to maximise their total bonus earnings and
                referral income.
              </p>
            </div>
          </div>
        </section>

        {/* WHY ALLYONOMAX */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2 className="text-xl font-extrabold text-text-primary mb-1">
              Why Use AllYonoMax for{" "}
              <span className="gradient-text">All Yono Games</span>?
            </h2>
            <p className="text-sm text-text-secondary mb-5">
              There are dozens of Yono-related websites. Here is what makes
              AllYonoMax the most reliable source.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  Icon: ShieldCheck,
                  title: "Verified Download Links",
                  desc: "Every link on AllYonoMax points to the official Yono Games server. We verify every app before listing it and remove any that go offline — so you never hit a dead or unsafe link.",
                  color: "text-teal",
                  bg: "bg-teal/10",
                },
                {
                  Icon: TrendingUp,
                  title: "Daily Bonus Updates",
                  desc: "Bonus amounts change regularly. AllYonoMax checks and updates every sign-up bonus daily — the figure you see on each app card is the actual offer available right now, not an outdated screenshot.",
                  color: "text-primary",
                  bg: "bg-primary/10",
                },
                {
                  Icon: Zap,
                  title: "Instant Bonus Application",
                  desc: "Using AllYonoMax referral links means your sign-up bonus is applied automatically when you register. No referral code to type manually — the link handles it.",
                  color: "text-accent",
                  bg: "bg-accent/10",
                },
                {
                  Icon: Smartphone,
                  title: "All Apps in One Place",
                  desc: "Instead of searching across dozens of websites for different Yono apps, AllYonoMax lists every single active Yono game in one directory — searchable, filterable, and always current.",
                  color: "text-green-accent",
                  bg: "bg-green-accent/10",
                },
              ].map(({ Icon, title, desc, color, bg }) => (
                <div
                  key={title}
                  className="flex gap-3 p-4 rounded-xl bg-bg border border-card-border"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}
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

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-10">
          <div className="content-section">
            <h2 className="text-xl font-extrabold text-text-primary mb-1">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-sm text-text-secondary mb-5">
              Answers to the most common questions about all Yono Games apps.
            </p>
            <div className="space-y-2">
              {faqData.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-xl border border-card-border overflow-hidden group"
                >
                  <summary className="flex items-center justify-between p-4 bg-bg cursor-pointer text-left gap-3 list-none">
                    <span className="text-sm font-semibold text-text-primary">
                      {faq.question}
                    </span>
                    <ChevronDown className="w-4 h-4 text-text-muted flex-shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 pt-1 border-t border-card-border bg-white">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <FloatingTelegram />
      </div>
    </>
  );
}
