import { NavLink } from 'react-router-dom';

const Nav = () => (
	<nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/favs">Favs</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
	</nav>
);

export default Nav;