const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  // useUnifiedTopology: true, unsupported
  // useCreateIndex: true,
});

//////////////endpoint api//////////////
// npm i nodemon@1.18.9 --save-dev local dependencies
// npm run dev
// $ npm i express
