import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";


import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={HomePage}></Route>
      </Routes>
    </>
  );
}

export default App;
