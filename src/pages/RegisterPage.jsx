import { useState } from "react";
import { useApi } from "../api/apiV3"
import { SelectMenu } from "../components/common/SelectMenu";
import { SubmitButton } from "../components/common/SubmitButton";
import { TextInput } from "../components/common/TextInput";
import { FormProvider } from "../context/FormProvider";
import { NumberInput } from "../components/common/NumberInput";
import { useUserInfo } from "../context/TrackUser";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/IsLogged';


export default function Register() {
    const [ error, setError ] = useState('')
    const navigate = useNavigate()
    const {userInfo, updateUserInfo} = useUserInfo()
    const { isLogged, login, logout } = useAuth();


    const usersApi = useApi("users")
    
    const handleSubmit = async (data) => {
        if (!data.email || 
            !data.password || 
            !data.firstName ||
            !data.lastName ||
            !data.age) {
            setError('One or both fields are empty')
        } else {
            if (data.password !== data.verifyPassword) {
                setError('Passwords do not match')
            } else {
                await usersApi.create(data);
                updateUserInfo(data)
                login();
                navigate('/homepage')

            }
        }
    }

    return( 
        <div className="login-page rp">
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
                    Verify Password:
                    <TextInput type="password" name="verifyPassword"/>
                </label>
                <label>
                    First Name:
                    <TextInput type="text" name="firstName"/>
                </label>
                <label>
                    Last Name:
                    <TextInput type="text" name="lastName"/>
                </label>
                <label>
                    Age:
                    <NumberInput type="number" name="age"/>
                </label>
                <label>
                    <SelectMenu name='access'/>
                </label>

                <SubmitButton>Register</SubmitButton>
                
            </FormProvider> 
        </div>

    )
}