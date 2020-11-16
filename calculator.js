// HTML fields generation

const main = document.querySelector("main");

const buttonDiv = document.createElement("div");

const displayDiv = document.createElement("div");

const display = document.createElement("div");
display.style.border = "2px solid black";
display.style.height = "50px";

for (let i = 0; i < 10; i++) {
    const num = document.createElement("button");
    num.textContent = i;
    buttonDiv.appendChild(num);
    num.addEventListener("click", function () {
        display.textContent += i;
    });
};

const operators = ["+", "-", "*", "/"];
for (let i = 0; i < operators.length; i++) {
    const oper = document.createElement("button");
    oper.textContent = operators[i];
    buttonDiv.appendChild(oper);
    oper.addEventListener("click", function () {
        display.textContent += operators[i];
    });
}

const clear = document.createElement("button");
clear.textContent = "C";
clear.addEventListener("click", function () {
    display.textContent = "";
});

const equal = document.createElement("button");
equal.textContent = "=";

equal.addEventListener("click", function () {
    display.textContent = Function('return ' + display.textContent)()
});

// Append child
main.appendChild(buttonDiv);
buttonDiv.appendChild(clear);
buttonDiv.appendChild(equal);
main.appendChild(displayDiv);
displayDiv.appendChild(display);