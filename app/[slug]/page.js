import Image from "next/image";
import Link from "next/link";
import {
  Star,
  StarHalf,
  Download,
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Smartphone,
  Coins,
  HardDrive,
  BarChart3,
  Tag,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import { AppSchema, FAQSchema } from "@/components/SchemaMarkup";
import { getAllApps, getAppBySlug, getRelatedApps, renderStars } from "@/lib/helpers";

// ── Static Generation ──
export async function generateStaticParams() {
  const apps = getAllApps();
  return apps.map((app) => ({ slug: app.slug }));
}

// ── Dynamic SEO Metadata ──
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return {
      title: "App Not Found",
      description: "The requested app could not be found.",
    };
  }

  return {
    title: app.metaTitle,
    description: app.metaDescription,
    keywords: app.keywords,
    openGraph: {
      title: app.metaTitle,
      description: app.metaDescription,
      url: `https://allyonomax.com/${app.slug}`,
      siteName: "AllYonoMax",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: app.metaTitle,
      description: app.metaDescription,
    },
    alternates: {
      canonical: `https://allyonomax.com/${app.slug}`,
    },
  };
}

// ── Page Component ──
export default async function AppPage({ params }) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-extrabold text-text-primary mb-4">App Not Found</h1>
          <p className="text-text-secondary mb-6">The app you are looking for does not exist.</p>
          <Link href="/" className="btn-primary">
            ← Go Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const related = getRelatedApps(app.slug, app.category, 4);
  const { full, half, empty } = renderStars(app.rating);

  const detailItems = [
    { icon: Coins, label: "Sign Up Bonus", value: app.bonus, highlight: true },
    { icon: Smartphone, label: "Min. Withdrawal", value: app.minWithdrawal },
    { icon: HardDrive, label: "App Size", value: app.appSize },
    { icon: BarChart3, label: "Total Downloads", value: app.totalDownloads },
    { icon: Tag, label: "Category", value: app.category },
    { icon: Award, label: "Rating", value: `${app.rating} / 5` },
  ];

  return (
    <>
      <AppSchema app={app} />
      <FAQSchema faq={app.faq} />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors text-sm mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Apps
          </Link>

          {/* App Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Icon */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white overflow-hidden border border-card-border flex-shrink-0 flex items-center justify-center shadow-lg">
              <Image
                src={app.icon}
                alt={`${app.name} app icon`}
                width={112}
                height={112}
                className="w-full h-full object-cover"
                unoptimized
                priority
              />
            </div>

            {/* Info */}
            <div className="text-center sm:text-left flex-1">
              {/* Badges */}
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                {app.isNew && <span className="badge badge-new">NEW</span>}
                {app.isHot && <span className="badge badge-hot">HOT</span>}
                {app.isTrending && <span className="badge badge-trending">TRENDING</span>}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary mb-2">
                {app.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center justify-center sm:justify-start gap-1 mb-3">
                {Array.from({ length: full }).map((_, i) => (
                  <Star key={`f-${i}`} className="w-4 h-4 fill-accent text-accent" />
                ))}
                {half === 1 && <StarHalf className="w-4 h-4 fill-accent text-accent" />}
                {Array.from({ length: empty }).map((_, i) => (
                  <Star key={`e-${i}`} className="w-4 h-4 text-card-border" />
                ))}
                <span className="text-text-secondary text-sm ml-1">
                  {app.rating} • {app.totalDownloads} Downloads
                </span>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-5 text-sm">
                <span className="px-3 py-1 bg-primary/5 border border-primary/15 rounded-full text-primary font-bold">
                  Bonus: {app.bonus}
                </span>
                <span className="px-3 py-1 bg-white border border-card-border rounded-full text-text-secondary shadow-sm">
                  Size: {app.appSize}
                </span>
              </div>

              {/* Big Download Button */}
              <a
                href={app.referLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base sm:text-lg px-8 py-3.5 pulse-primary"
              >
                <Download className="w-5 h-5" />
                Download {app.name}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── APP DETAILS ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="card-elevated p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-text-primary mb-6 flex items-center gap-2">
            <div className="w-1 h-6 rounded-full bg-primary" />
            App Details
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {detailItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 p-3 rounded-xl bg-bg border border-card-border/50"
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.highlight ? "bg-primary/10" : "bg-bg"}`}>
                  <item.icon className={`w-4 h-4 ${item.highlight ? "text-primary" : "text-text-muted"}`} />
                </div>
                <div>
                  <p className="text-text-muted text-xs">{item.label}</p>
                  <p className={`font-bold text-sm ${item.highlight ? "text-primary" : "text-text-primary"}`}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="card-elevated p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-text-primary mb-6 flex items-center gap-2">
            <div className="w-1 h-6 rounded-full bg-green-accent" />
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {app.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 p-2">
                <CheckCircle2 className="w-5 h-5 text-green-accent flex-shrink-0" />
                <span className="text-text-primary text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO DOWNLOAD ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="card-elevated p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-text-primary mb-6 flex items-center gap-2">
            <div className="w-1 h-6 rounded-full bg-accent" />
            How to Download {app.name}
          </h2>
          <div className="space-y-4">
            {app.howToDownload.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-text-primary text-sm pt-1.5">{step}</p>
              </div>
            ))}
          </div>

          {/* Download after steps */}
          <div className="mt-8 text-center">
            <a
              href={app.referLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-base px-8 py-3"
            >
              <Download className="w-5 h-5" />
              Download Now — Get {app.bonus} Bonus
            </a>
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="card-elevated p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-2">
            <div className="w-1 h-6 rounded-full bg-primary-light" />
            About {app.name}
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed">{app.description}</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="card-elevated p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-text-primary mb-6 flex items-center gap-2">
            <div className="w-1 h-6 rounded-full bg-accent-dark" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {app.faq.map((item, i) => (
              <details key={i} className="faq-item group">
                <summary className="flex items-center justify-between p-4 rounded-xl bg-bg border border-card-border/50 hover:border-primary/30 transition-colors">
                  <span className="text-text-primary text-sm font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-4 pb-4 pt-2">
                  <p className="text-text-secondary text-sm leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED APPS ── */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-xl font-extrabold text-text-primary mb-6 text-center">
            Similar <span className="gradient-text">{app.category}</span> Apps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((relApp) => (
              <AppCard key={relApp.id} app={relApp} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
