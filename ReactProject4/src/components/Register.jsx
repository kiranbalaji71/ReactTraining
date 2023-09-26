import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, TextField, Typography, Container } from "@mui/material";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerValue, setRegisterValue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerValue.some((item) => item.email === email)) {
      alert("Email already exists");
      return;
    }

    const currData = { name, email, password };
    setRegisterValue([...registerValue, currData]);
    localStorage.setItem(
      "registerValue",
      JSON.stringify([...registerValue, currData])
    );

    setName("");
    setEmail("");
    setPassword("");

    alert("Registration successful");
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: 20 }}>
      <Box sx={{ p: 3, border: "1px solid #dddddd" }}>
        <div className="register-page">
          <Typography variant="h5" align="center">
            Register
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Full Name"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
            />
            <br />
            <br />
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
              Sign up
            </Button>
            <br />
            <br />
            <Typography variant="body2" align="center">
              Already have an account? Login{" "}
              <Link to="/login" variant="body2" sx={{ cursor: "pointer" }}>
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

export default Register;
