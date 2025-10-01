import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Diseño editorial ⎪La Company Creativa",
  description:
    "En La Company diseñamos publicaciones digitales e impresas con claridad, estilo y estrategia. Haz que tu público sí quiera leer.",
};

export default function EditorialPage({ children }) {
  return <PublicLayout page="editorial">{children}</PublicLayout>;
}
