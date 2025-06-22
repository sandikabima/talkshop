import AddCategories from "@/features/admin/categories/AddCategories"
import CategoriesTable from "@/features/admin/categories/CategoriesTable"
import EditCategories from "@/features/admin/categories/EditCategories"
import { handleError } from "@/shared/lib/handle-error"
import { handleToast } from "@/shared/lib/handle-toast"
import { deleteCategories, fetchAllCategories } from "@/store/categories/categoriesThunk"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const AdminCategories = () => {

	const { data, loading, pagination } = useSelector((state) => state.categories)
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
		dispatch(deleteCategories(currentId))
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
		dispatch(fetchAllCategories({ search: searchQuery, page, limit }))
	}, [dispatch, searchQuery, page]);

	return (
		<div className="p-6 bg-white rounded-md">
			<CategoriesTable datas={data} pagination={pagination} page={page} setPage={setPage} limit={limit} onAdded={onAdded} onEdit={onEdit} onDelete={onDelete} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
			<AddCategories open={open} onOpenChange={setOpen} title={"Formulir Add Categories"} />
			<EditCategories openEdit={openEdit} onOpenChange={setOpenEdit} title={"Formulir Edit Categories"} currentId={currentId} />
		</div>
	)
}

export default AdminCategories