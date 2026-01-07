export default defineSitemapEventHandler(async () => {
  // const blogRes = await $fetch<any>(
  //   "https://bk.saudiozone.com.sa/api/blog/blog-posts/?page_size=1000",
  //   { headers: { accept: "application/json" } }
  // );
  // const posts = blogRes?.results ?? [];

  const pageRes = await $fetch<any>("https://bk.saudiozone.com.sa/api/pages", {
    headers: { accept: "application/json" },
  });
  const pages = pageRes?.results ?? [];

  return [
    ...pages.flatMap((page: any) => [
      {
        loc: `/${page.slug}`,
        lastmod: page.updated_at || page.created_at,
        changefreq: "monthly",
        priority: 0.6,
        images: page.banner_image_url
          ? [
              {
                loc: page.banner_image_url,
              },
            ]
          : [],
      },

      {
        loc: `/en/${page.slug}`,
        lastmod: page.updated_at || page.created_at,
        changefreq: "monthly",
        priority: 0.6,
        images: page.banner_image_url
          ? [
              {
                loc: page.banner_image_url,
              },
            ]
          : [],
      },
    ]),
  ];
});
