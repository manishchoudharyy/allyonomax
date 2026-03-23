# 📋 AllYonoMax.com — Complete Project Plan

---

## 🧱 Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| Framework | Next.js 14 (JavaScript) | SEO-perfect static generation |
| Styling | Tailwind CSS | Fast, utility-first, responsive |
| Fonts | Google Fonts (Custom pairing) | Premium feel |
| Icons | Lucide React | Clean icons |
| Deployment | Vercel (Free) | Best for Next.js |
| Data | JSON file | No DB needed, SEO-safe |

---

## 📁 Folder Structure

```
allyonomax/
│
├── public/
│   ├── icons/              ← Har app ki icon image
│   └── og-image.png        ← Social share image
│
├── src/
│   ├── app/
│   │   ├── layout.js           ← Root layout (fonts, meta, analytics)
│   │   ├── page.js             ← Homepage (app grid + search)
│   │   ├── sitemap.js          ← Auto sitemap.xml generate
│   │   ├── robots.js           ← robots.txt auto generate
│   │   └── [slug]/
│   │       └── page.js         ← Individual app page (dynamic but static)
│   │
│   ├── components/
│   │   ├── Navbar.js           ← Top navigation bar
│   │   ├── AppCard.js          ← App card component (homepage grid)
│   │   ├── AppHero.js          ← Individual app page hero section
│   │   ├── SearchBar.js        ← Search input component
│   │   ├── TelegramBanner.js   ← Telegram join floating/sticky banner
│   │   ├── Footer.js           ← Footer with links
│   │   └── SchemaMarkup.js     ← JSON-LD schema for SEO
│   │
│   └── lib/
│       ├── apps.json           ← ALL apps data (main database)
│       └── helpers.js          ← Utility functions
│
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## 🗃️ apps.json Structure (Data Model)

Yeh file main "database" hai. Har app ke liye ek object:

```json
[
  {
    "id": 1,
    "name": "Yono Rummy",
    "slug": "yono-rummy",
    "category": "Rummy",
    "icon": "/icons/yono-rummy.webp",
    "bonus": "₹550",
    "minWithdrawal": "₹100",
    "referLink": "https://your-refer-link-here.com",
    "rating": 4.5,
    "totalDownloads": "50K+",
    "description": "Yono Rummy ek best real money rummy app hai...",
    "features": ["Instant Withdrawal", "24/7 Support", "Daily Bonus"],
    "isNew": true,
    "isHot": false,
    "isTrending": false,
    "metaTitle": "Yono Rummy APK Download — ₹550 Sign Up Bonus | AllYonoMax",
    "metaDescription": "Yono Rummy APK download karo aur pao ₹550 sign up bonus. Refer link se extra kamao. Minimum withdrawal sirf ₹100.",
    "keywords": ["yono rummy apk", "yono rummy download", "yono rummy refer link"]
  }
]
```

**Naya app add karna = Sirf ek JSON object add karo. Done. ✅**

---

## 🎨 UI Design Plan

### Design Direction: "Dark Luxury Casino"
- **Theme:** Pure Black (#0a0a0a) + Rich Gold (#D4AF37) + Deep Red accent (#8B0000)
- **Feel:** Premium, trustworthy, high-energy — jaise ek VIP casino lobby
- **Font Pairing:**
  - Display/Headings: `Cinzel` (Roman serif, royal feel)
  - Body: `DM Sans` (Clean, readable)
- **Background:** Dark texture with subtle gold grain overlay
- **Cards:** Glass-morphism effect with gold border glow on hover

---

### 🏠 Homepage Layout

```
┌─────────────────────────────────────┐
│  NAVBAR: Logo | Search | Telegram   │
├─────────────────────────────────────┤
│  HERO SECTION                       │
│  "India's Best Yono Games Hub"      │
│  Stats: 50+ Apps | ₹550 Max Bonus   │
├─────────────────────────────────────┤
│  STICKY TELEGRAM BANNER (Gold)      │
├─────────────────────────────────────┤
│  SEARCH BAR (Large, centered)       │
├─────────────────────────────────────┤
│  APP GRID (3 cols desktop, 2 mob)   │
│  ┌────┐ ┌────┐ ┌────┐              │
│  │Card│ │Card│ │Card│              │
│  └────┘ └────┘ └────┘              │
│  [NEW] [HOT] [TRENDING] badges      │
├─────────────────────────────────────┤
│  FOOTER: Links | Disclaimer         │
└─────────────────────────────────────┘
```

### App Card Design:
```
┌──────────────────────────┐
│ [NEW badge]              │
│ 🖼️ App Icon (centered)   │
│ App Name (Gold)          │
│ ⭐ 4.5 Rating            │
│ Sign Up: ₹550            │
│ Min. Withdrawal: ₹100    │
│ [DOWNLOAD] button        │
└──────────────────────────┘
```

---

### 📄 Individual App Page Layout

```
┌─────────────────────────────────────┐
│  NAVBAR                             │
├─────────────────────────────────────┤
│  HERO: Icon + Name + Badges         │
│  Bonus: ₹550  | Rating: ⭐4.5       │
│  [DOWNLOAD WITH REFER LINK] (Big)   │
├─────────────────────────────────────┤
│  APP DETAILS SECTION                │
│  • Sign Up Bonus                    │
│  • Min. Withdrawal                  │
│  • Total Downloads                  │
│  • Features list                    │
├─────────────────────────────────────┤
│  HOW TO DOWNLOAD (Steps)            │
│  1. Click Download                  │
│  2. Install APK                     │
│  3. Register with refer code        │
│  4. Get bonus!                      │
├─────────────────────────────────────┤
│  SEO TEXT SECTION                   │
│  (App description, keyword-rich)    │
├─────────────────────────────────────┤
│  RELATED APPS (3-4 cards)           │
├─────────────────────────────────────┤
│  FOOTER                             │
└─────────────────────────────────────┘
```

---

## 🔍 SEO Plan — 100% Implementation

### 1. Meta Tags (Har page ke liye unique)
```js
// apps.json se pull hoga
export const metadata = {
  title: "Yono Rummy APK Download — ₹550 Sign Up Bonus | AllYonoMax",
  description: "Yono Rummy APK download karo...",
  keywords: ["yono rummy apk", ...],
  openGraph: { title, description, image },
  twitter: { card, title, description }
}
```

### 2. JSON-LD Schema Markup (Rich Results)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Yono Rummy",
  "applicationCategory": "GameApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "ratingCount": "1000"
  }
}
```

