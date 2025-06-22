import AuthCard from "../molecules/AuthCard"
import FormControl from "./FormControl"


const CommonForm = ({ formControl, formData, buttonText, onSubmit, setFormData, errors, options }) => {
    
    return (
        <AuthCard>
            <FormControl formControl={formControl} formData={formData} buttonText={buttonText} onSubmit={onSubmit} setFormData={setFormData} errors={errors} options={options}/>
        </AuthCard>
    )
}
export default CommonForm