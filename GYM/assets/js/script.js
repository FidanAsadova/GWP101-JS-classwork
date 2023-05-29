let BASE_URL = "http://localhost:8090/clients";
let BASE_URL_fav = "http://localhost:8090/fav";
let boxes = document.querySelector(".boxes");
let bool = false;
let sort = document.querySelector(".sort");
let load = document.querySelector(".load");
let menu = document.querySelector(".nav-menu");
let menuDiv = document.querySelector(".menu-icon")
let search = document.querySelector("#search");
let num = 3;

menu.addEventListener("click", function(e){
  e.preventDefault()
  menuDiv.classList.toggle("showmenu")
})

async function getdata() {
  let res = await axios.get(BASE_URL);
  let data = await res.data;
  drawClients(data);
}
getdata();

function drawClients(arr) {
  boxes.innerHTML = "";
  arr.slice(0, num).forEach((element) => {
    boxes.innerHTML += `
    <span class="col col-sm-12 col-md-6 col-lg-4 mb-5">
              <div class="box d-flex flex-column p-4">
                <div class="img d-flex justify-content-center">
                  <img src="${element.img}" alt="" />
                </div>
                <div class="box-items">
                  <p class="box-title text-center pt-4 fw-bolder">${element.title}</p>
                  <p class="box-body text-center text-secondary">${element.body}</p>
                </div>
                <div class="btns">
                  <div class="row">
                    <div class="col col-6 d-flex flex-column gap-1 mb-2">
                      <a href="add-edit.html?id=${element.id}" class="btn btn-success">Edit</a>
                      <button class="btn btn-danger" onclick="deleteClient(${element.id},this)">Delete</button>
                    </div>
                    <div class="col col-6 d-flex flex-column gap-1">
                      <a href="#" class="btn btn-primary" onclick="favClients(${element.id})">Favorite</a>
                      <a href="details.html?id=${element.id}" class="btn btn-warning">Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </span>`;
  });
}

search.addEventListener("input", async function (e) {
  let res = await axios.get(BASE_URL);
  let data = await res.data;
  let searchTitle = data.filter((item) => {
    return `${item.title}`
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  drawClients(searchTitle);
});

sort.addEventListener("click", async function () {
  let sorted;
  let res = await axios.get(BASE_URL);
  let data = await res.data;
  if (!bool) {
    sorted = data.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    sorted = data.sort((a, b) => b.title.localeCompare(a.title));
  }
  drawClients(sorted);
  bool = !bool;
});

async function deleteClient(id, btn) {
  await axios.delete(`${BASE_URL}/${id}`);
  btn.closest("span").remove();
}

async function favClients(favId) {
  console.log(favId);
  let res = await axios.get(`${BASE_URL}/${favId}`);
  let obj = await res.data;
  console.log(obj);
  await axios.post("http://localhost:8080/fav", obj);
}
// favClients();

load.addEventListener("click", async function (e) {
  e.preventDefault();
  num = num + 3;
  getdata();
});

