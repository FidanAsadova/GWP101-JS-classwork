const boxes = document.querySelector("#boxes");

async function drawBoxes() {
  const res = await fetch("https://northwind.vercel.app/api/orders/");
  const data = await res.json();
  data.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("box", "col-5", "rounded", "p-4");
    box.innerHTML = `
        <div class = "d-flex justify-content-around">
      <div>
        <h4>${item.shipAddress?.city}</h4>
        <p>${item.shipAddress?.country}</p>
      </div>
      <div class="gap-5">
        <i class="fa-solid fa-pen" style="color: darkgreen"></i>
        <i class="fa-solid fa-trash-can" style="color: darkred"></i>
      </div>
    </div>
        `;
    boxes.append(box);
  });
}
drawBoxes();