### 3. Static Generation (generateStaticParams)
```js
// Next.js build time par sab pages bante hain
export async function generateStaticParams() {
  return apps.map(app => ({ slug: app.slug }))
}
// Result: /yono-rummy, /ok-rummy, etc. — Pure Static HTML ✅
```

### 4. Auto Sitemap.xml
```js
// src/app/sitemap.js
// Automatically Google ko sab pages bata dega
export default function sitemap() {
  return apps.map(app => ({
    url: `https://allyonomax.com/${app.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))
}
```

### 5. robots.txt
```
User-agent: *
Allow: /
Sitemap: https://allyonomax.com/sitemap.xml
```

### 6. URL Structure (SEO-Friendly)
```
✅ allyonomax.com/yono-rummy
✅ allyonomax.com/ok-rummy
✅ allyonomax.com/jaiho-slots
❌ allyonomax.com/app?id=123 (yeh nahi)
```

### 7. Image Optimization
- Next.js `<Image>` component — auto WebP conversion, lazy loading
- Alt tags: "Yono Rummy APK Download"
- Har icon optimized

### 8. Page Speed (Core Web Vitals)
- Static HTML = instant load
- No unnecessary JS
- Tailwind CSS purged (small CSS file)
- Font preloading

---

## 📦 Target Keywords (Full Research — Homepage + App Pages)

### Homepage Primary Keywords:
- yono games apk download
- yono rummy apk
- all yono games
- yono 777 apk
- all yono apps download
- new yono games 2025
- yono games refer link

### Individual App Page Keywords (Example: Ok Rummy):

**Primary:**
- ok rummy apk, ok rummy apk download, ok rummy yono
- ok rummy app download, ok rummy refer link, ok rummy refer code

**Bonus/Money:**
- ok rummy signup bonus, ok rummy real money, ok rummy instant withdrawal
- ok rummy minimum withdrawal ₹100, ok rummy promo code

**Long-Tail (High Conversion):**
- ok rummy apk download kaise kare
- ok rummy refer link se paisa kamao
- ok rummy real hai ya fake
- ok rummy safe hai ya nahi

### Per-App Page Keywords Pattern:
- [app name] apk download
- [app name] yono apk
- [app name] refer link
- [app name] refer code
- [app name] sign up bonus ₹[amount]
- [app name] real money
- [app name] minimum withdrawal
- [app name] download kaise kare
- [app name] safe hai ya nahi
- [app name] apk download 2025

### SEO Edge — Jo Competitors Nahi Kar Rahe:
- FAQ Section with schema (Featured Snippet chance)
- How to Download Steps with schema
- SoftwareApplication JSON-LD Schema
- Proper 300+ word description
- Refer link copy button

---

## 🚀 Build Order (Jo main banaunga)

1. ✅ `package.json` + `next.config.js` + `tailwind.config.js`
2. ✅ `src/lib/apps.json` — 10 sample apps ka data
3. ✅ `src/app/layout.js` — Root layout, fonts, global meta
4. ✅ `src/components/Navbar.js`
5. ✅ `src/components/Footer.js`
6. ✅ `src/components/AppCard.js`
7. ✅ `src/components/SearchBar.js`
8. ✅ `src/components/TelegramBanner.js`
9. ✅ `src/components/SchemaMarkup.js`
10. ✅ `src/app/page.js` — Homepage
11. ✅ `src/app/[slug]/page.js` — Individual app page
12. ✅ `src/app/sitemap.js` — Auto sitemap
13. ✅ `src/app/robots.js` — robots.txt

---

## 📌 Important Notes

- **Naya app add karna:** Sirf `apps.json` mein ek object add karo + `next build` run karo
- **Refer link update:** JSON mein `referLink` field update karo
- **Telegram link:** `TelegramBanner.js` mein ek jagah update karo
- **Hosting:** Vercel par free deploy hoga — `vercel --prod`

---

## ⚠️ Disclaimer Note
Website par gambling disclaimer zaroori hai (legal requirement India mein).
Footer aur har app page par disclaimer text add hoga.

---

*Plan complete. Ab coding shuru hogi. 🚀*