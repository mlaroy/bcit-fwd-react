// Page Favs

import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';
import snowball from '../images/snowball.jpg';

function PageAbout() {

	useEffect(() => {
		document.title = `${appTitle} - About`;
	}, []);

    return (
        <main>
		    <section>
                <h2>About this App</h2>
                <p>This app was created with love ❤️ by Snowball. 😎...</p>
                <div className="cat-image cat-image-about-page">
                    <img src={snowball} alt="Snowball the Kitten"/>
                </div>
            </section>
	    </main>
    );
	
}

export default PageAbout;
