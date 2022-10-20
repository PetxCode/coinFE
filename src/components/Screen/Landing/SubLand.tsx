import React from "react";
import styled from "styled-components";

const SubLand = () => {
  return (
    <div>
      <Container>
        <Holder>Experirnce a new world of Money security...!</Holder>
      </Container>
    </div>
  );
};

export default SubLand;

const Container = styled.div``;

const Holder = styled.pre`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: 100px;
  font-size: 30px;
  color: white;
  font-weight: 500;

  @media screen and (max-width: 780px) {
    font-size: 20px;
  }
`;
