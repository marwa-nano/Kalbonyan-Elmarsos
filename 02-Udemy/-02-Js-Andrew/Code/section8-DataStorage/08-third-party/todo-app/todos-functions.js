// Fetch existing todos from localStorage
// getSaveTodos
const getSaveTodos = function () {
  const todoSJSON = localStorage.getItem("todos");
  if (todoSJSON !== null) {
    return JSON.parse(todoSJSON);
  } else {
    return [];
  }
};

// Save todos to localStorage
// saveTodos
const saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Render application todos based on filters
// renderTodos
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hidecompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompletedTodo = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });
  document.querySelector("#todos").innerHTML = "";
  document
    .querySelector("#todos")
    .appendChild(generateSummaryDom(incompletedTodo));

  filteredTodos.forEach(function (todo) {
    document.querySelector("#todos").appendChild(generateTodoDom(todo));
  });
};

// 1. Setup a root div
// 2. Setup and append a checkbox (set type attribute)
// someNode.setAttribute('type','checkbox')
// 3. Setup and append a span (set text)
// 4. Setup and append a button (set text)

// Get the DOM elements for an individual note
// generateTodoDOM
const generateTodoDom = function (todo) {
  const todoEl = document.createElement("div");
  const checkbox = document.createElement("input");
  const todoText = document.createElement("span");
  const removeButton = document.createElement("button");

  //setup todo checkbox
  checkbox.setAttribute("type", "checkbox");
  todoEl.appendChild(checkbox);

  // setup todo text
  todoText.textContent = todo.text;
  todoEl.appendChild(todoText);

  // setup the remove button
  removeButton.textContent = "x";
  todoEl.appendChild(removeButton);

  return todoEl;
};

// Get the DOM elements for list summary
// generateSummaryCOM
const generateSummaryDom = function (incompletedTodo) {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompletedTodo.length} todos left`;
  return summary;
};
