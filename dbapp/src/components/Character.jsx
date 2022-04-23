import React from "react";
import { useNavigate } from "react-router-dom";

const Character = ({ id, name, description, type, race, age, status }) => {
  const navigate = useNavigate();
  const path = `/assets/${type}-${id}.png`;

  return (
    <div className="container row">
      <h2 className="text-center">{name}</h2>
      <hr />
      <div className="col-6 ">
        <div className="card m-5 col-1 col-md-6 p-2 shadow">
          <img src={path} alt="" height="400px" />
        </div>
      </div>
      <div className="col-6 mt-5">
        <div className="card p-4 bg-dark text-white">
          <h5> Name: {name} </h5>
          <h5> Race: {race} </h5>
          <h5> Age: {age} </h5>
          <h5> Description: {description} </h5>
          {status === "Dead" ? (
            <h5 className="text-danger"> Status: {status} </h5>
          ) : (
            <h5 className="text-success"> Status: {status} </h5>
          )}
          <button
            className="btn btn-outline-warning m-auto mt-4"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Character;
