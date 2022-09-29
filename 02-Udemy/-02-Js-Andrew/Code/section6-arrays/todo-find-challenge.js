// const todos = [
//   "wash your face",
//   " take your break fast",
//   "time to read",
//   "do your work",
//   "Walk the dog",
// ];
/////////////////////////////////

//1. convert array to array of objects -> text,completed
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
    completed: false,
  },
];

//2. create function to remove a todo by text value
const deleteTodo = function (todos, todotext) {
  const index = todos.findIndex(function (todo, index) {
    return todo.text.toLowerCase() === todotext.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

deleteTodo(todos, "walk the dog");
console.log(todos);
