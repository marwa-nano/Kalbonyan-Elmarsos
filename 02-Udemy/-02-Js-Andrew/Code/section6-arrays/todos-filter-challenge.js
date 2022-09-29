const todos = [
  {
    text: "wash your face",
    completed: false,
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

const getThingsTodo = todos.filter(function (todo, index) {
  return !todo.completed;
});
console.log(getThingsTodo);

//  another solution
const getThingsTodos = function (todos) {
  return todos.filter(function (todo, index) {
    return !todo.completed;
    // return todo.completed === false
  });
};
console.log(getThingsTodos(todos));
