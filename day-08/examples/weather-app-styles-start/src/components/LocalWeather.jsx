// Local Weather

const LocalWeather = () => {

    return (

        <main>
            <section>
                <div className="page-heading page-heading-local-weather">
                    <h2>Local Weather</h2>
                </div>
                <div className="page-content">
                    <div className="local-weather-output">
                        <p>Your current local weather for:</p>
                        <ul>
                            <li><b>Location: </b>Vancouver, Canada</li>
                            <li><b>Date: </b>Tuesday, December 8, 2020</li>
                        </ul>
                        <div className="local-one-day-weather">
                            <figure>
                                <img src="/assets/images/wi-cloudy.jpg" alt="Cloudy" />
                            </figure>
                            <div className="temp">
                                <span className="temp-value">7°</span>
                            </div>
                            <div className="description">
                                <p>Overcast clouds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>  
       
    );
    
}

export default LocalWeather;