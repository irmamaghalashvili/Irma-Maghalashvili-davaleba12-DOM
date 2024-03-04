'use strict';

// დავალება 12 (ლექცია 18)
let newForm = document.getElementById('newForm');
let inputElement = document.getElementById('input');
let addBtn = document.getElementById('addBtn');
let ulElement = document.getElementById('ulList');
let deleteAll = document.querySelector('.fa-trash');


inputElement.addEventListener('focus', function () {
  inputElement.classList.add('input-focus');
  inputElement.style.border = '2px solid green';
});

inputElement.addEventListener('blur', function () {
  inputElement.classList.remove('input-focus');
});

newForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let value = inputElement.value;

  if (value.trim() === '') {
    return;
  }





  let li = document.createElement('li');
  li.innerText = value;
  li.classList.add('li-element');

  let deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fa-solid');
    deleteBtn.classList.add('fa-delete-left');
    deleteBtn.addEventListener('click', function () {
      li.remove();
  });

  li.appendChild(deleteBtn);
  ulElement.appendChild(li);

  inputElement.value = '';
});



deleteAll.addEventListener('click', function () {
  ulElement.innerHTML = ' ';
});