let form = document.querySelector("#form");
let h1 = document.querySelector("#h1");
let Name = document.querySelector("#name");
let Surname = document.querySelector("#surname");
let Email = document.querySelector("#email");
let Password = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let checked = document.querySelector("#word-checked");
let allRadio = document.querySelector("#allRadio");
let submitB = document.querySelector("#submitBtn");
let radio = document.querySelectorAll("input[name='radio']");

Name.addEventListener("focus", function () {
  this.style.backgroundColor = "grey";
  this.style.color = "white";
  if (Name.value && Surname.value && checkbox.checked) {
    submitB.removeAttribute("disabled");
  } else {
    submitB.disabled = true;
  }
});

Surname.addEventListener("mouseover", function () {
  this.style.backgroundColor = "green";
  if (Name.value && Surname.value && checkbox.checked) {
    submitB.removeAttribute("disabled");
  } else {
    submitB.disabled = true;
  }
});
Surname.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
});
Email.addEventListener("contextmenu", function () {
  this.style.backgroundColor = "red";
});
Email.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
});

Password.addEventListener("focus", function () {
  Password.value = "fidan08";
});
Password.addEventListener("blur", function () {
  Password.value = "";
});
checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    checked.style.visibility = "visible";
  } else {
    checked.style.visibility = "hidden";
  }
  if (Name.value && Surname.value && checkbox.checked) {
    submitB.removeAttribute("disabled");
  } else {
    submitB.disabled = true;
  }
});
submitB.disabled = true;

// radio.addEventListener("click", function () {
//     alert("Finished");
//   });
radio.forEach((a) =>
  a.addEventListener("click", function () {
    alert("Finished");
  })
);
