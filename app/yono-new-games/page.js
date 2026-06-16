export const revalidate = 86400;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";
import AppCard from "@/components/AppCard";
import {
  CollectionPageSchema,
  FAQSchema,
  ItemListSchema,
} from "@/components/SchemaMarkup";
import { getAllApps } from "@/lib/helpers";

const faqData = [
  {
    question: "What are New Yono Games?",
    answer:
      "New Yono Games are the latest Yono apps launched with fresh bonuses, referral rewards and promotional offers for new users.",
  },
  {
    question: "How often are new Yono Games launched?",
    answer:
      "New Yono apps are launched regularly throughout the year. This page is updated whenever a new Yono app becomes available.",
  },
  {
    question: "Which new Yono app gives the highest bonus?",
    answer:
      "Bonus amounts vary between apps. You can compare all latest Yono apps listed on this page and choose the one offering the highest signup reward.",
  },
  {
    question: "Are new Yono apps safe to use?",
    answer:
      "Most new Yono apps use the same platform ecosystem and support secure registration, deposits and withdrawals.",
  },
  {
    question: "How can I download new Yono Games?",
    answer:
      "Simply choose any app from the list, open its page and click the download button to get the latest APK version.",
  },
  {
    question: "Do new Yono apps offer referral rewards?",
    answer:
      "Yes, many newly launched Yono apps provide referral programs that allow users to earn rewards by inviting friends.",
  },
  {
    question: "What is the minimum withdrawal in new Yono apps?",
    answer:
      "Most apps support low minimum withdrawal limits, but exact requirements depend on the individual application.",
  },
  {
    question: "Which new Yono Games are currently trending?",
    answer:
      "Trending apps change frequently. Check the latest app list below to see recently added and popular Yono Games.",
  },
];

export const metadata = {
  title: "New Yono Games Download 2026 – Latest Yono Apps",
  description:
    "Download New Yono Games and latest Yono Apps. Explore recently launched Yono apps, signup bonuses, referral rewards and instant withdrawal options.",
  keywords: [
    "new yono games",
    "yono new games",
    "latest yono games",
    "new yono apps",
    "latest yono apps",
    "new yono game download",
    "latest yono app",
    "new yono app download",
  ],
};

export default function YonoNewGamesPage() {
  const allApps = getAllApps();

  const newApps = allApps.filter(
    (app) => app.isNew || app.isTrending || app.isHot
  );

  const faqSchema = faqData.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <div className="bg-bg min-h-screen">
        <Navbar />

        <CollectionPageSchema />
        <ItemListSchema apps={newApps} />
        <FAQSchema faq={faqSchema} />

        {/* HERO */}
        <section className="max-w-3xl mx-auto px-2 py-4">
          <div className="content-section">
            <h1 className="text-xl sm:text-3xl font-extrabold text-text-primary mb-3">
              New Yono Games Download – Latest Yono Apps 2026
            </h1>

            <p className="text-sm text-text-secondary mb-4">
              Explore the latest Yono Games and newly launched Yono Apps
              available for Indian players. This page contains recently added
              apps, trending launches, signup bonuses, referral rewards and
              updated download links. If you are looking for fresh Yono apps
              with new promotions and bonus offers, you can find them here in
              one place.
            </p>

            <p className="text-sm text-text-secondary">
              New Yono Games are updated regularly. Users can compare bonuses,
              minimum withdrawal limits and app ratings before downloading the
              latest version.
            </p>
          </div>
        </section>

        {/* NEW APPS LIST */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2 className="text-xl font-bold mb-4">
              Latest New Yono Games
            </h2>

            <div className="space-y-2">
              {newApps.map((app, index) => (
                <AppCard
                  key={app.id}
                  app={app}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2>Why Players Prefer New Yono Games</h2>

            <p>
              Newly launched Yono apps often provide better signup bonuses,
              promotional rewards and referral commissions compared to older
              applications. Many users actively look for fresh Yono Games
              because new launches frequently introduce limited-time offers for
              early registrations.
            </p>

            <p>
              Another advantage of new Yono apps is reduced competition during
              the initial launch period. Many platforms also run special reward
              campaigns to attract new players and grow their user base.
            </p>

            <h2>Latest Yono Apps Updated Daily</h2>

            <p>
              This page is designed to help users discover newly released Yono
              apps without searching multiple websites. Whenever a new app is
              added to the ecosystem, it can be included here along with updated
              bonus information, withdrawal details and download access.
            </p>

            <p>
              Users who regularly follow new launches often gain access to
              better promotional offers and referral opportunities before they
              become widely known.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-2 sm:px-6 pb-8">
          <div className="content-section">
            <h2 className="text-xl font-bold mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-card-border rounded-lg p-4"
                >
                  <h3 className="font-semibold mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <FloatingTelegram />
      </div>
    </>
  );
}