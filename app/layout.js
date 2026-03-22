import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://allyonomax.com"),
  title: {
    default: "AllYonoMax — India's #1 Yono Games Hub | Download Apps & Earn",
    template: "%s | AllYonoMax",
  },
  description:
    "AllYonoMax par download karo top Yono Games apps — rummy, slots, casino. ₹550 tak sign up bonus, instant withdrawal, aur refer karke unlimited kamao.",
  keywords: [
    "yono games",
    "yono rummy",
    "yono 777",
    "rummy apk download",
    "real money games",
    "casino app download",
    "refer and earn",
    "allyonomax",
  ],
  openGraph: {
    title: "AllYonoMax — India's #1 Yono Games Hub",
    description:
      "Download top Yono Games apps with ₹550 max bonus. Instant withdrawal. Trusted by lakhs of players.",
    url: "https://allyonomax.com",
    siteName: "AllYonoMax",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AllYonoMax — India's #1 Yono Games Hub",
    description:
      "Download top Yono Games apps with ₹550 max bonus. Instant withdrawal.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://allyonomax.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bg text-text-primary font-body bg-texture antialiased">
        {children}
      </body>
    </html>
  );
}
