import React from "react";
import styled from "styled-components";

const Transaction = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Card>
            <br />
            <br />
            <Form>
              <Holder>
                <Input placeholder="Enter Account Number" />
                <Title>Enter Account Number</Title>
              </Holder>

              <Button>Search</Button>
            </Form>
            <br />
            <br />
            <br />

            <SimpleCard>
              <Image />

              <Content>
                <AccNumb>Account Number: </AccNumb>

                <Name>Name</Name>
                <br />
                <br />
                <SubName>Name</SubName>
              </Content>
            </SimpleCard>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Form1>
              <Holder>
                <Input placeholder="Amount" />
                <Title>Amount</Title>
              </Holder>
              <Holder>
                <Input placeholder="Your Token Number" />
                <Title>Your Token Number</Title>
              </Holder>

              <Button1>Send</Button1>
            </Form1>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Transaction;

const SubName = styled.pre`
  margin: 0;
  opacity: 0.6;
  font-size: 15px;
  font-weight: 500;
`;

const AccNumb = styled.div`
  display: flex;
`;

const SimpleCard = styled.div`
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
  margin-left: 50px;
  display: flex;
  justify-content: center;
`;

const Button1 = styled.pre`
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

const Form1 = styled.div`
  width: 40%;
`;

const Form = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
`;

const Logo = styled.pre`
  font-size: 30px;
  font-weight: bold;
  transition: all 360ms;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

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
  width: 200px;
  height: 200px;
  border-radius: 10px;
  border: 2px solid black;
  margin-right: 20px;
`;

const Profile = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
`;

const Card = styled.div`
  overflow: hidden;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  min-height: calc(90vh - 80px);
  height: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;
