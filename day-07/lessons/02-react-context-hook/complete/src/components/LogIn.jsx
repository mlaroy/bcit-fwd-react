import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function LogIn() {

    const { user, createUser, deleteUser } = useContext(GlobalContext);

    function handleLogIn(){
        let newUser = prompt('Enter a username to log in:');

        if(newUser !== null){
            newUser = newUser.trim();
        }

        while(newUser !== null && newUser === ''){
            newUser = prompt('Enter a valid username to log in:');

            if(newUser !== null){
                newUser = newUser.trim();
            }
        }

        createUser(newUser);
    }

    function handleLogOut(){
        deleteUser();
    }

    return (
        <>
            {user === null ?
                <button onClick={handleLogIn}>Log In</button> :
                <button onClick={handleLogOut}>Log Out</button>
            }
        </>
    );
}

export default LogIn;
