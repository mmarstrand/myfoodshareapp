import React from "react";
import styled from "styled-components";

const sizes = {
  Small: "12px",
  Medium: "16px",
  Large: "24px"
};

function getSize(size) {
  return sizes[size] || sizes.M;
}

const StyledText = styled.h1`
  margin: 0;
  font-size: ${props => getSize(props.size)};
`;

function TextSize({ size, ...props }) {
  return <StyledText size={size} {...props} />;
}

export default TextSize;
