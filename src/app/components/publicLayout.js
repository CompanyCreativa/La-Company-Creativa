import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function PublicLayout({ children, page = "" }) {
  return (
    <>
      <Header page={page} />
      {children}
      <Footer />
    </>
  );
}
