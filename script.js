let resultTextArea = document.getElementById("result");
let expTextArea = document.getElementById("exp");

let numButtons = [];
for (let i = 0; i < 10; i++) {
    numButtons[i] = document.getElementById(i);
}

let doubleZero = document.getElementById("00");
let allClear = document.getElementById("ac");
let clear = document.getElementById("clear");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");
let equals = document.getElementById("equals");
let inv = document.getElementById("inv");
let isInv = false;
let sin = document.getElementById("sin");
let cos = document.getElementById("cos");
let tan = document.getElementById("tan");
let dot = document.getElementById("dot");
let mod = document.getElementById("mod");
let a = 0,
    b = 0,
    res = 0;
let op = '';

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

inv.addEventListener("click", function () {
    if (!isInv) {
        sin.innerHTML = "sin<sup>-</sup>";
        cos.innerHTML = "cos<sup>-</sup>";
        tan.innerHTML = "tan<sup>-</sup>";
        isInv = true;
    } else {
        sin.innerHTML = "sin";
        cos.innerHTML = "cos";
        tan.innerHTML = "tan";
        isInv = false;
    }
});

allClear.addEventListener("click", function () {
    expTextArea.innerHTML = "Enter expression";
    resultTextArea.innerHTML = "&nbsp";
});

clear.addEventListener("click", function () {
    if (expTextArea.innerHTML != "Enter expression") expTextArea.innerHTML = expTextArea.innerHTML.slice(0, -1);
    if (expTextArea.innerHTML === "") expTextArea.innerHTML = "Enter expression";
});

numButtons[0].addEventListener("click", function () {
    if (expTextArea.innerHTML === "Enter expression")
        expTextArea.innerHTML = "0";
    else
        expTextArea.innerHTML += "0";

});

numButtons[1].addEventListener("click", function () {
    if (expTextArea.innerHTML === "Enter expression")
        expTextArea.innerHTML = "1";
    else
        expTextArea.innerHTML += "1";
});

numButtons[2].addEventListener("click", function () {
    if (expTextArea.innerHTML === "Enter expression")
        expTextArea.innerHTML = "2";
    else
        expTextArea.innerHTML += "2";
});

numButtons[3].addEventListener("click", function () {
    if (expTextArea.innerHTML === "Enter expression")
        expTextArea.innerHTML = "3";
    else
        expTextArea.innerHTML += "3";
});

numButtons[4].addEventListener("click", function () {
    if (expTextArea.innerHTML === "Enter expression")
        expTextArea.innerHTML = "4";
    else
        expTextArea.innerHTML += "4";
});

numButtons[5].addEventListener("click", function () {
    if (expTextArea.innerHTML === "Enter expression")
        expTextArea.innerHTML = "5";
    else
        expTextArea.innerHTML += "5";
});

numButtons[6].addEventListener("click", function () {
    if (expTextArea.innerHTML === "Enter expression")
        expTextArea.innerHTML = "6";
    else
        expTextArea.innerHTML += "6";
});

numButtons[7].addEventListener("click", function () {
    if (expTextArea.innerHTML === "Enter expression")
        expTextArea.innerHTML = "7";
    else
        expTextArea.innerHTML += "7";
});

numButtons[8].addEventListener("click", function () {
    if (expTextArea.innerHTML === "Enter expression")
        expTextArea.innerHTML = "8";
    else
        expTextArea.innerHTML += "8";
});

numButtons[9].addEventListener("click", function () {
    if (expTextArea.innerHTML === "Enter expression")
        expTextArea.innerHTML = "9";
    else
        expTextArea.innerHTML += "9";
});

doubleZero.addEventListener("click", function () {
    if (expTextArea.innerHTML === "Enter expression")
        expTextArea.innerHTML = "00";
    else
        expTextArea.innerHTML += "00";
});

add.addEventListener("click", function () {
    if (resultTextArea.innerHTML === '&nbsp;') {
        resultTextArea.innerHTML = expTextArea.innerHTML + " + ";
        a = Number(expTextArea.innerHTML);
    } else if (resultTextArea.innerHTML != '&nbsp') {
        a = Number(resultTextArea.innerHTML);
        resultTextArea.innerHTML = res + " + ";
    }
    expTextArea.innerHTML = "Enter expression";
    op = '+';
});

