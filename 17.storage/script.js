// ///1

// let btn = document.querySelector(".btn");
// let btnDelete = document.querySelector(".btn-danger");
// let btnEmpty = document.querySelector(".btn-primary");

// btn.addEventListener("click", function () {
//   localStorage.setItem("firstName:", "Fidan");
//   localStorage.setItem("lastName:", "Asadova");
//   localStorage.setItem("age:", "21");
// });

// ///1.1

// console.log(localStorage.length);

// ///2
// for (let i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.key(i));
// }

// ///3
// for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   console.log(localStorage.getItem(key));
// }

// ///4
// console.log(localStorage.key(0));

// //4.1

// let arr = [];
// for (let i = 0; i < localStorage.length; i++) {
//   arr.push(localStorage.key(i));
// }
// console.log(arr);

// ///5
// console.log(localStorage.key(0));

// ///5.1
// let arr1 = [];
// for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   arr1.push(localStorage.getItem(key));
// }
// console.log(arr1);

// //6
// btnEmpty.addEventListener("click", function(){
//     localStorage.removeItem("firstName:", "Fidan")
// })

// //6.1
// btnDelete.addEventListener("click", function(){
//     localStorage.clear()
// })

let form = document.querySelector("form");
let inputName = document.querySelector("#firstName");
let inputEmail = document.querySelector("#exampleInputEmail1");
let inputPassword = document.querySelector("#exampleInputPassword1");
let checkBox = document.querySelector("#exampleCheck1");





let dataUsers = JSON.parse(localStorage.getItem("dataUsers")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputName.value && inputEmail.value) {
    let userData = {
      fisrtName: inputName.value,
      email: inputEmail.value,
      password: inputPassword.value,
      checkBox: checkBox.checked,
    };
    dataUsers.push(userData);
    localStorage.setItem("dataUsers", JSON.stringify(dataUsers));
  }
});

//8
console.log(Array(dataUsers));



