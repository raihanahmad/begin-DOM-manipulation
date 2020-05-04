// // set data in local storage
// localStorage.setItem('name', 'Raihan');
// localStorage.setItem('age', '19');

// // set data in session storage
// sessionStorage.setItem('name', 'Nasim');

// // remove from local storage
// localStorage.removeItem('name');

// // get a data form local storage
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');

// // everything clear form local storage
// localStorage.clear();

// console.log(name, age);

// add somthing when clicked
document.querySelector('form').addEventListener('submit', function (e) {
  const text = document.getElementById('text').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(text);

  window.alert('Task Saved');
  localStorage.setItem('tasks', JSON.stringify(tasks));

  console.log(text);

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function (task) {
  console.log(task);
});