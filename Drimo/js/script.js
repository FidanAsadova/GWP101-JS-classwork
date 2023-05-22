let cards = document.querySelector(".cards");
let BASE_URL = "http://localhost:8080/users";

function drawCards(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    cards.innerHTML += `
        <div class="col col-12 col-sm-6 col-lg-4 p-5">
              <div class="card" style="width: 22rem">
                <img
                  src="${element.img}"
                  class="card-img-top"
                  alt="country foto"
                />
                <div class="card-body">
                  <p class="card-text">${element.title}</p>
                  <p class="card-text">${element.body}
                  </p>
                  <p class="price">${element.price}</p>
                  <button onclick= deleteCard("${element.id}") class="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
        `;
  });
}
// drawCards()

async function getData() {
  let res = await axios.get(BASE_URL);
  let data = await res.data;
  console.log(data);
  drawCards(data);
}
getData();

async function deleteCard(id) {
  await axios.delete(`${BASE_URL}/${id}`);
}
let bool = false;
let sort = document.querySelector(".sort");

sort.addEventListener("click", async function () {
  let res = await axios.get(BASE_URL);
  let data = await res.data;
  let sorted;
  if (!bool) {
    sorted = data.sort((a, b) => a.price - b.price);
  } else {
    sorted = data.sort((a, b) => b.price - a.price);
  }
  drawCards(sorted);
  bool = !bool
});
