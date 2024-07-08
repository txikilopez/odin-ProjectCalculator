//pending -- operator button calculates

// things that don't work in the example calc: 6-66, doesn't allow it.
// another case (5-5.2 goes to 0)

let screen = document.querySelector(".screen");
let numberPad = document.querySelector(".numberButton");
let operationButtons = document.querySelector(".operationButtons");
let clearButton = document.querySelector(".clear");
let totalButton = document.querySelector(".total");
let currentNumber = 0;
let savedNumber = 0;
let operatorPressed = "";
let operatorPressedLast ="";
let midResultCalc = "a";

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
            if(checkPlusMinusDot != "dot" && checkPlusMinusDot != "zero"){
                screen.textContent = multiplier * (screen.textContent);}
            currentNumber = screen.textContent;
        
    }
}})

//operational button pressing
operationButtons.addEventListener("click",e=>{

    if(e.target.computedRole === "button"){
    let selection = e.target.classList[1]
    operatorPressedLast = operatorPressed;
    operatorPressed = captureOperator(selection);
    
    if(midResultCalc != "a"){
        // console.log("saved num = "+savedNumber);
        // console.log("currentNumber = "+currentNumber);
        midResultCalc = operate(+savedNumber,+currentNumber,operatorPressedLast);
        console.log(midResultCalc.toString().length);
        if(midResultCalc.toString().length > 10){midResultCalc = midResultCalc.toString().substring(0,10);}
        screen.textContent = midResultCalc;
        savedNumber = midResultCalc;
    }
    else{
    savedNumber = currentNumber;
    midResultCalc = currentNumber;}



    //clear screencontent to start again
    numberPad.addEventListener("click",(e)=>{
        let checkPlusMinusDot = e.target.classList[2];
        if(e.target.computedRole === "button"){
                if(checkPlusMinusDot === "notNumber"){textForOutput = 0;}
                else {textForOutput = e.target.textContent;}
            screen.textContent=textForOutput;
            currentNumber = screen.textContent;
            //  Calc = currentNumber;
        }},{once:true})
    }

    })

//equal button
totalButton.addEventListener("click",(e)=>{
    showResult();
    
    midResultCalc ="a";
    operatorPressed=""; 
    operatorPressedLast="";

    numberPad.addEventListener("click",(e)=>{
        let checkPlusMinusDot = e.target.classList[2];
        if(e.target.computedRole === "button"){
            if(checkPlusMinusDot === "notNumber"){textForOutput = 0;}
            else {textForOutput = e.target.textContent;}
        screen.textContent=textForOutput;
        currentNumber = screen.textContent;
    }},{once:true})
})

//ClearButton
clearButton.addEventListener("click",(e)=>{
    screen.textContent = 0;
    currentNumber = 0;
    savedNumber = 0;
    midResultCalc ="a";
    operatorPressed=""; 
    operatorPressedLast="";
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