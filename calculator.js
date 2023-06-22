function add(a, b){
    return Number(a) + Number(b);
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return Math.round(a/b * 100000) / 100000;
}

let num1 =  "";
let num2 = "";
let operator = "";
let replace = false;

function operate(n1, n2, op){
    let result;
    if(op == "a"){
        result = add(n1,n2);
    }
    else if(op == "s"){
        result = subtract(n1,n2);
    }
    else if(op == "m"){
        result = multiply(n1, n2);
    }
    else if(op == "d"){
        result = divide(n1, n2);
    }
    return result;
}


function isDigit(str) {
    return str.length === 1 && str.match(/[0-9]/i);
}
function isOp(str) {
    return str == "a" || str == "s" || str == "m" || str == "d";
}

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.displayText');
buttons.forEach((button) => {
    button.addEventListener('click', () =>{buttonClicked(button)})
});

function buttonClicked(button){
    buttonPressed = button.id[1];
    if(isDigit(buttonPressed)){
        digitPressed(buttonPressed);
    }
    else if(isOp(buttonPressed)){
        if(operator != ""){
            equalPressed();
        }
        num1 = display.textContent;
        operator = buttonPressed;
        replace = true;
    }
    else if(buttonPressed == '='){
        if(operator == ""){
            return;
        }
        equalPressed();
    }
    else if(buttonPressed == "C"){
        num1 = "";
        num2 = "";
        operator = "";
        replace = false;
        display.textContent = "0"
    }
    
}

function equalPressed(){
    num2 = display.textContent;
    result = operate(num1, num2, operator);
    operator = "";
    num1 = result;
    num2 = "";
    if(String(num1).length > 12){
        display.textContent = "Overflow";
        num1 = 0;
        replace = true;
        return;
    }
    display.textContent = num1;
    replace = true;
}
function digitPressed(digit){
    if(display.textContent.length == 12 && !replace){
        return;
    }
    if(display.textContent == "0" || replace){
        display.textContent = digit;
        replace = false;
        return;
    }
    display.textContent += digit;
}
// console.log(operate('3','2','+'))