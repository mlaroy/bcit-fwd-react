// AppRouter
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
// Pages
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageContact from '../pages/PageContact';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {
  return (
    <BrowserRouter>
        <div className="wrapper">
            <Header />
            <main>
                <Routes>
                    <Route path="/" exact element={<PageHome />} />
                    <Route path="/about" element={<PageAbout />} />
                    <Route path="/contact" element={<PageContact />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default AppRouter;
