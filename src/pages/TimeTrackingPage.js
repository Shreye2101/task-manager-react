import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function TimeTrackingPage() {
  const [taskName, setTaskName] = useState("");
  const [timeSpent, setTimeSpent] = useState("");

  const handleTrack = () => {
    if (taskName.trim() && timeSpent.trim()) {
      alert(`Time Logged: ${timeSpent} for "${taskName}"`);
      setTaskName("");
      setTimeSpent("");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Time Tracking
      </Typography>
      <TextField
        fullWidth
        label="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Time Spent (in hours)"
        value={timeSpent}
        onChange={(e) => setTimeSpent(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" onClick={handleTrack} sx={{ mt: 2 }}>
        Log Time
      </Button>
    </Container>
  );
}

export default TimeTrackingPage;
