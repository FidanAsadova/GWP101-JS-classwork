const addBtn = document.querySelector("#addBtn");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const form = document.querySelector("form");

const addBox = async () => {
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
  if (userName.value && userEmail.value) {
    addBox();
    window.location = "http://127.0.0.1:5500/index.html";
  } else {
    alert("Please fill in this form");
  }
});



