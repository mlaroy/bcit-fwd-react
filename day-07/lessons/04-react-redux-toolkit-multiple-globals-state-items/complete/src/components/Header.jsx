import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import LogIn from './LogIn';

function Header({ title, tagline }) {

    const username = useSelector(state => state.user.username);

    return (
        <header>
            <div className="app-title">

                <h1>{title}</h1>
                {tagline !== null && <p>{tagline}</p>}
            </div>
            <div className="cart-icon-container">
                <CartIcon />
            </div>
            <div className="user">
                {username !== null && <p>Hello, {username}!</p>}
                <LogIn />
            </div>
        </header>
    );
}

Header.defaultProps = {
    title: 'Awesome App'
}

export default Header;
