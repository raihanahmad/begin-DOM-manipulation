// // EVENT OBJECT - CLICK EVENT
// document.querySelector('.remove-task').addEventListener('click', function (e) {
//   console.log('Hello World');

//   e.preventDefault();
// });

document.querySelector(".remove-task").addEventListener("click", oneClick);

function oneClick(e) {
  console.log("Clecked");
  e.preventDefault();
  let val;

  val = e;

  val = e.target;
  val = e.target.className;
  val = e.target.classList;
  val = e.target.id;

  e.target.innerText = "Clear";

  val = e.clientX;
  val = e.clientY;

  val = e.type;

  val = e.offsetX;
  val = e.offsetY;

  console.log(val);
}
