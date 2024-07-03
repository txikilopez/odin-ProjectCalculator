let screen = document.querySelector(".screen");

let numericalButtons = document.querySelectorAll(".numerical");
let numberPad = document.querySelector(".numberButton");
let operationButtons = document.querySelector(".operationButtons");
let clearButton = document.querySelector(".clear");
let totalButton = document.querySelector(".total");
let currentNumber = 0;
let savedNumber = 0;
let operatorPressed = "";
let resultCalc =0;

const opMult = "multiplicacion";
const opDiv = "division";
const opSum = "suma";
const opRest = "resta";

for(i=0; i<numericalButtons.length; i++){
numericalButtons[i].addEventListener("click",(e)=>{
    if(screen.textContent == 0){screen.textContent = ""}
    if(screen.textContent.length < 8){
        screen.textContent = screen.textContent + e.target.textContent;
        currentNumber = screen.textContent;
}})
}

operationButtons.addEventListener("click",e=>{
    let selection = e.target.classList[1]
    operatorPressed = captureOperator(selection);
    savedNumber = currentNumber;
    
//clear screencontent to start again
    numberPad.addEventListener("click",(e)=>{
            screen.textContent=e.target.textContent;
        },{once:true})
        } 
)

totalButton.addEventListener("click",(e)=>{
    console.log(+savedNumber);
    console.log(+currentNumber);

    result = operate(+savedNumber,+currentNumber,operatorPressed);
    screen.textContent = result;
})


function captureOperator(str){
    // console.log(str);
    let auxVar = "";
    switch(str){
    case "multiply":
        auxVar = opMult;
        break;
    case "divide":
        auxVar = opDiv;
        break;
    case "plus":
        auxVar = opSum;
        break;
    case "minus":
        auxVar = opRest;
        break;
    }
    return auxVar;
}



clearButton.addEventListener("click",(e)=>{
    screen.textContent = 0;
    currentNumber = 0;
    savedNumber = 0;
    resultCalc =0;
    operatorPressed=""; 
})




function suma(a,b){
    return a+b;
}

function resta(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
    if(b===0){return "ERROR"}
    return a/b;
}


function operate(num1,num2,operator){
    let calcResult = 0;

    switch(operator){
        case opSum:
            calcResult =  suma(num1,num2);
            break;
        case opRest:
            calcResult = resta(num1,num2);
            break;
        case opDiv:
            calcResult = dividir(num1,num2);
            break;
        case opMult:
            calcResult = multiplicar(num1,num2);
            break;
    }
    return calcResult;

}