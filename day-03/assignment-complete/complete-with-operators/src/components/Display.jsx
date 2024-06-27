import React from 'react'

const Display = ({ digits, op }) => {
    // use these to calculate results
    const operators = {
        'Add': '+',
        'Subtract': '-',
        'Multiply': '\u00d7',
        'Divide': '\u00f7'
    }
  return (
    <div className="display">
        {op && <span>{operators[op]}</span>}
        {digits}
    </div>
  )
}

export default Display
