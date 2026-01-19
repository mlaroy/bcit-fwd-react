import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../features/user/userSlice';

function Header({ title }) {

    const username = useSelector((state) => state.user.username);
    const dispatch = useDispatch();

    function handleDeleteUser(){

        const confirmDelete = window.confirm('Are you sure you want to the delete the user?');

        if(confirmDelete){
            dispatch(deleteUser());
        }
    
    }

    return (
        <header>
            <h1>{title}</h1>
            <div className="user-buttons">
                {username !== null && <p>Hello, {username}!</p>}
                {username === null ? 
                    <Link to="/create-user">Create User</Link> :
                    <button onClick={handleDeleteUser}>Delete User</button>
                }
            </div>
        </header>
    );
}

Header.defaultProps = {
    title: 'Awesome App'
}

export default Header;
