import React from "react";

import Header from "./header";
import Footer from "./footer";

export default function PublicLayout({ children, page = "" }) {
  return (
    <>
      {page !== "digital" && page !== "branding" && page !== "real-estate" && (
        <Header page={page} />
      )}
      {children}
      {page !== "digital" && page !== "branding" && page !== "real-estate" && (
        <Footer page={page} />
      )}
    </>
  );
}
