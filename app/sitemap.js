import { getAllApps } from "@/lib/helpers";

export default function sitemap() {
  const apps = getAllApps();

  // Use a realistic "last content update" date instead of new Date()
  // which would mark ALL pages as freshly modified on every build
  const lastContentUpdate = new Date("2026-03-29");
  const staticPageDate = new Date("2026-03-15");

  const appPages = apps.map((app) => ({
    url: `https://allyonomax.com/${app.slug}`,
    lastModified: lastContentUpdate,
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
      lastModified: lastContentUpdate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...appPages,
    ...staticPages,
  ];
}
