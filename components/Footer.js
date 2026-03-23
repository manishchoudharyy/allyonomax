import Link from "next/link";
import { MessageCircle, Heart, Shield, AlertTriangle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-card-border mt-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
            <span className="text-text-primary text-xl font-extrabold tracking-tight">
              All<span className="gradient-text">Yono</span>Max
            </span>
          </Link>
          <p className="text-text-secondary text-sm leading-relaxed max-w-lg mx-auto">
            India ka sabse trusted platform Yono Games apps download karne ke liye.
            Sabse zyada bonus, instant withdrawal, aur daily rewards.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Link href="/" className="text-text-secondary hover:text-primary transition-colors text-sm font-medium">
            Home
          </Link>
          <span className="text-card-border">•</span>
          <Link href="/#apps" className="text-text-secondary hover:text-primary transition-colors text-sm font-medium">
            All Apps
          </Link>
          <span className="text-card-border">•</span>
          <a
            href="https://t.me/allyonomax"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors text-sm font-medium inline-flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Telegram Channel
          </a>
        </div>

        {/* Telegram CTA */}
        <div className="text-center mb-8">
          <p className="text-text-secondary text-sm mb-3">
            Daily updates, bonus codes, aur exclusive offers ke liye Telegram join karo.
          </p>
          <a
            href="https://t.me/allyonomax"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Join Telegram
          </a>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer-card mb-6">
          <div className="flex items-start gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-accent mt-0.5 flex-shrink-0" />
            <span className="text-red-accent font-bold text-sm">Disclaimer</span>
          </div>
          <p className="text-text-secondary text-xs leading-relaxed">
            This website is for entertainment purposes only.
            Gambling involves risk. Please play responsibly. You must be 18+ to use these apps.
            We do not promote or encourage gambling. All trademarks belong to their respective owners.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-card-border">
          <p className="text-text-muted/60 text-xs text-center flex items-center justify-center gap-1">
            © {new Date().getFullYear()} AllYonoMax. Made with <Heart className="w-3 h-3 text-red-accent fill-red-accent" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
