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

//   saveLocalToDos(toDoInputEl.value);

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

function deleteCheck() {}

function filterToDo() {}

function getLocalToDos() {}
