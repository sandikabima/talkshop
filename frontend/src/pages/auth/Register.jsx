import CommonForm from "@/shared/components/common/organisms/FormCommon";
import { registerFormControls, schemaRegister } from "@/shared/config";
import { handleError } from "@/shared/lib/handle-error";
import { handleToast } from "@/shared/lib/handle-toast";
import { register } from "@/store/auth/authThunk";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  email: "",
  password: "",
};

const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
      dispatch(register(formData))
        .unwrap()
        .then((data) => {
          handleToast.success(data.message || "Register Successfully");
          navigate("/auth/login");
        })
        .catch((error) => handleToast.error(handleError(error)))
    }
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6 bg-white px-4 py-2 rounded-lg">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Create new account
        </h1>
        <p>
          Already have an account
          <Link to={"/auth/login"} className="ml-2 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControl={registerFormControls}
        formData={formData}
        buttonText={"Registrasi"}
        onSubmit={onSubmit}
        setFormData={setFormData}
        errors={errors}
      />
    </div>
  );
};

export default AuthRegister;
