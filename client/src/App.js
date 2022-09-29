import React, { Component, useState, useEffect } from "react";

function App() {

  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h3>{backendData.users}</h3>
    </div>
  );
}

export default App