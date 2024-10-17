import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/Homepage';
import NavBar from './Navbar';

export default function Router() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/homepage' element={<HomePage />}/>
            </Routes>
        </BrowserRouter>

    )
}

