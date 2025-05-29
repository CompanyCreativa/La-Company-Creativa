// app/blogs/[id]/page.js

// Genera los parámetros estáticos solo para los primeros 10 posts
export async function generateStaticParams() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  if (!res.ok) throw new Error("Error fetching posts");
  const posts = await res.json();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

// Metadata dinámica para SEO
export async function generateMetadata({ params }) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return { title: "Post no encontrado" };
  const post = await res.json();

  return {
    title: post.title,
    description: post.body.substring(0, 150),
  };
}

// Componente React principal
export default async function BlogPage({ params }) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Post no encontrado");
  const post = await res.json();

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg">{post.body}</p>
    </main>
  );
}
