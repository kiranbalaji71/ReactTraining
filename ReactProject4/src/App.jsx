import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Sample from "./components/Sample.json";
import AddCart from "./components/AddCart";

function App() {
  const [count, setCount] = useState([]);
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route
            path="/"
            element={
              <Dashboard Sample={Sample} count={count} setCount={setCount} />
            }
          />
          <Route
            path="/cart"
            element={
              <AddCart Sample={Sample} count={count} setCount={setCount} />
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

// const [showLogin, setShowLogin] = useState(false);
// const [loggedIn, setLoggedIn] = useState(null);

// {
//   loggedIn ? (
//     <Dashboard setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
//   ) : showLogin ? (
//     <Login
//       onToggle={() => setShowLogin(false)}
//       onLogin={(user) => setLoggedIn(user)}
//     />
//   ) : (
//     <Register onToggle={() => setShowLogin(true)} />
//   );
// }
