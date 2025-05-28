// blog/page.js
import Link from "next/link";

async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  if (!res.ok) throw new Error("Error fetching posts");
  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = await res.json();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main style={{ padding: 20 }}>
      <h1 className="mt-40">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
