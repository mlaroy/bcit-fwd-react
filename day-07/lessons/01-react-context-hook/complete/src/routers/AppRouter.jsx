import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from '../context/GlobalState';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAccount from '../pages/PageAccount';
import PageContact from '../pages/PageContact';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {
  return (
    <BrowserRouter>
        <GlobalProvider>
            <div className="wrapper">
                <Header />
                <Nav />
                <Routes>
                    <Route path="/" exact element={<PageHome />} />
                    <Route path="/account" element={<PageAccount />} />
                    <Route path="/contact" element={<PageContact />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </div>
        </GlobalProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
