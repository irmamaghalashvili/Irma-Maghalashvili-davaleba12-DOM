"use strict";

// დავალება 12 (ლექცია 18)
let newForm = document.getElementById("newForm");
let inputElement = document.getElementById("input");
let addBtn = document.getElementById("addBtn");
let ulElement = document.getElementById("ulList");
let deleteAll = document.querySelector(".fa-trash");

inputElement.addEventListener("focus", function () {
  inputElement.classList.add("input-focus");
  inputElement.style.border = "2px solid green";
});

inputElement.addEventListener("blur", function () {
  inputElement.classList.remove("input-focus");
});

newForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let value = inputElement.value;

  if (value.trim() === "") {
    return;
  }

  let li = document.createElement("li");
  li.innerText = value;
  li.classList.add("li-element");

  let deleteBtn = document.createElement("i");
  deleteBtn.classList.add("fa-solid");
  deleteBtn.classList.add("fa-delete-left");
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  ulElement.appendChild(li);

  inputElement.value = "";
});

deleteAll.addEventListener("click", function () {
  ulElement.innerHTML = " ";
});

// burger bar

let navigation = document.getElementById("navigation");
let burger = document.getElementById("burger");

burger.addEventListener("click", function () {
  navigation.classList.toggle("active-nav");
  burger.classList.toggle("active-bar");
});

// fetch

let album = document.getElementById("album");

fetch("https://jsonplaceholder.typicode.com/photos", {
  method: "GET",
})
  .then(function (resp) {
    if (resp.status !== 200) {
      throw new Error();
    }
    return resp.json();
  })
  .then(function (respData) {
    let div = document.createElement("div");
    div.classList.add("img-div");
    for (let i = 0; i < 10; i++) {
      let element = respData[i];

      let img = document.createElement("img");
      img.src = element.url;
      img.setAttribute("alt", "image");
      img.classList.add("img-box");
      let p = document.createElement("p");
      p.classList.add('album-p');
      p.innerText = element.title;
      
      p.appendChild(img);
      
      div.appendChild(p);
    }
    album.appendChild(div);
  })
  .catch(function (error) {
    alert(error);
  });

  // users

  let users = document.getElementById('users');
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
  })
  .then(function(responce) {
    if (!responce.ok) {
      throw new Error();
    }
    return responce.json();
  })
  .then(function(responceData) {
    let userDiv = document.createElement('div');
    userDiv.classList.add('users-div');
    responceData.forEach((el) => {
      let par = document.createElement('p');
      par.innerText = `${'Name:'}  ${el.name}`;
      // par.innerText = 'Name:'+ el.name;
      par.classList.add('user-p');
      userDiv.appendChild(par);
      let adress = document.createElement('p');
      adress.innerText = `${'Email:'} ${el.email}`;
      par.appendChild(adress);

    });
    users.appendChild(userDiv);
  })
  .catch(function(err) {
    alert(err);
  });