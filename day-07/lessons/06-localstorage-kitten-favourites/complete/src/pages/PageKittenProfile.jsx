// Page Kitten Profile

import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Kitten from '../components/Kitten';
import kittensData from '../data/kittens-data';
import { appTitle } from '../globals/globalVariables';
import isFav from '../utilities/isFav';
import { useSelector } from 'react-redux';

function PageKittenProfile() {

    const favs = useSelector((state) => state.favs.items);
    const { id } = useParams();
    // Next line uses "==" instead of "===" because the URL parameter
    // comes back as a string and we just want to test for value and
    // not value and data type...
    // Using a "==" operator means that
    // "1" == 1 returns true...
    // [someArray].find() returns the first matched item if a matched
    // item is found, otherwise it returns undefined...
    const kittenObj = kittensData.find(kitten => kitten.id == id);

	useEffect(() => {

        if(!kittenObj){
            document.title = `${appTitle} - Kitten Profile`;
        }else{
            document.title = `${appTitle} - Kitten Profile: ${kittenObj.name}`;
        }

	}, [kittenObj]);

    return (
        <main>
		    <section>
                <h2>Kitten Profile</h2>
                {!kittenObj ? 
                    <p>Kitten not found. <Link to="/">Return to home page</Link>.</p> :
                    <div className="kitten-single">
                        <Kitten kittenObj={kittenObj} 
                                profileLink={false}
                                isFav={isFav(favs, null, kittenObj.id)} />
                    </div>
                }
            </section>
	    </main>
    );
	
}

export default PageKittenProfile;
