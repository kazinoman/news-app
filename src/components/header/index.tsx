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
    <div className="py-5 flex flex-row gap-5 bg-zinc-500 text-white items-center">
      <Link href="/">
        <h2>News App</h2>
      </Link>
      <Link href="/search">
        <h2>Search</h2>
      </Link>
      <select value={stringValue} onChange={handleChange} className="bg-slate-500 p-2 rounded-md">
        <option value="" disabled>
          Select an option
        </option>
        {data.map((data) => {
          return (
            <>
              <option value={data.value} key={data.value}>
                {data.label}
              </option>
            </>
          );
        })}
      </select>
    </div>
  );
};

export default Header;
