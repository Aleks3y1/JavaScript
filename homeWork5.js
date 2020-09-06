function table() {
    for (x = 0; x < 8; x++) {
        var newTr = document.createElement("tr");
        newTr.className = "chessLine" + x;
        document.querySelector("table").append(newTr);
        for (y = 0; y < 8; y++) {
            var newTd = document.createElement("td");
            newTd.className = "chessElem" + x + y;
            newTr.append(newTd);
        }
    }
}

table();

document.querySelector(".chessElem00").innerHTML = "&#9820;";
document.querySelector(".chessElem01").innerHTML = "&#9822;";
document.querySelector(".chessElem02").innerHTML = "&#9821;";
document.querySelector(".chessElem03").innerHTML = "&#9819;";
document.querySelector(".chessElem04").innerHTML = "&#9818;";
document.querySelector(".chessElem05").innerHTML = "&#9821;";
document.querySelector(".chessElem06").innerHTML = "&#9822;";
document.querySelector(".chessElem07").innerHTML = "&#9820;";

document.querySelector(".chessElem10").innerHTML = "&#9823;";
document.querySelector(".chessElem11").innerHTML = "&#9823;";
document.querySelector(".chessElem12").innerHTML = "&#9823;";
document.querySelector(".chessElem13").innerHTML = "&#9823;";
document.querySelector(".chessElem14").innerHTML = "&#9823;";
document.querySelector(".chessElem15").innerHTML = "&#9823;";
document.querySelector(".chessElem16").innerHTML = "&#9823;";
document.querySelector(".chessElem17").innerHTML = "&#9823;";

document.querySelector(".chessElem60").innerHTML = "&#9817;";
document.querySelector(".chessElem61").innerHTML = "&#9817;";
document.querySelector(".chessElem62").innerHTML = "&#9817;";
document.querySelector(".chessElem63").innerHTML = "&#9817;";
document.querySelector(".chessElem64").innerHTML = "&#9817;";
document.querySelector(".chessElem65").innerHTML = "&#9817;";
document.querySelector(".chessElem66").innerHTML = "&#9817;";
document.querySelector(".chessElem67").innerHTML = "&#9817;";

document.querySelector(".chessElem70").innerHTML = "&#9814;";
document.querySelector(".chessElem71").innerHTML = "&#9816;";
document.querySelector(".chessElem72").innerHTML = "&#9815;";
document.querySelector(".chessElem73").innerHTML = "&#9813;";
document.querySelector(".chessElem74").innerHTML = "&#9812;";
document.querySelector(".chessElem75").innerHTML = "&#9815;";
document.querySelector(".chessElem76").innerHTML = "&#9816;";
document.querySelector(".chessElem77").innerHTML = "&#9814;";
//