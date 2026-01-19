import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserManager from '../components/UserManager';
import { appTitle } from '../globals/globalVariables';
import { UserContext } from '../context/UserContext';

function PageManageUser() {
    const [isFormValid, setFormValid] = useState(false);
    const { username } = useContext(UserContext);

     function handleValidation(){
        setFormValid(true);
    }

	useEffect(() => {
		document.title = `${appTitle} - Manage User`;
	}, []);

    return (
        <main>
            Page User Manager
		    <section>
                <h2>Manage User</h2>
                {username === null ?
                    <p>User not set. Please <Link to="/create-user">create a user</Link>.</p> :
                    <UserManager handleValidation={handleValidation} />
                }
            </section>
	    </main>
    );

}

export default PageManageUser;
