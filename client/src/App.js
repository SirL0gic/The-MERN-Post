//bsic react hooks
import React, { Component, useState, useEffect } from "react";

//importing navigation
import {Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav";


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
  
  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/sports" element={<SportsPage />} />
  </Routes>

  return (
    <h1>hello</h1>
  
    // <div>
    //   <h1>Hello CodeSandbox</h1>
    //   {<h3>{backendData.users}</h3>}
    // </div>
  );
}

export default App;