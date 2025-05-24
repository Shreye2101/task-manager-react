import React from "react";
import { useTask } from "../context/TaskContext";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskList() {
  const { tasks, deleteTask } = useTask();

  return (
    <Paper elevation={3} style={{ padding: "1rem", marginTop: "1rem" }}>
      <List>
        {tasks.length === 0 ? (
          <ListItem>
            <ListItemText primary="No tasks yet." />
          </ListItem>
        ) : (
          tasks.map((task) => (
            <ListItem
              key={task._id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(task._id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={task.text} />
            </ListItem>
          ))
        )}
      </List>
    </Paper>
  );
}

export default TaskList;
