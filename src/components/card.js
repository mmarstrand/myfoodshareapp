import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 2px solid #163a5f;
  padding: 18px;
  border-radius: 20px;
  position: relative;
  margin: 0px 20px 20px 20px;
`;

const StyledTitle = styled.div`
  font-weight: bold;
`;
const StyledName = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  margin-bottom: 0px;
`;

const StyledLocation = styled.div`
  margin-bottom: 5px;
`;
const StyledTime = styled.div``;
const StyledDescriptionItem = styled.li``;

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
  margin-bottom: 0;
  width: 18px;
  height: 18px;
`;

function Card({ name, title, description, location, time, image }) {
  return (
    <>
      <StyledName>
        {name} has {description.length} items for you
      </StyledName>
      <StyledCard>
        <StyledTitle>
          <StyledIcon src="/info.svg" />
          {title}
        </StyledTitle>
        <StyledDescription>
          <ul>
            {description.map(descItem => (
              <StyledDescriptionItem>{descItem}</StyledDescriptionItem>
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
