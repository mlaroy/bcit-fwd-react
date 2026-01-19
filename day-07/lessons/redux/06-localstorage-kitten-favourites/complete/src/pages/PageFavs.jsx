// Page Favs
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Kitten from '../components/Kitten';
import { appTitle } from '../globals/globalVariables';
import { useSelector } from 'react-redux';

function PageFavs() {

    const favs = useSelector((state) => state.favs.items);

	useEffect(() => {
		document.title = `${appTitle} - Favs`;
	}, []);

    return (
        <main>
		    <section>
                <h2>Favourite Kittens</h2>
                {favs.length < 1 ? <p>No favourite kittens. Return to the <Link to="/">home</Link> page to add some favourite kittens.</p> : 
                    <div className="kittens-grid">
                        {favs.map((singleKitten, i) => {
                            return <Kitten key={i} 
                                           kittenObj={singleKitten}
                                           isFav={true} />
                        })}
				    </div>}
            </section>
	    </main>
    );
	
}

export default PageFavs;
