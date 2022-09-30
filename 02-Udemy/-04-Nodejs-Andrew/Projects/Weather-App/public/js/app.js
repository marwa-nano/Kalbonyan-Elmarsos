console.log("client side javascript is loaded");

const weatherForm = document.querySelector("form");
const searchEl = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = searchEl.value;
  messageOne.textContent = "Loading....";
  messageTwo.textContent = "";

  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        //console.log(data.error);
        messageOne.textContent = data.error;
      } else {
        //console.log(data.location);
        //console.log(data.forecast);
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});

// Goal : Fetch weather !
// 1- setup a call to fetch to fetch weather for Boston
// 2. Get the parse JSON response
//  - If error property , print error
//  - If no error property , print location and forecast
// 3. Refresh the browser and test your work
