import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Agencia de publicidad inmobiliaria ⎪Company Creativa",
  description:
    "En La Company conectamos proyectos inmobiliarios con compradores reales. Estrategia, pauta y creatividad para que tus ventas se muevan.",
};

export default function BrandingPage({ children }) {
  return <PublicLayout page="real-estate">{children}</PublicLayout>;
}
