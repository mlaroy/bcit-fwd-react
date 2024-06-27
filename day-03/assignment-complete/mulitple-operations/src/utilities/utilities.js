export function calculate(a, b, operator){

    let result;

    if(typeof a !== 'number'){
        a = a * 1;
    }

    if(typeof b !== 'number'){
        b = b * 1;
    }

    switch(operator) {
        case 'Subtract':
            result = a - b;
            break;
        case 'Multiply':
            result = a * b;
            break;
        case 'Divide':
            result = a / b;
            break;
        case 'Percent':
            result = a / 100;
            break;
        case 'Square Root':
            result = Math.sqrt(a);
            break;
        default:
            result = a + b;
      }

    return result;

}

export function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

// Utility function for evaluating a string
//
// The below code is based on code found
// at this stackoverflow Q&A:
// - // https://stackoverflow.com/questions/6479236/calculate-string-value-in-javascript-not-using-eval
//
// Note: I decided not to use JavaScript's eval()
// function due to security concerns outlined in this
// MDN article on eval():
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!
export function evaluateString(str) {

    let regex = /--/;
    str = str.replace(regex, '- -');

    // ES Lint will complain in the console about the next
    // line of code, but for this app we need a way to
    // easily evaluate a string so in this case
    // we can safely ignore this warning...
    // ...If you do not want the warning to appear in your
    // console then you can add the special comment:
    // "// eslint-disable-line" to the end of this
    // code line and ES Lint will stop putting the warning
    // for this line of code in the console...
    return new Function('return ' + str)(); // eslint-disable-line
}


// The following function modified from code
// found at this stackoverflow Q&A:
// - https://stackoverflow.com/questions/273789/is-there-a-version-of-javascripts-string-indexof-that-allows-for-regular-expr
export function regexIndexOf(string, regex, startpos) {
    const indexOf = string.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}

// The following function modified from code
// found at this stackoverflow Q&A:
// - https://stackoverflow.com/questions/273789/is-there-a-version-of-javascripts-string-indexof-that-allows-for-regular-expr
export function regexLastIndexOf(string, regex, startpos) {
    regex = (regex.global) ? regex : new RegExp(regex.source, "g" + (regex.ignoreCase ? "i" : "") + (regex.multiLine ? "m" : ""));
    let result;
    if(typeof (startpos) == "undefined") {
        startpos = string.length;
    } else if(startpos < 0) {
        startpos = 0;
    }
    const stringToWorkWith = string.substring(0, startpos + 1);
    let lastIndexOf = -1;
    let nextStop = 0;
    while((result = regex.exec(stringToWorkWith)) != null) {
        lastIndexOf = result.index;
        regex.lastIndex = ++nextStop;
    }
    return lastIndexOf;
}

// The following function rounds the displayed
// digits to a maximum number of characters including
// the decimal characters and the digits to the right
// of the decimal character...
// Ex: Max length is 15 characters
// Num -> 123456.890123456 // length -> 16 characters
// Result -> 123456.89012346 // length -> set to 15 characters...with the last decimal number rounded up
export function roundDisplay(str, maxDigits){

    const splitStr = str.split('.');
    const int = splitStr[0];
    const numberOfRoundDigits = maxDigits - (int.length + 1);
    const numberToRound = parseFloat(str);
    let roundedNumber = numberToRound.toFixed(numberOfRoundDigits);
    // This line removes any trailing zereos that the
    // toFixed() method may produce...
    // Ex -> String number -> 123.45000 -> 123.45
    roundedNumber = parseFloat(roundedNumber);

    return `${roundedNumber}`;

}
