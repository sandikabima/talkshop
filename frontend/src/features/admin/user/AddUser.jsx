import ModalCustom from "@/shared/components/common/atom/Modal-Custom"
import CommonForm from "@/shared/components/common/organisms/FormCommon"
import { registerFormControls, schemaRegister } from "@/shared/config"
import { handleError } from "@/shared/lib/handle-error"
import { handleToast } from "@/shared/lib/handle-toast"
import { postUser } from "@/store/user/userThunk"
import { useState } from "react"
import { useDispatch } from "react-redux"

const initialState = {
    username: "",
    email: "",
    password: "",
};

const AddUser = ({ open, onOpenChange, title }) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()

    const validateForm = () => {
        const { error } = schemaRegister.validate(formData, { abortEarly: false });
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
            dispatch(postUser(formData))
                .unwrap()
                .then(() => handleToast.success('Added user successfuly'))
                .catch((error) => handleToast.error(handleError(error)))

            setFormData(initialState)
            onOpenChange(false)
        }

    };

    return (
        <ModalCustom open={open} onOpenChange={onOpenChange} title={title}>
            <CommonForm
                formControl={registerFormControls}
                formData={formData}
                buttonText={"Simpan"}
                onSubmit={onSubmit}
                setFormData={setFormData}
                errors={errors}
            />
        </ModalCustom>
    )

}

export default AddUser