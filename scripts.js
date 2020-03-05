
q1 = document.getElementById('q1');
a1 = document.getElementById('a1');


flipButton1 = document.getElementById('flip-button1');
flipButton1.addEventListener("click", () => {
  a1.classList.remove("hide");
  q1.classList.add("hide"); 
})

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





