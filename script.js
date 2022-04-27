let temp='';

document.getElementById("1").addEventListener("click", () => {
    temp += '1';
    document.getElementById("screen").innerHTML = temp;
});

document.getElementById("2").addEventListener("click", () => {
    temp += '2';
    document.getElementById("screen").innerHTML = temp;
});

document.getElementById("3").addEventListener("click", () => {
    temp += '3';
    document.getElementById("screen").innerHTML = temp;
});

document.getElementById("4").addEventListener("click", () => {
    temp += '4';
    document.getElementById("screen").innerHTML = temp;
});

document.getElementById("5").addEventListener("click", () => {
    temp += '5';
    document.getElementById("screen").innerHTML = temp;
});

document.getElementById("6").addEventListener("click", () => {
    temp += '6';
    document.getElementById("screen").innerHTML = temp;
});

document.getElementById("7").addEventListener("click", () => {
    temp += '7';
    document.getElementById("screen").innerHTML = temp;
});

document.getElementById("8").addEventListener("click", () => {
    temp += '8';
    document.getElementById("screen").innerHTML = temp;
});

document.getElementById("9").addEventListener("click", () => {
    temp += '9';
    document.getElementById("screen").innerHTML = temp;
});

document.getElementById("plus").addEventListener("click", () => {
    temp += '+';
    document.getElementById("screen").innerHTML = temp;
});

document.getElementById("minus").addEventListener("click", () => {
    temp += '-';
    document.getElementById("screen").innerHTML = temp;
});

document.getElementById("equal").addEventListener("click", () => {
    let result = eval(temp);
    document.getElementById("screen").innerHTML = result;
    temp = result.toString();
});


