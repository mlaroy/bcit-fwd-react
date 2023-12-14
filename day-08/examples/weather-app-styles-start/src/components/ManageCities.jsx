// Manage Cities

const ManageCities = () => {

    return (

        <main>
            <section>
                <div className="page-heading">
                    <h2>Manage Cities</h2>
                </div>
                <div className="page-content">
                    <form className="form-select-city">
                        <div className="input-group input-select-group">
                        <label htmlFor="selectCountries">Country: </label>
                        <select id="selectCountries" name="selectCountries">
                            <optgroup label="Oceania">
                                <option value="Australia">Australia</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="New Zealand">New Zealand</option>
                            </optgroup>
                            <optgroup label="East Asia">
                                <option value="China">China</option>
                                <option value="Japan">Japan</option>
                                <option value="South Korea">South Korea</option>
                            </optgroup>
                            <optgroup label="South Asia">
                                <option value="India">India</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Vietnam">Vietnam</option>
                            </optgroup>
                            <optgroup label="Middle East">
                                <option value="Iran">Iran</option>
                                <option value="Syria">Syria</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                            </optgroup>
                            <optgroup label="Europe">
                                <option value="Hungary">Hungary</option>
                                <option value="Spain">Spain</option>
                                <option value="United Kingdom">United Kingdom</option>
                            </optgroup>
                            <optgroup label="Africa">
                                <option value="Kenya">Kenya</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="South Africa">South Africa</option>
                            </optgroup>
                            <optgroup label="North America">
                                <option value="Canada">Canada</option>
                                <option value="Mexico">Mexico</option>
                                <option value="United States">United States</option>
                            </optgroup>
                            <optgroup label="South America">
                                <option value="Brazil">Brazil</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Ecuador">Ecuador</option>
                            </optgroup>
                        </select>
                        </div>
                        <div className="input-group input-select-group">
                        <label htmlFor="selectCities">City: </label>
                        <select id="selectCities" name="selectCities">
                            <option value="Montreal" data-country="Canada" data-lat="45.50906" data-lon="-73.55336">Montreal</option>
                            <option value="Toronto" data-country="Canada" data-lat="43.653225" data-lon="-79.383186">Toronto</option>
                            <option value="Vancouver" data-country="Canada" data-lat="49.28273" data-lon="-123.120735">Vancouver</option>
                        </select>
                        </div>
                        <div className="input-group input-submit-group">
                        <button type="submit">Add City</button>
                        <p>(Maximum 5 cities)</p>
                        </div>
                    </form>
                    <div className="cities-list">
                        <h2>Your Cities</h2>
                        <ol>
                        <li>
                            <div className="city-container">
                                <div className="city-location">Vancouver, Canada</div>
                                <div className="remove-city-container"><button>Remove City</button></div>
                            </div>
                        </li>
                        <li>
                            <div className="city-container">
                                <div className="city-location">Busan, South Korea</div>
                                <div className="remove-city-container"><button>Remove City</button></div>
                            </div>
                        </li>
                        <li>
                            <div className="city-container">
                                <div className="city-location">Budapest, Hungary</div>
                                <div className="remove-city-container"><button>Remove City</button></div>
                            </div>
                        </li>
                        </ol>
                    </div>
                </div>
            </section>
        </main>

    );
    
}

export default ManageCities;