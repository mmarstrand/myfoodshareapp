import React from "react";
import Card from "../components/Card";

function Cards({ inputData, onToggleGet }) {
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
          image={item.image}
          taken={item.taken}
          onGet={() => onToggleGet(item._id)}
        />
      </>
    );
  }

  return inputData.map(item => renderCard(item));
}

/*<TextSize size="Medium">Save these items</TextSize>;*/

export default Cards;
