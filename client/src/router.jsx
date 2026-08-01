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

      // Protected Dashboard Routes
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
                path: "settings",
                element: <Settings />,
              },
              {
  path: "/tasks",
  element: <Tasks />,
},
{
  path: "pedometer",
  element: <Pedometer />,
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
          display: "grid",
          placeItems: "center",
          height: "100vh",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        404 | Page Not Found
      </div>
    ),
  },
]);

export default router;