const todos = [
  {
    text: "wash your face",
    completed: true,
  },
  {
    text: "take your breakfast",
    completed: false,
  },
  {
    text: "time to read",
    completed: true,
  },
  {
    text: "do your work",
    completed: false,
  },
  {
    text: "Walk the dog",
    completed: true,
  },
];

// 1. Setup a div contain for todos
// 2. Setup filters (searchText) and wipe up a new filter input to change it
// 3. Create a renderTodos function to render and rerender the latest filtered data
const filters = {
  searchText: "",
};

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const incompletedTodo = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompletedTodo.length} todos left`;
  document.querySelector("#todos").appendChild(summary);

  // add a p for each todo above (use text value)
  filteredTodos.forEach(function (todo) {
    const ptodo = document.createElement("p");
    ptodo.textContent = todo.text;
    document.querySelector("#todos").appendChild(ptodo);
  });
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});
////////////////challenge 4//////////////
// 1. Create a form with a single input for todo text // done in html
// 2. Setup an submit handler and cancel the deafult action
// 3. Add a new item to the todos array with that text data (completed value of false)
// 4. Rerender the application
// 5. Clear the input field value
document.querySelector("#new-todo").addEventListener("submit", function (e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.text.value,
    completed: false,
  });
  renderTodos(todos, filters);
  e.target.elements.text.value = "";
});
