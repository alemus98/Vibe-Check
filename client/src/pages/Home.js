import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MOODS, QUERY_ME } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_MOODS);

  return <div></div>;
};

export default Home;
