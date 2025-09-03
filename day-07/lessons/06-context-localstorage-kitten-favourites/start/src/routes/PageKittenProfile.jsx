import { useEffect, useContext } from 'react'
import { FavsContext } from '../context/FavsContext';
import { Link, useParams } from 'react-router-dom';
import { appTitle } from '../globals/globalVariables';
import kittensData from '../data/kittens-data';
import Kitten from '../components/Kitten'
import isFav from '../utilities/isFav';

function PageKittenProfile() {

    const { favs } = useContext(FavsContext)

    const { id } = useParams();

    const kittenOb = kittensData.find( kitten => kitten.id == id);

     useEffect( () => {
        if( !kittenOb) {
            document.title = `${appTitle} | Kitten Profile`
        } else {
             document.title = `${kittenOb.name} | ${appTitle}`
        }
    }, [kittenOb])

    return (
        <main>
            <section>
                <h2>Kitten Profile {id}</h2>
                {!kittenOb ?
                    <p>Kitten Not Found. <Link to="/">Return to Home Page</Link></p> :
                    <div className="kitten-single">
                        <Kitten
                            kittenOb={kittenOb}
                            profileLink={false}
                            isFav={isFav(favs, null, kittenOb.id)}
                         />
                    </div>
                }
            </section>
        </main>
    )
}

export default PageKittenProfile;
