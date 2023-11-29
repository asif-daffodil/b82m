var msg = document.getElementById("msg");
var yname = document.getElementById("yname");

msg.innerHTML = "So Beautiful!";

function soBeautiful () {
    msg.innerHTML = "So Beautiful!";
}

function soElegant () {
    msg.innerHTML = "So Elegant!";
}

function jllw () {
    msg.innerHTML = "Just looking like a wow!";
}

function changeColorRed () {
    msg.style.color = "red";
}

function changeColorBlue () {
    msg.style.color = "blue";
}

function showName () {
    var name = yname.value;
    alert(name);
}
