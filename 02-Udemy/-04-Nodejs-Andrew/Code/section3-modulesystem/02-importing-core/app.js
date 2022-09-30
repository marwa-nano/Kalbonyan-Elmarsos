// need to load module by require fn so you can use it
const fs = require("fs");
fs.writeFileSync("notes.txt", "My name is Marwa.");
// it takes 2 args (file name ,what you want to write )

fs.appendFileSync("notes.txt", " I live in Egypt.");
/////////////////////notes/////////////////////////////
// module system ==>modules provided byh node we can use it
// may be used them by acessing them like console.log
// others may be need to load them before use them
// file system module==> module allows us to access operating systems file(read,write,create new file ,update an existing file)
// modules contain many of methods you can use them
//fs.write()==>method allows us to some data to a file on our file system from node js application
