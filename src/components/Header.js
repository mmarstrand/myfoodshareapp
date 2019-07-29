import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const StyledHeader = styled.div`
  background: #21aba5;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeadline = styled.h1`
  color: white;
  margin: 0;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledLogo = styled.img`
  width: 18px;
  height: 18px;
  animation: ${rotate} 5s linear;
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <StyledHeadline>
          FoodSh
          <StyledLogo src="/refresh.svg" />
          re
        </StyledHeadline>
      </StyledHeader>
    </>
  );
}

export default Header;
