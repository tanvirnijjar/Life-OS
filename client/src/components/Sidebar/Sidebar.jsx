import { NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiCheckSquare,
  FiCalendar,
  FiFileText,
  FiTarget,
  FiUser,
  FiSettings,
  FiLogOut,
  FiX,
} from "react-icons/fi";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import toast from "react-hot-toast";

import "./Sidebar.css";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FiHome />,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: <FiCheckSquare />,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: <FiCalendar />,
  },
  {
    name: "Notes",
    path: "/notes",
    icon: <FiFileText />,
  },
  {
    name: "Goals",
    path: "/goals",
    icon: <FiTarget />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <FiUser />,
  },
  {
    name: "Pedometer",
    path: "/pedometer",
    icon: "👣",
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <FiSettings />,
  },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);

      toast.success("👋 Logged Out Successfully");

      setSidebarOpen(false);

      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <aside
      className={`sidebar ${
        sidebarOpen ? "sidebar-open" : ""
      }`}
    >
      {/* Mobile Close Button */}
      <button
        className="close-sidebar"
        onClick={() => setSidebarOpen(false)}
      >
        <FiX />
      </button>

      {/* Logo */}
      <div className="sidebar-logo">
        <h2>🌼 Life OS</h2>
        <p>Your Productivity Hub</p>
      </div>

      {/* Navigation */}
      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <span className="icon">
              {item.icon}
            </span>

            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <FiLogOut />
        <span>Logout</span>
      </button>

      {/* Footer */}
      <div className="sidebar-footer">
        <small>🌼 Life OS 3.0</small>
        <p>Stay Focused • Stay Consistent 🚀</p>
      </div>
    </aside>
  );
}

export default Sidebar;