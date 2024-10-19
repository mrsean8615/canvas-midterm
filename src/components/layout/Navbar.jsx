
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/IsLogged';

export default function NavBar() {
    const { isLogged, login, logout} = useAuth()

    const handleLogout = () => {
        logout()
    }
    return (

        <div className='nav-container'>
        
            <ul>
                
                    <li><Link to='/homepage'>Home</Link></li>
                    <li><Link to='/loginpage'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>

                    {isLogged ? (
                        <>
                       <li><Link to='/profilepage'>Profile Page</Link></li>
                       <li><Link to='/announcements'>Announcements</Link></li>
                       <li><Link to='/modules'>Modules</Link></li>
                        <button className='logout-btn' onClick={handleLogout}>Logout</button>
                        </>
                    ): <></>}


            </ul>

        </div>
    )

}
