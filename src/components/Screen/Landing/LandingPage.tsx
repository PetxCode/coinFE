import React from "react";
import styled from "styled-components";
import pix from "../pix.png";
const LandingPage = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <COntent>
            {" "}
            <Context>
              <Text>Maximise your Money width Vaults</Text>
              <SubText>
                Maximise your Money width Vaults Maximise your Money width
                Vaults
              </SubText>
              <Button>Get Started</Button>
            </Context>
          </COntent>
          <ImageBox>
            <Image src={pix} />
          </ImageBox>
        </Wrapper>
      </Container>
    </div>
  );
};

export default LandingPage;

const Image = styled.img`
  height: 600px;
  display: flex;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 630px) {
    width: 100%;
    object-fit: contain;
    bottom: 0;
    height: 400px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 780px) {
    width: 100%;
    object-fit: contain;
    bottom: 10;
    height: 400px;
  }

  @media screen and (max-width: 1280px) {
    width: 100%;
    object-fit: contain;
    bottom: 10;
    height: 400px;
  }
`;

const ImageBox = styled.div`
  width: 600px;
  display: flex;
  align-items: baseline;
  position: relative;

  @media screen and (max-width: 780px) {
    width: 100%;
    bottom: 0;
    display: flex;
    align-items: baseline;
  }
`;

const Button = styled.pre`
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  background-color: black;
  border-radius: 5px;
  padding: 15px 30px;
  transition: all 360ms;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
  width: 90px;
`;
const SubText = styled.div`
  margin-bottom: 20px;
  opacity: 0.5;
  font-weight: 300;
  letter-spacing: 2px;
`;

const Text = styled.div`
  font-weight: 900;
  font-size: 40px;
  line-height: 1;
  margin-bottom: 20px;
`;

const Context = styled.div`
  position: absolute;
  top: 50%;
  width: 500px;
  color: white;

  @media screen and (max-width: 780px) {
    top: 30%;
  }

  @media screen and (max-width: 1280px) {
    top: 30%;
  }
`;

const COntent = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  justify-content: space-between;
  display: flex;

  @media screen and (max-width: 780px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* @media screen and (max-width: 1280px) {
    width: 80%;
  } */
`;

const Container = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  justify-content: center;
  display: flex;
  /* align-items: center; */
`;
