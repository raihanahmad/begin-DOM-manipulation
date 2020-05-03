// select element for work
const form = document.querySelector('form');
const input = document.getElementById('text');
const heading = document.getElementById('list-title');
const selection = document.querySelector('select');

// For clear the input value 
input.value = '';

// submit event
form.addEventListener('submit', runEvent);
// keydown event
form.addEventListener('keydown', runEvent);
// keyup event
form.addEventListener('keyup', runEvent);
// key press
form.addEventListener('keypress', runEvent);
// focus
input.addEventListener('focus', runEvent);
// blur
input.addEventListener('blur', runEvent);
paste
input.addEventListener('paste', runEvent);
// copy
input.addEventListener('copy', runEvent);
// cut
input.addEventListener('cut', runEvent);
// input
input.addEventListener('input', runEvent);
change
selection.addEventListener('change', runEvent);


// runEvent function
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // live showing
  heading.textContent = e.target.value;

  // live showing
  console.log(e.target.value);

  // for input value
  console.log(input.value);

  // for stop default 
  e.preventDefault();
}