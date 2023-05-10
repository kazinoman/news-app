import React from "react";
import { Footer, Header } from "@/components";
import { Props } from "./type";

const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-[1200px] mx-auto bg-white z-10 ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
