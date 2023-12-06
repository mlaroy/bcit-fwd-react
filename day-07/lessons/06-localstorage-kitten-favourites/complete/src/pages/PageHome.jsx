// Page Home

import { useEffect } from 'react';
import Kitten from '../components/Kitten';
import { appTitle } from '../globals/globalVariables';
import  kittensData  from '../data/kittens-data';
import isFav from '../utilities/isFav';
import { useSelector } from 'react-redux';

function PageHome(){

	const favs = useSelector((state) => state.favs.items);
    console.log({favs})

	useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);

	return (
		<main>
			<section>
				<h2>Kitten Directory</h2>
				<div className="kittens-grid">
					{kittensData.map( singleKitten => {
						return <Kitten
                                key={singleKitten.id}
                                kittenObj={singleKitten}
                                isFav={isFav(favs, null, singleKitten.id)}
                             />
					})}
				</div>
			</section>
		</main>
	);

}

export default PageHome;
