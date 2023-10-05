import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const url = "http://127.0.0.1:5000";

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard url={url} />} />
        </Route>
        <Route path="/signup" element={<SignUp url={url} />} />
        <Route path="/signin" element={<SignIn url={url} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
