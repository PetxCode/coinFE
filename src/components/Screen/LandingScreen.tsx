import React from "react";
import styled from "styled-components";
import LandingHead from "./Landing/LandingHead";
import LandingPage from "./Landing/LandingPage";
import SubLand from "./Landing/SubLand";

const LandingScreen = () => {
  return (
    <Container>
      <LandingHead />
      <SubLand />
      <LandingPage />
    </Container>
  );
};

export default LandingScreen;

const Container = styled.div`
  background-color: #ff9505;
`;
