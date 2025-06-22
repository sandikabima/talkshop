import AddProduct from "@/features/admin/product/AddProduct"
import ProductTable from "@/features/admin/product/ProductTable"
import { handleError } from "@/shared/lib/handle-error"
import { handleToast } from "@/shared/lib/handle-toast"
import { deleteProduct, fetchAllProduct } from "@/store/product/productThunk"
import { deleteUser } from "@/store/user/userThunk"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const AdminProduct = () => {

	const { data, loading, pagination } = useSelector((state) => state.product)
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
		dispatch(deleteProduct(currentId))
			.unwrap()
			.then(() => handleToast.success("Delete product succefully"))
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
		dispatch(fetchAllProduct({ search: searchQuery, page, limit }))
	}, [dispatch, searchQuery, page]);
	return (
		<div className="p-6 bg-white rounded-md">
			<ProductTable datas={data} pagination={pagination} limit={limit} page={page} setPage={setPage} onAdded={onAdded} onEdit={onEdit} onDelete={onDelete} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
			<AddProduct open={open} onOpenChange={setOpen} title={"Formulir Add Product"} />
		</div>
	)
}

export default AdminProduct