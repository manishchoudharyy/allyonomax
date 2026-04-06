"use client";

import { useState } from "react";
import { Star, Eye, ChevronDown } from "lucide-react";
import AppCard from "@/components/AppCard";

export default function HomeInteractive({ newApps, otherApps }) {
  const [activeTab, setActiveTab] = useState("new");
  const [showAll, setShowAll] = useState(true);

  const displayApps = activeTab === "new" ? newApps : otherApps;
  const visibleApps = showAll ? displayApps : displayApps;

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
