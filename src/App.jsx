import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollTop } from "./components";
import { Home, Error, Cart } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route element={<Error />} path="*" />
        <Route element={<Cart />} path="/Cart" />
      </Routes>
      <ScrollTop />
    </Router>
  );
};

export default App;
