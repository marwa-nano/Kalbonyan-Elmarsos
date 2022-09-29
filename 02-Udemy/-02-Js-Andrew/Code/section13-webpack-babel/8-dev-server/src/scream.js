// export const scream = (fname) => `${fname.toUpperCase()} !`;

///////////////////// challenge /////////////////////
// 1. Setup scream as the default export
// 2. Update the import statement in index.js to use it

const scream = (fname) => `${fname.toUpperCase()} !`;
export { scream as default };
