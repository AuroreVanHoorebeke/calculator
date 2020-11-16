// HTML fields generation

const main = document.querySelector("main");

for(i =0; i < 10; i++){
    const num = document.createElement("button");
    num.textContent = i;
    main.appendChild(num);
}

const add = document.createElement("button");
add.textContent = "+";

const sub = document.createElement("button");
sub.textContent = "-";

const mult = document.createElement("button");
mult.textContent = "*";

const divide = document.createElement("button");
divide.textContent = "/";

const clear = document.createElement("button");
clear.textContent = "C";

const equal = document.createElement("button");
equal.textContent = "=";

const display = document.createElement("div");
display.style.border = "2px solid black";
display.style.height = "50px";

// Append child

main.appendChild(add);
main.appendChild(sub);
main.appendChild(mult);
main.appendChild(divide);
main.appendChild(clear);
main.appendChild(equal);
main.appendChild(display);