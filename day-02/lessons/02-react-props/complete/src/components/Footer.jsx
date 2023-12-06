import { getYear } from '../utilities/dates.js';

const Footer = ({ copyright, author }) => {
    return (
        <footer>
            <p>&copy; {copyright} - {author}</p>
        </footer>
    )
}

Footer.defaultProps = {
    copyright: getYear(),
    author: 'Michael J. Fox'
}

export default Footer;
