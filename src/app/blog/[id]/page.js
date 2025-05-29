export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return {
    title: post.title,
    description: post.body.substring(0, 150), // corta a 150 caracteres para meta
  };
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
