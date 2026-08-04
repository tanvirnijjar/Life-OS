import { createBrowserRouter } from "react-router-dom";

import App from "./App";

// Layout
import DashboardLayout from "./components/layout/DashboardLayout/DashboardLayout";

// Protected Route
import ProtectedRoute from "./ProtectedRoute";

// Landing Page
import Home from "./pages/Home/Home";

// Authentication
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// Dashboard Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Calendar from "./pages/Calendar/Calendar";
import Notes from "./pages/Notes/Notes";
import Goals from "./pages/Goals/Goals";
import Settings from "./pages/Settings/Settings";
import Tasks from "./pages/Tasks/Tasks";
import Pedometer from "./pages/Pedometer/Pedometer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Home
      {
        index: true,
        element: <Home />,
      },

      // Authentication
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },

      // Protected Routes
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              {
                path: "dashboard",
                element: <Dashboard />,
              },
              {
                path: "tasks",
                element: <Tasks />,
              },
              {
                path: "calendar",
                element: <Calendar />,
              },
              {
                path: "notes",
                element: <Notes />,
              },
              {
                path: "goals",
                element: <Goals />,
              },
              {
                path: "profile",
                element: <Profile />,
              },
              {
                path: "pedometer",
                element: <Pedometer />,
              },
              {
                path: "settings",
                element: <Settings />,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "7rem",
            margin: 0,
            color: "#2563EB",
          }}
        >
          404
        </h1>

        <h2
          style={{
            marginTop: "10px",
            color: "#1E293B",
          }}
        >
          Oops! Page Not Found
        </h2>

        <p
          style={{
            maxWidth: "420px",
            color: "#64748B",
            margin: "20px 0 30px",
            lineHeight: 1.6,
          }}
        >
          The page you're looking for doesn't exist or has
          been moved.
        </p>

        <a
          href="/dashboard"
          style={{
            background: "#2563EB",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: "600",
            transition: ".3s",
          }}
        >
          🏠 Back to Dashboard
        </a>
      </div>
    ),
  },
]);

export default router;