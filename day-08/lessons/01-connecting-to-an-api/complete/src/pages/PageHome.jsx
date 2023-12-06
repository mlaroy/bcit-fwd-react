// Page Home

import { useEffect, useState } from 'react';
import { appTitle, endPointSearch, endPointAllBreeds, apiKey } from '../globals/globalVariables';
// import smokey from '../images/smokey.jpg';

function PageHome(){

    const [breeds, setBreeds] = useState(false);
    const [selectedBreed, setSelectedBreed] = useState(false);
    const [cat, setCat] = useState(false);

	useEffect(() => {
		document.title = `${appTitle} - Home`;
	},[]);

    useEffect(() => {
        const fetchBreeds = async () => {
            // endpoint = https://api.thecatapi.com/v1/breeds
            const response = await fetch(endPointAllBreeds, {
                headers: {
                    'x-api-key': apiKey
                }
            });
            let data = await response.json();
            console.log({data})
            setBreeds(data);
            setSelectedBreed(data[0].id);
        }
        fetchBreeds();
    }, []);

    function handleBreedChange(e){
        setSelectedBreed(e.target.value);
    }

    const fetchCat = async () => {
        // endpoint = https://api.thecatapi.com/v1/images/search?breed_ids=abys
        const response = await fetch(`${endPointSearch}?breed_ids=${selectedBreed}`, {
            headers: {
                'x-api-key': apiKey
            }
        });
        let data = await response.json();

        const breedInfo = breeds.find( breed => breed.id === selectedBreed);

        const catObj = {
            src: data[0].url,
            alt: breedInfo.name,
            id: data[0].id
        }
        setCat(catObj);
    }

	function handleGetCat(e){
		e.preventDefault();
        fetchCat();
	}

	return (
		<main>
			<section className="cat-photo-section">
				<h2>Cat Photos</h2>
				<div className="cat-container">
					<div className="get-cat-form-container">
						<form onSubmit={handleGetCat} className="get-cat-form">
							<div className="input-group">
								<label htmlFor="selectBreed">Select Breed: </label>
								<select name="selectBreed" id="selectBreed" size="5" value={selectedBreed} onChange={handleBreedChange}>
									{breeds && breeds.map( breed => {
                                        return (
                                            <option key={breed.id} value={breed.id}>{breed.name}</option>
                                        )
                                    })}
								</select>
							</div>
							<div className="submit-group">
								{!cat ? <button type="submit">Get Cat Photo</button> : <button type="submit">Get Another Cat Photo</button>}
							</div>
						</form>
					</div>
					<div className="cat-image">
						{cat && <img src={cat.src} alt={cat.alt} />}
					</div>
				</div>
			</section>
		</main>
	);

}

export default PageHome;
