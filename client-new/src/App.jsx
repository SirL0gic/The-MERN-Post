import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ReadPage from "./components/Fullpage";
import SportsPage from "./pages/Sports";

import "./App.css";

let App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/sports" element={<SportsPage/>}></Route>
        <Route path="/article/:id" element={<ReadPage/>}></Route>
      </Routes>
    </>
  );
};

export default App;
