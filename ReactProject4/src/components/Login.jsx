import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Box, Button, TextField, Typography } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("registerValue")) || [];

    const user = storedData.find(
      (item) => item.email === email && item.password === password
    );
    if (user) {
      console.log("success");
      localStorage.setItem("login", "true");
      navigate("/");
    } else {
      alert("Invalid Accounts");
    }
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: 20 }}>
      <Box sx={{ p: 3, border: "1px solid #dddddd" }}>
        <div className="login-page">
          <Typography variant="h5" align="center">
            Login
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              id="email"
              label="Email Address"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
            <br />
            <br />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
            />
            <br />
            <br />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign In
            </Button>
            <br />
            <br />
            <Typography variant="body2" align="center">
              Don't have an account? Register{" "}
              <Link to="/register" variant="body2" sx={{ cursor: "pointer" }}>
                here
              </Link>
              .
            </Typography>
          </form>
        </div>
      </Box>
    </Container>
  );
}

export default Login;
