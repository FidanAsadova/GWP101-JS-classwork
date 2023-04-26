let body = document.querySelector("body");
let form = document.createElement("form");
let startBtn = document.createElement("button");
let p = document.createElement("p");
let labelN = document.createElement("label");
let inputN = document.createElement("input");
let labelS = document.createElement("label");
let inputS = document.createElement("input");
let inputCheckBox = document.createElement("input");
let inputCircle1 = document.createElement("input");
let inputCircle2 = document.createElement("input");
let submitBtn = document.createElement("button");
let next = document.createElement("button");

document.body.append(startBtn);
document.body.append(p);
document.body.append(form);
document.body.append(next);
form.append(labelN);
form.append(inputN);
form.append(labelS);
form.append(inputS);
form.append(inputCheckBox);
form.append(inputCircle1);
form.append(inputCircle2);
form.append(submitBtn);

startBtn.innerHTML = "Let's start...";
next.innerHTML = "Next page";
labelN.innerHTML = "<strong>Name</strong>";
labelS.innerHTML = "<strong>Surname</strong>";
submitBtn.innerHTML = "Submit";

p.style.width = "100px";
p.style.height = "25px";
p.style.border = "1px solid black";
p.style.display = "flex";
p.style.justifyContent = "center";
p.style.alignItems = "center";

form.style.height = "80vh";
form.style.border = "1px dashed black";
form.style.display = "flex";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.flexDirection = "column";
form.style.border = "1px dashed black";
form.style.gap = "10px";

inputCheckBox.setAttribute("type", "checkbox");
inputCheckBox.required = true;
inputCircle1.setAttribute("type", "radio");
inputCircle1.required = true;
inputCircle1.readOnly = true;
inputCircle1.name = "o";
inputCircle2.setAttribute("type", "radio");
inputCircle2.required = true;
inputCircle2.readOnly = true;
inputCircle2.name = "o";
submitBtn.setAttribute("type", "submit");
submitBtn.required = true;
inputN.required = true;
inputS.required = true;
submitBtn.disabled = true;
next.setAttribute("disabled", "");

inputCheckBox.addEventListener("click", function () {
  inputCheckBox.style.accentColor = "red";
});

let time = 15;
p.innerHTML = `00:${time}`;

startBtn.addEventListener("click", function () {
  submitBtn.disabled = false;
  next.disabled = true;

  let interval = setInterval(() => {
    time -= 1;
    p.innerHTML = `00:${time}`;
    if (time > 10) {
      p.style.color = "blue";
      p.style.borderColor = "blue";
    }
    if (time <= 10) {
      p.style.color = "red";
      p.style.borderColor = "red";
    }
    if (time == 0) {
      p.innerHTML = "You missed ):";
      submitBtn.disabled = false;
    }
  }, 1000);
  this.setAttribute("disabled", "true");
});

submitBtn.addEventListener("click", function () {
  time === 0;
  p.innerHTML = `00:${time}`;
  next.removeAttribute("disabled");
});

next.addEventListener("click", function () {
  alert("Finished");
});
