const Button = ({ button, handleClick, className }) => {
    // console.log({ button })
	const { value, type, text } = button
	return (
		<button
            className={className}
            onClick={() => handleClick(value, type) }
        >
			{text}
		</button>
	)
}

export default Button
