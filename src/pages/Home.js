import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const StyledBackground = styled.img`
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  filter: grayscale(0.4) saturate(2) brightness(1);
`;

const StyledHomeButton = styled(Button)`
  align-items: center;
  justify-content: center;
`;

const StyledFullscreen = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <>
      <StyledBackground src="/background.jpg" alt="Food" />
      <StyledFullscreen>
        <StyledHomeButton>TestBtn</StyledHomeButton>
      </StyledFullscreen>
    </>
  );
}

export default Home;
