const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

// a component is basically a rubber stamp and we can just use it again and again
const App = () => {
  // using react to create the component
  return React.createElement("div", {}, [
    // the empty brackets are where we can put attributes for the div that we are creating
    React.createElement("h1", {}, "Adopt Me"),
    // we can put props in here and grab them where we define the Pet component
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    // as of 2018 you can add in extra commas in arrays and that is a relatively new thing in javascript and prettier does this for you
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Dog",
      breed: "Wheaten Terrier",
    }),
  ]);
};
// using reactDOM to run a function to create app and then we are telling React DOM where to put it
// JSX gets transpiled into create element functions
// your components NEED to be capitalized
ReactDOM.render(React.createElement(App), document.getElementById("root"));
