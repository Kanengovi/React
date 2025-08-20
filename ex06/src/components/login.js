import { TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "user@gmail.com" || password !== "password123") {
      alert("Email or Password wrong! Re-enter to Login!");
      return;
    }
    localStorage.setItem("email", email);
    navigate("/home");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <Typography variant="h1">LOGIN</Typography>
      <TextField
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        label="Email"
        variant="outlined"
      />
      <TextField
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        label="Password"
        variant="outlined"
      />
      <Button variant="contained" type="submit">
        Login
      </Button>
    </form>
    </div>
  );
};

export default Login;