import { fetchUsers } from "../hooks/fetchUsers";
import { FormProvider } from "../context/FormProvider";
import { TextInput } from "../components/common/TextInput";
import { SubmitButton } from "../components/common/SubmitButton";
import { useAuth } from "../context/IsLogged";
import { Link, useNavigate } from "react-router-dom";


export default function LoginPage() {
    const navigate = useNavigate()
    const { isLogged, login, logout } = useAuth();
    const getUsers = fetchUsers()

    const handleLog = () => {
        login()
    }

    const handleSubmit = (data) => {
        checkLogin(getUsers, data)
    }

    const checkLogin = (users, data) => {
        {users.forEach((user) => {
            if(user.email.toLowerCase() === data.email.toLowerCase() && user.password === data.password) {
                handleLog();
                navigate('/homepage')
            } else {
                console.log('wrong stuff')
            }
        })}
    }
    

    return( 
        <div className="login-page">
                <FormProvider onSubmit={handleSubmit}>
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