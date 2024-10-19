import {BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Navbar';
import LoginPage from '../../pages/LoginPage';
import Register from '../../pages/RegisterPage';
import Announcements from '../../pages/Announcements';
import {Modules} from '../../pages/Modules';
import ProfilePage from '../../pages/ProfilePage';
import HomePage from '../../pages/HomePage';
import { CreateAnnouncement } from '../../pages/CreateAnnouncement';
import { CreateModules } from '../../pages/CreateModules';

export default function Router() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/homepage' element={<HomePage />}/>
                <Route path='/loginpage' element={<LoginPage />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/announcements' element={<Announcements />}/>
                <Route path='/modules' element={<Modules />}/>
                <Route path='/profilepage' element={<ProfilePage />}/>
                <Route path='/createannouncement' element={<CreateAnnouncement />}/>               
                <Route path='/createmodules' element={<CreateModules />}/>




            </Routes>
        </BrowserRouter>

    )
}

