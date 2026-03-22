"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-text-primary text-lg sm:text-xl font-extrabold tracking-tight">
              All<span className="gradient-text">Yono</span>Max
            </span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <form
              action="/#apps"
              className="relative w-full"
              onSubmit={(e) => {
                if (!query.trim()) e.preventDefault();
              }}
            >
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                name="q"
                placeholder="Search apps..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-bg border border-card-border rounded-xl text-text-primary text-sm placeholder:text-text-muted transition-all"
              />
            </form>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Telegram Button */}
            <a
              href="https://t.me/YOUR_TELEGRAM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0088cc] to-[#00a0e9] hover:opacity-90 text-white text-sm font-semibold rounded-xl transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Telegram
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-primary transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="md:hidden pb-3">
            <form
              action="/#apps"
              onSubmit={(e) => {
                if (!query.trim()) e.preventDefault();
              }}
            >
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  name="q"
                  placeholder="Search apps..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-10 pr-4 py-2.5 bg-bg border border-card-border rounded-xl text-text-primary text-sm placeholder:text-text-muted transition-all"
                />
              </div>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-card-border pt-3">
            <a
              href="https://t.me/YOUR_TELEGRAM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#0088cc] to-[#00a0e9] text-white text-sm font-semibold rounded-xl transition-all w-full justify-center shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Join Telegram Channel
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
