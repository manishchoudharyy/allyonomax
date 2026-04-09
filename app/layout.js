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
      "AllYonoMax – Download All Yono Games & Rummy Apps | Get ₹51 to ₹550 Bonus",
    template: "%s | AllYonoMax",
  },
  description:
    "AllYonoMax – Download All New Yono Games, Rummy & Slots Apps. Get ₹51 to ₹550 Sign-Up Bonus with ₹100 Min Withdrawal. Yono 777 | Yono Rummy | Yono Slots | Yono VIP | Jaiho 777. India's trusted Yono Games hub.",
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
      "AllYonoMax – Download All Yono Games & Rummy Apps | Get ₹51 to ₹550 Bonus",
    description:
      "Download All New Yono Games, Rummy & Slots Apps. Get ₹51 to ₹550 Sign-Up Bonus with ₹100 Min Withdrawal. Yono 777 | Yono Rummy | Yono Slots | Yono VIP. India's trusted Yono Games hub.",
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
      "AllYonoMax – Download All Yono Games & Rummy Apps | Get ₹51 to ₹550 Bonus",
    description:
      "Download All New Yono Games, Rummy & Slots Apps. Get ₹51 to ₹550 Sign-Up Bonus with ₹100 Min Withdrawal. India's trusted Yono Games hub.",
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
