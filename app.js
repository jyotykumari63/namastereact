const el = React.createElement(
  "div",
  {
    id: "heading",
  },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h2", { id: "h2" }, "child h1"),
      React.createElement("h2", { id: "h3" }, "child h2"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h2", { id: "h2" }, "child h1"),
      React.createElement("h2", { id: "h3" }, "child h2"),
    ]),
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(el);
root.render(el);
