"use client";

import { useState } from "react";
import { Star, Eye, ChevronDown, Send, ChevronUp } from "lucide-react";
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
  const [isExpanded, setIsExpanded] = useState(false);

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
        <section className="max-w-3xl mx-auto px-2 py-2">
      <div className="relative rounded-lg shadow-sm bg-gradient-to-br from-teal-600 to-teal-500">
        {/* Content Container */}
        <div 
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-[1000px]' : 'max-h-[110px]'
          }`}
        >
          <div className="p-4">
            <p className="text-xs text-white leading-relaxed">
              All Yono Max is a popular platform where players can explore a wide collection of real money gaming apps in one place. From rummy tables to slot spins and bingo games, users can enjoy multiple categories like Rummy, Slots, Bingo, Arcade, and Spin games with daily rewards and exciting. This collection includes many trending apps such as Yono Bonus, Bingo 101, Rumble Rummy, Joy Rummy, DIWA 777, INR Rummy, Boss Rummy, Ever 777, Yono 777, Rummy 888, Rummy 77, Rummy Ludo, 777 Game, OK Rummy, Good Slots, Hindi 777, Club INR, Game Rummy, Yes Spin, Love Rummy, Share Slots, Maha Games, Hi-Rummy, Jaiho Win, IND Club, Jaiho Slots, TOP Rummy, Ind Rummy, Slots Spin, MQM Bet, Saga Slots, Yn777, ABC Rummy, JaiHo Arcade, JaiHo 777, Neta VIP, Rummy 91, JaiHo Rummy, JaiHo Spin, MWM Bet, EN365, 101Z App, Rummy 365, Spin101, Ind Bingo, My777, Bet213, GoGo Rummy, 789 Jackpot, MDM Bet, Spin Gold, Spin Lucky, Spin 777, IND Slots, Spin Crush, MkM Bet, Slots Winner, Spin Winner, MBM Bet, 567 Slots, Yono VIP, Yono Slots, Yono Arcade, Yono Rummy, Yono Game, Yono Games, Rummy App, Yono App, All Yono App, All Yono Games.!
            </p>
          </div>
        </div>

        {/* Gradient Overlay when collapsed */}
        {!isExpanded && (
          <div className="absolute bottom-8 left-0 right-0 h-12 bg-gradient-to-t from-teal-600 to-transparent pointer-events-none rounded-b-lg" />
        )}

        {/* Toggle Button */}
        <div className="flex justify-center pb-3 pt-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white text-xs font-medium transition-all"
          >
            {isExpanded ? (
              <>
                <ChevronUp size={14} />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown size={14} />
                Read More
              </>
            )}
          </button>
        </div>
      </div>
    </section>

        {/* ── DOWNLOAD SECTION ── */}
        <section id="apps" className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          {/* Section Header */}
          <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary text-center mb-4">
            Download NEW YONO Games
          </h2>

          {/* Tab Switcher */}
          <div className="tab-container mb-4">
            <button
              className={`tab-btn whitespace-nowrap   ${activeTab === "new" ? "active" : ""}`}
              onClick={() => { setActiveTab("new"); setShowAll(false); }}
            >
              <Star className="w-4 h-4" />
              New Games
            </button>
            <button
              className={`tab-btn whitespace-nowrap ${activeTab === "other" ? "active" : ""}`}
              onClick={() => { setActiveTab("other"); setShowAll(false); }}
            >
              <Eye className="w-4 h-4" />
              Other Games
            </button>
          </div>

          {/* App List */}
          <div className="space-y-2">
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



        {/* ── CONTACT SECTION ── */}
        <section id="contact" className="max-w-4xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2>Contact Us</h2>
            <p>
              Have questions about any app or need help? Reach out to us through our Telegram
              channel for the fastest response. We are always happy to help Indian gamers find
              the best gaming experience.
            </p>
            <p>

              <a
                href="https://t.me/allyonomax"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-sm"
              >
                <Send className="w-4 h-4" />
                Contact Here
              </a>
            </p>
          </div>
        </section>

        {/* ── DISCLAIMER SECTION ── */}
        <section id="disclaimer" className="max-w-4xl mx-auto px-2 sm:px-6 pb-8">
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
