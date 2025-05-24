import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import API from "../../api/Axios";

function SignupPage({ onSignup }) {
  const [name,setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await API.post("/auth/register", { name , email, password });
      localStorage.setItem("token", res.data.token);
      onSignup(); // notify parent to refresh UI after signup
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" gutterBottom>Signup</Typography>
      <TextField label="Name" fullWidth margin="normal" value={name} onChange={e => setName(e.target.value)} />
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" fullWidth onClick={handleSubmit}>Signup</Button>
    </Container>
  );
}

export default SignupPage;
