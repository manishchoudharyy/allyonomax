# 🚀 AllYonoMax.com — Master Prompt for IDE

## Project Overview
Mujhe **AllYonoMax.com** naam ki ek website banani hai. Yeh website **Yono Games company ke betting/casino apps** ko list karti hai — har app mere **refer link** ke saath. Jab koi user mera refer link use karke app download karta hai to mujhe commission milta hai.

---

## Tech Stack
- **Framework:** Next.js (Latest version) — JavaScript only, NO TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts — `Cinzel` (headings) + `DM Sans` (body)
- **Icons:** Lucide React
- **Data:** JSON file (no database)
- **Deployment:** VPS (Ubuntu) — `npm run build` + `npm start`

---

## Architecture — Option 3 (JSON + Static Generation)

```
apps.json (data) → generateStaticParams → Pure Static HTML pages
```

- Saare app pages **build time par static HTML** ban jaate hain
- Naya app add karna = sirf `apps.json` mein ek object add karo + rebuild
- **SEO 100% perfect** — Google ko pure static HTML milti hai
- Dynamic routes: `/[slug]/page.js` — ek template se 50+ pages auto-generate

---

## Folder Structure

```
allyonomax/
├── public/
│   └── icons/              ← App icons (webp/png)
│
├── src/
│   ├── app/
│   │   ├── layout.js           ← Root layout (fonts, global meta)
│   │   ├── page.js             ← Homepage
│   │   ├── sitemap.js          ← Auto sitemap.xml
│   │   ├── robots.js           ← Auto robots.txt
│   │   └── [slug]/
│   │       └── page.js         ← Individual app page (static)
│   │
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── AppCard.js
│   │   ├── SearchBar.js
│   │   ├── TelegramBanner.js
│   │   └── SchemaMarkup.js
│   │
│   └── lib/
│       ├── apps.json           ← Main data file
│       └── helpers.js
│
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## apps.json — Data Structure

Yeh file main "database" hai. Example:

```json
[
  {
    "id": 1,
    "name": "Ok Rummy",
    "slug": "ok-rummy",
    "category": "Rummy",
    "icon": "/icons/ok-rummy.webp",
    "bonus": "₹550",
    "minWithdrawal": "₹100",
    "appSize": "58-65 MB",
    "rating": 4.5,
    "totalDownloads": "100K+",
    "referLink": "https://TUMHARA_REFER_LINK_YAHAN",
    "description": "Ok Rummy ek trusted real money rummy app hai jo Yono Games ne banaya hai. Isme tum rummy, slots aur aur bhi games khel ke real cash kama sakte ho.",
    "features": ["Instant Withdrawal", "24/7 Support", "Daily Bonus", "Refer & Earn"],
    "howToDownload": [
      "Niche Download button par click karo",
      "APK file download hogi — install karo",
      "Register karo apna mobile number se",
      "Sign up bonus automatically milega",
      "Refer link share karo aur extra kamao"
    ],
    "faq": [
      {
        "question": "Ok Rummy safe hai?",
        "answer": "Haan, Ok Rummy ek trusted Yono Games app hai jisme secure payments hoti hain."
      },
      {
        "question": "Ok Rummy mein minimum withdrawal kitna hai?",
        "answer": "Ok Rummy mein minimum withdrawal sirf ₹100 hai."
      },
      {
        "question": "Ok Rummy refer link se kitna bonus milta hai?",
        "answer": "Ok Rummy refer link use karne par signup bonus direct wallet mein aata hai."
      }
    ],
    "isNew": true,
    "isHot": false,
    "isTrending": false,
    "metaTitle": "Ok Rummy APK Download — ₹550 Sign Up Bonus | AllYonoMax",
    "metaDescription": "Ok Rummy APK download karo aur pao ₹550 sign up bonus. Refer link se extra kamao. Minimum withdrawal sirf ₹100. Trusted Yono Games app.",
    "keywords": ["ok rummy apk", "ok rummy download", "ok rummy refer link", "ok rummy yono", "ok rummy sign up bonus"]
  }
]
```

**10-15 sample apps** is structure ke saath banao. Apps list:
Ok Rummy, Yono Rummy, Yono 777, Jaiho Rummy, IND Rummy, Rummy 77, Joy Rummy, Spin 777, Bingo 101, Rummy 888, Jaiho Slots, Hindi 777, YN 777, IND Club, Rummy Ludo

---

## UI Design — "Dark Luxury Casino"

### Colors (CSS Variables in Tailwind)
```
Background:     #080808  (near black)
Card BG:        #111111  (dark card)
Card Border:    #1f1f1f
Gold Primary:   #D4AF37  (rich gold)
Gold Light:     #F0D060  (light gold for hover)
Gold Dark:      #A08020  (dark gold)
Red Accent:     #8B0000  (deep red)
Text Primary:   #F5F5F0  (off white)
Text Secondary: #9A9A8A  (muted)
```

### Fonts
```css
Headings: 'Cinzel', serif        /* Royal, premium feel */
Body:     'DM Sans', sans-serif  /* Clean, readable */
```

### Visual Effects
- **Cards:** Dark glassmorphism + gold border glow on hover (`box-shadow: 0 0 20px rgba(212,175,55,0.3)`)
- **Background:** Subtle repeating diagonal line texture (CSS only, no images)
- **Buttons:** Gold gradient with shine animation on hover
- **Badges:** "NEW" = gold, "HOT" = red, "TRENDING" = green

---

## Homepage Layout (`src/app/page.js`)

```
┌─────────────────────────────────────────┐
│  NAVBAR: Logo(left) | Search | Telegram  │
├─────────────────────────────────────────┤
│  HERO SECTION (dark + gold)              │
│  "India's #1 Yono Games Hub"            │
│  Stats: 50+ Apps | ₹550 Max Bonus       │
│  [Explore Apps] button                   │
├─────────────────────────────────────────┤
│  TELEGRAM STICKY BANNER (gold shimmer)   │
├─────────────────────────────────────────┤
│  SEARCH BAR (large, centered)            │
├─────────────────────────────────────────┤
│  APP GRID                                │
│  3 columns desktop / 2 tablet / 1 mobile │
│  AppCard components                      │
├─────────────────────────────────────────┤
│  FOOTER                                  │
└─────────────────────────────────────────┘
```

### AppCard Design:
```
┌────────────────────────────┐
│ [NEW] badge (top-left)     │
│                            │
│    🖼️ App Icon (80x80)     │
│    App Name (Cinzel, gold) │
│    ⭐⭐⭐⭐⭐ Rating          │
│    Sign Up Bonus: ₹550     │
│    Min. Withdraw: ₹100     │
│                            │
│  [  DOWNLOAD  ] (gold btn) │
└────────────────────────────┘
```

---

## Individual App Page Layout (`src/app/[slug]/page.js`)

```
┌─────────────────────────────────────────┐
│  NAVBAR                                  │
├─────────────────────────────────────────┤
│  HERO                                    │
│  [Icon] App Name | Rating | Badges       │
│  Bonus: ₹550 | Size: 58MB | 100K DL     │
│  [ ⬇ DOWNLOAD WITH REFER LINK ] (BIG)   │
├─────────────────────────────────────────┤
│  APP DETAILS (2-col grid)                │
│  • Sign Up Bonus  • Min. Withdrawal      │
│  • App Size       • Total Downloads      │
│  • Category       • Rating               │
├─────────────────────────────────────────┤
│  FEATURES LIST (checkmarks, gold)        │
├─────────────────────────────────────────┤
│  HOW TO DOWNLOAD (numbered steps)        │
│  1. Click Download                       │
│  2. Install APK                          │
│  3. Register with mobile number          │
│  4. Get bonus automatically              │
│  5. Refer & earn more                    │
├─────────────────────────────────────────┤
│  DESCRIPTION (300+ words, SEO text)      │
├─────────────────────────────────────────┤
│  FAQ SECTION (accordion style)           │
│  Q: Safe hai? A: Haan...                 │
│  Q: Withdrawal kaise kare? A: ...        │
├─────────────────────────────────────────┤
│  RELATED APPS (3-4 cards, same category) │
├─────────────────────────────────────────┤
│  FOOTER                                  │
└─────────────────────────────────────────┘
```

---

## SEO Implementation — 100%

### 1. Per-Page Metadata (from apps.json)
```js
export async function generateMetadata({ params }) {
  const app = getAppBySlug(params.slug)
  return {
    title: app.metaTitle,
    description: app.metaDescription,
    keywords: app.keywords,
    openGraph: {
      title: app.metaTitle,
      description: app.metaDescription,
      url: `https://allyonomax.com/${app.slug}`,
      siteName: 'AllYonoMax',
      type: 'website',
    },
    alternates: {
      canonical: `https://allyonomax.com/${app.slug}`,
    }
  }
}
```

### 2. Static Generation
```js
export async function generateStaticParams() {
  return apps.map(app => ({ slug: app.slug }))
}
```

### 3. JSON-LD Schema (SoftwareApplication)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Ok Rummy",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Android",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "ratingCount": "1000"
  }
}
```

