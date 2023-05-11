const allCard = document.querySelector(".allCard");
const search = document.querySelector(".search")

axios("http://localhost:8080/blogs").then((res) => {
  console.log(res.data);
  drawCards(res.data);
});

function drawCards(array) {
  allCard.innerHTML = "";
  array.forEach((element) => {
    allCard.innerHTML += `<div class="cards">
    <h4>${element.title}</h4>
    <p class="text-danger">${element.body.slice(0, 200)}... <a href="details.html?id=${element.id}" class= "text-primary">Read More</a></p>
    <p class="text-secondary">${element.author}</p>
    <button class="btn btn-danger text-light" onclick= deleteData("${element.id}")>Delete</button>
    <a href="edit.html?id=${element.id}" class="btn btn-warning text-light">Edit</a>
  </div>`;
  });
}

async function deleteData(id) {
  await axios.delete(`http://localhost:8080/blogs/${id}`);
}

search.addEventListener("input", function (event) {
  axios("http://localhost:8080/blogs").then((res) => {
    const filteredUsers = res.data.filter((element) => {
      return `${element.title}`
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase());
    });
    //   console.log(filteredUsers);
    drawCards(filteredUsers);
  });
});


