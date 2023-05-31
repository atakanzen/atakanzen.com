import { getAllPosts } from "@/lib/mdx";
import { GetServerSideProps } from "next";
import { Post } from "./blog";

function generateSiteMap(posts: Post[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://atakanzen.com</loc>
     </url>
     <url>
       <loc>https://atakanzen.com/contact</loc>
     </url>
     <url>
       <loc>https://atakanzen.com/my-journey</loc>
     </url>
     <url>
       <loc>https://atakanzen.com/blog</loc>
     </url>
     ${posts
       .map((p) => {
         return `
       <url>
           <loc>https://atakanzen.com/blog/${p.path}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = getAllPosts();

  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
