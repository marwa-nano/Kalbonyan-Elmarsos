// 1. Wire up button event
// 2. move todo by id
// 3. Save and rerender the todos list

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

// remove todo by id
const removeTodo = function (id) {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id;
  });
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// Get the DOM elements for an individual note
// generateTodoDOM
const generateTodoDom = function (todo) {
  // 1. Setup a root div
  const todoEl = document.createElement("div");
  // 2. Setup and append a checkbox (set type attribute)
  const checkbox = document.createElement("input");
  const todoText = document.createElement("span");
  const removeButton = document.createElement("button");

  //setup todo checkbox
  // someNode.setAttribute('type','checkbox')
  checkbox.setAttribute("type", "checkbox");
  todoEl.appendChild(checkbox);

  // setup todo text
  // 3. Setup and append a span (set text)
  todoText.textContent = todo.text;
  todoEl.appendChild(todoText);

  // setup the remove button
  // 4. Setup and append a button (set text)
  removeButton.textContent = "x";
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", function () {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
};

// Get the DOM elements for list summary
// generateSummaryCOM
const generateSummaryDom = function (incompletedTodo) {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompletedTodo.length} todos left`;
  return summary;
};
