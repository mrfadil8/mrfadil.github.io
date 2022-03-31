let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const calculatorScreen = document.getElementById("display-screen");
const operator = document.querySelectorAll(".operator");
const equalSign = document.getElementById("equal-sign");
const clearBtn = document.getElementById("all-clear");
const decimal = document.getElementById("decimal");
const numbers = document.querySelectorAll(".numbers");

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
    }else{
        currentNumber += number;
    }
}

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot;
}

const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "%":
            result = parseFloat(prevNumber) % parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});


numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});

equalSign.addEventListener('click', () =>{
    calculate();
    updateScreen(currentNumber);
});

clearBtn.addEventListener('click',() => {
    clearAll();
    updateScreen(currentNumber);
});

operator.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
});

