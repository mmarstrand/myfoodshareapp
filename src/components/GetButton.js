import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const StyledGetButton = styled(Button)`
  background-color: ${props => (props.active ? "#45eba5" : "white")};
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

function GetButton({ active, onClick, text, ...props }) {
  return (
    <StyledGetButton active={active} onClick={onClick} {...props}>
      {text}
    </StyledGetButton>
  );
}

export default GetButton;
