import { useNavigate } from "react-router-dom"


export const Modules = () => {
    const navigate = useNavigate();

    const handleNav = () => {
        navigate('/createmodules')
    }
    return (
        <div>
            <button onClick={handleNav}></button>
        </div>
    )
}