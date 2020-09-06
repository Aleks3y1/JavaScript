let oneX = document.querySelector('.one');
let twoX = document.querySelector('.two');
let threeX = document.querySelector('.three');

function f() {
    document.querySelector('.big').style.backgroundImage = "url('img/big/brit.jpg')";
}
function x() {
    document.querySelector('.big').style.backgroundImage = "url('img/big/noname.jpg')";
}
function z() {
    document.querySelector('.big').style.backgroundImage = "url('img/big/white.jpg')";
}

oneX.onclick = f;
twoX.onclick = x;
threeX.onclick = z;

// Можно сделать решение, через массив. 3 Здадание, так же через массив. Решить позже.