import React from "react";
import Card from "../components/Card";

function Basket({ inputData }) {
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
        />
      </>
    );
  }

  const ReservedFoodItems = inputData.filter(item => item.taken);

  return <>{ReservedFoodItems.map(item => renderCard(item))};</>;
}

export default Basket;
