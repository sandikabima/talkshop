import {
  BookOpenText,
  LayoutDashboard,
  ShoppingCart,
  Users,
  UserRoundCog,
  BookText,
  UserRoundPlus,
  ChartBarStacked,
  FolderPen,
  FilePenLine
} from "lucide-react";



import SidebarLink from "../atom/SidebarLink";
import { CommandGroup, CommandItem } from "@/components/ui/command";
import { menu } from "@/shared/config";


const SidebarMenu = () => {
  const iconMapping = {
    LayoutDashboard,
    BookOpenText,
    Users,
    ShoppingCart,
    UserRoundCog,
    BookText,
    UserRoundPlus,
    ChartBarStacked,
    FolderPen,
    FilePenLine
  };

  return (
    <>
      {menu.map((group) => (
        <CommandGroup key={group.name} heading={group.name}>
          {group.subMenu.map((item) => {
            const Icon = iconMapping[item.icon];
            return (
              <CommandItem key={item.label}>
                <SidebarLink icon={Icon} label={item.label} to={item.to} />
              </CommandItem>
            );
          })}
        </CommandGroup>
      ))}
    </>
  );
};

export default SidebarMenu;
