import React from "react";
import Card from "../components/Card";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const StyledBackButton = styled(Button)``;
const ContainerButton = styled.div`
  display: flex;
  align-items: right;
  justify-content: center;
`;

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

  return (
    <>
      {ReservedFoodItems.map(item => renderCard(item))}
      <Link to="/marketplace">
        <ContainerButton>
          <StyledBackButton>Back to marketplace</StyledBackButton>
        </ContainerButton>
      </Link>
    </>
  );
}

export default Basket;
