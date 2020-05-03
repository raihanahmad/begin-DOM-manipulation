// create element from dom
const li = document.createElement('li');

// add class
li.className = 'item';

// add id
li.id = 'new-item';

// add atribute
li.setAttribute('name', 'dom-item');

// add or create content text content and append it
li.appendChild(document.createTextNode('New Item'));
// li.textContent = 'another';

// create another element (a)
const link = document.createElement('a');

// add class
link.className = 'delete-a';

// create and append a element
link.appendChild(document.createTextNode('x'));

// put a in li
li.appendChild(link);

// put this created element in ul
document.querySelector('ul#main-list').appendChild(li);

console.log(li);
console.log(link);