import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Nuestro portafolio | Agencia La Company Creativa",
  description: "Explora nuestras campañas más exitosas.",
};

export default function PortfolioPage({ children }) {
  return <PublicLayout page="portfolio">{children}</PublicLayout>;
}
