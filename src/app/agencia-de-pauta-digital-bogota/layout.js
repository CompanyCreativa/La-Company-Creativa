import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Pauta Digital Bogotá | La Company Creativa",
  description:
    "Agencia especialista en Pauta Digital en Bogotá, experta en campañas que venden. Creamos estrategias digitales en Meta y Google.",
};

export default function DigitalPage({ children }) {
  return <PublicLayout page="digital">{children}</PublicLayout>;
}
