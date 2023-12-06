function LogIn() {

    const username = 'Michael';

    function handleLogIn(){

        let newUser = prompt('Please enter a name to log in.');

        if(newUser !== null){
            newUser = newUser.trim();
        }

		while(newUser !== null && newUser === ''){
			newUser = prompt('Please enter a valid name to log in.');
            if(newUser !== null){
                newUser = newUser.trim();
            }
        }

        console.log('Logging in...');


    }

    function handleLogOut(){
        console.log('Logging out...');
    }

    return (
        <>
            {username === null ? 
                <button onClick={handleLogIn}>Log In</button> : 
                <button onClick={handleLogOut}>Log Out</button> 
            }
        </>
    );
}

export default LogIn;
