// Named export
// Default export

const add = (a, b) => a + b

const name = 'Mike'

const square = (x) => x * x
console.log('from my code')
export { add, name, square as default }