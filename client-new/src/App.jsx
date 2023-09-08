import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";

import "./App.css";

let App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
};

export default App;
