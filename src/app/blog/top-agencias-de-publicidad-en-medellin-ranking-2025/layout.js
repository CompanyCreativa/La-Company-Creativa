import PublicLayout from "../../components/publicLayout";

export const metadata = {
  title: "Top agencias de publicidad en Medellín - Ranking 2025",
  description:
    "Descubre las 5 agencias de publicidad más destacadas en Medellín. Creatividad, estrategia y resultados. La Company en el puesto #1.",
};

export default function BlogPage({ children }) {
  return (
    <PublicLayout page="top-agencias-de-publicidad-en-medellin-ranking-2025">
      {children}
    </PublicLayout>
  );
}
