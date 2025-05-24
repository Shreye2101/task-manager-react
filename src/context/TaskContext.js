import React, { createContext, useContext, useEffect, useState } from "react";
import API from "../api/Axios";

const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  );
  const [tasks, setTasks] = useState([]);
  const [timeEntries, setTimeEntries] = useState([]);
  const [stats, setStats] = useState({});

  const login = async (email, password) => {
    const { data } = await API.post("/auth/login", { email, password });
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", data.token);
  };

  const register = async (name, email, password) => {
    const { data } = await API.post("/auth/register", { name, email, password });
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", data.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const fetchTasks = async () => {
    const { data } = await API.get("/tasks");
    setTasks(data);
  };

  const addTask = async (text) => {
    const { data } = await API.post("/tasks", { text });
    setTasks((prev) => [...prev, data]);
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  const logTime = async (taskName, hours) => {
    const { data } = await API.post("/time", { taskName, hours });
    setTimeEntries((prev) => [...prev, data]);
  };

  const fetchTimeEntries = async () => {
    const { data } = await API.get("/time");
    setTimeEntries(data);
  };

  const fetchStats = async () => {
    const { data } = await API.get("/time/stats");
    setStats(data);
  };

  useEffect(() => {
    if (user) {
      fetchTasks();
      fetchTimeEntries();
      fetchStats();
    }
  }, [user]);

  return (
    <TaskContext.Provider
      value={{
        user,
        tasks,
        timeEntries,
        stats,
        login,
        register,
        logout,
        addTask,
        deleteTask,
        logTime,
        fetchStats,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
