//bsic react hooks
import React, { Component, useState, useEffect } from "react";

//importing navigation
import {Route, Routes } from "react-router-dom";

//importing pages
import HomePage from "./pages/Home";
import SportsPage from "./pages/Sports";
import Readpage from "./pages/Read";

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
      <Route path="read-elon" 
      element={ <Readpage 
      title="Elon Musk’s planned Twitter layoffs are imminent" 
      subtitle="Tesla engineers were on-site Friday to evaluate the Twitter staff’s code, workers said, as anxiety built around Musk’s silence" 
      date="October 29, 2022"
      author="Gerrit De Vynck"
      image="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WKECRV6SQ6EZHD4KAUXNIPE3VM.JPG&w=916"
      paraone="SAN FRANCISCO — Elon Musk’s plans to lay off large number of Twitter employees are getting underway, a course of action that could prompt fundamental changes in the way more than 200 million daily users experience the site."/>
      
      } />
    </Routes>
    </div>

  );
}

export default App;
