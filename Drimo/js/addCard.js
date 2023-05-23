let BASE_URL = "http://localhost:8080/users";
let cardtitle = document.querySelector("#cardtitle");
let cardbody = document.querySelector("#cardbody");
let price = document.querySelector("#price");
let img = document.querySelector("#img");
let form = document.querySelector("form");

function createdCard() {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    let obj = {
      title: cardtitle.value,
      body: cardbody.value,
      price: price.value,
      img: img.value,
    };
    await axios.post(BASE_URL, obj);
  });
//   window.location = "index.html"
}
createdCard();
