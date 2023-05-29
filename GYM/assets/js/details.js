let id = new URLSearchParams(window.location.search).get("id");
let BASE_URL = "http://localhost:8090/clients";
let boxes = document.querySelector(".boxes");

async function getdata() {
  let res = await axios.get(`${BASE_URL}/${id}`);
  let data = await res.data;
  drawClients(data);
}
getdata();

function drawClients(element) {
  boxes.innerHTML = `
        <span class="col col-sm-12 col-md-6 col-lg-4">
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
                          <button class="btn btn-danger" onclick="deleteClient(${element.id},this)">Remove</button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </span>`;
}
