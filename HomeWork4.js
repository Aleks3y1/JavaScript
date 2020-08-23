//Задание 1!
var x = {};
function f(x) {
    var y = prompt("Введите числа от 0 до 999");
    if (y >= 0 && y <= 999) {
        x = y.split('');
        if (x.length == 3) {
            console.log("единицы: " + x[2] + ", десятки:" + x[1] + ", сотни: " + x[0]);
        }
        else if (x.length == 2) {
            console.log("единицы: " + x[1] + ", десятки:" + x[0]);
        }
        else (console.log("единицы: " + x[0]))
    }
    else {
        console.log("Число превышает заданный интервал. x = " + x);
    }
}

f(x);