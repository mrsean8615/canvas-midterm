import { useApi } from "../../api/apiV3";

export const DeleteContent = () => {
    const usersApi = useApi('users');


    const handleClick = () => {
        usersApi.deleteAll()
    }

    return (
        <button onClick={handleClick}>Delete Everything?</button>
    )
}