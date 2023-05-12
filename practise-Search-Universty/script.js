let search = document.querySelector("#search");
let tbody = document.querySelector("tbody");
let spinner = document.querySelector(".color-spinner");

let BASE_URL = "http://universities.hipolabs.com/search?country=azerbaijan";

axios(BASE_URL).then((res) => drawTable(res.data));

window.onload = function () {
  tbody.innerHTML = "";
  spinner.style.display = "flex";
  axios("http://universities.hipolabs.com/search?country=azerbaijan").then(
    (res) => {
      spinner.style.display = "none";
      drawTable(res.data);
    }
  );
};

search.addEventListener("input", function (e) {
  tbody.innerHTML = "";
  spinner.style.display = "flex";
  axios(
    `http://universities.hipolabs.com/search?country=azerbaijan&name=${e.target.value}`
  ).then((res) => {
    spinner.style.display = "none";
    drawTable(res.data);
  });
});

function drawTable(array) {
  tbody.innerHTML = "";
  array.forEach((element) => {
    tbody.innerHTML += `
    <tr>
                  <th scope="row">${element.name}</th>
                  <td>${element.country}</td>
                  <td>${element.domains[0]}</td>
                  <td><a href="${element.web_pages[0]} ${element.domains[0]}" target="_blank">${element.web_pages[0]}</a></td>
                </tr>
    `;
  });
}
