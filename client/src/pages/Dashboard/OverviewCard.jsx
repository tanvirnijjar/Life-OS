import { useTasks } from "../../context/TaskContext";
import { useGoals } from "../../context/GoalContext";
import { useNotes } from "../../context/NoteContext";

function OverviewCard() {
  const { tasks } = useTasks();
  const { goals } = useGoals();
  const { notes } = useNotes();

  const completedGoals = goals.filter(
    (goal) => goal.completed
  ).length;

  return (
    <div className="section-card">
      <h2>📊 Life OS Overview</h2>

      <ul>
        <li>✅ Tasks: {tasks.length}</li>
        <li>🎯 Goals: {goals.length}</li>
        <li>🏆 Completed Goals: {completedGoals}</li>
        <li>📝 Notes: {notes.length}</li>
      </ul>
    </div>
  );
}

export default OverviewCard;