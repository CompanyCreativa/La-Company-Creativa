import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Pautal digital",
  description: "Campañas que venden. Punto.",
};

export default function DigitalPage({ children }) {
  return <PublicLayout page="digital">{children}</PublicLayout>;
}
