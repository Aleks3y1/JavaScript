// Задание 1

var x = prompt("Введите число в градусах цельсия, которое хотите перевести в фаренгейты:", '');
var tf = (9 / 5) * parseInt(x) + 32;

alert("По фаренгейту: " + tf + " градусов");

// Задание 2

var name = "Василий";
var admin = name;

alert(admin);

// Задание 4 -  1000108 - будет результат. Т.к. при конкатенации если есть строчное значение, то итоговое значение будет строчным.

/* Задание 5 - defer - Позволяет загружать скрипт в фоновом режиме(одновременно со страницей), но запустит скрипт только после того,
как загрузится страница. Сохраняет порядок скриптов, не зависимо от скорости загрузки. И по сути не важно, где будет расположен скрипт,
в шапке или в конце страницы.

async - Загружает скрипт не зависимо от страницы и порядка скрипта. Скрипт загрузится  и исполнится сразу же после загрузки.
Чаще используют, для счетчиков, рекламы и т.д.*/

// Задание 6

var a = 10;
var b = 15;
b = a + b;
a = b - a;
b = b - a;

alert("a = " + a + " b = " + b);