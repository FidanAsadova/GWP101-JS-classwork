let boxes = document.querySelector(".boxes");

let dataUsers = JSON.parse(localStorage.getItem("dataUsers")) || [];

// dataUsers.forEach((user) => {
//   let col = document.createElement("div");
//   boxes.append(col);
//   col.innerHTML = `
//   <div class= "box border p-3 m-3">
//   <h1 class="text-center">${user.userName}</h1>
//   <p>name: ${user.userName}</p>
//   <p>email: ${user.email}</p>
//   <button class="btn btn-danger">Delete</button>
//   </div>`;
// });
console.log(dataUsers);

function list() {
  boxes.innerHTML = "";
  dataUsers.forEach((user) => {
    let col = document.createElement("div");
    const button = document.createElement("button");
    col.innerHTML += `
    <div class= "box border p-3 m-3">
    <h1 class="text-center">${user.userName}</h1>
    <p>name: ${user.userName}</p>
    <p>email: ${user.email}</p>
    </div>`;
    boxes.append(col);
    col.append(button);
    button.innerHTML = "Delete";
    button.style.backgroundColor="red"
    button.addEventListener("click", () => {
      removeUser(user.id);
    });
  });
}
list();

function removeUser(id) {
  dataUsers = dataUsers.filter((el) => el.id !== id);
  localStorage.setItem("dataUsers", JSON.stringify(dataUsers));
  list();
}
