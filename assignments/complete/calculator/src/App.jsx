import { useState } from 'react'
import { calculatorButtons } from './globals/calculator-button-data'

import Display from './components/Display'
import Button from './components/Button'

import './App.css'

function App() {
    const [display, setDisplay] = useState('0');
    // const [lastButton, setLastButton] = useState(null);
    const [operandA, setOperandA] = useState(null);
    const [operandB, setOperandB] = useState(null);
    const [operator, setOperator] = useState(null);
    const [memory, setMemory] = useState(null);

    const allowedOps = ['Add', 'Subtract', 'Multiply', 'Divide'];

    const operatorMethods = {
        'Add': (a,b) => a + b,
        'Subtract': (a,b) => a - b,
        'Multiply': (a,b) => a * b,
        'Divide': (a,b) => a / b,
    }

    function handleButtonClick(button) {
        console.log({ button })
        // setDisplay.apply...
        // setLastButton(button);

        switch(button.type) {
            case 'number' :
                doNumbers(button.value)
                break;
            case 'operator':
                doOperator(button.value)
                break;
            case 'clear':
                console.log({button})
                doClear(button.value)
                break;
            case 'enter':
                doEnter()
                break;
            case 'sign':
                doSign();
                break;
            case 'decimal':
                doDecimal()
                break;
            case 'memory':
                doMemory(button.value)
                break;
        }
    }

    function memoryAdd() {
        let newMemoryAdd = Number(display) + Number(memory);
        console.log({newMemoryAdd})
        setMemory(`${newMemoryAdd}`);
        // setDisplay(`${newMemoryAdd}`)
        setDisplayAndOperator(`${newMemoryAdd}`)
    }

    function doMemory(value) {
        console.log({ value })
        switch(value) {
            case 'Memory Save':
                // if(!operator || !operandB) {
                //     setMemory(operandA)
                // } else {

                // }
                setMemory(display)
                break;
            case 'Memory Clear':
                setMemory(null)
                setDisplay('0')
                break;
            case 'Memory Recall':
                // setDisplay(memory ? memory : display)
                setDisplayAndOperator(memory ? memory : display)
                break;
            case 'Memory Addition':
                memoryAdd()
                break;
            case 'Memory Subtract':
                {
                    let newMemorySub = Number(memory) - Number(display);
                    setMemory(`${newMemorySub}`);
                    setDisplay(`${newMemorySub}`)
                }
                break;
        }
    }

    function doDecimal() {
        if( display.includes('.') ) {
            return;
        }

        const decimalValue = `${display}.`
        setDisplayAndOperator(decimalValue)
    }

    function doEnter() {
        if(operandA && operandB && operator) {
            calculate(operandA, operandB, operator);
        }
    }

    function calculate(a, b, op) {
        // console.log(a)
        if( isNaN(a) || isNaN(b) ) {
            alert('Illegal operand detected. Numbers only!')
            return;
        }

        console.log('calculate!')

        // check for allowed operators
        if(!allowedOps.includes(op)) {
            alert('Illegal operator detected. Please try again');
            return;
        }

        // can't divide by zero, so let's fix that
        if(op == 'Divide' && (a === '0' || b === '0' ) ) {
            alert(`Can't divide by zero!`);
            return;
        }

        const opMethod = operatorMethods[op];

        let result = opMethod(Number(a), Number(b));
        result = result % 1 !== 0 ? result.toFixed(2) : result;
        // console.log({ result })
        // console.log(typeof result)

        setDisplay(`${result}`);
        setOperator(null)

        // store the result in operandA
        setOperandA(`${result}`)
        setOperandB(null)
    }

    function doClear(value) {
        if( value == 'All Clear') {
            setDisplay('0')
            setOperandA(null)
            setOperandB(null)
            setOperator(null)
            setMemory(null)
        } else {
            // simple clear
            if(operator) {
                setOperandB(null)
                setDisplay(`${operandA}`)
            } else {
                setOperandA(null)
                setDisplay('0')
            }
        }
    }

    function doOperator(value) {

        switch(value) {
            case 'Square Root':
                doSquareRoot()
                return;
            case 'Percent':
                doPercent()
                return;
        }

        setOperator(value);
    }

    function doSign() {
        if(display == '0') {
            return;
        }

        const reverse = display * -1
        setDisplayAndOperator(reverse)
    }

    function doSquareRoot() {
        const sqrt = Math.sqrt(Number(display))
        // setDisplay(sqrt)
        // setOperandA(sqrt)
        setDisplayAndOperator(sqrt);
    }

    function doPercent() {
        const percent = Number(display) / 100;
        // setDisplay(percent)
        // setOperandA(percent)
        setDisplayAndOperator(percent);
    }

    function setDisplayAndOperator(value) {
        setDisplay(value)
        if(!operator) {
            setOperandA(value)
        } else {
            setOperandB(value);
        }
    }

    function doNumbers(value) {
        console.log({value })
        if(!operator) {
            console.log({ operandA })
            const updated = operandA ? `${display}${value}` : `${value}`;
            setDisplay(updated);
            setOperandA(updated);
        } else {
            const updated = operandB ? `${display}${value}` : `${value}`;
            setDisplay(updated);
            setOperandB(updated);
        }
    }

  return (
    <div className="wrapper">
        <div>
            <h1>Calculator</h1>
        </div>
        <Display text={display} op={operator} />
        <div className="buttons">
            {calculatorButtons.map( button => {
                return (
                    <Button
                        key={button.text}
                        button={button}
                        className={button.className}
                        handleClick={handleButtonClick}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default App
