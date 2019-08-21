import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  background-color: #1d566e;
  position: relative;
  bottom: 0px;
  height: 50px;
`;

const StyledFooterIcons = styled.img`
  margin: 10px;
  height: 30px;
`;

const StyledFooterBox = styled.div`
  height: 50px;
  &:hover {
    background-color: #2766a5;
  }
`;

function Footer() {
  return (
    <>
      <StyledFooter>
        <Link to="/">
          <StyledFooterBox>
            <StyledFooterIcons src="/home2.svg" />
          </StyledFooterBox>
        </Link>
        <StyledFooterBox>
          <Link to="/share">
            <StyledFooterIcons src="/sharewhite.svg" />
          </Link>
        </StyledFooterBox>
        <StyledFooterBox>
          <Link to="/marketplace">
            <StyledFooterIcons src="/collaborationwhite.svg" />
          </Link>
        </StyledFooterBox>
        <StyledFooterBox>
          <Link to="/basket">
            <StyledFooterIcons src="/basketwhite.svg" />
          </Link>
        </StyledFooterBox>
      </StyledFooter>
    </>
  );
}

export default Footer;
