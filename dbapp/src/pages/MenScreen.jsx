import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const MenScreen = () => {
  const men = Characters.filter(({ type }) => type === "h");

  return (
    <div className="container mt-3">
      <h2>Men Characters</h2>
      <hr />

      <div className="row">
        {men.map((man) => (
          <Card key={man.id} {...man} />
        ))}
      </div>
    </div>
  );
};

export default MenScreen;
