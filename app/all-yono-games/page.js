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
  AlertCircle,
  HelpCircle,
  LogIn,
  Download,
  Gamepad2,
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
    "All Yono Games 2026 — Complete List of 60+ Yono Apps Download | AllYonoMax",
  description:
    "Download all Yono Games in one place. Complete all yono app list with 60+ apps, signup bonuses up to ₹649, ₹100 min withdrawal. Updated yono games 2026 directory with new yono games added daily.",
  keywords: [
    "all yono games",
    "all yono app",
    "yono games",
    "yono games download",
    "yono rummy list",
    "new yono games",
    "yono games 2026",
    "all yono games list",
    "download all yono games",
    "yono app download",
    "yono game list",
    "all yono games download",
    "yono new games",
    "yono 777",
    "yono slots",
  ],
  alternates: { canonical: "https://allyonomax.com/all-yono-games" },
  openGraph: {
    title: "All Yono Games 2026 — 60+ Yono Apps Download | AllYonoMax",
    description:
      "Complete directory of all Yono Games with bonuses, game lists, withdrawal guides, and direct APK downloads. 60+ apps updated daily.",
    url: "https://allyonomax.com/all-yono-games",
    siteName: "AllYonoMax",
    type: "website",
  },
};

const faqData = [
  {
    question: "What are all Yono Games?",
    answer:
      "All Yono Games are real money gaming apps that run on the Yono Games platform. There are currently over 60 active apps including Diwa 777, Diwa Game, Jaiho 91, 567 Slots, Goa Spin, Ever 777, Rummy 888, and more. Each app has 30+ games inside — slots, crash games, card games, and fishing games. AllYonoMax maintains the complete all yono games list, updated daily as new apps launch.",
  },
  {
    question: "How to download all Yono Games?",
    answer:
      "Scroll through the app list on this page. Tap on any app you want. On the app page, tap the Download button — it connects directly to the official APK server. Before installing, go to your phone Settings, find Security or Privacy, and enable Install from Unknown Sources. Then open the downloaded APK file and tap Install. You can download multiple apps on the same phone.",
  },
  {
    question: "Are all Yono apps the same inside?",
    answer:
      "Yes, mostly. All Yono apps run on the same backend platform. They share the same 30+ games — Fortune Gems, Aviator, Dragon vs Tiger, Teen Patti, Roulette, Plinko, and others. The differences between apps are the branding, the signup bonus amount, and which game category they promote on their home screen. A 777-branded app will show slots first. A rummy-branded app will show card games first. But all games are available inside every app.",
  },
  {
    question: "What is the minimum withdrawal on Yono Games?",
    answer:
      "Every Yono app has a minimum withdrawal of ₹100. There is no maximum limit. Withdrawals go through UPI (Google Pay, PhonePe, Paytm) or bank transfer. No fees are deducted. Most UPI withdrawals arrive in 5 to 30 minutes.",
  },
  {
    question: "How does the Yono Games referral program work?",
    answer:
      "Every Yono app has a 3-level referral program. You get a referral link inside the app. Share it with anyone. Level 1: you earn commission when someone registers using your link. Level 2: you earn when that person's referrals register. Level 3: one more level down. Referral earnings go to your wallet and can be withdrawn just like game winnings. The weekly Refer Leaderboard gives up to ₹50,000 extra to top referrers.",
  },
  {
    question: "Can I install multiple Yono apps on one phone?",
    answer:
      "Yes. Each Yono app is a separate APK file, usually 42 to 47MB. You can install as many as you want on the same phone. Each app has its own wallet, so you can claim the signup bonus on every app individually. Many experienced players install 5 to 10 apps to collect multiple bonuses.",
  },
  {
    question: "What is the Yono Games OTP not received problem?",
    answer:
      "If you don't receive the OTP during registration, first check if your phone has network signal. Wait 60 seconds before requesting again — most OTPs arrive within 30 seconds. Check your SMS inbox and spam/blocked folder. Make sure your phone number is active and can receive SMS. If it still doesn't arrive, restart your phone and try once more. Some users on Jio or BSNL networks report slight delays during peak hours.",
  },
  {
    question: "How to withdraw money from Yono Games?",
    answer:
      "Open any Yono app, go to the Wallet section, and tap Withdraw. Enter the amount (minimum ₹100). Choose UPI or Bank Transfer. Enter your UPI ID or bank details. Tap Confirm. The money usually arrives in 5 to 30 minutes for UPI and up to a few hours for bank transfer. No fees are charged on any withdrawal.",
  },
  {
    question: "Why is my Yono Games withdrawal pending?",
    answer:
      "Withdrawals can get stuck for a few reasons: 1) Your UPI ID may have a typo — double-check it in the app. 2) Bank server downtime — try again after an hour. 3) If you entered bank details for the first time, the first withdrawal sometimes takes longer to verify. 4) Very late night or early morning withdrawals may process slower. If it's been more than 2 hours, contact support through the in-app Live Chat.",
  },
  {
    question: "Are new Yono Games better than older ones?",
    answer:
      "New Yono Games almost always launch with bigger signup bonuses to attract players fast. An app might offer ₹500 at launch and drop it to ₹100 a few weeks later. The games inside are the same across all apps. So the advantage of downloading new apps early is purely the higher bonus. Check our New Yono Games page regularly to catch launch-window offers.",
  },
  {
    question: "What games are inside Yono apps?",
    answer:
      "Every Yono app has six categories of games: 777 Slots (Fortune Gems, Golden Empire, Power of Kraken, 500 Lucky Gem), Crash Games (Aviator, Jet X, Rocket X, Space X, Go Rush, Limbo), Card Games (Dragon vs Tiger, 7 Up Down, Andar Bahar, Teen Patti, Lucky 7, Color Game), Table Games (Roulette, Plinko, Keno, Dice, Bonanza Wheel, Penalty Shooter), Fishing Games (Fishing Frenzy, Fishing King), and Lucky Wheel (available after deposits).",
  },
  {
    question: "Is it safe to download Yono Games APK?",
    answer:
      "Yes, as long as you download from a trusted source. Every download link on AllYonoMax goes directly to the official Yono Games server — no modified APKs, no third-party file hosts. Your payments go through standard UPI infrastructure, the same system used by Google Pay and PhonePe. Enable Install from Unknown Sources only when installing, and disable it afterward if you prefer extra caution.",
  },
  {
    question: "What is the Yono Games weekly leaderboard?",
    answer:
      "Every Yono app has two weekly leaderboards that reset every Monday. The Bet Leaderboard ranks players by total bet amount for the week. The Refer Leaderboard ranks players by total referrals. Top prize on both is ₹50,000. Second place gets ₹30,000, third gets ₹20,000. Lower positions also receive prizes. You can check the leaderboard inside any app.",
  },
  {
    question: "How to login to Yono Games after reinstalling?",
    answer:
      "Open the app and tap Login (not Sign Up). Enter the same mobile number you used when you first registered. You will receive an OTP. Verify it and your account loads with your existing wallet balance. Your wallet data is tied to your phone number, not to the app installation. So even if you delete and reinstall the app, your balance is safe.",
  },
  {
    question: "Which Yono app has the highest bonus right now?",
    answer:
      "Bonus amounts change frequently. New Yono apps typically launch with the highest bonuses. As of the latest update on this page, apps like Diwa Game, Spin Winner, and SVIP 777 are offering some of the highest signup bonuses. Check the bonus amount shown next to each app in the list above — it reflects the current offer.",
  },
];

