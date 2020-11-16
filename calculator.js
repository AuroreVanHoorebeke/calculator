// HTML fields generation

const main = document.querySelector("main");

const buttonDiv = document.createElement("div");
buttonDiv.className = "buttonDiv"

const numDiv = document.createElement("div");
numDiv.className = "numDiv";

const operDiv = document.createElement("div");
operDiv.className = "operDiv";

const displayDiv = document.createElement("div");
displayDiv.className = "displayDiv";

const display = document.createElement("div");
display.style.border = "2px solid black";
display.style.height = "50px";

for (let i = 0; i < 10; i++) {
    const num = document.createElement("button");
    num.textContent = i;
    numDiv.appendChild(num);
    num.addEventListener("click", function () {
        display.textContent += i;
    });
};

const operators = ["+", "-", "*", "/"];
for (let i = 0; i < operators.length; i++) {
    const oper = document.createElement("button");
    oper.textContent = operators[i];
    operDiv.appendChild(oper);
    oper.addEventListener("click", function () {
        display.textContent += operators[i];
    });
}

const clear = document.createElement("button");
clear.textContent = "CE";
clear.addEventListener("click", function () {
    display.textContent = "";
});

const equal = document.createElement("button");
equal.className = "equal";
equal.textContent = "=";

equal.addEventListener("click", function () {
    display.textContent = Function('return ' + display.textContent)()
});

// Append child

main.appendChild(buttonDiv);
buttonDiv.appendChild(numDiv);
buttonDiv.appendChild(operDiv);
operDiv.appendChild(clear);
numDiv.appendChild(equal);
main.appendChild(displayDiv);
displayDiv.appendChild(display);

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