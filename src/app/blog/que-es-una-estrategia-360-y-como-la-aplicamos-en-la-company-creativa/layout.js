import PublicLayout from "../../components/publicLayout";

export const metadata = {
  title:
    "¿Qué es una estrategia 360 en La Company?",
  description:
    "Descubre qué es una estrategia 360 (de verdad) y como la convertimos en ideas con sentido en La Company Creativa. Y no, no es solo hacer “de todo un poquito”.",
};

export default function BlogPage({ children }) {
  return (
    <PublicLayout page="que-es-una-estrategia-360-y-como-la-aplicamos-en-la-company-creativa">
      {children}
    </PublicLayout>
  );
}
