let operatorSelected = false

let buttonValue1 =""
let buttonValue2 =""
let operatorSign =""

let equationText =""

function clearAll(){
    operatorSelected = false

    buttonValue1 =""
    buttonValue2 =""
    operatorSign =""
    equationText =""
    console.log(operatorSelected,buttonValue1,buttonValue2,operatorSign,equationText)
    document.getElementById("equation").innerHTML = equationText

}

function updateEquation(){
    equationText = String(buttonValue1)+String(operatorSign)+String(buttonValue2)
    console.log(equationText)
    document.getElementById("equation").innerHTML = equationText
}




function insertNum(button){
    if(operatorSelected == false){
        buttonValue1 = buttonValue1.concat(button.innerHTML)
        updateEquation()
        console.log("Number 1: "+buttonValue1)
    }else if(operatorSelected == true){
        buttonValue2 = buttonValue2.concat(button.innerHTML)
        updateEquation()
        console.log("Number 2: "+buttonValue2)
    }
}



function insertOperator(button){
    if(operatorSelected == true){
        console.log(executeOperation().num1,executeOperation().result)
        executeOperation().num1 = executeOperation().result
        executeOperation().result = 0
        operatorSelected == false
    }
    operatorSign = button.innerHTML
    updateEquation()
    operatorSelected=true
    console.log(operatorSign)
}

function executeOperation(){
    
    let result = 0
    let num1 = parseInt(buttonValue1)
    let num2 = parseInt(buttonValue2)


    if(operatorSign === "+"){
        result = num1+num2
    }else if(operatorSign === "-"){
        result = num1-num2
    }else if(operatorSign === "*"){
        result = num1*num2
    }else if(operatorSign === "/"){
        if(num2 != 0){
            result = num1/num2
        }else if(num2 == 0){
            result = "ERROR!"
        }
    }
    console.log("Result: "+result)
    document.getElementById("equation").innerHTML += ("="+String(result))
    
}

