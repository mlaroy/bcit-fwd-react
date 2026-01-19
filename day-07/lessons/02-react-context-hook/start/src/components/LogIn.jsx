function LogIn() {

    const user = null;

    function handleLogIn(){
        console.log('Logging in...');
    }

    function handleLogOut(){
        console.log('Logging out...');
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
