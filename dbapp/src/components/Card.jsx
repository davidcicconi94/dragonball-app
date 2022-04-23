import { useNavigate } from "react-router-dom";

const Card = ({ id, name, description, type }) => {
  const path = `/assets/${type}-${id}.png`;
  const navigate = useNavigate();

  const handleCharacter = () => {
    navigate(`/character/${id}`);
  };

  return (
    <div
      className="card m-3 col-12 col-md-2 p-2 shadow hover-shadow"
      data-toggle="tooltip"
      data-placement="top"
      title="See more..."
    >
      <div className="card-header text-center text-white bg-info ">
        <strong>{name}</strong>
      </div>
      <img
        src={path}
        height="250px"
        alt={`${name}.jpg`}
        className="mt-2"
        onClick={handleCharacter}
      />
      <div className="card-footer mt-4">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
