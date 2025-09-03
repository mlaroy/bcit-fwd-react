import { useEffect, useContext } from 'react'
import kittensData from "../data/kittens-data";
import { FavsContext } from '../context/FavsContext';
import { appTitle } from '../globals/globalVariables';
import Kitten from '../components/Kitten'
import isFav from '../utilities/isFav'

function PageHome() {

    const { favs } = useContext(FavsContext)

    useEffect( () => {
        document.title = `${appTitle} | Home`
    }, [])

    return (
        <main>
            <section>
                <h2>Kitten Directory</h2>
                <div className="kittens-grid">
                    {kittensData.map(singleKitten => {
                        return <Kitten
                                    key={singleKitten.name}
                                    kittenOb={singleKitten}
                                    isFav={isFav(favs, null, singleKitten.id)}
                                 />
                    })}
                </div>
            </section>
        </main>
    )
}

export default PageHome;
