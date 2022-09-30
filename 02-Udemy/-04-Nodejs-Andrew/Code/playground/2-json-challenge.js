// Challenge : Work with js0N and the file system ,
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file
const fs = require("fs");
const bufferData = fs.readFileSync("2-json.json");
const jsonData = bufferData.toString();
const objectData = JSON.parse(jsonData);
// console.log(objectData.name);
objectData.name = "Marwa";
objectData.age = 28;
const jsondData = JSON.stringify(objectData);
fs.writeFileSync("2-json.json", jsondData);
