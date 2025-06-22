import AddStock from "@/features/admin/stock/AddStock"
import StockTable from "@/features/admin/stock/StockTable"
import { handleError } from "@/shared/lib/handle-error"
import { handleToast } from "@/shared/lib/handle-toast"
import { deleteStock, fetchAllStock } from "@/store/stock/stockThunk"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const AdminStock = () => {
    const { data, loading, pagination } = useSelector((state) => state.stock)
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
        dispatch(deleteStock(currentId))
            .unwrap()
            .then(() => handleToast.success("Delete stock succefully"))
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
        dispatch(fetchAllStock({ search: searchQuery, page, limit }))
    }, [dispatch, searchQuery, page]);

    return (
        <div className="p-6 bg-white rounded-md">
            <StockTable datas={data} pagination={pagination} page={page} setPage={setPage} limit={limit} onAdded={onAdded} onEdit={onEdit} onDelete={onDelete} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <AddStock open={open} onOpenChange={setOpen} title={"Formulir Add Categories"} />
        </div>
    )
}

export default AdminStock