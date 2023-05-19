import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useParams, usePathname } from "next/navigation";

const Header = (): JSX.Element => {
  const router = useRouter();
  // const p = usePathname();
  const [selectedValue, setSelectedValue] = useState<string | null>("");

  const data = [
    { value: "business", label: "business" },
    { value: "entertainment", label: "entertainment" },
    { value: "general", label: "general" },
    { value: "health", label: "health" },
    { value: "science", label: "science" },
    { value: "sports", label: "sports" },
    { value: "technology", label: "technology" },
  ];

  /**
   *  you need to make sure that the value passed to the value property is always a string or a number.
   * One way to achieve this is to use the nullish coalescing operator (??)
   * to provide a default value when the value is null.
   */
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    router.push(`/category-news-page/${event.target.value}`);
  };

  const stringValue: string = selectedValue ?? "";
  return (
    <div
      className="py-5 bg-[#333c50] text-white px-3 "
      style={{
        backgroundColor: "#A9C9FF",
        backgroundImage: "radial-gradient( circle 815px at 23.4% -21.8%,  rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2% )",
      }}
    >
      <div className="flex-row gap-5 text-white items-center px-3 hidden sm:flex">
        <Link href="/">
          <h2 className="text-lg font-medium hover:text-slate-300">Home</h2>
        </Link>
        <Link href="/search">
          <h2 className="text-lg font-medium hover:text-slate-300">Search</h2>
        </Link>
        <select value={stringValue} onChange={handleChange} className=" bg-gray-100 border rounded py-2 px-4 mt-1 text-black font-medium">
          <option value="" disabled className=" p-5 mt-4">
            Select an option
          </option>
          {data.map((data) => {
            return (
              <>
                <option value={data.value} key={data.value} className="  p-5 mt-4">
                  {data.label}
                </option>
              </>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Header;
