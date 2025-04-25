import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Blog",
  description: "Aviso de privacidad de la empresa Creativa",
  robots: "noindex, nofollow",
};

export default function PortfolioPage({ children }) {
  return <PublicLayout page="blog">{children}</PublicLayout>;
}
