import React from "react";
import Card from "../components/Card";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ContentContainer } from "../components/ContentContainer";
import TextSize from "../components/TextSize";

const StyledBackButton = styled(Button)``;
const ContainerButton = styled.div`
  display: flex;
  align-items: right;
  justify-content: center;
`;

const StyledHeadline = styled(TextSize)`
  display: flex;
  margin: 10px 20px 10px 20px;
  align-items: right;
  justify-content: center;
`;

function Basket({ inputData, onDelete }) {
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
          onDelete={() => onDelete(item._id)}
        />
      </>
    );
  }

  const ReservedFoodItems = inputData.filter(item => item.taken);

  return (
    <>
      <Header title="Your b" title2="sket" />
      <ContentContainer>
        <StyledHeadline size="Large">
          Thanks for saving these items!
        </StyledHeadline>
        {ReservedFoodItems.map(item => renderCard(item))}
        <Link to="/marketplace">
          <ContainerButton>
            <StyledBackButton>Back to marketplace</StyledBackButton>
          </ContainerButton>
        </Link>
      </ContentContainer>
    </>
  );
}

export default Basket;
