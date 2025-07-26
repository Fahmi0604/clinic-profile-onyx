export const dynamic = "force-dynamic";

import { getBlogsForSitemap } from "@/lib/api";
import { NextResponse } from "next/server";

let cachedSitemap: string | null = null;
let lastFetched = 0;

export async function GET() {
  const now = Date.now();
  const lastMod = new Date().toISOString();

  // Refresh cache every hour
  if (!cachedSitemap || now - lastFetched > 1000 * 60 * 60) {
    try {
      const responseBlog = await getBlogsForSitemap();
      const blogs = responseBlog.data;

      const staticUrls = [
        {
          loc: "https://onyxdentalcenter.id",
          changefreq: "daily",
          priority: 0.7,
          lastmod: lastMod,
        },
        {
          loc: "https://onyxdentalcenter.id/ourteam",
          changefreq: "daily",
          priority: 0.7,
          lastmod: lastMod,
        },
        {
          loc: "https://onyxdentalcenter.id/treatment",
          changefreq: "daily",
          priority: 0.7,
          lastmod: lastMod,
        },
        {
          loc: "https://onyxdentalcenter.id/experience",
          changefreq: "daily",
          priority: 0.7,
          lastmod: lastMod,
        },
        {
          loc: "https://onyxdentalcenter.id/philosophy",
          changefreq: "daily",
          priority: 0.7,
          lastmod: lastMod,
        },
        {
          loc: "https://onyxdentalcenter.id/proven-result",
          changefreq: "daily",
          priority: 0.7,
          lastmod: lastMod,
        },
        // add other static pages here
      ];

      const blogUrls =
        blogs?.map((blog: Post) => ({
          loc: `https://onyxdentalcenter.id/blogs/${blog.slug}`,
          lastmod: lastMod,
          changefreq: "weekly",
          priority: 0.8,
        })) || [];

      const urls: Record<string, string | number>[] = [
        ...staticUrls,
        ...blogUrls,
      ];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map(
            (url) => `
          <url>
            <loc>${url.loc}</loc>
            ${url?.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ""}
            <changefreq>${url.changefreq}</changefreq>
            <priority>${url.priority}</priority>
          </url>`
          )
          .join("")}
      </urlset>`;

      cachedSitemap = sitemap;
      lastFetched = now;
    } catch (error) {
      console.error("Error generating sitemap:", error);
      cachedSitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;
      // return NextResponse.error();
    }
  }

  console.log({
    lastFetched,
    now,
    timeSinceLastFetch: now - lastFetched,
    cachedSitemap,
  });

  return new NextResponse(cachedSitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
