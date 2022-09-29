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

// 1. Setup a div container in html for todos
// 2. Setup filters object (searchText) and wipe up a new filter input to change it
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

// add click listener for that button
// listen for new todo creation
document.querySelector("#add-todobtn").addEventListener("click", function (e) {
  console.log("I'm adding a new Todo");
});
/////////////////////////////////////////////////////////

// challenge 3 ////
// 1- create a new input id#newtodo placeholder type your todo here
// 2-listen to changes and print new todo text to the screen as is actually changes
// listen for todo text change

document.querySelector("#new-todo").addEventListener("input", function (e) {
  console.log(e.target.value);
});
///////////////////////////////////////////////

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});
