"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  MessageCircle,
  Info,
  Phone,
  FileText,
  Home,
  Send,
  Shield,
} from "lucide-react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: Info },
    { label: "Contact", href: "/contact", icon: Phone },
    { label: "Disclaimer", href: "/disclaimer", icon: FileText },
    { label: "Privacy Policy", href: "/privacy-policy", icon: Shield },
  ];

  const navItems = [
    { label: "Home", href: "/", icon: Home, active: true },
    { label: "About", href: "/about", icon: Info, active: false },
    { label: "Contact", href: "/contact", icon: Phone, active: false },
    { label: "Disclaimer", href: "/disclaimer", icon: FileText, active: false },
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
      icon: Shield,
      active: false,
    },
    {
      label: "TG Join",
      href: "https://telegram.dog/+AOimKWsTbRE2Mzk1",
      icon: Send,
      active: false,
      external: true,
    },
  ];

  return (
    <>
      {/* ── MAIN HEADER BAR ── */}
      <nav className="header-gradient px-4 py-3 flex items-center justify-between shadow-md">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-sm.webp"
            alt="AllYonoMax Logo"
            width={42}
            height={42}
            className="rounded-lg"
          />
          <span className="text-white font-extrabold text-lg tracking-tight">
            All Yono Max – Yono Games
          </span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 text-white active:opacity-70 transition-opacity"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* ── SECONDARY NAVIGATION BAR ── */}
      {/* <div className="secondary-nav">
        <div className="flex items-center justify-around max-w-2xl mx-auto">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const linkProps = item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};
            
            return (
              <a
                key={item.label}
                href={item.href}
                className={`nav-item ${item.active ? "active" : ""}`}
                {...linkProps}
              >
                <IconComponent className="nav-icon" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </div> */}

      {/* ── SIDEBAR OVERLAY ── */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-100">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar Panel */}
          <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col animate-slide-in">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-card-border">
              <span className="text-text-primary font-bold text-base">
                Menu
              </span>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-1.5 text-text-secondary hover:text-primary rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 py-3 px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-primary hover:bg-bg transition-colors text-sm font-medium"
                >
                  <item.icon className="w-5 h-5 text-text-muted" />
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Telegram CTA at Bottom */}
            <div className="p-4 border-t border-card-border">
              <a
                href="https://telegram.dog/+AOimKWsTbRE2Mzk1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#0088cc] hover:bg-[#0077b5] text-white text-sm font-bold rounded-xl transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Join Telegram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
