import { getYear } from '../utilities/getDates';

const Footer = ({ copyright, author }) => (
	<footer>
        <p>&copy; {copyright} {author}</p>
        <p>This app is based on a demo found at: <a href="https://redux-toolkit.js.org/tutorials/quick-start">Redux Toolkit Quick Start</a></p>
    </footer>
);

Footer.defaultProps = {
    author: 'Awesome Corp.',
    copyright: getYear()
}

export default Footer;