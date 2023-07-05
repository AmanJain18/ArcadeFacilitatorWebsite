import React from "react";

const FacilitatorCard = ({ name, image }) => {
  return (
    <div className="facilitator-card">
      <img
        className="aspect-[1/1]"
        src={image}
        alt={name}
      />
      <h3>{name}</h3>
    </div>
  );
};

export default FacilitatorCard;
