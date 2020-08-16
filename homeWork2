// Задание 1.
/*
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2  Префиксная форма инкремента, возвращает новое значение. a = 2
d = b++; alert(d);           // 1 Постфиксная форма инкремента, возвращает старое значение 1
c = (2 + ++a); alert(c);      // 5 префиксная форма инкремента, в прошлый раз мы увеличили а на 1., то а = 3
d = (2 + b++); alert(d);      // 4 постфиксная форма инкремента, т.к. в прошлый раз мы увеличили b на 1., то b = 2
alert(a);                    // 3 Т.к. мы 2 раза увеличили а на 1
alert(b);                    // 3 Т.к. мы 2 раза увеличили b на 1
*/

/* Задание 2

var a = 2;
var x = 1 + (a * 2);
x = 5;

*/

// Задание 3

var a = 5;
var b = 6;

if (a < 0 && b < 0) {
    console.log(a * b);
}
else if (a >= 0 && b >= 0) {
    console.log(a - b);
}
else {
    console.log(a + b);
}

// Задание 4

var c = Math.round(Math.random() * 15);

switch (c) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
        break;
    default:
        console.log("Ошибка.");
}

// Задание 5

function addition(x, y) {
    return x + y;
}
function subtraction(x, y) {
    return x - y;
}
function multiplication(x, y) {
    return x * y;
}
function division(x, y) {
    return x / y;
}

// Задание 6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            console.log(addition(arg1, arg2));
            break;
        case "-":
            console.log(subtraction(arg1, arg2));
            break;
        case "*":
            console.log(multiplication(arg1, arg2));
            break;
        case "/":
            console.log(division(arg1, arg2));
            break;
        default:
            console.log("Ошибка.");
    }
}
mathOperation(2, 3, "*");

// Задание 7. null == 0 - false. Прочитав статью, понял, что Оператор == использует 
// так называемый абстрактный алгоритм сравнения для равенств. Исходя из спецификации, получается false.