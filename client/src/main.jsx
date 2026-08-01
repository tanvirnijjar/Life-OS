import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./router";

import { TaskProvider } from "./context/TaskContext";
import { GoalProvider } from "./context/GoalContext";
import { NoteProvider } from "./context/NoteContext";
// We'll add this later
// import { NoteProvider } from "./context/NoteContext";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
 <TaskProvider>
  <GoalProvider>
    <NoteProvider>
      <RouterProvider router={router} />
    </NoteProvider>
  </GoalProvider>
</TaskProvider>
);