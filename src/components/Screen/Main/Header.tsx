import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>Wallet Coin</Logo>
          <Navigation>
            <Nav to="/transaction">
              <Button>New Transaction</Button>
            </Nav>
          </Navigation>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Nav = styled(Link)`
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  padding: 15px 0;
  text-decoration: none;
`;

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
  color: white;
`;

const Navigation = styled.div``;

const Logo = styled.pre`
  font-size: 30px;
  font-weight: bold;
  transition: all 360ms;
  color: black;

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
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  position: fixed;
`;
