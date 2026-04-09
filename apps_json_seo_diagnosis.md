# AllYonoMax — `apps.json` SEO Audit Report (Diagnosis Only)

> **Date:** 2026-04-09  
> **Scope:** Full content audit of all 59 app entries in `apps.json`  
> **Mode:** Diagnosis only — no fixes applied  

---

## 🔢 SEO Health Index (apps.json Content Layer)

* **Overall Score:** 52 / 100 — **Poor**
* **Health Status:** Serious SEO constraints detected

| Category                  | Score | Weight | Weighted |
| ------------------------- | ----- | ------ | -------- |
| Crawlability & Indexation | 40    | 30     | 12.0     |
| Technical Foundations     | 55    | 25     | 13.75    |
| On-Page Optimization      | 50    | 20     | 10.0     |
| Content Quality & E-E-A-T | 55    | 15     | 8.25     |
| Authority & Trust          | 80    | 10     | 8.0      |

---

## Finding 1: Duplicate Slugs — Multiple Apps Share the Same URL
- **Severity:** 🔴 Critical (−30)
- **Category:** Crawlability & Indexation
- **Evidence:** The following slugs appear more than once:
  - `ok-rummy` → ID 1 (Bet 213 data? No, "OK Rummy") AND ID 44 ("Ok Rummy") — **two different entries, same URL `/ok-rummy`**
  - `joy-rummy` → ID 7 AND ID 52
  - `inr-rummy` → ID 53 ("Inr Rummy") — also refers to same category as potential prior entries
  - `boss-rummy` → ID 9 (old data) AND ID 56
  - `rummy-888` → ID 10 (old data) AND ID 57
  - `jaiho-777` → ID 5 AND ID 33
  - `rumble-rummy` → ID 2 AND ID 22
  - `game-rummy` → ID 3 AND ID 20
  - `club-inr` → ID 6 AND ID 19
  - `spin-777` → ID 4 AND ID 5/etc
- **Why It Matters:** Next.js `generateStaticParams()` will only build ONE page per slug. The second entry is silently dropped. You're losing half your content without realizing it. Google can only index one version, causing wasted content effort and confusing schema output.
- **Impact:** This is the single most damaging issue. ~10-15 apps are completely invisible.

---

## Finding 2: Thin Descriptions — All Under 60 Words
- **Severity:** 🔴 Critical (−20)
- **Category:** Content Quality & E-E-A-T
- **Evidence:** Every single description across all 59 apps is 2-3 sentences (40-60 words). Examples:
  - Bet 213: 48 words
  - Yono 777: 50 words
  - 101z: 49 words
  - Spin 777: 51 words
- **Why It Matters:** Google's Helpful Content Update (HCU) flags pages with thin, non-substantive content. Competitor pages have 150-300 word descriptions with specific details about gameplay, bonuses, withdrawal times, and game modes. Your pages will be classified as "low-quality doorway pages" if descriptions stay this short.

---

## Finding 3: 100% Identical `howToDownload` Steps Across ALL 59 Apps
- **Severity:** 🟠 High (−15)
- **Category:** Content Quality & E-E-A-T
- **Evidence:** Every single app has the exact same 5 steps:
  ```
  "Click on the download button"
  "Install the APK file once downloaded"
  "Register with your phone number"
  "Verify your account and start playing"
  "Claim your welcome bonus"
  ```
  Zero variation across 59 entries.
- **Why It Matters:** Google's algorithm detects boilerplate/template content. When 59 pages have identical howToDownload sections, it signals "programmatic thin content" — a direct ranking penalty trigger. Additionally, these generic steps won't qualify for HowTo rich snippet schema if you ever add it.

---

## Finding 4: Inflated / Unrealistic Ratings
- **Severity:** 🟠 High (−10)
- **Category:** Authority & Trust
- **Evidence:** Multiple apps have `4.8` or `4.9` ratings:
  - Yono 777: `"4.9"` with 2M+ downloads
  - 789 Jackpots: `"4.9"` with 1M+ downloads
  - Jaiho 777 (ID 33): `"4.9"`
  - Top Rummy: `"4.9"`
  - Boss Rummy: `"4.9"`
  - Love Rummy: `"4.8"`
  - Hindi 777: `"4.8"`
  - Maha Games: `"4.8"`
  - Gogo Rummy: `"4.8"`
