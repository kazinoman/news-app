import React from "react";
import { Footer, Header } from "@/components";
import { Container } from "@mantine/core";
import { Props } from "./type";

const Layout = ({ children }: Props) => {
  return (
    <div style={{ backgroundColor: "#f3ede3", padding: "0px 0px 0px 0px", maxWidth: "1200px", margin: "0 auto" }} className="font-['Noto Sans']">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
