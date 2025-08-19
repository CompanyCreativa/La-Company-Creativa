import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Editorial | La Company Creativa",
  description:
    "Agencia especialista en Pauta Digital en Colombia, experta en campañas que venden. Creamos estrategias digitales en Meta y Google.",
};

export default function EditorialPage({ children }) {
  return <PublicLayout page="editorial">{children}</PublicLayout>;
}
