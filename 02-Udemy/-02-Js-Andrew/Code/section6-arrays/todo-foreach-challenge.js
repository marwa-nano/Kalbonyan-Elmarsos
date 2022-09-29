const todos = [
  "wash your face",
  "take your break fast",
  "time to read",
  "do your work",
  "Walk the dog",
];
console.log(`you have ${todos.length} todos`);

todos.forEach(function (item, index) {
  console.log(`${index + 1}. ${item}`);
});

for (let count = 0; count < todos.length; count++) {
  console.log(`${count + 1}. ${todos[count]}`);
}
