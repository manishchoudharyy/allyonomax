"use client";

import { useState } from "react";
import { Star, Eye, ChevronDown, Gift, Wallet, Download } from "lucide-react";
import AppCard from "@/components/AppCard";
import Link from "next/link";
import Image from "next/image";

export default function HomeInteractive({ newApps, otherApps }) {
  const [activeTab, setActiveTab] = useState("new");
  const [showAll, setShowAll] = useState(true);

  const displayApps = activeTab === "new" ? newApps : otherApps;
  const visibleApps = showAll ? displayApps : displayApps;
  const links = newApps.map((app) => app.referLink);
  // console.log(links)
  return (
    <section id="apps" className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
      {/* Section Header */}
      
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
        <div className="relative">
      
      <a href={`https://telegram.me/AllYonoMaxdotCom`} target="_blank" className="block app-list-card group px-2 py-3">
        {/* App Icon */}
        <div className="app-icon-wrapper">
          <Image
            src='/icons/yono-rummy.webp'
            alt={`Yono Bonus app icon`}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>

        {/* App Info */}
        <div className="app-info">
          <h3 className="app-name">Yono Bonus</h3>
          <div className="app-bonus">
            <Gift className="w-3.5 h-3.5" />
            <span>Bonus Upto ₹4000</span>
          </div>
          <div className="app-withdraw">
            <Wallet className="w-3.5 h-3.5" />
            <span>Min. Withdraw ₹100</span>
          </div>
        </div>

        {/* Download Button */}
        <div className="btn-download">
          <Download className="w-4 h-4" />
          <span className="inline">Download</span>
        </div>
      </a>
    </div>
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
  );
}
