import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import YourCities from '../components/YourCities';
import ManageCities from '../components/ManageCities';
import LocalWeather from '../components/LocalWeather';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (

	<BrowserRouter>
		<div className="wrapper">
			<Header />
			<Routes>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/about'}><About /></Route>
				<Route path={'/your-cities'}><YourCities /></Route>
				<Route path={'/manage-cities'}><ManageCities /></Route>
				<Route path={'/local-weather'}><LocalWeather /></Route>
				<Route path={'/*'}><PageNotFound /></Route>
			</Routes>
			<Footer />
		</div>
	</BrowserRouter>

);

export default AppRouter;
