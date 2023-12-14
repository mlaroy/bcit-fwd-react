import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
				<Route path={'/'} element={<Home />} />
				<Route path={'/about'} element={<About />} />
				<Route path={'/your-cities'} element={<YourCities />} />
				<Route path={'/manage-cities'} element={<ManageCities />} />
				<Route path={'/local-weather'} element={<LocalWeather />} />
				<Route path={'/*'} element={<PageNotFound />} />
			</Routes>
			<Footer />
		</div>
	</BrowserRouter>

);

export default AppRouter;
