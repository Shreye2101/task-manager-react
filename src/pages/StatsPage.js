import React from "react";
import { Container, Typography, Paper } from "@mui/material";

function StatsPage() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Productivity Statistics
      </Typography>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="body1">
          📌 You completed 0 tasks today.
        </Typography>
        <Typography variant="body1">
          ⏱️ Total time logged: 0 hours
        </Typography>
        <Typography variant="body1">
          ✅ Productivity score: N/A
        </Typography>
      </Paper>
    </Container>
  );
}

export default StatsPage;
