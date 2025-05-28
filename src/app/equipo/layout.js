import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Conoce nuestro equipo | La Company Creativa",
  description:
    "Conoce a nuestro equipo: profesionales apasionados que trabajan juntos para ofrecerte soluciones innovadoras y un servicio excepcional.",
};

export default function TeamPage({ children }) {
  return <PublicLayout page="equipo">{children}</PublicLayout>;
}
