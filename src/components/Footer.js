import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  background-color: #1d566e;
  margin-top: 10px;
`;

const StyledFooterIcons = styled.img`
  margin: 10px;
`;

function Footer() {
  return (
    <>
      <StyledFooter>
        <StyledFooterIcons src="/home.png" />
        <StyledFooterIcons src="/share.png" />
        <StyledFooterIcons src="/find.png" />
        <StyledFooterIcons src="/shopping.png" />
      </StyledFooter>
    </>
  );
}

export default Footer;
