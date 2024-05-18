import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonBackToCard = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/card");
  };
  return (
    <div>
      <button onClick={handleNavigate} className="btn btn-warning">
        Back
      </button>
    </div>
  );
};

export default ButtonBackToCard;
