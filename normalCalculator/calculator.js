let calcResult = document.getElementById("calculatorResult");
let algebricExpressionArray = ['%', 'x', '-', '+', '/'];
let userInputsArray = [];
let algExpArrayComb = [];
var previousUservalue = "";
let result = 0;

document.addEventListener("click", function(event) {
    let currentSelection = event.target.innerText;

    if(event.target.innerText == 'C') {
        calcResult.value = 0;
        previousUservalue = "";
        userInputsArray = [];
        return;
    }
    
    if(!algebricExpressionArray.includes(currentSelection)) {

        if(currentSelection.length > 1) return;
        
        if(currentSelection == ')' || currentSelection == '(' || currentSelection == '.'){
            

        }else {
            userInputsArray.push(parseInt(currentSelection));
            calcResult.value = previousUservalue.concat(userInputsArray.join(""));
        }

    }else {
        if(currentSelection == "+") {
            

            if(previousUservalue.length > 0) {
                calcResult.value.concat(userInputsArray.join("").concat("+"));
                
                // algExpArrayComb.push(userInputsArray.join(""));
                // userInputsArray = [];
            }else {
                
                
                previousUservalue = previousUservalue.concat(userInputsArray.join("").concat("+"));
            
                calcResult.value = previousUservalue;
                algExpArrayComb.push(userInputsArray.join(""));
                userInputsArray = [];
                return;
            }

            
            
        }
    }


    if(currentSelection == '=') {
        for(let i = 0; i < algExpArrayComb.length; i++) {
            var lastValueSum = 0;

            console.log("All =", algExpArrayComb)

            for(let l = 0; l < userInputsArray.length; l++) {
                lastValueSum = lastValueSum + parseInt(userInputsArray[i]); 
            }

            result = result + parseInt(lastValueSum) + parseInt(algExpArrayComb[i]);
        }

        calcResult.value = result;
        return;
    }

    
})