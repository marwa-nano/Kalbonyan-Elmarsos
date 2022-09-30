const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  // useUnifiedTopology: true, unsupported
  // useCreateIndex: true,
});

//////////////endpoint api//////////////
// npm i nodemon@1.18.9 --save-dev local dependencies
// npm run dev
// $ npm i express
