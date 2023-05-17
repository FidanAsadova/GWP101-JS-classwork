let id = new URLSearchParams(window.location.search).get("id");
let BASE_URL = "http://localhost:8080/users";
let form = document.querySelector("form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let photo = document.querySelector("#photo");
let btnSuccess = document.querySelector(".btn-success");
let allInput = document.querySelector(".form-control");
let title = document.querySelector(".title");

async function getData() {
  let res = await axios.get(`${BASE_URL}/${id}`);
  let data = await res.data;
  console.log(data);
  firstName.value = data.firstname;
  lastName.value = data.lastname;
  email.value = data.email;
  // drawTable(data);
}
getData();

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let date = new Date().toDateString();
  let obj = {
    firstname: firstName.value,
    lastname: lastName.value,
    email: email.value,
    photo: `./img/${photo.value.split("\\")[2]}`,
    date: date,
  };
  if (id) {
    btnSuccess.innerHTML = `Edit`;
    title.innerHTML = `Edit User`;
    getData();
    axios.patch(`${BASE_URL}/${id}`, obj);
  } else {
    // getData();
    axios.post(BASE_URL, obj);
  }
  //   console.log(photo.value);
    window.location = "index.html";
});

// form.addEventListener('input', function(){
//     btnSuccess.innerHTML = `Edit`;
//     title.innerHTML = `Edit User`;
// })
