import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Equipo",
  description: "Conoce a nuestro equipo de trabajo",
  robots: "noindex, nofollow",
}

export default function TeamPage({ children }) {
  return <PublicLayout page="equipo">{children}</PublicLayout>;
}
