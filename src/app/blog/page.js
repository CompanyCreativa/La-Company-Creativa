import React from "react";
import BlogCard from "../components/blog/blogCard";
import Form from "../components/form";
import Section from "../components/section";
import Breadcrumbs from "../components/breadcrumbs";
import Image from "next/image";
import imagenBlog1 from "/public/blog/imagenblog1.png";

// Componente principal (marcado como async)
export default async function Page() {
  const posts = [
    {
      title:
        "¿Qué es una estrategia 360 y cómo la aplicamos en La Company Creativa?",
      date: "24 de Julio - 2024",
      image: imagenBlog1,
      link: "/blog/que-es-una-estrategia-360-y-como-la-aplicamos-en-la-company-creativa",
    },
  ];

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
              <BlogCard post={post} />
            ))}
          </div>
        </div>
      </Section>

      <Form />
    </main>
  );
}
