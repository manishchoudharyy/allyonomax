import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";
import { Mail, Megaphone, Info, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact AllYonoMax for advertisement and business queries. Promote your gaming app through our platform.",
  alternates: {
    canonical: "https://allyonomax.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="header-gradient py-12 px-4 text-center text-white">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight">
          Contact Us
        </h1>
        <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Get in touch with AllYonoMax
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* ── Customer Support Notice ── */}
        <div className="disclaimer-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
              <Info className="w-5 h-5 text-red-accent" />
            </div>
            <h2 className="text-lg font-extrabold text-red-accent !mb-0">
              Important Notice
            </h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">
            AllYonoMax does not provide Customer Support for Listed Apps/Games. If you encounter any problems, please contact the support option within those games. Because the Listed Games/Apps are not ours. We do not own those games.
          </p>
        </div>

        {/* ── Advertisement / Business Queries ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Megaphone className="w-5 h-5 text-primary" />
            </div>
            <h2 className="!mb-0">Advertisement / Business Queries</h2>
          </div>
          <p>
            If you are a game maker company, operator, or administrator, and you want to promote your application through our website, you can contact us through the contact details given below and discuss promotion and cooperation.
          </p>
        </div>

        {/* ── Contact Details Table ── */}
        <div className="content-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-teal" />
            </div>
            <h2 className="!mb-0">Contact Details</h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-card-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left py-3 px-4 font-bold">Method</th>
                  <th className="text-left py-3 px-4 font-bold">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-card-border">
                  <td className="py-3 px-4 font-semibold text-text-primary">Email</td>
                  <td className="py-3 px-4">
                    <a
                      href="mailto:contact@allyonomax.com"
                      className="text-primary font-semibold hover:underline"
                    >
                      contact@allyonomax.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-text-primary">Telegram</td>
                  <td className="py-3 px-4">
                    <a
                      href="https://telegram.me/AllYonoMaxdotCom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal font-semibold hover:underline"
                    >
                      @allyonomax
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            You can directly contact us through Email as given in the Table above, and can deal with us.
          </p>
        </div>

        {/* ── Telegram CTA ── */}
        <div className="info-card-teal rounded-2xl !p-6 text-center">
          <h2 className="text-xl font-extrabold text-white mb-3">
            Quick Contact via Telegram
          </h2>
          <p className="text-white/90 text-sm mb-4">
            For the fastest response, reach out to us on Telegram.
          </p>
          <a
            href="https://telegram.me/AllYonoMaxdotCom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-teal font-bold text-sm px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <Send className="w-4 h-4" />
            Contact on Telegram
          </a>
        </div>

      </div>

      <Footer />
      <FloatingTelegram />
    </div>
  );
}
