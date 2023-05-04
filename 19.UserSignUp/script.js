let form = document.querySelector("form");
let inputName = document.querySelector("#userName");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let checkBox = document.querySelector("#checkBox");
let submitBtn = document.querySelector("#submit");
let allInput = document.querySelectorAll(".all-input");

let dataUsers = JSON.parse(localStorage.getItem("dataUsers")) || [];

submitBtn.disabled = true;

checkBox.addEventListener("click", function () {
  allInput.forEach((element) => {
    if (element.value) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  });
});

form.addEventListener("submit", function () {
  if (
    inputName.value &&
    inputEmail.value &&
    inputPassword.value &&
    checkBox.checked
  ) {
    let userData = {
      userName: inputName.value,
      email: inputEmail.value,
      password: inputPassword.value,
      id: Date.now(),
      checkBox: checkBox.checked,
    };

    dataUsers.push(userData);
    localStorage.setItem("dataUsers", JSON.stringify(dataUsers));
  }
});
