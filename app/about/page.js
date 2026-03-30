import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";
import { Globe, Rocket, Users, Smartphone, Heart, ArrowRight, Star } from "lucide-react";
import { getAllApps } from "@/lib/helpers";

const topApps = getAllApps().slice(0, 3);

export const metadata = {
  title: "About Us",
  description:
    "Learn about AllYonoMax — a comprehensive hub dedicated to enhancing digital experiences for Indian users. Discover, download, and explore the best apps.",
  alternates: {
    canonical: "https://allyonomax.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="header-gradient py-12 px-4 text-center text-white">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight">
          About Us
        </h1>
        <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Empowering Indian users with the best digital experiences since 2024
        </p>
      </section>

      {/* ── Mission Statement ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 -mt-6">
        <div className="content-section shadow-lg border-t-4 border-t-primary">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            <h2 className="mb-0!">Our Mission</h2>
          </div>
          <p>
            Welcome to our platform, a comprehensive hub created on July 27, 2024,
            dedicated to enhancing digital experiences for everyone. At the heart of
            our mission lies the commitment to empower users with access to a wide
            range of applications, mirroring the global accessibility of platforms
            like the renowned app marketplaces, but with a unique focus on Indian
            users.
          </p>
        </div>
      </section>

      {/* ── Feature Highlights ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: Globe,
              title: "Wide Access",
              desc: "Extensive selection of apps for every need",
              color: "text-teal",
              bg: "bg-teal/10",
            },
            {
              icon: Users,
              title: "Community",
              desc: "Knowledge sharing about latest digital tools",
              color: "text-primary",
              bg: "bg-primary/10",
            },
            {
              icon: Smartphone,
              title: "Indian Focus",
              desc: "Local solutions for local challenges",
              color: "text-accent-dark",
              bg: "bg-accent/10",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="content-section text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-3`}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-base font-bold text-text-primary mb-1">
                {item.title}
              </h3>
              <p className="text-xs! !mb-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Journey ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-teal" />
            </div>
            <h2 className="!mb-0">Our Journey</h2>
          </div>
          <p>
            Our journey began with a simple yet powerful vision: to revolutionize the
            way people discover and download apps. We recognize the evolving needs of
            the digital age and strive to meet them by offering an extensive selection
            of applications. From utility and productivity apps to entertainment and
            lifestyle options, our platform is a one-stop destination for all your app
            needs.
          </p>
        </div>
      </section>

      {/* ── Community & UX ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <h2 className="!mb-0">More Than Just Apps</h2>
          </div>
          <p>
            We are not just about providing access to apps; we are about fostering a
            community where knowledge about the latest digital tools is shared and
            celebrated. Our platform is designed to be user-friendly, ensuring a
            seamless experience for everyone, from tech-savvy individuals to those
            just starting their digital journey.
          </p>
        </div>
      </section>

      {/* ── Indian Focus ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
        <div className="info-card-teal rounded-2xl !p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-extrabold text-white !mb-0">
              Made for India 🇮🇳
            </h2>
          </div>
          <p className="!text-sm text-white/90 leading-relaxed !mb-0">
            Our focus on Indian applications sets us apart, reflecting our dedication
            to cater to the unique needs and preferences of our audience. We believe
            in the power of local solutions for local challenges, and our platform is
            a testament to this belief.
          </p>
        </div>
      </section>

      {/* ── Popular Apps Cross-Link ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-6">
        <div className="content-section">
          <h2>Our Most Popular Apps</h2>
          <p className="mb-4">
            Explore some of the top-rated apps available on AllYonoMax:
          </p>
          <div className="space-y-2">
            {topApps.map((app) => (
              <Link
                key={app.id}
                href={`/${app.slug}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-bg border border-card-border/50 hover:border-primary/30 transition-colors"
              >
                <Star className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-text-primary text-sm font-medium">{app.name}</span>
                <span className="text-primary text-xs font-bold ml-auto">{app.bonus} Bonus</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
        <div className="content-section text-center">
          <h2>Join Our Journey</h2>
          <p>
            Join us in our endeavor to bring the best of digital innovations to your
            fingertips. Explore, download, and stay ahead in the ever-evolving world
            of apps with us.
          </p>
          <a href="/" className="btn-primary text-sm mt-2 inline-flex">
            Explore Apps
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
      <FloatingTelegram />
    </div>
  );
}
