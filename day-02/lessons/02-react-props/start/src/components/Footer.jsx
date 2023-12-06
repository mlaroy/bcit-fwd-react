import { getYear } from '../utilities/dates.js';

const Footer = () => {
    return (
        <footer>
        <p>&copy; {getYear()} - Michael LaRoy</p>
        </footer>
    )
}

export default Footer;
