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

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed) {
      return -1;
    } else if (!b.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};
sortTodos(todos);
console.log(todos);

// another solution
// const sortTodos = function (todos) {
//   todos.sort(function (a, b) {
//     if (!a.completed && b.completed) {
//       return -1;
//     } else if (!b.completed && a.completed) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// };

// !a.completed && b.completed is eual to (a.completed === false && b.completed === true)
