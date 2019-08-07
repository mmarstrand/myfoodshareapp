import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const StyledBackground = styled.img`
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  filter: grayscale(0.3) saturate(2) brightness(0.7);
`;

const StyledHomeButton = styled(Button)`
  height: 40px;
  font-size: 16px;
`;

const StyledFullscreen = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.div`
  color: white;
  margin: 8px;
`;

function Home() {
  return (
    <>
      <StyledFullscreen>
        <StyledBackground src="/background.jpg" alt="Food" />
        <Link to="/share">
          <StyledHomeButton>Share food</StyledHomeButton>
        </Link>
        <StyledText>or</StyledText>
        <Link to="/marketplace">
          <StyledHomeButton>Find food</StyledHomeButton>
        </Link>
      </StyledFullscreen>
    </>
  );
}

export default Home;
