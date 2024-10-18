import { fetchUsers } from "../hooks/fetchUsers";
import { FormProvider } from "../context/FormProvider";
import { TextInput } from "../components/common/TextInput";
import { SubmitButton } from "../components/common/SubmitButton";


export default function LoginPage() {
    const getUsers = fetchUsers();


    const handleSubmit = (data) => {
        console.log(data)
        login(getUsers, data)
        console.log(getUsers);
    }

    const login = (users, data) => {
        {users.map((user) => {
            console.log(user.id);
        })}
    }
    

    return( 
        <div>
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

        </div>
    )
}