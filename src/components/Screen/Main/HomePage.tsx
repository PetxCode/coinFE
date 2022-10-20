import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Card>
            <Holder>
              <Profile>
                <Image />
                <Content>
                  <Name>Peter</Name>
                  <UserName>@Peter</UserName>
                  <UserName>description</UserName>
                  <UserName>payment type</UserName>
                </Content>
              </Profile>

              <Detail>₦{3000}</Detail>
            </Holder>
            <Holder>
              <Profile>
                <Image />
                <Content>
                  <Name>Peter</Name>
                  <UserName>@Peter</UserName>
                  <UserName>description</UserName>
                  <UserName>payment type</UserName>
                </Content>
              </Profile>

              <Detail>₦{3000}</Detail>
            </Holder>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default HomePage;

const Detail = styled.div`
  padding-right: 30px;
  font-size: 25px;
  font-weight: bold;
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
  border: 2px solid black;
  margin-right: 20px;
`;

const Profile = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
`;

const Holder = styled.div`
  padding: 50px 0;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 360ms;

  :hover {
    transform: scaleX(1.01);
  }
`;

const Card = styled.div`
  overflow: hidden;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const Wrapper = styled.div`
  padding-top: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border-radius: 20px;
`;

const Container = styled.div`
  width: calc(100vw - 300px);
  min-height: calc(100vh - 80px);
  height: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;
