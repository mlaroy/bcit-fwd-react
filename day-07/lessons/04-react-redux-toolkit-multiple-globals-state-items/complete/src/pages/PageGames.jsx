import { useEffect } from 'react';
import Games from '../components/Games';
import { appTitle } from '../globals/globalVariables';

function PageGames(){

    useEffect(() => {
        document.title = `${appTitle} - Games`;
    }, []);

    return (
        <main>
            <section>
                <h2>Games</h2>
                <Games />
            </section>
        </main>
    );

}

export default PageGames;
