let id = new URLSearchParams(window.location.search).get("id");
let allCard = document.querySelector(".allCards");



axios(`http://localhost:8080/blogs/${id}`).then((res) => {
  console.log(res.data);
  allCard.innerHTML=`
  <div class="cards">
    <h4>${res.data.title}</h4>
    <p class="text-danger">${res.data.body}</p>
    <p class="text-secondary">${res.data.author}</p>
  </div>`
});
