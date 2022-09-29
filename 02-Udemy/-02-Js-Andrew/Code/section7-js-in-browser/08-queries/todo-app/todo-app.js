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

const incompletedTodo = todos.filter(function (todo) {
  return !todo.completed;
});

const summary = document.createElement("h2");
summary.textContent = `You have ${incompletedTodo.length} todos left`;
document.querySelector("body").appendChild(summary);

// add a p for each todo above (use text value)
todos.forEach(function (todo) {
  const ptodo = document.createElement("p");
  ptodo.textContent = todo.text;
  document.querySelector("body").appendChild(ptodo);
});

///////////////////////////////////////////////////////
// challeng2////
// 1- add id on add todo button
// 2- target it by its id
// add click listener for that button

// listen for new todo creation
document.querySelector("#add-todobtn").addEventListener("click", function (e) {
  console.log("I'm adding a new Todo");
});
/////////////////////////////////////////////////////////
