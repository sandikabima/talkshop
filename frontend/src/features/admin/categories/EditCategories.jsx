import ModalCustom from "@/shared/components/common/atom/Modal-Custom"
import CommonForm from "@/shared/components/common/organisms/FormCommon"
import { categoriesFormControls, categoriesSchema } from "@/shared/config"
import { handleError } from "@/shared/lib/handle-error"
import { handleToast } from "@/shared/lib/handle-toast"
import { fetchCategoryById, updateCategory } from "@/store/categories/categoriesThunk"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const initialState = {
    name: "",
}


const EditCategories = ({ openEdit, onOpenChange, title, currentId }) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const validateForm = () => {
        const { error } = categoriesSchema.validate(formData, { abortEarly: false });
        if (error) {
            const newErrors = error.details.reduce((acc, err) => {
                acc[err.path[0]] = err.message;
                return acc;
            }, {});
            setErrors(newErrors);
            return false;
        }
        setErrors({});
        return true;
    };

    const onSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            dispatch(updateCategory({ id: currentId, data: formData })).unwrap().then(() => handleToast.success('Update user successfuly')).catch((error) => handleToast.error(handleError(error)))
        }
        setFormData(initialState)
        onOpenChange(false)
    }

    useEffect(() => {
        if (!openEdit) return;

        dispatch(fetchCategoryById(parseInt(currentId))).unwrap()
            .then((data) => {
                setFormData({
                    name: data?.data?.name,
                })
            })
    }, [openEdit])

    return (
        <ModalCustom open={openEdit} onOpenChange={onOpenChange} title={title}>
            <CommonForm
                formControl={categoriesFormControls}
                formData={formData}
                buttonText={"Edit"}
                onSubmit={onSubmit}
                setFormData={setFormData}
                errors={errors}
            />
        </ModalCustom>
    )
}

export default EditCategories