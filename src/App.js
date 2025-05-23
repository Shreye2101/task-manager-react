// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TimeTrackingPage from "./pages/TimeTrackingPage";
import StatsPage from "./pages/StatsPage";
import { TaskProvider } from "./context/TaskContext";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import "./styles/App.css";

const Navigation = () => {
  const location = useLocation();

  const getButtonColor = (path) => (location.pathname === path ? "secondary" : "inherit");

  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/" color={getButtonColor("/")}>
          Tasks
        </Button>
        <Button component={Link} to="/track" color={getButtonColor("/track")}>
          Time Tracking
        </Button>
        <Button component={Link} to="/stats" color={getButtonColor("/stats")}>
          Statistics
        </Button>
      </Toolbar>
    </AppBar>
  );
};

function App() {
  return (
    <TaskProvider>
      <Router>
        <Navigation />
        <Container className="app-container">
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/track" element={<TimeTrackingPage />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
        </Container>
      </Router>
    </TaskProvider>
  );
}

export default App;
