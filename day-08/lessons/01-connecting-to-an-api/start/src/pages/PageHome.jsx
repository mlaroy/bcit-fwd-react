// Page Home

import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';
import smokey from '../images/smokey.jpg';

function PageHome(){

	useEffect(() => {
		document.title = `${appTitle} - Home`;
	},[]);

	function handleGetCat(e){
		e.preventDefault();
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
								<select name="selectBreed" id="selectBreed" size="5">
									<option value="Abyssinian">Abyssinian</option>
									<option value="Aegean">Aegean</option>
									<option value="American Bobtail">American Bobtail</option>
									<option value="Abyssinian">American Curl</option>
									<option value="Abyssinian">American Shorthair</option>
									<option value="American Wirehair">American Wirehair</option>
									<option value="Arabian Mau">Arabian Mau</option>
									<option value="Australian Mist">Australian Mist</option>
									<option value="Abyssinian">Balinese</option>
									<option value="Bambino">Bambino</option>
								</select>
							</div>
							<div className="submit-group">
								<button type="submit">Get Cat Photo</button>
							</div>
						</form>
					</div>
					<div className="cat-image">
						<img src={smokey} alt="Smokey The Kitten" />
					</div>
				</div>
			</section>
		</main>
	);

}

export default PageHome;