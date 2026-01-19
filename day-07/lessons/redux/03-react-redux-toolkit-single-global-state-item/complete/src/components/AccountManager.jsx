import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUser } from '../features/user/userSlice';

function AccountManager() {
    const dispatch = useDispatch();

    const [error, setError] = useState(false);

    const username = useSelector(state => state.user.username);

    function handleUpdateUser(e){
        e.preventDefault();
        const newUsername =  e.target.elements.username.value.trim();
        if(newUsername === ''){
            setError('Invalid username...');
        }else{
            dispatch(createUser(newUsername));
            e.target.elements.username.value = '';
        }
    }

    function handleInputChange(e){
        const inputText = e.target.value.trim();
        if(inputText !== ''){
            setError(false);
        }
    }

    return (
        <div>
            <div className="current-account-info">
                <h3>Current Account Info</h3>
                <p><b>Username: </b>{username}</p>
            </div>
            <div className="update-account">
                <h3>Update Your Account</h3>
                <form onSubmit={handleUpdateUser} className="form-update-username">
                    <div className="input-group">
                        <label htmlFor="username">New Username: </label>
                        <input type="text" name="username" id="username" onChange={handleInputChange} />
                        {error !== false && <span className="error">&#42; {error}</span>}
                    </div>
                    <div className="submit-group">
                        <input type="submit" value="Change Username" />
                    </div>
                </form>
            </div>
        </div>
    );

}

export default AccountManager;
