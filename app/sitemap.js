import { getAllApps } from "@/lib/helpers";

// ISR: Sitemap regenerates when revalidatePath('/sitemap.xml') is called from admin API
export const revalidate = 86400;

export default function sitemap() {
  const apps = getAllApps();

  const staticPageDate = new Date("2026-03-15");

  const appPages = apps.map((app) => ({
    url: `https://allyonomax.com/${app.slug}`,
    // Use app-specific date if stored, else fall back to today so new apps are marked fresh
    lastModified: app.lastModified ? new Date(app.lastModified) : new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const staticPages = [
    {
      url: "https://allyonomax.com/about",
      lastModified: staticPageDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://allyonomax.com/contact",
      lastModified: staticPageDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://allyonomax.com/disclaimer",
      lastModified: staticPageDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://allyonomax.com/privacy-policy",
      lastModified: staticPageDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://allyonomax.com/terms-and-conditions",
      lastModified: staticPageDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  return [
    {
      url: "https://allyonomax.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...appPages,
    ...staticPages,
  ];
}
