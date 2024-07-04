//pending -- operator button calculates
// can't add zeros on decimal places input

// things that don't work in the example calc: 6-66, doesn't allow it.
// another case (5-5.2 goes to 0)

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


//Initialize button pad
numberPad.addEventListener("click",(e)=>{
    if(e.target.computedRole ==="button"){
        let newInput = e.target.textContent;
        let checkPlusMinusDot = e.target.classList[1];
        let multiplier = 1;

        if(checkPlusMinusDot == "plusMinus"){
            multiplier = -1;
            newInput="";
        }

        if(currentNumber.toString().includes(".") && checkPlusMinusDot === "dot"){newInput="";}
        
        
        if(screen.textContent === 0){screen.textContent = ""}

        if(screen.textContent.length < 8){
            screen.textContent = screen.textContent + newInput;
            if(checkPlusMinusDot != "dot"){
                screen.textContent = multiplier * (screen.textContent);}
            currentNumber = screen.textContent;
        
    }
}})




//operation button pressing
operationButtons.addEventListener("click",e=>{
    if(e.target.computedRole === "button"){
    let selection = e.target.classList[1]
    operatorPressed = captureOperator(selection);
    
    savedNumber = currentNumber;
    

    //clear screencontent to start again
    numberPad.addEventListener("click",(e)=>{
        if(e.target.computedRole === "button"){
            screen.textContent=e.target.textContent;
            currentNumber = screen.textContent;
        }},{once:true})
    }
    } 
)

//equal button
totalButton.addEventListener("click",(e)=>{
    showResult();
    numberPad.addEventListener("click",(e)=>{
        if(e.target.computedRole === "button"){
        screen.textContent=e.target.textContent;
        currentNumber = screen.textContent;
    }},{once:true})
})

//ClearButton
clearButton.addEventListener("click",(e)=>{
    screen.textContent = 0;
    currentNumber = 0;
    savedNumber = 0;
    resultCalc =0;
    operatorPressed=""; 
})

//Functions

function showResult(){

    result = (operate(+savedNumber,+currentNumber,operatorPressed).toString());
    
    if (result.length >10){result = result.substring(0,10);}
    screen.textContent = result;
    currentNumber = result;
}


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