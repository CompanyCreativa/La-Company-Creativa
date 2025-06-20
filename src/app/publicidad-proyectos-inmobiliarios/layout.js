import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Agencia de Branding | La Company Creativa",
  description:
    "Agencia especialista en Pauta Digital en Colombia, experta en campañas que venden. Creamos estrategias digitales en Meta y Google.",
};

export default function BrandingPage({ children }) {
  return <PublicLayout page="proyectos-inmobiliarios">{children}</PublicLayout>;
}
