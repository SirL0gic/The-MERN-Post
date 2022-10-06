//bsic react hooks
import React, { Component, useState, useEffect } from "react";

//importing navigation
//importing navigation
import {Route, Routes } from "react-router-dom";

//importing pages
//importing pages
import HomePage from "./pages/Home";
import SportsPage from "./pages/Sports";

function App() {

  // const [backendData, setBackendData] = useState([{}])
  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])
  
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <HomePage/> } />
      <Route path="sports" element={ <SportsPage/> } />
    </Routes>
    </div>

  );
}

export default App;
