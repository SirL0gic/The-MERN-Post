import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ReadPage from "./components/Fullpage";

import "./App.css";

let App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/article/:id" element={<ReadPage/>}></Route>
      </Routes>
    </>
  );
};

export default App;
