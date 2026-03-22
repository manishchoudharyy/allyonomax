import { getAllApps } from "@/lib/helpers";

export default function sitemap() {
  const apps = getAllApps();

  const appPages = apps.map((app) => ({
    url: `https://allyonomax.com/${app.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://allyonomax.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...appPages,
  ];
}
