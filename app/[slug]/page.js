// ISR: Regenerate pages on-demand (via revalidatePath from admin API).
// dynamicParams=true means slugs NOT in the build are SSR-rendered on first hit, then cached.
export const dynamicParams = true;
export const revalidate = 86400; // 24h fallback — on-demand revalidation fires before this

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
  AlertCircle,
  Info,
  Gamepad2,
  Gift,
  Wallet,
  Users,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import { AppSchema, FAQSchema, BreadcrumbSchema, WebPageSchema } from "@/components/SchemaMarkup";
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
    title: { absolute: app.metaTitle },
    description: app.metaDescription,
    keywords: app.keywords,
    openGraph: {
      title: app.metaTitle,
      description: app.metaDescription,
      url: `https://allyonomax.com/${app.slug}`,
      siteName: "AllYonoMax",
      type: "article",
      images: [
        {
          url: `https://allyonomax.com${app.icon}`,
          width: 512,
          height: 512,
          alt: `${app.name} app icon`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: app.metaTitle,
      description: app.metaDescription,
      images: [`https://allyonomax.com${app.icon}`],
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
    { icon: Tag, label: "Category", value: app.categories?.join(', ') || 'Game' },
    { icon: Award, label: "Rating", value: `${app.rating} / 5` },
  ];

  return (
    <>
      <WebPageSchema app={app} />
      <AppSchema app={app} />
      <FAQSchema faq={app.faq} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://allyonomax.com" },
          { name: app.categories?.[0] || 'Game', url: `https://allyonomax.com/#apps` },
          { name: app.name, url: `https://allyonomax.com/${app.slug}` },
        ]}
      />
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
                rel="noopener noreferrer nofollow sponsored"
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
        <section className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
          <h2 className="text-xl font-extrabold text-text-primary mb-6 text-center">
            Related <span className="gradient-text">Yono</span> Apps
          </h2>
          <div className="space-y-2">
            {related.map((relApp, idx) => (
              <AppCard key={relApp.id} app={relApp} index={idx} />
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/#apps" className="text-primary text-sm font-semibold hover:underline">
              View All Yono Games Apps →
            </Link>
          </div>
        </section>
      )}
      {/* ── APP DETAILS TABLE ── */}
      <section className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
        <div className="card-elevated p-4 sm:p-8">
          <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-2">
            <div className="w-1 h-6 rounded-full bg-teal" />
            {app.name} App Details
          </h2>
          <div className="overflow-x-auto rounded-xl border border-card-border">
            <table className="w-full text-sm">
              <tbody>
                {detailItems.map((item, i) => {
                  const IconComp = item.icon;
                  return (
                    <tr key={i} className={i < detailItems.length - 1 ? "border-b border-card-border" : ""}>
                      <td className="py-3 px-4 font-semibold text-text-primary flex items-center gap-2">
                        <IconComp className="w-4 h-4 text-primary" />
                        {item.label}
                      </td>
                      <td className={`py-3 px-4 ${item.highlight ? "text-primary font-bold" : "text-text-secondary"}`}>
                        {item.value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      {app.features && app.features.length > 0 && (
        <section className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
          <div className="card-elevated p-4 sm:p-8">
            <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-2">
              <div className="w-1 h-6 rounded-full bg-green-accent" />
              Key Features of {app.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {app.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-bg border border-card-border/50">
                  <CheckCircle2 className="w-5 h-5 text-green-accent flex-shrink-0" />
                  <span className="text-text-primary text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── HOW TO DOWNLOAD ── */}
      {app.howToDownload && app.howToDownload.length > 0 && (
        <section className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
          <div className="card-elevated p-4 sm:p-8">
            <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-2">
              <div className="w-1 h-6 rounded-full bg-accent" />
              How to Download {app.name}
            </h2>
            <div className="space-y-3">
              {app.howToDownload.map((step, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-bg border border-card-border/50">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <span className="text-text-secondary text-sm leading-relaxed pt-1">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <a
                href={app.referLink}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="btn-primary text-sm"
              >
                <Download className="w-4 h-4" />
                Download {app.name} Now
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── WHY CHOOSE ── */}
      <section className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
        <div className="card-elevated p-4 sm:p-8">
          <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-2">
            <div className="w-1 h-6 rounded-full bg-primary" />
            Why Choose {app.name}?
          </h2>
          <div className="text-text-secondary text-sm leading-relaxed space-y-3">
            {app.whyChoose
              ? Array.isArray(app.whyChoose)
                ? app.whyChoose.map((item, i) => (
                    <div key={i} className="mb-4 last:mb-0">
                      {item.title && (
                        <p className="font-bold text-text-primary mb-1">{item.title}</p>
                      )}
                      <p
                        dangerouslySetInnerHTML={{
                          __html: (item.desc || item)
                            .replace(/₹[\d,]+/g, (m) => `<strong class="text-primary">${m}</strong>`)
                            .replace(/\b(AllYonoMax)\b/g, `<strong>$1</strong>`)
                        }}
                      />
                    </div>
                  ))
                : app.whyChoose.split("\n\n").map((para, i) => (
                    <p key={i}
                      dangerouslySetInnerHTML={{
                        __html: para
                          .replace(/₹[\d,]+/g, (m) => `<strong class="text-primary">${m}</strong>`)
                          .replace(/\b(AllYonoMax)\b/g, `<strong>$1</strong>`)
                          .replace(/\b(Diwa Game|Diwa Vip|Jaiho|Yono Games|yono)\b/gi, (m) => `<strong class="text-text-primary">${m}</strong>`)
                      }}
                    />
                  ))
              : (
                <>
                  <p>
                    {app.name} stands out as one of the most popular gaming apps in the Yono Games ecosystem.
                    With a generous sign-up bonus of <strong className="text-primary">{app.bonus}</strong> and
                    a low minimum withdrawal of just <strong>{app.minWithdrawal}</strong>, it is designed to give
                    players the best value from the moment they register.
                  </p>
                  <p>
                    The app is only <strong>{app.appSize}</strong> in size, making it lightweight enough to run
                    smoothly on most Android devices without taking up too much storage. With{" "}
                    <strong>{app.totalDownloads}</strong> downloads and a rating of{" "}
                    <strong>{app.rating}/5</strong>, {app.name} has earned the trust of lakhs of players across India.
                  </p>
                  <p>
                    Whether you enjoy {app.categories?.[0]?.toLowerCase() || "gaming"} or want to explore new game types,
                    {app.name} offers a secure platform with instant UPI withdrawals, 24/7 customer support,
                    and a generous refer-and-earn program. Download it today from{" "}
                    <Link href="/" className="text-primary font-semibold hover:underline">AllYonoMax</Link>{" "}
                    and start earning real money.
                  </p>
                </>
              )
            }
          </div>
        </div>
      </section>

      {/* ── GAMES AVAILABLE ── */}
      {app.gamesAvailable && app.gamesAvailable.length > 0 && (
        <section className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
          <div className="card-elevated p-4 sm:p-8">
            <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-2">
              <div className="w-1 h-6 rounded-full bg-teal" />
              Games Available in {app.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {app.gamesAvailable.map((game, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl bg-bg border border-card-border">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Gamepad2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-text-primary text-sm mb-1">{game.name}</p>
                    <p className="text-text-secondary text-xs leading-relaxed">{game.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BONUS DETAILS ── */}
      {app.bonusDetails && (
        <section className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
          <div className="card-elevated p-4 sm:p-8">
            <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-2">
              <div className="w-1 h-6 rounded-full bg-accent" />
              {app.name} Bonus — Full Breakdown
            </h2>
            <div className="text-text-secondary text-sm leading-relaxed space-y-3">
              {app.bonusDetails.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <a
              href={app.referLink}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="btn-primary text-sm mt-5"
            >
              <Gift className="w-4 h-4" />
              Claim ₹{app.bonus} Bonus Now
            </a>
          </div>
        </section>
      )}

      {/* ── WITHDRAWAL DETAILS ── */}
      {app.withdrawalDetails && (
        <section className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
          <div className="card-elevated p-4 sm:p-8">
            <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-2">
              <div className="w-1 h-6 rounded-full bg-green-accent" />
              {app.name} Withdrawal Process
            </h2>
            <div className="text-text-secondary text-sm leading-relaxed space-y-3">
              {app.withdrawalDetails.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── REFERRAL PROGRAM ── */}
      {app.referralDetails && (
        <section className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
          <div className="card-elevated p-4 sm:p-8">
            <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-2">
              <div className="w-1 h-6 rounded-full bg-primary" />
              {app.name} Referral Program
            </h2>
            <div className="text-text-secondary text-sm leading-relaxed space-y-3">
              {app.referralDetails.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROS & CONS ── */}
      {app.prosAndCons && (
        <section className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
          <div className="card-elevated p-4 sm:p-8">
            <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-2">
              <div className="w-1 h-6 rounded-full bg-teal" />
              {app.name} — Pros & Cons
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-green-accent mb-2 flex items-center gap-1.5"><ThumbsUp className="w-4 h-4" /> Pros</p>
                <div className="space-y-2">
                  {app.prosAndCons.pros.map((pro, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-green-accent flex-shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-red-400 mb-2 flex items-center gap-1.5"><ThumbsDown className="w-4 h-4" /> Cons</p>
                <div className="space-y-2">
                  {app.prosAndCons.cons.map((con, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── COMPARISON TABLE ── */}
      {app.comparisonTable && app.comparisonTable.length > 0 && (() => {
        const colKeys = Object.keys(app.comparisonTable[0]).filter(k => k !== "feature");
        const colLabels = colKeys.map(k => {
          if (k === "diwaGame") return "Diwa Game";
          if (k === "diwaVip") return "Diwa VIP";
          if (k === "yono777") return "Yono 777";
          if (k === "spinWinner") return app.name;
          if (k === "spinWinner777") return "Spin Winner 777";
          if (k === "jaiho91") return "Jaiho 91";
          return k;
        });
        return (
          <section className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
            <div className="card-elevated p-4 sm:p-8">
              <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-2">
                <div className="w-1 h-6 rounded-full bg-accent-dark" />
                {app.name} vs Other Yono Apps
              </h2>
              <div className="overflow-x-auto rounded-xl border border-card-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-card-border bg-bg">
                      <th className="py-3 px-4 text-left font-bold text-text-primary">Feature</th>
                      {colLabels.map((label, i) => (
                        <th key={i} className={`py-3 px-4 text-center font-${i === 0 ? "bold text-primary" : "semibold text-text-secondary"}`}>
                          {label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {app.comparisonTable.map((row, i) => (
                      <tr key={i} className={i < app.comparisonTable.length - 1 ? "border-b border-card-border" : ""}>
                        <td className="py-3 px-4 font-semibold text-text-primary">{row.feature}</td>
                        {colKeys.map((k, j) => (
                          <td key={j} className={`py-3 px-4 text-center ${j === 0 ? "text-primary font-bold" : "text-text-secondary"}`}>
                            {row[k]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        );
      })()}


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


      {/* ── App Tags ── */}
      {app.keywords && app.keywords.length > 0 && (
        <section className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
          <div className="card-elevated p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-2">
              <div className="w-1 h-6 rounded-full bg-accent-dark" />
              Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {app.keywords.map((keyword, i) => (
                <span key={i} className="bg-accent-dark/10 text-accent-dark rounded-lg px-3 py-1 text-sm font-medium">
                  {keyword.replace(/\b\w/g, l => l.toUpperCase())}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* ── EXPLORE MORE YONO GAMES (INTERNAL LINKING) ── */}
      <section className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
        <div className="card-elevated p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-text-primary mb-4 flex items-center gap-2">
            <div className="w-1 h-6 rounded-full bg-primary" />
            Explore More Yono Games
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                label: "All Yono Games",
                desc: "View the complete list of 60+ apps",
                href: "/all-yono-games",
                icon: <HardDrive className="w-5 h-5 text-primary" />,
                bg: "bg-primary/10"
              },
              {
                label: "New Yono Games",
                desc: "Discover the latest launches",
                href: "/new-yono-games",
                icon: <Download className="w-5 h-5 text-green-accent" />,
                bg: "bg-green-accent/10"
              },
              {
                label: "Yono Rummy Apps",
                desc: "Best 13-card rummy for real money",
                href: "/yono-rummy",
                icon: <Award className="w-5 h-5 text-teal" />,
                bg: "bg-teal/10"
              },
              {
                label: "Yono Slots & Yono 777",
                desc: "Top-rated slots and spin games",
                href: "/yono-slots",
                icon: <Coins className="w-5 h-5 text-accent" />,
                bg: "bg-accent/10"
              }
            ].map((link, i) => (
              <Link 
                key={i} 
                href={link.href}
                className="flex items-center gap-4 p-4 rounded-xl bg-bg border border-card-border hover:border-primary transition-all group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${link.bg}`}>
                  {link.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">
                    {link.label}
                  </div>
                  <div className="text-xs text-text-secondary mt-0.5">
                    {link.desc}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className=" max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
        <div className="card-elevated p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-text-primary mb-6 flex items-center gap-2">
            <div className="w-1 h-6 rounded-full bg-accent-dark" />
            Important Notice
          </h2>
          <div className="space-y-4">
            {/* Warning Card 1: General Disclaimer */}
            <div className="flex gap-4 items-start bg-bg border-l-4 border-l-[#f59e0b] border-y border-r border-card-border/50 rounded-xl p-5 shadow-sm transition-all hover:shadow-md">
              <Info className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-0.5" />
              <div className="text-sm leading-relaxed text-text-secondary font-medium">
                <strong className="text-text-primary text-sm tracking-wide block mb-1">Disclaimer</strong>
                <p>allyonomax.com does not run these apps. Gaming apps can be addictive and risky financially. Only for 18+ users. Please read our Disclaimer page and the app-specific disclaimer before playing.</p>
              </div>
            </div>

            {/* Warning Card 2: Geo-block / Region Ban */}
            <div className="flex gap-4 items-start bg-bg border-l-4 border-l-[#ef4444] border-y border-r border-card-border/50 rounded-xl p-5 shadow-sm transition-all hover:shadow-md">
              <AlertCircle className="w-6 h-6 text-[#ef4444] flex-shrink-0 mt-0.5" />
              <div className="text-sm leading-relaxed text-text-secondary font-medium">
                <strong className="text-text-primary text-sm uppercase tracking-wider block mb-1 flex items-center gap-2">
                  Alert
                </strong>
                <p>Rummy (skill-based) is banned in <span className="text-text-primary">Andhra Pradesh, Sikkim, Nagaland, Assam, Arunachal Pradesh, Tamil Nadu, Odisha, and Telangana.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── Cross-links ── */}
      <section className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-text-muted">
          <Link href="/about" className="hover:text-primary transition-colors">About AllYonoMax</Link>
          <span>•</span>
          <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
          <span>•</span>
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
