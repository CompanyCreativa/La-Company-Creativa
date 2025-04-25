import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Contacto",
  description: "¿Hablamos o seguimos siendo extraños digitales?",
};

export default function ContactPage({ children }) {
  return <PublicLayout page="contacto">{children}</PublicLayout>;
}
