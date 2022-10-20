import React from "react";
import styled from "styled-components";

const LandingHead = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>Wallet Coin</Logo>
          <Navigation>
            <Button>Get Started</Button>
          </Navigation>
        </Wrapper>
      </Container>
    </div>
  );
};

export default LandingHead;

const Button = styled.pre`
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  background-color: black;
  border-radius: 2px;
  padding: 15px 30px;
  transition: all 360ms;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
`;

const Navigation = styled.div``;

const Logo = styled.pre`
  font-size: 30px;
  font-weight: bold;
  transition: all 360ms;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  color: white;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;
