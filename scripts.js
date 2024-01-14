let operatorSelected = false
let equationExecuted = false
let buttonValue1 =""
let buttonValue2 =""
let operatorSign =""

let equationText =""

let result = 0
let num1 = 0
let num2 = 0
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
    if(operatorSelected == true && buttonValue2 != 0){
        buttonValue1 = result
        buttonValue2 = ""
        result = 0
        updateEquation()
        operatorSelected == false
        equationExecuted = false
    }


    
    operatorSign = button.innerHTML
    updateEquation()
    operatorSelected=true
    console.log(operatorSign)
}


function executeOperation(){
    if(operatorSelected == true){
        num1 = parseInt(buttonValue1)
        num2 = parseInt(buttonValue2)


        if(operatorSign === "+"){
            result = Math.round(num1+num2)
        }else if(operatorSign === "-"){
            result = Math.round(num1-num2)
        }else if(operatorSign === "*"){
            result = Math.round(num1*num2)
        }else if(operatorSign === "/"){
            if(num2 != 0){
                result = Math.round(num1/num2)
            }else if(num2 == 0){
                result = "ERROR!"
            }
        }
        
        if(equationExecuted == false){
            console.log("Result: "+result)
            document.getElementById("equation").innerHTML += ("="+String(result))
            equationExecuted = true
        }
    }else if(operatorSelected == false){

    }
    
    
}

