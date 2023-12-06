import '../styles/Button.css';

function Button({className, text, type}) {
    return (
        <button className={`btn ${className}`} type={type}>
            <span className="btn-text">{text}</span>
        </button>
    );
}

Button.defaultProps = {
    className: 'default'
}

export default Button;
