export const revalidate = 86400;

import Link from "next/link";
import {
  Gift,
  Wallet,
  Star,
  Trophy,
  ShieldCheck,
  Users,
  ArrowRight,
  ChevronDown,
  CircleDollarSign,
  Clock,
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

export const metadata = {
  title:
    "Yono Rummy Games — Download All Yono Rummy Apps & Get ₹550 Bonus | AllYonoMax",
  description:
    "Download all Yono Rummy games and Yono Rummy apps. Get ₹51 to ₹550 sign-up bonus on top rummy apps. 27+ Yono Rummy apps with instant UPI withdrawal. Updated daily.",
  keywords: [
    "yono rummy games",
    "yono rummy app",
    "yono rummy apk",
    "rummy yono game",
    "all yono rummy apps",
    "yono rummy download",
    "best yono rummy app",
    "yono rummy 2026",
  ],
  alternates: { canonical: "https://allyonomax.com/yono-rummy" },
  openGraph: {
    title: "Yono Rummy Games — Download All Yono Rummy Apps | AllYonoMax",
    description:
      "27+ Yono Rummy apps with ₹51–₹550 sign-up bonus and instant UPI withdrawal. Download any Yono Rummy game safely.",
    url: "https://allyonomax.com/yono-rummy",
    siteName: "AllYonoMax",
    type: "website",
  },
};

const faqData = [
  {
    question: "What are Yono Rummy games?",
    answer:
      "Yono Rummy games are real-money rummy apps built on the Yono Games platform. They allow you to play 13-card Indian rummy against other players and withdraw your winnings via UPI. All Yono Rummy apps share the same backend system, which means the gameplay, wallet, and UPI integration work the same way across every app.",
  },
  {
    question: "Which Yono Rummy app gives the highest sign-up bonus?",
    answer:
      "Bonus amounts change frequently as apps run promotions. AllYonoMax updates every bonus daily. As of 2026, top Yono Rummy apps offering high bonuses include Jaiho Rummy (₹184), Rummy 91 (₹178), Love Rummy (₹156), and Club INR. Check the app cards on this page for the latest verified bonus amounts.",
  },
  {
    question: "Are Yono Rummy apps legal in India?",
    answer:
      "Rummy is a skill-based game and is legally permitted in most Indian states. Yono Rummy apps are used by millions of players across India. However, real-money skill gaming is currently restricted in Andhra Pradesh, Telangana, Assam, Odisha, Nagaland, Sikkim, Arunachal Pradesh, and Tamil Nadu. Players in all other states can legally participate.",
  },
  {
    question: "How do I download a Yono Rummy APK?",
    answer:
      "Tap any Yono Rummy app card on this page, then tap Download on the app's page. The official APK downloads from the Yono Games server. Go to Settings → Security → Install Unknown Apps, enable it for your browser, install the APK, and register with your mobile number. Your sign-up bonus is credited automatically.",
  },
  {
    question: "What is the minimum withdrawal in Yono Rummy apps?",
    answer:
      "The minimum withdrawal across all Yono Rummy apps is ₹100. Withdrawals are processed via UPI and typically settle within 5 to 15 minutes. Each app page on AllYonoMax shows the exact minimum withdrawal amount.",
  },
  {
    question: "How is Yono Rummy different from regular online rummy?",
    answer:
      "Yono Rummy apps are part of the Yono Games ecosystem, which means they are distributed as APKs rather than being listed on the Play Store. They offer higher sign-up bonuses than most mainstream rummy platforms, a simpler registration process (just a phone number), and a referral program that pays real cash for every friend you bring in.",
  },
];

export default function YonoRummyPage() {
  const allApps = getAllApps();
  const rummyApps = allApps
    .filter((a) => a.categories?.includes("rummy"))
    .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));

  const breadcrumbs = [
    { name: "Home", url: "https://allyonomax.com" },
    { name: "All Yono Games", url: "https://allyonomax.com/all-yono-games" },
    {
      name: "Yono Rummy Games",
      url: "https://allyonomax.com/yono-rummy",
    },
  ];

  const faqForSchema = faqData.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faq={faqForSchema} />
      <CollectionPageSchema />
      <ItemListSchema apps={rummyApps} />

      <div className="bg-bg min-h-screen">
        <Navbar />

        {/* ── HERO ── */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pt-5 pb-2">
          <nav
            className="flex items-center gap-2 text-xs text-text-muted mb-4 flex-wrap"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/all-yono-games"
              className="hover:text-primary transition-colors"
            >
              All Yono Games
            </Link>
            <span>/</span>
            <span className="text-text-primary font-semibold">
              Yono Rummy Games
            </span>
          </nav>

          <div className="content-section mb-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-text-primary leading-tight">
                  Yono Rummy Games —{" "}
                  <span className="gradient-text">Download All Rummy Apps</span>
                </h1>
                <p className="text-xs text-text-muted mt-1 font-medium">
                  {rummyApps.length} verified rummy apps · Bonuses up to ₹550 ·
                  ₹100 min withdrawal
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p>
                <strong className="text-text-primary">Yono Rummy</strong> is
                India's most popular category within the Yono Games ecosystem.
                These apps let you play classic 13-card rummy, Points Rummy, and
                Pool Rummy against real players — and withdraw whatever you win
                directly to your UPI account. Since real-money gaming apps are
                not on the Play Store, AllYonoMax provides the safe, direct APK
                download link for every Yono Rummy app on the platform.
              </p>
              <p>
                This page lists all{" "}
                <strong className="text-text-primary">
                  {rummyApps.length} active Yono Rummy apps
                </strong>{" "}
                with their current sign-up bonus, minimum withdrawal, and player
                rating — all verified and updated daily. Using the referral
                links on each app page ensures your sign-up bonus is applied
                automatically with no code to enter manually.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                {
                  label: "Rummy Apps",
                  value: rummyApps.length + "+",
                  Icon: Trophy,
                  color: "text-primary",
                  bg: "bg-primary/10",
                },
                {
                  label: "Max Bonus",
                  value: "₹550",
                  Icon: Gift,
                  color: "text-accent",
                  bg: "bg-accent/10",
                },
                {
                  label: "Min Withdrawal",
                  value: "₹100",
                  Icon: Wallet,
                  color: "text-teal",
                  bg: "bg-teal/10",
                },
              ].map(({ label, value, Icon, color, bg }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-bg border border-card-border text-center"
                >
                  <div
                    className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center`}
                  >
                    <Icon className={`w-4 h-4 ${color}`} />
                  </div>
                  <span className={`text-base font-extrabold ${color}`}>
                    {value}
                  </span>
                  <span className="text-[10px] text-text-muted font-medium leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BONUS COMPARISON TABLE ── */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-6">
          <div className="content-section">
            <h2 className="text-lg font-extrabold text-text-primary mb-1">
              Yono Rummy Bonus{" "}
              <span className="gradient-text">Comparison Table</span>
            </h2>
            <p className="text-sm text-text-secondary mb-4">
              Top 8 Yono Rummy apps ranked by sign-up bonus — figures verified
              and updated daily.
            </p>
            <div className="overflow-x-auto rounded-xl border border-card-border -mx-1">
              <table className="w-full text-sm min-w-[480px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-3 py-2.5 font-bold rounded-tl-xl">
                      #
                    </th>
                    <th className="text-left px-3 py-2.5 font-bold">
                      App Name
                    </th>
                    <th className="text-left px-3 py-2.5 font-bold">
                      Sign-Up Bonus
                    </th>
                    <th className="text-left px-3 py-2.5 font-bold">
                      Min Withdrawal
                    </th>
                    <th className="text-left px-3 py-2.5 font-bold rounded-tr-xl">
                      Rating
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rummyApps.slice(0, 8).map((app, i) => (
                    <tr
                      key={app.slug}
                      className={`border-b border-card-border last:border-0 hover:bg-bg transition-colors ${i === 0 ? "bg-primary/5" : ""}`}
                    >
                      <td className="px-3 py-2.5">
                        {i === 0 ? (
                          <Trophy className="w-4 h-4 text-accent" />
                        ) : (
                          <span className="text-text-muted font-semibold">
                            {i + 1}
                          </span>
                        )}
                      </td>
                      <td className="px-3 py-2.5">
                        <Link
                          href={`/${app.slug}`}
                          className="font-bold text-text-primary hover:text-primary transition-colors"
                        >
                          {app.name}
                        </Link>
                      </td>
                      <td className="px-3 py-2.5 font-bold text-primary">
                        {app.bonus}
                      </td>
                      <td className="px-3 py-2.5 text-text-secondary">
                        {app.minWithdrawal}
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                          <span className="font-semibold text-text-primary">
                            {app.rating}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── ALL RUMMY APPS ── */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-extrabold text-text-primary">
              All Yono Rummy Apps
            </h2>
            <span className="text-xs text-text-muted bg-card border border-card-border px-2.5 py-1 rounded-full font-medium">
              {rummyApps.length} Apps
            </span>
          </div>
          <div className="space-y-2">
            {rummyApps.map((app, i) => (
              <AppCard key={app.slug} app={app} index={i} />
            ))}
          </div>
        </section>

        {/* ── WHAT MAKES YONO RUMMY DIFFERENT ── */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2 className="text-xl font-extrabold text-text-primary mb-1">
              What Makes <span className="gradient-text">Yono Rummy</span>{" "}
              Different?
            </h2>
            <p className="text-sm text-text-secondary mb-5">
              A clear comparison of what sets Yono Rummy apps apart from
              mainstream rummy platforms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  Icon: Gift,
                  title: "Higher Sign-Up Bonuses",
                  desc: "Yono Rummy apps routinely offer ₹100–₹550 at registration, compared to ₹25–₹50 on mainstream platforms. Referral commissions are also significantly higher across all Yono Rummy games.",
                  color: "text-primary",
                  bg: "bg-primary/10",
                },
                {
                  Icon: Clock,
                  title: "Faster Registration",
                  desc: "Sign up with just your mobile number. No PAN or Aadhaar verification required to claim your bonus and start playing — ideal if you want to get started in under two minutes.",
                  color: "text-teal",
                  bg: "bg-teal/10",
                },
                {
                  Icon: Users,
                  title: "Active Refer & Earn",
                  desc: "Every Yono Rummy app pays you a commission for every friend you refer. Earnings range from ₹50 to ₹500 per successful referral — a meaningful secondary income for active players.",
                  color: "text-accent",
                  bg: "bg-accent/10",
                },
                {
                  Icon: CircleDollarSign,
                  title: "₹100 Minimum Withdrawal",
                  desc: "Cash out from just ₹100 via UPI — no minimum balance requirements, no waiting periods. Withdrawals process in 5–15 minutes across all Yono Rummy apps listed here.",
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

        {/* ── INTERNAL LINKS ── */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2 className="text-xl font-extrabold text-text-primary mb-4">
              Explore More <span className="gradient-text">Yono Games</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  label: "All Yono Games",
                  sub: "Complete directory — every active app",
                  href: "/all-yono-games",
                  badge: "60+ Apps",
                },
                {
                  label: "New Yono Apps",
                  sub: "Latest launches with highest bonuses",
                  href: "/new-yono-games",
                  badge: "Updated Daily",
                },
                {
                  label: "Yono Slots & 777",
                  sub: "Slots, 777, spin-to-win games",
                  href: "/yono-slots",
                  badge: "31 Apps",
                },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="flex flex-col gap-2 p-4 rounded-xl bg-bg border-2 border-card-border hover:border-primary transition-all group"
                >
                  <span className="font-extrabold text-text-primary text-sm group-hover:text-primary transition-colors leading-tight">
                    {c.label}
                  </span>
                  <span className="text-text-muted text-xs">{c.sub}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary text-white self-start">
                    {c.badge}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-10">
          <div className="content-section">
            <h2 className="text-xl font-extrabold text-text-primary mb-1">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-sm text-text-secondary mb-5">
              Everything you need to know about Yono Rummy games, bonuses, and
              downloads.
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
