const person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 1 }, props.name),
    React.createElement("p", { key: 2 }, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title", key: 3 }, "React is Rendered"),
    React.createElement(
      person,
      {
        name: "Marwa",
        occupation: "instractor",
        key: 4,
      },
      null
    ),
    React.createElement(
      person,
      {
        name: "Mohamed",
        occupation: "instractor",
        key: 5,
      },
      null
    ),
    React.createElement(
      person,
      {
        name: "Ahmed",
        occupation: "instractor",
        key: 6,
      },
      null
    ),
    React.createElement(
      person,
      {
        name: "Mourad",
        occupation: "instractor",
        key: 7,
      },
      null
    ),
  ]);
};
// ReactDom.render(React.createElement(App), document.getElementById("root"));

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
