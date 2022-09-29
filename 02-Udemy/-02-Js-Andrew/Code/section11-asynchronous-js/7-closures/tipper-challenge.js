// Tipper
// 1. Create createTipper which takes in the base tip (.15 for 15% tip)
// 2. Set it up to return a function that takes in the bill amount
// 3. Call createTipper to generate a few functions for different percentages
// 4. Use the generated functions to calculate tips and print then
const createTipper = (baseTip) => {
  return (amount) => {
    return baseTip * amount;
  };
};
const tip20 = createTipper(0.2);
const tip30 = createTipper(0.3);
console.log(tip20(100));
console.log(tip30(100));
