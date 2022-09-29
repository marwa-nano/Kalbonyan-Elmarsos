/////////////// challenge area ////////////////////////
// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list
const todos = [
  "wash your face",
  " take your break fast",
  "time to read",
  "do your work",
  "Walk the dog",
];
todos.splice(2, 1);
console.log(todos);

todos.push("my last to do");
console.log(todos);

todos.shift();
console.log(todos);
