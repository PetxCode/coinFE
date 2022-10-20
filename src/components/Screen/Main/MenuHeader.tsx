import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuHeader = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Profile>
            <Image />
            <Content>
              <Name>Peter</Name>
              <UserName>@Peter</UserName>
            </Content>
          </Profile>
          <br />
          <br />
          <br />
          <Balance>
            <Value>₦{0}</Value>
            <Name>Available Balance</Name>
          </Balance>
          <br />
          <br />
          <br />
          <Navigation>
            <Move>
              <Nav to="/">
                <Hod>Home</Hod>
              </Nav>
            </Move>
            <Move>
              <Nav to="/account">
                <Hod>Account</Hod>
              </Nav>
            </Move>
          </Navigation>

          <Space />

          <Log>
            <LogOut>Log Out</LogOut>
          </Log>
        </Wrapper>
      </Container>
    </div>
  );
};

export default MenuHeader;

const Move = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  padding: 15px 0;
  text-decoration: none;
  color: black;
`;
const LogOut = styled.div`
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

const Log = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Space = styled.div`
  flex: 1;
`;

const Hod = styled.pre`
  padding-left: 30px;
  text-transform: uppercase;
  margin: 0;
  font-weight: 700;
  font-size: 20px;
  transition: all 360ms;
  width: 100%;

  :hover {
    transform: scale(0.98);
    cursor: pointer;
  }
`;

const Nav = styled(Link)`
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  padding: 15px 0;
  text-decoration: none;
  color: black;
`;

const Navigation = styled.div`
  width: 100%;
`;

const Value = styled.pre`
  font-weight: 700;
  font-size: 35px;
  margin: 0;
`;

const Balance = styled.pre`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const UserName = styled.pre`
  margin: 0;
  opacity: 0.6;
  font-size: 15px;
  font-weight: 500;
`;

const Name = styled.div`
  font-weight: 900;
  text-transform: uppercase;
  font-size: 20px;
`;

const Content = styled.div``;

const Image = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid white;
  margin-right: 20px;
`;

const Profile = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  margin-top: 80px;
  width: 300px;
  height: calc(100vh - 80px);
  background-color: #ff9505;
  display: flex;
  flex-direction: column;
  position: fixed;
`;
