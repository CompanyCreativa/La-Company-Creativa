import PublicLayout from "../../components/publicLayout";

export const metadata = {
  title: "Agencia de branding: cómo elegir la ideal para tu marca",
  description:
    "Descubre qué hace una agencia de branding, cómo trabaja y por qué puede ser clave para construir marcas que conectan.",
};

export default function BlogPage({ children }) {
  return (
    <PublicLayout page="agencia-de-branding-lo-que-realmente-hace-y-por-que-tu-marca-la-necesita">
      {children}
    </PublicLayout>
  );
}
