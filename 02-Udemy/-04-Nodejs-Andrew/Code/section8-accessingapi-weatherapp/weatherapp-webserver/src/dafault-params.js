const greeter = (name = "user", age) => {
  console.log("Hello " + name);
};

greeter("Marwa");

greeter(); // hello undefined
