import React from "react";

import "./Card.style.scss";

const Card = ({ idRobots, nameRobots, usernameRobots, emailRobots }) => {
  return (
    <div className="card">
      <img
        className="image-robot"
        src={`https://robohash.org/${idRobots}`}
        alt="robot"
      />
      <div>
        <h2>{nameRobots}</h2>
        <p>{emailRobots}</p>
      </div>
    </div>
  );
};

export default Card;
