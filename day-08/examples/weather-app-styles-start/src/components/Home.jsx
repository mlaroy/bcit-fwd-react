// Home

const Home = () => { 

    return (
       
        <main>
            <section>
                <div className="page-info">
                    <h2>Your Current City's Weather</h2>
                    <p><b>Current City:</b> Vancouver, Canada</p>
                    <h3>Change City</h3>
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
                        <div className="input-group input-submit-group"><button type="submit">Change City</button></div>
                    </form>
                </div>
                <div className="five-day-forecast five-day-forecast-home-page">
                    <h3>Vancouver's 5 Day Forcast</h3>
                    <div className="five-day-weather-grid">
                        <div className="day day-01">
                            <figure><img src="/assets/images/wi-rain.jpg" alt="Rain" /></figure>
                            <div className="date">Tue Dec 8</div>
                            <div className="temps"><span className="temp">10°</span></div>
                        </div>
                        <div className="day day-02">
                            <figure><img src="/assets/images/wi-cloudy.jpg" alt="Cloudy" /></figure>
                            <div className="date">Wed Dec 9</div>
                            <div className="temps"><span className="temp">8°</span></div>
                        </div>
                        <div className="day day-03">
                            <figure><img src="/assets/images/wi-cloudy.jpg" alt="Cloudy" /></figure>
                            <div className="date">Thu Dec 10</div>
                            <div className="temps"><span className="temp">8°</span></div>
                        </div>
                        <div className="day day-04">
                            <figure><img src="/assets/images/wi-rain.jpg" alt="Rain" /></figure>
                            <div className="date">Fri Dec 11</div>
                            <div className="temps"><span className="temp">5°</span></div>
                        </div>
                        <div className="day day-05">
                            <figure><img src="/assets/images/wi-rain.jpg" alt="Rain" /></figure>
                            <div className="date">Sat Dec 12</div>
                            <div className="temps"><span className="temp">6°</span></div>
                        </div>
                    </div>   
                </div>
            </section>
        </main>

    );

}

export default Home;