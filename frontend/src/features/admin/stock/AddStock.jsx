import ModalCustom from "@/shared/components/common/atom/Modal-Custom"
import CommonForm from "@/shared/components/common/organisms/FormCommon"
import { stockFormControls, stockSchema } from "@/shared/config"
import { handleError } from "@/shared/lib/handle-error"
import { handleToast } from "@/shared/lib/handle-toast"
import { fetchAllProduct } from "@/store/product/productThunk"
import { postStock } from "@/store/stock/stockThunk"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const initialState = {
    productId: "",
    quantity: "",
    location: "",
};

const AddStock = ({ open, onOpenChange, title }) => {
    const { data } = useSelector((state) => state.product)
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        if (open) {
            dispatch(fetchAllProduct({limit:"all"}))
        }
    }, [open, dispatch]);

    const options = data.map(item => ({
        value: String(item.productId),
        label: item.name
    }))

    const validateForm = () => {
        const { error } = stockSchema.validate(formData, { abortEarly: false });
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
        e.preventDefault();

        if (validateForm()) {
            dispatch(postStock(formData))
                .unwrap()
                .then(() => handleToast.success('Added stock successfuly'))
                .catch((error) => handleToast.error(handleError(error)))

            setFormData(initialState)
            onOpenChange(false)
        }

    };

    return (
        <ModalCustom open={open} onOpenChange={onOpenChange} title={title}>
            <CommonForm
                formControl={stockFormControls}
                formData={formData}
                buttonText={"Simpan"}
                onSubmit={onSubmit}
                setFormData={setFormData}
                errors={errors}
                options={options}
            />
        </ModalCustom>
    )

}

export default AddStock