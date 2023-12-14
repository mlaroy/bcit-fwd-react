// Nav

import { NavLink } from 'react-router-dom';

const Nav = ({ hideNav }) => (

	<nav onClick={hideNav}>
        <ul>
            <li><NavLink to={'/'} exact>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/your-cities'}>Your Cities</NavLink></li>
            <li><NavLink to={'/manage-cities'}>Manage Cities</NavLink></li>
            <li><NavLink to={'/local-weather'}>Local Weather</NavLink></li>
        </ul>
	</nav>
    
);

export default Nav;