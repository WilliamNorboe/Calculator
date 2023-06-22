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
let decimal = false;

function operate(n1, n2, op){
    let result;
    if(op == "a" || op == "+"){
        result = add(n1,n2);
    }
    else if(op == "s" || op == "-"){
        result = subtract(n1,n2);
    }
    else if(op == "m" || op == "*"){
        result = multiply(n1, n2);
    }
    else if(op == "d" || op == "/"){
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

// keyboard inputs
document.addEventListener('keypress', (event) => {
    var name = event.key;
    console.log(name);
    if(isDigit(name)){
        digitPressed(name);
    }
    else if(name == '.'){
        decimalPressed();
    }
    else if(name=='+'||name =="-"||name=="*"||name=="/"){
        opPressed(name);
    }
    else if(name == "=" || name == "Enter"){
        if(operator == ""){
            return;
        }
        equalPressed();
    }
    else if(name == "c"){
        clearPressed();
    }
    else if(name == "b"){
        backSpacePressed();
    }
  }, false);

function buttonClicked(button){
    let buttonPressed = button.id[1];
    if(isDigit(buttonPressed)){
        digitPressed(buttonPressed);
    }
    else if(isOp(buttonPressed)){
        opPressed(buttonPressed);
    }
    else if(buttonPressed == 'e'){ // equal operator
        if(operator == ""){
            return;
        }
        equalPressed();
    }
    else if(buttonPressed == "C"){ // clear
        clearPressed();
    }
    else if(buttonPressed == "p"){ // decimal point
        decimalPressed();
    }
    else if(buttonPressed == "S"){ // backspace
        backSpacePressed();
    }
    
}

function opPressed(buttonPressed){
    if(operator != ""){
        equalPressed();
    }
    num1 = display.textContent;
    operator = buttonPressed;
    replace = true;
    decimal = false;
}
function clearPressed(){
    num1 = "";
    num2 = "";
    operator = "";
    replace = false;
    decimal = false;
    display.textContent = "0"
}

function decimalPressed(){
    if(decimal){ // already a decimal point
        return;
    }
    decimal = true;
    if(replace){
        replace = false;
        display.textContent = "0."
        return;
    }
    display.textContent += ".";
}

function backSpacePressed(){
    if(display.textContent.length == 1 || replace){
        return;
    }
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
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