sub.addEventListener("click", function () {
    if (resultTextArea.innerHTML === '&nbsp;') {
        resultTextArea.innerHTML = expTextArea.innerHTML + " - ";
        a = Number(expTextArea.innerHTML);
    } else if (resultTextArea.innerHTML != '&nbsp') {
        a = Number(resultTextArea.innerHTML);
        resultTextArea.innerHTML = res + " - ";
    }
    expTextArea.innerHTML = "Enter expression";
    op = '-';
});

mul.addEventListener("click", function () {
    if (resultTextArea.innerHTML === '&nbsp;') {
        resultTextArea.innerHTML = expTextArea.innerHTML + " &times; ";
        a = Number(expTextArea.innerHTML);
    } else if (resultTextArea.innerHTML != '&nbsp') {
        a = Number(resultTextArea.innerHTML);
        resultTextArea.innerHTML = res + " &times; ";
    }
    expTextArea.innerHTML = "Enter expression";
    op = '*';
});

div.addEventListener("click", function () {
    if (resultTextArea.innerHTML === '&nbsp;') {
        resultTextArea.innerHTML = expTextArea.innerHTML + " &#247; ";
        a = Number(expTextArea.innerHTML);
    } else if (resultTextArea.innerHTML != '&nbsp') {
        a = Number(resultTextArea.innerHTML);
        resultTextArea.innerHTML = res + " &#247; ";
    }
    expTextArea.innerHTML = "Enter expression";
    op = '/';
});

mod.addEventListener("click", function () {
    if (resultTextArea.innerHTML === '&nbsp;') {
        resultTextArea.innerHTML = expTextArea.innerHTML + " % ";
        a = Number(expTextArea.innerHTML);
    } else if (resultTextArea.innerHTML != '&nbsp') {
        a = Number(resultTextArea.innerHTML);
        resultTextArea.innerHTML = res + " % ";
    }
    expTextArea.innerHTML = "Enter expression";
    op = '%';
});

dot.addEventListener("click", function () {
    if (expTextArea.innerHTML != "Enter expression")
        expTextArea.innerHTML += ".";
});

sin.addEventListener("click", function () {
    if (!expTextArea.innerHTML.includes("sin")) {
        if (!isInv) {
            expTextArea.innerHTML = "sin ";
            op = "sin";
        } else {
            expTextArea.innerHTML = "sin<sup>-</sup> ";
            op = "asin";
        }
    }
});

cos.addEventListener("click", function () {
    if (!expTextArea.innerHTML.includes("cos")) {
        if (!isInv) {
            expTextArea.innerHTML = "cos ";
            op = "cos";
        } else {
            expTextArea.innerHTML = "cos<sup>-</sup> ";
            op = "acos";
        }
    }
});

tan.addEventListener("click", function () {
    if (!expTextArea.innerHTML.includes("tan")) {
        if (!isInv) {
            expTextArea.innerHTML = "tan ";
            op = "tan";
        } else {
            expTextArea.innerHTML = "tan<sup>-</sup> ";
            op = "atan";
        }
    }
});

equals.addEventListener('click', function () {
    if (op === '+') {
        b = Number(expTextArea.innerHTML);
        res = a + b;
    } else if (op === '-') {
        b = Number(expTextArea.innerHTML);
        res = a - b;
    } else if (op === '*') {
        b = Number(expTextArea.innerHTML);
        res = a * b;
    } else if (op === '/') {
        b = Number(expTextArea.innerHTML);
        res = a / b;
    } else if (op === '%') {
        b = Number(expTextArea.innerHTML);
        res = a % b;
    } else if (op === 'sin') res = Math.sin(toRadians(Number(expTextArea.innerHTML.slice(3))));
    else if (op === 'cos') res = Math.cos(toRadians(Number(expTextArea.innerHTML.slice(3))));
    else if (op === 'tan') res = Math.tan(toRadians(Number(expTextArea.innerHTML.slice(3))));
    else if (op === 'asin') res = toDegrees(Math.asin(expTextArea.innerHTML.slice(16)));
    else if (op === 'acos') res = toDegrees(Math.acos(expTextArea.innerHTML.slice(16)));
    else if (op === 'atan') res = toDegrees(Math.atan(expTextArea.innerHTML.slice(16)));
    resultTextArea.innerHTML = res;
    expTextArea.innerHTML = "Enter expression";
});