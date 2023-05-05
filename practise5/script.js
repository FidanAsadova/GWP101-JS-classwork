let todoInput = document.querySelector("#todo-input");
let addTodo = document.querySelector(".btn-primary");
let todoList = document.querySelector(".list-group");

addTodo.disabled = true;

let editList = JSON.parse(localStorage.getItem("editList")) || [];

todoInput.addEventListener("input", function (e) {
  if (e.target.value) {
    addTodo.disabled = false;
  } else {
    addTodo.disabled = true;
  }
});

addTodo.addEventListener("click", function (e) {
  if (todoInput.value) {
    let listObj = {
      id: Date.now(),
      textTodo: todoInput.value,
    };
    editList.push(listObj);
    localStorage.setItem("todos", JSON.stringify(editList));
  }

  list();
  todoInput.value = "";
});

function list() {
  todoList.innerHTML = "";
  editList.forEach((item) => {
    todoList.innerHTML += `
          <li
                class="list-group-item list-group-item-info my-2 d-flex justify-content-between align-items-center rounded"
              >
              <input type="checkbox" class="check" onclick=checkTodo(${item.id})>  
              <span class="">${item.textTodo}</span>
                <div>
                  <button type="button" class="btn btn-success onclick=editTodo(${item.id})">
                    Edit
                  </button>
                  <button type="button" class="btn btn-danger deleteBtn" onclick=removeTodo(${item.id})>
                    Delete
                  </button>
                </div>
              </li>`;
  });
  todoInput.value = "";
}

function removeTodo(id) {
  editList = editList.filter((el) => el.id != id);
  localStorage.setItem("todos", JSON.stringify(editList));
  list();
}

let editBtn = document.querySelector(".btn-success");
let check = document.querySelector(".check");

// function editTodo(id) {
//   console.log('ssss');
//   if(editList = editList.find((el) => el.id == id)){
//     editList.textTodo==todoInput.value
//   }
//   localStorage.setItem("todos", JSON.stringify(editList));
//   list();
// }
// editTodo()

// todoInput.value = "";
// addTodo.disabled = true;
