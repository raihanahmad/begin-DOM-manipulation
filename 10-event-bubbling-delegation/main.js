// // BUBBLING EVENTING
// document.querySelector("#submit").addEventListener("click", function (e) {
//   console.log("This is submit button");
//   e.preventDefault();
// });
// document.querySelector("form").addEventListener("click", function () {
//   console.log("This is form");
// });
// document.querySelector("#container").addEventListener("click", function () {
//   console.log("This is section");
// });

// // DELEGATION
// const remove = document.querySelector(".delete-a");
// remove.addEventListener("click", runEvent);

// selection parent element
document.body.addEventListener("click", runEvent);

// runEvent function
function runEvent(e) {
  // if (e.target.parentElement.className === "item") {
  //   console.log("Delete Item");
  // }

  if (e.target.parentElement.classList.contains("item")) {
    console.log("Delete Item");
    e.target.parentElement.remove();
  }
}
