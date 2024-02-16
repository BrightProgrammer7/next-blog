"use-client";

// import { usePreview } from "@/lib/sanity.preview";
import BlogList from "./BlogList";
import { client } from "@/lib/client";

type Props = {
  query: string;
};


export default async function PreviewBlogList({ query }: Props) {
  // const posts = usePreview(null, query);
  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
}
