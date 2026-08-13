import api from "./api";

// ==========================
// Get All Tasks
// ==========================
export const getTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

// ==========================
// Create Task
// ==========================
export const createTask = async (taskData) => {
  const response = await api.post("/tasks", taskData);
  return response.data;
};

// ==========================
// Update Task
// ==========================
export const updateTask = async (id, taskData) => {
  const response = await api.put(`/tasks/${id}`, taskData);
  return response.data;
};

// ==========================
// Toggle Task Completion
// ==========================
export const toggleTask = async (id) => {
  const response = await api.patch(`/tasks/${id}/toggle`);
  return response.data;
};

// ==========================
// Delete Task
// ==========================
export const deleteTask = async (id) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};