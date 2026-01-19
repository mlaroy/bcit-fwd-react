
import LogIn from './LogIn';

function Header({ title }) {

    const username = 'Michael';

    return (
        <header>
            <h1>{title}</h1>
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
