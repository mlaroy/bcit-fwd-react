// App Router

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageKittenProfile from '../pages/PageKittenProfile';
import PageFavs from '../pages/PageFavs';
import PageContact from '../pages/PageContact';
import PageNotFound from '../pages/PageNotFound';
import { appTitle, appAuthor } from '../globals/globalVariables';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header title={appTitle} />
        <Nav />
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route path="/kitten-profile/:id" element={<PageKittenProfile />} />
          <Route path="/favs" element={<PageFavs />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer author={appAuthor} />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
