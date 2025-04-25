import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Portafolio",
  description: "Explora nuestras campañas más exitosas.",
};

export default function PortfolioPage({ children }) {
  return <PublicLayout page="portfolio">{children}</PublicLayout>;
}
