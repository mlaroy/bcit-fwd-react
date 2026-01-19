import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import LogIn from './LogIn';

function Header({ title }) {

    const { user } = useContext(GlobalContext);

    return (
        <header>
            <h1>{title}</h1>
            <div className="user">
                {user !== null && <p>Hello, {user}!</p>}
                <LogIn />
            </div>
        </header>
    );
}

Header.defaultProps = {
    title: 'Awesome App'
}

export default Header;
