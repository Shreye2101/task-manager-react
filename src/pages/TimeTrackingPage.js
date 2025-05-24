import React, { useState, useContext } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { useTask } from "../context/TaskContext";


function TimeTrackingPage() {
  const [taskName, setTaskName] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const { logTime } = useTask()

  const handleTrack = () => {
    if (taskName.trim() && timeSpent.trim() && !isNaN(timeSpent)) {
      logTime(taskName, timeSpent);
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
        type="number"
      />
      <Button variant="contained" onClick={handleTrack} sx={{ mt: 2 }}>
        Log Time
      </Button>
    </Container>
  );
}

export default TimeTrackingPage;
