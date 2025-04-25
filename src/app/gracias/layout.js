import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Gracias",
  description: "Gracias por contactarnos",
  robots: "noindex, nofollow",
}

export default function ThankYouPage({ children }) {
  return <PublicLayout page="gracias">{children}</PublicLayout>;
}
