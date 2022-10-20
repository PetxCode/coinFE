import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Screen/Main/Header";
import HomePage from "./Screen/Main/HomePage";
import MenuHeader from "./Screen/Main/MenuHeader";
import Transaction from "./Screen/Main/Transaction";
import YourProfile from "./Screen/Main/UserProfile";
const MainBuild = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/account" element={<YourProfile />} />
      </Routes>
    </Container>
  );
};

export default MainBuild;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
