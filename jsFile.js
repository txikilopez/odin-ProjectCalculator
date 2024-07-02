



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
        case "suma":
            calcResult =  suma(num1,num2);
            break;
        case "resta":
            calcResult = resta(num1,num2);
            break;
        case "division":
            calcResult = dividir(num1,num2);
            break;
        case "multiplicacion":
            calcResult = multiplicar(num1,num2);
            break;
    }
    return calcResult;

}