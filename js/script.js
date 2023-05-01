const toDoInputEl = document.querySelector(".to-do-input");
const toDoBtnEl = document.querySelector(".to-do-btn");
const toDoListEl = document.querySelector(".to-do-list");
const toDoFilterEl = document.querySelector(".to-do-filter");

toDoBtnEl.addEventListener("click", addToDo);
toDoListEl.addEventListener("click", deleteCheck);
toDoFilterEl.addEventListener("change", filterToDo);
document.addEventListener("DOMContentLoaded", getLocalToDos);

function addToDo() {}

function deleteCheck() {}

function filterToDo() {}

function getLocalToDos() {}
