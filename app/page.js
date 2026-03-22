"use client";

import { useState } from "react";
import { ArrowDown, Sparkles, Trophy, Gift, Users, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import SearchBar from "@/components/SearchBar";
import TelegramBanner from "@/components/TelegramBanner";
import { WebsiteSchema } from "@/components/SchemaMarkup";
import { getAllApps } from "@/lib/helpers";

const allApps = getAllApps();

export default function HomePage() {
  const [filteredApps, setFilteredApps] = useState(allApps);

  const handleSearch = (query) => {
    if (!query.trim()) {
      setFilteredApps(allApps);
      return;
    }
    const q = query.toLowerCase();
    setFilteredApps(
      allApps.filter(
        (app) =>
          app.name.toLowerCase().includes(q) ||
          app.category.toLowerCase().includes(q) ||
          app.keywords.some((k) => k.includes(q))
      )
    );
  };

  return (
    <>
      <WebsiteSchema />
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/15 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs font-bold tracking-wide uppercase">
              India&apos;s #1 Yono Games Hub
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight mb-6">
            Download <span className="gradient-text">Top Yono Apps</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl text-text-secondary font-medium">
              Earn Real Cash with Max Bonus
            </span>
          </h1>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10">
            <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-sm border border-card-border">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-primary font-extrabold text-lg">{allApps.length}+</p>
                <p className="text-text-muted text-xs">Trusted Apps</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-sm border border-card-border">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Gift className="w-5 h-5 text-accent-dark" />
              </div>
              <div className="text-left">
                <p className="text-accent-dark font-extrabold text-lg">₹550</p>
                <p className="text-text-muted text-xs">Max Bonus</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-sm border border-card-border">
              <div className="w-10 h-10 rounded-xl bg-green-accent/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-green-accent" />
              </div>
              <div className="text-left">
                <p className="text-green-accent font-extrabold text-lg">1M+</p>
                <p className="text-text-muted text-xs">Downloads</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a href="#apps" className="btn-primary text-base px-8 py-3.5 pulse-primary">
            <ArrowDown className="w-5 h-5" />
            Explore Apps
          </a>
        </div>
      </section>

      {/* ── TELEGRAM BANNER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-10">
        <TelegramBanner />
      </section>

      {/* ── TRUST BAR ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-wrap items-center justify-center gap-6 text-text-muted text-xs font-medium">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-green-accent" />
            <span>100% Safe & Verified</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-card-border hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <span>⚡</span>
            <span>Instant Withdrawal</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-card-border hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <span>🎁</span>
            <span>Sign Up Bonus on Every App</span>
          </div>
        </div>
      </section>

      {/* ── SEARCH + APP GRID ── */}
      <section id="apps" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-2">
            All <span className="gradient-text">Yono Games</span> Apps
          </h2>
          <p className="text-text-secondary text-sm">
            Download karo, register karo, bonus pao — simple!
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* App Grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-text-secondary text-lg">No apps found. Try a different search.</p>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
