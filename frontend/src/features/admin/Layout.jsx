import IconButton from "@/shared/components/common/atom/IconButton"
import AdminSidebar from "@/shared/components/common/organisms/Sidebar"
import { handleError } from "@/shared/lib/handle-error"
import { logout } from "@/store/auth/authThunk"
import { AlignLeft, LogOut } from "lucide-react"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"


const AdminLayout = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
            .unwrap()
            .then((data) => handleToast.success(data.message))
            .catch((error) => handleToast.error(handleError(error)))
    }

    return (
        <section className="flex h-screen">
            <div className="hidden md:block md:w-1/5 p-4">
                <AdminSidebar />
            </div>
            <div className="w-full md:w-4/5 bg-[#E7E7F4] flex flex-col">
                <div className="w-full bg-white p-4 flex items-center justify-between">
                    <div><IconButton icon={AlignLeft} size={16} /></div>
                    <div><IconButton icon={LogOut} size={16} className={"bg-neutral-900 text-white hover:bg-neutral-700"} onClick={handleLogout}>Logout</IconButton></div>
                </div>
                <div className="p-4"><Outlet /></div>
            </div>
        </section>
    )
}

export default AdminLayout