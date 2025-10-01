import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Agencia de Desarrollo Web | La Company Creativa",
  description:
    "Agencia especialista en Pauta Digital en Colombia, experta en campañas que venden. Creamos estrategias digitales en Meta y Google.",
};

export default function DigitalPage({ children }) {
  return <PublicLayout page="web">{children}</PublicLayout>;
}
