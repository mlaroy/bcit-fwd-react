import { useState } from 'react';
import Header from  './components/Header';
import Display from  './components/Display';
import Button from './components/Button';
import { maximumDisplayDigits, maximumInteger } from './globals/global-variables';
import calculatorButtons from './globals/calculator-button-data';
import { evaluateString as calcStr, regexLastIndexOf, roundDisplay } from './utilities/utilities';

import './styles/index.csss'

function App() {

  const [display, setDisplay] = useState('0');
  const [previousBtnPress, setPreviousBtnPress] = useState(null);
  const [previousOperator, setPreviousOperator] = useState(null);
  const [memory, setMemory] = useState(null);
  const [mathString, setMathString] = useState(null);

  function handleClick(value, type){

    setPreviousBtnPress(type);

    switch(type){
      case 'memory':
        handleMemory(value);
        break;
      case 'decimal':
        handleDecimal(value);
        break;
      case 'sign':
        handleSign();
        break;
      case 'percent':
        handlePercent();
        break;
      case 'sqrt':
        handleSquareRoot();
        break;
      case 'number':
        handleNumber(value);
        break;
      case 'operator':
        handleOperator(value);
        break;
      case 'enter':
        handleEnter();
        break;
      default:
        handleClear(value);
    }

  }

  function handleMemory(value){

    if(value === 'Memory Save'){
      setMemory(display);
      return;
    }
    if(value === 'Memory Clear'){
      setMemory(null);
      return;
    }

    if(value === 'Memory Recall'){
      if(memory === null){
        return;
      }
      if(mathString === null){
        setMathString(memory);
      }else{
        // The following code modified from code found at these
        // resources:
        //
        // From W3Schools: Find the location in a string of the last character
        // in string:
        // - https://www.w3schools.com/jsref/jsref_lastindexof.asp
        //
        // From stackoverflow: Remove everything after a certain character
        // - https://stackoverflow.com/questions/5631384/remove-everything-after-a-certain-character
        //
        // From stackoverflow: Is there a version of JavaScript's String.indexOf() that
        // allows for regular expressions?
        // - https://stackoverflow.com/questions/273789/is-there-a-version-of-javascripts-string-indexof-that-allows-for-regular-expr
        let regex = /[+/*-]/;
        let indexOfLastOperator = regexLastIndexOf(mathString, regex);

        if(indexOfLastOperator !== -1){
          let newMathString = mathString.substring(0, indexOfLastOperator+1);
          setMathString(newMathString + memory);
        }

      }

      setDisplay(memory);

      return;

    }

    if(memory === null){
      return;
    }

    let newMemory;

    if(value === 'Memory Subtract'){
      newMemory = (memory*1) - (display*1);
    }else if(value === 'Memory Addition'){
      newMemory = (memory*1) + (display*1);
    }

    setMemory(`${newMemory}`);

  }

  function handleDecimal(value){

    if(display.includes('.') && previousBtnPress !== 'operator'){
      return;
    }

    if(previousBtnPress === 'operator'){
      setDisplay(`0.`);
    }else{
      setDisplay(`${display}${value}`);
    }

    if(mathString !== null){
      if(mathString[mathString.length - 1] === '0'){
        setMathString(`${mathString}${value}`);
      }else{
        setMathString(`${mathString}0${value}`);
      }
    }

  }

  function handleSign(){

    if(display === '0' || display === '0.'){
      return;
    }

    const positiveOrNegativeNumber = display * -1;

    setDisplay(`${positiveOrNegativeNumber}`);

    // The following code modified from code found at these
    // resources:
    //
    // From W3Schools: Find the location in a string of the last character
    // in string:
    // - https://www.w3schools.com/jsref/jsref_lastindexof.asp
    //
    // From stackoverflow: Remove everything after a certain character
    // - https://stackoverflow.com/questions/5631384/remove-everything-after-a-certain-character
    //
    // From stackoverflow: Is there a version of JavaScript's String.indexOf() that
    // allows for regular expressions?
    // - https://stackoverflow.com/questions/273789/is-there-a-version-of-javascripts-string-indexof-that-allows-for-regular-expr
    let regex = /[+/*-]/;
    let indexOfLastOperator = regexLastIndexOf(mathString, regex);

    if(indexOfLastOperator === -1 || indexOfLastOperator === 0){
      setMathString(`${positiveOrNegativeNumber}`);
    }else{
      let newMathString;
      if(previousOperator === '-' && mathString[indexOfLastOperator] === '-' && !mathString.includes('--')){
        newMathString = mathString.substring(0, indexOfLastOperator + 1);
      }else if(mathString[indexOfLastOperator] === '-'){
        newMathString = mathString.substring(0, indexOfLastOperator);
      }else{
        newMathString = mathString.substring(0, indexOfLastOperator + 1);
      }
      newMathString = `${newMathString}${positiveOrNegativeNumber}`;
      setMathString(newMathString);
    }

  }

  function handleSquareRoot(){

    if(display === '0' || display === '0.' || display < 0){
      return;
    }

    const newSquareRootNumber = Math.sqrt(display);

    setDisplay(`${newSquareRootNumber}`);

    // The following code modified from code found at these
    // resources:
    //
    // From W3Schools: Find the location in a string of the last character
    // in string:
    // - https://www.w3schools.com/jsref/jsref_lastindexof.asp
    //
    // From stackoverflow: Remove everything after a certain character
    // - https://stackoverflow.com/questions/5631384/remove-everything-after-a-certain-character
    //
    // From stackoverflow: Is there a version of JavaScript's String.indexOf() that
    // allows for regular expressions?
    // - https://stackoverflow.com/questions/273789/is-there-a-version-of-javascripts-string-indexof-that-allows-for-regular-expr
    let regex = /[+/*-]/;
    let indexOfLastOperator = regexLastIndexOf(mathString, regex);

    if(indexOfLastOperator === -1){
      setMathString(`${newSquareRootNumber}`);
    }else{
      let newMathString = mathString.substring(0, indexOfLastOperator+1);
      setMathString(`${newMathString}${newSquareRootNumber}`);
    }

  }

  function handlePercent(){
    if(display === '0' || display === '0.'){
      return;
    }
    let newPercentNumber = display / 100;

    setDisplay(`${newPercentNumber}`);

    // The following code modified from code found at these
    // resources:
    //
    // From W3Schools: Find the location in a string of the last character
    // in string:
    // - https://www.w3schools.com/jsref/jsref_lastindexof.asp
    //
    // From stackoverflow: Remove everything after a certain character
    // - https://stackoverflow.com/questions/5631384/remove-everything-after-a-certain-character
    //
    // From stackoverflow: Is there a version of JavaScript's String.indexOf() that
    // allows for regular expressions?
    // - https://stackoverflow.com/questions/273789/is-there-a-version-of-javascripts-string-indexof-that-allows-for-regular-expr
    let regex = /[+/*-]/;
    let indexOfLastOperator = regexLastIndexOf(mathString, regex);

    if(indexOfLastOperator === -1){
      setMathString(`${newPercentNumber}`);
    }else{
      let newMathString = mathString.substring(0, indexOfLastOperator + 1);
      setMathString(`${newMathString}${Math.abs(newPercentNumber)}`);
    }

  }

  function handleNumber(value){

    if(display.length === maximumDisplayDigits && previousBtnPress !== 'operator'){
      return;
    }

    if(mathString === null){
      if(display === '0.'){
        setMathString(`0.${value}`);
      }else{
        setMathString(`${value}`);
      }
    }else{
      setMathString(`${mathString}${value}`);
    }

    if(display === '0' || previousBtnPress === 'operator' || previousBtnPress === 'enter'){
      setDisplay(`${value}`);
    }else{
      setDisplay(`${display}${value}`);
    }

  }

  function handleOperator(value){

    if(previousBtnPress === 'operator' || previousBtnPress === 'clear'){
      let tempMathString = mathString.slice(0, -1);
      setMathString(`${tempMathString}${value}`);
      setPreviousOperator(value);
      return;
    }

    if(previousOperator !== null){
      if(previousOperator === '*' || previousOperator === '/'){
        let result = calcStr(mathString);
        setDisplay(`${result}`);
        setMathString(`${result}${value}`);
        setPreviousOperator(value);
      }else{
        if(value === '*' || value === '/'){
          setMathString(`${mathString}${value}`);
          setPreviousOperator(value);
        }else{
          let result = calcStr(mathString);
          setDisplay(`${result}`);
          setMathString(`${result}${value}`);
          setPreviousOperator(value);
        }
      }
      return;
    }

    if(mathString !== null){
      setMathString(`${mathString}${value}`);
    }

    setPreviousOperator(value);

  }

  function handleEnter(){

    if(previousOperator !== null){
      let result = calcStr(mathString);
      if(result > maximumInteger){
        result = result.toExponential();
      }
      if(typeof result !== 'string'){
        result = result.toString();
      }

      if(result.length > maximumDisplayDigits){
        result = roundDisplay(result, maximumDisplayDigits);
      }

      setDisplay(result);
      setMathString(result);
      setPreviousOperator(null);

    }

  }

  function handleClear(value){

    if(value === 'All Clear'){
      setDisplay('0');
      setMathString(null);
      setPreviousBtnPress(null);
      setPreviousOperator(null);
      return;
    }

    if(display === '0'){
      return;
    }

    if(display === '0.'){
      setDisplay('0');
      return;
    }

    // The following code modified from code found at these
    // resources:
    //
    // From W3Schools: Find the location in a string of the last character
    // in string:
    // - https://www.w3schools.com/jsref/jsref_lastindexof.asp
    //
    // From stackoverflow: Remove everything after a certain character
    // - https://stackoverflow.com/questions/5631384/remove-everything-after-a-certain-character
    //
    // From stackoverflow: Is there a version of JavaScript's String.indexOf() that
    // allows for regular expressions?
    // - https://stackoverflow.com/questions/273789/is-there-a-version-of-javascripts-string-indexof-that-allows-for-regular-expr
    let regex = /[+/*-]/;
    let indexOfLastOperator = regexLastIndexOf(mathString, regex);

    if(indexOfLastOperator === -1){
      setMathString(null);
    }else if(indexOfLastOperator === 0){
      setMathString(null);
    }else if((mathString[indexOfLastOperator] === '-') &&
            ((mathString[indexOfLastOperator -1] === '+') ||
              (mathString[indexOfLastOperator -1] === '-') ||
              (mathString[indexOfLastOperator -1] === '/') ||
              (mathString[indexOfLastOperator -1] === '*'))){
      let newMathString = mathString.substring(0, indexOfLastOperator);
      setMathString(newMathString);
    }else{
      let newMathString = mathString.substring(0, indexOfLastOperator + 1);
      setMathString(newMathString);
    }

    setDisplay('0');

  }

  return (
    <div className="wrapper">
      <Header />
      <Display digits={display} />
      <div className="buttons">
        {calculatorButtons.map((btn, i) => <Button key={i}
                                                   className={btn.className}
                                                   value={btn.value}
                                                   text={btn.text}
                                                   type={btn.type}
                                                   handleClick={handleClick} /> )}
      </div>
    </div>
  );

}

export default App;
