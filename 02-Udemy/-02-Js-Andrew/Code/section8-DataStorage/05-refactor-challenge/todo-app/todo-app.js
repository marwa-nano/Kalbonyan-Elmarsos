// 1. delete dummy data
// 2. read and parse the data when the app starts up
// 3. stringify and write the data when the new data is added

// let todos = [];
const todos = getSaveTodos();

const filters = {
  searchText: "",
  hidecompleted: false,
};
// const todoSJSON = localStorage.getItem("todos");
// if (todoSJSON !== null) {
//   todos = JSON.parse(todoSJSON);
// }

// const renderTodos = function (todos, filters) {
//   const filteredTodos = todos.filter(function (todo) {
//     const searchTextMatch = todo.text
//       .toLowerCase()
//       .includes(filters.searchText.toLowerCase());
//     const hideCompletedMatch = !filters.hidecompleted || !todo.completed;
//     return searchTextMatch && hideCompletedMatch;
//   });

//   const incompletedTodo = filteredTodos.filter(function (todo) {
//     return !todo.completed;
//   });
//   document.querySelector("#todos").innerHTML = "";
//   // const summary = document.createElement("h2");
//   // summary.textContent = `You have ${incompletedTodo.length} todos left`;
//   document.querySelector("#todos").appendChild(summary);

//   // add a p for each todo above (use text value)
//   filteredTodos.forEach(function (todo) {
//     const ptodo = document.createElement("p");
//     ptodo.textContent = todo.text;
//     document.querySelector("#todos").appendChild(ptodo);
//   });
// };
renderTodos(todos, filters);

///////////////////////////////////////////////

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
  saveTodos(todos);
  //localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos, filters);
  e.target.elements.text.value = "";
});
//////////////////////////////////////////////////////////

//challenge 5////////////////////////////////
// 1. Create a checkbox and setup event listener "Hide completed"
// 2. Create new hideCompleted filter (default false)
// 3. Update hideCompleted an rerender List on checkbox change
// 4. Setup renderTodos to remove completed itens
document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    filters.hidecompleted = e.target.checked;
    renderTodos(todos, filters);
  });

////////refactoring challenge
// Fetch existing todos from localStorage
// getSavedos

// Save todos to localStorage
// saveTodos

// Render application todos based on filters
// render Todos

// Get the DOM elements for an individual note
// generateTodoDOM

// Get the DOM elements for list summary
// generateSummaryCOM
