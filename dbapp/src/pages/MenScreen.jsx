import React from "react";
import { Characters } from "../models/Characters";

const MenScreen = () => {
  const men = Characters.filter(({ type }) => type === "h");
  console.log(men);
  return (
    <div className="container-fluid text-center mt-3">
      <h2>Men Characters</h2>
      <hr />

      <ul>
        {men.map((man) => (
          <li> {man.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default MenScreen;
