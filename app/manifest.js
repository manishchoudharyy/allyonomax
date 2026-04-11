export default function manifest() {
  return {
    name: "AllYonoMax — India's #1 Yono Games Hub",
    short_name: "AllYonoMax",
    description:
      "Download top Yono Games apps with maximum bonus and instant withdrawal. India's most trusted gaming hub.",
    start_url: "/",
    display: "standalone",
    background_color: "#EBF4FF",
    theme_color: "#be0000",
    orientation: "portrait",
    categories: ["games", "entertainment"],
    icons: [
      {
        src: "/logo.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "any maskable",
      },
      {
        src: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
