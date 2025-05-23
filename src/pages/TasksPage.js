import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskList from "../components/TaskList";
import { TextField, Button, Container, Typography } from "@mui/material";

function TasksPage() {
  const { addTask } = useContext(TaskContext);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      addTask(input.trim());
      setInput("");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Task Dashboard
      </Typography>
      <TextField
        fullWidth
        label="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" onClick={handleAdd} sx={{ mb: 2 }}>
        Add Task
      </Button>
      <TaskList />
    </Container>
  );
}

export default TasksPage;
