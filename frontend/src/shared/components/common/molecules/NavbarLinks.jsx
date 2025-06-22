import { navbarLinks } from "@/shared/config";
import NavItem from "./NavItem";
import DropdownNavItem from "./DropdownNavItem ";

const NavbarLinks = () => {
    return (
        <nav className="flex items-center gap-6">
            {navbarLinks.map((item) => {
                if (item.type === "link") {
                    return <NavItem key={item.to} to={item.to} label={item.label} />
                }

                if (item.type === "dropdown") {
                    return (
                        <DropdownNavItem
                            key={item.label}
                            label={item.label}
                            items={item.items}
                        />
                    );
                }

                return null
            })}
        </nav>
    )
}

export default NavbarLinks