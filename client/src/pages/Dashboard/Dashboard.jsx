import "./Dashboard.css";
import { useTasks } from "../../context/TaskContext";

import WelcomeCard from "./WelcomeCard";
import StatsCards from "./StatsCards";
import RecentTasks from "./RecentTasks";
import ProgressCard from "./ProgressCard";
import QuickActions from "./QuickActions";
import ActiveGoals from "./ActiveGoals";
import RecentNotes from "./RecentNotes";
import UpcomingDeadlines from "./UpcomingDeadlines";
import OverviewCard from "./OverviewCard";
function Dashboard() {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  const productivity =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="dashboard">
      <WelcomeCard />

      <StatsCards
        totalTasks={totalTasks}
        completedTasks={completedTasks}
        pendingTasks={pendingTasks}
        productivity={productivity}
      />

      <div className="dashboard-grid">
        <RecentTasks tasks={tasks} />

        <ProgressCard
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          productivity={productivity}
        />

        <ActiveGoals />

        <RecentNotes />
        <UpcomingDeadlines />
        <OverviewCard/>
        
      </div>

      <QuickActions />

    </div>
  );
}

export default Dashboard;