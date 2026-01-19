import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import UserManager from '../components/UserManager';
import { appTitle } from '../globals/globalVariables';
import { useSelector } from 'react-redux';

function PageCreateUser() {

    const [formValid, setFormValid] = useState(false);
	const username = useSelector((state) => state.user.username);

	useEffect(() => {
		document.title = `${appTitle} - Create User`;
	}, []);

    function handleValidation(){
        setFormValid(true);
    }

    return (
        <>
            {formValid && <Navigate to="/" replace={true} />}
            <main>
                <section>
                    <h2>Create User</h2>
                    {username !== null ? 
                        <p>User already created. Please go to the <Link to="/manage-user">Manage User</Link> page to update your user.</p> : 
                        <UserManager handleValidation={handleValidation} createNewUser={true} />
                    }
                </section>
            </main>
        </>
    );
	
}

export default PageCreateUser;
