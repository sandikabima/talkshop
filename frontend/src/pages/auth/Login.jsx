import CommonForm from "@/shared/components/common/organisms/FormCommon"
import { loginFormControls, schemaLogin } from "@/shared/config"
import { handleError } from "@/shared/lib/handle-error"
import { handleToast } from "@/shared/lib/handle-toast"
import { login } from "@/store/auth/authThunk"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const initialState = {
    email: "",
    password: "",
}

const AuthLogin = () => {
    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()

    const validateForm = () => {
        const { error } = schemaLogin.validate(formData, { abortEarly: false });
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
            dispatch(login(formData))
                .unwrap()
                .then((data) => handleToast.success(data.message || "Login Succesfully"))
                .catch((error) => handleToast.error(handleError(error)))
        }
    }

    return (
        <div className="mx-auto w-full max-w-md space-y-6 bg-white px-4 py-2 rounded-lg">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight">
                    Sign in to your account
                </h1>
                <p>
                    Don't have an account{" "}
                    <Link to={"/auth/register"} className="ml-2 font-medium hover:underline">
                        Register
                    </Link>
                </p>
            </div>
            <CommonForm
                formControl={loginFormControls}
                formData={formData}
                buttonText={"Login"}
                onSubmit={onSubmit}
                setFormData={setFormData}
                errors={errors} />
        </div>
    )
}

export default AuthLogin