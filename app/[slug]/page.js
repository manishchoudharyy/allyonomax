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
  DownloadIcon,
  Package,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import { AppSchema, FAQSchema } from "@/components/SchemaMarkup";
import { getAllApps, getAllQueryKeywords, getAppBySlug, getRelatedApps, renderStars } from "@/lib/helpers";
import Marquee from "@/components/Marquee";

const keywords = getAllQueryKeywords();
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

  const related = getRelatedApps(app.slug);
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
        <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-16 relative z-10">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Apps
          </Link>

          {/* App Header */}
         
          <div className="bg-white rounded-xl flex flex-col gap-6 justify-center content-center px-4 py-6">
            <div className="flex items-center gap-4 sm:gap-12">
              <div className="sm:w-36 sm:h-36 w-24 h-24 rounded-2xl bg-white overflow-hidden border border-card-border flex-shrink-0 flex items-center justify-center shadow-lg">
              <Image
                src={app.icon}
                alt={`${app.name} app icon`}
                width={162}
                height={162}
                className="w-full h-full object-cover"
                unoptimized
                priority
              />
            </div>
            <div className="flex flex-col justify-center ">
              <h1 className="text-2xl text-nowrap sm:text-3xl md:text-4xl font-extrabold text-text-primary mb-2">
                {app.name}
              </h1>
              <div className="flex justify-start items-center gap-1 mb-2">
                {Array.from({ length: full }).map((_, i) => (
                  <Star key={`f-${i}`} className="w-4 h-4 fill-accent text-accent" />
                ))}
                {half === 1 && <StarHalf className="w-4 h-4 fill-accent text-accent" />}
                {Array.from({ length: empty }).map((_, i) => (
                  <Star key={`e-${i}`} className="w-4 h-4 text-card-border" />
                ))}
                <span className="text-text-secondary text-sm ml-1">
                  {app.rating}
                </span>
              </div>
              {/* Quick Stats */}
              <div className="flex text-nowrap items-center justify-start sm:justify-start gap-3 text-xs">
                <span className="px-3 py-1 bg-primary/5 border border-primary/15 rounded-full text-primary font-bold">
                  Bonus Upto {app.bonus}
                </span>
                {/* <span className="px-3 py-1 bg-white border border-card-border rounded-full text-text-secondary shadow-sm">
                  Size: {app.appSize}
                </span> */}
              </div>
              
            </div>
            </div>
            <div className="flex items-center justify-around gap-2">
              <div className="flex flex-col justify-center w-fit">
                <span className=" text-center font-bold">{app.totalDownloads}</span>
                <div className="flex flex-col ">
                 <p className="flex items-center gap-0.5 text-xs">
                   <DownloadIcon height={12} width={12}></DownloadIcon>
                  Downloads
                 </p>
                </div>
              </div>
              <div className="flex flex-col justify-center text-sm w-fit">
                <span className=" text-center font-bold">{app.appSize}</span>
                <div className="flex flex-col ">
                 <p className="flex items-center gap-0.5 text-xs">
                   <Package height={12} width={12}></Package>
                  Size
                 </p>
                </div>
              </div>
              <div className="flex flex-col justify-center w-fit">
                <span className=" text-center font-bold">{app.bonus}</span>
                <div className="flex flex-col ">
                 <p className="flex items-center gap-0.5 text-xs">
                   <Award height={12} width={12}></Award>
                  Bonus
                 </p>
                </div>
              </div>
              </div>
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
      </section>

{/* ── DESCRIPTION ── */}
      <section className=" max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
        <div className="card-elevated p-4 sm:p-8">
          <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-2">
            <div className="w-1 h-6 rounded-full bg-primary-light" />
            About {app.name}
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed">{app.description}</p>
        </div>
      </section>
      
      {/* ── RELATED APPS ── */}
      {related.length > 0 && (
        <section className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-xl font-extrabold text-text-primary mb-6 text-center">
            Releted <span className="gradient-text">Yono</span> Apps
          </h2>
          <div className="">
            {related.map((relApp, idx) => (
              <AppCard key={relApp.id} app={relApp} index={idx} />
            ))}
          </div>
        </section>
      )}

    


      {/* ── FAQ ── */}
      <section className=" max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
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
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
            <div className="card-elevated p-6 sm:p-8">
              <h2 className="text-xl font-extrabold text-text-primary mb-6 flex items-center gap-2">
            <div className="w-1 h-6 rounded-full bg-accent-dark" />
            Tags
          </h2>
             <Marquee speed={300} direction="left" className="bg-gray-100 border border-gray-200 rounded-lg  py-4">
              {keywords.map((keyword, i) => (
                <span key={i} className="mx-4 bg-accent-dark text-white rounded-lg px-2 py-1">{keyword.replace(/\b\w/g, l => l.toUpperCase())}</span>
              ))}
    </Marquee>
      </div>
      </div>

<section id="disclaimer" className="max-w-4xl mx-auto px-2 sm:px-6 pb-8">
          <div className="disclaimer-card">
            <h2 className="text-lg font-extrabold text-red-accent mb-3">⚠ Disclaimer</h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              This website is for informational and entertainment purposes only. We do not promote
              or encourage gambling in any form. All gaming apps listed on this platform involve
              real money and carry financial risk. Players must be 18 years or older to participate.
              Please play responsibly and within your means. AllYonoMax is not responsible for any
              financial losses incurred through the use of any listed applications. All trademarks
              and app names belong to their respective owners.
            </p>
          </div>
        </section>

      <Footer />
    </>
  );
}
