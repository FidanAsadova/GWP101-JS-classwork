const addBtn = document.querySelector("#addBtn");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const form = document.querySelector("form");

// addBtn.disabled = true;

const addBox = async (id) => {
  await fetch(`http://localhost:8080/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userName.value,
      email: userEmail.value,
    }),
  });
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addBox();
});

addBtn.addEventListener("click", function () {
  window.location.assign("http://127.0.0.1:5500/21.async-await/index.html");
});

// window.location.assign("http://127.0.0.1:5500/21.async-await/index.html");
