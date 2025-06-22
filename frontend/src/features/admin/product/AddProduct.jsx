import ModalCustom from "@/shared/components/common/atom/Modal-Custom"
import FileUpload from "@/shared/components/common/organisms/fileUpload"
import CommonForm from "@/shared/components/common/organisms/FormCommon"
import { productFormControls, productSchema } from "@/shared/config"
import { handleError } from "@/shared/lib/handle-error"
import { handleToast } from "@/shared/lib/handle-toast"
import { fetchAllCategories } from "@/store/categories/categoriesThunk"
import { postProduct } from "@/store/product/productThunk"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const initialState = {
    name: "",
    description: "",
    price: "",
    categoryId: "",
};

const AddProduct = ({ open, onOpenChange, title }) => {
    const { data } = useSelector((state) => state.categories)
    const [formData, setFormData] = useState(initialState);
    const [selectedImage, setSelectedImage] = useState(null);
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        if (open) {
            dispatch(fetchAllCategories())
        }
    }, [open, dispatch]);

    const options = data.map(item => ({
        value: String(item.categoryId),
        label: item.name
    }))

    const validateForm = () => {
        const { error } = productSchema.validate(formData, { abortEarly: false });
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
            const paylod = new FormData();
            paylod.append("name", formData.name);
            paylod.append("description", formData.description);
            paylod.append("price", formData.price);
            paylod.append("categoryId", formData.categoryId);
            paylod.append("image", selectedImage);

            // Cek isi payload
            // for (let [key, value] of paylod.entries()) {
            //     console.log(key, value);
            // }

            dispatch(postProduct(paylod))
                .unwrap()
                .then(() => handleToast.success('Added user successfuly'))
                .catch((error) => handleToast.error(handleError(error)))

            setFormData(initialState)
            onOpenChange(false)
        }

    };

    return (
        <ModalCustom open={open} onOpenChange={onOpenChange} title={title}>
            <div className="flex gap-4">
                <div>
                    <FileUpload onFileChange={setSelectedImage} />
                </div>
                <div>
                    <CommonForm
                        formControl={productFormControls}
                        formData={formData}
                        buttonText={"Simpan"}
                        onSubmit={onSubmit}
                        setFormData={setFormData}
                        errors={errors}
                        options={options}
                    />
                </div>
            </div>
        </ModalCustom>
    )
}

export default AddProduct