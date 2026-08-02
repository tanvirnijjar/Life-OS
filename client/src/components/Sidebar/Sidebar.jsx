import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiCheckSquare,
  FiCalendar,
  FiFileText,
  FiTarget,
  FiUser,
  FiSettings,
} from "react-icons/fi";
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

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>🌼 Life OS</h2>
        <p>Your Productivity Hub</p>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span className="icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <small>🌼 Life OS 3.0</small>
        <p>Stay Focused • Stay Consistent 🚀</p>
      </div>
    </aside>
  );
}

export default Sidebar;