// Your Cities

const YourCities = () => {
    
    return (

        <main>
            <section>
                <div className="page-heading">
                    <h2>Your Cities Daily Forcast</h2>
                    <h3>Dec 8, 2020</h3>
                </div>
                <div className="city-one-day-weather">
                    <div className="all-cities-grid">
                        <div className="city city-01">
                            <div className="city-name">
                            <h4 className="day-name">Vancouver,<br />Canada</h4>
                            </div>
                            <figure><img src="/assets/images/wi-cloudy.jpg" alt="Cloudy" /></figure>
                            <div className="temps"><span className="temp">7°</span></div>
                        </div>
                        <div className="city city-02">
                            <div className="city-name">
                            <h4 className="day-name">Busan,<br />South Korea</h4>
                            </div>
                            <figure><img src="/assets/images/wi-sunny.jpg" alt="Sunny" /></figure>
                            <div className="temps"><span className="temp">10°</span></div>
                        </div>
                        <div className="city city-03">
                            <div className="city-name">
                            <h4 className="day-name">Budapest,<br />Hungary</h4>
                            </div>
                            <figure><img src="/assets/images/wi-partly-sunny.jpg" alt="Partly sunny" /></figure>
                            <div className="temps"><span className="temp">3°</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
         
    );
    
};

export default YourCities;