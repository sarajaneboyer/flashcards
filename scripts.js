
q1 = document.getElementById('q1');
a1 = document.getElementById('a1');

showButton1 = document.getElementById('show-button1');
showButton1.addEventListener('click', () => {
  a1.classList.remove("hide");
});

hideButton1 = document.getElementById('hide-button1');
hideButton1.addEventListener('click', () => {
  a1.classList.add("hide")
})

showButton2 = document.getElementById('show-button2');
showButton2.addEventListener('click', () => {
  a2.classList.remove("hide");
});

hideButton2 = document.getElementById('hide-button2');
hideButton2.addEventListener('click', () => {
  a1.classList.add("hide")
})

showButton3 = document.getElementById('show-button3');
showButton3.addEventListener('click', () => {
  a3.classList.remove("hide");
});

hideButton1 = document.getElementById('hide-button3');
hideButton1.addEventListener('click', () => {
  a3.classList.add("hide")
})




// var z = a1.className
// if (a1.className = 'hide') {
//   a1.classList.remove('hide')
// }
// else { a1.classList.add('hide')}

// flipButton1 = document.getElementById('flip-button1');
// flipButton1.addEventListener("click", () => {
//   a1.classList.remove("hide");
//   q1.classList.add("hide"); 
// })

flipButton2 = document.getElementById('flip-button2');
flipButton2.addEventListener("click", () => {
  a2.classList.remove("hide");
  q2.classList.add("hide"); 
})

flipButton3 = document.getElementById('flip-button3');
flipButton3.addEventListener("click", () => {
  a3.classList.remove("hide");
  q3.classList.add("hide"); 
})

previousCardButton = document.getElementById('previous-button');
previousCardButton.addEventListener("click", {
  //whatever happens when we click previous card
})

nextCardButton = document.getElementById('next-button');
nextCardButton.addEventListener("click", {
  //whatever happens when we click next card
})

editCardButton = document.getElementById('edit-button');
editCardButton.addEventListener("click", {
  // whatever happens when you edit the card
})

deleteCardButton = document.getElementById('delete-button');
deleteCardButton.addEventListener("click", {
//   // delete the card
})





