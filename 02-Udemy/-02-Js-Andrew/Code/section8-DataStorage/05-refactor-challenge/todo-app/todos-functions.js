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
  // const summary = document.createElement("h2");
  // summary.textContent = `You have ${incompletedTodo.length} todos left`;
  document
    .querySelector("#todos")
    .appendChild(generateSummaryDom(incompletedTodo));

  // add a p for each todo above (use text value)
  filteredTodos.forEach(function (todo) {
    // const ptodo = document.createElement("p");
    // ptodo.textContent = todo.text;
    document.querySelector("#todos").appendChild(generateTodoDom(todo));
  });
};

// Get the DOM elements for an individual note
// generateTodoDOM
const generateTodoDom = function (todo) {
  const ptodo = document.createElement("p");
  ptodo.textContent = todo.text;
  return ptodo;
};

// Get the DOM elements for list summary
// generateSummaryCOM
const generateSummaryDom = function (incompletedTodo) {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompletedTodo.length} todos left`;
  return summary;
};
