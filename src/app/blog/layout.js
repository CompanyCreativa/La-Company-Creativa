import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Nuestros últimos blogs | La Company Creativa",
  description:
    "Mira nuestros últimos blogs y artículos sobre marketing digital, redes sociales, diseño y más.",
};

export default function BlogPage({ children }) {
  return <PublicLayout page="blog">{children}</PublicLayout>;
}
