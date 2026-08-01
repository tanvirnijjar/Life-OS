import { NavLink } from "react-router-dom";
import {
  FiHome,
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
    name: "Settings",
    path: "/settings",
    icon: <FiSettings />,
  },
];

const Sidebar = () => {
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
        <small>Life OS v1.0</small>
      </div>
    </aside>
  );
};

export default Sidebar;