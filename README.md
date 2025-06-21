# 📝 Task Manager Web App

A simple, beautiful, and functional **Task Manager** built using **HTML, CSS, and JavaScript**.  
It connects to a backend API to perform CRUD operations:

- ✅ Create a task
- 📋 View all tasks
- 🔄 Mark tasks as completed/uncompleted
- ❌ Delete completed tasks

---

## 🚀 Features

- Clean and modern UI with glassmorphism design
- Real-time task list updates with JavaScript
- Fully integrated with a backend REST API
- Responsive layout for all devices

---

## 📸 Preview

![Screenshot](preview.png) <!-- Replace with an actual screenshot if needed -->

---

## 🧩 Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend (assumed)**: Node.js + Express + PostgreSQL

---

## 📦 API Endpoints (Expected)

Your backend should expose the following endpoints:

| Method | Endpoint         | Description              |
| ------ | ---------------- | ------------------------ |
| POST   | `/api/tasks`     | Create a new task        |
| GET    | `/api/tasks`     | Get all tasks            |
| PUT    | `/api/tasks/:id` | Toggle completion status |
| DELETE | `/api/tasks/:id` | Delete a task            |

> Example:

```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy milk","description":"From store"}'
```

## 🛠️ How to Use

1. **Clone the repository:**

   ```bash
   https://github.com/Nilesh091/Task-Manager-API.git
   ```

2. **Start your backend API**

   ```bash
   cd Backend
   npm run dev
   ```

3. **Start your Frontend through any IDE (VS Code)**

Just open index.html in your browser or use Live Server (VS Code Extension).
