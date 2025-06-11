import React from "react";

import BlogCard from "../components/blog/blogCard";
import Form from "../components/form";
import Section from "../components/section";
import Breadcrumbs from "../components/breadcrumbs";
import MainContainer from "../components/mainContainer";

import imageBlog1 from "/public/blog/imageblog1.png";
import imageBlog2 from "/public/blog/imageblog2.png";

// Componente principal (marcado como async)
export default async function Page() {
  const posts = [
    {
      title:
        "¿Qué es una estrategia 360 y cómo la aplicamos en La Company Creativa?",
      date: "24 de Julio - 2024",
      image: imageBlog1,
      link: "/blog/que-es-una-estrategia-360-y-como-la-aplicamos-en-la-company-creativa",
    },
    {
      title: "La pauta digital: como llegarle a la gente correcta (sin gritar)",
      date: "09 de Junio - 2025",
      image: imageBlog2,
      link: "/blog/pauta-digital-como-llegarle-a-la-gente-correcta-sin-gritar",
    },
  ];

  return (
    <MainContainer page="blog">
      <main className="min-h-screen">
        <Section>
          <div className="flex flex-col pb-12 lg:pb-24">
            <div className="my-2">
              <Breadcrumbs lastPage="Inicio" currentPage="Blog" />
            </div>
            <h1 className="text-[38px] lg:text-[62px] 2xl:text-[82px] text-center">
              Aquí nuestro equipo escribe <strong>para ti</strong>
            </h1>
            <h2 className="text-[18px] lg:text-[20px] 2xl:text-[20px] text-center mt-4">
              Aquí nuestro equipo escribe para ti. No es solo un blog, es un
              espacio donde compartimos lo que sabemos de publicidad digital,
              branding, estrategia 360 y todo lo que usamos para hacer que las
              marcas brillen. Queremos enseñarte, inspirarte y darte
              herramientas que realmente te sirvan. Desde tips prácticos hasta
              reflexiones creativas, este es contenido de valor hecho por
              quienes viven el marketing todos los días. Si estás buscando
              aprender, entender y aplicar… aquí estás en buen lugar.
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 w-[95%] max-w-[1560px] mx-auto mt-24">
              {posts.map((post) => (
                <BlogCard post={post} key={post.title}/>
              ))}
            </div>
          </div>
        </Section>

        <Form />
      </main>
    </MainContainer>
  );
}
