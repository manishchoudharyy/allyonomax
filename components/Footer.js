import Link from "next/link";
import { MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-card-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-text-primary text-xl font-extrabold tracking-tight">
                All<span className="gradient-text">Yono</span>Max
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              India ka sabse trusted platform Yono Games apps download karne ke liye.
              Sabse zyada bonus, instant withdrawal, aur daily rewards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-primary text-sm font-bold mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#apps" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  All Apps
                </Link>
              </li>
              <li>
                <a
                  href="https://t.me/YOUR_TELEGRAM_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors text-sm inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Telegram Channel
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="text-text-primary text-sm font-bold mb-4 uppercase tracking-wider">
              Join Our Community
            </h3>
            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              Daily updates, bonus codes, aur exclusive offers ke liye Telegram join karo.
            </p>
            <a
              href="https://t.me/YOUR_TELEGRAM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Join Telegram
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-card-border">
          <p className="text-text-muted text-xs text-center leading-relaxed">
            <span className="text-red-accent font-semibold">⚠ Disclaimer:</span> This website is for entertainment purposes only.
            Gambling involves risk. Please play responsibly. You must be 18+ to use these apps.
            We do not promote or encourage gambling. All trademarks belong to their respective owners.
          </p>
          <p className="text-text-muted/60 text-xs text-center mt-3 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} AllYonoMax. Made with <Heart className="w-3 h-3 text-red-accent fill-red-accent" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
