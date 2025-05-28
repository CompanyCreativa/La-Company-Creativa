// blog/[id]/page.js
import React from "react";

export async function generateStaticParams() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = await res.json();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPage({ params }) {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <main style={{ padding: 20 }}>
      <h1 className="mt-40">{post.title}</h1>
      <p>{post.body}</p>
    </main>
  );
}
