function Header({ title }) {

    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}

Header.defaultProps = {
    title: 'Awesome App'
}

export default Header;
