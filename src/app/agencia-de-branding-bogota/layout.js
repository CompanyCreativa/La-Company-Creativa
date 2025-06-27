import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Agencia de Branding en Bogotá | La Company Creativa",
  description:
    "En La Company Creativa somos especialistas en branding en Bogotá. Creamos marcas con propósito, diseño estratégico y diferenciación real.",
};

export default function BrandingPage({ children }) {
  return <PublicLayout page="branding">{children}</PublicLayout>;
}
