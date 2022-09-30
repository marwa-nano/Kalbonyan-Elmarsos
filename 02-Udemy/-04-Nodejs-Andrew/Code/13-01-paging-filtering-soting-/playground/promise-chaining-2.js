require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("632912b5457ddf44e3092593")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

/////challenge/////////
// Goal : Mess around with promise chaining
// 1. Create promise - chaining - 2.js
// 2. Load in mongoose and task model
// 3. Remove a given task by id
// 4. Get and print the total number of incomplete tasks
// 5. Test your work !

////challenge2
// " / Goal : Use async / await
// " /
// / 1. Create deleteTaskAndCount as an async function
//      - Accept id of task to remove
// / 2. Use await to delete task and count up incomplete tasks .
// " / 3. Return the count
// / 4. Call the function and attach then / catch to log results
// / 5. Test your work !

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};
deleteTaskAndCount("632912b5457ddf44e3092593")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
