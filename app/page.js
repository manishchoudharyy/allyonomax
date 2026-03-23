"use client";

import { useState } from "react";
import { Star, Eye, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import FloatingTelegram from "@/components/FloatingTelegram";
import { WebsiteSchema } from "@/components/SchemaMarkup";
import { getAllApps } from "@/lib/helpers";

const allApps = getAllApps();

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
              All Yono Games is a popular platform where players can explore a wide collection of
              real money gaming apps in one place. From rummy tables to slot spins and bingo games,
              users can enjoy multiple categories like Rummy, Slots, Bingo, Arcade, and Spin games
              with daily rewards and exciting bonuses. This collection includes many trending apps
              such as Yono Rummy, Ok Rummy, Joy Rummy, Spin 777, Bingo 101, Rummy 888, IND Rummy,
              Jaiho Rummy, Yono 777, Hindi 777, YN 777, IND Club, Jaiho Slots, Rummy 77, and
              Rummy Ludo — all available for download with sign-up bonuses!
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

        {/* ── WHY CHOOSE US SECTION ── */}
        <section id="about" className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
          <div className="content-section">
            <h2>Why Thousands Choose All Yono Max?</h2>
            <p>
              When it comes to finding games you can trust and enjoy, AllYonoMax makes the choice
              easy. We have built our platform with clear goals: keep things simple, reliable, and
              tailored to what Indian players want most.
            </p>
            <ul>
              <li>
                <strong>India-Focused Selection:</strong> Every game you see here has been chosen
                with local preferences in mind — from classic rummy to exciting slot machines.
              </li>
              <li>
                <strong>Instant Play &amp; Download:</strong> We understand your time matters.
                That is why you can start playing in only a few steps — download, register, and play!
              </li>
              <li>
                <strong>Easy Navigation:</strong> Picking out your next game should not be a hassle.
                Our clean interface makes browsing effortless.
              </li>
              <li>
                <strong>Trusted Platform:</strong> Safety and trust are at the core of AllYonoMax.
                All apps are verified and payments are secure.
              </li>
            </ul>
          </div>
        </section>

        {/* ── GAMES FOR EVERY MOOD ── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
          <div className="content-section">
            <h2>Games for Every Mood</h2>
            <p>
              People play for all sorts of reasons. You might enjoy the rush of competing, or maybe
              you prefer to unwind with something simple. At AllYonoMax, finding the right game is
              easy. The categories are set up so you can browse without any hassle.
            </p>
            <ul>
              <li>
                <strong>Card Classics:</strong> If you enjoy testing your skills and staying sharp,
                start here. Play favorites like Yono Rummy, Ok Rummy, Joy Rummy and more.
              </li>
              <li>
                <strong>Puzzles &amp; Brain Teasers:</strong> Everyone has their reason for playing.
                Some enjoy the buzz of competition and strategic thinking.
              </li>
              <li>
                <strong>Fantasy &amp; Sports:</strong> Bring your competitive side to life. Build a
                winning team, craft your strategy, and compete for prizes.
              </li>
              <li>
                <strong>Casual Fun:</strong> Not every game has to be serious. When you would rather
                unwind, try our casual gaming apps.
              </li>
              <li>
                <strong>Fast Challenges:</strong> Need a little rush? These time-based games keep
                you on your toes with quick rounds and instant rewards.
              </li>
            </ul>
          </div>
        </section>

        {/* ── CONTACT SECTION ── */}
        <section id="contact" className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
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
                className="text-primary font-bold hover:underline"
              >
                @allyonomax
              </a>
            </p>
          </div>
        </section>

        {/* ── DISCLAIMER SECTION ── */}
        <section id="disclaimer" className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
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
