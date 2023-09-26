import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./components/form";
import Table from "./components/table";
import "./App.css";

function App() {
  const [formDataObject, setFormDataObject] = useState([]);

  const handleFormSubmit = (data) => {
    setFormDataObject([...formDataObject, data]);
  };

  return (
    <Router>
      <div className="container">
        <div className="navbar">
          <h1>Form Validation</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Form</Link>
              </li>
              <li>
                <Link to="/table">Table</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Form Submit={handleFormSubmit} />} />
          <Route
            path="/table"
            element={<Table formDataObject={formDataObject} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
