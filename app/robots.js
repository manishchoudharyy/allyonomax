export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api", "/downloader"],
      },
    ],
    sitemap: "https://allyonomax.com/sitemap.xml",
  };
}
