import React from 'react'

function Button({ button, className, handleClick }) {
  return (
    <button
        className={className}
        onClick={() => handleClick(button)}
        >
        {button.text}
    </button>
  )
}

export default Button
