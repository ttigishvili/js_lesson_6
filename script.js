let burgerButton = document.getElementById("toggleButton");
let navBar = document.getElementById("navigation-ul");

burgerButton.addEventListener("click", function () {
  navBar.classList.toggle("toggle");
  burgerButton.classList.toggle("active");
});



let link = document.querySelector(".link");

link.addEventListener("click", function (x) {
  x.preventDefault();
  console.log("hello");
});






// new js

let inputWraper = document.querySelector('.input-form');
let addButton = document.querySelector('.button');
let ul = document.querySelector('.ul-list');
let clearAll = document.querySelector('.clearlist');
let formWrapper = document.querySelector('.form-wraper');


formWrapper.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let value = inputWraper.value;
    if (value == ' ') {
        alert('text is required');
        return;
    }

    
    let li = document.createElement('li');

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    })

    li.textContent = value;

    li.appendChild(deleteBtn);
    ul.appendChild(li);
   
    inputWraper.value = ' ';
})

clearAll.addEventListener('click', function() {
    ul.innerHTML = ' ';
})

