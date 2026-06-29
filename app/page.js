// ISR: Home page regenerates every hour; on-demand revalidation fires when admin adds/edits an app
export const revalidate = 3600;

import { Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";
import {
  WebsiteSchema,
  ItemListSchema,
  CollectionPageSchema,
  FAQSchema,
} from "@/components/SchemaMarkup";
import { getAllApps } from "@/lib/helpers";
import HomeInteractive from "@/components/HomeInteractive";
import HeroTextCard from "@/components/HeroTextCard";
import {
  WhatAreYonoGames,
  BestAppsTable,
  HowToDownload,
  WhyChooseYono,
  BrowseByCategory,
  LatestAppsStrip,
  HomeFAQ,
} from "@/components/HomeSections";
import { homeFaqData } from "@/lib/faqData";

export default function HomePage() {
  const allApps = getAllApps();

  // Split apps into "new" and "other" categories
  const newApps = allApps.filter(
    (app) => app.isNew || app.isHot || app.isTrending,
  );
  const otherApps = allApps.filter(
    (app) => !app.isNew && !app.isHot && !app.isTrending,
  );

  // Compute category counts for BrowseByCategory & WhatAreYonoGames
  const rummyCount = allApps.filter((app) =>
    app.categories?.includes("rummy"),
  ).length;
  const slotsCount = allApps.filter((app) =>
    app.categories?.includes("slots"),
  ).length;
  const casinoCount = allApps.filter((app) =>
    app.categories?.includes("casino"),
  ).length;
  const bingoCount = allApps.filter((app) =>
    app.categories?.includes("bingo"),
  ).length;
  const newCount = newApps.length;

  const categoryCounts = {
    rummy: rummyCount,
    slots: slotsCount,
    casino: casinoCount,
    bingo: bingoCount,
    new: newCount,
  };

  // Map FAQ data for JSON-LD schema markup
  const faqForSchema = homeFaqData.map((f) => ({
    question: f.q,
    answer: f.a,
  }));

  return (
    <>
      <div className="bg-bg min-h-screen">
        <WebsiteSchema />
        <ItemListSchema apps={allApps} />
        <CollectionPageSchema />
        <FAQSchema faq={faqForSchema} />
        <Navbar />

        {/* ── HERO SECTION ── */}
        <section className="max-w-3xl mx-auto px-2 py-4">
          <h1 className="text-xl sm:text-3xl font-extrabold text-text-primary text-center mb-3">
            All Yono Games — Download New Yono Apps & Get ₹550 Bonus
          </h1>
          <HeroTextCard />
        </section>

        {/* ── DOWNLOAD SECTION (Interactive Tabs - Client Component) ── */}
        <HomeInteractive newApps={allApps} otherApps={allApps} />

        {/* ── LATEST YONO APPS STRIP ── */}
        <LatestAppsStrip apps={allApps} />

        {/* ── BROWSE BY CATEGORY (Internal Links) ── */}
        <BrowseByCategory counts={categoryCounts} />

        {/* ── WHAT ARE YONO GAMES ── */}
        <WhatAreYonoGames categoryCounts={categoryCounts} newApps={newCount} />

        {/* ── BEST YONO APPS TABLE ── */}
        <BestAppsTable apps={allApps} />

        {/* ── HOW TO DOWNLOAD YONO GAMES ── */}
        <HowToDownload />

        {/* ── WHY CHOOSE YONO GAMES ── */}
        <WhyChooseYono />

        {/* ── HOME FAQ SECTION ── */}
        <HomeFAQ />

        {/* ── CONTACT SECTION ── */}
        <section id="contact" className="max-w-4xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2>Contact Us</h2>
            <p>
              Have questions about any app or need help? Reach out to us through
              our Telegram channel for the fastest response. We are always happy
              to help Indian gamers find the best gaming experience.
            </p>
            <p>
              <a
                href="https://telegram.dog/+AOimKWsTbRE2Mzk1"
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

        <Footer />
        <FloatingTelegram />
      </div>
    </>
  );
}
