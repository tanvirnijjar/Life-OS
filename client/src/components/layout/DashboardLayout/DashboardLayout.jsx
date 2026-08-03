import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import Sidebar from "../../Sidebar/Sidebar";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(true)}
      >
        <FiMenu />
      </button>

      {/* Overlay */}
      <div
        className={
          sidebarOpen
            ? "sidebar-overlay show"
            : "sidebar-overlay"
        }
        onClick={() => setSidebarOpen(false)}
      />

      <div className="dashboard-layout">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;