import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import styled from "styled-components";
import Header from "../components/Header";
import { ContentContainer } from "../components/ContentContainer";
import SearchBar from "../components/SearchBar";
import PropTypes from "prop-types";

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const FilterButton = styled(Button)`
  border: white;
  background: #21aba5;
  height: 50px;
  color: white;
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
      <Card
        key={item._id}
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
    );
  }

  const filteredTakenCards = showTakenItems
    ? filteredCards.filter(item => !item.taken)
    : filteredCards;

  return (
    <>
      <Header title="Marketpl" title2="ce" />
      <ContentContainer>
        <SearchBar inputData={inputData} searchOutput={handleOutput} />
        {filteredTakenCards.map(item => renderCard(item))}
        <ContainerButton>
          <FilterButton active={showTakenItems} onClick={onShowTakenItems}>
            {showTakenItems ? "Remove filter" : "Show only available"}
          </FilterButton>
        </ContainerButton>
      </ContentContainer>
    </>
  );
}

Cards.propTypes = {
  onClick: PropTypes.func,
  onToogleGet: PropTypes.func,
  onDelete: PropTypes.func,
  showTakenItems: PropTypes.bool,
  filteredTakenCards: PropTypes.func
};

export default Cards;
