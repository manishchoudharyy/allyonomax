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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#be0000",
};

export const metadata = {
  metadataBase: new URL("https://allyonomax.com"),
  title: {
    default:
      "All Yono Games – Download All New Yono Apps & Get ₹550 Bonus | AllYonoMax",
    template: "%s | AllYonoMax",
  },
  description:
    "Download all Yono Games and get ₹51 to ₹550 sign-up bonus instantly. India's largest Yono Games directory: Yono Rummy, Yono 777, Yono Slots, new Yono apps updated daily. Min withdrawal ₹100.",
  keywords: [
    "all yono games",
    "yono games",
    "yono rummy",
    "yono 777",
    "yono slots",
    "yono vip",
    "yono arcade",
    "all yono app",
    "all yono games download",
    "yono rummy apk",
    "yono games download",
    "new yono app",
    "yono app",
    "rummy app download",
    "teen patti yono",
    "jaiho 777",
    "jaiho rummy",
    "allyonomax",
    "all yono max",
    "yono games list",
    "best yono app",
    "yono sign up bonus",
    "yono bonus app",
    "real money games india",
    "rummy apk download",
    "casino app download",
    "refer and earn yono",
    "yono 777 download",
    "yono slots download",
    "download yono games",
  ],
  openGraph: {
    title:
      "All Yono Games – Download All New Yono Apps & Get ₹550 Bonus | AllYonoMax",
    description:
      "Download all Yono Games and get ₹51 to ₹550 sign-up bonus instantly. India's largest Yono Games directory: Yono Rummy, Yono 777, Yono Slots, new Yono apps updated daily. Min withdrawal ₹100.",
    url: "https://allyonomax.com",
    siteName: "AllYonoMax",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://allyonomax.com/logo.webp",
        width: 512,
        height: 512,
        alt: "AllYonoMax - India's #1 Yono Games Hub",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "All Yono Games – Download All New Yono Apps & Get ₹550 Bonus | AllYonoMax",
    description:
      "Download all Yono Games and get ₹51 to ₹550 sign-up bonus instantly. India's largest Yono Games directory. Updated daily.",
    images: ["https://allyonomax.com/logo.webp"],
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
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicons/favicon.ico",
    apple: [
      { url: "/favicons/apple-touch-icon.png" },
      { url: "/favicons/apple-touch-icon-180x180.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${dmSans.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-bg text-text-primary font-body bg-texture antialiased">
        {children}
      </body>
    </html>
  );
}
