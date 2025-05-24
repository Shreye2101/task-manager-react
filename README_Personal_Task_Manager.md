# 📝 Personal Task Manager

**Created by**: Shreyash Srivastava  
📧 Email: [shreyash.jsx@gmail.com](mailto:shreyash.jsx@gmail.com)  
📞 Contact: 7060288428  

---

## 📌 Project Overview

**Personal Task Manager** is a full-stack web application that allows users to manage tasks, track time, and view productivity statistics, with secure login and persistent data using MongoDB Atlas.

---

## 🚀 Tech Stack

- **Frontend**: React.js, Context API, Axios, Material-UI
- **Backend**: Node.js, Express.js, JWT Authentication, Mongoose
- **Database**: MongoDB Atlas
- **Deployment**: 
  - Frontend: [Vercel URL]( )
  - Backend: [Render URL]( )

---

## 🌐 GitHub Repositories

- **Client Repo**: [Client GitHub Repo]( )
- **Server Repo**: [Server GitHub Repo]( )

---

## 📁 API Routes

### 🔐 Auth Routes
- `POST /api/auth/register` → Register a new user
- `POST /api/auth/login` → Authenticate and get JWT token

### ✅ Task Routes (Protected)
- `GET /api/tasks` → Get all tasks for the user
- `POST /api/tasks` → Add a new task
- `DELETE /api/tasks/:id` → Delete a task

### ⏱️ Time Tracking Routes (Protected)
- `GET /api/time` → Get all time entries
- `POST /api/time` → Log time against a task

---

## 📦 Dependencies

### 🔧 Backend (Node.js)
```bash
npm install express mongoose dotenv bcryptjs jsonwebtoken cors
```

### 🎨 Frontend (React)
```bash
npm install axios react-router-dom @mui/material @emotion/react @emotion/styled
```

---

## 🧪 How to Run Locally

### ⚙️ Backend
```bash
cd server
npm install
npm start
```

### 🌐 Frontend
```bash
cd client
npm install
npm start
```

---

## 📄 License

This project is built by **Shreyash Srivastava** for learning and productivity purposes.

---