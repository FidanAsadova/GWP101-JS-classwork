// function allData() {
//   console.log(
//     fetch("https://jsonplaceholder.typicode.com/todos/")
//       .then((response) => response.json())
//       .then((json) => console.log(json))
//   );
// }
// allData();

// function dataFalse() {
//   fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then((response) => response.json())
//     .then((data) => {
//       let dataFilterFalse = data.filter((el) => !el.completed);
//       console.log(dataFilterFalse);
//     });
// }
// dataFalse();

// function dataTrue() {
//   fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then((response) => response.json())
//     .then((data) => {
//       let dataFilterTrue = data.filter((el) => el.completed);
//       console.log(dataFilterTrue);
//     });
// }
// dataTrue();

// function dataUser() {
//   fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then((response) => response.json())
//     .then((data) => {
//       let dataFilterUser = data.filter((el) => el.userId === 2);
//       console.log(dataFilterUser);
//     });
// }
// dataUser

import { URL } from "./app.js";

let tBody = document.querySelector("tbody");

function drawTable() {
  fetch(`${URL}`)
    .then((response) => response.json())
    .then((users) => {
      tBody.innerHTML = "";
      users.forEach((element) => {
        let trElem = document.createElement("tr");
        trElem.innerHTML = `
                      <td>${element.id}</td>
                      <td>${element.companyName}</td>
                      <td>${element.address?.city}</td>
                      <td>${element.address?.country}</td>
                      <td>${element.address?.phone}</td>
                      <td><button class="btn btn-danger id="${element.id}">Delete</button></td>
                      `;
        tBody.append(trElem);
      });
    });
}

drawTable();
let deleteBtn = document.querySelector("btn");


// function deleteCustomer() {
//   fetch(`${URL}`, {
//     method: "DELETE",
//   });
// }

function deleteCustomer(id) {
  console.log(id);
  fetch(`${URL}/${id}`, {
    method: "DELETE",
  }).then(() => {
    drawTable();
  });
}
deleteCustomer();

deleteBtn.addEventListener("click", function () {
    deleteCustomer()
});

