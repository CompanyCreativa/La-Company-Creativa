import React from "react";

import Header from "./header";
import Footer from "./footer";

export default function PublicLayout({ children, page = "" }) {
  return (
    <>
      {page !== "digital" && <Header page={page} />}
      {children}
      {page !== "digital" && <Footer page={page} />}
    </>
  );
}
