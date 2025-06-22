
import { Command, CommandEmpty, CommandList, CommandSeparator } from "@/components/ui/command";
import SidebarMenu from "../molecules/SidebarMenu";


const AdminSidebar = () => {
    return (
        <Command>
            <CommandList>
                <CommandEmpty>No result Found</CommandEmpty>
                <SidebarMenu />
                <CommandSeparator />
            </CommandList>
        </Command>
    );
};

export default AdminSidebar;
