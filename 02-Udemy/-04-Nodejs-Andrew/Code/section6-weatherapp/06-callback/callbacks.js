setTimeout(() => {
  console.log("2 sec time out");
}, 2000);

const names = ["Andrew", "Mike", "jen", "jess"];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 2000);
};
geocode("cairo", (data) => {
  console.log(data);
});
