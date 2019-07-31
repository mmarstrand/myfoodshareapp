import React from "react";
import Card from "../components/Card";
import TextSize from "../components/TextSize";

function Cards({ inputData }) {
  function renderCard(item) {
    return (
      <>
        <Card
          id={item._id}
          name={item.name}
          title={item.title}
          description={item.description}
          location={item.location}
          time={item.time}
        />
      </>
    );
  }

  return inputData.map(item => renderCard(item));
}

/*<TextSize size="Medium">Save these items</TextSize>;*/

export default Cards;
