import { absoluteUrl, sitePages } from "@/lib/site-pages";

export default function sitemap() {
  return sitePages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
