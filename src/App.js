import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AddFavsContainer, Header, MainContainer } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<MainContainer />} />
        <Route path="/addFavs" element={<AddFavsContainer />} />
      </Routes>
    </>
  );
}

export default App;
