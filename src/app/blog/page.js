import React from "react";
import BlogCard from "../components/blog/blogCard";
import Form from "../components/form";
import Section from "../components/section";
import Breadcrumbs from "../components/breadcrumbs";
import Link from "next/link";

// Función para traer posts
async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  if (!res.ok) throw new Error("Error fetching posts");
  return res.json();
}

// Componente principal (marcado como async)
export default async function Page() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen">
      <Section>
        <div className="flex flex-col mt-[120px] lg:mt-[110px] pb-12 lg:pb-24">
          <div className="mb-10">
            <Breadcrumbs lastPage="Inicio" currentPage="Blog" />
          </div>
          <h1 className="text-[38px] lg:text-[62px] 2xl:text-[82px] text-center">
            Aquí nuestro equipo escribe <strong>para ti</strong>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 w-[95%] max-w-[1560px] mx-auto mt-24">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.id}`}
                key={post.id}
                className="no-underline"
              >
                <BlogCard post={post} />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Form />
    </main>
  );
}
