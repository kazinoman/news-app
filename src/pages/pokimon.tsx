import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { PokimonResponse, Pokimon } from "@/models/pokimon";

interface Res {
  data: Pokimon[];
}
const PokimonCom: React.FC<Res> = ({ data }: Res): JSX.Element => {
  console.log(data);
  return (
    <>
      <h1>Pokimon Items</h1>
      {data.map((data) => (
        <p>{data.id}</p>
      ))}
    </>
  );
};

export default PokimonCom;

export const getServerSideProps: GetServerSideProps<PokimonResponse> = async () => {
  const res = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10");
  const pokResponse: PokimonResponse = res;
  // console.log(pokResponse);
  return {
    props: {
      data: pokResponse.data,
    },
  };
};
