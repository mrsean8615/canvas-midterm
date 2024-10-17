import { useApi } from "../api/apiV3"
import { SubmitButton } from "../components/common/SubmitButton";
import { TextInput } from "../components/common/TextInput";
import { FormProvider } from "../context/FormProvider";


export default function Register() {
    const usersApi = useApi("users")
    
    const handleSubmit = async (data) => {
        usersApi.create(data);
        const submitData = usersApi.getAll();
        console.log(data);
        console.log(submitData)
    }

    return( 
        <FormProvider onSubmit={handleSubmit}>
            <label>
                Email:
                <TextInput type="email" name="email"/>
            </label>
            <label>
                Password:
                <TextInput type="password" name="password"/>
            </label>
            <SubmitButton>Register</SubmitButton>
        </FormProvider>
    )
}