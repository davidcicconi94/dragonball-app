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
      console.log(characters);
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
      <h2>Search a character</h2>
      <hr />

      <div className="row">
        <div className="col-4">
          <div class="card text-white bg-dark mt-5 text-center">
            <div class="card-body">
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
                <button type="submit" className="btn btn-info mt-4">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-8">
          <h3 className="text-center">Results: {characters.length} </h3>

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
      </div>
    </div>
  );
};

export default SearchScreen;
