import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import router from "./router";

import { TaskProvider } from "./context/TaskContext";
import { GoalProvider } from "./context/GoalContext";
import { NoteProvider } from "./context/NoteContext";
import { ThemeProvider } from "./context/ThemeContext";

import "./App.css";
import "./styles/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <TaskProvider>
      <GoalProvider>
        <NoteProvider>

          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 2500,
              style: {
                borderRadius: "14px",
                background: "#2563eb",
                color: "#fff",
                fontWeight: "600",
              },
            }}
          />

          <RouterProvider router={router} />

        </NoteProvider>
      </GoalProvider>
    </TaskProvider>
  </ThemeProvider>
);