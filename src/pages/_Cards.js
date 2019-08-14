import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import styled from "styled-components";

const ContainerButton = styled.div`
  display: flex;
  align-items: right;
  justify-content: center;
`;

const FilterButton = styled(Button)`
  background: orange;
  height: 50px;
`;

function Cards({
  inputData,
  onToggleGet,
  showTakenItems,
  onShowTakenItems,
  onDelete
}) {
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
          onDelete={() => onDelete(item._id)}
        />
      </>
    );
  }

  const filteredCards = showTakenItems
    ? inputData.filter(item => item.taken)
    : inputData;

  return (
    <>
      {filteredCards.map(item => renderCard(item))}
      <ContainerButton>
        <FilterButton active={showTakenItems} onClick={onShowTakenItems}>
          See reserved items
        </FilterButton>
      </ContainerButton>
    </>
  );
}

export default Cards;
