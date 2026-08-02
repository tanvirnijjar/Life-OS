import "./Profile.css";

import { useTasks } from "../../context/TaskContext";
import { useNotes } from "../../context/NoteContext";

function Profile() {
  const { tasks } = useTasks();
  const { notes } = useNotes();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  const totalNotes = notes.length;

  const productivity =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );

  return (
    <div className="profile-page">

      {/* Header */}

      <div className="profile-header">

        <div className="profile-avatar">
          👤
        </div>

        <div className="profile-info">
          <h1>Tanvir Kaur</h1>

          <p>BCA Student • Full Stack Developer</p>

          <span>🚀 Building Life OS v1.0</span>
        </div>

      </div>

      {/* Stats */}

      <div className="profile-stats">

        <div className="profile-box">
          <h2>{totalTasks}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="profile-box">
          <h2>{completedTasks}</h2>
          <p>Completed</p>
        </div>

        <div className="profile-box">
          <h2>{pendingTasks}</h2>
          <p>Pending</p>
        </div>

        <div className="profile-box">
          <h2>{totalNotes}</h2>
          <p>Notes</p>
        </div>

        <div className="profile-box">
          <h2>{productivity}%</h2>
          <p>Productivity</p>
        </div>

      </div>

      {/* Achievements */}

      <div className="profile-achievements">

        <h2>🏆 Achievements</h2>

        <div className="achievement-list">

          <div className="achievement">
            🚀 Life OS Builder
          </div>

          <div className="achievement">
            ✅ Task Master
          </div>

          <div className="achievement">
            🎯 Goal Crusher
          </div>

          <div className="achievement">
            📝 Notes Creator
          </div>

          <div className="achievement">
            🔥 Productivity Hero
          </div>

          <div className="achievement">
            💻 React Developer
          </div>

        </div>

      </div>

      {/* About */}

      <div className="profile-about">

        <h2>About</h2>

        <p>
          Passionate BCA student focused on Full Stack Development,
          React, Firebase and building modern productivity
          applications. Currently developing Life OS as a complete
          personal productivity platform.
        </p>

      </div>

    </div>
  );
}

export default Profile;