import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Blog",
  description: "Aviso de privacidad de la empresa Creativa",
};

export default function PortfolioPage({ children }) {
  return <PublicLayout page="blog">{children}</PublicLayout>;
}
