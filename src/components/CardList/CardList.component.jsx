import React from "react";

import Card from "../Card/Card.component";

import "./CardList.style.scss";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, index) => {
    return (
      <Card
        key={index}
        idRobots={robots[index].id}
        nameRobots={robots[index].name}
        usernameRobots={robots[index].username}
        emailRobots={robots[index].email}
      />
    );
  });
  return (
    <div className="card-list">
      <div className="card-list-element">{cardComponent}</div>
    </div>
  );
};

export default CardList;
