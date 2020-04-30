// ELEMENT SELECTOR WITH (document.getElementById)
console.log(document.getElementById('title'));

// get things from element
console.log(document.getElementById('title').id);
console.log(document.getElementById('title').className);

let title = document.getElementById('title');

// styleing from (document.getElementById)
title.style.background = '#333';
title.style.color = '#f4f4f4';
title.style.padding = '6px';

// change content from (document.getElementById)
title.textContent = 'If You Contact Us. Fill Out';
title.innerText = "You may fill out the form";
title.innerHTML = '<span>This Is Form Title</span>'
console.clear();

// document.quareySelectiors()
console.log(document.querySelector('#title'));
console.log(document.querySelector('label'));

// style with document.quareySelectiors()
document.querySelector('button').style.background = '#055';
document.querySelector('button:last-child').style.background = '#085';
document.querySelector('.form-title').style.color = 'yellow';