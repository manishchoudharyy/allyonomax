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
  IndianRupee,
  Smartphone,
  Gift,
  Trophy,
  Layers,
  ArrowRight,
  CircleCheck,
} from "lucide-react";

/* ─────────────────────────────────────────────
   WHAT ARE YONO GAMES?
───────────────────────────────────────────── */
export function WhatAreYonoGames({ categoryCounts }) {
  const categories = [
    {
      emoji: "🃏",
      name: "Rummy Games",
      count: categoryCounts.rummy,
      desc: "Classic Indian rummy with real cash prizes",
      href: "/yono-rummy-games",
    },
    {
      emoji: "🎰",
      name: "Slots & 777",
      count: categoryCounts.slots,
      desc: "Spin karo, jito — daily jackpots available",
      href: "/yono-slots-777-games",
    },
    {
      emoji: "⭐",
      name: "New & Trending",
      count: categoryCounts.new,
      desc: "Latest launches with highest signup bonuses",
      href: "/#apps",
    },
    {
      emoji: "🎲",
      name: "Bingo & Casino",
      count: categoryCounts.casino + categoryCounts.bingo,
      desc: "Bingo, arcade aur casual earning games",
      href: "/#apps",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
      <div className="content-section">
        <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-1">
          Yono Games Kya Hai?{" "}
          <span className="gradient-text">— Platform Overview</span>
        </h2>
        <p className="text-xs text-text-muted mb-4 font-medium">
          India ka sabse bada real money gaming ecosystem
        </p>

        <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
          <p>
            <strong className="text-text-primary">Yono Games</strong> ek Indian gaming
            company hai jo real money earning apps banati hai — mainly rummy, slots,
            777, bingo aur arcade format mein. Ye apps sirf Android pe APK format mein
            available hain kyunki Google Play Store pe real money gaming apps allow nahi
            hain India mein. Yahi wajah hai ki aapko direct download link chahiye hoti hai.
          </p>
          <p>
            Is ecosystem mein abhi{" "}
            <strong className="text-text-primary">61 se zyada active apps</strong> hain, aur
            naye apps almost har hafte launch hote hain. Sab apps ek hi backend platform pe
            run karte hain — agar ek app use kar chuke ho toh interface dusre mein bhi
            familiar lagta hai. Signup bonus direct wallet mein aata hai, aur UPI se
            withdrawal karna kuch minutes ka kaam hai.
          </p>
          <p>
            <strong className="text-text-primary">AllYonoMax</strong> pe hum saare Yono
            Games apps ek jagah track karte hain — bonuses, ratings, refer links sab
            updated. Aapko alag alag websites pe search nahi karna padega. Yahan se direct
            refer link use karo aur signup bonus automatically milta hai — koi extra steps
            nahi.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="flex flex-col items-center text-center p-3 rounded-xl bg-bg border border-card-border hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-1">{cat.emoji}</span>
              <span className="text-xs font-bold text-text-primary group-hover:text-primary transition-colors">
                {cat.name}
              </span>
              <span className="text-xs text-primary font-semibold mt-0.5">
                {cat.count} Apps
              </span>
              <span className="text-[10px] text-text-muted mt-1 hidden sm:block">
                {cat.desc}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   BEST YONO APPS TABLE
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
          <span className="gradient-text">Available Today</span>
        </h2>
        <p className="text-sm text-text-secondary mb-4">
          Rating aur bonus ke hisaab se top-ranked Yono Games apps — sabse zyada
          trusted aur downloaded apps ki list.
        </p>

        <div className="overflow-x-auto rounded-xl border border-card-border -mx-1">
          <table className="w-full text-sm min-w-[500px]">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-3 py-2.5 font-bold rounded-tl-xl">#</th>
                <th className="text-left px-3 py-2.5 font-bold">App Name</th>
                <th className="text-left px-3 py-2.5 font-bold">Category</th>
                <th className="text-left px-3 py-2.5 font-bold">Signup Bonus</th>
                <th className="text-left px-3 py-2.5 font-bold">Min Withdrawal</th>
                <th className="text-left px-3 py-2.5 font-bold rounded-tr-xl">Rating</th>
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
                      <span className="text-text-muted font-semibold">{i + 1}</span>
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
                      {app.category}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 font-bold text-primary">
                    {app.bonus}
                  </td>
                  <td className="px-3 py-2.5 text-text-secondary">{app.minWithdrawal}</td>
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
          * Ratings aur bonuses daily update hote hain. Download se pehle app page
          check karo.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   HOW TO DOWNLOAD YONO GAMES
───────────────────────────────────────────── */
export function HowToDownload() {
  const steps = [
    {
      num: "01",
      title: "App Choose Karo",
      desc: 'Upar di gayi list mein se koi bhi Yono Game select karo. Bonus amount aur category dekho apni preference ke hisaab se. Rummy pasand hai toh rummy wala choose karo — slots chahiye toh slots.',
    },
    {
      num: "02",
      title: "App Page Pe Jao",
      desc: "App card pe click karo. Wahan aapko full details milenge — bonus, withdrawal limit, app size, aur user ratings. Download button tak scroll karo.",
    },
    {
      num: "03",
      title: "APK Download Karo",
      desc: 'Blue "Download" button pe click karo. APK file automatically download shuru ho jaegi. Agar browser ne warning di toh "Download Anyway" select karo — ye normal hai APK files ke liye.',
    },
    {
      num: "04",
      title: "Install Karo",
      desc: 'APK install karne ke liye pehle phone settings mein "Unknown Sources" ya "Install Unknown Apps" enable karna padega. One-time step hai — ek baar karne ke baad sab apps install ho jaate hain.',
    },
    {
      num: "05",
      title: "Register Karo — Bonus Lo",
      desc: "App open karo, mobile number se register karo. Signup bonus automatically aapke wallet mein aata hai. Ab khelo aur jab chaaho UPI pe withdraw karo — minimum sirf ₹100.",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
      <div className="content-section">
        <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-1">
          Yono Games{" "}
          <span className="gradient-text">Download Kaise Kare?</span>
        </h2>
        <p className="text-sm text-text-secondary mb-5">
          5 simple steps mein koi bhi Yono App download aur install kar sakte ho —
          mobile number ke alawa kuch nahi chahiye.
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
            <strong className="text-text-primary">Security Note:</strong> Saare Yono
            Games apps pe AllYonoMax ke refer links directly Yono company ke official
            servers pe redirect karte hain. Hum kisi bhi app ko host nahi karte —
            sirf refer links provide karte hain.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHY USERS CHOOSE YONO GAMES
───────────────────────────────────────────── */
export function WhyChooseYono() {
  const reasons = [
    {
      icon: Gift,
      title: "Instant Signup Bonus",
      desc: "Register karte hi ₹51 se ₹550 tak bonus direct wallet mein. Koi deposit ki zarurat nahi — seedha bonus se khelna shuru karo.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Zap,
      title: "Fast UPI Withdrawal",
      desc: "Jeetne ke baad UPI pe withdraw request daal do — zyada cases mein 5–15 minute mein paise aa jaate hain. Minimum sirf ₹100.",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: Layers,
      title: "61+ Apps, Ek Jagah",
      desc: "Alag-alag apps ke liye alag websites pe nahi jaana. AllYonoMax pe sab updated refer links aur bonuses ek hi jagah milte hain.",
      color: "text-teal",
      bg: "bg-teal/10",
    },
    {
      icon: Users,
      title: "Refer & Earn Program",
      desc: "Dosto ko invite karo aur unke har download pe commission lo. Kuch popular apps mein refer earnings ₹200 se ₹500 per person tak hain.",
      color: "text-green-accent",
      bg: "bg-green-accent/10",
    },
    {
      icon: Smartphone,
      title: "Lightweight APKs",
      desc: "Zyaadatar Yono apps sirf 30–70 MB ki hain. Purana phone bhi smoothly chalata hai. 2G/3G pe bhi install ho jaati hain.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: ShieldCheck,
      title: "Daily Updates",
      desc: "AllYonoMax pe naye apps launch hote hi add ho jaate hain. Purane apps band ho jaayein toh hum immediately notify karte hain Telegram channel pe.",
      color: "text-teal",
      bg: "bg-teal/10",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
      <div className="content-section">
        <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-1">
          Log Yono Games{" "}
          <span className="gradient-text">Kyun Choose Karte Hain?</span>
        </h2>
        <p className="text-sm text-text-secondary mb-5">
          10 lakh se zyada Indian users daily Yono Games apps use karte hain — yahan
          wajah samjho.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
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
   BROWSE BY CATEGORY (Internal Linking)
───────────────────────────────────────────── */
export function BrowseByCategory({ counts }) {
  const cats = [
    {
      emoji: "🃏",
      label: "Yono Rummy Games",
      sub: `${counts.rummy} apps — Club INR, Love Rummy, Boss Rummy...`,
      href: "/yono-rummy-games",
      color: "border-primary/30 hover:border-primary",
      badge: "Most Popular",
      badgeColor: "bg-primary text-white",
    },
    {
      emoji: "🎰",
      label: "Yono Slots & 777",
      sub: `${counts.slots} apps — Goa Spin, Diwa 777, MWM Bet...`,
      href: "/yono-slots-777-games",
      color: "border-accent/30 hover:border-accent",
      badge: "High Bonus",
      badgeColor: "bg-accent text-white",
    },
    {
      emoji: "🆕",
      label: "New Yono Games",
      sub: `Latest launches — highest signup bonuses`,
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
          Category Se{" "}
          <span className="gradient-text">Browse Karo</span>
        </h2>
        <p className="text-sm text-text-secondary mb-4">
          Apni pasand ke hisaab se Yono Games category choose karo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {cats.map((c) => (
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
              <span className="text-3xl">{c.emoji}</span>
              <span className="font-extrabold text-text-primary text-sm group-hover:text-primary transition-colors pr-16">
                {c.label}
              </span>
              <span className="text-text-muted text-xs">{c.sub}</span>
              <span className="flex items-center gap-1 text-xs font-semibold text-primary mt-1">
                Explore <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   LATEST YONO APPS STRIP
───────────────────────────────────────────── */
export function LatestAppsStrip({ apps }) {
  const latest = apps
    .filter((a) => a.isNew || a.isHot || a.isTrending)
    .slice(0, 5);

  return (
    <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-6">
      <div className="content-section">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-extrabold text-text-primary">
              Latest Yono Apps{" "}
              <span className="gradient-text">2026</span>
            </h2>
            <p className="text-xs text-text-muted mt-0.5">
              Abhi launch hue naye Yono Games — sabse high bonuses
            </p>
          </div>
          <Link
            href="/new-yono-games"
            className="text-xs font-bold text-primary hover:underline flex items-center gap-1 whitespace-nowrap"
          >
            Sab Dekho <ArrowRight className="w-3 h-3" />
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
                  alt={`${app.name} yono app`}
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
   FAQ SECTION (with JSON-LD schema via parent)
───────────────────────────────────────────── */
import { homeFaqData } from "@/lib/faqData";

export function HomeFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
      <div className="content-section">
        <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-1">
          Frequently Asked{" "}
          <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-sm text-text-secondary mb-5">
          Yono Games ke baare mein sabse zyada pooche jaane wale sawaal.
        </p>

        <div className="space-y-2">
          {homeFaqData.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-card-border overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 bg-bg hover:bg-card hover:border-primary/20 transition-all text-left gap-3"
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

/* Export FAQ data for JSON-LD schema (used in page.js) */
export { homeFaqData };
