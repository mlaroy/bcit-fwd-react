// Header
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function Header({ title }) {

    const { user, deleteUser } = useUser();

    function handleDeleteUser(){

        const confirmDelete = window.confirm('Are you sure you want to the delete the user?');

        if(confirmDelete){
            deleteUser();
        }

    }

    return (
        <header>
            <h1>{title}</h1>
            <div className="user-buttons">
                {user.username ? <p>Hello, {user.username}!</p> : null}
                {user.username ? (
                    <button onClick={handleDeleteUser}>Delete User</button>
                ) : (
                    <Link to="/create-user">Create User</Link>
                )}
            </div>
        </header>
    );
}

Header.defaultProps = {
    title: 'Awesome App'
}

export default Header;
