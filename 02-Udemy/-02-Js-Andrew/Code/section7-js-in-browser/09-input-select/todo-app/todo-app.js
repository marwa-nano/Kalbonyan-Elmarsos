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
