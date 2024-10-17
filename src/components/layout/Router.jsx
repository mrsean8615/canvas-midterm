import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/Homepage';
import NavBar from './Navbar';
import LoginPage from '../../pages/LoginPage';
import Register from '../../pages/RegisterPage';

export default function Router() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/homepage' element={<HomePage />}/>
                <Route path='/loginpage' element={<LoginPage />}/>
                <Route path='/register' element={<Register />}/>


            </Routes>
        </BrowserRouter>

    )
}

