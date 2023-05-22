let tBody = document.querySelector("tbody");
let allCards = document.querySelector(".allCards");
let BASE_URL = "http://localhost:8080/users";



function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((element) => {
    tBody.innerHTML += `
    <tr>
              <td>${element.id}</td>
              <td>
                <img
                  class="rounded-circle"
                  src=""
                  alt=""
                />
              </td>
              <td>${element.firstname}</td>
              <td>${element.lastname}</td>
              <td>${element.email}</td>
              <td>${element.date}</td>
              <td>
                <a class="btn btn-success" href="user.html?id=${element.id}">Edit</a>
                <a class="btn btn-danger" href="" onclick= deleteUser("${element.id}")>Delete</a>
                <a class="ms-4 likeIcon" href="" onclick= addFavUser('${element.id}')><i class="fa-solid fa-heart" id=${element.id} style="color: red;"></i></a>
              </td>
            </tr>
    `;
  });
}

getData();

async function deleteUser(id) {
  await axios.delete(`${BASE_URL}/${id}`);
}

function drawCards(arr) {
  allCards.innerHTML = "";
  arr.forEach((element) => {
    allCards.innerHTML += `
    <div class="card">
            <div class="top">
              <span class="id">Id:${element.id}</span>
              <span class="date">${element.date}</span>
            </div>
            <div class="bottom">
              <div class="img">
                <img
                  class="rounded-circle"
                  src=""
                  alt="foto"
                />
              </div>
              <div class="test-text">
                <span>${element.firstname} ${element.lastname}</span>
                <span>${element.email}</span>
              </div>
              <div class="buttons">
                <a class="btn btn-success" href="user.html?id=${element.id}">Edit</a>
                <a class="btn btn-danger" href="" onclick= deleteCard("${element.id}")>Delete</a>
              </div>
            </div>
          </div>
    `;
  });
}

// async function deleteCard(id) {
//   await axios.delete(`${BASE_URL}/${id}`);
// }

async function getData() {
  let res = await axios.get(BASE_URL);
  let data = await res.data;
  console.log(data);
  drawTable(data);
  drawCards(data);
}




// function addFavUser(id) {
//   const res = axios.get(`${BASE_URL}/${id}`);
//   const data = res.data;
// }



const favUsers = JSON.parse(localStorage.getItem("fav-users")) || [];

function addFavUser(id) {
  const res = axios.get(`${BASE_URL}/${id}`);
  const data = res.data;
  console.log(id);

  let favUser = favUsers.find((user) => user.id === data.id);


  if (!favUser) {
    favUsers.push(data);
    console.log(data);
    localStorage.setItem("fav-users", JSON.stringify(favUsers));
  } else {
    alert("Character already exists in favorite list!");
  }
}





