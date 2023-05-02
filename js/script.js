const toDoInputEl = document.querySelector(".to-do-input");
const toDoBtnEl = document.querySelector(".to-do-btn");
const toDoListEl = document.querySelector(".to-do-list");
const toDoFilterEl = document.querySelector(".to-do-filter");

toDoBtnEl.addEventListener("click", addToDo);
toDoListEl.addEventListener("click", deleteCheck);
toDoFilterEl.addEventListener("change", filterToDo);
document.addEventListener("DOMContentLoaded", getLocalToDos);

function addToDo(event) {
  event.preventDefault();

  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("to-do");
  const newToDo = document.createElement("li");
  newToDo.innerText = toDoInputEl.value;
  newToDo.classList.add("to-do-item");
  toDoDiv.appendChild(newToDo);

  saveLocalToDos(toDoInputEl.value);

  const comletedBtn = document.createElement("button");
  comletedBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
  comletedBtn.classList.add("complete-btn");
  toDoDiv.appendChild(comletedBtn);

  const trashBtn = document.createElement("btn");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add("trash-btn");
  toDoDiv.appendChild(trashBtn);

  toDoListEl.appendChild(toDoDiv);
  toDoInputEl.value = "";
}

function deleteCheck(event) {
  const item = event.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("slide");
    removeLocalToDos(todo);

    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  } else if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterToDo(event) {
  const todos = toDoListEl.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "incomplete":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalToDos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getLocalToDos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todo.forEach(function (todo) {
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("to-do");
    const newToDo = document.createElement("li");
    newToDo.innerText = todo;
    newToDo.classList.add("to-do-item");
    toDoDiv.appendChild(newToDo);

    const comletedBtn = document.createElement("button");
    comletedBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
    comletedBtn.classList.add("complete-btn");
    toDoDiv.appendChild(comletedBtn);

    const trashBtn = document.createElement("btn");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    toDoDiv.appendChild(trashBtn);

    toDoListEl.appendChild(toDoDiv);
  });
}
function removeLocalToDos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const toDoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(toDoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
