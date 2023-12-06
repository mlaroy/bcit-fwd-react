function InputText({label, id, className, type, placeholder, value}) {
    return (
        <div className={`input-group input-text-group ${className}`}>
            <label htmlFor={id}>{label}: </label>
            <input type={type} 
                   id={id} 
                   name={id} 
                   placeholder={placeholder} 
                   value={value}
                    />
        </div>
    );
}

InputText.defaultProps = {
    type: 'text'
}

export default InputText;
