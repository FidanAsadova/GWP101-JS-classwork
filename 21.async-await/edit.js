const addBtn = document.querySelector("#addBtn");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const form = document.querySelector("form");

// const editBox = async (id) => {
//     await fetch(`http://localhost:8080/users/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: userName.value,
//         email: userEmail.value,
//       }),
//     });
//     drawBoxes();
//     window.location = "http://127.0.0.1:5500/21.async-await/editUsers.html";
//   };
//   editBox();