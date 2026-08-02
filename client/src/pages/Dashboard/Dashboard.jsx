import "./Dashboard.css";

import { useTasks } from "../../context/TaskContext";

import WelcomeCard from "./WelcomeCard";
import StatsCards from "./StatsCards";

import RecentTasks from "./RecentTasks";
import ProgressCard from "./ProgressCard";

import RecentNotes from "./RecentNotes";
import OverviewCard from "./OverviewCard";
import ActiveGoals from "./ActiveGoals";

import PedometerWidget from "./PedometerWidget";
import QuickActions from "./QuickActions";
import UpcomingDeadlines from "./UpcomingDeadlines";

import QuoteCard from "./QuoteCard";

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
      : Math.round(
          (completedTasks / totalTasks) * 100
        );

  return (
    <div className="dashboard">

      <WelcomeCard />

      <StatsCards
        totalTasks={totalTasks}
        completedTasks={completedTasks}
        pendingTasks={pendingTasks}
        productivity={productivity}
      />

      {/* ================= ROW 1 ================= */}

      <div className="dashboard-row row1">

        <div className="recent-tasks">
          <RecentTasks tasks={tasks} />
        </div>

        <div className="progress">
          <ProgressCard
            totalTasks={totalTasks}
            completedTasks={completedTasks}
            productivity={productivity}
          />
        </div>

      </div>

      {/* ================= ROW 2 ================= */}

      <div className="dashboard-row row2">

        <RecentNotes />

        <OverviewCard />

        <ActiveGoals />

      </div>

      {/* ================= ROW 3 ================= */}

      <div className="dashboard-row row3">

        <PedometerWidget />

        <QuickActions />

        <UpcomingDeadlines />

      </div>

      {/* ================= ROW 4 ================= */}

      <div className="dashboard-row row4">

        <QuoteCard />

      </div>

    </div>
  );
}

export default Dashboard;