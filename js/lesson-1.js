/*Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32,
    где Tf — температура по Фаренгейту, Tc — по Цельсию.*/

var Tc = +prompt("Введите температуру по цельсию ");
var a = Tf();

function Tf() {
    return (9 / 5) * Tc + 32;
}

alert(a);

/*Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывестись «Василий»).*/

var admin;
var name = "Василий";
admin = name;

document.write(admin);

/** Чему будет равно JS-выражение 1000 + "108"?
 *
 * 1000108
 *
 * */