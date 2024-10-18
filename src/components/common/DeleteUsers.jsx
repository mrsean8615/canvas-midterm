import { useApi } from "../../api/apiV3";


export const DeleteUsers = () => {
    const usersApi = useApi('users')

    const handleSubmit = () => {
        usersApi.getAll().then(users => users.forEach(user => usersApi.delete(user.id)));
    }

    return (
        <button onClick={handleSubmit}>Delete Users</button>
    )
}