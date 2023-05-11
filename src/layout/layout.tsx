import React from "react";
import { Footer, Header } from "@/components";
import { Container } from "@mantine/core";
import { Props } from "./type";

const Layout = ({ children }: Props) => {
  return (
    <div style={{ backgroundColor: "#fff", padding: "0px 0px 0px 0px", maxWidth: "1200px", margin: "0 auto" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
