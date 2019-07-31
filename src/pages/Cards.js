import React from "react";
import Card from "../components/Card";
import cardsMockData from "./__mock__/cards.json";

function Cards({ inputData }) {
  function renderCard(item) {
    return (
      <Card
        id={item._id}
        name={item.name}
        title={item.title}
        description={item.description}
        location={item.location}
        time={item.time}
      />
    );
  }
  return inputData.map(item => renderCard(item));
}

export default Cards;
