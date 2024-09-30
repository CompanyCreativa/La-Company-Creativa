import React from "react";
import PublicLayout from "../components/publicLayout";

export default function PoliticsPage({ children }) {
  return (
    <div>
      <PublicLayout page="politicas">{children}</PublicLayout>
    </div>
  );
}
