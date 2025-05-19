import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Contacto | La Company Creativa",
  description: "¿Hablamos o seguimos siendo extraños digitales?",
};

export default function ContactPage({ children }) {
  return <PublicLayout page="contacto">{children}</PublicLayout>;
}
