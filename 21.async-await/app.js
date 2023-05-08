const boxes = document.querySelector("#boxes");
const addUserBtn = document.querySelector("#addUser");

// const addBtn = document.querySelector("#addBtn");
// const userName = document.querySelector("#userName");
// const userEmail = document.querySelector("#userEmail");
// const form = document.querySelector("form");

async function drawBoxes() {
  const res = await fetch("http://localhost:8080/users");
  const data = await res.json();
  data.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("box", "col-5", "rounded", "p-4");
    box.innerHTML = `
        <div class = "d-flex justify-content-between">
      <div>
        <h4>${item.username}</h4>
        <p>${item.email}</p>
      </div>
      <div class="gap-3 d-flex align-items-center">
      <a href=""><i class="fa-solid fa-pen editBtn" onclick= editBox("${item.id}") style="color: darkgreen"></i></a>
      <a href=""><i class="fa-solid fa-trash-can" onclick= deleteBox("${item.id}") style="color: darkred"></i></a>
      </div>
    </div>
        `;
    boxes.append(box);
  });
}
drawBoxes();

addUserBtn.addEventListener("click", function () {
  window.location.assign("http://127.0.0.1:5500/21.async-await/addUsers.html");
});

const deleteBox = async (id) => {
  await fetch(`http://localhost:8080/users/${id}`, {
    method: "DELETE",
  });
  drawBoxes();
};
// deleteBox();



// const editBtn = document.querySelector(".editBtn");

// editBtn.addEventListener("click", function () {
//   window.location.assign("http://127.0.0.1:5500/21.async-await/editUsers.html");
// });

// const editBox = async (id) => {
//   await fetch(`http://localhost:8080/users/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username: userName.value,
//       email: userEmail.value,
//     }),
//   });
//   drawBoxes();
// };
