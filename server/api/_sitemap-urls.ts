import stories from "@/data/stories";
import articles from "@/data/articles";

export default cachedEventHandler(
  async () => {
    const config = useRuntimeConfig();
    const siteUrl = config.public.siteUrl;


    const publicStories = stories.filter((s) => !s.neededSubscription);

    return [...publicStories, ...articles].map((p) => {
      return { loc: `${siteUrl}${p.href}`, lastmod: p.updatedAt};
    });
  },
  {
    name: "sitemap-dynamic-urls",
    maxAge: 60 * 10, // cache URLs for 10 minutes
  }
);
