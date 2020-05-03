// REPLECING ELEMENTS
const newTitle = document.createElement("h2");

// add id
newTitle.id = "list-title";

// add node text
newTitle.appendChild(document.createTextNode("It is a new title of the list"));

// select old title
const oldTitle = document.getElementById("list-title");

// select parent
const parent = document.querySelector("#container");

// replece
parent.replaceChild(newTitle, oldTitle);

// REMOVE ELEMENT
const lis = document.querySelectorAll(".item");
const ulList = document.querySelector("#main-list");

// remove
lis[0].remove();
ulList.removeChild(lis[8]);
lis[9].remove();

// console.log(lis);

// Deal with children
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Class manipulation
val = link;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('new-class');
link.classList.remove('new-class');
val = link.classList.length;

// Atribute manipulation
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
val = link.removeAttribute('href');

console.log(link);