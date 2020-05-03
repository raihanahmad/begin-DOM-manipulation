// Select Element for Mouse Event
const removeBtn = document.querySelector('.remove-task');
const section = document.querySelector('#container');
const heading = document.querySelector('#list-title');

// // Click Event
// removeBtn.addEventListener('click', mouseEvent);
// // double click event
// removeBtn.addEventListener('dblclick', mouseEvent);
// // mouse down
// removeBtn.addEventListener('mousedown', mouseEvent);
// // mouse up
// removeBtn.addEventListener('mouseup', mouseEvent);
// // mouse enter
// section.addEventListener('mouseenter', mouseEvent);
// // mouse leave
// section.addEventListener('mouseleave', mouseEvent);
// // mouse over
// section.addEventListener('mouseover', mouseEvent);
// // mouse out
// section.addEventListener('mouseout', mouseEvent);
// mouse move
section.addEventListener('mousemove', mouseEvent);

// Function Setup
function mouseEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.background = `rgb(${e.offsetX},${e.offsetY}, 84)`
}