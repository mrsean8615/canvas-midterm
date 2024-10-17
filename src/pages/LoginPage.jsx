import { fetchUsers } from "../hooks/fetchUsers";


export default function LoginPage() {
    const getUsers = fetchUsers();
    
    console.log(getUsers)

    return( 
        <div>
            <p>heyo</p>

        </div>
    )
}