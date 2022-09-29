"use strict";

const todos = getSaveTodos();

const filters = {
  searchText: "",
  hidecompleted: false,
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});
// 1- get a trimmed version of the input
// 2- only add a new todo if it has content
document.querySelector("#new-todo").addEventListener("submit", (e) => {
  const text = e.target.elements.text.value.trim();
  e.preventDefault();
  if (text.length > 0) {
    todos.push({
      id: uuidv4(),
      // text: text,
      text,
      completed: false,
    });

    saveTodos(todos);

    renderTodos(todos, filters);
    e.target.elements.text.value = "";
  }
});

document.querySelector("#hide-completed").addEventListener("change", (e) => {
  filters.hidecompleted = e.target.checked;
  renderTodos(todos, filters);
});
