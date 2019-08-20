import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import styled from "styled-components";
import Header from "../components/Header";
import { ContentContainer } from "../components/ContentContainer";
import SearchBar from "../components/SearchBar";

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
  const [filteredCards, setFilteredCards] = React.useState([]);

  function handleOutput(array) {
    setFilteredCards(array);
  }

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

  // const AllCards = showTakenItems
  //   ? inputData.filter(item => item.taken)
  //   : inputData;

  return (
    <>
      <Header title="Marketpl" title2="ce" />

      <ContentContainer>
        <SearchBar inputData={inputData} searchOutput={handleOutput} />
        {filteredCards.map(item => renderCard(item))}
        <ContainerButton>
          <FilterButton active={showTakenItems} onClick={onShowTakenItems}>
            See reserved items
          </FilterButton>
        </ContainerButton>
      </ContentContainer>
    </>
  );
}

export default Cards;
