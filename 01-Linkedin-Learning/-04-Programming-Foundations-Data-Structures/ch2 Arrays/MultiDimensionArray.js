// use Multidimension arrays is array of array => note size of each array are the same 
// create Multidimension array holds appetizers and main dishes arrays
var dinnerChoices = [["salad","soup","cheese plate"],["chicken","salmon","lazania"]]
// how to access each item in that array individual :appetizers individual,main dishes individual 
// create variable to seperate appetizers individual,main dishes individual
let appIndex = 0 // first row contains our appetizers first row at index 0
let mainDishIndex = 1 //second row containes our main dishes second row at index 1
// to access our first array appetizers 
var appArray = dinnerChoices[appIndex]
console.log(appArray)
// to access each item in first array 
let firstApp = dinnerChoices[appIndex][0]
let secondApp = dinnerChoices[appIndex][1]
let thirdApp = dinnerChoices[appIndex][2]
console.log(secondApp)
// to access our second array main dishes 
var mainDishArray = dinnerChoices[mainDishIndex]
let thirdMainDish = dinnerChoices[mainDishIndex][2]
console.log(mainDishArray)
console.log(thirdMainDish)
// we need to change item value in the array 
dinnerChoices[mainDishIndex][0] = "steak"
console.log(dinnerChoices[mainDishIndex])