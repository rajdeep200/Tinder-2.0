import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./tinderCards.css";
import axios from "../../axios";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/cards");
      setPeople(data)
    };
    fetchData();
  }, []);

  const swiped = (direction, name) => {
    console.log("removing " + name);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinder__cards">
      <div className="card__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
