const tBody = document.querySelector("tBody");
const form = document.querySelector("form");
const search = document.querySelector("#searchInput");
const sort = document.querySelector("#thFirstName");
const arrowUp = document.querySelector(".arrowUp");
const arrowDown = document.querySelector(".arrowDown");
let allInputs = document.querySelectorAll(".form-control");
let notification = document.querySelectorAll(".notification");
let bool = false;
// let array = [];
// async function getData() {
//   const res = await axios.get("http://localhost:8080/users");
//   const data = res.data;
//   console.log(data);
// array = data;
//   drawTable(data);
// }

axios("http://localhost:8080/users").then((res) => {
  drawTable(res.data);
});

function drawTable(array) {
  tBody.innerHTML = "";

  //   const res = await axios.get("http://localhost:8080/users");
  //   const data = res.data;
  //   console.log(data);
  //   array = data;
  array.forEach((element) => {
    tBody.innerHTML += `
    <tr>
    <td>${element.firstname}</td>
    <td>${element.lastname}</td>
    <td>${element.email}</td>
    <td>    <a class= "form-control btn btn-warning w-25" onclick=editData("${element.id}")>Edit</a>
    
    <a class= "form-control btn btn-danger w-50" onclick=deleteData("${element.id}")>Delete</a></td>
    </tr>
    `;
  });
}
// drawTable();

search.addEventListener("input", function (event) {
  axios("http://localhost:8080/users").then((res) => {
    const filteredUsers = res.data.filter((element) => {
      return `${element.firstname} ${element.lastname}`
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase());
    });
    //   console.log(filteredUsers);
    drawTable(filteredUsers);
  });
});

sort.addEventListener("click", function () {
  bool = !bool;
  let sortData;
  if (bool) {
    axios("http://localhost:8080/users").then((res) => {
      sortData = res.data.sort((a, b) =>
        b.firstname.localeCompare(a.firstname)
      );
      arrowDown.style.display = "inline-block";
      arrowDown.style.color = "red";
      arrowUp.style.display = "none";
      drawTable(sortData);
    });
  } else {
    axios("http://localhost:8080/users").then((res) => {
      sortData = res.data.sort((a, b) =>
        a.firstname.localeCompare(b.firstname)
      );
      arrowUp.style.display = "inline-block";
      arrowUp.style.color = "green";
      arrowDown.style.display = "none";
      drawTable(sortData);
    });
  }
});

async function deleteData(id) {
  await axios.delete(`http://localhost:8080/users/${id}`);
  notification.style.display = "inline-block";
}

async function editData(id) {
  await axios(`http://localhost:8080/users/${id}`).then((res) => {
    allInputs[0].value = res.data.firstname;
    allInputs[1].value = res.data.lastname;
    allInputs[2].value = res.data.email;

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      let obj = {
        firstname: allInputs[0].value,
        lastname: allInputs[1].value,
        email: allInputs[2].value,
      };
      await axios.patch(`http://localhost:8080/users/${id}`, obj);
    });
  });
}
