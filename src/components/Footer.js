import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  background-color: #1d566e;
  position: relative;
  bottom: 0px;
`;

const StyledFooterIcons = styled.img`
  height: 30px;
  padding: 10px 20px;
  &:hover {
    background-color: #2766a5;
  }
`;

function Footer() {
  return (
    <>
      <StyledFooter>
        <Link to="/">
          <StyledFooterIcons src="/home2.svg" />
        </Link>
        <Link to="/share">
          <StyledFooterIcons src="/sharewhite.svg" />
        </Link>
        <Link to="/marketplace">
          <StyledFooterIcons src="/collaborationwhite.svg" />
        </Link>
        <Link to="/basket">
          <StyledFooterIcons src="/basketwhite.svg" />
        </Link>
      </StyledFooter>
    </>
  );
}

export default Footer;
