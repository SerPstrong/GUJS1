"use strict"

var content2 = document.getElementById("div2");//берем элемент
content2.innerHTML = "Совершенно новая информация";//меняем элемент

var div = document.createElement("div");//создаем тег
div.className = "my_div";//создаем класс
div.innerHTML = "<h3>Заголовок</h3><p>Содержимое</p>";
content2.appendChild(div);

var list = document.getElementById("list");
var newLi = document.createElement("li");
newLi.innerHTML = "Привет, мир!";
list.appendChild(newLi);

var newLi2 = document.createElement("li");
newLi2.innerHTML = "Привет, мир!";
list.insertBefore(newLi2, list.children[1]);

list.removeChild(newLi2); // удаляет newLi2 из списка детей list

var elem = document.createElement("li");//создаем тег
var newElem = document.createElement("li");//создаем тег
elem.innerHTML = "elem !!!!!!!";
newElem.innerHTML = "newElem !!!!!!!";
list.appendChild(elem);
list.replaceChild(newElem, elem) // среди детей parentElem удаляет elem и вставляет на его место newElem.

content2.setAttribute("title", "My title"); //Добавление атрибутов

content2.style.color = "blue";

var class_value = content2.getAttribute("class");

//---------------------------------------------------------------
var elem111 = document.querySelector("#clock")
// Выведем классы
console.log(elem111.classList); // DOMTokenList ["example", "for", "you"]
// Добавим классы
elem111.classList.add("ok", "understand");
console.log(elem111.classList);                              // DOMTokenList ["example", "for", "you", "ok", "understand"]
// Переключим классы
elem111.classList.toggle("you");
elem111.classList.toggle("he");
console.log(elem111.classList);                              // DOMTokenList ["example", "for", "ok", "understand", "he"]
// Проверим класс
console.log(elem111.classList.contains("example")); // true
console.log(elem111.classList.contains("lol"));           // false
// И удалим классы
elem111.classList.remove("example", "for", "understand", "he");
console.log(elem111.classList);                               // DOMTokenList ["ok"]