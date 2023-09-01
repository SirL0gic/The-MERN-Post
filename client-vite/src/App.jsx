import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={HomePage}/>
      </Routes>
    </>
  );
}

export default App;
