import { cn } from "@/shared/lib/utils";
import { NavLink } from "react-router-dom";

const SidebarLink = ({ icon: Icon, label, to }) => {
  return (
    <NavLink to={to} className={({ isActive }) => cn("flex items-center gap-2", isActive ? "bg-black text-white w-full p-2 rounded-md" : "")}>
      <Icon className="w-4 h-4 text-inherit" />
      {label}
    </NavLink>
  );
};

export default SidebarLink;