### 4. FAQ Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ok Rummy safe hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Haan, Ok Rummy ek trusted app hai..."
      }
    }
  ]
}
```

### 5. Auto Sitemap (`src/app/sitemap.js`)
```js
export default function sitemap() {
  const appPages = apps.map(app => ({
    url: `https://allyonomax.com/${app.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))
  return [
    { url: 'https://allyonomax.com', lastModified: new Date(), priority: 1.0 },
    ...appPages
  ]
}
```

### 6. Robots.txt (`src/app/robots.js`)
```js
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://allyonomax.com/sitemap.xml',
  }
}
```

---

## Target Keywords Per App Page

Pattern for every app (replace [app] with app name):
- `[app] apk download`
- `[app] yono apk`
- `[app] refer link`
- `[app] sign up bonus`
- `[app] real money`
- `[app] minimum withdrawal`
- `[app] safe hai ya nahi`
- `[app] download kaise kare 2025`

---

## Important Notes

1. **JavaScript only** — No TypeScript anywhere
2. **Refer links:** Placeholder `#` rakho abhi — baad mein replace karunga `apps.json` mein
3. **Telegram link:** Placeholder rakho — `YOUR_TELEGRAM_LINK` — baad mein update karunga
4. **Domain:** `https://allyonomax.com`
5. **VPS deployment:** `npm run build` + `npm start -p 3000` (PM2 ke saath)
6. **Images:** App icons baad mein add karunga — placeholder use karo abhi
7. **Naya app add karna:** Sirf `apps.json` mein object add karo + `npm run build` — koi aur file nahi chhuni
8. **Footer mein:** Disclaimer text zaroori hai — "This website is for entertainment purposes only. Gambling involves risk."

---

## Build Order

1. `package.json` + `next.config.js` + `tailwind.config.js`
2. `src/lib/apps.json` — 15 sample apps
3. `src/lib/helpers.js` — utility functions
4. `src/app/layout.js` — root layout
5. `src/components/Navbar.js`
6. `src/components/Footer.js`
7. `src/components/AppCard.js`
8. `src/components/SearchBar.js`
9. `src/components/TelegramBanner.js`
10. `src/components/SchemaMarkup.js`
11. `src/app/page.js` — Homepage
12. `src/app/[slug]/page.js` — App page
13. `src/app/sitemap.js`
14. `src/app/robots.js`

**Sabse pehle saari files banao, phir `npm install` aur `npm run dev` karo.**
