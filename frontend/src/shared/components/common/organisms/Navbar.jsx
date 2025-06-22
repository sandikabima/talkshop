import { KeySquare } from "lucide-react"
import Logo from "../atom/Logo"
import NavbarLinks from "../molecules/NavbarLinks"
import SearchBar from "../molecules/SearchBar"
import IconButton from "../atom/IconButton"
import { useNavigate } from "react-router-dom"


const Navbar = () => {
    const navigate = useNavigate()

    return (
        <div className="h-16 md:h-24 shadow-md px-5 md:px-20 sticky top-0 z-50 bg-[#fff] border-2">
            <div className="hidden md:flex justify-between items-center h-full gap-10">
                <Logo />
                <NavbarLinks />
                <SearchBar />
                <div className="flex gap-2 items-center">
                    
                    <IconButton icon={KeySquare} size={16} onClick={() => navigate("/auth/login")} className={"bg-neutral-900 text-white hover:bg-neutral-700"}>Login</IconButton>
                </div>
            </div>

            <div className="flex md:hidden justify-between items-center h-full">
                <div className="flex gap-2 items-center">
                    {/* <MobileMenuDrawer />
                    <Logo /> */}
                </div>
                <div className="flex gap-2 items-center">
                    {/* <Icon icon={Search} size={24} />
                    <Icon icon={ShoppingCart} size={24} />
                    <IconButton icon={CircleUser} size={24} className="cursor-pointer" onClick={() => setIsDropDownOpen(prev => !prev)} /> */}
                </div>
            </div>
            <div className="absolute md:top-7 md:right-20 top-4 right-5">
                {/* <UserDropdown open={isDropDownOpen} onOpenChange={setIsDropDownOpen} handleLogout={handleLogout} /> */}
            </div>
        </div>
    )
}

export default Navbar