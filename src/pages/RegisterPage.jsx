import { useState } from "react";
import { useApi } from "../api/apiV3"
import { SelectMenu } from "../components/common/SelectMenu";
import { SubmitButton } from "../components/common/SubmitButton";
import { TextInput } from "../components/common/TextInput";
import { FormProvider } from "../context/FormProvider";


export default function Register() {
    const [ error, setError ] = useState('')

    const usersApi = useApi("users")
    
    const handleSubmit = async (data) => {
        if (data.email === undefined || data.password === undefined) {
            setError('One or both fields are empty')
        } else {
            usersApi.create(data);
            const submitData = usersApi.getAll();
            console.log(data);
            console.log(submitData)
        }

    }

    return( 
        <div className="login-page">
            <FormProvider onSubmit={handleSubmit}>
                <p>{error}</p>
                <label>
                    Email:
                    <TextInput type="email" name="email"/>
                </label>
                <label>
                    Password:
                    <TextInput type="password" name="password"/>
                </label>
                <label>
                    <SelectMenu name='access' />
                </label>
                <SubmitButton>Register</SubmitButton>
                
            </FormProvider> 
        </div>

    )
}