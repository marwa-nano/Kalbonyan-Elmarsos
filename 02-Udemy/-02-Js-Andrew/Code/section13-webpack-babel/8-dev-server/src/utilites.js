// to ways to make exports
// Named export as many as you need
// Default export at most one
export const add = (a, b) => a + b;
export const name = "marwa";

const square = (x) => x * x;
// setup default export
export default square; //We now have one default export set up for utilities and we can only have one, obviously with named
// export{add,name,square as default} you can make export by this way but ou need to delete your previous setup
// have the exact same functionality
