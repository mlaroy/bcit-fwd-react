import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AccountManager from '../components/AccountManager';
import { appTitle } from '../globals/globalVariables';

function PageAccount() {

	const username = useSelector(state => state.user.username);

	useEffect(() => {
		document.title = `${appTitle} - Account`;
	}, []);

    return (
        <main>
		    <section>
                <h2>Manage Account</h2>
                {username === null ? <p>Log in to manage your account.</p> : <AccountManager />}
            </section>
	    </main>
    );

}

export default PageAccount;
