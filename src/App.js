import React from "react";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beer from "./pages/Beer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer/:id" element={<Beer />} />
        <Route path="*" element={<Error code="404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
