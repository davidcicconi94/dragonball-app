import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { Characters } from "../models/Characters";
import Card from "../components/Card";

const SearchScreen = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { q = "" } = queryString.parse(search);

  const [input, setInput] = useState(q);
  const [characters, setCharacters] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`?q=${input}`);
  };

  const getCharacters = () => {
    if (input.trim() !== "") {
      const value = input.toLocaleLowerCase();
      const newValue = Characters.filter((character) =>
        character.name.toLocaleLowerCase().includes(value)
      );

      setCharacters(newValue);
    } else {
      setCharacters([]);
    }
  };

  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  return (
    <div className="container mt-3">
      <h2>Search Characters</h2>
      <hr />

      <div class="card text-white bg-dark mt-5 text-center ">
        <div class="card-body m-4">
          <h5 class="card-title">Find your character!</h5>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mt-4 w-50 m-auto"
              placeholder="Write here..."
              autoComplete="off"
              onChange={handleChange}
              value={input}
            />
            <button type="submit" className="btn btn-outline-light mt-4">
              Search
            </button>
            <button
              onClick={() => {
                navigate("/men");
              }}
              className="btn btn-outline-warning mt-4 mx-2"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
      <h3 className="text-center mt-5">Results: {characters.length} </h3>

      {characters.length === 0 && (
        <div className="alert alert-warning text-center mt-4">
          Character not found :(
        </div>
      )}

      <div className="row">
        {characters.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
