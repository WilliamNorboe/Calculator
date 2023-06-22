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
    return a/b;
}

let num1;
let num2;
let operator;

function operate(n1, n2, op){
    let result;
    if(op == "+"){
        result = add(n1,n2);
    }
    else if(op == "-"){
        result = subtract(n1,n2);
    }
    else if(op == "*"){
        result = multiply(n1, n2);
    }
    else if(op == "/"){
        result = divide(n1, n2);
    }
    return result;
}

console.log(operate('3','2','+'));