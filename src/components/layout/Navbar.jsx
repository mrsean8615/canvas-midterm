
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/IsLogged';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function NavBar() {
    const { isLogged, login, logout} = useAuth()
    const navigate = useNavigate();


    const handleLogout = () => {
        logout()
        navigate('/homepage')
    }

    useEffect(() => {
        if(!isLogged) {
            // wonky way to do this but it works
            const path = window.location.pathname;
            if (path !== '/homepage' && path !== '/loginpage' && path !== '/register') {
                navigate('/homepage');
            }
        }
    }, [isLogged, navigate])

    return (

        <div className='nav-container'>
        
            <ul>
                    {!isLogged ? (
                        <>
                            <Link to='/homepage'><li>Home</li></Link>
                            <Link to='/loginpage'><li>Login</li></Link>
                            <Link to='/register'><li>Register</li></Link>
                        </>
                    ): (
                        <></>
                    )}


                    {isLogged ? ( 
                        <>
                        <Link to='/profilepage'><li>Profile Page</li></Link>
                        <Link to='/announcements'><li>Announcements</li></Link>
                        <Link to='/modules'><li>Modules</li></Link>
                        <button className='logout-btn' onClick={handleLogout}>Logout</button>
                        </>
                    ): <></>}


            </ul>

        </div>
    )

}
