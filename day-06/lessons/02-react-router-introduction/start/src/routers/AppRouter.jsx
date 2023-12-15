// AppRouter

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
// Pages
import PageHome from '../pages/PageHome';

function AppRouter() {
  return (
    <div className="wrapper">
      <Header />
        <main>
          <PageHome />
        </main>
      <Footer />
    </div>
  );
}

export default AppRouter;
