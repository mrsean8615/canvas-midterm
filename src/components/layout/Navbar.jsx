
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (

        <div>
        
            <ul>
                <li>
                    <Link to='/homepage'>Home</Link>
                    <Link to='/loginpage'>Login</Link>
                    <Link to='/register'>Register</Link>


                </li>
            </ul>

        </div>
    )

}
