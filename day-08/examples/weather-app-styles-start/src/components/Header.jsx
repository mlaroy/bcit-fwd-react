// Header

import Nav from './Nav';
import { Link } from 'react-router-dom';

const Header = () => {

	return (

		<header>
			<div className="header-row header-row-01">
				<h1><Link to={'/'}>My Weather App</Link></h1>
				<button className="btn-main-nav">
					<span className="hamburger-icon">
						<span className="line"></span>
						<span className="line"></span>
						<span className="line"></span>
					</span>
					<span className="sr-only">Menu</span>
				</button>
			</div>
			<div className="header-row header-row-02">
				<Nav />
			</div>
		</header>
    
	);

}

export default Header;