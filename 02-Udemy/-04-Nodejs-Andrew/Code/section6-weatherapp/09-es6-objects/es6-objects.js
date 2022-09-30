// object property shorthand
const name = "Andrew";
const userAge = 27;

const user = {
  //name: name,
  name,
  age: userAge,
  location: "Boston",
};
console.log(user);

// object destructuring
const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  color: "red",
};
// const label = product.label;
// const stock = product.stock;
const { label: productLabel, stock, rating = 5, color = "green" } = product;
/// console.log(label); fail
console.log(productLabel);
console.log(stock);
console.log(rating); //undefined

//const transaction = (type, myProduct) => {};
const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
