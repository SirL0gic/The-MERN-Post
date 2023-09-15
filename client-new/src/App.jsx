import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ReadPage from "./components/Fullpage";
import NotFound from "./components/ErrorPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

let App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/sports" element={<NotFound/>}></Route>
        <Route path="/business" element={<NotFound/>}></Route>
        <Route path="/health" element={<NotFound/>}></Route>
        <Route path="/entertainment" element={<NotFound/>}></Route>
        <Route path="/technology" element={<NotFound/>}></Route>
        <Route path="/article/:id" element={<ReadPage/>}></Route>
      </Routes>
    </>
  );
};

export default App;
