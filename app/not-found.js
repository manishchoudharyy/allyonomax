import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist on AllYonoMax.",
};

export default function NotFound() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="content-section py-12">
          <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Page Not Found
          </h2>
          <p className="text-text-secondary text-sm mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/" className="btn-primary text-sm">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <Link
              href="/#apps"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-card-border rounded-xl text-text-primary text-sm font-medium hover:bg-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Browse Apps
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
