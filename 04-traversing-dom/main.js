// TRAVERSING THE DOM
let val;

const list = document.querySelector('ul#main-list');
const listItem = document.querySelector('li.item:first-child');

val = list;
val = listItem;

// get childnodes form parents
val = list.childNodes;
val = list.childNodes[1];
val = list.childNodes.length;
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeType;

// get just children form parents
val = list.children;
val = list.children[1];
val.style.color = 'red';
list.children[3].textContent = 'Hello';
val = list.children[4].children;

// children element count
val = list.childElementCount;
val = list.children.length;

// get first child
val = list.firstChild;
val = list.firstElementChild;

// get last child
val = list.lastChild;
val = list.lastElementChild;

// get parents node
val = listItem.parentNode;
val = listItem.parentNode.parentNode;

// get just parents element
val = listItem.parentElement;
val = listItem.parentElement.parentElement;
val = listItem.parentElement.parentElement.parentElement;
val = listItem.parentElement.parentElement.parentElement.parentElement;

// get next and prev sibling with node
val = listItem.nextSibling;
val = listItem.previousSibling;

// get next and prev sibling element
val = listItem.nextElementSibling;
val = listItem.previousElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.previousElementSibling;

val.textContent = 'This is very very very helpful'
val.style.background = 'red';
val.style.color = 'white';

console.log(val);