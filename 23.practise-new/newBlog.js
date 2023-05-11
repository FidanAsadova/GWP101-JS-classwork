const form = document.querySelector("form");
const titleInput = document.querySelector("#titleInput");
const bodyInput = document.querySelector("#bodyInput");
const select = document.querySelector("#select");
const addBtn = document.querySelector(".addBtn");
let authors;

select.addEventListener("change", function (e) {
  authors = e.target.value;
});

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    title: titleInput.value,
    body: bodyInput.value,
    author: authors || "Lorem",
  };
  await axios.post(`http://localhost:8080/blogs/`, obj);
  window.location = "index.html";
});
