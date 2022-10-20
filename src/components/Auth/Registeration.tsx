import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Registeration = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Card>
            <Logo>Wallet Coin</Logo>

            <Form>
              <Holder>
                <Input placeholder="Full Name" />
                <Title>Full Name</Title>
              </Holder>

              <Holder>
                <Input placeholder="User Name" />
                <Title>User Name</Title>
              </Holder>

              <Holder>
                <Input placeholder="Email" />
                <Title>Email</Title>
              </Holder>

              <Holder>
                <Input placeholder="Password" />
                <Title>Password</Title>
              </Holder>

              <Holder>
                <Input placeholder="Confirm Password" />
                <Title>Confirm Password</Title>
              </Holder>

              <Button>Register</Button>
            </Form>
            <Div>
              <div>Already have an Account? </div>
              <Linked to="/signin">Sign in here</Linked>
            </Div>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Registeration;

const Linked = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

const Div = styled.pre`
  display: flex;
`;

const Button = styled.pre`
  :hover {
    cursor: pointer;
    transform: scale(1.02);
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
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
const Title = styled.pre`
  position: absolute;
  background-color: white;
  margin-top: -40px;
  font-size: 15px;
  padding: 0px 5px;
  font-weight: 500;
`;

const Input = styled.input`
  border: 0;
  outline: none;
  width: 300px;
`;

const Holder = styled.div`
  padding: 10px;
  border: 1px solid gray;
  position: relative;
  border-radius: 3px;
  margin: 20px 0;
`;

const Form = styled.div``;

const Logo = styled.pre`
  font-size: 30px;
  font-weight: bold;
  transition: all 360ms;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Card = styled.div`
  width: 400px;
  min-height: 500px;
  background-color: white;
  color: black;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ff9505;
  color: white;
`;
