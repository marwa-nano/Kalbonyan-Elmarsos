// 1. Add event handler to checkbox
// 2. Modify the correct objects completed property toggleTodo
// 3. Save and rerender

// Fetch existing todos from localStorage
// getSaveTodos
"use strict";

const getSaveTodos = () => {
  const todoSJSON = localStorage.getItem("todos");
  try {
    return todoSJSON ? JSON.parse(todoSJSON) : [];
  } catch (e) {
    return [];
  }

  // if (todoSJSON !== null) {
  //   return JSON.parse(todoSJSON);
  // } else {
  //   return [];
  // }
};

// Save todos to localStorage
// saveTodos
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Render application todos based on filters
// renderTodos
const renderTodos = (todos, filters) => {
  const todoEl = document.querySelector("#todos");
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hidecompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompletedTodo = filteredTodos.filter((todo) => !todo.completed);

  todoEl.innerHTML = "";
  todoEl.appendChild(generateSummaryDom(incompletedTodo));

  if (filteredTodos.length > 0) {
    filteredTodos.forEach((todo) => {
      todoEl.appendChild(generateTodoDom(todo));
    });
  } else {
    const messageEl = document.createElement("p");
    messageEl.classList.add("empty-message");
    messageEl.textContent = "No to-dos to show";
    todoEl.appendChild(messageEl);
  }
};
// if todos to show ,render them
// else p with class="empty-message" and message "no-todos to show"
// remove todo by id
const removeTodo = function (id) {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// toggle the completed value for a given todo
const toggleTodo = (id) => {
  const todo = todos.find(function (todo) {
    return todo.id === id;
  });
  if (todo) {
    todo.completed = !todo.completed;
  }
};
// Get the DOM elements for an individual note
// generateTodoDOM
const generateTodoDom = (todo) => {
  // 1. Setup a root div
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  // 2. Setup and append a checkbox (set type attribute)
  const checkbox = document.createElement("input");
  const todoText = document.createElement("span");
  const removeButton = document.createElement("button");

  //setup todo checkbox
  // someNode.setAttribute('type','checkbox')
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo.completed;
  containerEl.appendChild(checkbox);
  checkbox.addEventListener("change", () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  // setup todo text
  // 3. Setup and append a span (set text)
  todoText.textContent = todo.text;
  containerEl.appendChild(todoText);

  // setup container
  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  // setup the remove button
  // 4. Setup and append a button (set text)
  removeButton.textContent = "remove";
  removeButton.classList.add("button", "button--text");
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
};

// Get the DOM elements for list summary
// generateSummaryCOM
// Add list-title class
// pluralize (todos) unless you have one (todo)

const generateSummaryDom = (incompletedTodo) => {
  const summary = document.createElement("h2");
  const plural = incompletedTodo.length === 1 ? "" : "s";
  summary.classList.add("list-title");
  summary.textContent = `You have ${incompletedTodo.length} todo${plural} left`;
  // if (incompletedTodo.length === 1) {
  //   summary.textContent = `You have ${incompletedTodo.length} todo left`;
  // } else {
  //   summary.textContent = `You have ${incompletedTodo.length} todos left`;
  // }
  return summary;
};
