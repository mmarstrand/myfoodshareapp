import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const StyledHeader = styled.div`
  background: #21aba5;
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

function Header({ title, title2, ...props }) {
  return (
    <>
      <StyledHeader>
        <StyledHeadline data-cy="header-title">
          {title}
          <StyledLogo src="images/header_refresh.svg" />
          {title2}
        </StyledHeadline>
      </StyledHeader>
    </>
  );
}

export default Header;
