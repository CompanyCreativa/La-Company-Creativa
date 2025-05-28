import React from "react";
import PublicLayout from "../components/publicLayout";

export const metadata = {
  title: "Políticas de privacidad | La Company Creativa",
  description:
    "Consulta nuestra Política de Privacidad para conocer cómo recopilamos, usamos y protegemos tus datos personales al interactuar con nuestro sitio web.",
};

export default function PoliticsPage({ children }) {
  return (
    <div>
      <PublicLayout page="politicas">{children}</PublicLayout>
    </div>
  );
}
