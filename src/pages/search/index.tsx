import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

const SearchCom = () => {
  const [inputValue, setInputValue] = React.useState("");
  const router = useRouter();

  // onChange
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission with inputValue
    console.log(inputValue);
    router.push(`search?value=${inputValue}`);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-row gap-3 mt-5">
        <input type="text" className="p-3 rounded-md border border-sky-500 text-2xl" placeholder="e.g. politics, sports,..." onChange={handleInputChange} />
        <button className="p-2 rounded-md bg-sky-700 text-white">Search</button>
      </form>
    </div>
  );
};

export default SearchCom;

export const getServerSideProps: GetServerSideProps<any> = async () => {
  return {
    props: {
      data: "asdf",
    },
  };
};
