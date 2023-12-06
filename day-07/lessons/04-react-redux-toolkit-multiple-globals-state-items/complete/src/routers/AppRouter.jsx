import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAccount from '../pages/PageAccount';
import PageContact from '../pages/PageContact';
import PageNotFound from '../pages/PageNotFound';
import PageGames from '../pages/PageGames';
import PageCart from '../pages/PageCart';
import { appTitle, appTagLine } from '../globals/globalVariables';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header title={appTitle} tagLine={appTagLine} />
        <Nav />
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route path="/account" element={<PageAccount />} />
          <Route path="/games" element={<PageGames />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="/cart" element={<PageCart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;