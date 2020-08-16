// Задание 1

var x = 0;

while (x < 100) {
    x++;
    if (x == 1) continue;
    if (x == 2 || x == 3 || x == 5 || x == 7) console.log(x);
    if (x % 2 == 0) continue;
    if (x % 3 == 0) continue;
    if (x % 5 == 0) continue;
    if (x % 7 == 0) continue;
    console.log(x);
}

// Задание 5

var x = "x";

for (var i = 0; i <= 20; i++) {
    console.log(x)
    x += "x";
}

// Задание 4

for (i = 0; i <= 9; console.log(i++)) { }

// Задача 2 и 3

var arr = [
    {
        title: "Товар1",
        price: 100,
        total: 2
    },
    {
        title: "Товар2",
        price: 100,
        total: 1
    },
    {
        title: "Товар3",
        price: 100,
        total: 4
    }
]

function countBasketPrice() {
    var x = 0;
    for (var sum of arr) {
        x += (sum.price * sum.total);
    }
    console.log(x);
}

countBasketPrice();