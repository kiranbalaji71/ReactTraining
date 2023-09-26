import React from "react";
import InputValue from "./components/InputValue";
import OutputValue from "./components/OutputValue";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<InputValue />} />
          <Route path="/output" element={<OutputValue />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
