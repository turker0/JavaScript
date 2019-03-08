let eq = 0;
let operation;
let k;
let r;
let ac = 1;
function reset() {
    getColored(document.getElementsByClassName('buton')[3]);
    document.getElementsByClassName('input')[0].innerText = "0";
    document.getElementsByClassName('reminder')[0].innerText = "0";
    ac = 1;
}

function setDefault() {
    eq = 0;
    k = 0;
    ac = 1;
}

function checkLength() {
    if (document.getElementsByClassName('input')[0].innerText.length <= 12) {
        //do nothing
    } else {
        document.getElementsByClassName('input')[0].innerText = "Err";
        setTimeout(function () {
            reset();
        }, 200);
    }

}

function getColored(k){
    k.style.backgroundColor = "#A0D6FF";
    setTimeout(function () {
        k.style.backgroundColor = "#dddddd";
    }, 200);

   

}

function xd(){
    document.getElementsByClassName('background')[0].style.backgroundImage = 'url(unnamed.jpg)';
}

function xxd(){
    document.getElementsByClassName('background')[0].style.backgroundImage = "none";
}



//WINDOWS ALERT https://codepen.io/skazee/pen/xVvWdq
let alertTitle = "HOW TO USE CALCULATOR";
let alertButtonText = "Got It!";
let info =
    " How To Use Calculator \n\n" +

    " Addition -> + \n" +
    " Subtraction -> - \n" +
    " Division -> / \n" +
    " Multiplication  -> * \n\n" +

    " Reset  -> Space " +
    " Calculate  -> Enter " +

    " 1 -> 1 || Numpad1 \n" +
    " 2 -> 2 || Numpad2 \n" +
    " 3 -> 3 || Numpad3 \n" +
    " 4 -> 4 || Numpad4 \n" +
    " 5 -> 5 || Numpad5 \n" +
    " 6 -> 6 || Numpad6 \n" +
    " 7 -> 7 || Numpad7 \n" +
    " 8 -> 8 || Numpad8 \n" +
    " 9 -> 9 || Numpad9 \n" +
    " 0 -> 0 || Numpad0 \n\n"
    ;


