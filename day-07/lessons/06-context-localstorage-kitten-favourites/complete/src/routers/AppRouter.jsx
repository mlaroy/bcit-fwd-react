import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Nav from '../components/Nav';
import Header from '../components/Header'

// routes/pages
import PageHome from '../routes/PageHome';
import PageKittenProfile from '../routes/PageKittenProfile'
import PageFavs from '../routes/PageFavs'
import PageNotFound from '../routes/PageNotFound';

import FavsProvider from '../context/FavsContext';
import { appTitle } from '../globals/globalVariables'

function AppRouter() {
    return (
        <BrowserRouter>
            <FavsProvider>
            <div className="wrapper">
                <Header title={appTitle} />
                <Nav />
                <Routes>
                    <Route path="/" exact element={<PageHome />} />
                    <Route path="/kitten-profile/:id" element={<PageKittenProfile />} />
                    <Route path="/favs" element={<PageFavs />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
            </FavsProvider>
        </BrowserRouter>
    )
}

export default AppRouter;
