let id = new URLSearchParams(window.location.search).get("id");
let allCard = document.querySelector(".allCards");
const form = document.querySelector("form");
const titleInput = document.querySelector("#titleInput");
const bodyInput = document.querySelector("#bodyInput");
const select = document.querySelector("#select");
const editBtn = document.querySelector(".editBtn");

select.addEventListener("change", function (e) {
  authors = e.target.value;
});

axios(`http://localhost:8080/blogs/${id}`).then((res) => {
  titleInput.value = res.data.title;
  bodyInput.value = res.data.body;
  select.value = res.data.author;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    let obj = {
      title: titleInput.value,
      body: bodyInput.value,
      author: authors || "Lorem",
    };
    await axios.patch(`http://localhost:8080/blogs/${id}`, obj);
    window.location = "index.html";
  });
});
