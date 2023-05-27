let id = new URLSearchParams(window.location.search).get("id");
let BASE_URL = "http://localhost:8080/clients";
let form = document.querySelector("form");
let itemTitle = document.querySelector("#item-title");
let itemBody = document.querySelector("#item-body");
let itemImg = document.querySelector("#item-img");
let formTitle = document.querySelector(".title-item");
let btn = document.querySelector(".btn-primary");


async function getDataById() {
    let res = await axios.get(`${BASE_URL}/${id}`);
    let data = await res.data;
    console.log(data);
    console.log(id);
    itemTitle.value = data.title;
    itemBody.value = data.body;
    itemImg.value = data.img;
  }
  getDataById()



function formtitle() {
    if (id) {
      formTitle.innerText = "Edit Card";
      btn.innerText = "Edit";
    } else {
      formTitle.innerText = "Add Card";
    }
  }
  formtitle();

  function createdCards() {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      let obj = {
        title: itemTitle.value,
        body: itemBody.value,
        img: itemImg.value,
      };
      if (id) {
        await axios.patch(`${BASE_URL}/${id}`, obj);
        window.location.href = "index.html";
      } else {
        await axios.post(BASE_URL, obj);
        window.location.href = "index.html";
      }
    });
  }
  createdCards();