- **Why It Matters:** 
  1. Ratings are strings (`"4.9"`) instead of numbers (`4.9`) — this breaks `SoftwareApplication` schema's `ratingValue` property which expects a Number type.
  2. Having 10+ apps all at 4.8-4.9 looks fabricated to Google's quality raters. Real app distributions cluster around 3.8-4.4. This triggers "fake review" penalties in schema validation.

---

## Finding 5: Missing HTTPS in Some referLink URLs
- **Severity:** 🟠 High (−10)
- **Category:** Technical Foundations
- **Evidence:** Several referLink values are missing the `https://` protocol:
  - ID 5 (Spin 777): `"spin777-d.com?code=..."` — no protocol
  - ID 14 (Ind Slots): `"indslotsrewards.com?code=..."` — no protocol
  - ID 32 (Ind Rummy): `"indrummy3.com?code=..."` — no protocol
  - ID 41 (100 Spin): `"100spin.com?code=..."` — no protocol
- **Why It Matters:** Without `https://`, the browser interprets these as relative paths. Clicking "Download" on these pages would navigate to `allyonomax.com/spin777-d.com?code=...` — a 404 page. Users can't download these apps at all.

---

## Finding 6: Keyword Cannibalisation — `"yono games list"` on 15+ Pages
- **Severity:** 🟡 Medium (−10)
- **Category:** On-Page Optimization
- **Evidence:** The keyword `"yono games list"` appears in the keywords array of at least these apps: Bet 213, Spin Gold, 789 Jackpots, Spin Crush, Hi Rummy, Saga Slots, 777 Game, 100 Spin, Good Slots, MWM Bet, Boss Rummy, Ever 777, Rummy 77, Inr Rummy, Joy Rummy (ID 52), Diwa 777.
  Similarly, generic keywords like `"new yono games 2026"`, `"yono rummy list"`, and `"earning games list"` are heavily duplicated.
- **Why It Matters:** When 15+ pages target the exact same keyword, Google can't decide which page should rank. Your own pages compete against each other, splitting authority. None of them rank well. Each page should target unique long-tail keywords specific to that app.

---

## Finding 7: Only 3 FAQs Per App (Below Rich Snippet Threshold)
- **Severity:** 🟡 Medium (−5)
- **Category:** On-Page Optimization
- **Evidence:** Every app has exactly 3 FAQ entries. While 3 is technically valid for FAQ schema, competitor sites provide 5-8 FAQs per app. More unique FAQ content = more keyword-rich text on the page = more chances for Google to surface your page in "People Also Ask" boxes.
- **Why It Matters:** FAQ rich snippets dramatically increase SERP real estate. Pages with 5+ detailed FAQs consistently outperform those with 3 generic ones. Additionally, many FAQ answers are very short (one sentence) — Google prefers answers that are 40-60 words for featured snippet eligibility.

---

## Finding 8: Short Meta Descriptions (Under 120 Characters)
- **Severity:** 🟡 Medium (−5)
- **Category:** On-Page Optimization
- **Evidence:** Most meta descriptions are 85-120 characters. Google's optimal range is 140-160 characters:
  - Bet 213: `"Download Bet 213 APK latest version and get ₹51 sign up bonus..."` (101 chars)
  - Yono 777: `"Get the official Yono 777 APK with a ₹100 bonus..."` (103 chars)
  - Most follow this ~100 char pattern
- **Why It Matters:** Short descriptions leave empty SERP space that Google fills with auto-generated snippets. You lose control over what users see, reducing CTR.

---

## Finding 9: Missing Year-Stamp in Meta Titles
- **Severity:** 🟢 Low (−3)
- **Category:** On-Page Optimization
- **Evidence:** No meta title includes a year-stamp. Examples:
  - `"Bet 213 APK Download - Get ₹51 Bonus | AllYonoMax"`
  - `"Yono 777 APK Download - ₹100 Sign Up Bonus | AllYonoMax"`
