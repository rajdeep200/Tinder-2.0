import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./tinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Tony Stark",
      url:
        "https://i.pinimg.com/originals/e4/f2/77/e4f2770337f41cee4bd3a7d1654ceec3.png",
    },
    {
      name: "Steve Rogers",
      url:
        "https://i.pinimg.com/originals/59/72/f5/5972f5b2f08135cf69b860f20cbc981e.jpg",
    },
  ]);

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
              style={{ backgroundImage: `url(${person.url})` }}
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
