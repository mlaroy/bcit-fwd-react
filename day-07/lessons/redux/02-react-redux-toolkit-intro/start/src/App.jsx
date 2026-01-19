import Header from './components/Header';
import CounterControls from './components/CounterControls';
import Counter from './components/Counter';
import Footer from './components/Footer';
import { appTitle } from './globals/globalVariables';

function App() {

    return (
        <div className="wrapper">
            <Header title={appTitle} />
            <main>
                <Counter />
                <CounterControls />
            </main>
            <Footer />
        </div>
    )
}

export default App
