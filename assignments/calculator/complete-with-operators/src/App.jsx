import { useState } from "react"
// import './App.css'

import { calculatorButtons } from "./globals/calculator-button-data"
import { MAX_INT } from "./globals/utils"

import Header from "./components/Header"
import Display from "./components/Display"
import Button from "./components/Button"

function App() {
	const [display, setDisplay] = useState("0")
	const [operandA, setOperandA] = useState(null)
	const [operandB, setOperandB] = useState(null)
	const [operator, setOperator] = useState(null)
	const [memory, setMemory] = useState(0);
    const [lastButton, setLastButton] = useState(null);

    // store the usual operators
    const allowedOps = ['Add', 'Subtract', 'Multiply', 'Divide'];

    // use these to calculate results
    const operatorMethods = {
        'Add': (a, b) => a + b,
        'Subtract': (a, b) => a - b,
        'Multiply': (a, b) => a * b,
        'Divide': (a, b) => a / b
    }

    const calculate = (a, b, op ) => {
        // only allow numbers for the operands
        if(isNaN(a) || isNaN(b) ) {
            alert('Illegal operand detected. Numbers only');
            return;
        }

        // only allow specific operators
        // from our stored list
        if(!allowedOps.includes(op)) {
            alert('Illegal operator detected');
            return;
        }

        // we made it past the gates, let's do the calculation
        if(op == 'Divide' && (a == 0 || b == 0) ) {
            alert(`Error: can't divide with 0`)
            return;
        }

        let result = operatorMethods[op](a * 1, b * 1);
        result = result % 1 !== 0 ? result.toFixed(2) : result;

        if(result > MAX_INT){
            result = result.toExponential();
        }

        setDisplay(`${result}`)
        setOperator(null)


        // store the calculated value as operandA,
        // so we can do another calculatiom
        setOperandA(`${result}`)
        setOperandB(null)
    }

    const handleClick = (value, type) => {
        setLastButton(value);

        switch(type) {
            case 'operator' :
                doOperator(value)
                break;
            case 'number' :
                doNumber(value);
                break;
            case 'memory':
                doMemory(value);
                break;
            case 'sign':
                doSign();
                break;
            case 'decimal':
                doDecimal()
                break;
            case 'enter':
                doEnter()
                break;
            case 'clear':
                doClear(value)
                break;
        }

    }

    const doEnter = () => {
        if(operandA && operandB && operator) {
            calculate(operandA, operandB, operator);
        }
    }

    const doOperator = value => {
        switch (value) {
            case 'Square Root':
                doSquareRoot()
                return;
            case 'Percent':
                doPercent()
                return;
        }

        setOperator(value);
        setDisplay(`${display}`)
    }

    const doNumber = value => {
        if( !operator ) {
            const updatedA = operandA ? `${display}${value}` : `${value}`;
            setOperandA(updatedA);
            setDisplay(updatedA);
        } else {
            const updatedB = operandB ? `${display}${value}` : `${value}`;
            setOperandB(updatedB)
            setDisplay(updatedB);
        }
    }

    const doDecimal = () => {
        if(display.includes('.') || lastButton == '.' ){
            return;
        }

        if(operator){
            setOperandB(`${display}.`)
            setDisplay(`${display}.`);
          }else{
            setOperandA(`${display}.`)
            setDisplay(`${display}.`);
          }
    }

    const doSign = () => {
        if(display === '0') {
            return;
        }

        const reverse = display * -1;
        setDisplayAndOperator(reverse)
    }

    const doPercent = () => {
        const percent = Number(display) / 100;
        setDisplayAndOperator(percent)
    }

    const doSquareRoot = () => {
        const squareRoot = Math.sqrt(Number(display));
        setDisplayAndOperator(squareRoot)
    }


    // helper function for reusability
    const setDisplayAndOperator = val => {
        setDisplay(`${val}`)
        if(!operator ) {
            setOperandA(`${val}`)
        } else {
            setOperandB(`${val}`);
        }
    }

    const doMemory = value => {
        switch(value) {
            case 'Memory Save':
                if(!operator || !operandB) {
                    setMemory(operandA);
                } else {
                    let result = calculate(operandA, operandB, operator)
                    setMemory(result);
                }
                break;
            case 'Memory Clear':
                setMemory(null);
                setDisplay('0')
                break;
            case 'Memory Recall':
                setDisplay(memory ? memory : display)
                if(!operator) {
                    setOperandA(memory);
                } else {
                    setOperandB(memory)
                }
                break;
            case 'Memory Addition':
                {
                    let addedMemory = Number(display) + Number(memory);
                    setMemory(`${addedMemory}`)
                    if(!operator) {
                        setOperandA(`${addedMemory}`);
                    } else {
                        setOperandB(`${addedMemory}`)
                    }
                }
                break;
            case 'Memory Subtract':
                {
                    const subtractedMemory = Number(display) - Number(memory);
                    setMemory(`${subtractedMemory}`);
                    if(!operator) {
                        setOperandA(`${subtractedMemory}`);
                    } else {
                        setOperandB(`${subtractedMemory}`)
                    }
                }
                break;
        }
    }

    const doClear = value => {
        if( value == 'All Clear') {
            setDisplay('0')
            setOperandA(null);
            setOperandB(null);
            setMemory(null);
            setOperator(null);
        } else {

            if(operator) {
                setOperandB(null)
                setDisplay(`${operandA}`)
            } else {
                setOperandA(null)
                setDisplay('0')
            }
        }
    }

	return (
		<div className="wrapper">
			<Header />
			<Display digits={display} op={operator} />
			<div className="buttons">
				{calculatorButtons.map((btn) => (
					<Button
                        key={btn.text}
                        button={btn}
                        className={btn.className}
                        handleClick={handleClick}
                     />
				))}
			</div>
		</div>
	)
}

export default App
