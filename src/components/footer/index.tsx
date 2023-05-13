import React from "react";

const Footer = () => {
  return (
    <div
      className="py-5 mt-5 h-[10rem] flex flex-row items-center justify-center text-white"
      style={{
        backgroundColor: "#A9C9FF",
        backgroundImage: "radial-gradient( circle 815px at 23.4% -21.8%,  rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2% )",
      }}
    >
      <p className="font-medium text-lg">&copy; {new Date().getFullYear()} Abdullah al noman. All rights reserved.</p>
    </div>
  );
};

export default Footer;
