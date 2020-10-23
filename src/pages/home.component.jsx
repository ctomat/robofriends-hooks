import React, { useState, useEffect } from "react";

import CardList from "../components/CardList/CardList.component";
import SearchBox from "../components/SearchBox/SearchBox.component";
import Scroll from "../components/Scroll/Scroll.component";

import "./home.style.scss";

const Home = () => {
  const [robotsFriends, setRobotsFriends] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobotsFriends(users));
  });

  const onSearchChange = (Event) => {
    setSearchfield(Event.target.value);
  };

  const filteredRobots = robotsFriends.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  if (robotsFriends.length === 0) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="home">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
};

export default Home;
