import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import API from "../../api/Axios";

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      onLogin(); // notify parent to refresh UI after login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" gutterBottom>Login</Typography>
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" fullWidth onClick={handleSubmit}>Login</Button>
    </Container>
  );
}

export default LoginPage;
