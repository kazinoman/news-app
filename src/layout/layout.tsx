import React from "react";
import { Footer, Header } from "@/components";
import { Props } from "./type";

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
