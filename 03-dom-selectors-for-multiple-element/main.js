// document.getElementsByClassName
// it is global selector (It select all of tag that has same class)
const collection = document.getElementsByClassName('item');

collection[1].style.color = 'red';
collection[0].textContent = 'Satrt List Item'

console.log(collection);
console.log(collection[0]);

// More specifice with quary selectors
let serial = document.querySelector('#secondary-list').getElementsByClassName('item');


serial[0].style.color = '#494999';
serial[5].textContent = 'Hellow World';

console.log(serial);

// getElementByTageName
let lis = document.getElementsByTagName('li');

// html tage convet to an array
lis = Array.from(lis);

lis.reverse();

console.log(lis);

lis.forEach(function (li, index) {
  console.log(li.className);
  li.textContent = `${index} : Hello`;
})

// Quearyall
let volt = document.querySelectorAll('ul li.item');

volt.forEach(function (item) {
  item.textContent = `1: hello`
})

let voltOdd = document.querySelectorAll('li:nth-child(odd)');
let voltEven = document.querySelectorAll('li:nth-child(even)');

voltOdd.forEach(function (item) {
  item.style.background = '#9a9a9a';
})

voltEven.forEach(function (item) {
  item.style.background = '#ccc';
})

for (let i = 0; i < voltEven.length; i++) {
  voltEven[i].style.background = '#ccc';
}

console.log(voltOdd);