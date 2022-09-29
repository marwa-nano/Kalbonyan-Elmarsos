// js create leaked global variable when you assign a value to a variable was never explicity defined , you must use let to define variables to avoid leaked global variable

//let fName = "Ahmed";

if (true) {
  //let fName = "Marwa";
  if (true) {
    fName = "Aser";
    console.log(fName);
  }
}
if (true) {
  console.log(fName);
}

if (true) {
  //let fName = "Marwa";
  if (true) {
    let fName = "Sedra";
    console.log(fName);
  }
}
if (true) {
  console.log(fName);
}
