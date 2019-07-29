import React from "react";
import styled from "styled-components";
import { Props } from "docz";

const StyledCard = styled.div`
  border: 2px solid #163a5f;
  padding: 18px;
  border-radius: 20px;
  position: relative;
`;

const StyledDescription = styled.div``;
const StyledLocation = styled.div``;
const StyledTime = styled.div``;
const StyledDescriptionItem = styled.li``;

const StyledImage = styled.img`
  align-items: right;
  width: 120px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

function Card({ description, items, location, time }) {
  return (
    <StyledCard>
      <StyledDescription>{description}</StyledDescription>
      <ul>
        {items.map(item => (
          <StyledDescriptionItem>{item}</StyledDescriptionItem>
        ))}
        <StyledImage
          src="https://www.cdc.gov/foodsafety/images/comms/GettyImages-898001644-300px.png"
          alt="Food image"
        />
      </ul>

      <StyledLocation>Pick-up location: {location}</StyledLocation>
      <StyledTime>Pick-up time: {time}</StyledTime>
    </StyledCard>
  );
}

export default Card;
