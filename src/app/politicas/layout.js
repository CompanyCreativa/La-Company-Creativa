import React from "react";
import PublicLayout from "../components/publicLayout";

export const metadata = { 
  title: "Políticas de Privacidad",
  description: "Aviso de privacidad de la empresa Creativa",
}

export default function PoliticsPage({ children }) {
  return (
    <div>
      <PublicLayout page="politicas">{children}</PublicLayout>
    </div>
  );
}
