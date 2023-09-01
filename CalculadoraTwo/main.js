const $display = document.querySelector(".field-display");
const $buttons = document.querySelectorAll(".key");
const specialChars = ["+/-", "%", "*", "/", "-", "+", "="];

let outputFirst = ""; 
let outputSecond = "";
let operator = "";
let result;

function calculate(btnValue){
    $display.focus();
    if(btnValue === "=" && btnValue !== ""){
        switch(operator){
            case "+":
               result = Number(outputFirst)  + Number(outputSecond);
               outputFirst = result;
               outputSecond = "";
               break;
            case "-":
                result = Number(outputFirst) - Number(outputSecond);
                outputFirst = result;
                outputSecond = "";
                break;
            case "*":
                result = Number(outputFirst) * Number(outputSecond);
                outputFirst = result;
                outputSecond = "";
                break;
            case "/":
                result = Number(outputFirst) / Number(outputSecond);
                outputFirst = result;
                outputSecond = "";
                break;
            default:
                return
        }
    }
    else if(btnValue === "%" && outputFirst !== ""){
        result = Number(outputFirst) / 100;
        outputFirst = result;
        outputSecond = "";
    }
    else if(btnValue === "C"){
        result = null;
        outputFirst = "";
        outputSecond = "";
        operator = "";
    }

    
    else if(outputFirst !== "" && specialChars.includes(btnValue)){
        operator = btnValue;
        console.log(operator)
    }
    else if(operator !== ""){
        outputSecond += btnValue;
        result = outputSecond;
    }

    else{
        if(outputFirst === "" && specialChars.includes(btnValue)) return;
        outputFirst += btnValue;
        result = outputFirst;
        console.log("first")
    }
 
    $display.value = result;
    
};



$buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        calculate(e.target.dataset.value)
    })
})


