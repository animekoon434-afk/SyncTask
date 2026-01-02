# � SyncTask

**A Modern Collaborative Project & Task Management Application**

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-api-reference">API Reference</a> •
  <a href="#-project-structure">Project Structure</a>
</p>

---

## 📖 Overview

**SyncTask** is a full-stack, real-time collaborative project management application built with the MERN stack. It enables teams to create projects, manage tasks using a Kanban-style board, invite collaborators, and work together seamlessly. Perfect for agile teams, personal productivity, or any project requiring organized task tracking!

---

## ✨ Features

### 📁 Project Management
- **Create Projects** - Organize work into separate projects
- **Project Settings** - Customize project details and preferences
- **Leave/Delete Projects** - Manage project lifecycle

### ✅ Task Management
- **Kanban Board** - Visual task columns (To Do, In Progress, Done)
- **Create & Edit Tasks** - Add detailed task information
- **Priority Levels** - Assign priority to tasks
- **Search Tasks** - Quickly find tasks across projects
- **Delete Tasks** - Remove completed or unnecessary tasks

### 👥 Collaboration
- **Invite Users** - Send project invitations via email or link
- **Invite Links** - Shareable links for easy team onboarding
- **Pending Requests** - Manage incoming collaboration requests
- **Remove Collaborators** - Control team membership

### � Authentication
- **Clerk Integration** - Secure authentication powered by Clerk
- **User Profiles** - Personalized user accounts
- **Protected Routes** - Secure access to projects and tasks

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Library |
| **Vite 7** | Build Tool & Dev Server |
| **Tailwind CSS 4** | Utility-First Styling |
| **React Router 7** | Client-side Routing |
| **Axios** | HTTP Client |
| **Clerk React** | Authentication |
| **Bootstrap Icons** | Icon Library |

### Backend

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime Environment |
| **Express 5** | Web Framework |
| **MongoDB** | Database |
| **Mongoose** | ODM for MongoDB |
| **Clerk SDK** | Authentication |
| **CORS** | Cross-Origin Support |
| **Dotenv** | Environment Variables |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.x
- MongoDB (local or Atlas)
- Clerk Account (for authentication)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/SyncTask.git
cd SyncTask
```

2. **Install dependencies**

```bash
# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

3. **Configure environment variables**

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB
MONGO_URI=your_mongodb_connection_string

# Clerk
CLERK_SECRET_KEY=your_clerk_secret_key
```

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

4. **Run the application**

```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```

5. **Access the app**

- Development: `http://localhost:5173`
- Backend API: `http://localhost:5000`

---

## � API Reference

### Projects

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/projects` | Get all projects |
| `POST` | `/api/projects` | Create a new project |
| `GET` | `/api/projects/:projectId` | Get project by ID |
| `PATCH` | `/api/projects/:projectId` | Update project |
| `DELETE` | `/api/projects/:projectId` | Delete project |
| `DELETE` | `/api/projects/:projectId/collaborators` | Remove collaborator |
| `POST` | `/api/projects/:projectId/leave` | Leave project |

### Tasks (Todos)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/todos` | Get all tasks |
| `POST` | `/api/todos` | Create a new task |
| `GET` | `/api/todos/search` | Search tasks |
| `GET` | `/api/todos/:id` | Get task by ID |
| `PATCH` | `/api/todos/:id` | Update task |
| `DELETE` | `/api/todos/:id` | Delete task |

### Invitations

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/invites` | Send project invite |
| `GET` | `/api/invites/pending` | Get pending invites |
| `POST` | `/api/invites/:inviteId/accept` | Accept invite |
| `POST` | `/api/invites/:inviteId/decline` | Decline invite |
| `POST` | `/api/invites/link` | Create invite link |
| `GET` | `/api/invites/link/:token` | Get invite link info |
| `POST` | `/api/invites/link/:token/accept` | Accept invite link |

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/users/search` | Search users |
| `POST` | `/api/invite` | Send invitation |

---

## 📁 Project Structure

```
SyncTask/
├── backend/
│   ├── controller/              # Route controllers
│   │   ├── todo-controller.js       # Task CRUD operations
│   │   ├── project-controller.js    # Project management
│   │   ├── project-invite-controller.js  # Invitation handling
│   │   └── collaboration-controller.js  # Collaboration logic
│   ├── middleware/              # Express middleware
│   │   └── clerk-auth.js            # Clerk authentication
│   ├── model/                   # Mongoose schemas
│   │   ├── todo-model.js            # Task schema
│   │   ├── project-model.js         # Project schema
│   │   ├── project-invite-model.js  # Invite schema
│   │   ├── project-invite-link-model.js  # Invite link schema
│   │   └── collaboration-request-model.js  # Collaboration schema
│   ├── routes/                  # API routes
│   │   └── todo-routes.js           # All API endpoints
│   ├── connectDb.js             # MongoDB connection
│   ├── index.js                 # Server entry point
│   └── package.json
│
├── frontend/
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── Header.jsx           # Navigation bar
│   │   │   ├── ProjectSidebar.jsx   # Project navigation
│   │   │   ├── TaskColumn.jsx       # Kanban column
│   │   │   ├── TaskCard.jsx         # Task item display
│   │   │   ├── TaskForm.jsx         # Create task form
│   │   │   ├── UpdateForm.jsx       # Edit task form
│   │   │   ├── InviteModal.jsx      # Invite users modal
│   │   │   ├── ProjectSettingsModal.jsx  # Project settings
│   │   │   ├── PendingRequests.jsx  # Pending invites
│   │   │   ├── RequestsPage.jsx     # Requests management
│   │   │   ├── DeleteConfirmation.jsx  # Delete dialog
│   │   │   └── Priority.jsx         # Priority indicator
│   │   ├── context/             # React Context
│   │   ├── pages/               # Page components
│   │   │   ├── HomePage.jsx         # Main dashboard
│   │   │   ├── LoginPage.jsx        # Login page
│   │   │   ├── SignupPage.jsx       # Signup page
│   │   │   └── JoinProject.jsx      # Join via invite link
│   │   ├── utils/               # Utility functions
│   │   ├── App.jsx              # Main App component
│   │   ├── main.jsx             # Entry point
│   │   └── index.css            # Global styles
│   ├── vite.config.js
│   └── package.json
│
├── package.json                 # Root package.json
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## � License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

**animekoon434-afk**

- GitHub: [@animekoon434-afk](https://github.com/animekoon434-afk)

---

<p align="center">Made with ❤️ using the MERN Stack</p>
