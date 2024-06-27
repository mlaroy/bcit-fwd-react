function Button({ type, className, text, value, handleClick }) {
    return (
        <button type="button"
                className={`${className} ${type}`}
                onClick={() => handleClick(value, type)}>
            <span>{text}</span>
        </button>
    );
}

export default Button
