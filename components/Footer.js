import Link from "next/link";
import {
  MessageCircle,
  Heart,
  Shield,
  AlertTriangle,
  Send,
} from "lucide-react";

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
            India's most trusted platform to download Yono Games apps. Get the
            best bonuses, instant withdrawals, and daily rewards.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Link
            href="/"
            className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            Home
          </Link>
          <span className="text-card-border">•</span>
          <Link
            href="/all-yono-games"
            className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            All Yono Games
          </Link>
          <span className="text-card-border">•</span>
          <Link
            href="/new-yono-games"
            className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            New Yono Games
          </Link>
          <span className="text-card-border">•</span>
          <Link
            href="/yono-rummy"
            className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            Yono Rummy
          </Link>
          <span className="text-card-border">•</span>
          <Link
            href="/yono-slots"
            className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            Yono Slots & 777
          </Link>
          <span className="text-card-border">•</span>
          <Link
            href="/about"
            className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            About
          </Link>
          <span className="text-card-border">•</span>
          <Link
            href="/contact"
            className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            Contact
          </Link>
          <span className="text-card-border">•</span>
          <Link
            href="/disclaimer"
            className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            Disclaimer
          </Link>
          <span className="text-card-border">•</span>
          <Link
            href="/privacy-policy"
            className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            Privacy Policy
          </Link>
          <span className="text-card-border">•</span>
          <Link
            href="/terms-and-conditions"
            className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            Terms & Conditions
          </Link>
          <span className="text-card-border">•</span>
          <a
            href="https://telegram.me/AllYonoMaxdotCom"
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
            Join our telegram channel to get Daily updates, bonus codes, and
            exclusive offers.
          </p>
          <a
            href="https://telegram.me/AllYonoMaxdotCom"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            <Send className="w-4 h-4" />
            Join Telegram
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-card-border">
          <p className="text-text-muted/60 text-xs text-center flex items-center justify-center gap-1">
            © {new Date().getFullYear()} AllYonoMax. Made with{" "}
            <Heart className="w-3 h-3 text-red-accent fill-red-accent" /> in
            India
          </p>
        </div>
      </div>
    </footer>
  );
}
