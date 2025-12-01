export default defineEventHandler(async (event) => {
  // dynamically import so the prerender bundler won't treat "#content/server" as an unresolved package import
  const { serverQueryContent } = await import("#content/server");
  const { SitemapStream, streamToPromise } = await import("sitemap");

  // Fetch all documents
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: "http://localhost:3000",
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: "monthly",
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
