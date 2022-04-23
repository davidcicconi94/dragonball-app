import React from "react";
import { Characters } from "../models/Characters";
import Card from "../components/Card";
import "./women.css";

const WomenScreen = () => {
  const women = Characters.filter(({ type }) => type === "m");
  return (
    <div className="container mt-3">
      <h2 className="wm-color">Women Characters</h2>
      <hr />

      <div className="row ">
        {women.map((woman) => (
          <Card key={woman.id} {...woman} />
        ))}
      </div>
    </div>
  );
};

export default WomenScreen;
