import React from "react";
import Card from "../components/Card";
import cardsMockData from "./__mock__/cards.json";

function Cards() {
  const [cards, setCards] = React.useState(cardsMockData);
  console.log(cards);
  function renderCard(cards) {
    return (
      <Card
        id={cards._id}
        title={cards.title}
        items={cards.items}
        location={cards.location}
        time={cards.time}
      />
    );
  }
  return cards.map(item => renderCard(item));
}

export default Cards;
