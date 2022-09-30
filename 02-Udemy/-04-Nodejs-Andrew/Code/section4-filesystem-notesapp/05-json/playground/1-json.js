const fs = require("fs");
// const book = {
//   title: "how to be happy",
//   auther: "Marwa Mohamed",
// };
// const bookJson = JSON.stringify(book);
// fs.writeFileSync("1.json.json", bookJson);
//console.log(bookJson);
// bookjson is json string
// stringify return json data

//const parsedData = JSON.parse(bookJson);
//console.log(parsedData);
// parse return object

const dataBuffer = fs.readFileSync("1-json.json");
console.log(dataBuffer);
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title);
