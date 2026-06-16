"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Download,
  ShieldCheck,
  Zap,
  Users,
  Star,
  Smartphone,
  Gift,
  Trophy,
  Layers,
  ArrowRight,
  RefreshCw,
  Wallet,
  BadgeCheck,
  Clock,
  TrendingUp,
  CircleDollarSign,
} from "lucide-react";

/* ─────────────────────────────────────────────
   WHAT ARE YONO GAMES? — "Earn money with yono games"
───────────────────────────────────────────── */
export function WhatAreYonoGames({ categoryCounts }) {
  const categories = [
    {
      Icon: Trophy,
      name: "Yono Rummy",
      count: categoryCounts.rummy,
      desc: "Classic 13-card rummy with real cash prizes",
      href: "/yono-rummy",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      Icon: Star,
      name: "Yono Slots",
      count: categoryCounts.slots,
      desc: "Spin reels, hit jackpots, withdraw daily",
      href: "/yono-slots",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      Icon: TrendingUp,
      name: "New Yono Apps",
      count: categoryCounts.new,
      desc: "Freshly launched — highest sign-up bonuses",
      href: "/#apps",
      color: "text-teal",
      bg: "bg-teal/10",
    },
    {
      Icon: Layers,
      name: "Bingo & Casino",
      count: categoryCounts.casino + categoryCounts.bingo,
      desc: "Bingo, arcade, and casual earning games",
      href: "/#apps",
      color: "text-green-accent",
      bg: "bg-green-accent/10",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
      <div className="content-section">
        <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-1">
          What Are <span className="gradient-text">Yono Games?</span>
        </h2>
        <p className="text-xs text-text-muted mb-5 font-medium">
          India's largest real-money mobile gaming platform — explained simply
        </p>

        <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
          <p>
            <strong className="text-text-primary">Yono Games</strong> is a
            family of Android-based real-money gaming apps that lets you play
            card games, slots, and arcade titles and withdraw your winnings
            directly to your UPI account. Unlike Play Store games, all Yono apps
            are distributed as APK files — which is why millions of Indian
            players search for direct download links every single day.
          </p>
          <p>
            The platform runs{" "}
            <strong className="text-text-primary">60+ active apps</strong> under
            a single shared backend, so the moment you learn one Yono app, you
            can pick up any other in minutes. Every app in the ecosystem gives
            you a sign-up bonus the second you register — no deposit needed, no
            tricks. You play with the bonus, win real money, and withdraw from
            as low as ₹100.
          </p>
          <p>
            <strong className="text-text-primary">AllYonoMax</strong> is India's
            most up-to-date directory for all Yono Games and Yono apps. We track
            every launch, update every bonus amount the moment it changes, and
            give you a direct referral link so your sign-up bonus lands
            automatically — no manual code entry required.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          {categories.map((cat) => {
            const Icon = cat.Icon;
            return (
              <Link
                key={cat.name}
                href={cat.href}
                className="flex flex-col items-start gap-2 p-3 rounded-xl bg-bg border border-card-border hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <span
                  className={`w-8 h-8 rounded-lg ${cat.bg} flex items-center justify-center`}
                >
                  <Icon className={`w-4 h-4 ${cat.color}`} />
                </span>
                <span className="text-xs font-bold text-text-primary group-hover:text-primary transition-colors leading-tight">
                  {cat.name}
                </span>
                <span className="text-[11px] text-primary font-semibold">
                  {cat.count} Apps
                </span>
                <span className="text-[10px] text-text-muted leading-tight hidden sm:block">
                  {cat.desc}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   BEST YONO APPS TABLE — targeting "best yono apps", "top yono games"
───────────────────────────────────────────── */
export function BestAppsTable({ apps }) {
  const topApps = apps
    .filter((a) => typeof a.rating === "number" || parseFloat(a.rating) > 0)
    .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    .slice(0, 8);

  return (
    <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
      <div className="content-section">
        <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-1">
          Best Yono Apps{" "}
          <span className="gradient-text">Available Right Now</span>
        </h2>
        <p className="text-sm text-text-secondary mb-5">
          Ranked by player rating. Every bonus amount is verified and updated
          daily so you never walk into an outdated offer.
        </p>

        <div className="overflow-x-auto rounded-xl border border-card-border -mx-1">
          <table className="w-full text-sm min-w-[520px]">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-3 py-2.5 font-bold rounded-tl-xl">
                  #
                </th>
                <th className="text-left px-3 py-2.5 font-bold">App Name</th>
                <th className="text-left px-3 py-2.5 font-bold">Category</th>
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
              {topApps.map((app, i) => (
                <tr
                  key={app.slug}
                  className={`border-b border-card-border last:border-0 hover:bg-bg transition-colors ${
                    i === 0 ? "bg-primary/5" : ""
                  }`}
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
                  <td className="px-3 py-2.5">
                    <span className="capitalize text-text-secondary text-xs font-medium bg-bg border border-card-border rounded-full px-2 py-0.5">
                      {app.categories?.join(', ') || 'Game'}
                    </span>
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

        <p className="text-xs text-text-muted mt-3 text-center">
          Ratings and bonus amounts are updated daily. Check the app page before
          downloading for the latest figures.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   HOW TO DOWNLOAD YONO GAMES — targets "yono games download", "yono game apk"
───────────────────────────────────────────── */
export function HowToDownload() {
  const steps = [
    {
      num: "01",
      title: "Pick a Yono Game",
      desc: "Browse the list above or use the category tabs to find the Yono app you want. Check the sign-up bonus and minimum withdrawal before you decide — both are shown on every card.",
    },
    {
      num: "02",
      title: "Open the App Page",
      desc: "Tap the app card to land on its dedicated page. You'll see the full bonus breakdown, user ratings, APK size, and a direct download button.",
    },
    {
      num: "03",
      title: "Download the Yono APK",
      desc: 'Tap the Download button. The APK file starts downloading immediately. If your browser shows an "Unknown file" warning, tap Download Anyway — this is standard behaviour for APK files.',
    },
    {
      num: "04",
      title: "Enable Unknown Sources",
      desc: "Go to Settings → Security → Install Unknown Apps, and allow installation from your browser. This is a one-time step and does not affect your other apps.",
    },
    {
      num: "05",
      title: "Register & Claim Your Bonus",
      desc: "Open the app, register with your mobile number, and your sign-up bonus lands in your wallet immediately. When you're ready to cash out, request a UPI withdrawal — minimum ₹100.",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
      <div className="content-section">
        <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-1">
          How to Download <span className="gradient-text">Yono Games</span>
        </h2>
        <p className="text-sm text-text-secondary mb-5">
          Five steps from zero to playing — works on any Android phone, no Play
          Store required.
        </p>

        <div className="space-y-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 rounded-xl bg-bg border border-card-border hover:border-primary/30 transition-all"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-extrabold text-sm">
                {step.num}
              </div>
              <div>
                <p className="font-bold text-text-primary text-sm mb-1">
                  {step.title}
                </p>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 p-3 bg-teal/10 border border-teal/20 rounded-xl flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
          <p className="text-xs text-text-secondary leading-relaxed">
            <strong className="text-text-primary">Safety note:</strong>{" "}
            AllYonoMax links go directly to the official Yono Games servers. We
            do not host any APK files — we only provide the official referral
            links so your bonus is applied automatically.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHY CHOOSE YONO GAMES — "yono gaming app", "all yono apps"
───────────────────────────────────────────── */
export function WhyChooseYono() {
  const reasons = [
    {
      Icon: Gift,
      title: "Instant Sign-Up Bonus",
      desc: "Every new Yono app puts ₹51 to ₹550 in your wallet the moment you register. No deposit required — the bonus is yours to play with from minute one.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      Icon: Zap,
      title: "Fast UPI Withdrawals",
      desc: "Most withdrawal requests clear within 5 to 15 minutes. The minimum cash-out is just ₹100, so you are never waiting around for a big sum to accumulate.",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      Icon: Layers,
      title: "60+ Apps, One Directory",
      desc: "Instead of hunting across dozens of unverified websites, AllYonoMax lists every active Yono game with its current bonus, rating, and a safe direct download link.",
      color: "text-teal",
      bg: "bg-teal/10",
    },
    {
      Icon: Users,
      title: "Refer & Earn Commission",
      desc: "Share your referral link with friends. Each time someone registers through your link you earn a commission — some apps pay ₹200 to ₹500 per successful referral.",
      color: "text-green-accent",
      bg: "bg-green-accent/10",
    },
    {
      Icon: Smartphone,
      title: "Works on Any Android Phone",
      desc: "Yono APKs are compact — most are under 60 MB. They run smoothly on entry-level Android phones and install quickly even on slower mobile data connections.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      Icon: RefreshCw,
      title: "New Yono Apps Every Week",
      desc: "The Yono ecosystem adds fresh apps regularly. AllYonoMax updates the moment a new Yono game launches so you catch the highest launch bonuses before they drop.",
      color: "text-teal",
      bg: "bg-teal/10",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
      <div className="content-section">
        <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-1">
          Why Millions Choose <span className="gradient-text">Yono Games</span>
        </h2>
        <p className="text-sm text-text-secondary mb-5">
          Here is what keeps over 10 million Indian players coming back to Yono
          apps every day.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {reasons.map((r, i) => {
            const Icon = r.Icon;
            return (
              <div
                key={i}
                className="flex gap-3 p-4 rounded-xl bg-bg border border-card-border hover:border-primary/30 transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${r.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`w-5 h-5 ${r.color}`} />
                </div>
                <div>
                  <p className="font-bold text-text-primary text-sm mb-1">
                    {r.title}
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   BROWSE BY CATEGORY — internal linking hubs
───────────────────────────────────────────── */
export function BrowseByCategory({ counts }) {
  const cats = [
    {
      Icon: Trophy,
      label: "Yono Rummy",
      sub: `${counts.rummy} apps — Club INR, Love Rummy, Boss Rummy & more`,
      href: "/yono-rummy",
      color: "border-primary/30 hover:border-primary",
      badge: "Most Popular",
      badgeColor: "bg-primary text-white",
    },
    {
      Icon: CircleDollarSign,
      label: "Yono Slots",
      sub: `${counts.slots} apps — Goa Spin, Diwa 777, MWM Bet & more`,
      href: "/yono-slots",
      color: "border-accent/30 hover:border-accent",
      badge: "High Bonus",
      badgeColor: "bg-accent text-white",
    },
    {
      Icon: TrendingUp,
      label: "New Yono Games",
      sub: "Latest launches — the highest sign-up bonuses always here first",
      href: "/new-yono-games",
      color: "border-teal/30 hover:border-teal",
      badge: "Updated Daily",
      badgeColor: "bg-teal text-white",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
      <div className="content-section">
        <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-1">
          Browse All Yono Games{" "}
          <span className="gradient-text">by Category</span>
        </h2>
        <p className="text-sm text-text-secondary mb-4">
          Not sure where to start? Pick a category and we'll show you every Yono
          app that fits.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {cats.map((c) => {
            const Icon = c.Icon;
            return (
              <Link
                key={c.href}
                href={c.href}
                className={`relative flex flex-col gap-2 p-4 rounded-xl bg-bg border-2 ${c.color} transition-all group`}
              >
                <span
                  className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${c.badgeColor}`}
                >
                  {c.badge}
                </span>
                <Icon className="w-6 h-6 text-primary" />
                <span className="font-extrabold text-text-primary text-sm group-hover:text-primary transition-colors pr-16 leading-tight">
                  {c.label}
                </span>
                <span className="text-text-muted text-xs leading-tight">
                  {c.sub}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-primary mt-1">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   LATEST YONO APPS STRIP — "new yono apps", "latest yono games"
───────────────────────────────────────────── */
export function LatestAppsStrip({ apps }) {
  const latest = apps
    .filter((a) => a.isNew || a.isHot || a.isTrending)
    .slice(0, 6);

  return (
    <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-6">
      <div className="content-section">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-extrabold text-text-primary">
              New Yono Apps <span className="gradient-text">Just Added</span>
            </h2>
            <p className="text-xs text-text-muted mt-0.5">
              Freshly launched Yono games — grab the highest sign-up bonuses
              before they reset
            </p>
          </div>
          <Link
            href="/new-yono-games"
            className="text-xs font-bold text-primary hover:underline flex items-center gap-1 whitespace-nowrap"
          >
            See All <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 snap-x">
          {latest.map((app) => (
            <Link
              key={app.slug}
              href={`/${app.slug}`}
              className="flex-shrink-0 snap-start w-28 flex flex-col items-center gap-1.5 p-3 rounded-xl bg-bg border border-card-border hover:border-primary/40 hover:shadow-md transition-all text-center"
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-card-border">
                <Image
                  src={app.icon}
                  alt={`${app.name} yono app download`}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-bold text-text-primary leading-tight line-clamp-2">
                {app.name}
              </span>
              <span className="text-[11px] text-primary font-semibold">
                {app.bonus}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FAQ SECTION
───────────────────────────────────────────── */
import { homeFaqData } from "@/lib/faqData";

export function HomeFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
      <div className="content-section">
        <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-1">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-sm text-text-secondary mb-5">
          Everything you need to know about Yono Games, downloading APKs, and
          cashing out.
        </p>

        <div className="space-y-2">
          {homeFaqData.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-card-border overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 bg-bg hover:bg-card transition-all text-left gap-3"
              >
                <span className="text-sm font-semibold text-text-primary">
                  {faq.q}
                </span>
                {open === i ? (
                  <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-text-muted flex-shrink-0" />
                )}
              </button>
              {open === i && (
                <div className="px-4 pb-4 pt-1 border-t border-card-border bg-white">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Re-export homeFaqData so page.js can import it for JSON-LD */
export { homeFaqData };
