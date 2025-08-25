import PublicLayout from "../../components/publicLayout";

export const metadata = {
  title: "Conceptos esenciales para entender la pauta digital",
  description:
    "Te explicamos los conceptos clave de la pauta digital en lenguaje claro, con cariño y cero humo. Ideal para marcas que quieren hacer las cosas bien.",
};

export default function BlogPage({ children }) {
  return (
    <PublicLayout page="conceptos-esenciales-para-entender-la-pauta-digital">
      {children}
    </PublicLayout>
  );
}
