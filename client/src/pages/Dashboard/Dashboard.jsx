import "./Dashboard.css";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Dashboard() {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks =
    totalTasks - completedTasks;

  const productivity =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );

  return (
    <motion.div
      className="dashboard"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Welcome */}

      <motion.div variants={cardVariants}>
        <WelcomeCard />
      </motion.div>

      {/* Stats */}

      <motion.div variants={cardVariants}>
        <StatsCards
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          pendingTasks={pendingTasks}
          productivity={productivity}
        />
      </motion.div>

      {/* Row 1 */}

      <div className="dashboard-row row1">
        <motion.div
          className="recent-tasks"
          variants={cardVariants}
        >
          <RecentTasks tasks={tasks} />
        </motion.div>

        <motion.div
          className="progress"
          variants={cardVariants}
        >
          <ProgressCard
            totalTasks={totalTasks}
            completedTasks={completedTasks}
            productivity={productivity}
          />
        </motion.div>
      </div>

      {/* Row 2 */}

      <div className="dashboard-row row2">
        <motion.div variants={cardVariants}>
          <RecentNotes />
        </motion.div>

        <motion.div variants={cardVariants}>
          <OverviewCard />
        </motion.div>

        <motion.div variants={cardVariants}>
          <ActiveGoals />
        </motion.div>
      </div>

      {/* Row 3 */}

      <div className="dashboard-row row3">
        <motion.div variants={cardVariants}>
          <PedometerWidget />
        </motion.div>

        <motion.div variants={cardVariants}>
          <QuickActions />
        </motion.div>

        <motion.div variants={cardVariants}>
          <UpcomingDeadlines />
        </motion.div>
      </div>

      {/* Quote */}

      <motion.div variants={cardVariants}>
        <QuoteCard />
      </motion.div>
    </motion.div>
  );
}

export default Dashboard;