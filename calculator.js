// HTML fields generation

const main = document.querySelector("main");

const calculator = document.createElement("div");
calculator.className = "calculator";

const buttonDiv = document.createElement("div");
buttonDiv.className = "buttonDiv";

const numDiv = document.createElement("div");
numDiv.className = "numDiv";

const operDiv = document.createElement("div");
operDiv.className = "operDiv";

const displayDiv = document.createElement("div");
displayDiv.className = "displayDiv";

const histDiv = document.createElement("div");
histDiv.className = "histDiv";

const display = document.createElement("div");
display.className = "display";

for (let i = 0; i < 10; i++) {
    const num = document.createElement("button");
    num.textContent = i;
    numDiv.appendChild(num);
    num.addEventListener("click", function () {
        display.textContent += i;
        histDiv.textContent += i;
    });
};

const operators = ["+", "-", "*", "/"];
for (let i = 0; i < operators.length; i++) {
    const oper = document.createElement("button");
    oper.textContent = operators[i];
    operDiv.appendChild(oper);
    oper.addEventListener("click", function () {
        display.textContent += operators[i];
        histDiv.textContent += operators[i];
    });
}

const clear = document.createElement("button");
clear.textContent = "AC";
clear.addEventListener("click", function () {
    display.textContent = "";
});

const equal = document.createElement("button");
equal.className = "equal";
equal.textContent = "=";


equal.addEventListener("click", function () {
    display.textContent = Function('return ' + display.textContent)();
    histDiv.textContent = histDiv.textContent + " = " + display.textContent + "  ";
});


// document.body.addEventListener("keypress", function(e){
//     console.log(e.code)
//     switch
//     (e.code = enter){

//     }
// })

// Append child

main.appendChild(calculator);
calculator.appendChild(buttonDiv)
buttonDiv.appendChild(numDiv);
buttonDiv.appendChild(operDiv);
operDiv.appendChild(clear);
numDiv.appendChild(equal);
calculator.appendChild(displayDiv);
displayDiv.appendChild(display);
displayDiv.appendChild(histDiv);

// ugly js "I use no css" styling section //

// /* Main box styling */
// main.style.padding = "20%";
// main.style.display = "flex";
// main.style.flexDirection = "column-reverse"

// /* Button div styling */
// buttonDiv.style.width = "25%";
// buttonDiv.style.length = "25%";
// buttonDiv.style.padding = "auto";
// buttonDiv.style.display = "flex";
// buttonDiv.style.flexWrap = "wrap";
// buttonDiv.style.flexDirection = "column-reverse";

// /* Num buttons styling */
// numDiv.style.display="flex";
// numDiv.style.flexWrap="wrap-reverse";

// /* Display div */
// displayDiv.style.width = "25%";
// displayDiv.style.length = "25%";