import React from "react";

import Header from "./header";
import Footer from "./footer";
import WhatsAppButton from "./wpp";

export default function PublicLayout({ children, page = "" }) {
  return (
    <>
      {page !== "digital" &&
        page !== "branding" &&
        page !== "real-estate" &&
        page !== "editorial" &&
        page !== "web" && <Header page={page} />}

      {children}
      {page !== "digital" &&
        page !== "branding" &&
        page !== "real-estate" &&
        page !== "editorial" &&
        page !== "web" && <Footer page={page} />}
      <WhatsAppButton />
    </>
  );
}
