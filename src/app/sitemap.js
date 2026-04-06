export default function sitemap() {
  const base = "https://studiodimartino.eu";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
  ];
}