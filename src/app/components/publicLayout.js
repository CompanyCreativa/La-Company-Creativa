import React from "react";

import Header from "./header";
import Footer from "./footer";

export default function PublicLayout({ children, page = "" }) {
  return (
    <>
      {page !== "digital" && page !== "branding" && <Header page={page} />}
      {children}
      {page !== "digital" && page !== "branding" && <Footer page={page} />}
    </>
  );
}