if (document.getElementById) {
    window.alert = function (txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;

    if (d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if (d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
    alertObj.style.visiblity = "visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(alertTitle));

    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(alertButtonText));
    btn.href = "#";
    btn.focus();
    btn.onclick = function () { removeCustomAlert(); return false; }

    alertObj.style.display = "block";

}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}




window.addEventListener("keydown", onKeyDown, false);

function onKeyDown(event) {
    var keyCode = event.keyCode;
    switch (keyCode) {
        case 49: //1
            one();
            break;

        case 50: //2
            two();
            break;

        case 51: //3
            three();
            break;

        case 52: //4
            four();
            break;

        case 53: //5
            five();
            break;

        case 54: //6
            six();
            break;

        case 55: //7
            seven();
            break;

        case 56: //8
            eight();
            break;

        case 57: //9
            nine();
            break;

        case 48: //0
            zero();
            break;

        case 97: //1
            one();
            break;

        case 98: //2
            two();
            break;

        case 99: //3
            three();
            break;

        case 100: //4
            four();
            break;

        case 101: //5
            five();
            break;

        case 102: //6
            six();
            break;

        case 103: //7
            seven();
            break;

        case 104: //8
            eight();
            break;

        case 105: //9
            nine();
            break;

        case 96: //0
            zero();
            break;


        case 107: //+
            plus();
            break;

        case 109: //-
            minus();
            break;

        case 106: //*
            multiple();
            break;

        case 111: // /
            divide();
            break;


        case 13: //Enter
            equal();
            break;

        case 32: //AC
            reset();
            break;

    }
}




function one() {
    checkLength();
    getColored(document.getElementsByClassName('buton')[0]);
    if (ac == 1) { document.getElementsByClassName('input')[0].innerText = 1; ac = 0;
}
    else document.getElementsByClassName('input')[0].innerText += 1;

}

function two() {
    checkLength();
    getColored(document.getElementsByClassName('buton')[1]);
    if (ac == 1) { document.getElementsByClassName('input')[0].innerText = 2; ac = 0; 
}
    else document.getElementsByClassName('input')[0].innerText += 2;
}

function three() {
    checkLength();
    getColored(document.getElementsByClassName('buton')[2]);
    if (ac == 1) { document.getElementsByClassName('input')[0].innerText = 3; ac = 0; 
}
    else document.getElementsByClassName('input')[0].innerText += 3;

}

function four() {
    checkLength();
    getColored(document.getElementsByClassName('buton')[4]);
    if (ac == 1) { document.getElementsByClassName('input')[0].innerText = 4; ac = 0; 
}
    else document.getElementsByClassName('input')[0].innerText += 4;

}

function five() {
    checkLength();
    getColored(document.getElementsByClassName('buton')[5]);
    if (ac == 1) { document.getElementsByClassName('input')[0].innerText = 5; ac = 0; 
}
    else document.getElementsByClassName('input')[0].innerText += 5;

}

function six() {
    checkLength();
    getColored(document.getElementsByClassName('buton')[6]);
    if (ac == 1) { document.getElementsByClassName('input')[0].innerText = 6; ac = 0; 
}
    else document.getElementsByClassName('input')[0].innerText += 6;

}

function seven() {
    checkLength();
    getColored(document.getElementsByClassName('buton')[8]);
    if (ac == 1) { document.getElementsByClassName('input')[0].innerText = 7; ac = 0; 
}
    else document.getElementsByClassName('input')[0].innerText += 7;
}
function eight() {
    checkLength();
    getColored(document.getElementsByClassName('buton')[9]);
    if (ac == 1) { document.getElementsByClassName('input')[0].innerText = 8; ac = 0; 
}
    else document.getElementsByClassName('input')[0].innerText += 8;

}
function nine() {
    checkLength();
    getColored(document.getElementsByClassName('buton')[10]);
    if (ac == 1) { document.getElementsByClassName('input')[0].innerText = 9; ac = 0; 
}
    else document.getElementsByClassName('input')[0].innerText += 9;
}

function zero() {
    checkLength();
    getColored(document.getElementsByClassName('buton')[13]);
    if (ac == 1) { document.getElementsByClassName('input')[0].innerText = 0; ac = 0; 
    }
    else document.getElementsByClassName('input')[0].innerText += 0;

}

function plus() {

    checkLength();
    getColored(document.getElementsByClassName('buton')[12]);
    if (operation = "plus") {
        if (eq == 0) {
            k = Number(document.getElementsByClassName('input')[0].innerText);
            document.getElementsByClassName('input')[0].innerText = "";
            document.getElementsByClassName('reminder')[0].innerText = k;
            operation = "plus";
            eq++;
        } else {
            document.getElementsByClassName('reminder')[0].innerText = Number(document.getElementsByClassName('reminder')[0].innerText) + Number(document.getElementsByClassName('input')[0].innerText);
            document.getElementsByClassName("input")[0].innerText = "";
            eq++;
        }
    } else {
        document.getElementsByClassName('input')[0].innerText = "";
    }

}

function minus() {

    checkLength();
    getColored(document.getElementsByClassName('buton')[14]);
    if (eq == 0) {
        k = Number(document.getElementsByClassName('input')[0].innerText);
        document.getElementsByClassName('input')[0].innerText = "";
        document.getElementsByClassName('reminder')[0].innerText = k;
        operation = "minus";
        eq++;
    } else {
        document.getElementsByClassName('reminder')[0].innerText = Number(document.getElementsByClassName('reminder')[0].innerText) - Number(document.getElementsByClassName('input')[0].innerText);
        document.getElementsByClassName("input")[0].innerText = "";
        eq++;
    }
}

function multiple() {
    checkLength();
    getColored(document.getElementsByClassName('buton')[11]);
    if (eq == 0) {
        k = Number(document.getElementsByClassName('input')[0].innerText);
        document.getElementsByClassName('input')[0].innerText = "";
        document.getElementsByClassName('reminder')[0].innerText = k;
        operation = "multiple";
        eq++;
    } else {
        document.getElementsByClassName('reminder')[0].innerText = Number(document.getElementsByClassName('reminder')[0].innerText) * Number(document.getElementsByClassName('input')[0].innerText);
        document.getElementsByClassName("input")[0].innerText = "";
        eq++;
    }
}

function divide() {
    checkLength();
    getColored(document.getElementsByClassName('buton')[7]);
    if (eq == 0) {
        k = Number(document.getElementsByClassName('input')[0].innerText);
        document.getElementsByClassName('input')[0].innerText = "";
        document.getElementsByClassName('reminder')[0].innerText = k;
        operation = "divide";
        eq++;
    } else {
        document.getElementsByClassName('reminder')[0].innerText = Number(document.getElementsByClassName('reminder')[0].innerText) / Number(document.getElementsByClassName('input')[0].innerText);
        document.getElementsByClassName("input")[0].innerText = "";
        eq++;
    }
}

function equal() {
    let m = Number(document.getElementsByClassName('input')[0].innerText);
    getColored(document.getElementsByClassName('buton')[15]);
    switch (operation) {
        case "plus":
            if (eq <= 1) {
                document.getElementsByClassName('input')[0].innerText = k + m;
                document.getElementsByClassName('reminder')[0].innerText = "";
                operation = "";
                setDefault();
            } else {
                document.getElementsByClassName('input')[0].innerText = Number(document.getElementsByClassName('reminder')[0].innerText) + Number(document.getElementsByClassName('input')[0].innerText);
                document.getElementsByClassName('reminder')[0].innerText = "";
                setDefault();
            }
            break;

        case "minus":
            if (eq <= 1) {
                document.getElementsByClassName('input')[0].innerText = k - m;
                document.getElementsByClassName('reminder')[0].innerText = "";
                operation = "";
                setDefault();
            } else {
                document.getElementsByClassName('input')[0].innerText = Number(document.getElementsByClassName('reminder')[0].innerText) - Number(document.getElementsByClassName('input')[0].innerText);
                document.getElementsByClassName('reminder')[0].innerText = "";
                setDefault();
            }
            break;

        case "multiple":
            if (eq <= 1) {
                document.getElementsByClassName('input')[0].innerText = k * m;
                document.getElementsByClassName('reminder')[0].innerText = "";
                operation = "";
                setDefault();
            } else {
                document.getElementsByClassName('input')[0].innerText = Number(document.getElementsByClassName('reminder')[0].innerText) * Number(document.getElementsByClassName('input')[0].innerText);
                document.getElementsByClassName('reminder')[0].innerText = "";
                setDefault();
            }
            break;

        case "divide":
            if (eq <= 1) {
                document.getElementsByClassName('input')[0].innerText = k / m;
                document.getElementsByClassName('reminder')[0].innerText = "";
                operation = "";
                setDefault();
            } else {
                document.getElementsByClassName('input')[0].innerText = Number(document.getElementsByClassName('reminder')[0].innerText) / Number(document.getElementsByClassName('input')[0].innerText);
                document.getElementsByClassName('reminder')[0].innerText = "";
                setDefault();
            }
            break;

    }
}

function authorin() {
    document.getElementsByClassName('author')[0].innerText = "github.com/oguzturker8";
    document.getElementsByClassName('author')[0].style.fontWeight = 900;
    document.getElementsByClassName('author')[0].style.fontSize = "40px";
}

function authorout() {
    document.getElementsByClassName('author')[0].innerText = "Author";
    document.getElementsByClassName('author')[0].style.fontWeight = 100;
    document.getElementsByClassName('author')[0].style.fontSize = "20px";
}


