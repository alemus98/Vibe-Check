import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MOODS, QUERY_ME } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_MOODS);

  return (
    <div>
      <h2 className="welcome">Hello! How are you feeling today?</h2>
      <div className="selectmood">
        <button type="submit" className="happyIcon" onClick="addThought()">
          <img
            src="https://cdn-icons-png.flaticon.com/512/187/187159.png"
            height="150"
            width="150"
          ></img>
        </button>

        <button className="madIcon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/260/260171.png"
            height="150"
            width="150"
          ></img>
        </button>

        <button className="sadIcon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2164/2164329.png"
            height="150"
            width="150"
          ></img>
        </button>

        <button className="scaredIcon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2341/2341880.png"
            height="150"
            width="150"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default Home;
