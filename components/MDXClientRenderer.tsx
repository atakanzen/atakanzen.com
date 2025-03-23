"use client";

import { useEffect, useState } from "react";

export default function MdxClientRenderer({ slug }: { slug: string }) {
  const [Post, setPost] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    // Dynamically import the MDX file on the client
    import(`@/content/${slug}.mdx`)
      .then((mod) => setPost(() => mod.default))
      .catch((err) => console.error("Failed to load MDX", err));
  }, [slug]);

  if (!Post) {
    return <div>Loading...</div>;
  }

  return <Post />;
}
