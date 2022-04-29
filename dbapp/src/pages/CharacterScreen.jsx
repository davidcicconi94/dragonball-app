import { useParams } from "react-router";
import Character from "../components/Character";
import { Characters } from "../models/Characters";

const CharacterScreen = () => {
  const { id } = useParams();

  const characters = Characters.filter((ch) => ch.id === id);

  return (
    <div className="container mt-3">
      {characters.map((char) => (
        <Character key={char.id} {...char} />
      ))}
    </div>
  );
};

export default CharacterScreen;
