import React, { useEffect } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-5 flex flex-row gap-5 bg-slate-800 text-white">
      <Link href="/">
        <h2>News App</h2>
      </Link>
      <Link href="/search">
        <h2>Search</h2>
      </Link>
    </div>
  );
};

export default Header;
