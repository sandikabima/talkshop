import AddUser from "@/features/admin/user/AddUser"
import EditUser from "@/features/admin/user/EditUser"
import UserTable from "@/features/admin/user/UserTable"
import { handleError } from "@/shared/lib/handle-error"
import { handleToast } from "@/shared/lib/handle-toast"
import { deleteUser, fetchAllUser } from "@/store/user/userThunk"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


const AdminUser = () => {
    const { data, loading, pagination } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [page, setPage] = useState(1)
    const limit = 5

    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false);
    const [currentId, setCurrentId] = useState(null)

    const onAdded = () => {
        setOpen(true)
    }

    const onEdit = (getCurrentId) => {
        setCurrentId(getCurrentId);
        setOpenEdit(true);
    }

    const onDelete = (currentId) => {
        dispatch(deleteUser(currentId))
            .unwrap()
            .then(() => handleToast.success("Delete user succefully"))
            .catch((error) => handleToast.error(handleError(error)))
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            setSearchQuery(inputValue);
            setPage(1);
        }, 300);

        return () => clearTimeout(delay);
    }, [inputValue]);

    useEffect(() => {
        dispatch(fetchAllUser({ search: searchQuery, page, limit }))
    }, [dispatch, searchQuery, page]);
    return (
        <div className="p-6 bg-white rounded-md">
            <UserTable datas={data} pagination={pagination} limit={limit} page={page} setPage={setPage} onAdded={onAdded} onEdit={onEdit} onDelete={onDelete} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <AddUser open={open} onOpenChange={setOpen} title={"Formulir Add User"} />
            <EditUser openEdit={openEdit} onOpenChange={setOpenEdit} title={"Formulir Edit User"} currentId={currentId} />
        </div>
    )
}

export default AdminUser