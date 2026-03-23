"use client";

import { useState } from "react";
import { Star, Eye, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import FloatingTelegram from "@/components/FloatingTelegram";
import { WebsiteSchema } from "@/components/SchemaMarkup";
import { getAllApps, getAllQueryKeywords } from "@/lib/helpers";

const allApps = getAllApps();
const keywords = getAllQueryKeywords();

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("new");
  const [showAll, setShowAll] = useState(false);

  // Split apps into "new" and "other" categories
  const newApps = allApps.filter((app) => app.isNew || app.isHot || app.isTrending);
  const otherApps = allApps.filter((app) => !app.isNew && !app.isHot && !app.isTrending);

  const displayApps = activeTab === "new" ? newApps : otherApps;
  const visibleApps = showAll ? displayApps : displayApps.slice(0, 6);

  return (
    <>
      <div className="bg-bg min-h-screen">
        <WebsiteSchema />
        <Navbar />

        {/* ── HERO SECTION ── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-6">
            ALL YONO GAMES India
          </h1>

          {/* Teal Info Card */}
          <div className="info-card-teal text-left">
            <p>
              All Yono Max is a platform where users can find and download real money gaming apps in one place. It offers popular categories like Rummy, Slots, Bingo, and Spin games, with daily rewards and sign-up bonuses across trending apps.
            </p>
          </div>
        </section>

        {/* ── DOWNLOAD SECTION ── */}
        <section id="apps" className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
          {/* Section Header */}
          <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary text-center mb-6">
            Download NEW YONO Games
          </h2>

          {/* Tab Switcher */}
          <div className="tab-container mb-8">
            <button
              className={`tab-btn ${activeTab === "new" ? "active" : ""}`}
              onClick={() => { setActiveTab("new"); setShowAll(false); }}
            >
              <Star className="w-4 h-4" />
              New Games
            </button>
            <button
              className={`tab-btn ${activeTab === "other" ? "active" : ""}`}
              onClick={() => { setActiveTab("other"); setShowAll(false); }}
            >
              <Eye className="w-4 h-4" />
              Other Games
            </button>
          </div>

          {/* App List */}
          <div className="space-y-5">
            {visibleApps.map((app, idx) => (
              <AppCard key={app.id} app={app} index={idx} />
            ))}
          </div>

          {/* Show More */}
          {!showAll && displayApps.length > 6 && (
            <div className="load-more-indicator mt-6" onClick={() => setShowAll(true)}>
              <ChevronDown className="w-5 h-5" />
              <span className="text-sm font-medium">Show All ({displayApps.length} apps)</span>
            </div>
          )}
        </section>

            {/* ── FEATURED GAMING APPS ── */}
        <section className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 pb-8">
          <div className="content-section">
            <h2>Featured Gaming Apps</h2>
            <p>AllYonoMax brings you a curated selection of top-rated gaming apps with secure play, fast withdrawals, and daily rewards.</p>

            <h3><a href="/joy-rummy" className="text-blue-600 no-underline hover:text-blue-800">Joy Rummy</a> APK - India&#39;s #1 Rummy Platform</h3>
            <p><a href="/joy-rummy" className="text-blue-600 no-underline hover:text-blue-800">Joy Rummy</a> is a trusted rummy app with daily bonus rewards and withdrawals from ₹100. Enjoy Points, Pool, and Deals Rummy with smooth gameplay and 24/7 support.</p>

            <h3><a href="/game-rummy" className="text-blue-600 no-underline hover:text-blue-800">Game Rummy</a> APK - Premium Gaming Experience</h3>
            <p><a href="/game-rummy" className="text-blue-600 no-underline hover:text-blue-800">Game Rummy</a> combines slots, poker, rummy, and skill games in one premium platform. Unlock VIP tournaments, higher limits, priority support, and exclusive bonuses.</p>

            <h3><a href="/rumble-rummy" className="text-blue-600 no-underline hover:text-blue-800">Rumble Rummy</a> - All-in-One Gaming Hub</h3>
            <p><a href="/rumble-rummy" className="text-blue-600 no-underline hover:text-blue-800">Rumble Rummy</a> offers slots, card games, and arcade fun with fast withdrawals and a lag-free experience. Get instant welcome bonuses and daily tournaments.</p>

            <h3>Complete All Yono Games Collection 2026</h3>
            <p>Explore the full AllYonoMax collection with slots, bingo, rummy, and more. Every app is optimized for Indian players with UPI, Paytm, PhonePe, and GPay support.</p>
            <p>Sign-up bonuses range from ₹500 to ₹1500 with minimum withdrawal starting at ₹100 across apps. Download now and start earning today.</p>

            <h4 className="text-lg font-semibold mt-4 mb-2">Featured Apps Include</h4>
            <p>
              <a href="/joy-rummy" className="text-blue-600 no-underline hover:text-blue-800">Joy Rummy</a>,{" "}
              <a href="/game-rummy" className="text-blue-600 no-underline hover:text-blue-800">Game Rummy</a>,{" "}
              <a href="/rumble-rummy" className="text-blue-600 no-underline hover:text-blue-800">Rumble Rummy</a>,{" "}
              Rummy Ludo, Rummy 77, Hindi 777, ABC Rummy, Yono VIP, Ok Rummy, Yes Spin, India Slots, Yono 777,
              Yono Games, 91 Club, Ind Slots, Rummy 888, 567 Slots, Bingo 101, Spin Winner, Slots Winner,
              Jaiho Rummy, Jaiho Win, Yono Arcade, Yono Slots and many more.
            </p>
          </div>
        </section>

        {/* ── QUERIES SECTION ── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
          <div className="content-section">
            <h4 className="text-lg font-semibold mb-3">Queries</h4>
            <div className="flex flex-row gap-2 max-w-full overflow-auto custom-scrollbar bg-gray-100 rounded-md py-4 px-2">
              {keywords.map((item, i) => (
                <span key={i} className="px-4 py-1.5 text-white rounded-full bg-primary whitespace-nowrap text-sm">{item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIPS FOR NEW PLAYERS ── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
          <div className="content-section">
            <h2>Start Smart: Tips for New Players</h2>
            <p>Getting started with AllYonoMax is simple, but a few pointers can help you feel right at home from the first click. Whether you&#39;ve been playing for years or you&#39;re trying something new, these tips can make your experience smoother and more enjoyable.</p>
            <ul>
              <li><strong>Begin with Simpler Games:</strong> If you&#39;re new here, start with games that are easy to pick up. Titles like Joy Rummy and other card classics have clear instructions and familiar rules. Once you feel comfortable, you can branch out into premium games that offer more depth and variety.</li>
              <li><strong>Use AllYonoMax:</strong> AllYonoMax is the quickest way to download your favorites and manage your collection. Many players find it helpful to access games on the go without searching through long lists.</li>
              <li><strong>Check Reviews Before You Play:</strong> Every game page has reviews and ratings from other players. Reading these can give you a sense of what to expect, especially if you&#39;re unsure which game to try first.</li>
              <li><strong>Don&#39;t Play Continuously:</strong> Gaming is more fun when you pace yourself. Short breaks keep your mind fresh and help you enjoy each session without feeling tired or distracted.</li>
            </ul>

            <h2 className="mt-6">Join Community Discussions</h2>
            <p>Our community is filled with players who share strategies, tips, and encouragement. Whether you want advice on improving your skills or you&#39;d just like to connect, you&#39;ll find plenty of helpful voices ready to welcome you.</p>

            <h3 className="text-red-600 font-bold mt-6">Disclaimer:</h3>
            <p>AllYonoMax.com is an independent platform. We don&#39;t own, manage, or operate any of the apps you see listed here. Our website is designed to help you discover and learn about different gaming options, but we don&#39;t control how those apps work or handle their services.</p>
            <p>It&#39;s important to know that rummy apps can be addictive for some people. They also carry financial risks, especially if you&#39;re not careful with your spending. That&#39;s why we strongly recommend using these apps responsibly. If you choose to play, please set limits and stay aware of your habits.</p>

            <h3 className="text-yellow-600 font-bold mt-6">Important Alert</h3>
            <p>Rummy, even as a skill-based game, is not legal everywhere. It is banned by the government in the following states: Andhra Pradesh, Sikkim, Nagaland, Assam, Arunachal Pradesh, Tamil Nadu, Odisha, and Telangana. If you live in any of these places, you should not download or play rummy apps.</p>
            <p>If you have questions about whether these games are allowed in your area or about how to play safely, please read all disclaimers carefully or get legal advice.</p>

            <div className="text-sm text-gray-500 border-t border-gray-200 pt-4 mt-6">
              AllYonoMax - Download All Yono Rummy App And Get ₹500 To ₹1500 Sign Up Bonus With Minimum Withdrawal In ₹100 Each
              Yono App | Yono Rummy | Yono 777 App | Yono Games | Yono App
            </div>
          </div>
        </section>

        {/* ── ALL YONO GAMES ── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
          <div className="content-section">
            <h2>All Yono Games</h2>
            <p>AllYonoMax was born in May 2025 with a simple idea: to give every player in India a place to discover, play, and enjoy games that feel both familiar and fresh. We noticed how much people love games that ask for more than just tapping a screen.</p>
            <p>You want something that makes you think, plan, and stay engaged. That&#39;s why our collection blends easy fun with real challenges. From the start, we focused on Indian tastes and habits. Whether it&#39;s a classic like Joy Rummy or a new release that&#39;s gaining fans, each title on our platform has been picked because it clicks with how you like to play.</p>
            <p>We also knew that finding and downloading these games shouldn&#39;t feel like a chore. That&#39;s why we created AllYonoMax. But more than anything, AllYonoMax is about people. It&#39;s about players who love sharing tips, celebrating wins, and learning together. Here, you&#39;re part of a community that believes gaming is better when everyone feels connected.</p>

            <h3>Why Thousands Choose AllYonoMax?</h3>
            <p>When it comes to finding games you can trust and enjoy, AllYonoMax makes the choice easy. We&#39;ve built our platform with clear goals: keep things simple, reliable, and tailored to what Indian players want most.</p>
            <ul>
              <li><strong>India-Focused Selection:</strong> Every game you see here has been chosen with local preferences in mind — from classic rummy to exciting slot machines.</li>
              <li><strong>Instant Play &amp; Download:</strong> We understand your time matters. That&#39;s why you can start playing in only a few steps — download, register, and play!</li>
              <li><strong>Easy Navigation:</strong> Picking out your next game shouldn&#39;t be a hassle. Our clean interface makes browsing effortless.</li>
              <li><strong>Trusted Platform:</strong> Safety and trust are at the core of AllYonoMax. All apps are verified and payments are secure.</li>
            </ul>

            <h3>Games for Every Mood</h3>
            <p>People play for all sorts of reasons. You might enjoy the rush of competing, or maybe you prefer to unwind with something simple. At AllYonoMax, finding the right game is easy. The categories are set up so you can browse without any hassle.</p>
            <ul>
              <li><strong>Card Classics:</strong> If you enjoy testing your skills and staying sharp, start here. Play favorites like Joy Rummy, Game Rummy, Rumble Rummy and more.</li>
              <li><strong>Puzzles &amp; Brain Teasers:</strong> Everyone has their reason for playing. Some enjoy the buzz of competition and strategic thinking.</li>
              <li><strong>Fantasy &amp; Sports:</strong> Bring your competitive side to life. Build a winning team, craft your strategy, and compete for prizes.</li>
              <li><strong>Casual Fun:</strong> Not every game has to be serious. When you&#39;d rather unwind, try our casual gaming apps.</li>
              <li><strong>Fast Challenges:</strong> Need a little rush? These time-based games keep you on your toes with quick rounds and instant rewards.</li>
            </ul>
          </div>
        </section>

        {/* ── CONTACT SECTION ── */}
        <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
          <div className="content-section">
            <h2>Contact Us</h2>
            <p>
              Have questions about any app or need help? Reach out to us through our Telegram
              channel for the fastest response. We are always happy to help Indian gamers find
              the best gaming experience.
            </p>
            <p>
              <strong>Telegram:</strong>{" "}
              <a
                href="https://t.me/allyonomax"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 no-underline font-bold hover:text-blue-800"
              >
                @allyonomax
              </a>
            </p>
          </div>
        </section>

        {/* ── DISCLAIMER SECTION ── */}
        <section id="disclaimer" className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
          <div className="disclaimer-card">
            <h2 className="text-lg font-extrabold text-red-accent mb-3">⚠ Disclaimer</h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              This website is for informational and entertainment purposes only. We do not promote
              or encourage gambling in any form. All gaming apps listed on this platform involve
              real money and carry financial risk. Players must be 18 years or older to participate.
              Please play responsibly and within your means. AllYonoMax is not responsible for any
              financial losses incurred through the use of any listed applications. All trademarks
              and app names belong to their respective owners.
            </p>
          </div>
        </section>

        <Footer />
        <FloatingTelegram />
      </div>
    </>
  );
}
