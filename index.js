// puts result section to JS object
let result = document.getElementById("result");

// returns result's value
function getText() {
    return result.value;
}

// sets value that is inside setText() function
function setText(val) {
    result.value = val;
}

// sets numbers one by one into current result
function clicked(value){
    setText(getText() + value);
}

// calls temporary variables
let num1;
let num2;
let operation;

// check what operation clicked and sets that 
// operation and numbers into temporary variables 

function returnOp(op){
    switch(op){
        case '+': {
            num1 = Number(getText());
            setText("");
            operation = '+';
        } break;
        case '-': {
            num1 = Number(getText());
            setText("");
            operation = '-';
        } break;
        case '*': {
            num1 = Number(getText());
            setText("");
            operation = '*';
        } break;
        case '/': {
            num1 = Number(getText());
            setText("");
            operation = '/';
        } break;
        case '%': {
            num1 = Number(getText());
            setText("");
            operation = '%';
        } break;
    }
}

// If equal button get clicked, check what 
// operation is chose and operate arithmatic calculation
function equal(){
    switch(operation){
        case '+': {
            num2 = Number(getText());
            setText(num1 + num2);
            num1 = num1 + num2
        } break;
        case '-': {
            num2 = Number(getText());
            setText(num1 - num2);
            num1 = num1 - num2;
        } break;
        case '*': {
            num2 = Number(getText());
            setText(num1 * num2);
            num1 = num1 * num2;
        } break;
        case '/': {
            num2 = Number(getText());
            setText(num1 / num2);
            num1 = num1 / num2;
        } break;
        case '%': {
            num2 = Number(getText());
            setText(num1 * num2 / 100);
            num1 = num1 * num2 / 100;
        } break;
    }
}

// clears current result value
function clearInput() {
    setText("");
}

// clears all temporary variables and current result value
function clearAll(){
    setText("");
    num1 = 0;
    num2 = 0;
    operation = '';
}

// clears current result value's last digit
function backSpace(){
    let currentText = getText();
    setText("")
    for (let i = 0; i < currentText.length - 1 ; i++) {
        setText(getText() + currentText.charAt(i));
    }
}

// sets inverse number of current result value
function inverse(){
    setText(1 / Number(getText()));
}

// sets minus plus symbol on current result value
function minusPlus(){
    setText((-1) * Number(getText()));
}   

// sets square of current result value
function square(){
    setText(Number(getText()) ** 2);
}

// sets square root of current result value
function sqrt(){    
    setText(Math.sqrt(Number(getText())));
}       

// sets dot on current result value
function dot(){
    let currentText = getText();
    let isDotted;
    if (currentText == "") {
        setText("0.");
        isDotted = true;
    }else{
        for (let i = 0; i < currentText.length ; i++) {
            if (currentText.charAt(i) == ".") {
                isDotted = true;
                break;
            }
            isDotted = false;    
        }
    if(!isDotted){
        setText(currentText + ".");
        isDotted = true;
    }
    } 
}
