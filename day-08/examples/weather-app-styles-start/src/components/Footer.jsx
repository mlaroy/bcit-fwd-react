// Footer

import { makeYear } from '../utilities/dateMaker';

const Footer = () => (

    <footer className="header">
        <p>&copy; {makeYear()} MW Corp.</p>
        <p>Weather Icons created by: <a href="https://www.freepik.com/free-photos-vectors/snow">bamdewanto - www.freepik.com</a></p>
    </footer>

);

export default Footer;