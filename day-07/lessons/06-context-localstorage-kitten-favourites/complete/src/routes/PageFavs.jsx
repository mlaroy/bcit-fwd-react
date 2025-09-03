import { useEffect, useContext } from 'react'
import kittensData from "../data/kittens-data";
import { FavsContext } from '../context/FavsContext';
import { appTitle } from '../globals/globalVariables';
import Kitten from '../components/Kitten'

function PageFavs() {

    const { favs } = useContext(FavsContext)
    console.log({ favs })

    useEffect( () => {
        document.title = `${appTitle} | Favs`
    }, [])

    return (
        <main>
            <section>
                <h2>Kitten Directory</h2>
                {favs.length < 1 ?
                    <p>No favourite kittens. Return to Home Page</p> :

                    <div className="kittens-grid">
                        {favs.map(singleKitten => {
                            return <Kitten
                                    key={singleKitten.name}
                                    kittenOb={singleKitten}
                                    isFav={true}
                                 />
                    })}
                </div>}
            </section>
        </main>
    )
}

export default PageFavs;
