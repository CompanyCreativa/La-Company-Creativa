import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Agencia de Publicidad en Medellín | La Company Creativa",
  description:
    "Agencia de publicidad en medellín que conecta ideas con resultados. Estrategia, diseño, contenido y pauta digital con impacto real.",
};

export default function DigitalPage({ children }) {
  return <PublicLayout page="digital">{children}</PublicLayout>;
}