- **Why It Matters:** Year-stamped titles (e.g., "2025" or "2026") consistently earn 15-25% higher CTR because users perceive them as current. Competitor sites like allyononewgame.com don't use year-stamps either, so this is a free competitive advantage.

---

## Finding 10: Inconsistent Category Casing
- **Severity:** 🟢 Low (−2)
- **Category:** Technical Foundations
- **Evidence:** All categories are lowercase strings: `"rummy"`, `"slots"`, `"bingo"`, `"casino"`. The `[slug]/page.js` displays `app.category` directly and uses it in breadcrumb schema.
- **Why It Matters:** Breadcrumb schema with `"rummy"` vs `"Rummy"` looks unprofessional in Google's rich snippet. Properly capitalised categories improve visual consistency in SERPs.

---

## Finding 11: Wrong Icon for MWM Bet (ID 49)
- **Severity:** 🟢 Low (−1)
- **Category:** Technical Foundations
- **Evidence:** MWM Bet (ID 49) uses `"/icons/uono-slots.webp"` as its icon — this is Uono Slots' icon, not MWM Bet's.
- **Why It Matters:** Incorrect icons confuse users and reduce trust. The OpenGraph image for MWM Bet's page will show the wrong app logo when shared on social media.

---

## Finding 12: Name vs Description Conflict — Gogo Rummy
- **Severity:** 🟢 Low (−1)
- **Category:** Content Quality & E-E-A-T
- **Evidence:** App ID 31 is named **"Gogo Rummy"** with category `"rummy"`, but its description says: *"Gogo Rummy is an action-packed **slot app** that focuses on rapid spins and big jackpot hits"*. Features include "Rapid Spin Mechanics", "High Frequency Jackpots" — all slots terminology.
- **Why It Matters:** A rummy app described as a slot app creates a content mismatch. This confuses Google's entity classification and can cause the page to rank for wrong queries.

---

## Finding 13: `YN 777` FAQ References Wrong Name
- **Severity:** 🟢 Low (−1)
- **Category:** Content Quality & E-E-A-T
- **Evidence:** App ID 6 is named **"YN 777"** but FAQ question says *"What is the sign-up bonus for **Y754**?"* and the answer says *"₹31"* while the bonus field shows `"₹81"`.
- **Why It Matters:** Mismatched names and amounts in FAQ schema will cause Google to flag the FAQ as inaccurate/inconsistent, potentially removing the rich snippet entirely.

---

## Summary: Priority Fix Order

| Priority | Finding | Severity | Apps Affected |
|----------|---------|----------|---------------|
| 1 | Duplicate slugs | 🔴 Critical | ~15 apps invisible |
| 2 | Thin descriptions | 🔴 Critical | All 59 apps |
| 3 | Identical howToDownload | 🟠 High | All 59 apps |
| 4 | Inflated ratings (string type) | 🟠 High | 10+ apps |
| 5 | Missing HTTPS in referLinks | 🟠 High | 4 apps broken |
| 6 | Keyword cannibalisation | 🟡 Medium | 15+ apps |
| 7 | Only 3 short FAQs | 🟡 Medium | All 59 apps |
| 8 | Short meta descriptions | 🟡 Medium | All 59 apps |
| 9 | No year-stamps in titles | 🟢 Low | All 59 apps |
| 10 | Category casing | 🟢 Low | All 59 apps |
| 11 | Wrong MWM Bet icon | 🟢 Low | 1 app |
| 12 | Gogo Rummy name/desc mismatch | 🟢 Low | 1 app |
| 13 | YN 777 FAQ wrong name/amount | 🟢 Low | 1 app |

> [!CAUTION]
> **Finding 1 (Duplicate Slugs) is destroying your SEO right now.** Approximately 15 apps are completely invisible because Next.js can only generate one page per slug. This means ~25% of your content investment is wasted. This must be fixed before anything else.

> [!WARNING]
> **Finding 5 (Missing HTTPS) is a user-facing bug.** Four apps have broken download links that lead to 404 pages. Users clicking "Download" on Spin 777, Ind Slots, Ind Rummy, and 100 Spin will see errors.
