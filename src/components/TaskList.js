import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { List, ListItem, ListItemText, Paper } from "@mui/material";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <Paper elevation={3}>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default TaskList;
