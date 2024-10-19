import { useFetchData } from "../hooks/useFetchData";
import { FormProvider } from "../context/FormProvider";
import { TextInput } from "../components/common/TextInput";
import { SubmitButton } from "../components/common/SubmitButton";
import { useAuth } from "../context/IsLogged";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserInfo } from "../context/TrackUser";


export default function LoginPage() {
    const navigate = useNavigate()
    const { isLogged, login, logout } = useAuth();
    const [ error, setError ] = useState('')
    const getUsers = useFetchData('users')
    const { userInfo, updateUserInfo } = useUserInfo()

    const handleLog = () => {
        login()
    }
    const handleUpdate = (data) => {
        updateUserInfo({
            'id': data.id,
            'email': data.email,
            'firstName': data.firstName,
            'lastName': data.lastName,
            'age': data.age,
            'access': data.access
        })
    }

    const handleSubmit = async (data) => {
       await checkLogin(getUsers, data)
    }

    const checkLogin = (users, data) => {
        {users.forEach((user) => {
            if(data.email !== undefined && data.password !== undefined) {
                if(users.length !== 0) {
                    if(user.email.toLowerCase() === data.email.toLowerCase() && user.password === data.password) {
                        handleUpdate(user)
                        handleLog();
                        navigate('/homepage')
                    } else {
                        setError('Invaild email or password')
                    }
                } else {
                    setError('There are no users in the db yet.')
                }
            } else {
                setError('Please fill in all the inputs')
            }


        })}
    }
    

    return( 
        <div className="login-page">
                <FormProvider onSubmit={handleSubmit}>
                <span>{error}</span>
                <label>
                    Email:
                    <TextInput type="email" name="email"/>
                </label>
                <label>
                    Password:
                    <TextInput type="password" name="password"/>
                </label>
                <SubmitButton>Login</SubmitButton>
                <Link to='/register'><p>Don't have an account? Click Here.</p></Link>
            </FormProvider>

        </div>
    )
}