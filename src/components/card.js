import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledCard = styled.div`
  border: 2px solid #163a5f;
  padding: 18px;
  border-radius: 20px;
  position: relative;
  margin: 0px 20px 20px 20px;
  background-color: ${props => (props.active ? "#E3EEED" : "white")};
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
  max-height: 120px;
  display: flex;
  justify-content: flex-end;
  border-radius: 20px;
  opacity: 60%;
`;

const StyledIcon = styled.img`
  margin-right: 5px;
  margin-bottom: 0;
  width: 18px;
  height: 18px;
`;

const StyledIconTrashCan = styled.i`
  margin-right: 5px;

  align-items: center;
`;

const StyledGetButton = styled(Button)`
  margin-top: 10px;
  background-color: ${props => (props.active ? "Orange" : "#45eba5")};
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonDeleteDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 14px;
`;

const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
};

function Card({
  name,
  title,
  description,
  location,
  time,
  image,
  taken,
  onGet,
  onDelete,
  ...props
}) {
  function HandleDate() {
    return new Date().toLocaleDateString("en-US", options);
  }
  return (
    <>
      <StyledName>
        {name} has {description.length} items for you
      </StyledName>
      <StyledCard {...props} active={taken}>
        <StyledTitle>
          <StyledIcon src="/info.svg" />
          {title}
        </StyledTitle>
        <StyledDescription>
          <ul>
            {description.map((descItem, index) => (
              <StyledDescriptionItem key={descItem + index}>
                {descItem}
              </StyledDescriptionItem>
            ))}
          </ul>
          {image ? (
            <StyledImage src={image} alt="Food image" />
          ) : (
            <StyledImage src="/vegetables.jpg" alt="Food image" />
          )}
        </StyledDescription>
        <StyledLocation>
          <StyledIcon src="/pin.svg" />
          Pick-up location: {location}
        </StyledLocation>
        <StyledTime>
          <StyledIcon src="/clock.svg" />
          Pick-up time: {time}
        </StyledTime>
        <ButtonDiv>
          {taken ? (
            <ButtonDeleteDiv onClick={onDelete}>
              <StyledIconTrashCan className="far fa-trash-alt" />
            </ButtonDeleteDiv>
          ) : (
            <ButtonDeleteDiv />
          )}
          <StyledGetButton active={taken} onClick={onGet}>
            {taken ? "Reserved" : "Get it"}
          </StyledGetButton>
        </ButtonDiv>
      </StyledCard>
    </>
  );
}

export default Card;
