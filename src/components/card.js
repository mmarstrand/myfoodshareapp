import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 2px solid #163a5f;
  padding: 18px;
  border-radius: 20px;
  position: relative;
  margin: 20px;
`;

const StyledTitle = styled.div`
  font-weight: bold;
`;

const StyledLocation = styled.div`
  margin-bottom: 5px;
`;
const StyledTime = styled.div``;
const StyledDescriptionItem = styled.li`
  justify-content: flex-start;
  display: flex;
`;

const StyledDescription = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const StyledImage = styled.img`
  align-items: right;
  width: 120px;
  display: flex;
  justify-content: flex-end;
`;

const StyledIcon = styled.img`
  margin-right: 5px;
  width: 18px;
`;

function Card({ title, items, location, time, image }) {
  return (
    <>
      <StyledCard>
        <StyledTitle>
          <StyledIcon src="/info.svg" />
          {title}
        </StyledTitle>
        <StyledDescription>
          <ul>
            {items.map(item => (
              <StyledDescriptionItem>{item}</StyledDescriptionItem>
            ))}
          </ul>
          <StyledImage src="/vegetables.jpg" alt="Food image">
            {image}
          </StyledImage>
        </StyledDescription>
        <StyledLocation>
          <StyledIcon src="/pin.svg" />
          Pick-up location: {location}
        </StyledLocation>
        <StyledTime>
          <StyledIcon src="/clock.svg" />
          Pick-up time: {time}
        </StyledTime>
      </StyledCard>
    </>
  );
}

export default Card;