export default function AllYonoGamesPage() {
  const allApps = getAllApps();

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
      <ItemListSchema apps={allApps} />

      <div className="bg-bg min-h-screen">
        <Navbar />

        {/* HERO */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pt-3 pb-1">
          <nav
            className="flex items-center gap-2 text-xs text-text-muted mb-2"
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

          <div className="content-section mb-3 p-3 sm:p-4">
            <h1 className="text-lg sm:text-xl font-extrabold text-text-primary leading-tight">
              All Yono Games 2026 —{" "}
              <span className="gradient-text">Complete App List</span>
            </h1>
            <p className="text-xs text-text-muted mt-1">
              {allApps.length}+ verified <strong className="text-text-primary">all yono apps</strong> · Direct <strong className="text-text-primary">yono games download</strong> links · Updated daily
            </p>

            {/* Compact Stats Row */}
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              {[
                { label: "Total", value: allApps.length + "+", color: "text-primary" },
                { label: "Rummy", value: rummyApps.length + "+", color: "text-teal" },
                { label: "Slots", value: slotsApps.length + "+", color: "text-accent" },
                { label: "New", value: newApps.length + "+", color: "text-green-accent" },
              ].map(({ label, value, color }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-bg border border-card-border"
                >
                  <span className={`font-extrabold ${color}`}>{value}</span>
                  <span className="text-text-muted">{label}</span>
                </span>
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
            {allApps.map((app, i) => (
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

        {/* WHAT ARE YONO GAMES - EDITORIAL */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2 className="text-xl font-extrabold text-text-primary mb-3">
              What Are <span className="gradient-text">All Yono Games</span>?
            </h2>
            <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>
                Yono Games is a platform that hosts real money gaming apps for Android. The platform has been around since 2024 and currently runs over 60 active apps. If you look at the <strong className="text-text-primary">all yono games</strong> list above, you will see names like Diwa 777, Diwa Game, Jaiho 91, 567 Slots, Goa Spin, MWM Bet, Rummy 888, and dozens more.
              </p>
              <p>
                Here is the part most directories don't tell you: almost every <strong className="text-text-primary">all yono app</strong> runs on the exact same backend. Same servers, same UPI payment processing, same game library, same referral system. The difference between apps is mostly branding and bonus amounts. A "777 slots" app will show slot games on its home screen. A "rummy" app will show card games first. But open the full game menu inside any of them and you will find the same 30+ games.
              </p>

              <h3 className="text-base font-bold text-text-primary mt-6 mb-2">Games Inside Every Yono App</h3>
              <p>
                When you do a <strong className="text-text-primary">yono games download</strong> for any app on this list, you get access to six categories of games:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {[
                  { cat: "777 Slots", games: "Fortune Gems, Golden Empire, Power of Kraken, 500 Lucky Gem" },
                  { cat: "Crash Games", games: "Aviator, Jet X, Rocket X, Space X, Go Rush, Limbo" },
                  { cat: "Card Games", games: "Dragon vs Tiger, 7 Up Down, Andar Bahar, Teen Patti, Lucky 7" },
                  { cat: "Table Games", games: "Roulette, Plinko, Keno, Dice, Bonanza Wheel" },
                  { cat: "Fishing Games", games: "Fishing Frenzy, Fishing King" },
                  { cat: "Lucky Wheel", games: "Spin after deposit for bonus cash and multipliers" },
                ].map((g) => (
                  <div key={g.cat} className="p-3 rounded-lg bg-bg border border-card-border">
                    <p className="font-bold text-text-primary text-xs mb-1">{g.cat}</p>
                    <p className="text-xs text-text-muted">{g.games}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-base font-bold text-text-primary mt-6 mb-2">Why Are There So Many Apps?</h3>
              <p>
                The platform releases <strong className="text-text-primary">new yono games</strong> regularly with different branding. This is a marketing strategy — each new app launches with a high signup bonus (often ₹200 to ₹600) to attract a fresh batch of players. After a few weeks, the bonus drops. Then a new app launches with a fresh high bonus. That cycle keeps repeating.
              </p>
              <p>
                The practical result for players: you can install multiple apps and claim the signup bonus on each one separately. Someone who installs 5 different apps from the <strong className="text-text-primary">all yono games list</strong> can collect 5 separate bonuses — sometimes adding up to over ₹1,500 in total, without depositing a single rupee.
              </p>

              <h3 className="text-base font-bold text-text-primary mt-6 mb-2">Two Types of Yono Apps</h3>
              <p>
                Even though the games are the same, the apps fall into two visual types:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Type A (Diwa-style):</strong> Diwa 777, Diwa Game, Diwa VIP, SVIP 777, Good Slots. These share the same app layout and UI design. The home screen leads with slot games and crash games.</li>
                <li><strong>Type B (Standard Yono):</strong> Jaiho 91, Rummy 888, Yono 777, Ever 777, Goa Spin, MWM Bet, 567 Slots, and most others. These share a different layout that puts cards and table games alongside slots and crash games.</li>
              </ul>
              <p>
                Both types have the same game catalog inside. The difference is only visual — the app icon, the home screen arrangement, and the color scheme.
              </p>
            </div>
          </div>
        </section>

        {/* HOW TO DOWNLOAD */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2 className="text-xl font-extrabold text-text-primary mb-1 flex items-center gap-2">
              <Download className="w-5 h-5 text-primary" />
              How to Download Yono Games APK
            </h2>
            <p className="text-sm text-text-secondary mb-4">
              Step-by-step guide that works for every app in the <strong className="text-text-primary">all yono app</strong> directory.
            </p>
            <div className="space-y-3">
              {[
                { step: "1", title: "Pick an app from the list above", desc: "Tap on any app card. You will go to that app's dedicated page with the download button, game details, and bonus information." },
                { step: "2", title: "Tap the Download button", desc: "The button connects directly to the official Yono Games APK server. No redirects, no third-party file hosts. The APK file (42 to 47MB) will start downloading to your phone." },
                { step: "3", title: "Enable Unknown Sources", desc: "Go to your phone Settings → Security or Privacy → turn on Install from Unknown Sources (or Install Unknown Apps for your browser). This is needed because Yono apps are APK files, not from the Play Store." },
                { step: "4", title: "Install the APK", desc: "Open your notification panel or Downloads folder. Tap the APK file and select Install. The installation takes 10 to 20 seconds." },
                { step: "5", title: "Register and claim your bonus", desc: "Open the app. Tap Sign Up. Enter your mobile number. You will receive an OTP via SMS — enter it. Your signup bonus is credited to your wallet instantly. No deposit needed." },
              ].map((s) => (
                <div key={s.step} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-extrabold text-primary">{s.step}</span>
                  </div>
                  <div>
                    <p className="font-bold text-text-primary text-sm">{s.title}</p>
                    <p className="text-xs text-text-secondary leading-relaxed mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OTP TROUBLESHOOTING */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2 className="text-xl font-extrabold text-text-primary mb-1 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-accent" />
              OTP Not Received? Here's What to Do
            </h2>
            <p className="text-sm text-text-secondary mb-4">
              This is the most common issue during registration on any Yono app.
            </p>
            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p>
                When you register on any Yono app, you enter your mobile number and the app sends a one-time password (OTP) via SMS. Most of the time it arrives in 10 to 30 seconds. But sometimes it doesn't. Here are the most common reasons and fixes:
              </p>
              <ul className="space-y-2">
                {[
                  { title: "Wait 60 seconds", desc: "OTPs are sent through SMS gateways. During busy hours, there can be a 30 to 60 second delay. Don't tap the Resend button until a full minute has passed." },
                  { title: "Check your SMS inbox carefully", desc: "The OTP might already be there. Some phones put unknown sender messages in a separate tab or folder. Check Spam, Blocked, or Promotions folders." },
                  { title: "Network signal", desc: "SMS requires basic network connectivity. If you're in a basement or an area with weak signal, move to a location with better reception and try again." },
                  { title: "Jio / BSNL delays", desc: "Some users on Jio and BSNL networks report slightly longer OTP delivery times during peak hours (8 PM to 11 PM). If you're on these networks, waiting 2 to 3 minutes usually resolves it." },
                  { title: "DND (Do Not Disturb) is active", desc: "If you have activated DND with your telecom operator, some transactional SMS messages may get blocked. Contact your operator or dial 1909 to check your DND status." },
                  { title: "Restart your phone", desc: "This refreshes your network connection. After restarting, open the app and request a new OTP." },
                  { title: "Try a different number", desc: "If nothing else works, try registering with a different active mobile number. The OTP system sends to any Indian mobile number." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-2 items-start">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <div>
                      <span className="font-semibold text-text-primary">{item.title}:</span>{" "}
                      {item.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* WITHDRAWAL GUIDE */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2 className="text-xl font-extrabold text-text-primary mb-1 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-teal" />
              How to Withdraw Money from Yono Games
            </h2>
            <p className="text-sm text-text-secondary mb-4">
              This process is the same on every app in the <strong className="text-text-primary">all yono games</strong> directory.
            </p>
            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {[
                  { label: "Min Withdrawal", value: "₹100" },
                  { label: "Max Withdrawal", value: "No Limit" },
                  { label: "Methods", value: "UPI / Bank" },
                  { label: "Time", value: "5-30 min" },
                ].map((d) => (
                  <div key={d.label} className="text-center p-2 rounded-lg bg-bg border border-card-border">
                    <p className="text-xs text-text-muted">{d.label}</p>
                    <p className="font-bold text-text-primary text-sm">{d.value}</p>
                  </div>
                ))}
              </div>

              <p><strong className="text-text-primary">Step 1:</strong> Open the app and go to your Wallet.</p>
              <p><strong className="text-text-primary">Step 2:</strong> Tap Withdraw.</p>
              <p><strong className="text-text-primary">Step 3:</strong> Enter the amount. Minimum is ₹100, no maximum.</p>
              <p><strong className="text-text-primary">Step 4:</strong> Choose UPI or Bank Transfer. For UPI, enter your UPI ID (example: yourname@ybl or 9876543210@paytm). For bank, enter your account number and IFSC code.</p>
              <p><strong className="text-text-primary">Step 5:</strong> Tap Confirm. You will get a notification when the transfer is done.</p>

              <h3 className="text-base font-bold text-text-primary mt-5 mb-2">Withdrawal Stuck or Pending?</h3>
              <p>
                If your withdrawal shows as "pending" for more than 30 minutes:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Double-check your UPI ID for typos. A single wrong character will fail the transfer silently.</li>
                <li>Bank server downtime happens — especially late at night and early morning. Wait an hour and check again.</li>
                <li>First-time bank transfers sometimes take longer as the system verifies the account.</li>
                <li>If it has been more than 2 hours, open the Live Chat inside the app and share your withdrawal transaction ID.</li>
              </ul>
              <p className="mt-2">
                No Yono app charges withdrawal fees. The full amount you request is the amount that reaches your account.
              </p>
            </div>
          </div>
        </section>

        {/* LOGIN & ACCOUNT HELP */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2 className="text-xl font-extrabold text-text-primary mb-1 flex items-center gap-2">
              <LogIn className="w-5 h-5 text-green-accent" />
              How to Login After Reinstalling
            </h2>
            <div className="space-y-3 text-sm text-text-secondary leading-relaxed mt-3">
              <p>
                Your Yono Games account is tied to your mobile number, not to the app installation. If you uninstall and reinstall the app, or switch to a new phone, your wallet balance is safe.
              </p>
              <p>
                To login again: open the app, tap <strong className="text-text-primary">Login</strong> (not Sign Up), enter the same mobile number you originally registered with, verify the OTP, and your account loads with your existing balance.
              </p>
              <p>
                <strong className="text-text-primary">Important:</strong> Do not tap Sign Up on a reinstalled app. That will try to create a new account. Always tap Login if you already have an account. If you accidentally created a new account with a different number, contact support through in-app Live Chat — they can sometimes help merge accounts.
              </p>
            </div>
          </div>
        </section>

        {/* WHY ALLYONOMAX */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2 className="text-xl font-extrabold text-text-primary mb-1">
              Why Use AllYonoMax for <span className="gradient-text">Yono Games Download</span>?
            </h2>
            <p className="text-sm text-text-secondary mb-5">
              There are dozens of directories listing Yono apps. Here is why AllYonoMax is different.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  Icon: ShieldCheck,
                  title: "Direct APK Links — No Redirects",
                  desc: "Every download button connects directly to the official Yono Games server. No third-party file hosting, no modified APKs. What you download is exactly what the official server hosts.",
                  color: "text-teal",
                  bg: "bg-teal/10",
                },
                {
                  Icon: TrendingUp,
                  title: "Bonus Amounts Updated Daily",
                  desc: "When an app changes its signup bonus from ₹500 to ₹100, we update it the same day. The bonus number you see next to each app is the current offer, not a number from last month.",
                  color: "text-primary",
                  bg: "bg-primary/10",
                },
                {
                  Icon: Users,
                  title: "Dead Apps Removed",
                  desc: "The Yono platform occasionally shuts down older apps. When an app's server goes offline, we remove it from the directory. Every app listed here is currently live and accepting new registrations.",
                  color: "text-accent",
                  bg: "bg-accent/10",
                },
                {
                  Icon: Smartphone,
                  title: "One Place — No Telegram Hunting",
                  desc: "You don't need to scour Telegram groups, WhatsApp forwards, or random websites. Every active Yono app is categorized, rated, and listed right here. New apps are added the day they launch.",
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

        {/* RESPONSIBLE GAMING */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2 className="text-lg font-extrabold text-text-primary mb-2">
              Responsible Gaming
            </h2>
            <div className="space-y-2 text-sm text-text-secondary leading-relaxed">
              <p>
                All Yono Games involve real money. You can win and you can lose. Before you deposit, set a limit for yourself and stick to it. Never play with money you need for rent, bills, or daily expenses.
              </p>
              <p>
                The signup bonuses listed on this page are free — you get them without depositing anything. Use those to explore the games first. If you enjoy it and can afford to continue, that is your decision. If you feel you are spending more than you should, stop and take a break.
              </p>
              <p>
                AllYonoMax is a directory. We do not own or operate any Yono app. We list the apps, verify the download links, and provide information to help you make informed decisions.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-10">
          <div className="content-section">
            <h2 className="text-xl font-extrabold text-text-primary mb-1">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-sm text-text-secondary mb-5">
              Everything about <strong className="text-text-primary">all yono games</strong> — downloads, bonuses, withdrawals, and troubleshooting.
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
