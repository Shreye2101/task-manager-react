import React, { useContext } from "react";
import { Container, Typography, Paper } from "@mui/material";
import { useTask } from '../context/TaskContext';


function StatsPage() {
   const { timeEntries } = useTask();

  const totalHours = timeEntries.reduce((sum, entry) => sum + entry.hours, 0);
  const uniqueTasks = new Set(timeEntries.map((e) => e.taskName)).size;

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Productivity Statistics
      </Typography>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="body1">
          📌 Tasks logged: {uniqueTasks}
        </Typography>
        <Typography variant="body1">
          ⏱️ Total time logged: {totalHours.toFixed(2)} hours
        </Typography>
        <Typography variant="body1">
          ✅ Entries made: {timeEntries.length}
        </Typography>
      </Paper>
    </Container>
  );
}

export default StatsPage;
