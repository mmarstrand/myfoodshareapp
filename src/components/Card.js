import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PropTypes from "prop-types";

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
  width: 100px;
  max-height: 100px;
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
  background-color: ${props => (props.active ? "#ff6600" : "#45eba5")};
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
  return (
    <>
      <StyledName>
        {name} has {description.length} items for you
      </StyledName>
      <StyledCard {...props} active={taken}>
        <StyledTitle>
          <StyledIcon src="images/icon_info.svg" alt="info icon" />
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
            <StyledImage
              src="images/imageupload_default_vegetables.jpg"
              alt="Food image"
            />
          )}
        </StyledDescription>
        <StyledLocation>
          <StyledIcon src="images/icon_location.svg" alt="location icon" />
          Pick-up location: {location}
        </StyledLocation>
        <StyledTime>
          <StyledIcon src="images/icon_clock.svg" alt="clock icon" />
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
  taken: PropTypes.bool,
  onGet: PropTypes.func,
  onDelete: PropTypes.func
};

export default Card;
