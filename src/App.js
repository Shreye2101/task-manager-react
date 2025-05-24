import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TimeTrackingPage from "./pages/TimeTrackingPage";
import StatsPage from "./pages/StatsPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import { TaskProvider } from "./context/TaskContext";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import "./styles/App.css";

const Navigation = ({ onLogout }) => {
  const location = useLocation();

  const getButtonColor = (path) =>
    location.pathname === path ? "secondary" : "inherit";

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
        <Button
          onClick={onLogout}
          color="inherit"
          style={{ marginLeft: "auto" }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  const handleLogin = () => setLoggedIn(true);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return (
      <Router>
        <Container className="app-container" maxWidth="sm" style={{ marginTop: 40 }}>
          <Routes>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<SignupPage onSignup={handleLogin} />} />
            <Route path="*" element={<Navigate to="/register" replace />} />
          </Routes>
        </Container>
      </Router>
    );
  }

  return (
    <TaskProvider>
      <Router>
        <Navigation onLogout={handleLogout} />
        <Container className="app-container">
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/track" element={<TimeTrackingPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>
      </Router>
    </TaskProvider>
  );
}

export default App;
