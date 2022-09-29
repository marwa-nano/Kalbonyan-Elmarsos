let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 365,
};

let otherBook = {
  title: "1985",
  author: "Geo well",
  pageCount: 865,
};

// pass an object into  a function
let getSummary = function (book) {
  console.log(`${book.title} By ${book.author}`);
};
getSummary(myBook);
getSummary(otherBook);
//////////////////////////////////////////////////

// return an object from a function
let getSummaryFn = function (book) {
  return {
    summary: `${book.title} By ${book.author}`,
    PageCountSummary: `${book.title} has  ${book.pageCount} pages long`,
  };
};
let summary = getSummaryFn(myBook);
let otherSummary = getSummaryFn(otherBook);

console.log(summary);
console.log(otherSummary.PageCountSummary);
