export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { Star, Eye, ChevronDown, Send, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import FloatingTelegram from "@/components/FloatingTelegram";
import {
  WebsiteSchema,
  ItemListSchema,
  CollectionPageSchema,
} from "@/components/SchemaMarkup";
import { getAllApps } from "@/lib/helpers";
import HomeInteractive from "@/components/HomeInteractive";
import HeroTextCard from "@/components/HeroTextCard";




export default function HomePage() {
  const allApps = getAllApps();

// Split apps into "new" and "other" categories
const newApps = allApps;
const otherApps = allApps.filter((app) => !app.isNew && !app.isHot && !app.isTrending);
  return (
    <>
      <div className="bg-bg min-h-screen">
        <WebsiteSchema />
        <ItemListSchema apps={allApps} />
        <CollectionPageSchema />
        <Navbar />

        {/* ── HERO SECTION ── */}
        <section className="max-w-3xl mx-auto px-2 py-4">
          <h1 className="text-xl sm:text-3xl font-extrabold text-text-primary text-center mb-3">
            AllYonoMax — Download All Yono Games, Rummy & Slots Apps
          </h1>
          <HeroTextCard />
        </section>

        {/* ── DOWNLOAD SECTION (Interactive Tabs - Client Component) ── */}
        <HomeInteractive newApps={newApps} otherApps={otherApps} />

        {/* ── CONTACT SECTION ── */}
        <section id="contact" className="max-w-4xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2>Contact Us</h2>
            <p>
              Have questions about any app or need help? Reach out to us through our Telegram
              channel for the fastest response. We are always happy to help Indian gamers find
              the best gaming experience.
            </p>
            <p>

              <a
                href="https://t.me/+nS6ouVo-aeVmNzNl"
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
