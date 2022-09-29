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
////////////// challenge //////////////
// you have 2 todos left(p element)

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
