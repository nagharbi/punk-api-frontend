import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beer from "./pages/Beer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/punk-api-frontend" element={<Home />} />
        <Route path="/beer/:id" element={<Beer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
